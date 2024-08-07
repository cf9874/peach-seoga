import ArrowLeft from "../components/arrowLeft.js"
import ArrowRight from "../components/arrowRight.js"
import WebMenu from "../components/WebMenu.js"
import Viewer from "../components/viewer.js"
import Manager from "./Manager.js"
import Data from "../DC/data.js"
import Highlighter from "../UI/highlighter.js"
import WebCardCon from "../components/webCardCon.js"
import WebAudioCon from "../components/webAudioCon.js"
import WebPaintCon from "../components/webPaintCon.js"
import PrevCard from "../components/prevCard.js"
import FullPageContainer from "../components/FullPageContainer.js"
import WebBookmarkCon from "../components/webBookmarkCon.js"
import { get_BookMark, perUse } from "../DC/api.js"
import { ListenPopUpLong, ListenPopUpShort } from "../UI/ListenPopup.js"
import { color } from "../Enum/index.js"
import peachClose from "../setclose/peachclose.js"
import TutorialContainer from "../components/tutorialContainer.js"
import SceneBase from "./SceneBase.js"

export default class TestScene extends SceneBase {
  constructor (url) {
    super();
    // var sp = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
    // sp.width = 500;
    // sp.height = 500;
    // sp.tint = 0xff0000;

    // sp.sprite.interactive  = true
    // sp.interactive = sp.buttonMode = true

    // sp.on('click', ()=>{
    //   'AAA';
    // })

    // var btn = new PIXI.UI.Button({
    //   background: new PIXI.UI.Sprite(PIXI.Texture.WHITE)
    // });

    // btn.on("click",()=>{
    //   console.log("click");
    // })

    // console.log(sp);
    // console.log(sp.sprite);


    // sp.sprite.on('click', ()=>{
    //   'AAA';
    // })

    // var sp1 = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
    // // sp1.width = "50%";
    // // sp1.height = "100%";
    // sp1.left = sp1.right = sp1.top = 30;
    // sp1.tint = 0x0000ff;


    // this.con.addChild(sp);
    // sp.addChild(sp1);

    // setInterval(()=>{
    //   sp.width += 1;
    //   sp.height += 1;
    // }, 100);

    // this.con.addChild(btn);
    // this.test1()
    
    this.test1()

  }

  test2() {
    this._fontSize = 35;
    this._color = 0xff0000;

    var bg = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
    bg.tint = 0x32A4FF;
    bg.width = bg.height= "100%";
    this.con.addChild(bg);

    let t = new PIXI.Texture.from("/peachImage/dotSquare.png")
    let dotSprite = new PIXI.UI.Sprite(t)
    dotSprite.tint = 0xff0000
    dotSprite.width = 300
    dotSprite.height = 30

    this.con.addChild(dotSprite)

  }


  test1()
  {
    this._fontSize = 35;
    this._color = 0xff0000;

    var bg = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
    bg.tint = 0x32A4FF;
    bg.width = bg.height= "100%";
    this.con.addChild(bg);


    // console.log(new PIXI.UI.Sprite(PIXI.Texture.WHITE).width);
    var t1 = new PIXI.UI.TextInput({
      background: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
      style: {
        fontSize: this._fontSize,
        fill: this._color,
        fontfamily: "Noto Sans KR",
        breakWords: true
      },
      // lineHeight: this._fontSize,
      width: 100,
      height: 100,
      // multiLine: true,
    })

    // t1.on("")

    t1.on("change", e =>{
      switch(e.key)
      {
        case "Enter":
        t1.height += 150;
        break;
      }
      // console.log(e);
      // console.log(t1);
      t1.width = t1.textContainer.innerContainer.width;
      t1.height = t1.textContainer.innerContainer.height;
    });

    t1.x = 30;
    t1.y = 60;

    // t1.focus(dd)
    
    var t2 = new PIXI.UI.TextInput({
      background: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
      style: {
        fontSize: this._fontSize,
        fill: this._color,
        fontfamily: "Noto Sans KR",
      },
      lineHeight: this._fontSize,
      width: this._fontSize * 6,
      height: this._fontSize + 10,
    })

    t2.x = 30;
    t2.y = 120;

    var sp = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
    sp.tint = 0xff0000;
    this.con.addChild(sp, t1);
  }

}
