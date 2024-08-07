import Manager from "../scenes/Manager"
import { Filter } from "../UI/graphicSprite"

/* 
스토리 뷰어 열때마다 나오는 튜토리얼 팝업
x버튼 클릭시 단순 창 닫기
다시 보지않기 버튼 클릭시 로컬 스토리지에 저장해 튜토리얼을 보여주지 않는다.
*/
export default class TutorialContainer extends PIXI.UI.Container {
  constructor (con) {
    super("100%", "100%")
    this.filter = new Filter("100%", "100%")
    this.filter.sprite.buttonMode = false
    let isOpen // true면 튜토리얼 보여준다.

    if (localStorage.getItem("peach_tutorial") === null) {
      localStorage.setItem("peach_tutorial", true)
      isOpen = "true"
    } else {
      isOpen = localStorage.getItem("peach_tutorial")
    }

    this.addChild(this.filter)
    if (isOpen === "true") {
      this.appendMenu()
      con.addChild(this)
    }

    this.container.on("close", () => {
      this.parent.removeChild(this)
    })
  }

  appendMenu () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let MenuArray = [
      [PIXI.Texture.from("tutorial1")],
      [
        PIXI.Texture.from("tutorial2_1"),
        PIXI.Texture.from("tutorial2_2"),
        PIXI.Texture.from("tutorial2_3"),
        PIXI.Texture.from("tutorial2_4"),
        PIXI.Texture.from("tutorial2_5"),
        PIXI.Texture.from("tutorial2_6"),
        PIXI.Texture.from("tutorial2_7"),
      ],
      [
        PIXI.Texture.from("tutorial3_1"),
        PIXI.Texture.from("tutorial3_2"),
        PIXI.Texture.from("tutorial3_3"),
        PIXI.Texture.from("tutorial3_4"),
      ],
      [PIXI.Texture.from("tutorial4_1"), PIXI.Texture.from("tutorial4_2")],
      [PIXI.Texture.from("tutorial5_1"), PIXI.Texture.from("tutorial5_2")],
      [PIXI.Texture.from("tutorial6_1"), PIXI.Texture.from("tutorial6_2")],
      [PIXI.Texture.from("tutorial7_1"), PIXI.Texture.from("tutorial7_2")],
      [PIXI.Texture.from("tutorial8_1"), PIXI.Texture.from("tutorial8_2")],
      [PIXI.Texture.from("tutorial9_1"), PIXI.Texture.from("tutorial9_2")],
    ]
    this.page = 0
    this.num = 0

    let menuSprite = new PIXI.UI.Sprite(MenuArray[0][0])
    menuSprite.width = 1080 * ratioX
    menuSprite.height = 650 * ratioY
    menuSprite.verticalAlign = "middle"
    menuSprite.horizontalAlign = "center"

    let x_btn = new PIXI.UI.Sprite(PIXI.Texture.from("tutorial_x"))
    x_btn.width = x_btn.height = 32 * ratioX
    x_btn.anchorLeft = 1072 * ratioX
    x_btn.anchorBottom = 645 * ratioY
    x_btn.sprite.on("click", () => {
      this.container.emit("close")
    })

    let x_txt = new PIXI.UI.Sprite(PIXI.Texture.from("tutorial_txt"))
    x_txt.width = 268 * ratioX
    x_txt.height = 24 * ratioY
    x_txt.anchorTop = 655 * ratioY
    x_txt.anchorRight = 0
    x_txt.sprite.on("click", () => {
      localStorage.removeItem("peach_tutorial")
      localStorage.setItem("peach_tutorial", false)
      this.container.emit("close")
    })

    let nextBtn = new PIXI.UI.Sprite(PIXI.Texture.from("tutorial_next"))
    let prevBtn = new PIXI.UI.Sprite(PIXI.Texture.from("tutorial_prev"))
    nextBtn.anchorBottom = prevBtn.anchorBottom = 30 * ratioY
    nextBtn.width = prevBtn.width = 66 * ratioX
    nextBtn.height = prevBtn.height = 32 * ratioY
    prevBtn.anchorLeft = 40 * ratioX
    nextBtn.anchorLeft = 130 * ratioX
    prevBtn.visible = false
    x_btn.sprite.interactive = x_btn.sprite.buttonMode = x_txt.sprite.interactive = x_txt.sprite.buttonMode = nextBtn.sprite.interactive = nextBtn.sprite.buttonMode = prevBtn.sprite.interactive = prevBtn.sprite.buttonMode = true

    prevBtn.sprite.on("click", () => {
      let leng = MenuArray[this.page].length - 1
      console.log("leng:", leng, "page", this.page, "num", this.num)
      if (this.page === 0 && this.num === 0) return
      if (this.num == 0) {
        this.page--
        this.num = MenuArray[this.page].length - 1
      } else if (leng >= this.num) this.num--
      else {
        this.page--
        this.num = MenuArray[this.page].length - 1
      }
      if (this.page < 0) this.page = 0

      this.changeTexture()
    })
    nextBtn.sprite.on("click", () => {
      let leng = MenuArray[this.page].length - 1
      if (this.page === MenuArray.length - 1 && this.num === leng) return
      if (leng > this.num) this.num++
      else {
        this.page++
        this.num = 0
      }
      if (this.page > MenuArray.length - 1) this.page = MenuArray.length - 1

      this.changeTexture()
    })

    let menu = this.makeNaviBtn(0, 63 * ratioX, 69 * ratioY)
    let card = this.makeNaviBtn(1, 92 * ratioX, 103 * ratioY)
    let audio = this.makeNaviBtn(2, 92 * ratioX, 137 * ratioY)
    let paint = this.makeNaviBtn(3, 63 * ratioX, 171 * ratioY)
    let bookmark = this.makeNaviBtn(4, 78 * ratioX, 205 * ratioY)
    let gather = this.makeNaviBtn(5, 92 * ratioX, 239 * ratioY)
    let fullscreen = this.makeNaviBtn(6, 92 * ratioX, 273 * ratioY)
    let print = this.makeNaviBtn(7, 63 * ratioX, 307 * ratioY)
    let fin = this.makeNaviBtn(8, 63 * ratioX, 341 * ratioY)

    this.menuSprite = menuSprite
    this.MenuArray = MenuArray
    this.prevBtn = prevBtn
    this.nextBtn = nextBtn
    menuSprite.addChild(
      x_btn,
      nextBtn,
      prevBtn,
      menu,
      card,
      audio,
      paint,
      bookmark,
      gather,
      fullscreen,
      print,
      fin,
      x_txt,
    )
    this.addChild(menuSprite)
  }

  changeTexture () {
    if (this.page === 0) {
      this.prevBtn.visible = false
    } else if (this.page === this.MenuArray.length - 1 && this.num === this.MenuArray[this.page].length - 1) {
      this.nextBtn.visible = false
    } else {
      this.prevBtn.visible = true
      this.nextBtn.visible = true
    }

    console.log(this.page, this.num)
    this.menuSprite.sprite.texture = this.MenuArray[this.page][this.num]
  }

  makeNaviBtn (num, width, y) {
    const ratioX = Manager.ratioX
    let button = new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
    button.anchorLeft = 24 * ratioX
    button.height = 24 * ratioX
    button.anchorTop = y
    button.width = width
    button.sprite.interactive = button.sprite.buttonMode = true

    button.sprite.on("click", () => {
      this.page = num
      this.num = 0
      this.changeTexture()
    })
    return button
  }
}
