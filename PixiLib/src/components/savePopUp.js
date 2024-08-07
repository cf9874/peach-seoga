import * as Enum from "../Enum/index.js"
import ButtonHandler from "../UI/Button.js"
import Manager from "../scenes/Manager.js"
import { Filter, LineSprte, xTexture } from "../UI/graphicSprite.js"
import radioBox from "../UI/radio.js"
import Data from "../DC/data.js"

/* 
저작도구에서 저장하기 눌렀을때 나오는 팝업
*/
export class SavePopUp extends PIXI.UI.Container {
  constructor (saveFunc) {
    super("100%", "100%")

    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.filter = new Filter("100%", "100%")
    this.filter.sprite.buttonMode = false

    //팝업창 배경 이미지가 없어 그래픽으로 그린후 텍스쳐로 변환함
    let graphic = new PIXI.Graphics()
    const tWidth = 790 * ratioX
    const tHight = 281 * ratioY
    const dy = 52 * ratioY
    const dt = 7 * ratioY
    const radius = 10
    makeCardContainer(graphic, tWidth, tHight, dy, dt, radius)
    let cardTexture = Manager.app.renderer.generateTexture(graphic)
    this.card = new PIXI.UI.Sprite(cardTexture)
    this.card.sprite.interactive = true
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"

    let saveBtn = new ButtonHandler({
      width: 100 * ratioX,
      height: 40 * ratioY,
      tint: Enum.color.green,
      line: 0,
      text: { name: "저장", style: Enum.fontstyle.White12 },
    })
    let cancleBtn = new ButtonHandler({
      width: 100 * ratioX,
      height: 40 * ratioY,
      lineColor: Enum.color.line,
      text: { name: "취소", style: Enum.fontstyle.Black12 },
    })

    cancleBtn.button.anchorRight = 40 * ratioX
    saveBtn.button.anchorRight = 145 * ratioX
    cancleBtn.button.anchorBottom = saveBtn.button.anchorBottom = 42 * ratioY

    let title = new PIXI.UI.Text("스토리 뷰어 저장하기", Enum.fontstyle.WhiteTitle)
    title.anchorTop = 14 * ratioY
    title.anchorLeft = 53 * ratioX
    let storyTitle = new PIXI.UI.Text("제목", Enum.fontstyle.Black14_bold)
    let storyT = new PIXI.UI.Text(Data.title, Enum.fontstyle.Gray14)
    let storyLine = new LineSprte(550 * ratioX, 2, Enum.color.line)
    storyT.anchorBottom = 167 * ratioY
    storyLine.anchorTop = storyT.height + 2
    storyLine.anchorLeft = -4
    storyT.addChild(storyLine)

    storyT.anchorLeft = 210 * ratioX
    let txt = new PIXI.UI.Text("스토리 뷰어 상태", Enum.fontstyle.Black14_bold)
    txt.anchorBottom = 110 * ratioY
    txt.anchorLeft = 54 * ratioX
    storyTitle.anchorBottom = 166 * ratioY
    storyTitle.anchorLeft = 54 * ratioX
    let xtexture = xTexture(18 * ratioX)
    let x_btn = new PIXI.UI.Sprite(xtexture)
    x_btn.anchorTop = 17 * ratioY
    x_btn.anchorRight = 20 * ratioX
    x_btn.sprite.interactive = x_btn.sprite.buttonMode = true
    x_btn.sprite.on("click", () => {
      this.container.emit("close")
    })

    this.container.on("close", () => {
      this.parent.removeChild(this)
    })

    cancleBtn.onClick(() => {
      this.container.emit("close")
    })

    saveBtn.onClick(() => {
      saveFunc()
      this.container.emit("close")
    })

    let radioDoing = new radioBox({
      x: 338 * ratioX,
      y: 155 * ratioY,
      size: 6,
      value: 1,
      group: "radioStory",
    })
    let radioFin = new radioBox({
      x: 229 * ratioX,
      y: 155 * ratioY,
      size: 6,
      value: 2,
      group: "radioStory",
    })
    let radioPublish = new radioBox({
      x: 449 * ratioX,
      y: 155 * ratioY,
      size: 6,
      value: 0,
      group: "radioStory",
    })
    let fintext = new PIXI.UI.Text("작성 완료", Enum.fontstyle.Black12)
    let dotext = new PIXI.UI.Text("작성 중", Enum.fontstyle.Black12)
    let publishTxt = new PIXI.UI.Text("발행", Enum.fontstyle.Black12)
    fintext.anchorLeft = 251 * ratioX
    dotext.anchorLeft = 360 * ratioX
    publishTxt.anchorLeft = 469 * ratioX
    fintext.anchorBottom = dotext.anchorBottom = publishTxt.anchorBottom = 110 * ratioY

    //상태는 0:발행 1:작성중 2:작성완료 입니다.
    // 등록의 경우
    if (Data.state === undefined || Data.isFirst ) {
      Data.state = 1 //상태를 작성중으로 만들어줌
      radioDoing.checked = true // 라디오 박스 작성중 선택
    } else {
      switch (Data.state) {
        case 0:
          radioPublish.checked = true
          break
        case 1:
          radioDoing.checked = true
          break
        case 2:
          radioFin.checked = true
          break
      }
    }
    //라디오 버튼 선택됨에따라 Data.state값 변경해준다.
    radioFin.on("change", checked => {
      if (checked) {
        Data.state = radioFin.value
      }
    })
    radioDoing.on("change", checked => {
      if (checked) {
        Data.state = radioDoing.value
      }
    })
    radioPublish.on("change", checked => {
      if (checked) {
        Data.state = 0
      }
    })

    this.card.addChild(
      cancleBtn.button,
      saveBtn.button,
      txt,
      title,
      x_btn,
      radioFin,
      radioDoing,
      fintext,
      dotext,
      storyTitle,
      storyT,
    )
    if (!Data.isFirst) this.card.addChild(radioPublish, publishTxt)
    this.addChild(this.filter, this.card)
  }
}
//카드 콘테이너 배경 생성
export function makeCardContainer (graphic, tWidth, tHight, dy, dt, radius) {
  graphic.clear()
  graphic.lineStyle(1, 0x0ffffff, 1, 1, true)
  graphic.beginFill(Enum.color.green)
  graphic.drawRoundedRect(0, 0, tWidth, tHight - dy - dt, radius)
  graphic.endFill()

  graphic.lineStyle(1, 0xffffff, 1, 1, true)
  graphic.beginFill(0xffffff)
  graphic.drawRect(0, dy, tWidth, dt * 2)
  graphic.endFill()

  graphic.lineStyle(1, 0xffffff, 1, 1, true)
  graphic.beginFill(0xffffff)
  graphic.drawRoundedRect(0, dy + dt, tWidth, tHight - dy - dt, radius)
  graphic.endFill()
}
