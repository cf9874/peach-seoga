import * as Enum from "../Enum/index.js"
import ButtonHandler from "../UI/Button.js"
import Manager from "../scenes/Manager.js"
import { Filter } from "../UI/graphicSprite.js"

/* 
  종료팝업
*/

// 저장후 나오는 종료 팝업
export class AfterSavePopup extends PIXI.UI.Container {
  constructor (closeFunc) {
    super("100%", "100%")
    this.filter = new Filter("100%", "100%")
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.filter.sprite.interactive = false
    let graphics = new PIXI.Graphics()
    graphics.lineStyle(2, 0xffffff, 1)
    graphics.beginFill(0xffffff)
    graphics.drawRoundedRect(0, 0, 410 * ratioX, 198 * ratioY, 4)
    graphics.endFill()

    this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics))
    this.card.sprite.interactive = true
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"

    let closeBtn = new ButtonHandler({
      width: 120 * ratioX,
      height: 40 * ratioY,
      lineColor: Enum.color.line,
      text: { name: "종료하기", style: Enum.fontstyle.Black14 },
    })
    let continueBtn = new ButtonHandler({
      width: 120 * ratioX,
      height: 40 * ratioY,
      tint: Enum.color.green,
      line: 0,
      text: { name: "계속편집하기", style: Enum.fontstyle.White14 },
    })

    closeBtn.button.anchorBottom = 68 * ratioY
    continueBtn.button.anchorBottom = 18 * ratioY
    closeBtn.button.horizontalAlign = continueBtn.button.horizontalAlign = "center"

    let fin1 = new PIXI.UI.Text("스토리 제작도구를 ", Enum.fontstyle.Black16)
    let fin2 = new PIXI.UI.Text("종료 ", Enum.fontstyle.Red16)
    let fin3 = new PIXI.UI.Text("하시겠습니까?", Enum.fontstyle.Black16)
    let textBox = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
    textBox.width = fin1.width + fin2.width + fin3.width
    fin2.x = fin1.width
    fin3.x = fin2.x + fin2.width
    textBox.addChild(fin1, fin2, fin3)
    let txt = new PIXI.UI.Text("저장되었습니다.", Enum.fontstyle.Black16)
    textBox.horizontalAlign = txt.horizontalAlign = "center"
    txt.y = 20 * ratioY
    textBox.y = txt.height + txt.y + 2

    this.container.interactive = true
    this.container.on("close", () => {
      this.parent.removeChild(this)
    })

    continueBtn.onClick(() => {
      this.container.emit("close")
    })

    closeBtn.onClick(() => {
      closeBtn.button.blur()
      closeFunc()
      this.container.emit("close")
    })

    this.card.addChild(closeBtn.button, continueBtn.button, textBox, txt)
    this.addChild(this.filter, this.card)
  }
}

//그냥 종료버튼 눌렀을때 나오는 팝업
export class OnlyClosePopup extends PIXI.UI.Container {
  constructor (closeFunc) {
    super("100%", "100%")
    this.filter = new Filter("100%", "100%")
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.filter.sprite.interactive = false
    let graphics = new PIXI.Graphics()
    graphics.lineStyle(2, 0xffffff, 1)
    graphics.beginFill(0xffffff)
    graphics.drawRoundedRect(0, 0, 410 * ratioX, 172 * ratioY, 4)
    graphics.endFill()

    this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics))
    this.card.sprite.interactive = true
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"

    let closeBtn = new ButtonHandler({
      width: 120 * ratioX,
      height: 40 * ratioY,
      lineColor: Enum.color.line,
      text: { name: "종료하기", style: Enum.fontstyle.Black14 },
    })
    let continueBtn = new ButtonHandler({
      width: 120 * ratioX,
      height: 40 * ratioY,
      tint: Enum.color.green,
      line: 0,
      text: { name: "계속편집하기", style: Enum.fontstyle.White14 },
    })

    closeBtn.button.anchorBottom = 68 * ratioY
    continueBtn.button.anchorBottom = 18 * ratioY
    closeBtn.button.horizontalAlign = continueBtn.button.horizontalAlign = "center"

    let fin1 = new PIXI.UI.Text("스토리 제작도구를 ", Enum.fontstyle.Black16)
    let fin2 = new PIXI.UI.Text("종료 ", Enum.fontstyle.Red16)
    let fin3 = new PIXI.UI.Text("하시겠습니까?", Enum.fontstyle.Black16)
    let textBox = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
    textBox.width = fin1.width + fin2.width + fin3.width
    fin2.x = fin1.width
    fin3.x = fin2.x + fin2.width
    textBox.addChild(fin1, fin2, fin3)
    textBox.anchorTop = 20 * ratioY
    textBox.horizontalAlign = "center"

    this.container.interactive = true
    this.container.on("close", () => {
      this.parent.removeChild(this)
    })

    continueBtn.onClick(() => {
      this.container.emit("close")
    })

    closeBtn.onClick(() => {
      closeBtn.button.blur()
      closeFunc()
      this.container.emit("close")
    })

    this.card.addChild(closeBtn.button, continueBtn.button, textBox)
    this.addChild(this.filter, this.card)
  }
}
