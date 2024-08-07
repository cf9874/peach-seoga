import * as PixiUtil from '../utils/PixiUtil'

/* 
사용자페이지 > 스토리 상세보기에서 카드팝업 슬라이드
*/
export default class Slide {
  //카드리스트 url배열과 가운데에 배치할 이미지 인덱스를 받아옴
  constructor (urlArr, mainIndex) {
    this.urlArr = urlArr
    this.app = new PIXI.Application({
      resolution: window.devicePixelRatio || 1,
      antialias: true,
      transparent: true,
      width: window.innerWidth,
      height: window.innerHeight,
      autoDensity: true,
    })
    // console.log(mainIndex)
    this.now = mainIndex

    // let assets = [
    //   { name: "left", url: "/peachImage/round_left.png" },
    //   { name: "right", url: "/peachImage/round_right.png" },
    // ]
    // for (let i = 0; i < urlArr.length; i++) {
    //   const url = urlArr[i]
    //   const name = `card${i + 1}`
    //   assets.push({ name, url })
    // }
    // this.loader = new PIXI.Loader()
    // this.loader.add(assets)
    // this.loader.onComplete.once(this.onComplete, this)

    //this.loader.load()

    this.onComplete();
  }

  onComplete () {
    for (let i = 0; i < this.urlArr.length; i++) {
      //this[`card${i + 1}`] = new PIXI.Texture.from(this.urlArr[i])
      // console.log(`${i} : ${this.urlArr[i]}`);
      this[`card${i + 1}`] = PixiUtil.Texture.from(this.urlArr[i])
    }
    
    let filter = new PIXI.Sprite(PIXI.Texture.WHITE)
    // let mask = new PIXI.Sprite(PIXI.Texture.WHITE)
    let mask = new PIXI.Sprite(PIXI.Texture.WHITE)
    
    mask.width = this.app.view.width
    mask.height = this.app.view.height
    mask.tint = 0x000000
    mask.alpha = 0.4
    filter.tint = 0x000000
    filter.alpha = 0.6
    filter.width = this.app.view.width
    filter.height = this.app.view.height
    // console.log('left');
    //let prevBtn = new PIXI.Sprite.from("left")
    let prevBtn = new PIXI.Sprite.from("/peachImage/round_left.png")
    // console.log('right');
    //let nextBtn = new PIXI.Sprite.from("right")
    let nextBtn = new PIXI.Sprite.from("/peachImage/round_right.png")
    prevBtn.interactive = nextBtn.interactive = filter.interactive = true
    nextBtn.buttonMode = prevBtn.buttonMode = filter.buttonMode = true
    prevBtn.width = prevBtn.height = nextBtn.width = nextBtn.height = 66
    prevBtn.y = nextBtn.y = this.app.view.height / 2
    prevBtn.x = this.app.view.width * 0.25
    nextBtn.x = this.app.view.width * 0.75
    prevBtn.anchor.set(0.5)
    nextBtn.anchor.set(0.5)

    let leftNum = this.now === 1 ? this.urlArr.length : this.now - 1
    let rightNum = this.now === this.urlArr.length ? 1 : this.now + 1

    // console.log(leftNum, this.now, rightNum);
    // console.log(this[`card${leftNum}`], this[`card${this.now}`], this[`card${rightNum}`])

    this.leftcard = new PIXI.Sprite.from(this[`card${leftNum}`])
    this.centecard = new PIXI.Sprite.from(this[`card${this.now}`])
    this.rightcard = new PIXI.Sprite.from(this[`card${rightNum}`])

    

    this.leftcard.interactive = this.centecard.interactive = this.rightcard.interactive = true

    this.leftcard.anchor.set(0, 0.5)
    this.leftcard.x = 38
    // this.leftcard.scale.set(0.4)
    this.leftcard.width = 200
    this.leftcard.height = 300


    // this.rightcard.scale.set(0.4)
    this.rightcard.anchor.set(1, 0.5)
    this.rightcard.x = this.app.view.width - 38
    this.rightcard.width = 200
    this.rightcard.height = 300


    // this.centecard.scale.set(1.2)
    this.centecard.anchor.set(0.5)
    this.centecard.x = this.app.view.width / 2
    this.centecard.width = 380
    this.centecard.height = 520

    this.leftcard.y = this.centecard.y = this.rightcard.y = this.app.view.height / 2
    
    this.app.stage.addChild(filter, this.leftcard, this.rightcard, mask, this.centecard, prevBtn, nextBtn)

    filter.on("click", () => {
      this.close()
    })

    this.open = () => {
      this.app.stage.addChild(filter, this.leftcard, this.rightcard, mask, this.centecard, prevBtn, nextBtn)
    }
    this.close = () => {
      PIXI.utils.clearTextureCache()
      //delete this.loader
      var self = this.app.view
      this.app.view.parentNode.removeChild(self)
    }

    prevBtn.on("click", () => {
      this.prevEvent()
      this.changeTexture()
    })
    nextBtn.on("click", () => {
      this.nextEvent()
      this.changeTexture()
    })
  }
  changeTexture () {
    if (this.now === 1) {
      this.leftcard.texture = this[`card${this.urlArr.length}`]
      this.rightcard.texture = this[`card${this.now + 1}`]
    } else if (this.now === this.urlArr.length) {
      this.leftcard.texture = this[`card${this.now - 1}`]
      this.rightcard.texture = this[`card1`]
    } else {
      this.leftcard.texture = this[`card${this.now - 1}`]
      this.rightcard.texture = this[`card${this.now + 1}`]
    }
    this.centecard.texture = this[`card${this.now}`]
  }

  prevEvent () {
    this.now -= 1
    if (this.now < 1) this.now = this.urlArr.length
  }

  nextEvent () {
    this.now += 1
    if (this.now > this.urlArr.length) this.now = 1
  }
}
