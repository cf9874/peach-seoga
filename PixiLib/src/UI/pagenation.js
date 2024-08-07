import ButtonHandler from "./Button.js"
import * as Enum from "../Enum/index.js"
import Manager from "../scenes/Manager.js"
/* 
페이지네이션 클래스
*/
export default class PageNation extends PIXI.UI.Container {
  constructor (listSize) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    super(559 * ratioX, 31 * ratioY)
    this.pageNum = 10
    this.pageSize = 15
    this.nowPage = 1
    this.buttonArray = []
    this.buttonarr = []
    this.max = Math.ceil(listSize / this.pageSize)
    if (this.max < this.pageNum) {
      this.pageNum = this.max
      this.short = true
      this.width = (this.max + 4) * 35 * ratioX
    }
    this.gofirstBtn = this.makeImagebtn({ url: "go_first", width: 20 * ratioX, height: 20 * ratioX }, 0)
    this.gofirstBtn.onClick(() => {
      this.start()
    })
    this.prevBtn = this.makeImagebtn({ url: "page_prev", width: 20 * ratioX, height: 20 * ratioX }, 36 * ratioY)
    this.prevBtn.onClick(() => {
      this.preview()
    })
    let xvar = 36 * ratioX

    for (let i = 1; i <= this.pageNum; i++) {
      xvar += 36 * ratioX
      let btn = this.makeTextBtn(i, xvar)
      btn.onClick(() => {
        this.nowPage = Number(btn.text.text)

        if (this.selectedBtn !== btn) this.change(btn)
      })
      if (i === this.nowPage) {
        this.selectedBtn = btn
        btn.background.alpha = 1
      } else btn.text._text.tint = Enum.color.textGray

      this.buttonArray.push(btn)
      this.buttonarr.push(btn)
      this.addChild(btn.button)
    }
    this.nextBtn = this.makeImagebtn({ url: "page_next", width: 20 * ratioX, height: 20 * ratioX }, xvar + 36 * ratioX)
    this.golastBtn = this.makeImagebtn({ url: "go_last", width: 20 * ratioX, height: 20 * ratioX }, xvar + 72 * ratioX)
    this.nextBtn.onClick(() => {
      this.next()
    })
    this.golastBtn.onClick(() => {
      this.end()
    })

    if (this.max !== 1) this.addChild(this.nextBtn.button, this.golastBtn.button)
    if (this.short) this.removeChild(this.golastBtn.button)
  }
  check () {
    let del = this.max % this.pageNum
    this.removeChild(this.prevBtn.button, this.gofirstBtn.button, this.nextBtn.button, this.golastBtn.button)
    if (this.max === 1) return
    if (this.short) {
      if (this.nowPage === 1) this.addChild(this.nextBtn.button)
      else if (this.nowPage < this.pageNum) {
        this.addChild(this.prevBtn.button, this.nextBtn.button)
      } else if (this.nowPage === this.max) {
        this.addChild(this.prevBtn.button)
      }
    } else {
      if (this.nowPage === 1) this.addChild(this.nextBtn.button, this.golastBtn.button)
      else if (this.nowPage <= this.pageNum) {
        this.addChild(this.prevBtn.button, this.nextBtn.button, this.golastBtn.button)
      } else if (this.pageNum < this.nowPage && this.nowPage <= this.max - del) {
        this.addChild(this.prevBtn.button, this.gofirstBtn.button, this.nextBtn.button, this.golastBtn.button)
      } else if (this.max - del < this.nowPage && this.nowPage < this.max) {
        this.addChild(this.prevBtn.button, this.gofirstBtn.button, this.nextBtn.button)
      } else if (this.nowPage === this.max) {
        this.addChild(this.prevBtn.button, this.gofirstBtn.button)
      }
    }
  }

  change (e) {
    this.selectedBtn.background.alpha = 0
    this.selectedBtn.text._text.tint = Enum.color.textGray
    e.background.alpha = 1
    e.text._text.tint = Enum.color.white
    this.selectedBtn = e
    this.container.emit("changePage", this.nowPage)
    this.check()
  }

  start () {
    this.buttonArray = this.buttonarr
    this.pageNum = Number(this.pageNum)
    let j = Math.floor(this.nowPage / this.pageNum) - 1
    for (let i = 0; i < this.buttonArray.length; i++) {
      const e = this.buttonArray[i]
      e.text.text = this.pageNum * j + i + 1
      this.addChild(e.button)
    }
    this.nowPage = this.pageNum * j + 1
    this.change(this.buttonArray[0])
  }

  end () {
    let del = this.max % this.pageNum
    let j = Math.floor(this.nowPage / this.pageNum) + 1
    this.nowPage = this.pageNum * j + 1
    if (this.nowPage <= this.max - del) {
      for (let i = 0; i < this.buttonArray.length; i++) {
        const e = this.buttonArray[i]
        e.text.text = this.pageNum * j + i + 1
      }
    } else {
      let temp = []
      for (let i = 0; i < this.buttonArray.length; i++) {
        const element = this.buttonArray[i]
        if (i >= del) {
          this.removeChild(element.button)
        } else {
          temp.push(element)
          const e = this.buttonArray[i]
          e.text.text = this.max - del + i + 1
        }
      }
      this.buttonArray = temp
    }

    this.change(this.buttonArray[0])
  }

  next () {
    
    let del = this.max % this.pageNum
    this.nowPage += 1
    let a = this.nowPage % this.pageNum
    if (a == 0) a = this.pageNum
    if (this.nowPage <= this.max - del) {
      for (let i = 0; i < this.buttonArray.length; i++) {
        const e = this.buttonArray[i]
        e.text.text = this.nowPage - a + 1 + i
      }
    } else {
      let temp = []
      for (let i = 0; i < this.buttonArray.length; i++) {
        const element = this.buttonArray[i]
        if (i >= del) {
          this.removeChild(element.button)
        } else {
          temp.push(element)
          const e = this.buttonArray[i]
          e.text.text = this.max - del + i + 1
        }
      }
      this.buttonArray = temp
    }
    let idx = (this.nowPage % this.pageNum) - 1
    idx < 0 ? (idx = this.buttonArray.length - 1) : idx
    this.change(this.buttonArray[idx])
  }

  preview () {
    this.pageNum = Number(this.pageNum)
    let del = this.max % this.pageNum
    this.nowPage -= 1
    let a = this.nowPage % this.pageNum
    if (a == 0) a = this.pageNum
    if (this.nowPage <= this.max - del) {
      this.buttonArray = this.buttonarr
      for (let i = 0; i < this.buttonArray.length; i++) {
        const e = this.buttonArray[i]
        e.text.text = this.nowPage - a + i + 1
        this.addChild(e.button)
      }
    } else {
      let temp = []
      for (let i = 0; i < this.buttonArray.length; i++) {
        const element = this.buttonArray[i]
        if (i >= del) {
          this.removeChild(element.button)
        } else {
          temp.push(element)
          const e = this.buttonArray[i]
          e.text.text = this.max - del + i + 1
        }
      }
      this.buttonArray = temp
    }
    let idx = (this.nowPage % this.pageNum) - 1
    idx < 0 ? (idx = this.buttonArray.length - 1) : idx
    this.change(this.buttonArray[idx])
  }

  makeImagebtn (img, x) {
    const ratioX = Manager.ratioX
    let button = new ButtonHandler({
      width: 31 * ratioX,
      height: 31 * ratioX,
      line: 1,
      lineColor: 0xdfdfdf,
      img,
      background: new PIXI.UI.Sprite(PIXI.Texture.EMPTY),
    })
    button[img.url].anchorTop = 9
    button[img.url].tint = 0x000000
    button[img.url].horizontalAlign = "center"
    button[img.url].verticalAlign = "middle"
    button.button.x = x

    return button
  }

  makeTextBtn (text, x) {
    const ratioX = Manager.ratioX
    let button = new ButtonHandler({
      width: 31 * ratioX,
      height: 31 * ratioX,
      line: 1,
      tint: Enum.color.red,
      lineColor: Enum.color.red,
      text: { name: text, style: Enum.fontstyle.White12_R },
    })

    button.background.alpha = 0
    button.button.x = x

    return button
  }
}
