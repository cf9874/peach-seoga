import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
import ButtonHandler from "../UI/Button.js"
import GraphicsSprite from "../UI/graphicSprite.js"

/* 
사용자 페이지 메뉴 버튼 클릭 시 메뉴에 따른 화면 관리하는 클래스
*/
export default class WebMenu extends PIXI.UI.Sprite {
  constructor () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY

    let size = 23 * ratioX
    this.graphic = new PIXI.Graphics()
    this.graphic.lineStyle(1, Enum.color.bgBoxBorder)
    this.graphic.beginFill(Enum.color.bgBox)
    this.graphic.drawRect(0, 0, 200 * ratioX, window.innerHeight)
    this.graphic.endFill()
    super(Manager.app.renderer.generateTexture(this.graphic))

    this.heigth = "100%"
    this.anchorRight = 0


    let bgGraphic = new PIXI.Graphics()
    bgGraphic.lineStyle(1, Enum.color.bgBoxBorder)
    bgGraphic.beginFill(Enum.color.bgBox)
    bgGraphic.moveTo(20 * ratioX, 0)
    bgGraphic.lineTo(47 * ratioX, 0)
    bgGraphic.lineTo(47 * ratioX, 285 * ratioY)
    bgGraphic.lineTo(20 * ratioX, 285 * ratioY)
    bgGraphic.arcTo(0, 285 * ratioY, 0, 265 * ratioY, 20)
    bgGraphic.lineTo(0, 20 * ratioY)
    bgGraphic.arcTo(0, 0, 20 * ratioX, 0, 20)
    bgGraphic.endFill()

    this.menuBg = new GraphicsSprite(bgGraphic)
    this.menuBg.anchorTop = 60 * ratioY
    this.menuBg.anchorRight = 201 * ratioX
    this.menuBg.interactive=true
    this.menuBg.buttonMode=true
    this.menuBg.on("mouseover",()=>{

    })
    this.cardBtn = this.makeBtn({
      url: "card_icon_new",
      width: size,
      height: size,
      text: { name: "그림단어", style: Enum.fontstyle.Black15_R },
    })
    this.audioBtn = this.makeBtn({
      url: "audio_icon",
      width: size,
      height: size,
      text: { name: "음성", text: "음성", style: Enum.fontstyle.Black15_R },
    })
    this.paintBtn = this.makeBtn({
      url: "paint_icon_new",
      width: size,
      height: size,
      text: { name: "판서", text: "판서", style: Enum.fontstyle.Black15_R },
    })
    this.bookmarkBtn = this.makeBtn({
      url: "bookmark_icon",
      width: size,
      height: size,
      text: { name: "책갈피", text: "책갈피", style: Enum.fontstyle.Black15_R },
    })

    this.fullscreenBtn = this.makeBtn({
      url: "fullscreen_icon",
      width: size,
      height: size,
      text: {
        name: "전체화면",
        text: "전체화면",
        style: Enum.fontstyle.Black15_R,
      },
    })

    this.gatherBtn = this.makeBox({
      width: 83 * ratioX,
      height: 33 * ratioX,
      tint: Enum.color.white,
      line: 5,
      text: { name: "모아보기", style: Enum.fontstyle.Black15_R },
      rounded: 11,
      lineColor: 0x707070,
    })

    this.printBtn = this.makeBox({
      width: 83 * ratioX,
      height: 33 * ratioX,
      tint: Enum.color.white,
      line: 5,
      text: { name: "인쇄하기", style: Enum.fontstyle.Black15_R },
      rounded: 11,
      lineColor: 0x707070,
    })
    this.finBtn = this.makeBox({
      width: 168 * ratioX,
      height: 40 * ratioX,
      tint: Enum.color.white,
      line: 5,
      text: { name: "스토리 닫기", style: Enum.fontstyle.Black15_R },
      rounded: 6,
      lineColor: 0xf1f0f0,
    })
    
    this.finBtn.button.anchorLeft = 20 * ratioX
    this.cardBtn.button.anchorRight =
      this.audioBtn.button.anchorRight =
      this.paintBtn.button.anchorRight =
      this.bookmarkBtn.button.anchorRight =
      this.fullscreenBtn.button.anchorRight =
         205 * ratioX
    this.gatherBtn.button.anchorLeft = 15 * ratioX
    this.printBtn.button.anchorLeft = 105 * ratioX

    this.finBtn.button.anchorTop = 10 * ratioY
    this.cardBtn.button.anchorTop = 70 * ratioY
    this.audioBtn.button.anchorTop = 123 * ratioY
    this.paintBtn.button.anchorTop = 176 * ratioY
    this.bookmarkBtn.button.anchorTop = 229 * ratioY
    this.fullscreenBtn.button.anchorTop = 282 * ratioY
    this.gatherBtn.button.anchorTop = this.printBtn.button.anchorTop =
      1035 * ratioY

    this.finBtn.alpha = this.gatherBtn.alpha = this.printBtn.alpha = 1

    this.addChild(
      this.menuBg,
      this.cardBtn.button,
      this.paintBtn.button,
      this.audioBtn.button,
      this.bookmarkBtn.button,
      this.fullscreenBtn.button,
      this.finBtn.button,
      this.gatherBtn.button,
      this.printBtn.button
      )

    this.buttonArray = [
      this.cardBtn,
      this.paintBtn,
      this.audioBtn,
      this.bookmarkBtn,
      this.fullscreenBtn,
    ]
  }

  //버튼 선택시 나오는 메뉴창 컨테이너
  makeContentsBox () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.contentsBox = new PIXI.UI.Container("100%", "100%")
    this.contents = this.webCard
    this.contentsBox.addChild(this.contents)
    this.contents.anchorTop = 23 * ratioY
  }

  //아이콘 선택시 content를 해당하는 컨테이너로 변경하고 타이틀 속 text도 변경해줌
  clickEventHandler(btn) {
    if (Manager.isPrev)
      Manager.currentScene.con.container.emit("previewblurOff")
    else Manager.currentScene.con.container.emit("buttonblurOff")
    // this.gatherBtn.background.alpha = 1    
    let paint_canvas = document.getElementById("paint_canvas")
    paint_canvas.style.display = "none"
    if (this.contentsBox === undefined) this.makeContentsBox()
    if(!btn) return
    if (
      btn.buttonText !== "음성" &&
      this.webAudio.player !== undefined &&
      this.webAudio.player.playlist[this.webAudio.player.index].howl !== null
    ) {
      this.webAudio.pauseBtn.sprite.emit("click")
      this.webAudio.highlighter.visible = false
    }
    switch (btn.buttonText) {
      case "그림단어":
        if (!Manager.isCard) {
          this.contentsBox.removeChild(this.contents)
          this.contents = this.webCard
          this.contentsBox.addChild(this.contents)
          this.addChild(this.contentsBox)
          Manager.isCard = true
          Manager.isPaint = false
          Manager.isAudio = false
          Manager.isBookmark = false
          btn.backgroundColor = Enum.color.button
        } else {
          this.removeChild(this.contentsBox)
          Manager.isCard = false
          btn.backgroundColor = Enum.color.bgBox
        }
        break
      case "음성":
        if (!Manager.isAudio) {
          this.contentsBox.removeChild(this.contents)
          this.contents = this.webAudio
          this.contentsBox.addChild(this.contents)
          this.addChild(this.contentsBox)
          Manager.isAudio = true
          Manager.isCard = false
          Manager.isQ = false
          Manager.isPaint = false
          Manager.isBookmark = false
          btn.backgroundColor = Enum.color.button
        } else {
          this.removeChild(this.contentsBox)
          Manager.isAudio = false
          btn.backgroundColor = Enum.color.bgBox
        }
        break
      case "판서":
        if (!Manager.isPaint) {
          this.contentsBox.removeChild(this.contents)
          this.contents = this.webPaint
          this.contentsBox.addChild(this.contents)
          this.addChild(this.contentsBox)
          paint_canvas.style.display = "block"
          Manager.isPaint = true
          Manager.isCard = false
          Manager.isQ = false
          Manager.isAudio = false
          Manager.isBookmark = false
          btn.backgroundColor = Enum.color.button
        } else {
          this.removeChild(this.contentsBox)
          Manager.isPaint = false
          btn.backgroundColor = Enum.color.bgBox
        }
        break
      case "책갈피":
        if (!Manager.isBookmark) {
          this.contentsBox.removeChild(this.contents)
          this.contents = this.webBookmark
          this.contentsBox.addChild(this.contents)
          this.addChild(this.contentsBox)
          Manager.isBookmark = true
          Manager.isCard = false
          Manager.isQ = false
          Manager.isPaint = false
          Manager.isAudio = false
          btn.backgroundColor = Enum.color.button
        } else {
          this.removeChild(this.contentsBox)
          Manager.isBookmark = false
          btn.backgroundColor = Enum.color.bgBox
        }
        break
      case "모아보기":
        this.removeChild(this.contentsBox)
        if (!Manager.isGather) {
          Manager.currentScene.con.container.emit("buttonblurOn")
          Manager.isCard = false
          Manager.isQ = false
        }

        Manager.isCard = false
        Manager.isQ = false

        // console.log("gather")
        break
      case "전체화면":
        this.removeChild(this.contentsBox)
        Manager.isCard = false
        Manager.isQ = false
        // console.log("full")
        break
      case "인쇄하기":
        this.removeChild(this.contentsBox)
        Manager.currentScene.con.container.emit("buttonblurOn")
        // console.log("print")
        break
      case "스토리 닫기":
        this.removeChild(this.contentsBox)

        // console.log("fin")
        break
    }
  }

  makeBox(option) {
    const ratioX = Manager.ratioX
    const { width, height, tint, line, text, rounded, lineColor } = option

    let button = new ButtonHandler({
      width,
      height,
      tint,
      line,
      text,
      rounded,
      lineColor,
    })
    button.buttonText = option.text.name

    button.onClick(() => {
      this.selectedBtn = button
      Manager.currentScene.webMenu.clickEventHandler(button)
    })

    button.onHover(e => {
      if (e) {
        if (button === this.finBtn) {
          let whiteText = new PIXI.UI.Text(text.name, Enum.fontstyle.White15_R)
          whiteText.horizontalAlign = "center"
          whiteText.verticalAlign = "middle"

          button.backgroundColor = Enum.color.red
          button.button.removeChild(button.button.children[1])
          button.button.addChild(whiteText)
        } else {
          button.backgroundColor = Enum.color.button
        }
      } else {
        if (button === this.finBtn) {
          let blackText = new PIXI.UI.Text(text.name, Enum.fontstyle.Black15_R)
          blackText.horizontalAlign = "center"
          blackText.verticalAlign = "middle"

          button.button.removeChild(button.button.children[1])
          button.button.addChild(blackText)
        }
        button.backgroundColor = Enum.color.white
      }
    })

    return button
  }

  makeBtn(img) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY

    let graphic = new PIXI.Graphics()
    graphic.lineStyle(0, 0xffffff)
    graphic.beginFill(Enum.color.lightGray)
    graphic.drawRoundedRect(0, 0, 120 * ratioX, 45 * ratioX,10)
    graphic.endFill()

    let bg = new GraphicsSprite(graphic)
    bg.alpha = 0
    bg.anchorRight = 0
    
    let button = new ButtonHandler({
      width: 35 * ratioX,
      height: 35 * ratioX,
      tint: Enum.color.button,
      line: 0,
      rounded: 10,
      img,
      bg
    })

    button.background.alpha = 0
    button.buttonText = img.text.name
    
    if (img) {
      button[img.url].anchorRight = 5*ratioX
      button[img.url].anchorBottom = 5*ratioY
      button[img.url].tint = 0x333333

      button.button.on("disable", () => {
        button[img.url].tint = 0xeaeaea
      })
      button.button.on("active", () => {
        button[img.url].tint = 0x333333
      })
    }

    button.onClick(() => {
      button.backgroundColor = Enum.color.lightGray
      this.buttonArray.map(btn => {
     if(btn.buttonText !== "전체화면"){
      if (btn === button) button.background.alpha = 1
      else btn.background.alpha = 0
     }
      })
      this.selectedBtn = button
      Manager.currentScene.webMenu.clickEventHandler(button)
    })

    button.onHover(e => {
      if (e) {
        button.addText({
          name: img.text.name,
          text: img.text.name,
          style: img.text.style,
        })
        button[img.text.name].x = -70 * ratioX
        // button[img.text.name].verticalAlign = "middle"
        button[img.text.name].y = 15 * ratioY
        bg.anchorRight = 0
        bg.alpha = 1
      } else {
        button.removeText({
          name: img.text.name,
          text: img.text.name,
          style: Enum.fontstyle.Black15_R,
        })
        bg.alpha = 0
      }
    })
    return button
  }
}
