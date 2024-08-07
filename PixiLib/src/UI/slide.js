import GraphicsSprite, { GraphicTexture } from "./graphicSprite.js"
import * as Enum from "../Enum/index.js"
import Manager from "../scenes/Manager.js"

//슬라이더 클래스
export default class Slider {
  constructor (handleColor, trackColor, width, height, size) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let graphic = new PIXI.Graphics()
    graphic.lineStyle(0)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, width, height, 3 * ratioX)
    graphic.endFill()
    let track = new GraphicTexture(graphic)

    let handlet = new PIXI.Texture.from("circle"),
      handle = new PIXI.UI.Sprite(handlet)
    handle.width = handle.height = size
    handle.tint = handleColor

    graphic.clear()
    graphic.lineStyle(1.5, 0xdbdbdb, 1, 1, true)
    graphic.beginFill(0xffffff)
    graphic.drawRoundedRect(0, 0, 35 * ratioX, 23 * ratioY, 5 * ratioX)
    graphic.endFill()
    let box = new GraphicsSprite(graphic)
    let text = new PIXI.UI.Text("0", Enum.fontstyle.Black14_R)
    box.addChild(text)
    box.bottom = -10 * ratioY
    text.verticalAlign = "middle"
    text.horizontalAlign = "center"
    box.horizontalAlign = "center"
    let slider = new PIXI.UI.Slider({
      track: new PIXI.UI.SliceSprite(track, 3),
      handle: handle,
      fill: new PIXI.UI.SliceSprite(track, 3),
      value: 10,
      minValue: 0,
      maxValue: 100,
      decimals: 0,
      onValueChanging: function (val) {
        text.value = val + ""
      },
    })

    slider.width = width
    slider.fill.tint = trackColor
    slider.track.tint = trackColor
    slider.handle.addChild(box)

    return slider
  }
}
