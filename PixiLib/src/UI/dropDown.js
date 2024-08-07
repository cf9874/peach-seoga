import ButtonHandler from "./Button.js";
import VirtualCon from "./virtualCon.js";
import * as Enum from "../Enum/index.js";
import { BorderSprite } from "./graphicSprite.js";
import Manager from "../scenes/Manager.js";

/* 
드롭다운 클래스
*/
export default class DropDown extends PIXI.UI.Container {
  // value
  // click = false

  ddd() {}
  constructor(option, list) {
    super(option.width, option.height);
    const ratioX = Manager.ratioX;
    const ratioY = Manager.ratioY;

    this.click = false;
    this.mainBtn = new ButtonHandler({
      width: option.width,
      height: option.height,
      lineColor: 0x0,
      img: {
        url: "dsc",
        width: 8,
        height: 6,
        tint: 0x9e9e9e,
      },
    });
    this.mainBtn.addText({ text: "전체", style: Enum.fontstyle.Black12, name: "main" });
    this.mainBtn.onClick(() => {
      this.click = !this.click;
      if (this.click) {
        this.addChild(...item.con);
      } else this.removeChild(...item.con);
    });

    let item = new ListItem(this.mainBtn);

    this.mainBtn.dsc.anchorTop = 10 * ratioY;
    this.mainBtn.dsc.anchorRight = 10 * ratioX;
    this.mainBtn.main.verticalAlign = "middle";
    this.mainBtn.main.anchorLeft = 10 * ratioX;
    // this.mainBtn.pos(10, 100)
    this.addChild(this.mainBtn.button);
  }
}

// 이렇게 생긴 아이템을 각각 만들어서 DropDown으로 보내준다.
export class ListItem {
  constructor(mainBtn) {
    this.con = new VirtualCon();
    let titles = ["전체", "명사"];
    // let backBox = new BorderSprite(0xffffff, 0x000000, 93, 32 * titles.length + 1, 1)
    // backBox.anchorTop = 0
    // backBox.anchorLeft = 0

    // this.con.addChild(backBox)
    for (let i = 0; i < titles.length; i++) {
      const title = titles[i];
      const name = "part" + i;
      const width = 92;
      const height = 32;
      let btn = new ButtonHandler({
        width,
        height,
        line: 1,
        lineColor: 0x0,
      });
      btn.addText({ text: title, style: Enum.fontstyle.Black12, name });
      btn[name].verticalAlign = "middle";
      btn[name].anchorLeft = 10;
      // btn.pos(10, height + 101 + height * i)

      btn.onHover((e) => {
        if (e) {
          btn[name]._text.style.fill = 0xff0000;
        } else {
          btn[name]._text.style.fill = 0x000000;
        }
      });

      btn.onClick(() => {
        mainBtn.main.text = btn[name].text;
        mainBtn.button.emit("click");
      });
      btn.button.anchorTop = (height - 2) * (i + 1);
      this.con.addChild(btn.button);
    }
  }
}

export class Selector {
  constructor(option, list) {
    const { width, height } = option;
    const ratioX = Manager.ratioX;
    const ratioY = Manager.ratioY;

    this.mainBtn = new ButtonHandler({
      width,
      height,
      lineColor: 0xffffff,
      img: {
        url: "dsc",
        width: 13 * ratioX,
        height: 13 * ratioY,
        tint: 0x9e9e9e,
      },
    });
    this.mainBtn.addText({ text: list[0], style: Enum.fontstyle.Black12, name: "main" });
    this.mainBtn.dsc.anchorTop = 10 * ratioY;
    this.mainBtn.dsc.anchorRight = 10 * ratioX;
    this.mainBtn.main.verticalAlign = "middle";
    this.mainBtn.main.anchorLeft = 20 * ratioX;

    let graphics = new PIXI.Graphics();
    graphics.lineStyle(0, 0xffffff);
    graphics.beginFill(0xffffff);
    graphics.drawRoundedRect(0, 0, width, height, 5);
    graphics.endFill();

    this.box = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
    let subBtn = this.addList({ width, height }, list);
    this.mainBtn.onClick(() => {
      this.click = !this.click;
      if (this.click) {
        this.box.addChild(...subBtn);
      } else this.box.removeChild(...subBtn);
    });
    this.box.addChild(this.mainBtn.button);
  }

  addList(option, list) {
    const ratioX = Manager.ratioX;
    const ratioY = Manager.ratioY;
    const { width, height } = option;
    const btnList = [];
    for (let i = 0; i < list.length; i++) {
      let btn = new ButtonHandler({
        width,
        height,
        lineColor: 0xffffff,
        rounded: 0,
      });
      btn.addText({ text: list[i], style: Enum.fontstyle.Black12, name: list[i] });
      btn[list[i]].verticalAlign = "middle";
      btn[list[i]].anchorLeft = 20 * ratioX;
      btn.button.anchorTop = (height - 1) * (i + 1) * ratioY;
      // btn.button.anchorLeft= -1 * ratioX
      btn.onClick(() => {
        this.mainBtn.main.text = btn[list[i]].text;
        this.mainBtn.button.emit("click");
      });
      btn.onHover((e) => {
        if (e) {
          btn[list[i]]._text.style.fill = 0xff0000;
        } else {
          btn[list[i]]._text.style.fill = 0x000000;
        }
      });
      btnList.push(btn.button);
    }
    return btnList;
  }
}

export class InputNumbering {
  constructor(option) {
    const { width, height } = option;
    const ratioX = Manager.ratioX;
    const ratioY = Manager.ratioY;

    this.count = new PIXI.UI.Text("1", Enum.fontstyle.Black16_R);
    this.count.anchorLeft = 20 * ratioX;
    this.count.verticalAlign = "middle";
    let graphics = new PIXI.Graphics();
    graphics.lineStyle(0, 0xffffff);
    graphics.beginFill(0xffffff);
    graphics.drawRoundedRect(0, 0, width, height, 5);
    graphics.endFill();

    this.box = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
    this.box.interactive = true;
    this.box.buttonMode = true;

    let ascBtn = new ButtonHandler({
      width: 13 * ratioX,
      height: 13 * ratioY,
      lineColor: 0xffffff,
      img: {
        url: "asc",
        width: 13 * ratioX,
        height: 13 * ratioY,
        tint: 0x9e9e9e,
      },
    });
    let dscBtn = new ButtonHandler({
      width: 13 * ratioX,
      height: 13 * ratioY,
      lineColor: 0xffffff,
      img: {
        url: "dsc",
        width: 13 * ratioX,
        height: 13 * ratioY,
        tint: 0x9e9e9e,
      },
    });
    ascBtn.asc.pivotX = ascBtn.asc.pivotY = 0;
    dscBtn.dsc.pivotX = dscBtn.dsc.pivotY = 0;

    ascBtn.button.anchorRight = dscBtn.button.anchorRight = 10 * ratioX;
    ascBtn.button.anchorTop = dscBtn.button.anchorBottom = 3 * ratioY;

    // ascBtn.button.interactive = dscBtn.button.interactive = ascBtn.buttonMode = dscBtn.buttonMode = true;

    ascBtn.onClick(() => {
      this.count.text = +this.count.text + 1;
    });
    dscBtn.onClick(() => {
      this.count.text = +this.count.text - 1;
      console.log(218218, this.count.text);
      if (+this.count.text < 1) {
        alert("1장 미만으로는 인쇄할 수 없어요","#E95C63");
        this.count.text = 1;
        return;
      }
    });

    this.box.addChild(this.count, ascBtn.button, dscBtn.button);
  }
}
