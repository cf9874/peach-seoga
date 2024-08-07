import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
import { bookmarkTexture, LineSprte, sXTexture } from "../UI/graphicSprite.js"
import ButtonHandler from "../UI/Button.js"
import { delete_bookmark, set_bookmark } from "../DC/api.js"
import Data from "../DC/data.js"
import Viewer from "./viewer.js"
import RoundedMaskCon from "../UI/roundedMaskCon.js"

/* 
사용자페이지 북마크 메뉴 컨테이너
*/
export default class WebBookmarkCon extends PIXI.UI.Container {
  constructor (bookmarkArr, thumbArr, Viewer) {
    const ratioY = Manager.ratioY
    super("100%", 902 * ratioY)
    this.mySet = bookmarkArr
    this.thumbArr = thumbArr
    this.ShowRegisteredpage()
    this.makeHeaderButton()

    this.viewer=Viewer
    
  }
  // set에 저장해놓은 페이지 리스트에 따라 썸네일 업데이트
  updateSavepage () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    while (this.listCon.children[0]) {
      this.listCon.removeChild(this.listCon.children[0])
    }
    this.listCon.height = 199 * this.pageList.length * ratioY
    if (this.pageList.length < 5) this.savedLine.alpha = 0
    else this.savedLine.alpha = 1
    if (this.pageList.length === 0) {
      this.noneTxt.visible = true
    } else {
      this.noneTxt.visible = false
    }
    let xtexture = sXTexture(12 * ratioX)
    let bookmarkT = bookmarkTexture(12 * ratioX, 18 * ratioY)
    for (let i = 0; i < this.pageList.length; i++) {
      const num = this.pageList[i]
      const texture = this.thumbArr[num - 1]
      let con = new PIXI.UI.Container(165 * ratioX, 140 * ratioY)
      let spCon = new RoundedMaskCon(165 * ratioX, 105 * ratioY, 5)
      let sp = new PIXI.UI.Sprite(texture)
      let bookmark = new PIXI.UI.Sprite(bookmarkT)
      let pageText = new PIXI.UI.Text(`${num} 페이지`, Enum.fontstyle.Black17_R)
      let x_btn = new PIXI.UI.Sprite(xtexture)
      con.anchorLeft = 17 * ratioX
      pageText.anchorLeft = 18 * ratioX
      sp.width = con.width
      sp.height = 105 * ratioY
      spCon.anchorTop = 35 * ratioX

      //북마크페이지 누르면 이동
      sp.sprite.on('click', ()=> {
        console.log("bookmark click", num)
        this.viewer.queueRenderPage(num)
      })
      sp.sprite.interactive = sp.sprite.buttonMode = true

      x_btn.tint = 0x717171
      x_btn.anchorRight = 0
      x_btn.sprite.interactive = x_btn.sprite.buttonMode = true
      x_btn.sprite.on("click", () => {
        let a = ""
        this.mySet.forEach(value => {
          a += value + "#"
        })
        delete_bookmark(Data.story_num, a, res => {
          this.mySet.delete(num)
          a = ""
          this.mySet.forEach(value => {
            a += value + "#"
          })
          set_bookmark(Data.story_num, a, res => {
            this.pageList = Array.from(this.mySet)
            this.pageList.sort(function (a, b) {
              return a - b
            })
            this.updateSavepage()
          })
        })
      })

      con.y = (19 + i * 180) * ratioY
      spCon.addChild(sp)
      con.addChild(spCon, bookmark, x_btn, pageText)
      this.listCon.addChild(con)
    }
  }

  // 북마크메뉴 위쪽 ui 생성
  makeHeaderButton () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let con = new PIXI.UI.Container("100%", 104 * ratioY)
    let bookstarT = new PIXI.Texture.from("bookmark_star"),
      bookstar = new PIXI.UI.Sprite(bookstarT)
    bookstar.anchorLeft = 23 * ratioX
    bookstar.width = 24 * ratioX
    bookstar.height = 25 * ratioY
    bookstar.verticalAlign = "middle"
    let backt = new PIXI.Texture.from("btn22"),
      back = new PIXI.UI.Sprite(backt)
    let addBtn = new ButtonHandler({
      lineColor: Enum.color.bgBoxBorder,
      line: 3,
      background: back,
      text: { name: "책갈피 추가", style: Enum.fontstyle.Black15_R },
      width: 133 * ratioX,
      height: 44 * ratioY,
    })
    addBtn.button.anchorRight = 11 * ratioX
    addBtn.button.verticalAlign = "middle"

    addBtn.onClick(() => {
      let now = document.getElementById("page_input").textContent
      now = Number(now)
      if (this.mySet.has(now)) {
        return
      } else {
        let a = ""
        this.mySet.forEach(value => {
          a += value + "#"
        })
        delete_bookmark(Data.story_num, a, res => {
          this.mySet.add(now)
          a = ""
          this.mySet.forEach(value => {
            a += value + "#"
          })
          set_bookmark(Data.story_num, a, res => {
            this.pageList = Array.from(this.mySet)
            this.pageList.sort(function (a, b) {
              return a - b
            })
            this.updateSavepage()
          })
        })
      }
    })
    con.anchorTop = 51 * ratioY
    con.addChild(bookstar, addBtn.button)
    this.addChild(con)
  }

  changeCard (arr) {
    this.cardArr.forEach(element => {
      this.listCon.removeChild(element)
    })
    this.cardArr = arr
    this.updateSaveCard(this.cardArr)
  }

  // 서버에 이미 등록된 페이지들은 리스트로 보여줌
  ShowRegisteredpage () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY

    let con = new PIXI.UI.Container("100%", 765 * ratioY)
    let back = new PIXI.UI.Sprite(PIXI.Texture.WHITE)
    let shadow = new LineSprte(199 * ratioX, 2, Enum.color.Gray)
    let Text = new PIXI.UI.Text("등록된 책갈피 ", Enum.fontstyle.Black16_R)
    let graphic = new PIXI.Graphics()
    graphic.lineStyle(2, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, 10, 10, 10)
    graphic.endFill()
    let t = Manager.app.renderer.generateTexture(graphic),
      listCon = new PIXI.UI.Container("100%", 0),
      ScrollingContainer = new PIXI.UI.ScrollingContainer({
        scrollX: false,
        scrollY: true,
      })

    let ScrollBar = new PIXI.UI.ScrollBar({
      track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
      handle: new PIXI.UI.SliceSprite(t, 5),
      vertical: true,
      scrollingContainer: ScrollingContainer,
      autohide: true,
    })
    let verticalLine = new LineSprte(2, 689 * ratioY, Enum.color.line)

    let noneTxt = new PIXI.UI.Text("등록된 책갈피가 없습니다.", Enum.fontstyle.Black14_R)
    noneTxt.horizontalAlign = "center"
    noneTxt.anchorTop = 85 * ratioY
    noneTxt.visible = false
    this.noneTxt = noneTxt

    con.anchorTop = 155 * ratioY
    back.width = 199 * ratioX
    back.height = 45 * ratioY
    back.horizontalAlign = "center"
    back.tint = Enum.color.lightGray
    shadow.alpha = 0.5
    shadow.anchorBottom = 0
    Text.verticalAlign = "middle"
    Text.horizontalAlign = "center"
    ScrollingContainer.width = "100%"
    ScrollingContainer.dragThreshold = 5
    ScrollingContainer.dragRestrictAxis = "y"
    ScrollingContainer.height = ScrollBar.height = 689 * ratioY
    ScrollBar.handle.width = 8 * ratioX
    ScrollBar.track.tint = Enum.color.bgBox
    ScrollBar.handle.tint = Enum.color.handle
    ScrollBar.anchorTop = ScrollingContainer.anchorTop = 50 * ratioY
    ScrollBar.anchorRight = -4 * ratioX
    verticalLine.anchorRight = 10 * ratioX
    verticalLine.anchorTop = 50 * ratioX
    verticalLine.alpha = 0

    this.savedLine = verticalLine
    this.listCon = listCon
    this.cardScrollingCon = ScrollingContainer
    this.savedCon = con

    this.pageList = Array.from(this.mySet)
    this.pageList.sort(function (a, b) {
      return a - b
    })
    back.addChild(shadow, Text)
    ScrollingContainer.addChild(listCon)
    con.addChild(back, ScrollingContainer, ScrollBar, verticalLine, noneTxt)
    this.addChild(con)
    this.updateSavepage()
  }
}
