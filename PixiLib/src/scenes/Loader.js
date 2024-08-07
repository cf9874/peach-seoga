import { assetsWeb, assetsAdmin } from "../UI/assets.js"
import GraphicsSprite from "../UI/graphicSprite.js"
import AdminScene from "./AdminScene.js"
import Manager from "./Manager.js"
import TestScene from "./TestScene.js"
import WebScene from "./WebScene.js"

const loaderBarWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.2
const loaderBarHeight = 500 

/* 
LoaderScene
PIXI.Loader를 사용해 이미지 텍스쳐를 미리 로드하고 전역적으로 사용할 수 있게함
flag에 따라 사용자인지 관리자인지 구분해서 load한다.
*/
export default class LoaderScene {
  constructor (flag, url) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY

    this.con = new PIXI.UI.Container("100%", "100%")
    this.url = url
    let texture = PIXI.Texture.WHITE
    let sp = new PIXI.UI.Sprite(texture)
    this.con.addChild(sp)
    sp.tint = 0xffffff
    sp.width = Math.max(document.documentElement.clientWidth, window.innerWidth)
    sp.height = Math.max(document.documentElement.clientHeight, window.innerHeight)

    this.loader = new PIXI.Loader()
    this.IsAdmin = flag
    this.loaderBarFill = new PIXI.Graphics()
    this.loaderBarFill.beginFill(0xffffff, 1)
    this.loaderBarFill.drawRect(0, 0, loaderBarWidth, loaderBarHeight+100)
    this.loaderBarFill.endFill()

    this.loaderBarBoder = new PIXI.Graphics()
    this.loaderBarBoder.drawRect(0, 0, loaderBarWidth, loaderBarHeight +100)

    this.barfill = new GraphicsSprite(this.loaderBarFill)
    this.barfill.height = 0

    let barboarder = new GraphicsSprite(this.loaderBarBoder)
    this.loaderBar = new PIXI.UI.Container()
    this.loaderBar.addChild(this.barfill)
    this.loaderBar.addChild(barboarder)

    this.loaderBar.anchorTop = Manager.height / 2 - loaderBarHeight / 2
    this.loaderBar.anchorLeft = Manager.width / 2 - loaderBarWidth / 2 
    this.loader.reset()

    if (this.IsAdmin) {
      this.loader.add(assetsAdmin)
    } else {
      this.loader.add(assetsWeb)
    }
    let symbolTexture = new PIXI.Texture.from('peachImage/symbol.png')
    let logoTexture = new PIXI.Texture.from('peachImage/peach_logo_black.png')
    let symbol = new PIXI.UI.Sprite(symbolTexture)
    let logo = new PIXI.UI.Sprite(logoTexture)
    symbol.width = loaderBarWidth / 2.55
    symbol.height = loaderBarWidth
    logo.width = 200 * ratioX
    logo.height = 44.58 * ratioY

    symbol.anchorTop = Manager.height / 2 - symbol.height / 2  
    logo.anchorBottom = loaderBarHeight *0.2

    symbol.anchorLeft = Manager.width / 2 -  symbol.width /2
    // symbol.horizontalAlign = "middle"
    logo.anchorLeft = (Manager.width ) / 2 -logo.width/2
    
    this.loader.onProgress.add(this.downloadProgress, this)
    this.loader.onComplete.once(this.gameLoaded, this)
    this.con.addChild(symbol,logo)
    this.loader.load()
    this.con.addChild(this.loaderBar)
  }

  downloadProgress (loader) {
    const progressRatio = loader.progress / 100
    this.barfill.height =  loaderBarWidth - loaderBarWidth * progressRatio
  }

  gameLoaded () {
    if (this.IsAdmin) Manager.changeScene(new AdminScene(this.url))
    else Manager.changeScene(new WebScene(this.url))
    // Manager.changeScene(new TestScene());
    // Manager.changeScene(new Scene())
  }

  update (framesPassed) {}

  resize (screenWidth, screenHeight) {}
}
