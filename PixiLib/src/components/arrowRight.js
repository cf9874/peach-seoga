import * as Enum from "../Enum/index.js"
import Manager from "../scenes/Manager.js"
import ButtonHandler from "../UI/Button.js"
import GraphicsSprite from "../UI/graphicSprite.js"
/* 
pdf파일 다음 페이지로 가는 오른쪽 화살표
전체화면보기와 기본화면 보기 기능이 추가 되어있음
*/
export default class ArrowRight extends PIXI.UI.Sprite {
  constructor (width) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let graphic = new PIXI.Graphics()
    graphic.lineStyle(1, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRect(0, 0, width, window.innerHeight)
    graphic.endFill()
    super(Manager.app.renderer.generateTexture(graphic))
    this.width = width
    this.heigth = "100%"

    let arrowTexture = new PIXI.Texture.from("triangleR")
    let arrowSp = new PIXI.UI.Sprite(arrowTexture)

    arrowSp.horizontalAlign = "center"
    arrowSp.y = window.innerHeight * 0.5
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
