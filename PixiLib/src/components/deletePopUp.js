import * as Enum from "../Enum/index.js"
import ButtonHandler from "../UI/Button.js"
import Manager from "../scenes/Manager.js"
import { Filter } from "../UI/graphicSprite.js"

/*
그림단어 혹은 음성에서 사용하는 삭제팝업
*/
export class DeletePopUp extends PIXI.UI.Container {
  constructor (func, text) {
    super("100%", "100%")
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.filter = new Filter("100%", "100%")
    this.filter.sprite.buttonMode = false

    let graphics = new PIXI.Graphics()
    graphics.lineStyle(2, 0xffffff, 1)
    graphics.beginFill(0xffffff)
    graphics.drawRoundedRect(0, 0, 410 * ratioX, 120 * ratioY, 4)
    graphics.endFill()

    this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics))
    this.card.sprite.interactive = true
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"

    let cancleBtn = new ButtonHandler({
      width: 120 * ratioX,
      height: 40 * ratioY,
      lineColor: 0xdadada,
      text: { name: "취소", style: Enum.fontstyle.Black14 },
    })
    let deleteBtn = new ButtonHandler({
      width: 120 * ratioX,
      height: 40 * ratioY,
      tint: 0x0b4247,
      lineColor: 0x0b4247,
      text: { name: "삭제", style: Enum.fontstyle.White14 },
    })

    cancleBtn.button.anchorLeft = deleteBtn.button.anchorRight = 75 * ratioX
    cancleBtn.button.anchorBottom = deleteBtn.button.anchorBottom = 18 * ratioY

    let txt = new PIXI.UI.Text(text, Enum.fontstyle.Black16)
    txt.horizontalAlign = "center"
    txt.anchorTop = 20 * ratioY

    this.container.on("close", () => {
      this.parent.removeChild(this)
    })

    cancleBtn.onClick(() => {
      this.container.emit("close")
    })

    deleteBtn.onClick(() => {
      func()
      this.container.emit("close")
    })

    this.card.addChild(cancleBtn.button, deleteBtn.button, txt)
    this.addChild(this.filter, this.card)
  }
}
