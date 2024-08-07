/* 
스토리 듣기 대표이미지 처럼 기존 사각형의 이미지를 원형으로 만들고 싶을때 사용
*/
export default class CircleMaskCon extends PIXI.UI.Container {
  constructor (width, height) {
    super(width, height)
    this.save = { width: 0, height: 0 }
    this.setupMask()
  }
  setupMask () {
    let mask = new PIXI.Graphics()
    this.container.addChild(mask)
    this.container.mask = mask
    this.resizeUpdate()
  }
  resizeUpdate () {
    if (this.actual_width !== this.save.width || this.actual_height !== this.save.height) {
      this.container.mask.clear()
      this.container.mask.lineStyle(0)
      this.container.mask.beginFill(0xffffff, 1)

      this.save.width = this.actual_width
      this.save.height = this.actual_height
      this.container.mask.drawCircle(this.save.width * 0.5, this.save.width * 0.5, this.save.width * 0.5)

      this.container.mask.endFill()
    }
  }
}
