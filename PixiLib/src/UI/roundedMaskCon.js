import Manager from "../scenes/Manager.js"
import GraphicsSprite from "./graphicSprite.js"

/* 
스프라이트를 둥근 네모모양으로 만들어주는 마스크 콘테이너 
*/
export default class RoundedMaskCon extends PIXI.UI.Container {
  constructor (width, height, radius) {
    super(width, height)
    this.save = { width: 0, height: 0 }
    this.radius = radius
    this.setupMask()
  }
  setupMask () {
    let mask = new PIXI.Graphics()
    this.container.addChild(mask)
    this.container.mask = mask
    this.resizeUpdate()
  }
  resizeUpdate () {
    if (this.actual_width !== this.save.width || this.actual_height !== this.save.height) {
      this.container.mask.clear()
      this.container.mask.lineStyle(0)
      this.container.mask.beginFill(0xffffff, 1)
      this.save.width = this.actual_width
      this.save.height = this.actual_height
      this.container.mask.drawRoundedRect(0, 0, this.save.width, this.save.height)
      this.container.mask.endFill()
    }
  }

  border () {
    let graphic = new PIXI.Graphics()
    graphic.clear()
    graphic.lineStyle(1, 0xcfcfcf, 1, 1)
    graphic.drawRoundedRect(0, 0, this.save.width - 1, this.save.height)
    graphic.endFill()
    let sprite = new GraphicsSprite(graphic)
    this.addChild(sprite)
  }
}
