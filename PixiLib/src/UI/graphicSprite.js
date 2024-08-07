import Color from "../Enum/color.js"
import Manager from "../scenes/Manager.js"

/* 
그래픽으로 스프라이트 만들때 사용하는 클래스
*/
export default class GraphicsSprite extends PIXI.UI.Sprite {
  constructor (graphic) {
    let texture = Manager.app.renderer.generateTexture(graphic)
    super(texture)
  }
}

/* 
그래픽으로 텍스쳐 만들때 사용
*/
export class GraphicTexture {
  constructor (graphic) {
    let texture = Manager.app.renderer.generateTexture(graphic)
    return texture
  }
}

/* 
가로 세로 길이 지정해서 스프라이트 만듬
사각형 만드는 클래스라고 생각해도 무방
*/
export class LineSprte extends PIXI.UI.Sprite {
  constructor (width, height, color) {
    let graphic = new PIXI.Graphics()
    graphic.beginFill(color)
    graphic.drawRect(0, 0, width, height)
    graphic.endFill()
    let texture = Manager.app.renderer.generateTexture(graphic)
    super(texture)
  }
}

/* 
까만 배경필터
*/
export class Filter extends PIXI.UI.Sprite {
  constructor (width, height) {
    super(PIXI.Texture.WHITE)
    this.tint = 0x000000
    this.alpha = 0.8
    this.width = width
    this.height = height
    this.sprite.interactive = true
    this.sprite.buttonMode = true
  }
}

/* 
보더가 있는 사각형 생성시 사용하는 클래스
*/
export class BorderSprite extends PIXI.UI.Sprite {
  constructor (tint, lineColor, width, height, line) {
    let graphic = new PIXI.Graphics()
    graphic.lineStyle(line, lineColor)
    graphic.beginFill(tint)
    graphic.drawRect(0, 0, width, height)
    graphic.endFill()

    let texture = Manager.app.renderer.generateTexture(graphic)
    super(texture)
  }
}

/* 
보더만 원할때 사용하는 클래스
*/
export class StrokeSquare extends PIXI.UI.Sprite {
  constructor (lineColor, width, height, line) {
    let graphic = new PIXI.Graphics()
    graphic.lineStyle(line, lineColor, 1, 0)
    graphic.drawRect(0, 0, width, height)
    graphic.endFill()

    let texture = Manager.app.renderer.generateTexture(graphic)
    super(texture)
  }
}

/* 
끝이 동글동글한 X자 텍스쳐 (사용자 페이지에서만 사용함)
*/
export function sXTexture (size) {
  let graphic = new PIXI.Graphics()
  graphic.lineStyle({
    width: 2,
    color: 0xffffff,
    alpha: 1,
    join: "round",
    cap: "round",
  })
  graphic.moveTo(0, 0)
  graphic.lineTo(size, size)
  graphic.moveTo(size, 0)
  graphic.lineTo(0, size)
  graphic.endFill()
  let texture = Manager.app.renderer.generateTexture(graphic)
  return texture
}
/* 
일반적인 X모양의 텍스쳐
*/
export function xTexture (size, color = 0xffffff) {
  let graphic = new PIXI.Graphics()
  graphic.lineStyle(2, color)
  graphic.moveTo(0, 0)
  graphic.lineTo(size, size)
  graphic.moveTo(size, 0)
  graphic.lineTo(0, size)
  graphic.endFill()
  let texture = Manager.app.renderer.generateTexture(graphic)
  return texture
}
/* 
북마크 모양 텍스쳐
*/
export function bookmarkTexture (width, height, color = Color.red) {
  let graphic = new PIXI.Graphics()
  let a = Math.floor(height * 0.7)
  const path = [0, 0, width, 0, width, height, width / 2, a, 0, height]
  graphic.lineStyle(0)
  graphic.beginFill(color, 1)
  graphic.drawPolygon(path)
  graphic.endFill()
  let texture = Manager.app.renderer.generateTexture(graphic)
  return texture
}
