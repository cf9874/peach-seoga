import Manager from "../scenes/Manager";
import { Filter, LineSprte, xTexture } from "./graphicSprite.js";
import * as Enum from "../Enum/index.js";
import ButtonHandler from "./Button.js";
import { InputNumbering, Selector } from "./dropDown.js";

export class PrintPopup extends PIXI.UI.Container {
  constructor() {
    const ratioX = Manager.ratioX;
    const ratioY = Manager.ratioY;
    super("100%", "100%");
    this.filter = new Filter("100%", "100%");
    this.filter.sprite.buttonMode = false;

    let copies = 1;
    let isColor = false;
    let isWhole = null;

    

    let graphics = new PIXI.Graphics();
    graphics.lineStyle(1, 0xffffff, 1);
    graphics.beginFill(0xeeeeee);
    graphics.drawRoundedRect(0, 0, 380 * ratioX, 560 * ratioY, 0);
    graphics.endFill();
    this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
    this.card.sprite.interactive = true;
    this.card.verticalAlign = "middle";
    this.card.horizontalAlign = "center";
    let print_icont = new PIXI.Texture.from("print_icon");
    let print_icon = new PIXI.UI.Sprite(print_icont);
    print_icon.width = 67 * ratioX;
    print_icon.height = 71 * ratioY;
    print_icon.horizontalAlign = "center";
    print_icon.anchorTop = 74 * ratioY;
    print_icon.tint = Enum.color.Black;

    let nav_color = new PIXI.UI.Text("컬러", Enum.fontstyle.Black16_R);
    let nav_copies = new PIXI.UI.Text("매수", Enum.fontstyle.Black16_R);
    nav_color.anchorLeft = nav_copies.anchorLeft = 50 * ratioX;
    nav_color.anchorTop = 258 * ratioY;
    nav_copies.anchorTop = 320 * ratioY;

    let colorArray = ["흑백", "컬러"];
    let colorSelect = new Selector({ width: 220 * ratioX, height: 32 * ratioY }, colorArray);
    let copiesSelect = new InputNumbering({ width: 220 * ratioX, height: 32 * ratioY });
    copiesSelect.interactive = copiesSelect.buttonMode = true;
    colorSelect.box.anchorLeft = copiesSelect.box.anchorLeft = 120 * ratioX;
    colorSelect.box.anchorTop = 250 * ratioY;
    copiesSelect.box.anchorTop = 320 * ratioY;

    let nowPage = new ButtonHandler({
      width: 120 * ratioX,
      height: 40 * ratioY,
      line: 0,
      tint: 0x9e9e9e,
      rounded: 40 * ratioY,
      text: { name: "현재 페이지", style: Enum.fontstyle.White14 },
    });
    let wholePage = new ButtonHandler({
      width: 120 * ratioX,
      height: 40 * ratioY,
      line: 0,
      tint: 0x9e9e9e,
      rounded: 40 * ratioY,
      text: { name: "전체 페이지", style: Enum.fontstyle.White14 },
    });
    let print = new ButtonHandler({
      width: 120 * ratioX,
      height: 40 * ratioY,
      line: 0,
      tint: 0x9e9e9e,
      text: { name: "인쇄하기", style: Enum.fontstyle.White14 },
    });
    let modal = new Modal();

    nowPage.button.anchorLeft = wholePage.button.anchorRight = 50 * ratioX;
    nowPage.button.anchorBottom = wholePage.button.anchorBottom = 120 * ratioY;
    print.button.anchorBottom = 50 * ratioY;
    print.button.horizontalAlign = "center";

    let xtexture = xTexture(21 * ratioY, 0x4a4a4a);
    let x_btn = new PIXI.UI.Sprite(xtexture);
    x_btn.anchorTop = 28 * ratioY;
    x_btn.anchorRight = 28 * ratioX;
    x_btn.sprite.interactive = x_btn.sprite.buttonMode = true;
    x_btn.sprite.on("click", () => {
      Manager.currentScene.webMenu.printBtn.backgroundColor = Enum.color.white;
      Manager.currentScene.con.container.emit("buttonblurOff");
      cancelPrint();
      this.container.emit("close");
    });

    let explainmain = new PIXI.UI.Text(
      "기본 설정된 프린터로 테스트 인쇄를 진행하여 \n\n 정상적으로 출력되는지 확인 후 진행해 주세요.",
      Enum.fontstyle.Black14_R
    );
    explainmain.horizontalAlign = "center";
    explainmain.anchorTop = 170 * ratioY;

    this.container.on("close", () => {
      if (this.parent !== null) {
        this.parent.removeChild(this);
      }
    });

    nowPage.onClick(() => {
      isWhole = false;
      nowPage.backgroundColor = 
      print.backgroundColor = Enum.color.red;
      wholePage.backgroundColor = 0x9e9e9e;
    });
    wholePage.onClick(() => {
      isWhole = true;
      nowPage.backgroundColor = 0x9e9e9e;
      wholePage.backgroundColor = 
      print.backgroundColor = Enum.color.red;
    });
    print.onClick(() => {
      isColor = colorSelect.mainBtn.main.text === "컬러" ? true : false;
      copies = copiesSelect.count.text;
      if (isWhole === null) {
        alert("페이지 설정을 완료해주세요", "#E95C63");
        return;
      }
 
      nowPage.backgroundColor = 0x9e9e9e;
      wholePage.backgroundColor = 0x9e9e9e;
      Manager.currentScene.webMenu.printBtn.backgroundColor = Enum.color.white;
      Manager.currentScene.con.container.emit("buttonblurOff");

      this.removeChild(this.card);
      this.addChild(modal.card);  
    });

    modal.leaveBtn.onClick(() => {
      let printOptions ={
        copies,
        isColor,
        isWhole,
      };
      close(this);
      Manager.print(printOptions);
      cancelPrint();
    });
    modal.x_btn.sprite.on("click", () => {
      let printOptions ={
        copies,
        isColor,
        isWhole,
      };
      close(this);
      Manager.print(printOptions);
      cancelPrint();
    });

    this.card.addChild(
      print_icon,
      nowPage.button,
      wholePage.button,
      print.button,
      explainmain,
      x_btn,
      nav_color,
      nav_copies,
      copiesSelect.box,
      colorSelect.box
    );
    this.addChild(this.filter, this.card);

    function close(e) {
      e.container.emit("close");
      Manager.currentScene.webMenu.printBtn.backgroundColor = Enum.color.white;
      Manager.currentScene.con.container.emit("buttonblurOff");
      e.addChild(e.card);
      e.removeChild(modal.card);
    }
    function cancelPrint() {
      nowPage.backgroundColor = 
      wholePage.backgroundColor = 
      print.backgroundColor =
      0x9e9e9e;
      colorSelect.mainBtn.main.text = "흑백";
      copiesSelect.count.text = 1;
      copies = 1;
      isColor = false;
      isWhole = null;
    }
  }
}
export class Modal extends PIXI.UI.Container {
  constructor() {
    const ratioX = Manager.ratioX;
    const ratioY = Manager.ratioY;
    super("100%", "100%");

    let graphics = new PIXI.Graphics();
    graphics.lineStyle(1, 0xffffff, 1);
    graphics.beginFill(0xeeeeee);
    graphics.drawRoundedRect(0, 0, 380 * ratioX, 380 * ratioY, 0);
    graphics.endFill();

    this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
    this.card.sprite.interactive = true;
    this.card.verticalAlign = "middle";
    this.card.horizontalAlign = "center";

    let xtexture = xTexture(21 * ratioY, 0x4a4a4a);
    this.x_btn = new PIXI.UI.Sprite(xtexture);
    this.x_btn.anchorTop = 28 * ratioY;
    this.x_btn.anchorRight = 28 * ratioX;
    this.x_btn.sprite.interactive = this.x_btn.sprite.buttonMode = true;

    let print_icont = new PIXI.Texture.from("print_icon");
    let print_icon = new PIXI.UI.Sprite(print_icont);
    print_icon.width = 67 * ratioX;
    print_icon.height = 71 * ratioY;
    print_icon.horizontalAlign = "center";
    print_icon.anchorTop = 74 * ratioY;
    print_icon.tint = Enum.color.Black;

    let explainmain = new PIXI.UI.Text("인쇄가 시작됩니다.", Enum.fontstyle.Black25_R);
    explainmain.horizontalAlign = "center";
    explainmain.anchorTop = 190 * ratioY;

    this.leaveBtn = new ButtonHandler({
      width: 120 * ratioX,
      height: 45 * ratioY,
      lineColor: Enum.color.line,
      line: 3,
      text: { name: "확인", style: Enum.fontstyle.Black14_bold },
    });
    this.leaveBtn.button.horizontalAlign = "center";
    this.leaveBtn.button.anchorBottom = 74 * ratioY;
    this.card.addChild(print_icon, this.x_btn, this.leaveBtn.button, explainmain);
  }
}
