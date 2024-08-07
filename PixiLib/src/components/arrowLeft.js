import * as Enum from "../Enum/index.js"
import Manager from "../scenes/Manager.js"
/* 
pdf파일 이전 페이지로 가는 왼쪽 화살표
*/
export default class ArrowLeft extends PIXI.UI.Sprite {
  constructor (width) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let graphic = new PIXI.Graphics()
    graphic.lineStyle(1, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRect(0, 0, width , window.innerHeight)
    graphic.endFill()
    super(Manager.app.renderer.generateTexture(graphic))
    this.width = width
    this.heigth = "100%"
    // this.tint = 0xFEE469

    let arrowTexture = new PIXI.Texture.from("triangleL")
    let arrowSp = new PIXI.UI.Sprite(arrowTexture)

    arrowSp.horizontalAlign = "center"
    arrowSp.y =  window.innerHeight * 0.5
    arrowSp.width = 27 * ratioX
    arrowSp.height = 42 * ratioY
    arrowSp.tint = Enum.color.arrow

    this.sprite.interactive = true
    this.sprite.buttonMode = true

    this.sprite.on('mouseover',()=>{
      arrowSp.tint = Enum.color.red
    })
    this.sprite.on('mouseout',()=>{
      arrowSp.tint = Enum.color.arrow
    })
    this.addChild(arrowSp)
  }
}
