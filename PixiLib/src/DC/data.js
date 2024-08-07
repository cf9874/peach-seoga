import { Howl } from "howler"
import { dragSprite } from "../components/dragSprite.js"
import * as Enum from "../Enum/index.js"
import GraphicsSprite from "../UI/graphicSprite"

let _dataTitle
let _dataPdf
let _isSaved
//let _thumb_url
let _thumb_texture
let _story_num
let _data
let _cardData
let _audioArr
let _cardArr
let _audioData
let _pageNum
let _viewWidth
let _viewHeight = 1070
let _raw_num
let _story_tag
let _state
let _isFirst = false
let _hlHeight = 60
let _isHidden
let _cards

/* 
서버랑 소통할때 사용하는 데이타 저장하는 클래스
전역변수로 사용합니다.
*/
export default class Data {
  constructor () {}
  static set title (t) {
    _dataTitle = t
  }

  static set hlHeight (num) {
    _hlHeight = num
  }

  static set story_tag (t) {
    _story_tag = t
  }

  static set pdf (file) {
    _dataPdf = file
  }

  static set isSaved (flag) {
    _isSaved = flag
  }

  static set isFirst (flag) {
    _isFirst = flag
  }

  // static set thumb_url (url) {
  //   _thumb_url = url
  // }

  static set thumb_texture (t) {
    _thumb_texture = t
  }

  static set story_num (num) {
    _story_num = num
  }

  static set raw_num (num) {
    _raw_num = num
  }

  static set state (num) {
    _state = num
  }

  static set cardArr (arr) {
    _cardArr = arr
  }

  static set isHidden (bool) {
    _isHidden = bool
  }

  static get isHidden () {
    return _isHidden
  }

  static get viewHeight () {
    return _viewHeight
  }

  static get cards () {
    return _cards
  }

  static get state () {
    return _state
  }

  static get hlHeight () {
    return _hlHeight
  }

  // static get thumb_url () {
  //   return _thumb_url;
  // }

  static get thumb_texture () {
    return _thumb_texture
  }

  static get story_tag () {
    return _story_tag
  }

  static get raw_num () {
    return _raw_num
  }

  static get story_num () {
    return _story_num
  }

  static get pdf () {
    return _dataPdf
  }

  static get title () {
    return _dataTitle
  }

  static get data () {
    return _data
  }

  static get cardData () {
    return _cardData
  }

  static get audioArr () {
    return _audioArr
  }

  static get cardArr () {
    return _cardArr
  }

  static get audioData () {
    return _audioData
  }

  static get pageNum () {
    return _pageNum
  }

  static set viewWidth (size) {
    _viewWidth = size
  }

  static get viewWidth () {
    return _viewWidth
  }

  static get isSaved () {
    return _isSaved
  }

  static get isFirst () {
    return _isFirst
  }

  static saveCardData () {
    console.log(_cardArr)
    let arr = _cardArr
    _isSaved = true
    _cardData = []
    let uuidList = []
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i]
      let list = new Array(_pageNum)
      for (let j = 0; j < item.list.length; j++) {
        const Qsp = item.list[j]
        if (Qsp !== undefined) {
          list[j] = {
            relatePos: Qsp.relatePos,
          }
        }
      }
      _cardData[i] = {
        uuid: item.uuid,
        title: item.title,
        list,
      }
      uuidList.push(item.uuid)
    }
    _cards = JSON.stringify(uuidList)
  }

  static saveAudioData () {
    let playlist = []
    let idx = new Array(_pageNum)
    let count = 0
    for (let i = 0; i < _audioArr.length; i++) {
      const templist = _audioArr[i]
      for (let j = 0; j < templist.length; j++) {
        if (j == 0) idx[i] = count
        const e = templist[j]
        let endPos, startPos
        if (e.hl === undefined) {
          endPos = null
          startPos = null
        } else {
          endPos = e.hl.endPos
          startPos = e.hl.startPos
        }
        playlist.push({
          num: i,
          uuid: e.uuid,
          title: e.title,
          duration: e.duration,
          howl: null,
          endPos,
          startPos,
        })
        count++
      }
      if (templist.length === 0) idx[i] = null
    }

    _audioData = {
      playlist,
      idx,
    }
  }

  static initialize (raw = {}) {
    _data = raw
    _cardData = raw.cardList || []
    _audioData = raw.audioList || {}
    _audioArr = []
    _cardArr = []
    _isSaved = false
  }

  static rollbackArray () {
    let viewCan = document.getElementById("view-canvas")
    let left = viewCan.style.marginLeft
    left = parseFloat(left)
    let top = viewCan.style.marginTop
    top = parseFloat(top)
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")
    for (let i = 0; i < _cardData.length; i++) {
      const e = _cardData[i]
      let t = new PIXI.Texture.from(`${S3_URL_RAW}/${e.uuid}`)

      let item = new PIXI.UI.Sprite(t)
      item.list = new Array(e.list.length)
      item.title = e.title
      item.uuid = e.uuid

      for (let j = 0; j < e.list.length; j++) {
        const element = e.list[j]
        if (element === null) continue
        let dragableItem = dragSprite(item.title, null)
        dragableItem.relatePos = element.relatePos
        dragableItem.x = element.relatePos.x * viewCan.width + left
        dragableItem.y = element.relatePos.y * viewCan.height + top
        item.list[j] = dragableItem
      }
      _cardArr.push(item)
    }
    let graphic = new PIXI.Graphics()

    if (_audioData.playlist === undefined) return
    _audioData.playlist.forEach(element => {
      let hl = undefined
      if (element.startPos !== undefined && element.startPos !== null) {
        let ox = element.startPos.x * viewCan.width
        let oy = element.startPos.y * viewCan.height
        let dx = element.endPos.x * viewCan.width
        let dy = element.endPos.y * viewCan.height
        graphic.clear()
        graphic.beginFill(Enum.color.red, 0.5)
        graphic.drawRoundedRect(0, 0, dx - ox, dy - oy, 5)
        graphic.endFill()

        hl = new GraphicsSprite(graphic)
        hl.x = ox + left
        hl.y = oy + top
        hl.startPos = element.startPos
        hl.endPos = element.endPos
      }

      _audioArr[element.num].push({
        uuid: element.uuid,
        sound: new Howl({
          src: [`${S3_URL_RAW}/${element.uuid}`],
          html5: true,
          volume: 0,
        }),
        duration: element.duration,
        title: element.title,
        hl,
      })
    })
  }

  static initArray (num) {
    _pageNum = num
    for (let i = 0; i < num; i++) {
      _audioArr.push([])
    }
  }
  static setData () {
    _data.title = _dataTitle
    _data.cardList = _cardData
    _data.audioList = _audioData
  }
}
