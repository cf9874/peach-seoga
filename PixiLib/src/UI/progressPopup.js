import * as Enum from "../Enum/index.js"
import Manager from "../scenes/Manager.js"
import ButtonHandler from "./Button.js"
import { Filter } from "./graphicSprite.js"

/* 
저장후 종료할때 zip파일 진행 상황 혹은 서버와 소통 상태를 보여주는 팝업창
*/
export class ProgressPopup extends PIXI.UI.Container {
  constructor () {
    super("100%", "100%")
    this.filter = new Filter("100%", "100%")

    let graphics = new PIXI.Graphics()
    graphics.lineStyle(2, 0xffffff, 1)
    graphics.beginFill(0xffffff)
    graphics.drawRoundedRect(0, 0, 410 * Manager.ratioX, 120 * Manager.ratioY, 4)
    graphics.endFill()

    this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics))
    this.card.sprite.interactive = true
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"
    let txt = new PIXI.UI.Text("", Enum.fontstyle.Black16)
    txt.anchorTop = (this.card.height - txt.height) / 2
    txt.horizontalAlign = "center"
    this.txt = txt
    this.card.addChild(txt)
    this.addChild(this.filter, this.card)
  }

  Setpublish (endFunc) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.txt.anchorTop = 20 * ratioY

    let endBtn = new ButtonHandler({
      tint: Enum.color.green,
      text: { name: "스토리 저작도구 닫기", style: Enum.fontstyle.White14 },
      width: 162 * ratioX,
      height: 36 * ratioY,
    })
    this.txt.text = "발행되었습니다."
    endBtn.onClick(() => {
      endBtn.button.blur()
      endFunc()
    })

    endBtn.button.anchorBottom = 20 * ratioY
    endBtn.button.horizontalAlign = "center"

    this.card.addChild(endBtn.button)
  }
}
