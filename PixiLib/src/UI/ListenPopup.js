import Manager from "../scenes/Manager.js"
import GraphicsSprite, { Filter, LineSprte, xTexture } from "./graphicSprite.js"
import * as Enum from "../Enum/index.js"
import CircleMaskCon from "./circleMaskCon.js"
import ButtonHandler from "./Button.js"
import Data from "../DC/data.js"

import * as PixiUtil from '../utils/PixiUtil';

/* 
스토리 듣기와 관련된 팝업들
*/

// 듣기관련 팝업중 가로가 긴 팝업
export class ListenPopUpLong extends PIXI.UI.Container {
  constructor (t1, t2, firstFunc, nowFunc, contentsText) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    super("100%", "100%")
    this.filter = new Filter("100%", "100%")
    this.filter.sprite.buttonMode = false

    let graphics = new PIXI.Graphics()
    graphics.lineStyle(1, 0xffffff, 1)
    graphics.beginFill(0xffffff)
    graphics.drawRoundedRect(0, 0, 490 * ratioX, 520 * ratioY, 51)
    graphics.endFill()

    this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics))

    this.card.sprite.interactive = true
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"

    graphics.clear()
    graphics.lineStyle(2, Enum.color.red, 1, 1, true)
    graphics.beginFill(Enum.color.white)
    graphics.drawRoundedRect(0, 0, 200 * ratioX, 51 * ratioY, 16 * ratioX)
    graphics.endFill()

    let btn25texture = new PIXI.Texture.from("btn25")
    let border25 = new PIXI.Texture.from("border25")

    let nowBack = new PIXI.UI.Sprite(btn25texture)
    let border = new PIXI.UI.Sprite(border25)
    border.tint = Enum.color.red
    border.width = 202.7 * ratioX
    border.height = 51.3 * ratioX
    nowBack.addChild(border)
    let firstBack = new PIXI.UI.Sprite(btn25texture)

    let listenNow = new ButtonHandler({
      width: 202.7 * ratioX,
      height: 51.3 * ratioX,
      background: nowBack,
      text: { name: t1, style: Enum.fontstyle.Red17_M },
    })
    let listenFirst = new ButtonHandler({
      width: 202.7 * ratioX,
      height: 51.3 * ratioX,
      tint: Enum.color.red,
      background: firstBack,
      text: { name: t2, style: Enum.fontstyle.White17_M },
    })

    let size = 185 * ratioX
    let circleCon = new CircleMaskCon(size, size)
    let t = Data.thumb_texture || PIXI.Texture.WHITE 
    // let t = new PIXI.Texture.from('https://peach-bookcases-pub-dev.s3.ap-northeast-2.amazonaws.com/a74c0307df7a4dc2b462c2fede0b1ce9' );
    //let t = PixiUtil.Texture.from(Data.thumb_url);
    var img = new PIXI.UI.Sprite(t)
    //console.log(img);
    img.width = img.height = "100%"
    circleCon.addChild(img)
    circleCon.horizontalAlign = "center"
    circleCon.anchorTop = 57 * ratioY

    let xtexture = xTexture(21 * ratioY, 0x4a4a4a)
    let x_btn = new PIXI.UI.Sprite(xtexture)
    x_btn.anchorTop = 28 * ratioY
    x_btn.anchorRight = 28 * ratioX
    x_btn.sprite.interactive = x_btn.sprite.buttonMode = true
    x_btn.sprite.on("click", () => {
      this.container.emit("close")
    })
    
    //Data.title이 길어질 경우 두 줄 처리
    if(Data.title.length > 25){
      let title1 = Data.title.slice(0,12)
      let title2 = Data.title.slice(13)
      let explaintitle1 = new PIXI.UI.Text(`${title1}`, Enum.fontstyle.Red19_M)
      let explaintitle2 = new PIXI.UI.Text(`${title2}`, Enum.fontstyle.Red19_M)
      explaintitle1.anchorTop = 287 * ratioY
      explaintitle2.anchorTop = 310 * ratioY
      explaintitle1.horizontalAlign = 
      explaintitle2.horizontalAlign = "center"
      
      this.card.addChild(explaintitle1,explaintitle2)
    }else{
      let title = Data.title
      let explaintitle = new PIXI.UI.Text(`${title}`, Enum.fontstyle.Red19_M)
      explaintitle.anchorTop = 300 * ratioY
      explaintitle.horizontalAlign = "center"

      this.card.addChild(explaintitle)
    }
    
    let explainmain = new PIXI.UI.Text(contentsText, Enum.fontstyle.Dark19_M)
    explainmain.horizontalAlign = "center"
    explainmain.y = 350 * ratioY
    listenNow.button.anchorRight = listenFirst.button.anchorLeft = 33 * ratioX
    listenNow.button.anchorBottom = listenFirst.button.anchorBottom = 60 * ratioY

    this.container.on("close", () => {
      if (this.parent !== null) {
        this.parent.removeChild(this)
      }
    })

    listenNow.onClick(() => {
      nowFunc()
      this.container.emit("close")
    })

    listenFirst.onClick(() => {
      listenFirst.button.blur()
      firstFunc()
      this.container.emit("close")
    })

    this.card.addChild(listenNow.button, listenFirst.button, circleCon, x_btn, explainmain)
    this.addChild(this.filter, this.card)
  }
}

//듣기 관련 팝업중 가로가 짧은 팝업
export class ListenPopUpShort extends PIXI.UI.Container {
  constructor (firstFunc, closeFunc) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    super("100%", "100%")
    this.filter = new Filter("100%", "100%")
    this.filter.sprite.buttonMode = false

    let graphics = new PIXI.Graphics()
    graphics.lineStyle(2, 0xdbdbdb, 1)
    graphics.beginFill(0xffffff)
    graphics.drawRoundedRect(0, 0, 350 * ratioX, 470 * ratioY, 51)
    graphics.endFill()

    this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics))
    this.card.sprite.interactive = true
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"
    let btn25texture = new PIXI.Texture.from("btn25")

    let closeStory = new ButtonHandler({
      width: 202 * ratioX,
      height: 51 * ratioY,
      background: new PIXI.UI.Sprite(btn25texture),
      tint: Enum.color.red,
      text: { name: "스토리 닫기", style: Enum.fontstyle.White16 },
    })
    let listenFirst = new ButtonHandler({
      width: 202 * ratioX,
      height: 24 * ratioY,
      lineColor: Enum.color.white,
      text: { name: "처음부터 읽기", style: Enum.fontstyle.line16 },
    })

    let fline = new LineSprte(listenFirst.text.width, 1, Enum.color.line)
    fline.anchorBottom = 0
    fline.horizontalAlign = "center"
    listenFirst.button.addChild(fline)

    let size = 150 * ratioX
    let circleCon = new CircleMaskCon(size, size)
    let t = Data.thumb_texture || PIXI.Texture.WHITE
    let img = new PIXI.UI.Sprite(t)
    img.width = img.height = "100%"
    circleCon.addChild(img)
    circleCon.horizontalAlign = "center"
    circleCon.anchorTop = 42 * ratioY

    let xtexture = xTexture(18 * ratioX)
    let x_btn = new PIXI.UI.Sprite(xtexture)
    x_btn.tint = 0x4a4a4a
    x_btn.width = x_btn.height = 21 * ratioX
    x_btn.anchorTop = 28 * ratioY
    x_btn.anchorRight = 28 * ratioX
    x_btn.sprite.interactive = x_btn.sprite.buttonMode = true
    x_btn.sprite.on("click", () => {
      this.container.emit("close")
    })

    let title = Data.title
    let explaintitle = new PIXI.UI.Text(`${title}`, Enum.fontstyle.Red19)
    let explainmain = new PIXI.UI.Text("이야기를 다 읽었습니다.", Enum.fontstyle.Black19)
    explainmain.horizontalAlign = explaintitle.horizontalAlign = "center"
    explainmain.anchorBottom = 152 * ratioY
    explaintitle.anchorTop = 260 * ratioY
    closeStory.button.horizontalAlign = listenFirst.button.horizontalAlign = "center"
    closeStory.button.anchorBottom = 66 * ratioY
    listenFirst.button.anchorBottom = 22 * ratioY

    this.container.on("close", () => {
      if (this.parent !== null) {
        this.parent.removeChild(this)
      }
    })

    closeStory.onClick(() => {
      closeStory.button.blur()
      closeFunc()
      this.container.emit("close")
    })

    listenFirst.onClick(() => {
      firstFunc()
      this.container.emit("close")
    })

    this.card.addChild(closeStory.button, listenFirst.button, circleCon, x_btn, explainmain, explaintitle)
    this.addChild(this.filter, this.card)
  }
}
