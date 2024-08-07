import * as Enum from "../Enum/index.js"
import Manager from "../scenes/Manager.js"
import { Filter } from "../UI/graphicSprite.js"
/* 
미리보기 혹은 사용자 페이지에서 사용하는
그림단어 팝업 base이다.
*/
export default class PrevCard extends PIXI.UI.Container {
  constructor () {
    super("100%", "100%")
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.filter = new Filter("100%", "100%")
    this.card = new PIXI.UI.Sprite(PIXI.Texture.WHITE)
    this.card.width = 490 * ratioX
    this.card.height = 682 * ratioY
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"
    this.container.on("close", () => {
      this.parent.removeChild(this)
    })

    this.filter.sprite.on("click", () => {
      this.filter.parent.container.emit("close")
    })

    this.addChild(this.filter, this.card)
  }
}
