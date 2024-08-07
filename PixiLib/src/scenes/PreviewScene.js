import ArrowLeft from "../components/arrowLeft.js"
import ArrowRight from "../components/arrowRight.js"
import WebMenu from "../components/WebMenu.js"
import Viewer from "../components/viewer.js"
import Manager from "./Manager.js"
import Data from "../DC/data.js"
import PrevCard from "../components/prevCard.js"
import WebCardCon from "../components/webCardCon.js"
import WebAudioCon from "../components/webAudioCon.js"
import Highlighter from "../UI/highlighter.js"
import { color } from "../Enum/index.js"

/*
관리자 페이지에서 미리보기 버튼 클릭시 보여주는 
한페이지 미리보기 클래스
*/
export class PreviewScene {
  constructor (lastScene) {
    const ratioX = Manager.ratioX
    let viewCan = document.getElementById("view-canvas")
    this.con = new PIXI.UI.Container("100%", "100%")
    this.LeftBtn = new ArrowLeft(52 * ratioX)
    this.RightBtn = new ArrowRight(54 * ratioX)

    this.RightBtn.anchorRight = 199 * ratioX
    let highlighter = new Highlighter()

    viewCan.style.marginLeft = ((Manager.width - viewCan.width - 305) / 2 + 52) * ratioX + "px"
    viewCan.style.marginTop = (Manager.height - viewCan.height) / 2 + "px"

    this.webMenu = new WebMenu()
    this.webMenu.gatherBtn.button.interactive = this.webMenu.fullscreenBtn.button.interactive = this.webMenu.paintBtn.button.interactive = this.webMenu.bookmarkBtn.button.interactive = this.webMenu.printBtn.button.interactive = false
    this.webMenu.gatherBtn.button.emit("disable")
    this.webMenu.fullscreenBtn.button.emit("disable")
    this.webMenu.paintBtn.button.emit("disable")
    this.webMenu.bookmarkBtn.button.emit("disable")
    this.webMenu.printBtn.button.emit("disable")
    this.con.addChild(this.LeftBtn, this.RightBtn, this.webMenu, highlighter)
    let now = document.getElementById("page_input").textContent - 1
    let templist = Data.audioArr[now]
    let playlist = []
    let idx = new Array(Data.audioArr.length)
    let endPos
    let startPos
    idx[now] = templist.length
    for (let i = 0; i < templist.length; i++) {
      const e = templist[i]
      if (e.hl === undefined) {
        endPos = null
        startPos = null
      } else {
        endPos = e.hl.endPos
        startPos = e.hl.startPos
      }
      playlist.push({
        num: now,
        uuid: e.uuid,
        howl: null,
        endPos,
        startPos,
      })
    }
    let data = {
      playlist,
      idx,
    }
    this.prevCard = new PrevCard()
    let left = viewCan.style.marginLeft
    let top = viewCan.style.marginTop
    left = parseFloat(left)
    top = parseFloat(top)
    let cardArr = []
    Data.cardArr.forEach(e => {
      const item = e.list[now]
      if (item !== undefined) {
        let texture = e.sprite.texture
        let qSprite = new PIXI.UI.Sprite(item.sprite.texture)
        qSprite.width = item.width
        qSprite.height = item.height
        qSprite.x = item.relatePos.x * viewCan.width + left
        qSprite.y = item.relatePos.y * viewCan.height + top
        qSprite.tint = color.red
        qSprite.sprite.interactive = qSprite.sprite.buttonMode = true
        qSprite.sprite.on("click", () => {
          this.prevCard.card.sprite.texture = texture
          this.con.addChild(this.prevCard)
        })
        this.con.addChild(qSprite)
        let savedCard = new PIXI.UI.Sprite(e.sprite.texture)
        savedCard.sprite.interactive = savedCard.sprite.buttonMode = true
        savedCard.sprite.on("click", () => {
          this.prevCard.card.sprite.texture = savedCard.sprite.texture
          this.con.addChild(this.prevCard)
        })
        cardArr.push(savedCard)
      }
    })
    this.webMenu.webCard = new WebCardCon(cardArr)
    this.webMenu.webAudio = new WebAudioCon(data, now + 1, now + 1, this.LeftBtn, this.RightBtn, highlighter)
    this.webMenu.webAudio.allBtn.button.interactive = false
    this.webMenu.cardBtn.button.emit("click")
    this.webMenu.finBtn.button.on("click", () => {
      this.webMenu.webAudio.container.emit("pause")
      Data.viewWidth = 1400
      lastScene.viewer.changeScalePage(() => {
        Manager.changeScene(lastScene)
        viewCan.style.marginLeft = ((Manager.width - viewCan.width - 520) / 2 + 328) * ratioX + "px"
        viewCan.style.marginTop = (Manager.height - viewCan.height) / 2 + "px"
      })
    })
  }

  update (framesPassed) {}
  resize (screenWidth, screenHeight) {}
}
