import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
import { LineSprte } from "../UI/graphicSprite.js"
import { get_CardList } from "../DC/api.js"
import ButtonHandler from "../UI/Button.js"
import * as PixiUtil from "../utils/PixiUtil";

/* 
사용자 페이지 그림단어 컨테이너
*/
export default class WebCardCon extends PIXI.UI.Container {
  constructor (arr) {
    const ratioY = Manager.ratioY
    super("100%", 1000 * ratioY)
    this.cardArr = arr
    this.searchArr =[]
    this.generateSearch()
    this.ShowRegisteredCard()
  }
  //페이지 이동할때마다 해당페이지에 저장되어있는 카드리스트 업데이트
  updateSaveCard (arr) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.listCon.height = 232 * arr.length * ratioY
    
    if (arr.length <= 3) {
      this.savedLine.alpha = 0
    } else {
      this.savedLine.alpha = 1
    }

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      element.width = 143 * ratioX
      element.height = 190 * ratioY
      element.horizontalAlign = "center"
      element.y = (220 * i + 10) * ratioY
      this.listCon.addChild(element)
    }
    this.count.text = arr.length
  }

  //단어 검색할때마다 카드리스트 업데이트
  updateSearchCard (arr, container) {
    this.searchArr = arr
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    container.height = 232 * arr.length * ratioY
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      element.width = 143 * ratioX
      element.height = 190 * ratioY
      element.horizontalAlign = "center"
      element.y = (220 * i + 10) * ratioY
      container.addChild(element)
    }
  }

  changeCard (arr) {
    this.cardArr.forEach(element => {
      this.listCon.removeChild(element)
    })
    this.cardArr = arr
    this.updateSaveCard(this.cardArr)
  }

  //검색부분 컨테이너 생성
  generateSearch () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let listCon = new PIXI.UI.Container("100%", "100%")
    let con = new PIXI.UI.Container("100%", "100%")
    let txt = new PIXI.UI.Text("단어검색", Enum.fontstyle.Black16_R)
    txt.horizontalAlign = "center"
    txt.anchorTop = 18 * ratioY
    let noneTxt = new PIXI.UI.Text("등록된 단어가 없습니다.", Enum.fontstyle.Black14_R)
    noneTxt.horizontalAlign = "center"
    noneTxt.anchorTop = 222 * ratioY
    noneTxt.visible = false
    let inputt = new PIXI.Texture.from("inputBox")
    let sp = new PIXI.UI.Sprite(inputt)
    sp.width = "90%"
    sp.height = 43 * ratioY
    sp.horizontalAlign = "center"
    sp.anchorTop = 56 * ratioY
    let placeholder = "단어 검색"
    this.textinput = new PIXI.UI.TextInput({
      background: PIXI.UI.Sprite(PIXI.Texture.WHITE),
      style: Enum.fontstyle.Black14,
      lineHeight: 40 * ratioY,
      paddingLeft: 10 * ratioX,
      width: 160 * ratioX,
      height: 40 * ratioY,
      value: placeholder,
    })
    this.textinput.alpha = 0.5
    this.textinput.anchorLeft=10 * ratioX
    let qTexture = new PIXI.Texture.from("Q_icon")
    let qSprite = new PIXI.UI.Sprite(qTexture)
    qSprite.tint = Enum.color.Black
    qSprite.anchorRight = 10 * ratioX
    qSprite.verticalAlign = "middle"
    qSprite.width = qSprite.height = 20 * ratioX

    let explainT = new PIXI.Texture.from("explain_icon")
    let explain = new PIXI.UI.Sprite(explainT)
    explain.anchorRight = 14 * ratioX
    explain.width = explain.height = 20 * ratioX
    explain.verticalAlign = "middle"

    let back = new PIXI.UI.Sprite(PIXI.Texture.WHITE)
    back.visible = false
    back.width = 199 * ratioX
    back.height = 45 * ratioY
    back.horizontalAlign = "center"
    back.anchorTop = 130 * ratioY
    back.tint = Enum.color.lightGray

    let shadow = new LineSprte(back.width, 2, Enum.color.Gray)
    shadow.alpha = 0.5
    shadow.anchorBottom = 0

    let beginningText = new PIXI.UI.Text("검색 결과 ", Enum.fontstyle.Black14_R)
    let result = new PIXI.UI.Text("1", Enum.fontstyle.Red16)
    let enddingText = new PIXI.UI.Text("개", Enum.fontstyle.Black14_R)
    beginningText.verticalAlign = enddingText.verticalAlign = result.verticalAlign = "middle"
    beginningText.anchorLeft = 43 * ratioX
    result.x = beginningText.anchorLeft + beginningText.width
    enddingText.x = result.x + result.width + 5 * ratioX
    let closeBtn = new ButtonHandler({
      line: 3,
      lineColor: Enum.color.vividGray,
      text: { name: "검색 결과 닫기", style: Enum.fontstyle.Black12 },
      rounded: 2,
      width: 143 * ratioX,
      height: 36 * ratioY,
    })
    closeBtn.button.horizontalAlign = "center"
    closeBtn.button.anchorBottom = 0
    closeBtn.button.visible = false
    closeBtn.button.interactive=true
    closeBtn.button.buttonMode=true
    this.textinput.on("keyup", e => {
      if (this.textinput.value === "\n") return
      if (e.keyCode === 13) {
        this.textinput.value = this.textinput._lastValue
        qSprite.sprite.emit("click")
        return
      }
    })
    this.textinput.on("blur", e => {
      
      if (this.searchArr.length === 0) {
        back.visible = noneTxt.visible = closeBtn.button.visible = false
        this.addChild(this.savedCon)
        if (listCon)
          while (listCon.children[0]) {
            listCon.removeChild(listCon.children[0])
          }
      }
    })
    this.textinput.on("focus",()=>{
      this.textinput.text = ""      
    })

    let shortT = new PIXI.Texture.from("manual_long")
    let shortManual = new PIXI.UI.Sprite(shortT)
    shortManual.width = 415 * ratioX
    shortManual.height = 46 * ratioY
    shortManual.anchorRight = -explain.width / 2
    shortManual.anchorBottom = explain.height
    explain.sprite.interactive = explain.sprite.buttonMode = true
    shortManual.visible = false
    explain.sprite.on("pointerover", () => {
      shortManual.visible = true
    })
    explain.sprite.on("pointerout", () => {
      shortManual.visible = false
    })

    explain.addChild(shortManual)

    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")
    qSprite.sprite.interactive = qSprite.sprite.buttonMode = true
    qSprite.sprite.interactive = qSprite.sprite.buttonMode = true
    qSprite.sprite.on("click", () => {
      if (this.textinput.value === "") return
      if (listCon)
        while (listCon.children[0]) {
          listCon.removeChild(listCon.children[0])
        }
      back.visible = closeBtn.button.visible = true
      this.removeChild(this.savedCon)
      get_CardList(this.textinput.value, res => {
        let arr = []
        if (res.code === 0) {
          res.data.pageList.forEach(element => {
            let uuid = element.data_uuid
            // let t = new PIXI.Texture.from(S3_URL_RAW + "/" + uuid)
            let t = PixiUtil.Texture.from(S3_URL_RAW + "/" + uuid, true)
            let item = new PIXI.UI.Sprite(t)
            item.sprite.interactive = item.sprite.buttonMode = true
            item.sprite.on("click", () => {
              Manager.currentScene.prevCard.card.sprite.texture = t
              Manager.currentScene.con.addChild(Manager.currentScene.prevCard)
            })
            arr.push(item)
          })
          result.text = arr.length
          if (arr.length > 3) verticalLine.alpha = 1
          else verticalLine.alpha = 0
          if (arr.length === 0) {
            noneTxt.visible = true
            this.searchArr = []
          }
          else {
            this.updateSearchCard(arr, listCon)
            noneTxt.visible = false
          }
        }
        enddingText.x = result.x + result.width + 5 * ratioX
      })
    })

    closeBtn.onClick(() => {
      this.textinput.text = ""
      verticalLine.alpha = 0
      this.textinput.emit("blur")
      
    })

    let graphic = new PIXI.Graphics()
    graphic.lineStyle(2, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, 10, 10, 10)
    graphic.endFill()
    let t = Manager.app.renderer.generateTexture(graphic)
    let ScrollingContainer = new PIXI.UI.ScrollingContainer({
      scrollX: false,
      scrollY: true,
    })
    ScrollingContainer.width = "100%"
    ScrollingContainer.dragThreshold = 5
    ScrollingContainer.dragRestrictAxis = "y"
    ScrollingContainer.addChild(listCon)

    let ScrollBar = new PIXI.UI.ScrollBar({
      track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
      handle: new PIXI.UI.SliceSprite(t, 5),
      vertical: true,
      scrollingContainer: ScrollingContainer,
      autohide: true,
    })
    ScrollingContainer.height = ScrollBar.height = 657 * ratioY
    ScrollBar.track.width = 8 * ratioX
    ScrollBar.handle.width = 5 * ratioX
    ScrollBar.track.tint = Enum.color.bgBox
    ScrollBar.handle.tint = Enum.color.handle
    ScrollBar.handle.pivotX = 0
    ScrollBar.anchorRight = 0
    ScrollBar.anchorTop = ScrollingContainer.anchorTop = 188 * ratioY
    let verticalLine = new LineSprte(2, 657 * ratioY, Enum.color.line)
    verticalLine.anchorRight = 13 * ratioX
    verticalLine.anchorTop = 188 * ratioY
    verticalLine.alpha = 0
    back.addChild(shadow, beginningText, enddingText, result, explain)
    sp.addChild(this.textinput, qSprite)
    this.back = back
    // con.addChild(txt, sp, back, ScrollingContainer, ScrollBar, noneTxt, verticalLine)
    con.addChild(sp, back, ScrollingContainer, ScrollBar, noneTxt, verticalLine)
    this.addChild(con, closeBtn.button)
  }

  //등록된 단어 보여지는 컨테이너
  ShowRegisteredCard () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let con = new PIXI.UI.Container("100%", 765 * ratioY)
    let back = new PIXI.UI.Sprite(PIXI.Texture.WHITE)
    back.width = 198 * ratioX
    back.height = 45 * ratioY
    back.horizontalAlign = "center"
    back.tint = Enum.color.lightGray
    back.anchorTop = -17.5*ratioY
    let shadow = new LineSprte(back.width, 2, Enum.color.Gray)
    shadow.alpha = 0.5
    shadow.anchorBottom = 0
    con.anchorTop = 130 * ratioY
    let beginningText = new PIXI.UI.Text("등록된 단어 ", Enum.fontstyle.Black14_R)
    this.count = new PIXI.UI.Text("", Enum.fontstyle.Red16)
    let enddingText = new PIXI.UI.Text("개", Enum.fontstyle.Black14_R)
    beginningText.anchorLeft = 24 * ratioX
    this.count.x = beginningText.anchorLeft + beginningText.width
    enddingText.x = this.count.x + this.count.width + 5 * ratioX
    this.count.on("change", txt => {
      this.count.text = txt
      enddingText.x = this.count.x + this.count.width + 5 * ratioX
    })
    let explainT = new PIXI.Texture.from("explain_icon")
    let explain = new PIXI.UI.Sprite(explainT)
    explain.anchorRight = 14 * ratioX
    explain.width = explain.height = 20 * ratioX
    let shortT = new PIXI.Texture.from("manual_long")
    let shortManual = new PIXI.UI.Sprite(shortT)
    shortManual.width = 415 * ratioX
    shortManual.height = 46 * ratioY
    shortManual.anchorRight = -explain.width / 2
    shortManual.anchorBottom = explain.height
    explain.sprite.interactive = explain.sprite.buttonMode = true
    shortManual.visible = false
    explain.sprite.on("pointerover", () => {
      shortManual.visible = true
    })
    explain.sprite.on("pointerout", () => {
      shortManual.visible = false
    })
    explain.addChild(shortManual)

    beginningText.verticalAlign = enddingText.verticalAlign = this.count.verticalAlign = explain.verticalAlign =
      "middle"
    back.addChild(shadow, beginningText, enddingText, this.count, explain)

    let graphic = new PIXI.Graphics()
    graphic.lineStyle(2, 0xffffff)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, 10, 10, 10)
    graphic.endFill()
    let t = Manager.app.renderer.generateTexture(graphic)
    let listCon = new PIXI.UI.Container("100%", 0)
    let ScrollingContainer = new PIXI.UI.ScrollingContainer({
      scrollX: false,
      scrollY: true,
    })
    ScrollingContainer.width = "100%"
    ScrollingContainer.dragThreshold = 5
    ScrollingContainer.dragRestrictAxis = "y"
    ScrollingContainer.addChild(listCon)

    let ScrollBar = new PIXI.UI.ScrollBar({
      track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
      handle: new PIXI.UI.SliceSprite(t, 5),
      vertical: true,
      scrollingContainer: ScrollingContainer,
      autohide: true,
    })
    ScrollingContainer.height = ScrollBar.height = 657 * ratioY
    ScrollBar.track.width = ScrollBar.handle.width = 8 * ratioX
    ScrollBar.track.tint = Enum.color.bgBox
    ScrollBar.handle.tint = Enum.color.handle
    ScrollBar.anchorTop = ScrollingContainer.anchorTop = 50 * ratioY
    ScrollBar.anchorRight = 0
    ScrollBar.track.blendMode = 0
    let verticalLine = new LineSprte(2, 657 * ratioY, Enum.color.line)
    verticalLine.anchorRight = 13 * ratioX
    verticalLine.anchorTop = 50 * ratioX
    verticalLine.alpha = 0
    this.savedLine = verticalLine
    this.listCon = listCon
    this.cardScrollingCon = ScrollingContainer
    this.savedCon = con
    con.addChild(back, ScrollingContainer, ScrollBar, verticalLine)

    this.addChild(con)
    this.updateSaveCard(this.cardArr)
  }
}
