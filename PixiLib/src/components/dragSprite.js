import Manager from "../scenes/Manager"
import * as Enum from "../Enum"
/*
드레그가 가능한 돋보기 스프라이트
*/
export function dragSprite (title, mather) {
  const ratioX = Manager.ratioX
  const ratioY = Manager.ratioY
  let t = new PIXI.Texture.from("Q_icon")
  let Qsprite = new PIXI.UI.Sprite(t)
  Qsprite.tint = Enum.color.red
  let circlet = new PIXI.Texture.from("circle")
  let circle = new PIXI.UI.Sprite(circlet)
  Qsprite.circle = circle
  Qsprite.x = 230 * ratioX
  Qsprite.y = 60 * ratioY
  Qsprite.mather = mather
  Qsprite.title = title
  circle.width = circle.height = ratioX * 40
  Qsprite.width = Qsprite.height = ratioX * 20
  circle.tint = Enum.color.red
  circle.alpha = 0.5
  circle.visible = false
  circle.pivot = 0.2
  Qsprite.addChild(circle)
  Qsprite.sprite.interactive = true
  Qsprite.sprite.buttonMode = true
  Qsprite.pivot = 0.5
  Qsprite.relatePos = { x: 0, y: 0 }
  Qsprite.sprite
    .on("mousedown", onDragStart)
    .on("mouseup", onDragEnd)
    .on("mouseupoutside", onDragEnd)
    .on("mousemove", onDragMove)
    .on("pointerover", () => {
      Qsprite.mather.tint = Enum.color.red
    })
    .on("pointerout", () => {
      Qsprite.mather.tint = Enum.color.line
    })

  function onDragStart (event) {
    this.data = event.data
    this.dragging = true
  }

  function onDragEnd () {
    this.dragging = false
    this.data = null
  }

  let viewCan = document.getElementById("view-canvas")
  let left = viewCan.style.marginLeft
  let w = viewCan.width
  let h = viewCan.height
  left = parseFloat(left)
  let top = viewCan.style.marginTop
  top = parseFloat(top)
  function onDragMove () {
    if (this.dragging) {
      const relatePos = this.data.getLocalPosition(this.parent.parent.parent)
      let dx = relatePos.x - left
      let dy = relatePos.y - top
      Qsprite.relatePos = { x: dx / w, y: dy / h }
      const newPosition = this.data.getLocalPosition(this.parent)
      this.x = circle.x = newPosition.x
      this.y = circle.y = newPosition.y
    }
  }
  return Qsprite
}
