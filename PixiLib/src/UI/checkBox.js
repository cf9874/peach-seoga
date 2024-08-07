import Manager from "../scenes/Manager.js"
/* 
체크박스
*/
export default class CheckBox {
  constructor (option) {
    this.check = false
    let checked = new checkedBox(option)
    let unchecked = new unChecked(option)
    let checkT = Manager.app.renderer.generateTexture(checked)
    let uncheckT = Manager.app.renderer.generateTexture(unchecked)

    this.checkbox = new PIXI.UI.CheckBox({
      checked: option.checked,
      background: new PIXI.UI.Sprite(uncheckT),
      checkmark: new PIXI.UI.Sprite(checkT),
      checkgroup: option.group,
      value: option.value,
    })

    return this.checkbox
  }
}

export class unChecked extends PIXI.Graphics {
  constructor (option) {
    super()
    this.UCsize = option.size

    if (option.lineColor !== undefined) this.UClineColor = option.lineColor
    else this.UClineColor = 0x000000
    if (option.line !== undefined) this.UCline = option.line
    else this.UCline = 2

    this.lineStyle(this.UCline, this.UClineColor, 1, 1, true)
    this.drawRect(0, 0, this.UCsize, this.UCsize)
    this.endFill()
  }
}

export class checkedBox extends PIXI.Graphics {
  constructor (option) {
    super()
    this.Csize = option.size

    if (option.lineColor !== undefined) this.ClineColor = option.lineColor
    else this.ClineColor = 0x000000
    if (option.insideColor !== undefined) this.CinsideColor = option.insideColor
    else this.CinsideColor = 0xff0000
    if (option.line !== undefined) this.Cline = option.line
    else this.Cline = 2
    let Ins = this.Csize * 0.7
    let ds = (this.Csize - Ins) / 2

    this.lineStyle(this.Cline, this.ClineColor, 1, 1, true)
    this.beginFill(0xffffff)
    this.drawRect(0, 0, this.Csize, this.Csize)
    this.endFill()

    this.lineStyle(null)
    this.beginFill(this.CinsideColor)
    this.drawRect(ds, ds, Ins, Ins)
    this.endFill()
  }
}
