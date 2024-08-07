export default function close () {
  document.body.removeChild(document.getElementById("printable"))
  document.body.removeChild(document.getElementById("canvas_wraper"))
  PIXI.utils.clearTextureCache()
}
