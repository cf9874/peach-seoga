import * as Enum from "../Enum/index.js"
import ButtonHandler from "../UI/Button.js"
import Manager from "../scenes/Manager.js"
import GraphicsSprite, { Filter, LineSprte, xTexture } from "../UI/graphicSprite.js"
import { get_AudioList } from "../DC/api.js"
import Data from "../DC/data.js"
import PageNation from "../UI/pagenation.js"
import CheckBox from "../UI/checkBox.js"

export default class AudioPopUpContianer extends PIXI.UI.Container {
  constructor () {
    super("100%", "100%")
    this.filter = new Filter("100%", "100%") //팝업이기때문에 필터 만들어줌
    this.filter.sprite.buttonMode = false //취소 버튼이 있으므로 버튼모드 제거

    //등록시 사용하는 컨테이너
    let make = new CheckBoxContainer()
    this.card = make //팝업속 card내용을 등록 컨테이너로 정함
    this.card.verticalAlign = "middle"
    this.card.horizontalAlign = "center"
    let edit = new RadioBoxContainer() // 수정 컨테이너는 생성만 해놓은다.

    this.radioBox = (idx, callFucn) => {
      // edit컨테이너 callback함수 세팅
      edit.setCallFucn = callFucn
      edit.setchildNum = idx
      //팝업창에서 기존 등록 컨테이너 제거
      this.removeChild(this.card)
      this.card = edit
      // 새 컨테이너 붙임
      this.addChild(this.card)
    }
    this.checkBox = () => {
      this.removeChild(this.card)
      this.card = make
      this.addChild(this.card)
    }

    // 팝업창 닫기 이벤트
    this.container.on("close", () => {
      while (this.card.listCon.children[0]) {
        this.card.listCon.removeChild(this.card.listCon.children[0])
      }
      this.card.textinput.text = ""
      this.card.textinput.emit("blur")
      this.card.removeChild(this.card.pagenation)
      this.parent.emit("selectAudio")
      this.parent.removeChild(this)
    })

    this.addChild(this.filter)
  }
}

//등록 수정에서 공용으로 사용하는 컨테이너
export class BaseContainer extends PIXI.UI.Sprite {
  set setCallFucn (func) {
    this.callFucn = func
  }
  set setchildNum (idx) {
    this.childNum = idx
  }

  constructor () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let graphic = new PIXI.Graphics()
    const tWidth = 1412 * ratioX
    const tHight = 1051 * ratioY
    const dy = 52 * ratioY
    const dt = 7 * ratioY
    const radius = 3
    makeCardContainer(graphic, tWidth, tHight, dy, dt, radius)
    let cardTexture = Manager.app.renderer.generateTexture(graphic)
    super(cardTexture)

    this.order_num = 2
    this.verticalAlign = "middle"
    this.horizontalAlign = "center"
    this.sortingContainer()
    let title = new PIXI.UI.Text("음성 / TTS 보관함", Enum.fontstyle.WhiteTitle)
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

    let search = this.searchContainer()

    let enrollBtn = new ButtonHandler({
      width: 1306 * ratioX,
      height: 40 * ratioY,
      line: 1,
      lineColor: Enum.color.line,
      tint: Enum.color.green,
      text: { name: "등록하기", style: Enum.fontstyle.White12_R },
    })
    enrollBtn.button.anchorBottom = 10 * ratioY
    enrollBtn.button.horizontalAlign = "center"

    this.enrollBtn = enrollBtn

    this.addChild(title, x_btn, search, enrollBtn.button)
  }

  makePageNation (total) {
    this.removeChild(this.pagenation)
    const ratioY = Manager.ratioY
    let pagenation = new PageNation(total)
    pagenation.container.on("changePage", (num, array) => {
      // if(tts.code === 0){
      //     let arr = tts.data.pageList.slice((num-1)*15,15 * num);
      //     this.container.emit('setList',arr)
      // }
      if (array) {
        let arr = array
        this.container.emit("setList", arr)
        return
      }
      get_AudioList(num, this.order_num, this.textinput.value, res => {
        if (res.code === 0) {
          let arr = res.data.pageList
          this.container.emit("setList", arr)
        }
      })
    })
    pagenation.anchorBottom = 70 * ratioY
    pagenation.horizontalAlign = "center"
    this.pagenation = pagenation
    this.addChild(pagenation)
  }

  sortingContainer () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let con = new PIXI.UI.Container(1250 * ratioX, 52 * ratioY + 3)
    let cb = new CheckBox({
      size: 11 * ratioX,
      value: "manager",
      line: 3,
      insideColor: Enum.color.red,
    })
    let topLine = new LineSprte(con.width, 1, Enum.color.line)
    let bottomLine = new LineSprte(con.width, 2, Enum.color.line)
    let no = titleSprite(75 * ratioX, 53 * ratioY, "번호", 8 * ratioX)
    let title = titleSprite(235 * ratioX, 53 * ratioY, "제목", 88 * ratioX)
    let registration = titleSprite(115 * ratioX, 53 * ratioY, "등록일", 10 * ratioX)
    let recent = titleSprite(115 * ratioX, 53 * ratioY, "최근수정일", 10 * ratioX)
    let prevListen = new PIXI.UI.Text("미리듣기", Enum.fontstyle.Black12)

    cb.verticalAlign = "middle"
    cb.anchorLeft = 13 * ratioX
    no.anchorLeft = 36 * ratioX
    title.anchorLeft = 131 * ratioX
    registration.anchorRight = 70 * ratioX
    recent.anchorRight = 0
    prevListen.anchorRight = 304 * ratioX
    prevListen.verticalAlign = "middle"
    con.anchorLeft = 53 * ratioX
    con.anchorTop = 160 * ratioY
    topLine.anchorTop = 0
    bottomLine.anchorBottom = 0

    this.listCon = new PIXI.UI.Container(con.width, 713 * ratioY)
    this.listCon.anchorLeft = 53 * ratioX
    this.listCon.anchorTop = con.anchorTop + con.height
    this.managerCb = cb
    con.addChild(cb, bottomLine, no, title, registration, prevListen, topLine)
    this.addChild(con, this.listCon)
  }

  searchContainer () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let con = new PIXI.UI.Container(1304 * ratioX, 220 * ratioY)
    let graphic = new PIXI.Graphics()
    graphic.lineStyle(0)
    graphic.beginFill(Enum.color.red)
    graphic.drawRoundedRect(0, 0, 100 * ratioX, 3, 3)
    graphic.endFill()
    let line = new GraphicsSprite(graphic)
    let lineText = new PIXI.UI.Text("제목", Enum.fontstyle.Black12)
    line.addChild(lineText)
    lineText.anchorLeft = 20 * ratioX
    lineText.anchorBottom = 5 * ratioY
    graphic.clear()
    graphic.lineStyle(0)
    graphic.beginFill(Enum.color.red)
    graphic.drawRoundedRect(0, 0, 975 * ratioX, 3, 3)
    graphic.endFill()
    let line2 = new GraphicsSprite(graphic)
    line.anchorTop = line2.anchorTop = 30 * ratioY
    line2.anchorLeft = 105 * ratioX
    con.anchorTop = 106 * ratioY
    con.horizontalAlign = "center"

    let placeholder = "검색어를 입력하세요."
    this.textinput = new PIXI.UI.TextInput({
      background: PIXI.UI.Sprite(PIXI.Texture.WHITE),
      value: placeholder,
      style: Enum.fontstyle.Black14,
      lineHeight: 30 * ratioY,
      paddingLeft: 10 * ratioX,
      width: "70%",
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

    con.addChild(line, line2)

    let isCtrl = false
    let isSelect = false
    let saveText

    this.textinput.on("keydown", e => {
      
      if(e.which == 17) isCtrl=true;  
      if(e.which == 65 && isCtrl == true) {  
        console.log("ctrl+a!!!") 
        isSelect = true
        saveText = this.textinput.value
      } 
      if(e.which == 67 && isCtrl == true) {  
        console.log("ctrl+c!!!")    
      } 
      if(isCtrl == false && e.key!== "Enter") isSelect=false
    })

    this.textinput.on("keyup", e => {
      if(e.which == 17) isCtrl=false 
      if (e.key === "Enter") {
        if(isSelect) {
          this.textinput.value = saveText
          console.log("this.textinput.value:",this.textinput.value)
          console.log("this.textinput.lastvalue:",this.textinput._lastValue)

          isSelect=false
          saveText = ""
        }
        this.textinput.blur()
        qSprite.sprite.emit("click")
        if(this.textinput.value === "") {
          this.textinput.value = placeholder
          this.textinput.alpha = 0.5
        }
        
      }
    })

    this.textinput.on("focus", () => {
      if (this.textinput.value.includes(placeholder)||this.textinput._lastValue == "" || this.textinput.value == " ") {
        console.log("focus!!!!!!!!!!!!!")
        this.textinput.value = ""
        this.textinput._lastValue = ""
        this.textinput.alpha = 1
      }
    })

    this.textinput.on("blur", () => {
      console.log("blur")
      console.log("this.textinput.value:",this.textinput.value)
      if (this.textinput.value === "" || this.textinput.value == " "|| this.textinput.value == placeholder) {
        console.log("empty blur")
        this.textinput.value = placeholder
        this.textinput.alpha = 0.5
      }
    })
    this.textinput.anchorLeft = 110
    con.addChild(this.textinput)

    let recentBtn = new ButtonHandler({
      width: 80 * ratioX,
      height: 18 * ratioY,
      line: 1,
      lineColor: Enum.color.white,
      text: { name: "최신등록순", style: Enum.fontstyle.White12_R },
    })
    recentBtn.button.text.tint = Enum.color.line
    let oldBtn = new ButtonHandler({
      width: 80 * ratioX,
      height: 18 * ratioY,
      line: 1,
      lineColor: Enum.color.white,
      text: { name: "오래된순", style: Enum.fontstyle.White12_R },
    })
    oldBtn.button.text.tint = Enum.color.red
    recentBtn.button.anchorRight = oldBtn.button.width
    oldBtn.button.anchorRight = 0
    let line3 = new LineSprte(2, 18 * ratioY, Enum.color.line)
    line3.anchorRight = 74 * ratioX
    oldBtn.button.anchorTop = recentBtn.button.anchorTop = line3.anchorTop = 13 * ratioY
    con.addChild(recentBtn.button, oldBtn.button, line3)
    qSprite.sprite.interactive = qSprite.sprite.buttonMode = true
    qSprite.sprite.on("click", () => {
      get_AudioList(1, this.order_num, this.textinput.value, res => {
        if (res.code === 0) {
          this.makePageNation(res.data.total)
          let arr = res.data.pageList
          this.pagenation.container.emit("changePage", 1, arr)
        }
      })
    })
    recentBtn.onClick(() => {
      oldBtn.button.text.tint = Enum.color.line
      recentBtn.button.text.tint = Enum.color.red
      this.order_num = 1
      qSprite.sprite.emit("click")
    })
    oldBtn.onClick(() => {
      oldBtn.button.text.tint = Enum.color.red
      recentBtn.button.text.tint = Enum.color.line
      this.order_num = 2
      qSprite.sprite.emit("click")
    })

    return con
  }
}

export class CheckBoxContainer {
  constructor () {
    this.selectedList = []
    this.cbArr = []
    let con = new BaseContainer()
    con.enrollBtn.onClick(() => {
      let now = document.getElementById("page_input").textContent - 1
      // this.selectedList.sort(function(a,b){
      //     return a.raw_no - b.raw_no;
      // }) //나중에 정렬원하면 해준다.
      Data.audioArr[now].push(...this.selectedList)
      this.selectedList = []
      con.parent.container.emit("close")
    })

    con.container.on("setList", arr => {
      this.listItem(arr, con.listCon, con.managerCb)
    })
    con.managerCb.on("click", () => {
      if (con.managerCb.checked) {
        this.cbArr.map(e => {
          e.checked = false
          e.emit("change", false)
        })
      } else {
        this.cbArr.map(e => {
          e.checked = true
          e.emit("change", true)
        })
      }
    })
    return con
  }

  listItem (arr, listCon, managerCb) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let cbLeft = 12 * ratioX
    let noLeft = 65 * ratioX
    let titleLeft = 140 * ratioX
    let registrationR = 80 * ratioX
    let recentR = 13 * ratioX
    let prevListenR = 289 * ratioX
    while (listCon.children[0]) {
      listCon.removeChild(listCon.children[0])
    }

    let cbArr = []
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      let blank = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
      blank.width = listCon.width
      blank.height = 46 * ratioY
      let uuid = element.data_uuid
      let raw_no = new PIXI.UI.Text(element.raw_no, Enum.fontstyle.Black12)
      let title = new PIXI.UI.Text(element.title, Enum.fontstyle.Blue12)
      function Unix_timestamp (t) {
        var date = new Date(t * 1000)
        var year = date.getFullYear()
        var month = "0" + (date.getMonth() + 1)
        var day = "0" + date.getDate()
        var hour = "0" + date.getHours()
        var minute = "0" + date.getMinutes()
        return year + "." + month.substr(-2) + "." + day.substr(-2) + " " + hour.substr(-2) + ":" + minute.substr(-2)
      }
      let registration = new PIXI.UI.Text(Unix_timestamp(element.registerTime), Enum.fontstyle.Black12)
      let recent = new PIXI.UI.Text(Unix_timestamp(element.registerTime), Enum.fontstyle.Black12)
      let duration
      let sound = new Howl({
        src: [S3_URL_RAW + "/" + uuid],
        html5: true,
        volume: 0,
        onload: function () {
          duration = sound.duration()
        },
      })
      let cb = new CheckBox({
        size: 11 * ratioX,
        line: 1,
        insideColor: Enum.color.red,
        value: element.raw_no,
      })
      this.selectedList.map(e => {
        if (e.raw_no == element.raw_no) cb.checked = true
      })
      cb.on("change", checked => {
        if (checked) {
          this.selectedList.push({
            uuid,
            raw_no: element.raw_no,
            sound,
            duration,
            title: title.text,
          })
        } else {
          let a = this.selectedList.filter(x => {
            if (x.raw_no !== element.raw_no) {
              return x
            }
          })
          this.selectedList = a
        }
      })
      cb.on("click", () => {
        if (cb.checked) managerCb.checked = false
      })
      let prevListenBtn = new ButtonHandler({
        width: 80 * ratioX,
        height: 45 * ratioX,
        lineColor: Enum.color.white,
        img: {
          url: "audio_icon",
          width: 22 * ratioX,
          height: 18 * ratioY,
          tint: 0x333333,
        },
      })
      prevListenBtn.background.alpha = 0
      prevListenBtn.onClick(() => {
        sound.stop()
        sound.volume(1)
        sound.play()
      })
      let bottomLine = new LineSprte(blank.width, 1, Enum.color.line)
      bottomLine.anchorBottom = 0
      cb.anchorLeft = cbLeft
      cb.verticalAlign = "middle"
      raw_no.anchorLeft = noLeft
      raw_no.verticalAlign = "middle"
      title.anchorLeft = titleLeft
      title.verticalAlign = "middle"
      registration.anchorRight = registrationR
      registration.verticalAlign = "middle"
      recent.anchorRight = recentR
      recent.verticalAlign = "middle"
      prevListenBtn["audio_icon"].horizontalAlign = "center"
      prevListenBtn["audio_icon"].verticalAlign = "middle"
      prevListenBtn.button.anchorRight = prevListenR
      cbArr.push(cb)
      blank.y = blank.height * i
      blank.addChild(cb, raw_no, title, registration, prevListenBtn.button, bottomLine)
      listCon.addChild(blank)
      sound.play()
    }

    let flag = true
    for (let i = 0; i < cbArr.length; i++) {
      const element = cbArr[i]
      if (element.checked === false) {
        flag = false
        break
      }
    }
    this.cbArr = cbArr
    managerCb.checked = flag
  }
}
export class RadioBoxContainer {
  constructor () {
    this.selected = undefined

    let con = new BaseContainer()
    con.enrollBtn.onClick(() => {
      let now = document.getElementById("page_input").textContent - 1
      Data.audioArr[now][con.childNum].title = this.selected.title
      Data.audioArr[now][con.childNum].uuid = this.selected.uuid
      Data.audioArr[now][con.childNum].raw_no = this.selected.raw_no
      Data.audioArr[now][con.childNum].sound = this.selected.sound
      Data.audioArr[now][con.childNum].duration = this.selected.duration
      this.selected = undefined
      con.parent.container.emit("close")
      con.callFucn()
    })

    con.container.on("setList", arr => {
      this.listItem(arr, con.listCon)
    })
    con.managerCb.visible = false

    return con
  }

  listItem (arr, listCon) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let cbLeft = 12 * ratioX
    let noLeft = 65 * ratioX
    let titleLeft = 140 * ratioX
    let registrationR = 157 * ratioX
    let recentR = 13 * ratioX
    let prevListenR = 289 * ratioX
    while (listCon.children[0]) {
      listCon.removeChild(listCon.children[0])
    }

    let cbArr = []
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      let blank = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
      blank.width = listCon.width
      blank.height = 46 * ratioY
      let uuid = element.data_uuid
      let raw_no = new PIXI.UI.Text(element.raw_no, Enum.fontstyle.Black12)
      let title = new PIXI.UI.Text(element.title, Enum.fontstyle.Blue12)
      let date_R = new Date(element.registerTime)
      let registration = new PIXI.UI.Text(
        `${date_R.getFullYear()}.${date_R.getMonth() + 1}.${date_R.getDate()} ${
          date_R.getHours() < 10 ? "0" : ""
        }${date_R.getHours()}:${date_R.getMinutes() < 10 ? "0" : ""}${date_R.getMinutes()}`,
        Enum.fontstyle.Black12,
      )
      let date = new Date(element.registerTime) //나중에 최근수정일 생기면 변경
      let recent = new PIXI.UI.Text(
        `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${
          date.getHours() < 10 ? "0" : ""
        }${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`,
        Enum.fontstyle.Black12,
      )
      let duration
      let sound = new Howl({
        src: [S3_URL_RAW + "/" + uuid],
        html5: true,
        volume: 0,
        onload: function () {
          duration = sound.duration()
        },
      })
      let cb = new CheckBox({
        size: 11 * ratioX,
        line: 1,
        insideColor: Enum.color.red,
        value: element.raw_no,
        group: "radio",
      })
      if (this.selected && this.selected.raw_no === element.raw_no) cb.checked = true
      cb.on("change", checked => {
        if (checked) {
          this.selected = {
            uuid,
            raw_no: element.raw_no,
            sound,
            duration,
            title: title.text,
          }
        } else {
          if (this.selected.raw_no === element.raw_no) this.selected = undefined
        }
      })

      let prevListenBtn = new ButtonHandler({
        width: 80 * ratioX,
        height: 45 * ratioX,
        lineColor: Enum.color.white,
        img: { url: "audio_icon", width: 22 * ratioX, height: 18 * ratioY },
      })
      prevListenBtn.background.alpha = 0
      prevListenBtn.onClick(() => {
        sound.stop()
        sound.volume(1)
        sound.play()
      })
      let bottomLine = new LineSprte(blank.width, 1, Enum.color.line)
      bottomLine.anchorBottom = 0
      cb.anchorLeft = cbLeft
      cb.verticalAlign = "middle"
      raw_no.anchorLeft = noLeft
      raw_no.verticalAlign = "middle"
      title.anchorLeft = titleLeft
      title.verticalAlign = "middle"
      registration.anchorRight = registrationR
      registration.verticalAlign = "middle"
      recent.anchorRight = recentR
      recent.verticalAlign = "middle"
      prevListenBtn["audio_icon"].horizontalAlign = "center"
      prevListenBtn["audio_icon"].verticalAlign = "middle"
      prevListenBtn.button.anchorRight = prevListenR
      cbArr.push(cb)
      blank.y = blank.height * i
      blank.addChild(cb, raw_no, title, registration, recent, prevListenBtn.button, bottomLine)
      listCon.addChild(blank)
      sound.play()
    }
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

export function titleSprite (width, height, text, right) {
  let tSprite = new PIXI.UI.Sprite(PIXI.Texture.WHITE)
  tSprite.width = width
  tSprite.height = height
  tSprite.order = true //true 내림차순 fasle 오름차순
  let txt = new PIXI.UI.Text(text, Enum.fontstyle.Black12)
  // let order_asc = new PIXI.Texture.from("asc")
  // let order_dsc = new PIXI.Texture.from("dsc")
  // let order = new PIXI.UI.Sprite(order_dsc)
  // order.width = 8
  // order.height = 6
  // order.tint = Enum.color.textGray
  txt.verticalAlign = "middle"
  txt.horizontalAlign = "center"
  // order.anchorRight = right
  // tSprite.sprite.interactive = tSprite.sprite.buttonMode = true
  // tSprite.sprite.on("click", () => {
  //   tSprite.order = !tSprite.order
  //   if (tSprite.order) {
  //     order.sprite.texture = order_dsc
  //   }
  //   else {
  //     order.sprite.texture = order_asc
  //   }
  // })
  tSprite.addChild(txt)
  return tSprite
}
