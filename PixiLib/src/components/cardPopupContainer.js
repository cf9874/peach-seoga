import * as Enum from "../Enum/index.js"
import ButtonHandler from "../UI/Button.js"
import Manager from "../scenes/Manager.js"
import GraphicsSprite, { Filter, LineSprte, xTexture } from "../UI/graphicSprite.js"
import VirtualCon from "../UI/virtualCon.js"
import { get_CardList } from "../DC/api.js"
import Data from "../DC/data.js"

import * as PixiUtil from "../utils/PixiUtil";

/* 
오른쪽 그림단어 아이콘 클릭시 뜨는 팝업
*/
export default class CardPopUpContainer extends PIXI.UI.Container {
  constructor () {
    const ratioY = Manager.ratioY
    super("100%", "100%")
    this.filter = new Filter("100%", "100%")
    this.filter.sprite.buttonMode = false

    //처음 등록일때
    let make = new cardscrollCon()
    //카드는 팝업창 가운데 위치하게 될 컨테이너를 의미함
    this.card = make
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"
    //그림단어 수정일때
    let edit = new editScroll()
    this.editScroll = (idx, callFucn) => {
      edit.setCallFucn = callFucn
      edit.setchildNum = idx
      this.removeChild(this.card)
      this.card = edit
      this.addChild(this.card)
    }
    this.selectScroll = () => {
      this.removeChild(this.card)
      this.card = make
      this.addChild(this.card)
    }

    this.container.on("close", () => {
      this.card.items.map(c => {
        this.card.listCon.removeChild(c)
      })
      this.card.Sitems.map(c => {
        this.card.selectedListCon.removeChild(c)
      })
      this.card.Sitems = []

      this.card.textinput.text = ""
      this.card.textinput.emit("blur")
      this.card.height = 375 * ratioY
      this.card.sprite.texture = this.card.minTexture
      this.card.title.text = "그림단어"
      this.parent.removeChild(this)
    })
    this.addChild(this.filter)
  }
}

/* 
검색시 그림단어 스크롤 부분
*/
export class cardscrollCon extends PIXI.UI.Sprite {
  constructor () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let graphic = new PIXI.Graphics()
    const tWidth = 1412 * ratioX
    const tHight = 375 * ratioY
    const tmHight = 918 * ratioY
    const dy = 52 * ratioY
    const dt = 7 * ratioY
    const radius = 3
    makeCardContainer(graphic, tWidth, tHight, dy, dt, radius)
    let minTexture = Manager.app.renderer.generateTexture(graphic)

    super(minTexture)
    this.items = []
    this.Sitems = []

    makeCardContainer(graphic, tWidth, tmHight, dy, dt, radius)
    let maxTexture = Manager.app.renderer.generateTexture(graphic)
    graphic.clear()
    graphic.lineStyle(2, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, 10, 10, 10)
    graphic.endFill()
    let t = Manager.app.renderer.generateTexture(graphic)
    this.verticalAlign = "middle"
    this.horizontalAlign = "center"

    let noResearch = new PIXI.UI.Text("검색결과 없음", Enum.fontstyle.Black16)
    noResearch.anchorTop = 250 * ratioY
    noResearch.horizontalAlign = "center"
    this.noResearch = noResearch

    let title = new PIXI.UI.Text("그림단어", Enum.fontstyle.WhiteTitle)
    title.anchorTop = 14 * ratioY
    title.anchorLeft = 39 * ratioX
    let xtexture = xTexture(18 * ratioX)
    let x_btn = new PIXI.UI.Sprite(xtexture)
    x_btn.anchorTop = 17 * ratioY
    x_btn.anchorRight = 20 * ratioX
    x_btn.sprite.interactive = x_btn.sprite.buttonMode = true
    x_btn.sprite.on("click", () => {
      this.parent.container.emit("close")
    })

    let listCon = new PIXI.UI.Container("100%", "100%")
    let ScrollingContainer = new PIXI.UI.ScrollingContainer({
      scrollX: false,
      scrollY: true,
    })
    ScrollingContainer.width = "100%"
    ScrollingContainer.height = 290 * ratioY
    ScrollingContainer.anchorTop = 160 * ratioY
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
    ScrollBar.track.width = ScrollBar.handle.width = 8 * ratioX
    ScrollBar.track.pivotX = -0.5
    ScrollBar.anchorTop = 160 * ratioY
    ScrollBar.anchorBottom = 514 * ratioY
    ScrollBar.anchorRight = 0
    ScrollBar.track.blendMode = 0
    ScrollBar.handle.tint = Enum.color.green

    let line3 = new LineSprte(1306 * ratioX, 2, Enum.color.line)
    line3.verticalAlign = "middle"
    line3.horizontalAlign = "center"
    listCon.anchorLeft = 54 * ratioX
    let selectT = new PIXI.UI.Text("선택한 그림단어", Enum.fontstyle.Black14)
    selectT.anchorTop = 40 * ratioY
    line3.addChild(selectT)
    this.cardAreaConatainer(t)
    let search = this.searchContainer()
    this.minTexture = minTexture
    this.maxTexture = maxTexture
    this.title = title
    this.listCon = listCon
    this.ScrollingContainer = ScrollingContainer

    let enrollBtn = new ButtonHandler({
      width: 1306 * ratioX,
      height: 40 * ratioY,
      line: 1,
      lineColor: Enum.color.line,
      tint: Enum.color.green,
      text: { name: "등록하기", style: Enum.fontstyle.White12_R },
    })
    enrollBtn.button.anchorBottom = 46 * ratioY
    enrollBtn.button.horizontalAlign = "center"

    enrollBtn.onClick(() => {
      //리스트에 있는 모든것 push
      Data.cardArr.push(...this.selectedListCon.children)
      this.parent.parent.emit("selectCard")
      this.parent.container.emit("close")
    })

    this.addChild(title, x_btn, ScrollingContainer, ScrollBar, search, enrollBtn.button, line3)
  }
  cardAreaConatainer (t) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    const pageNum = Data.pageNum
    let listCon = new PIXI.UI.Container("100%", "100%")
    let ScrollingContainer = new PIXI.UI.ScrollingContainer({
      scrollX: false,
      scrollY: true,
    })
    ScrollingContainer.width = "100%"
    ScrollingContainer.height = 290 * ratioY
    ScrollingContainer.anchorBottom = 100 * ratioY
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
    ScrollBar.track.width = ScrollBar.handle.width = 8 * ratioX
    ScrollBar.track.pivotX = -0.5
    ScrollBar.anchorTop = 567 * ratioY
    ScrollBar.anchorBottom = 100 * ratioY
    ScrollBar.anchorRight = 0
    ScrollBar.track.blendMode = 0
    ScrollBar.handle.tint = Enum.color.green
    listCon.anchorLeft = 54 * ratioX

    this.selectedListCon = listCon
    let sort = a => {
      let arr = this.selectedListCon.children
      arr.map((c, i) => {
        c.x = (i % 6) * (c.width + a)
        c.y = Math.floor(i / 6) * (c.height + a)
      })
    }
    this.selectedListCon.container.on("select", (btn, sample, uuid, a) => {
      let item = new PIXI.UI.Sprite(sample.sprite.texture)
      let selectBox = new ButtonHandler({
        width: btn.button.width,
        height: btn.button.height,
        line: 1,
        tint: "#000000",
        text: { name: "선택 해제", style: Enum.fontstyle.White12_R },
      })
      selectBox.background.alpha = 0.8
      selectBox.button.interactive = false
      selectBox.button.anchorBottom = 0
      item.width = sample.width
      item.height = sample.height
      item.addChild(selectBox.button)
      item.uuid = uuid
      let i = this.selectedListCon.children.length
      item.x = (i % 6) * (item.width + a)
      item.y = Math.floor(i / 6) * (item.height + a)
      this.selectedListCon.height = item.y + item.height + a
      item.sprite.interactive = true
      item.title = sample.title
      item.list = new Array(pageNum)
      this.Sitems.push(item)
      item.sprite.on("click", () => {
        sample.removeChild(btn.button)
        this.selectedListCon.removeChild(item)
        sort(a)
      })
      this.selectedListCon.addChild(item)
    })

    this.selectedContainer = ScrollingContainer
    this.addChild(ScrollingContainer, ScrollBar)
  }

  removeChildren () {
    const ratioY = Manager.ratioY
    this.items.map(c => {
      this.listCon.removeChild(c)
    })
    this.items = []
    this.height = 375 * ratioY
    this.sprite.texture = this.minTexture
    this.title.text = "그림단어"
  }

  addchildren () {
    const ratioY = Manager.ratioY
    this.items.map(c => {
      this.listCon.removeChild(c)
    })
    this.items = []
    this.height = 918 * ratioY
    this.sprite.texture = this.maxTexture
    this.title.text = "그림단어 보관함"
  }

  searchContainer () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let con = new PIXI.UI.Container(1306 * ratioX, 250 * ratioY)
    let spT = new PIXI.Texture.from("manual_long")
    let sp = new PIXI.UI.Sprite(spT)
    sp.width = 415 * ratioX
    sp.height = 46 * ratioY
    sp.anchorLeft = 860 * ratioX
    sp.anchorTop = 10 * ratioY
    sp.alpha = 0

    let graphic = new PIXI.Graphics()
    graphic.clear()
    graphic.lineStyle(0)
    graphic.beginFill(Enum.color.red)
    graphic.drawRoundedRect(0, 0, 1185 * ratioX, 3, 3)
    graphic.endFill()
    let line2 = new GraphicsSprite(graphic)
    line2.anchorTop = 30 * ratioY
    con.anchorTop = 106 * ratioY
    con.horizontalAlign = "center"

    let placeholder = "검색할 단어를 입력하세요."
    this.textinput = new PIXI.UI.TextInput({
      background: PIXI.UI.Sprite(PIXI.Texture.WHITE),
      value: placeholder,
      style: Enum.fontstyle.Black14,
      lineHeight: 30 * ratioY,
      paddingLeft: 10 * ratioX,
      width: "90%",
      height: 30,
    })
    this.textinput.alpha = 0.5

    let qTexture = new PIXI.Texture.from("Q_icon")
    let qSprite = new PIXI.UI.Sprite(qTexture)
    qSprite.tint = Enum.color.red
    qSprite.anchorRight = 2 * ratioX
    qSprite.anchorBottom = 3 * ratioY
    qSprite.width = qSprite.height = 20 * ratioX
    line2.addChild(qSprite)
    let explainT = new PIXI.Texture.from("explain_icon")
    let explain = new PIXI.UI.Sprite(explainT)
    explain.anchorRight = 0
    explain.anchorTop = 13 * ratioY
    explain.width = explain.height = 18 * ratioX
    con.addChild(line2, explain, sp)
    this.textinput.on("keyup", e => {
      if (e.keyCode === 13) {
        this.textinput.value = this.textinput._lastValue
        this.textinput.emit("blur")
        qSprite.sprite.emit("click")
      }
    })
    this.textinput.on("focus", () => {
      if (this.textinput.value === placeholder) {
        this.textinput.value = ""
        this.textinput.alpha = 1
      }
    })
    this.textinput.on("blur", () => {
      if (this.textinput.value === "") {
        this.textinput.value = placeholder
        this.textinput.alpha = 0.5
      }
    })
    con.addChild(this.textinput)

    qSprite.sprite.interactive = qSprite.sprite.buttonMode = true
    explain.sprite.interactive = explain.sprite.buttonMode = true
    qSprite.sprite.on("click", () => {
      this.addchildren()
      let val = this.textinput.value.replace(/,/g, "#")
      get_CardList(val, res => {
        if (res.code === 0) {
          if (res.data.total === 0) this.addChild(this.noResearch)
          else this.removeChild(this.noResearch)
          this.listItem(res.data.pageList)
          
        }
      })
    })

    explain.sprite.on("pointerover", () => {
      sp.alpha = 1
    })

    explain.sprite.on("pointerout", () => {
      sp.alpha = 0
    })
    return con
  }

  listItem (arr) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let leng = arr.length
    let itemHeight = 0
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")

    for (let j = 0; j < leng; j++) {
      let i = this.listCon.children.length
      let uuid = arr[j].data_uuid
      // let img = new Image(); // Image constructor
      // img.src = 'image1.png';
      // img.alt = 'alt';
      //let t = new PIXI.Texture.fromImage (S3_URL_RAW + "/" + uuid, true)
      let t = PixiUtil.Texture.from(S3_URL_RAW + "/" + uuid, true)
      let item = new PIXI.UI.Sprite(t)
      
      this.listCon.addChild(item)
      item.width = 200 * ratioX
      item.height = 271 * ratioY
      item.sprite.interactive = true
      let w = item._width
      let h = item._height / 5
      let selectBox = new ButtonHandler({
        width: w,
        height: h,
        line: 1,
        lineColor: Enum.color.red,
        tint: Enum.color.red,
        text: { name: "선택", style: Enum.fontstyle.White12_R },
      })
      selectBox.background.alpha = 0.8
      selectBox.button.interactive = false
      selectBox.button.anchorBottom = 0
      let a = 20 * ratioX
      item.x = (i % 6) * (item.width + a)
      item.y = Math.floor(i / 6) * (item.height + a)
      item.title = arr[j].title
      itemHeight += item.height + a
      item.sprite.on("click", () => {
        if (!selectBox.button.parent) {
          this.selectedListCon.container.emit("select", selectBox, item, uuid, a)
          item.addChild(selectBox.button)
        }
      })

      this.items.push(item)
    }

    this.listCon.height = itemHeight
  }
}
/* 
왼쪽 메뉴 > 그림단어 하위 리스트중 수정버튼 클릭시 

*/
export class editScroll extends PIXI.UI.Sprite {
  set setchildNum (num) {
    this.childNum = num
  }

  set setCallFucn (func) {
    this.callFucn = func
  }
  constructor () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let graphic = new PIXI.Graphics()
    const tWidth = 1412 * ratioX
    const tHight = 375 * ratioY
    const tmHight = 918 * ratioY
    const dy = 52 * ratioY
    const dt = 7 * ratioY
    const radius = 3
    makeCardContainer(graphic, tWidth, tHight, dy, dt, radius)
    let minTexture = Manager.app.renderer.generateTexture(graphic)

    super(minTexture)
    this.items = []
    this.Sitems = []
    this.childNum = 0

    makeCardContainer(graphic, tWidth, tmHight, dy, dt, radius)
    let maxTexture = Manager.app.renderer.generateTexture(graphic)
    graphic.clear()
    graphic.lineStyle(2, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, 10, 10, 10)
    graphic.endFill()
    let t = Manager.app.renderer.generateTexture(graphic)
    this.verticalAlign = "middle"
    this.horizontalAlign = "center"

    let title = new PIXI.UI.Text("그림단어", Enum.fontstyle.WhiteTitle)
    title.anchorTop = 14 * ratioY
    title.anchorLeft = 39 * ratioX

    let noResearche = new PIXI.UI.Text("검색결과 없음", Enum.fontstyle.Black16)
    noResearche.anchorTop = 250 * ratioY
    noResearche.horizontalAlign = "center"
    this.noResearche = noResearche

    let xtexture = xTexture(18 * ratioX)
    let x_btn = new PIXI.UI.Sprite(xtexture)
    x_btn.width = x_btn.height = 18 * ratioX
    x_btn.anchorTop = 17 * ratioY
    x_btn.anchorRight = 20 * ratioX
    x_btn.sprite.interactive = x_btn.sprite.buttonMode = true
    x_btn.sprite.on("click", () => {
      this.parent.container.emit("close")
    })
    let listCon = new PIXI.UI.Container(1306 * ratioY, "100%")
    let ScrollingContainer = new PIXI.UI.ScrollingContainer({
      scrollX: false,
      scrollY: true,
    })
    ScrollingContainer.width = "100%"
    ScrollingContainer.height = 290 * ratioY
    ScrollingContainer.anchorTop = 160 * ratioY
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
    ScrollBar.track.width = ScrollBar.handle.width = 8 * ratioX
    ScrollBar.track.pivotX = -0.5
    ScrollBar.anchorTop = 160 * ratioY
    ScrollBar.anchorBottom = 514 * ratioY
    ScrollBar.anchorRight = 0
    ScrollBar.track.blendMode = 0
    ScrollBar.handle.tint = Enum.color.green
    let line3 = new LineSprte(1306 * ratioX, 2, Enum.color.line)
    line3.verticalAlign = "middle"
    line3.horizontalAlign = "center"
    listCon.anchorLeft = 54 * ratioX
    let selectT = new PIXI.UI.Text("선택한 그림단어", Enum.fontstyle.Black14)

    selectT.anchorTop = 40 * ratioY

    line3.addChild(selectT)
    this.cardAreaConatainere()
    let search = this.searchContainere()
    this.minTexture = minTexture
    this.maxTexture = maxTexture
    this.title = title
    this.listCon = listCon
    this.ScrollingContainer = ScrollingContainer

    let enrollBtn = new ButtonHandler({
      width: 1306 * ratioX,
      height: 40 * ratioY,
      line: 1,
      lineColor: Enum.color.line,
      tint: Enum.color.green,
      text: { name: "등록하기", style: Enum.fontstyle.White12_R },
    })
    enrollBtn.button.anchorBottom = 46 * ratioY
    enrollBtn.button.horizontalAlign = "center"

    //등록하기 버튼 클릭시
    enrollBtn.onClick(() => {
      //cardarr에 저장
      Data.cardArr[this.childNum] = this.selectedListCon.children[0]
      this.parent.container.emit("close")
      this.selectedListCon.removeChild(this.selectedListCon.children[0])
      this.callFucn()
    })

    this.addChild(title, x_btn, ScrollingContainer, ScrollBar, search, enrollBtn.button, line3)
  }
  cardAreaConatainere () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    const pageNum = Data.pageNum
    let listCon = new PIXI.UI.Container(1306 * ratioY, "100%")
    listCon.anchorLeft = 54 * ratioX
    listCon.anchorTop = 567 * ratioY

    this.selectedListCon = listCon
    this.selectedListCon.container.on("change", (btn, sample, uuid) => {
      let item = new PIXI.UI.Sprite(sample.sprite.texture)
      let selectBox = new ButtonHandler({
        width: btn.button.width,
        height: btn.button.height,
        line: 1,
        tint: "#000000",
        text: { name: "선택 해제", style: Enum.fontstyle.White12_R },
      })
      selectBox.background.alpha = 0.8
      selectBox.button.interactive = false
      selectBox.button.anchorBottom = 0
      item.width = sample.width
      item.height = sample.height
      item.addChild(selectBox.button)
      item.uuid = uuid
      item.sprite.interactive = true
      item.title = sample.title
      item.list = new Array(pageNum)
      this.Sitems.push(item)
      item.sprite.on("click", () => {
        sample.removeChild(btn.button)
        this.selectedListCon.removeChild(item)
      })
      if (this.selectedListCon.children.length) {
        this.selectedListCon.removeChild(this.selectedListCon.children[0])
        this.selectedListCon.addChild(item)
      } else {
        this.selectedListCon.addChild(item)
      }
    })

    this.addChild(this.selectedListCon)
  }

  removeChildren () {
    const ratioY = Manager.ratioY
    this.items.map(c => {
      this.listCon.removeChild(c)
    })
    this.items = []
    this.height = 375 * ratioY
    this.sprite.texture = this.minTexture
    this.title.text = "그림단어"
  }

  addchildrene () {
    const ratioY = Manager.ratioY
    this.items.map(c => {
      this.listCon.removeChild(c)
    })
    this.items = []
    this.height = 918 * ratioY
    this.sprite.texture = this.maxTexture
    this.title.text = "그림단어 보관함"
  }

  searchContainere () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let con = new PIXI.UI.Container(1306 * ratioX, 250 * ratioY)
    let sp = new PIXI.UI.Sprite(PIXI.Texture.WHITE)
    sp.tint = 0xff99dd
    sp.width = 403 * ratioX
    sp.height = 22 * ratioY
    sp.anchorRight = 30 * ratioX
    sp.anchorTop = 13 * ratioY
    sp.alpha = 0
    let graphic = new PIXI.Graphics()
    graphic.clear()
    graphic.lineStyle(0)
    graphic.beginFill(Enum.color.red)
    graphic.drawRoundedRect(0, 0, 1185 * ratioX, 3, 3)
    graphic.endFill()
    let line2 = new GraphicsSprite(graphic)
    line2.anchorTop = 30 * ratioY
    con.anchorTop = 106 * ratioY
    con.horizontalAlign = "center"
    let placeholder = "검색할 단어를 입력하세요."
    this.textinput = new PIXI.UI.TextInput({
      background: PIXI.UI.Sprite(PIXI.Texture.WHITE),
      value: placeholder,
      style: Enum.fontstyle.Black14,
      lineHeight: 30 * ratioY,
      paddingLeft: 10 * ratioX,
      width: "90%",
      height: 30,
    })
    this.textinput.alpha = 0.5

    let qTexture = new PIXI.Texture.from("Q_icon")
    let qSpritee = new PIXI.UI.Sprite(qTexture)
    qSpritee.tint = Enum.color.red
    qSpritee.anchorRight = 2 * ratioX
    qSpritee.anchorBottom = 3 * ratioY
    qSpritee.width = qSpritee.height = 20 * ratioX
    line2.addChild(qSpritee)
    let explainT = new PIXI.Texture.from("explain_icon")
    let explain = new PIXI.UI.Sprite(explainT)
    explain.anchorRight = 0
    explain.anchorTop = 13 * ratioY
    explain.width = explain.height = 18 * ratioX
    con.addChild(line2, explain, sp)
    this.textinput.on("keyup", e => {
      if (e.keyCode === 13) {
        this.textinput.value = this.textinput._lastValue
        this.textinput.emit("blur")
        qSpritee.sprite.emit("click")
      }
    })
    this.textinput.on("focus", () => {
      if (this.textinput.value === placeholder) {
        this.textinput.value = ""
        this.textinput.alpha = 1
      }
    })
    this.textinput.on("blur", () => {
      if (this.textinput.value === "") {
        this.textinput.value = placeholder
        this.textinput.alpha = 0.5
      }
    })
    con.addChild(this.textinput)

    qSpritee.sprite.interactive = qSpritee.sprite.buttonMode = true
    explain.sprite.interactive = explain.sprite.buttonMode = true
    qSpritee.sprite.on("click", () => {
      this.addchildrene()
      let val = this.textinput.value.replace(/,/g, "#")
      get_CardList(val, res => {
        if (res.code === 0) {
          if (res.data.total === 0) this.addChild(this.noResearche)
          else this.removeChild(this.noResearche)
          this.listIteme(res.data.pageList)
        }
      })
    })

    explain.sprite.on("pointerover", () => {
      sp.alpha = 1
    })

    explain.sprite.on("pointerout", () => {
      sp.alpha = 0
    })

    return con
  }

  listIteme (arr) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let leng = arr.length
    let itemHeight = 0
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")
    for (let j = 0; j < leng; j++) {
      let i = this.listCon.children.length
      let uuid = arr[j].data_uuid
      // let t = new PIXI.Texture.from(S3_URL_RAW + "/" + uuid)
      let t = PixiUtil.Texture.from(S3_URL_RAW + "/" + uuid, true)
      let item = new PIXI.UI.Sprite(t)
      this.listCon.addChild(item)
      item.width = 200 * ratioX
      item.height = 271 * ratioY
      item.sprite.interactive = true
      let w = item._width
      let h = item._height / 5
      let selectBox = new ButtonHandler({
        width: w,
        height: h,
        line: 1,
        lineColor: Enum.color.red,
        tint: Enum.color.red,
        text: { name: "선택", style: Enum.fontstyle.White12_R },
      })
      selectBox.background.alpha = 0.8
      selectBox.button.interactive = false
      selectBox.button.anchorBottom = 0
      let a = 20 * ratioX
      item.x = (i % 6) * (item.width + a)
      item.y = Math.floor(i / 6) * (item.height + a)
      item.title = arr[j].title
      itemHeight += item.height + a
      item.sprite.on("click", () => {
        if (!selectBox.button.parent) {
          if (this.temps !== undefined) {
            this.temps[1].removeChild(this.temps[0].button)
          }
          this.selectedListCon.container.emit("change", selectBox, item, uuid)
          item.addChild(selectBox.button)
          this.temps = [selectBox, item]
        }
      })
      this.items.push(item)
    }

    this.listCon.height = itemHeight
  }
}

export function makeCardContainer (graphic, tWidth, tHight, dy, dt, radius) {
  graphic.clear()
  graphic.lineStyle(1, 0x0ffffff, 1, 1, true)
  graphic.beginFill(0x0b4247)
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

export class DropDown extends PIXI.UI.Container {
  constructor (option) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    super(option.width, option.height)

    let mainBtn = new ButtonHandler({
      width: 92 * ratioX,
      height: 32 * ratioY,
      lineColor: 0xffffff,
      img: {
        url: "down",
        width: 8 * ratioX,
        height: 6 * ratioY,
        tint: 0x7c7c7c,
      },
    })
    mainBtn.addText({
      text: "전체",
      style: Enum.fontstyle.Black12,
      name: "main",
    })
    mainBtn.onClick(() => {
      this.click = !this.click
      if (this.click) {
        this.addChild(...item)
      } else this.removeChild(...item)
    })
    mainBtn.speech = 0
    let item = new ListItem(mainBtn).con
    mainBtn.down.anchorTop = 15 * ratioY
    mainBtn.down.anchorRight = 10 * ratioX
    mainBtn.main.verticalAlign = "middle"
    mainBtn.main.anchorLeft = 10 * ratioX
    mainBtn.button.anchorLeft = 8 * ratioX

    this.mainBtn = mainBtn
    this.addChild(mainBtn.button)
  }
}

export class ListItem {
  constructor (mainBtn) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.con = new VirtualCon()
    let titles = ["전체", "타이틀", "태그"]
    for (let i = 0; i < titles.length; i++) {
      const title = titles[i]
      const name = "part" + i
      const width = 92 * ratioX
      const height = 32 * ratioY
      let btn = new ButtonHandler({
        width,
        height,
        line: 1,
        lineColor: 0xffffff,
      })
      btn.addText({ name: title, style: Enum.fontstyle.Black12, name })
      btn[name].verticalAlign = "middle"
      btn[name].anchorLeft = 10 * ratioX
      btn.pos(8 * ratioX, height + height * i)
      btn.speech = (i + 1) * 1000 + 1
      btn.onHover(e => {
        if (e) {
          btn[name]._text.style.fill = 0xff0000
        } else {
          btn[name]._text.style.fill = 0x000000
        }
      })

      btn.onClick(() => {
        mainBtn.main.text = btn[name].text
        mainBtn.speech = btn.speech
        mainBtn.button.emit("click")
      })

      this.con.addChild(btn.button)
    }
  }
}
