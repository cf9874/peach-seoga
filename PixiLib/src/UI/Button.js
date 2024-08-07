import GraphicsSprite from "./graphicSprite.js"
import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
/* 
pixi ui 버튼을 만들때 옵션으로 빠르게 만들기 위한 버튼 핸들러
단, container에 addchild할때 .button을 addChild해야함 (this.button이 pixi.ui.button이기 때문)
*/
//
export default class ButtonHandler {
  set text (t) {
    this.buttonText.text = t
  }
  get text () {
    return this.buttonText
  }

  set changeBack (texture) {
    this.button.background.sprite.texture = texture
  }

  set backgroundColor (tint) {
    this.button.background.tint = tint
  }

  pos (x, y) {
    this.button.x = x
    this.button.y = y
  }

  get bounds () {
    return this.target.getBoundingClientRect()
  }

  set alpha (a) {
    this.button.background.alpha = a
  }

  onHover (func) {
    this.button.on("hover", func)
  }

  onClick (func) {
    this.button.on("click", func)
  }

  addImage (obj, bg) {
    if(bg) this.button.addChild(bg)
    let t = new PIXI.Texture.from(obj.url)
    this[obj.url] = new PIXI.UI.Sprite(t)

    if (obj.tint) this[obj.url].tint = obj.tint
    this[obj.url].interactive = true
    this[obj.url].buttonMode = true
    if (obj.width) this[obj.url].width = obj.width
    if (obj.height) this[obj.url].height = obj.height

    this[obj.url].pivotX = 0.5
    this[obj.url].pivotY = 0.5
    this.button.addChild(this[obj.url])
  }

  removeImage(obj){
    this.button.removeChild(this[obj.url])
  }
  
  addText (obj) {
    this[obj.name] = new PIXI.UI.Text(obj.text, obj.style)
    this.button.addChild(this[obj.name])
  }
  
  removeText (obj) {
    this.button.removeChild(this[obj.name])
  }

  MakedisableTexture (tint, lineColor) {
    this.graphic.clear()
    this.graphic.lineStyle(2, lineColor, 1, 1, true)
    this.graphic.beginFill(tint)
    this.graphic.drawRect(0, 0, this.button.width, this.button.height)
    this.graphic.endFill()

    this.disableT = Manager.app.renderer.generateTexture(this.graphic)
  }
  MakeactiveTexture (tint, lineColor) {
    this.graphic.clear()
    this.graphic.lineStyle(2, lineColor)
    this.graphic.beginFill(tint)
    this.graphic.drawRect(0, 0, this.button.width, this.button.height)
    this.graphic.endFill()

    this.activeT = Manager.app.renderer.generateTexture(this.graphic)
  }

  constructor (option) {
    this.graphic = new PIXI.Graphics()
    let lineColor = option.lineColor || 0
    let line = 2
    if (option.line !== undefined) line = option.line
    this.graphic.lineStyle(line, lineColor, 1, 1, true)
    this.graphic.beginFill(0xffffff)
    if (option.rounded) {
      this.graphic.drawRoundedRect(0, 0, option.width, option.height, option.rounded )
    } else {
      this.graphic.drawRect(0, 0, option.width, option.height)
    }
    this.graphic.endFill()

    if (option.background) this.background = option.background
    else this.background = new GraphicsSprite(this.graphic)

    if (option.text) {
      let obj = option.text
      
      this.buttonText = new PIXI.UI.Text(obj.name, obj.style)

      this.button = new PIXI.UI.Button({
        background: this.background,
        width: option.width,
        height: option.height,
        text: this.buttonText,
      })
    } else {
      this.button = new PIXI.UI.Button({
        background: this.background,
        width: option.width,
        height: option.height,
      })
    }

    if (option.img) {
      let obj = option.img
      if(obj.url) {
      this.addImage(obj,option.bg)
      }
    }

    if (option.tint) this.background.tint = option.tint
  }
}
