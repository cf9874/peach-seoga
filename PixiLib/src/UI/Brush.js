import Manager from "../scenes/Manager.js"
/* 
사용자페잊 판서에서 shape선택시 화면에 그려줄 도형들의 기본 텍스쳐
화면크기에 맞게 미리 그려놓고 이걸 기본 texture로 사용합니다.
*/
export function penTexture () {
  let graphic = new PIXI.Graphics()
  graphic.lineStyle(0)
  graphic.beginFill(0xffffff)
  graphic.drawCircle(0, 0, 100)
  graphic.endFill()
}

export function hlTexture () {
  let graphic = new PIXI.Graphics()
  graphic.lineStyle(0)
  graphic.beginFill(0xffffff, 0.7)
  graphic.drawRect(0, 0, 100, 100)
  graphic.endFill()

  let texture = Manager.app.renderer.generateTexture(graphic)
  return texture
}

export function recTexture (w, h, parent) {
  let graphic = new PIXI.Graphics()
  graphic.lineStyle(0)
  graphic.beginFill(0xffffff)
  graphic.drawRect(0, 0, w, h)
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}
export function recStrokeTexture (w, h, parent) {
  let graphic = new PIXI.Graphics()
  graphic.lineStyle(6, 0xffffff, 1)
  graphic.drawRect(0, 0, w, h)
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function circleTexture (radius, parent) {
  let graphic = new PIXI.Graphics()
  graphic.lineStyle(4, 0xffffff, 1, 0)
  graphic.beginFill(0xffffff)
  graphic.drawCircle(0, 0, radius)
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}
export function circleStrokeTexture (radius, parent) {
  let graphic = new PIXI.Graphics()
  graphic.lineStyle(14, 0xffffff, 1, 0)
  graphic.drawCircle(0, 0, radius)
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function triangleTexture (w, h, parent) {
  let graphic = new PIXI.Graphics()
  graphic.beginFill(0xffffff)
  graphic.lineStyle(0)
  graphic.drawPolygon([w / 2, 0, 0, h, w, h])
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function triangleStrokeTexture (w, h, parent) {
  let graphic = new PIXI.Graphics()

  graphic.lineStyle(10, 0xffffff, 1)
  graphic.drawPolygon([w / 2, 0, 0, h, w, h])
  graphic.endFill()
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function hexagonTexture (radius, parent) {
  let graphic = new PIXI.Graphics()
  graphic.beginFill(0xffffff)
  graphic.lineStyle(3, 0xffffff, 1)
  graphic.drawStar(0, 0, 6, radius, radius * 0.9)
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function hexagonStrokeTexture (radius, parent) {
  let graphic = new PIXI.Graphics()

  graphic.lineStyle(10, 0xffffff, 1)
  graphic.drawStar(0, 0, 6, radius, radius * 0.9)
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function starTexture (radius, parent) {
  let graphic = new PIXI.Graphics()
  graphic.beginFill(0xffffff)
  graphic.lineStyle(3, 0xffffff, 1, 1)
  graphic.drawStar(0, 0, 5, radius)
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function starStrokeTexture (radius, parent) {
  let graphic = new PIXI.Graphics()

  graphic.lineStyle(10, 0xffffff, 1, 1)
  graphic.drawStar(0, 0, 5, radius)
  graphic.endFill()

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function twoTexture (width, height, parent) {
  let graphic = new PIXI.Graphics()

  graphic.lineStyle({
    width: 10,
    color: 0xffffff,
    alpha: 1,
    join: "miter",
    cap: "round",
  })
  graphic.moveTo(0, height / 2)
  graphic.lineTo(width / 4, 0)
  graphic.lineTo(width / 4, height)
  graphic.lineTo(0, height / 2)
  graphic.moveTo(width / 4, height / 2)
  graphic.lineStyle({
    width: 20,
    color: 0xffffff,
    alpha: 1,
    join: "miter",
    cap: "miter",
  })
  graphic.lineTo((width / 4) * 3, height / 2)
  graphic.lineStyle({
    width: 10,
    color: 0xffffff,
    alpha: 1,
    join: "miter",
    cap: "round",
  })
  graphic.moveTo(width, height / 2)
  graphic.lineTo((width / 4) * 3, height)
  graphic.lineTo((width / 4) * 3, 0)
  graphic.lineTo(width, height / 2)

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function leftTexture (width, height, parent) {
  let graphic = new PIXI.Graphics()

  graphic.lineStyle({
    width: 10,
    color: 0xffffff,
    alpha: 1,
    join: "miter",
    cap: "round",
  })
  graphic.moveTo(0, height / 2)
  graphic.lineTo(width / 4, 0)
  graphic.lineTo(width / 4, height)
  graphic.lineTo(0, height / 2)
  graphic.moveTo(width / 4, height / 2)
  graphic.lineStyle({
    width: 20,
    color: 0xffffff,
    alpha: 1,
    join: "miter",
    cap: "miter",
  })
  graphic.lineTo((width / 4) * 3, height / 2)

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function rightTexture (width, height, parent) {
  let graphic = new PIXI.Graphics()

  graphic.moveTo(width / 4, height / 2)
  graphic.lineStyle({
    width: 20,
    color: 0xffffff,
    alpha: 1,
    join: "miter",
    cap: "miter",
  })
  graphic.lineTo((width / 4) * 3, height / 2)
  graphic.lineStyle({
    width: 10,
    color: 0xffffff,
    alpha: 1,
    join: "miter",
    cap: "round",
  })
  graphic.moveTo(width, height / 2)
  graphic.lineTo((width / 4) * 3, height)
  graphic.lineTo((width / 4) * 3, 0)
  graphic.lineTo(width, height / 2)

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}

export function checkTexture (width, height, parent) {
  let graphic = new PIXI.Graphics()

  graphic.moveTo(0, height / 2)
  graphic.lineStyle({
    width: 15,
    color: 0xffffff,
    alpha: 1,
    join: "round",
    cap: "round",
  })
  graphic.lineTo(width / 2, height)
  graphic.lineTo(width, 0)

  let texture = parent.renderer.generateTexture(graphic)
  return texture
}
