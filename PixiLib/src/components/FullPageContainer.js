import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
import RoundedMaskCon from "../UI/roundedMaskCon.js"

/* 
사용자측에서 모아보기 버튼 클릭시 나오는
모아보기 페이지
*/
export default class FullPageContainer extends PIXI.UI.Sprite {
  constructor (thumbArr, queueRenderPage) {
    const ratioX = Manager.ratioX
    super(PIXI.Texture.WHITE)
    this.width = 1722 * ratioX
    this.height = "100%"
    this.sprite.interactive = true
    this.superCon = new PIXI.UI.Container("100%", "100%")
    this.sprite.on("close", () => {
      this.parent.removeChild(this)
    })

    this.addChild(this.superCon)
    this.makeThumbNail(thumbArr, queueRenderPage)
    this.renderSmallPages()
    // this.makeButtons()
  }

  //페이지 이동 화살표 버튼 생성
  makeButtons () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let arrowLeft = new PIXI.Texture.from("triangleL")
    let arrowRight = new PIXI.Texture.from("triangleR")
    let leftSp = new PIXI.UI.Sprite(arrowLeft)
    let RightSp = new PIXI.UI.Sprite(arrowRight)
    leftSp.tint = RightSp.tint = Enum.color.arrow
    leftSp.verticalAlign = RightSp.verticalAlign = "middle"
    leftSp.width = RightSp.width = 27 * ratioX
    leftSp.height = RightSp.height = 42 * ratioY
    leftSp.sprite.interactive = true
    leftSp.sprite.buttonMode = true
    RightSp.sprite.interactive = true
    RightSp.sprite.buttonMode = true
    leftSp.anchorLeft = RightSp.anchorRight = 5 * ratioX

    leftSp.sprite.on("click", () => {
      if (this.idx <= 0) {
        this.idx = 0
        return
      } else {
        this.idx -= 1
        this.renderSmallPages()
      }
      // console.log("idx:",this.idx)
    })
    RightSp.sprite.on("click", () => {
      if (this.idx >= this.containerArr.length - 1) {
        this.idx = this.containerArr.length - 1
        return
      } else {
        this.idx += 1
        this.renderSmallPages()
      }
      // console.log("idx:",this.idx)
    })

    this.addChild(RightSp, leftSp)
  }


  //모든 썸네일 생성
  makeThumbNail (thumbArr, queueRenderPage) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.idx = 0
    let pages = Math.ceil(thumbArr.length / 12)
    this.containerArr = new Array(pages)
    // console.log("containerArr:",this.containerArr)

    for (let j = 0; j < pages; j++) {
      let temp = []
      for (let i = 0; i < 12; i++) {
        const texture = thumbArr[j * 12 + i]
        // console.log("texture:", texture)
        if (texture) {
          let con = new RoundedMaskCon(386 * ratioX, 260 * ratioY, 13)
          let sp = new PIXI.UI.Sprite(texture)
          sp.sprite.interactive = sp.sprite.buttonMode = true
          sp.sprite.on("click", () => {
            queueRenderPage(j * 12 + i + 1)
            this.sprite.emit("close")
            Manager.currentScene.webMenu.clickEventHandler(undefined)
            Manager.isGather = false;

            Manager.currentScene.RightBtn.sprite.interactive =
            Manager.currentScene.LeftBtn.sprite.interactive =true

            Manager.currentScene.webMenu.gatherBtn.backgroundColor= Enum.color.white
            
            Manager.currentScene.box.removeChild(Manager.currentScene.box.children.at(-1));
            Manager.currentScene.con.removeChild(Manager.currentScene.box);
            Manager.currentScene.con.addChild(Manager.currentScene.RightBtn,Manager.currentScene.LeftBtn);
          })

          con.anchorLeft = (i % 4) * (23 * ratioX + con.width) + 52 * ratioX
          con.anchorTop = Math.floor(i / 4) * (20 * ratioY + con.height) + 144 * ratioY
          con.addChild(sp)
          con.border()
          temp.push(con)
        } else break
        this.containerArr[j] = temp
      }
    }
  }

  //페이지 이동시 기존 썸네일을 페이지에 맞게 변경해주는 함수
  renderSmallPages () {
    while (this.superCon.children[0]) {
      this.superCon.removeChild(this.superCon.children[0])
    }
    this.containerArr[this.idx].forEach(element => {
      this.superCon.addChild(element)
      
    })
  }
}
