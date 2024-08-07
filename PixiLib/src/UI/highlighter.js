import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"

/* 
하이라이터 클래스
*/
export default class Highlighter extends PIXI.UI.Container {
  startLine (Ratio) {
    this.sprite.width = this.lineWidth * Ratio
  }

  position (x, y) {
    this.x = x
    this.y = y
  }

  redraw (width, height) {
    this.fill.beginFill(Enum.color.red, 0.5)
    this.fill.drawRoundedRect(0, 0, width, height, 5)
    this.fill.endFill()
    this.lineWidth = width
    this.texture = Manager.app.renderer.generateTexture(this.fill)
    this.sprite.texture = this.texture
    this.sprite.width = 0
    this.sprite.height = height
  }

  constructor () {
    super(window.innerWidth, window.innerHeight)
    this.fill = new PIXI.Graphics()
    this.lineWidth = 100

    this.fill.beginFill(Enum.color.red, 0.4)
    this.fill.drawRoundedRect(0, 0, 100, 100, 4)
    this.fill.endFill()

    this.texture = Manager.app.renderer.generateTexture(this.fill)
    this.sprite = new PIXI.UI.SliceSprite(this.texture, 2)
    this.sprite.width = 0

    this.addChild(this.sprite)
  }
}
