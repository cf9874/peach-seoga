import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
import GraphicsSprite from "../UI/graphicSprite.js"
import ButtonHandler from "../UI/Button.js"
/* 
저작도구 오른쪽 아이콘 메뉴바 
*/
export default class RightMenu extends PIXI.UI.Sprite {
  constructor (tileGrid) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let graphic = new PIXI.Graphics()
    graphic.lineStyle(1, Enum.color.bgBoxBorder)
    graphic.beginFill(Enum.color.bgBox)
    graphic.drawRect(0, 0, 85 * ratioX, window.innerHeight)
    graphic.endFill()
    graphic.clear()
    graphic.lineStyle(0)
    graphic.beginFill(Enum.color.bgBox)
    graphic.drawRect(0, 0, 85 * ratioX, window.innerHeight)
    graphic.endFill()
    super(Manager.app.renderer.generateTexture(graphic))
    this.filter = new GraphicsSprite(graphic)
    this.filter.alpha = 0.8
    this.filter.anchorBottom = 160 * ratioY
    this.filter.sprite.interactive = true
    this.width = 85 * ratioX
    this.heigth = "100%"
    this.tileGrid = tileGrid
    this.heigth = "100%"
    this.anchorRight = 0

    let a = ratioX * 27
    this.cardBtn = this.makeBtn({ url: "card_icon", width: a, height: a }, "그림단어", "cardBtn")
    this.audioBtn = this.makeBtn({ url: "audio_icon", width: a, height: a }, "음성", "audioBtn")
    this.gridBtn = this.makeBtn({ url: "grid_icon", width: a, height: a }, "안내선", "gridBtn")
    this.hlBtn = this.makeBtn({ url: "height_icon", width: a, height: a }, "형광펜\n  높이", "hlBtn")
    this.previewBtn = this.makeBtn({ url: "preview_icon", width: a, height: a }, "미리보기", "previewBtn")
    this.gatherBtn = this.makeBtn({ url: "thumb_icon", width: a, height: a }, "모아보기", "gatherBtn")
    this.saveBtn = this.makeBtn({ url: "disk_icon", width: a, height: a }, "저장", "saveBtn")
    this.finBtn = this.makeBtn({ url: "finish_icon", width: a, height: a }, "종료", "finBtn")

    this.cardBtn.button.anchorTop = 60 * ratioY
    this.audioBtn.button.anchorTop = 153 * ratioY
    this.gridBtn.button.anchorTop = 246 * ratioY
    this.hlBtn.button.anchorTop = 350 * ratioY
    this.previewBtn.button.anchorBottom = 349 * ratioY
    this.gatherBtn.button.anchorBottom = 256 * ratioY
    this.saveBtn.button.anchorBottom = 163 * ratioY
    this.finBtn.button.anchorBottom = 70 * ratioY

    this.addChild(
      this.cardBtn.button,
      this.audioBtn.button,
      this.gridBtn.button,
      this.hlBtn.button,
      this.previewBtn.button,
      this.gatherBtn.button,
      this.saveBtn.button,
      this.finBtn.button,
    )
    this.GridButtonChildren()
  }
  filterOn () {
    this.addChild(this.filter)
  }

  filterOff () {
    this.removeChild(this.filter)
  }

  //그리드 버튼 호버시 나오는 +,- 생성하는 함수
  GridButtonChildren () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.gridBtn.addImage({
      url: "btn_02",
      width: 30 * ratioX,
      height: 25 * ratioY,
      tint: Enum.color.button,
    })
    this.gridBtn.addImage({
      url: "btn_03",
      width: 30 * ratioX,
      height: 25 * ratioY,
      tint: Enum.color.button,
    })
    let plus = new PIXI.UI.Text("+", Enum.fontstyle.Black14_bold)
    let minus = new PIXI.UI.Text("-", Enum.fontstyle.Black14_bold)
    plus.verticalAlign = minus.verticalAlign = "middle"
    plus.horizontalAlign = minus.horizontalAlign = "center"
    this.gridBtn.btn_02.addChild(minus)
    this.gridBtn.btn_03.addChild(plus)
    this.gridBtn.btn_02.anchorTop = this.gridBtn.btn_03.anchorTop = 70 * ratioY
    this.gridBtn.btn_02.anchorRight = this.gridBtn.btn_03.anchorLeft = 26 * ratioX

    this.gridBtn.btn_02.alpha = 0
    this.gridBtn.btn_03.alpha = 0

    let plusbtn = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
    let minbtn = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
    plusbtn.width = minbtn.width = 30 * ratioX
    plusbtn.height = minbtn.height = 25 * ratioY
    plusbtn.anchorTop = minbtn.anchorTop = 316 * ratioY
    plusbtn.anchorRight = 12 * ratioX
    minbtn.anchorLeft = 12 * ratioX
    plusbtn.sprite.interactive = true
    plusbtn.sprite.buttonMode = true
    minbtn.sprite.interactive = true
    minbtn.sprite.buttonMode = true
    plusbtn.sprite.on("pointerover", e => {
      this.gridBtn.button.emit("hover", e)
    })
    plusbtn.sprite.on("pointerout", e => {
      this.gridBtn.button.emit("hover")
    })
    plusbtn.sprite.on("click", () => {
      this.tileGrid.tileScale.x += 0.1
      this.tileGrid.tileScale.y += 0.1
    })
    minbtn.sprite.on("pointerover", e => {
      this.gridBtn.button.emit("hover", e)
    })
    minbtn.sprite.on("pointerout", () => {
      this.gridBtn.button.emit("hover")
    })
    minbtn.sprite.on("click", () => {
      if (this.tileGrid.tileScale.x - 0.1 <= 0.1) {
        this.tileGrid.tileScale.x = 0.1
        this.tileGrid.tileScale.y = 0.1
        return
      }
      this.tileGrid.tileScale.x -= 0.1
      this.tileGrid.tileScale.y -= 0.1
    })

    this.addChild(plusbtn, minbtn)
  }

  // 호버했을때 +,- 보여주는 이벤트
  girdEvent (button, e) {
    if (e) {
      button.btn_02.alpha = 1
      button.btn_03.alpha = 1
    } else {
      button.btn_02.alpha = 0
      button.btn_03.alpha = 0
    }
  }

  //버튼 생성하는 함수
  makeBtn (img, text, name) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let height = 63 * ratioY
    if (name === "hlBtn") {
      height = 77 * ratioY
    }
    let button = new ButtonHandler({
      width: 51 * ratioX,
      height,
      tint: Enum.color.button,
      line: 0,
      rounded: 5,
      img,
    })
    button.addText({ name:text, style: Enum.fontstyle.Black12, name })

    button.background.alpha = 0
    button[name].horizontalAlign = "center"
    if (name === "hlBtn") button[name].anchorBottom = 0
    else button[name].anchorBottom = 5 * ratioY
    button[img.url].tint = 0x333333
    button[img.url].anchorTop = 5 * ratioY
    button[img.url].horizontalAlign = "center"
    button.button.horizontalAlign = "center"

    button.onHover(e => {
      if (name === "gridBtn") this.girdEvent(button, e)
      if (e) {
        button.background.alpha = 1
      } else button.background.alpha = 0
    })

    return button
  }
}
