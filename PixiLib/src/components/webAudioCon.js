import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
import CircleMaskCon from "../UI/circleMaskCon.js"
import GraphicsSprite, { GraphicTexture, LineSprte } from "../UI/graphicSprite.js"
import ButtonHandler from "../UI/Button.js"
import Player from "../sound/Player.js"
import { ListenPopUpLong, ListenPopUpShort } from "../UI/ListenPopup.js"
import Data from "../DC/data.js"
/* 
사용자페이지의 스토리 듣기 메뉴 컨테이너
*/
export default class WebAudioCon extends PIXI.UI.Container {
  //음성파일과 관련된 데이타, 젠체 페이지수, 현재페이지수, 이전페이지버튼, 이후페이지버튼 , 상태 받아옴
  constructor (data, numPages, num, LeftBtn, RightBtn, highlighter, state = 1) {
    const ratioY = Manager.ratioY
    super("100%", 902 * ratioY)
    this.state = state
    this.anchorTop = 51 * ratioY
    this.representationImg()
    this.someButtons()
    this.MakeprogressBar()
    this.listenToAll()
    this.page = numPages - 1
    this.nowPage = num - 1
    this.idxArray = data.idx
    this.highlighter = highlighter

    //플레이 리스트가 없다면 플레이어는 생성하지 않는다.
    if (data.playlist.length === 0) return
    this.player = new Player(
      data.playlist,
      { flag: false },
      this.audio_progress,
      this.pauseBtn,
      this.playBtn,
      this.duration,
      this.timer,
      LeftBtn,
      RightBtn,
      this.nowPage,
      highlighter,
      this.idxArray,
    )
    this.setHowler()
    this.container.on("pause", () => {
      try {
        this.player.pause()
      } catch (error) {}
    })
  }

  //페이지 이동되면 음성파일 인덱스도 변경해준다.
  updateIndex (num) {
    let nowPage = num - 1
    if (this.player === undefined) return
    this.player.nowPage = nowPage

    this.player.skipTo(this.idxArray[nowPage], 1)
  }

  //음성파일 조작시 필요한 이벤트들 모아둠
  setHowler () {
    this.player.play(false)
    this.playBtn.sprite.on("click", () => {
      let now = document.getElementById("page_input").textContent - 1
      // console.log(now,"now/????")
      let idx = this.idxArray[now]
      // console.log("idx!!!???:", idx)
      // console.log("this.player.gs ",this.player.gs)
      if (idx === null) return
      if (this.player.gs === 1) {
        // console.log("play gs :1")
        this.player.gs = 3
        this.updateIndex(now + 1)
      }
      // console.log("play gs?", this.player.gs)
      // this.player.index= idx
      this.player.play(true, this.player.index)
    })
    this.pauseBtn.sprite.on("click", () => {
      this.player.pause()
    })
    this.prevBtn.sprite.on("click", () => {
      this.player.skip("prev")
    })
    this.nextBtn.sprite.on("click", () => {
      this.player.skip("next")
      
      // console.log("this.player.gs ",this.player.gs)
      // if (this.player.gs === 1) {
      //   console.log("2?")
      //   this.player.gs = 2
      // }
    })

    this.before10.sprite.on("click", () => {
      this.player.seek(-10)
    })
    this.after10.sprite.on("click", () => {
      this.player.seek(10)
    })
    let firstPage
    for (let i = 0; i < this.idxArray.length; i++) {
      const element = this.idxArray[i]
      if (element === 0) {
        firstPage = i + 1
        break
      }
    }
    let listpopup = new ListenPopUpLong(
      "현재 페이지부터 듣기",
      "처음부터 듣기",
      () => {
        let data = this.player.playlist[this.player.index]
        let sound = data.howl
        this.player.total.flag = true
        if (this.state) {
          Manager.currentScene.con.container.emit("goFirst", firstPage)
          return
        }
        if (this.player.index == 0) sound.seek(0)
        else this.player.skipTo(0)
      },
      () => {
        let now = document.getElementById("page_input").textContent - 1
        this.player.total.flag = true
        let data = this.player.playlist[this.player.index]
        let sound = data.howl
        if (this.idxArray[now] === null) {
          Manager.currentScene.con.container.emit("goFirst", firstPage)
          return
        }
        sound.seek(0)
      },
      "전체듣기를 시작할까요?",
    )
    this.allBtn.onClick(() => {
      this.parent.parent.parent.addChild(listpopup)
    })

    let speedInput = document.getElementById("speed_input")
    speedInput.textContent = 1
    this.slowDownBtn.button.on("click", () => {
      this.slowDownBtn.backgroundColor = Enum.color.red
      this.speedOrigin.backgroundColor = Enum.color.vividGray
      this.speedUpBtn.backgroundColor = Enum.color.vividGray
      speedInput.textContent = 0.8
      this.player.speed(0.8)
    })
    this.speedOrigin.button.on("click", () => {
      this.slowDownBtn.backgroundColor = Enum.color.vividGray
      this.speedOrigin.backgroundColor = Enum.color.red
      this.speedUpBtn.backgroundColor = Enum.color.vividGray
      speedInput.textContent = 1
      this.player.speed(1)
    })
    this.speedUpBtn.button.on("click", () => {
      this.slowDownBtn.backgroundColor = Enum.color.vividGray
      this.speedOrigin.backgroundColor = Enum.color.vividGray
      this.speedUpBtn.backgroundColor = Enum.color.red
      speedInput.textContent = 1.2
      this.player.speed(1.2)
    })
  }

  // 전체듣기 버튼
  listenToAll () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let allBtn = new ButtonHandler({
      lineColor: 0xb4b4b4,
      line: 1.5,
      rounded: 6,
      width: 168 * ratioX,
      height: 36 * ratioY,
      text: { name: "    전체듣기", style: Enum.fontstyle.Black14_R },
    })
    let alltexture = new PIXI.Texture.from("listenAll"),
      all = new PIXI.UI.Sprite(alltexture)
    all.width = 17 * ratioX
    all.height = 13 * ratioY
    allBtn.button.addChild(all)
    allBtn.button.anchorBottom = 440 * ratioY
    allBtn.button.horizontalAlign = "center"
    all.verticalAlign = "middle"
    all.anchorLeft = 37 * ratioX
    this.allBtn = allBtn
    this.addChild(allBtn.button)
  }

  //듣기 제어하는 여러 버튼들
  someButtons () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let beforeT = new PIXI.Texture.from("before10"),
      afterT = new PIXI.Texture.from("after10"),
      pauseT = new PIXI.Texture.from("audio_pause"),
      playT = new PIXI.Texture.from("audio_play"),
      prevT = new PIXI.Texture.from("audio_prev"),
      nextT = new PIXI.Texture.from("audio_next")

    let prevBtn = new PIXI.UI.Sprite(prevT)
    let playBtn = new PIXI.UI.Sprite(playT)
    let nextBtn = new PIXI.UI.Sprite(nextT)
    let before10 = new PIXI.UI.Sprite(beforeT)
    let after10 = new PIXI.UI.Sprite(afterT)
    let pauseBtn = new PIXI.UI.Sprite(pauseT)

    prevBtn.sprite.interactive = prevBtn.sprite.buttonMode = playBtn.sprite.interactive = playBtn.sprite.buttonMode = nextBtn.sprite.interactive = nextBtn.sprite.buttonMode = before10.sprite.interactive = before10.sprite.buttonMode = after10.sprite.interactive = after10.sprite.buttonMode = pauseBtn.sprite.interactive = pauseBtn.sprite.buttonMode = true
    prevBtn.width = 23 * ratioX
    prevBtn.height = 26 * ratioY
    prevBtn.anchorLeft = 20 * ratioX
    prevBtn.anchorTop = 249 * ratioY
    playBtn.width = playBtn.height = 56 * ratioX
    playBtn.horizontalAlign = "center"
    playBtn.anchorTop = 234 * ratioY
    pauseBtn.width = pauseBtn.height = 56 * ratioX
    pauseBtn.horizontalAlign = "center"
    pauseBtn.anchorTop = 234 * ratioY
    nextBtn.width = 23 * ratioX
    nextBtn.height = 26 * ratioY
    nextBtn.anchorRight = 20 * ratioX
    nextBtn.anchorTop = 249 * ratioY
    before10.width = before10.height = 37 * ratioX
    before10.anchorLeft = 18 * ratioX
    before10.anchorTop = 300 * ratioY
    after10.width = after10.height = 37 * ratioX
    after10.anchorRight = 18 * ratioX
    after10.anchorTop = 300 * ratioY
    pauseBtn.visible = false

    let backTexture = new PIXI.Texture.from("speedBtn")
    let makeSpeedBtn = (text, click) => {
      let speedBackground = new PIXI.UI.Sprite(backTexture)
      let speed = new ButtonHandler({
        background: speedBackground,
        width: 55 * ratioX,
        height: 30 * ratioY,
        text: { name : text, style: Enum.fontstyle.White15_R },
      })
      speed.click = click
      speed.button.anchorTop = 365 * ratioY
      speed.backgroundColor = speed.click ? Enum.color.red : Enum.color.vividGray
      return speed
    }

    let slowDownBtn = makeSpeedBtn("0.8x", false)
    let speedOrigin = makeSpeedBtn("1x", true)
    let speedUpBtn = makeSpeedBtn("1.2x", false)
    slowDownBtn.button.anchorLeft = 12 * ratioX
    speedOrigin.button.horizontalAlign = "center"
    speedUpBtn.button.anchorRight = 12 * ratioX
    this.slowDownBtn = slowDownBtn
    this.speedOrigin = speedOrigin
    this.speedUpBtn = speedUpBtn
    this.prevBtn = prevBtn
    this.playBtn = playBtn
    this.pauseBtn = pauseBtn
    this.nextBtn = nextBtn
    this.before10 = before10
    this.after10 = after10

    this.addChild(
      prevBtn,
      playBtn,
      nextBtn,
      pauseBtn,
      slowDownBtn.button,
      speedOrigin.button,
      speedUpBtn.button,
      before10,
      after10
    )
  }

  //스토리 듣기에 나오는 대표이미지 생성
  representationImg () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY

    let background = new LineSprte(199 * ratioX, 220 * ratioY,Enum.color.lightGray)
    let shadow = new LineSprte(199 * ratioX, 2, Enum.color.Gray)
    background.anchorLeft = 1 * ratioX
    background.anchorTop = 10 * ratioY
    let size = 130 * ratioX
    let circleCon = new CircleMaskCon(size, size),
      t = Data.thumb_texture || PIXI.Texture.WHITE,
      img = new PIXI.UI.Sprite(t)
    img.width = img.height = "100%"
    circleCon.addChild(img)
    circleCon.horizontalAlign = "center"
    circleCon.anchorTop = 22 * ratioY
    shadow.alpha = 0.5
    shadow.anchorBottom = 0
    background.addChild(shadow,circleCon)
    this.addChild(background)
  }

  MakeprogressBar () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY

    let graphic = new PIXI.Graphics()
    graphic.lineStyle(1, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, 170 * ratioX, 12 * ratioY, 6)
    graphic.endFill()

    let track = new GraphicsSprite(graphic)
    let barTexture = new GraphicTexture(graphic)
    let bar = new PIXI.UI.SliceSprite(barTexture, 2)
    track.tint = Enum.color.Gray
    bar.tint = Enum.color.red
    let duration = new PIXI.UI.Text("0:00", Enum.fontstyle.Black15_R)
    let timer = new PIXI.UI.Text("0:00", Enum.fontstyle.Black15_R)
    track.addChild(duration, timer, bar)
    bar.width = 0
    duration.anchorTop = timer.anchorTop = 16 * ratioY
    duration.anchorRight = 0
    track.anchorTop = 182 * ratioY
    track.horizontalAlign = "center"
    this.timer = timer
    this.duration = duration
    this.audio_progress = bar

    this.addChild(track)
  }
}
