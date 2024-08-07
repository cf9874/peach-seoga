//컨테이너 사용하지 않고 한번에 포지션 주고 싶을때 사용
export default class VirtualCon extends Array {
  addChild (...childs) {
    this.push(...childs)
  }

  position (x, y) {
    this.map(child => {
      child.x += x
      child.y += y
    })
  }

  set x (x) {
    this.map(child => {
      child.x += x
    })
  }

  set y (y) {
    this.map(child => {
      child.y += y
    })
  }

  constructor () {
    super()
  }
}
