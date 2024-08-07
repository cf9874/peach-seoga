import Manager from "../scenes/Manager.js"
import GraphicsSprite, { Filter, LineSprte, xTexture } from "./graphicSprite.js"
import * as Enum from "../Enum/index.js"
import CircleMaskCon from "./circleMaskCon.js"
import ButtonHandler from "./Button.js"
import Data from "../DC/data.js"

/* 
에러 났을 때 뜨는 팝업
*/


export class ErrorPopUp  {

  constructor() {

    const _app = new PIXI.Application({
     
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      transparent: true,
    })

    document.body.appendChild(_app.view);

    const con = new PIXI.Container();
    
    const graphics = new PIXI.Graphics()
    graphics.lineStyle(1, 0xcccccc, 1)
    graphics.beginFill(0xcccccc)
    graphics.drawRoundedRect(0, 0,450, 200, 5)
    graphics.endFill()

    const title = new PIXI.Text('잘못된 접근입니다.',Enum.fontstyle.Black17);
    title.x = graphics.width / 2 - title.width / 2; 
    title.y = 50
    
    con.addChild(graphics);

    con.x = screen.width / 2 - graphics.width / 2;
    con.y = 100
    
    const btnGraphics = new PIXI.Graphics()
    btnGraphics.lineStyle(2, Enum.color.white, 1, 1, true)
    btnGraphics.beginFill(Enum.color.white)
    btnGraphics.drawRoundedRect(0, 0, 180, 45 , 10 )
    btnGraphics.endFill()

    btnGraphics.x = graphics.width / 2 - btnGraphics.width / 2;
    btnGraphics.y = 130;

    btnGraphics.interactive = true;
    btnGraphics.buttonMode = true;

    
    const backText = new PIXI.Text('홈페이지로 이동',Enum.fontstyle.Black16_bold);
    backText.anchor.set(0.5);
    backText.x = graphics.width / 2 ; 
    backText.y = 153 ;

    con.addChild(btnGraphics, title, backText)
    

    btnGraphics.on("click", () => {
      // console.log("go home")
      // window.history.back();
      let link = "https://www-qa.peachseoga.com/"
      location.href=link;
      
    })

    _app.stage.addChild(con)
    
  }    
    
}



