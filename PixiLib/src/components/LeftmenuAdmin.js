import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
import GraphicsSprite, { StrokeSquare, LineSprte } from "../UI/graphicSprite.js"
import ButtonHandler from "../UI/Button.js"
import Data from "../DC/data.js"
import { dragSprite } from "./dragSprite.js"
import { DeletePopUp } from "./deletePopUp.js"
let _baseSelect
let _cardBaseSelect



/* 
leftmenuAdmin
저작도구 왼쪽에
그림단어와 음성이 있는 메뉴
*/
export default class LeftMenuAdmin extends PIXI.UI.Sprite {
  constructor () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let graphic = new PIXI.Graphics()
    graphic.lineStyle(1, Enum.color.bgBox)
    graphic.beginFill(Enum.color.bgBox)
    graphic.drawRect(0, 0, 221 * ratioX, window.innerHeight)
    graphic.endFill()

    super(PIXI.Texture.EMPTY)
    this.back = new GraphicsSprite(graphic)
    graphic.clear()
    graphic.lineStyle(1, Enum.color.white)
    graphic.beginFill(Enum.color.white)
    graphic.drawRect(0, 0, 270 * ratioX, window.innerHeight)
    graphic.endFill()

    this.startClick = false

    this.listcon = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
    this.filter = new GraphicsSprite(graphic)
    this.filter.alpha = 0.5
    this.width = 270 * ratioX
    this.height = "100%"
    this.back.heigth = "100%"
    let verticalLine = new LineSprte(1, 1020 * ratioY, Enum.color.line)
    verticalLine.anchorLeft = 210 * ratioX
    verticalLine.anchorBottom = 0
    this.picture = this.makeTitleSprite("그림단어")
    this.voice = this.makeTitleSprite("음성")
    this.listcon.heigth = "100%"
    graphic.clear()
    graphic.lineStyle(2, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, 10, 10, 10)
    graphic.endFill()
    let t = Manager.app.renderer.generateTexture(graphic)
    let ScrollingContainer = new PIXI.UI.ScrollingContainer({
      scrollX: false,
      scrollY: true,
    })
    ScrollingContainer.width = "100%"
    ScrollingContainer.height = "102%"
    ScrollingContainer.anchorTop = 61 * ratioY
    ScrollingContainer.dragThreshold = 5
    ScrollingContainer.dragRestrictAxis = "y"
    ScrollingContainer.addChild(this.listcon)
    ScrollingContainer.on("dragStart", function () {})

    ScrollingContainer.on("dragEnd", function () {})

    let ScrollBar = new PIXI.UI.ScrollBar({
      track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
      handle: new PIXI.UI.SliceSprite(t, 5),
      vertical: true,
      scrollingContainer: ScrollingContainer,
      autohide: true,
    })
    ScrollBar.track.alpha = 0
    ScrollBar.handle.width = 8 * ratioX
    ScrollBar.anchorTop = 61 * ratioY
    ScrollBar.anchorLeft = 208 * ratioX
    ScrollBar.anchorBottom = 0
    ScrollBar.handle.tint = Enum.color.green
    this.ScrollingContainer = ScrollingContainer

    this.picture.sprite.on("show", e => {
      if (!this._cardContainer) return
      if (e) {
        this.picture.addChild(this._cardContainer)
        this.picture.height = 45 * ratioY + this._cardContainer.height
      } else {
        this.picture.removeChild(this._cardContainer)
        this.picture.height = 45 * ratioY
      }
      this.sort()
    })
    this.voice.sprite.on("show", e => {
      if (!this._audioContainer) return
      if (e) {
        this.voice.addChild(this._audioContainer)
        this.voice.height = 45 * ratioY + this._audioContainer.height
      } else {
        this.voice.removeChild(this._audioContainer)
        this.voice.height = 45 * ratioY
      }
      this.sort()
    })

    this.voice.y = this.picture.y + this.picture.height
    this.listcon.addChild(this.picture, this.voice)
    this.addChild(this.back, verticalLine, ScrollBar, ScrollingContainer)
  }
  //그림단어 혹은 음성파일 추가시 포지션 재 설정
  sort () {
    this.voice.y = this.picture.y + this.picture.height
    this.listcon.height = this.voice.height + this.picture.height + 80 * Manager.ratioY
  }

  //그림단어 밑에 들어가는 콘테이너
  makeCardContainer () {
    if (this._cardContainer)
      while (this._cardContainer.children[0]) {
        this._cardContainer.removeChild(this._cardContainer.children[0])
      }
    let Clist = Data.cardArr
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let now = document.getElementById("page_input").textContent - 1
    let con = new PIXI.UI.Container(260 * ratioX, 55 * Clist.length * ratioY)
    // 카드 갯수만큼 생성
    for (let i = 0; i < Clist.length; i++) {
      if (this.lastNumc !== undefined) this.removeChild(Clist[i].list[this.lastNumc])
      let blank = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
      let img = new PIXI.UI.Sprite(Clist[i].sprite.texture)
      let base = new PIXI.UI.Sprite(PIXI.Texture.WHITE)
      // uuid,title을 base에 저장한다
      let txt = new PIXI.UI.Text(Clist[i].title, Enum.fontstyle.Gray12_R)
      let tooltiptexture = new PIXI.Texture.from("tooltip")
      let tooltip = new PIXI.UI.Sprite(tooltiptexture)
      tooltip.sprite.interactive = tooltip.sprite.buttonMode = true
      blank.width = "100%"
      tooltip.width = 58 * ratioX
      tooltip.height = blank.height = 74 * ratioY
      let w = 42 * ratioX
      let h = 23 * ratioY
      let CardeditBtn = new ButtonHandler({
        width: w,
        height: h,
        lineColor: Enum.color.white,
        text: { name: "수정", style: Enum.fontstyle.White12_R },
      })
      let CarddelBtn = new ButtonHandler({
        width: w,
        height: h,
        lineColor: Enum.color.white,
        text: { name: "삭제", style: Enum.fontstyle.White12_R },
      })
      CarddelBtn.text.tint = CardeditBtn.text.tint = Enum.color.textGray
      CarddelBtn.button.anchorRight = CardeditBtn.button.anchorRight = 5 * ratioX
      CardeditBtn.button.anchorTop = 10 * ratioY
      CarddelBtn.button.anchorTop = 38 * ratioY
      base.sprite.interactive = base.sprite.buttonMode = true
      base.click = false
      img.width = img.height = 35 * ratioY
      img.anchorLeft = 6 * ratioX
      txt.verticalAlign = img.verticalAlign = "middle"
      txt.anchorLeft = 54 * ratioX
      if (txt.width > 100 * ratioX) {
        let oneL = txt.width / Clist[i].title.length
        let su = Math.floor((90 * ratioX) / oneL)
        txt.text = Clist[i].title.substring(0, su) + " ..."
      }
      base.width = 193 * ratioX
      base.height = 45 * ratioY
      let border = new StrokeSquare(0xffffff, base.width, base.height, 1)
      border.tint = Enum.color.line
      tooltip.anchorRight = 3
      blank.y = 55 * ratioY * i
      base.addChild(border, txt, img)
      blank.addChild(base)
      function hoverEvent (e) {
        if (e) {
          this.text.tint = Enum.color.white
          this.background.tint = Enum.color.red
        } else {
          this.text.tint = Enum.color.textGray
          this.background.tint = Enum.color.white
        }
      }
      CarddelBtn.onHover(hoverEvent)
      CardeditBtn.onHover(hoverEvent)

      CardeditBtn.onClick(() => {
        let dList = Clist[i].list
        let afterEdit = () => {
          txt.text = Data.cardArr[i].title
          img.sprite.texture = Data.cardArr[i].sprite.texture
          dList.map(e => {
            if (e) {
              e.title = Data.cardArr[i].title
              e.uuid = Data.cardArr[i].uuid
            }
          })
          Data.cardArr[i].list = dList
        }
        this.parent.emit("editCard", i, afterEdit)
      })
      CarddelBtn.onClick(() => {
        let left = this
        let a = new DeletePopUp(function () {
          Clist[i].list.map(e => {
            left.removeChild(e)
          })
          Clist.splice(i, 1)
          left.makeCardContainer(Data.cardArr)
        }, "그림단어를 삭제 하시겠습니까?")
        this.parent.addChild(a)
      })
      let d = Clist[i].list[now]
      if (d) {
        d.mather = border
        this.addChild(d)
      }
      base.sprite.on("click", () => {
        // if (_cardBaseSelect) return
        // border.tint = Enum.color.red
        if (d === undefined) {
          d = dragSprite(Clist[i].title, border)
          this.addChild(d)
          Clist[i].list[now] = d
          return
        }
        base.click = !base.click
        if (base.click) {
          blank.addChild(tooltip)
          border.tint = Enum.color.red
        } else {
          blank.removeChild(tooltip)
          border.tint = Enum.color.line
        }
      })
      base.sprite.on("pointerover", () => {
        if (d) d.circle.visible = true
      })
      base.sprite.on("pointerout", () => {
        if (d) d.circle.visible = false
      })
      tooltip.addChild(CarddelBtn.button, CardeditBtn.button)
      con.addChild(blank)
    }
    con.anchorTop = 45 * ratioY
    this._cardContainer = con
    this.lastNumc = now
    if (Clist.length !== 0) this.picture.sprite.emit("click", null, true)
  }
  // 음성 밑에 들어가는 콘테이너
  makeAudioContainer () {
    let now = document.getElementById("page_input").textContent - 1
    if (this._audioContainer)
      while (this._audioContainer.children[0]) {
        this._audioContainer.removeChild(this._audioContainer.children[0])
      }
    if (this.lastNuma !== undefined) {
      Data.audioArr[this.lastNuma].forEach(e => {
        this.removeChild(e.hl)
      })
    }
    let list = Data.audioArr[now]
    if (list.length === 0) {
      this._audioContainer ? (this._audioContainer.height = 0) : undefined
      this.voice.sprite.emit("show", true)
      return
    }
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let con = new PIXI.UI.Container(260 * ratioX, 97 * list.length * ratioY)

    for (let i = 0; i < list.length; i++) {
      let blank = new PIXI.UI.Sprite(PIXI.Texture.EMPTY),
        base = new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        audioTitle = new PIXI.UI.Text(list[i].title, Enum.fontstyle.Gray12_R),
        audioDuration = new PIXI.UI.Text("음성길이", Enum.fontstyle.Gray12_R),
        duration = new PIXI.UI.Text("", Enum.fontstyle.Gray12_R),
        tooltiptexture = new PIXI.Texture.from("tooltip"),
        tooltip = new PIXI.UI.Sprite(tooltiptexture),
        line = new LineSprte(180 * ratioX, 1, Enum.color.line),
        h = 24 * ratioY,
        w = 42 * ratioX,
        AudioeditBtn = new ButtonHandler({
          width: w,
          height: h,
          lineColor: Enum.color.white,
          text: { name: "수정", style: Enum.fontstyle.White12_R },
        }),
        AudiodelBtn = new ButtonHandler({
          width: w,
          height: h,
          lineColor: Enum.color.white,
          text: { name: "삭제", style: Enum.fontstyle.White12_R },
        }),
        prevListenBtn = new ButtonHandler({
          width: w,
          height: h,
          lineColor: Enum.color.white,
          text: { name: "미리듣기", style: Enum.fontstyle.White10_R },
        }),
        seek = Math.round(list[i].duration),
        minutes = Math.floor(seek / 60) || 0,
        seconds = seek - minutes * 60 || 0
      duration.text = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds + "초"
      blank.width = "100%"
      blank.y = 97 * ratioY * i
      tooltip.sprite.interactive = tooltip.sprite.buttonMode = true
      tooltip.sprite._zIndex = 10
      tooltip.width = 60 * ratioX
      tooltip.height = blank.height = 97 * ratioY
      tooltip.anchorRight = 3
      AudiodelBtn.text.tint = AudioeditBtn.text.tint = prevListenBtn.text.tint = Enum.color.textGray
      AudiodelBtn.button.anchorRight = AudioeditBtn.button.anchorRight = prevListenBtn.button.anchorRight = 7 * ratioX
      AudioeditBtn.button.anchorTop = 10 * ratioY
      AudiodelBtn.button.anchorTop = 38 * ratioY
      prevListenBtn.button.anchorTop = 69 * ratioY
      base.width = 193 * ratioX
      base.height = 90 * ratioY
      let handle = this.makeSwapButton(i, 8 * ratioX, base.height)

      if (audioTitle.width > 160 * ratioX) {
        let oneL = audioTitle.width / list[i].title.length
        let su = Math.floor((150 * ratioX) / oneL)
        audioTitle.text = list[i].title.substring(0, su) + " ..."
      }
      base.sprite.interactive = base.sprite.buttonMode = true
      base.click = false
      audioTitle.anchorLeft = 10 * ratioX
      audioTitle.anchorTop = 13 * ratioY
      line.verticalAlign = "middle"
      line.horizontalAlign = "center"
      audioDuration.anchorLeft = 10 * ratioX
      audioDuration.anchorBottom = 13 * ratioY
      duration.anchorRight = 9 * ratioX
      duration.anchorBottom = 13 * ratioY
      let border = new StrokeSquare(0xffffff, base.width, base.height, 1)
      border.tint = Enum.color.line

      base.addChild(border, audioTitle, audioDuration, duration, line)
      blank.addChild(base)

      function hoverEvent (e) {
        if (e) {
          this.text.tint = Enum.color.white
          this.background.tint = Enum.color.red
        } else {
          this.text.tint = Enum.color.textGray
          this.background.tint = Enum.color.white
        }
      }
      AudiodelBtn.onHover(hoverEvent)
      AudioeditBtn.onHover(hoverEvent)
      prevListenBtn.onHover(hoverEvent)

      AudioeditBtn.onClick(() => {
        let afterEdit = () => {
          let changeData = Data.audioArr[now][i]
          list[i] = changeData
          audioTitle.text = changeData.title
          let sec = Math.round(changeData.duration),
            minutes = Math.floor(sec / 60) || 0,
            seconds = sec - minutes * 60 || 0
          duration.text = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds + "초"
        }
        this.parent.emit("editAudio", i, afterEdit)
      })
      AudiodelBtn.onClick(() => {
        let left = this
        let a = new DeletePopUp(function () {
          left.removeChild(list[i].hl)
          list.splice(i, 1)
          left.makeAudioContainer()
        }, "음성을 삭제하시겠습니까?")
        this.parent.addChild(a)
      })
      prevListenBtn.onClick(() => {
        list[i].sound.stop()
        list[i].sound.volume(1)
        list[i].sound.play()
      })
      base.sprite.on("click", () => {
        //다른 아이템이 하이라이트 그리려고 기다리는 중이면 return
        if (_baseSelect) return
        border.tint = Enum.color.red
        if (list[i].hl === undefined) {
          _baseSelect = true
          if (base.dragable) return
          highlightMaker(this, border, list[i], base)
          base.dragable = true
          return
        }
        base.click = !base.click
        if (base.click) {
          blank.addChild(tooltip)
          list[i].hl.visible = true
        } else {
          blank.removeChild(tooltip)
          border.tint = Enum.color.line
          list[i].hl.visible = false
        }
      })
      if (list[i].hl) {
        list[i].hl.mather = border
        this.addChild(list[i].hl)
        if (list[i].hl.visible) base.sprite.emit("click")
      }

      base.addChild(handle)
      blank.handle = handle
      tooltip.addChild(AudiodelBtn.button, AudioeditBtn.button, prevListenBtn.button)
      con.addChild(blank)
    }
    con.anchorTop = 45 * ratioY
    this._audioContainer = con
    this.lastNuma = now
    this.voice.sprite.emit("click", null, true)
  }

  //발행중 일때 사용하는 필터
  filterOn () {
    this.interactiveChildren = false
    this.addChild(this.filter)
  }

  //필터 없애기
  filterOff () {
    this.removeChild(this.filter)
    this.interactiveChildren = true
  }

  // >그림단어, >음성  타이틀 만들어주는 함수
  makeTitleSprite (text) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let conSprite = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
    conSprite.width = 193 * ratioX
    conSprite.height = 45 * ratioY
    conSprite.anchorLeft = 14 * ratioX
    let baseT = new PIXI.Texture.from("arrow")
    let arrowt = new PIXI.Texture(baseT, null, null, null, 2)
    let arrow = new PIXI.UI.Sprite(arrowt)
    let txt = new PIXI.UI.Text(text, Enum.fontstyle.GrayTitle)
    arrow.anchorTop = txt.anchorTop = 10 * ratioY
    arrow.width = 9 * ratioX
    arrow.height = 18 * ratioY
    arrow.tint = 0x707070
    arrow.anchorLeft = 10 * ratioX
    txt.anchorLeft = 48 * ratioX

    let underLine = new LineSprte(193 * ratioX, 1, Enum.color.line)
    underLine.anchorBottom = 0
    conSprite.addChild(arrow, txt, underLine)
    let click = true

    conSprite.sprite.interactive = true
    conSprite.sprite.buttonMode = true
    conSprite.sprite.on("click", (e, flag) => {
      if (flag) click = true
      if (click) {
        arrow.sprite.texture = baseT
        arrow.width = 18 * ratioX
        arrow.height = 9 * ratioY
        arrow.anchorTop = 19 * ratioY
        conSprite.sprite.emit("show", true)
      } else {
        arrow.sprite.texture = arrowt
        arrow.width = 9 * ratioX
        arrow.height = 18 * ratioY
        arrow.anchorTop = 10 * ratioY
        conSprite.sprite.emit("show", false)
      }
      click = !click
    })

    return conSprite
  }

  //음성파일 위치 변경하는 함수
  makeSwapButton (i, width, height) {
    let now = document.getElementById("page_input").textContent - 1

    let handle = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
    handle.number = i
    let upBtn = new ButtonHandler({
      line: 0,
      width,
      height: height / 2,
      tint: 0xe2e2e2,
      text: { name: "▲", style: Enum.fontstyle.Black12 },
    })
    let downBtn = new ButtonHandler({
      line: 0,
      width,
      height: height / 2,
      tint: 0xe2e2e2,
      text: { name: "▼", style: Enum.fontstyle.Black12 },
    })

    upBtn.onClick(() => {
      let now = document.getElementById("page_input").textContent - 1
      if (handle.number === 0) return

      let temp = Data.audioArr[now][handle.number]
      Data.audioArr[now][handle.number] = Data.audioArr[now][handle.number - 1]
      Data.audioArr[now][handle.number - 1] = temp

      this.makeAudioContainer()
    })
    downBtn.onClick(() => {
      let now = document.getElementById("page_input").textContent - 1
      if (handle.number === Data.audioArr[now].length - 1) return

      let temp = Data.audioArr[now][handle.number]
      Data.audioArr[now][handle.number] = Data.audioArr[now][handle.number + 1]
      Data.audioArr[now][handle.number + 1] = temp

      this.makeAudioContainer()
    })

    downBtn.button.anchorTop = height / 2
    handle.x = 1
    handle.addChild(upBtn.button, downBtn.button)
    return handle
  }
}

/* 
하이라이트 객체 만드는 함수
*/
export function highlightMaker (container, mather, item, base) {
  const ratioX = Manager.ratioX
  const ratioY = Manager.ratioY

  //(주석처리 예정)
  let t = new PIXI.Texture.from("dotSquare")

  //(추가개발-음성파일등록)
  // let t = new PIXI.Texture.from("/peachImage/dotLine.png")

  let dotSprite = new PIXI.UI.Sprite(t)
  dotSprite.tint = Enum.color.red
  dotSprite.width = dotSprite.height = 0
  let graphic = new PIXI.Graphics()
  graphic.lineStyle(2, Enum.color.line)
  graphic.beginFill(Enum.color.white)
  graphic.drawRoundedRect(0, 0, 100 * ratioX, 71 * ratioY, 2)

  let generateBox = new GraphicsSprite(graphic)
  let makeBtn = new ButtonHandler({
    width: 98 * ratioX,
    height: 34 * ratioY,
    lineColor: Enum.color.white,
    text: { name: "하이라이트 생성", style: Enum.fontstyle.Black12 },
  })
  let delBtn = new ButtonHandler({
    width: 98 * ratioX,
    height: 34 * ratioY,
    lineColor: Enum.color.white,
    text: { name: "하이라이트 삭제", style: Enum.fontstyle.Gray12 },
  })
  let line = new LineSprte(90 * ratioX, 1, Enum.color.line)
  line.verticalAlign = "middle"
  line.horizontalAlign = makeBtn.button.horizontalAlign = delBtn.button.horizontalAlign = "center"
  makeBtn.button.anchorTop = delBtn.button.anchorBottom = 1
  generateBox.addChild(makeBtn.button, delBtn.button, line)

  makeBtn.onClick(() => {
    graphic.clear()
    graphic.beginFill(Enum.color.red, 0.5)
    graphic.drawRoundedRect(0, 0, dotSprite.width, Data.hlHeight, 5)
    graphic.endFill()
    _baseSelect = false
    let tempHighlight = new GraphicsSprite(graphic)
    tempHighlight.startPos = dotSprite.startPos
    tempHighlight.endPos = dotSprite.endPos
    tempHighlight.x = dotSprite.x
    tempHighlight.y = dotSprite.y
    tempHighlight.pivotX = dotSprite.pivotX
    tempHighlight.pivotY = dotSprite.pivotY
    container.removeChild(generateBox, dotSprite)
    item.hl = tempHighlight
    container.addChild(tempHighlight)
    setTimeout(() => {
      base.sprite.emit("click")
    }, 500)
  })
  delBtn.onClick(() => {
    base.dragable = false
    _baseSelect = false
    container.removeChild(generateBox, dotSprite)
    mather.tint = Enum.color.line
  })

  //(추가개발-음성파일등록)
  // function onMakeHl(e) {
    
  //   if(!this.startClick) {
  //     container.addChild(dotSprite)
  //     console.log("dotSprite:", dotSprite )
  //     this.dotStart = { x: e.clientX, y: e.clientY }
  //     console.log("this.dotStart:",this.dotStart)
  //     let dx = e.clientX - left
  //     let dy = e.clientY - top
  //     dotSprite.x = e.clientX
  //     dotSprite.y = e.clientY
  //     dotSprite.startPos = { x: dx / w, y: dy / h }
  //     this.startClick = true
  //   } else {
  //     let dx = e.clientX - left
  //     let dy = this.dotStart.y + Data.hlHeight - top
  //     dotSprite.endPos = { x: dx / w, y: dy / h }
  //     let ox = e.clientX - this.dotStart.x
  //     // let oy = Data.hlHeight
  //     let oy = 5
  //     let width = Math.abs(ox)
  //     let height = oy
  //     if (ox >= 0) dotSprite.pivotX = 0
  //     else dotSprite.pivotX = 1
  //     if (oy >= 0) dotSprite.pivotY = 0.5
  //     else dotSprite.pivotY = 1
  //     dotSprite.width = width
  //     dotSprite.height = height

  //     document.removeEventListener("mousedown", onMakeHl)
  //     generateBox.anchorRight = -generateBox.width - 20 * ratioX
  //     generateBox.verticalAlign = "middle"
  //     dotSprite.addChild(generateBox)

  //     this.startClick = false
  //   }
  // }

  //(주석처리 예정)
  function onDragStart (e) {
    this.dragging = true
    container.addChild(dotSprite)
    console.log("dotSprite:", dotSprite )
    this.dotStart = { x: e.clientX, y: e.clientY }
    console.log("this.dotStart:",this.dotStart)
    let dx = e.clientX - left
    let dy = e.clientY - top
    dotSprite.x = e.clientX
    dotSprite.y = e.clientY
    dotSprite.startPos = { x: dx / w, y: dy / h }
  }

  function onDragEnd (e) {
    this.dragging = false
    console.log(dotSprite.endPos)
    document.removeEventListener("mousedown", onDragStart)
    document.removeEventListener("mouseup", onDragEnd)
    document.removeEventListener("mouseupoutside", onDragEnd)
    document.removeEventListener("mousemove", onDragMove)

    generateBox.anchorRight = -generateBox.width - 20 * ratioX
    generateBox.verticalAlign = "middle"
    dotSprite.addChild(generateBox)
  }


  let viewCan = document.getElementById("view-canvas")
  let left = viewCan.style.marginLeft
  let w = viewCan.width
  let h = viewCan.height
  left = parseFloat(left)
  let top = viewCan.style.marginTop
  top = parseFloat(top)

  //(주석처리 예정)
  function onDragMove (e) {
    if (this.dragging) {
      let dx = e.clientX - left
      let dy = this.dotStart.y + Data.hlHeight - top
      dotSprite.endPos = { x: dx / w, y: dy / h }
      let ox = e.clientX - this.dotStart.x
      let oy = Data.hlHeight
      let width = Math.abs(ox)
      let height = oy
      if (ox >= 0) dotSprite.pivotX = 0
      else dotSprite.pivotX = 1
      if (oy >= 0) dotSprite.pivotY = 0
      else dotSprite.pivotY = 1
      dotSprite.width = width
      dotSprite.height = height
    }
  }

  //(추가개발-음성파일등록)
  // document.addEventListener("mousedown", onMakeHl)

  //(주석처리 예정)
  document.addEventListener("mousedown", onDragStart)
  document.addEventListener("mouseup", onDragEnd)
  document.addEventListener("mouseupoutside", onDragEnd)
  document.addEventListener("mousemove", onDragMove)
}
