import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
import ButtonHandler from "../UI/Button.js"
import GraphicsSprite from "../UI/graphicSprite.js"
import Data from "../DC/data.js"

/* 
저작도구 시작시 썸네일과 페이지 이동 보이는 부분
isFirst에 따라 스토리 제작하기 또는 스토리 수정하기 버튼 생성
발행일땐 스토리 수정하기 버튼이 회색으로 바뀜
*/
export class ScrollThumb extends PIXI.UI.Sprite {
  constructor (thumbArr, queueRenderPage) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let graphic = new PIXI.Graphics()
    const tWidth = 1614 * ratioX
    const tHeight = Manager.height
    super(PIXI.Texture.WHITE)
    this.width = tWidth
    this.height = tHeight

    graphic.clear()
    graphic.lineStyle(2, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, 10, 10, 10)
    graphic.endFill()
    let t = Manager.app.renderer.generateTexture(graphic)
    this.verticalAlign = "middle"
    this.anchorLeft = 221 * ratioX

    let listCon = new PIXI.UI.Container("100%", "100%")
    let ScrollingContainer = new PIXI.UI.ScrollingContainer({
      scrollX: false,
      scrollY: true,
    })
    ScrollingContainer.anchorLeft = ScrollingContainer.anchorRight = 0
    ScrollingContainer.anchorTop = 63 * ratioY
    ScrollingContainer.anchorBottom = 40 * ratioY
    ScrollingContainer.dragThreshold = 5
    ScrollingContainer.dragRestrictAxis = "y"
    ScrollingContainer.addChild(listCon)
    ScrollingContainer.on("dragStart", function () {})

    ScrollingContainer.on("dragEnd", function () {})

    let ScrollBar = new PIXI.UI.ScrollBar({
      track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
      handle: new PIXI.UI.SliceSprite(t, 5),
      vertical: true,
      scrollingContainer: ScrollingContainer,
      autohide: true,
    })
    ScrollBar.track.width = 9 * ratioX
    ScrollBar.handle.width = 8 * ratioX
    ScrollBar.track.pivotX = -0.5
    ScrollBar.anchorTop = 63 * ratioY
    ScrollBar.anchorBottom = 40 * ratioY
    ScrollBar.anchorRight = 0
    ScrollBar.track.tint = 0xdbdbdb
    ScrollBar.track.blendMode = 0
    ScrollBar.handle.tint = Enum.color.green

    listCon.anchorLeft = 147 * ratioX
    for (let i = 0; i < thumbArr.length; i++) {
      let canvas = thumbArr[i]
      let texture = new PIXI.Texture.from(canvas)
      let sp = new PIXI.UI.Sprite(texture)
      sp.x = (i % 4) * (sp.width + 40 * ratioX)
      sp.y = Math.floor(i / 4) * (sp.height + 30 * ratioY)
      listCon.height += sp.y
      sp.sprite.interactive = sp.sprite.buttonMode = true
      //썸네일 클릭했을때
      sp.sprite.on("click", () => {
        // 발행상태가 아니라면 필터 off
        if (Data.state !== 0) this.parent.emit("filterOff")
        // 모아보기페이지 removechild
        this.parent.removeChild(this)
        // 해당 인덱스로 페이지 이동
        queueRenderPage(i + 1)
      })
      listCon.addChild(sp)
    }

    let btntitle
    if (Data.isFirst) {
      btntitle = "스토리 제작하기"
      Data.state = 1;
    }
    else btntitle = "스토리뷰어 수정하기"

    graphic.clear()
    graphic.lineStyle(1, Enum.color.line, 1, 1, true)
    graphic.beginFill(Enum.color.green)
    graphic.drawRect(0, 0, tWidth, 40 * ratioY)
    graphic.endFill()
    let back = new GraphicsSprite(graphic)

    this.editBtn = new ButtonHandler({
      width: tWidth,
      height: 40 * ratioY,
      background: back,
      text: { name: btntitle, style: Enum.fontstyle.White14 },
    })
    this.editBtn.MakedisableTexture(Enum.color.arrow, Enum.color.arrow)
    if (Data.state === 0) {
      this.editBtn.button.interactive = false
      this.editBtn.changeBack = this.editBtn.disableT
    }
    this.editBtn.background.tint = 0xffffff
    this.editBtn.button.anchorBottom = 0
    this.addChild(ScrollingContainer, ScrollBar, this.editBtn.button)

    this.editBtn.onClick(() => {
      this.parent.emit("filterOff")
      this.parent.removeChild(this)
      //1페이지로 이동
      queueRenderPage(1)
    })
  }
}
