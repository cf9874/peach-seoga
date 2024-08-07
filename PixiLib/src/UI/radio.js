import Manager from "../scenes/Manager.js"
/* 
라디오박스 클래스
*/
export default class radioBox {
  constructor (option) {
    let checked = new checkedRadio(option)
    let unchecked = new unCheckeRradio(option)
    let checkT = Manager.app.renderer.generateTexture(checked)
    let uncheckT = Manager.app.renderer.generateTexture(unchecked)

    this.radiobox = new PIXI.UI.CheckBox({
      checked: option.checked,
      background: new PIXI.UI.SliceSprite(uncheckT),
      checkmark: new PIXI.UI.SliceSprite(checkT, 9),
      checkgroup: option.group,
      value: option.value,
    })
    this.radiobox.x = option.x
    this.radiobox.y = option.y

    this.radiobox.scaleX = 0.5
    this.radiobox.scaleY = 0.5
    return this.radiobox
  }
}

export class unCheckeRradio extends PIXI.Graphics {
  constructor (option) {
    super()
    this.URsize = option.size * 2

    if (option.lineColor !== undefined) this.URlineColor = option.lineColor
    else this.URlineColor = 0x000000

    if (option.line !== undefined) this.URline = option.line
    else this.URline = 2

    this.lineStyle(this.URline, this.URlineColor, 1, 1, true)
    this.beginFill(0xffffff)
    this.drawCircle(0, 0, this.URsize)
    this.endFill()
  }
}

export class checkedRadio extends PIXI.Graphics {
  constructor (option) {
    super()
    this.Rsize = option.size * 2

    if (option.lineColor !== undefined) this.RlineColor = option.lineColor
    else this.RlineColor = 0x000000
    if (option.insideColor !== undefined) this.RinsideColor = option.insideColor
    else this.RinsideColor = 0xe95c63

    if (option.line !== undefined) this.Rline = option.line
    else this.Rline = 2
    let Ins = this.Rsize * 0.7

    this.lineStyle(this.Rline, this.RlineColor, 1, 1, true)
    this.beginFill(0xffffff)
    this.drawCircle(0, 0, this.Rsize)
    this.endFill()

    this.lineStyle(null)
    this.beginFill(this.RinsideColor)
    this.drawCircle(0, 0, Ins)
    this.endFill()
  }
}
