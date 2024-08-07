import ArrowLeft from "../components/arrowLeft.js"
import ArrowRight from "../components/arrowRight.js"
import WebMenu from "../components/WebMenu.js"
import Viewer from "../components/viewer.js"
import Manager from "./Manager.js"
import Data from "../DC/data.js"
import Highlighter from "../UI/highlighter.js"
import WebCardCon from "../components/webCardCon.js"
import WebAudioCon from "../components/webAudioCon.js"
import WebPaintCon from "../components/webPaintCon.js"
import PrevCard from "../components/prevCard.js"
import FullPageContainer from "../components/FullPageContainer.js"
import WebBookmarkCon from "../components/webBookmarkCon.js"
import { get_BookMark, perUse } from "../DC/api.js"
import { ListenPopUpLong, ListenPopUpShort } from "../UI/ListenPopup.js"
import peachClose from "../setclose/peachclose.js"
import TutorialContainer from "../components/tutorialContainer.js"
import * as Enum from "../Enum/index.js"
import { PrintPopup } from "../UI/printPopup.js"

/* 
사용자 페이지에서 보이는 모든 UI는 WebScene container안에 addchild한다.
*/
export default class WebScene {
  constructor (url) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    //기획서 참고해서 pdf파일 기준 width 설정
    Data.viewWidth = 1614
    this.con = new PIXI.UI.Container("100%", "100%")
    this.box =  new PIXI.UI.Container("100%",  104 * ratioY)
    let viewCan = document.getElementById("view-canvas")
    var That = this

    Manager.isGather = false;
    Manager.isQ = false;
    Manager.isCard = false;
    Manager.isAudio = false;
    Manager.isBookmark = false;


    //viewer.js는 페이지 렌더할때 한 함수만 사용하는데, 상황별 호출해야하는 callback함수가 달라  묶어서 보냅니다.
    this.callBackFunc = {
      //페이지 변경될때 마다 호출
      update: function update (nowPage) {
        That.cardUpdate()
        That.webMenu.webAudio.updateIndex(nowPage)
        That.webMenu.webPaint.updateIndex(nowPage)
        console.log("nowPage",nowPage)
      },
      //처음 렌더할때 호출
      const: function setAudio (page, nowPage) {
        //캔버스  위치 조정
        viewCan.style.marginTop = (Manager.height - viewCan.height) / 2 + "px"
        viewCan.style.marginLeft = (window.innerWidth - viewCan.width - 199 * ratioX)/2 + "px"
        //해당페이지 그림단어 업데이트
        That.cardUpdate()
        //오디오 컨테이너 생성
        That.webMenu.webAudio = new WebAudioCon(Data.audioData, page, nowPage, That.LeftBtn, That.RightBtn, highlighter)
        console.log("nowPage",nowPage)
        That.webMenu.webAudio.updateIndex(nowPage)
        //페인트 앱 생성
        Manager.paintApp()
        That.webMenu.webPaint = new WebPaintCon(page, nowPage, That.LeftBtn, That.RightBtn)
        // That.webMenu.webPaint.updateIndex(nowPage)
        
      },
      // 썸네일이 사용되는 페이지들 생성
      thumb: function makeThumbNail (thumbArr, queueRenderPage, nowPage) {
        let thumbTexture = []
        //캔버스 배열가지고 텍스쳐 얻어옴
        thumbArr.forEach(element => {
          const texture = new PIXI.Texture.from(element)
          thumbTexture.push(texture)
        })
        // 북마크페이지 생성
        // if(!Data.isHidden){
        get_BookMark(Data.story_num, res => {
          if (res.code == 0) {
            let arr = []
            for (const item of res.data.story.BookMark) {
              arr.push(item.page_no)
            }
            That.bookmarkArr = new Set(arr)
            That.webMenu.webBookmark = new WebBookmarkCon(That.bookmarkArr, thumbTexture, That.viewer)
          }
        })
      // }
      
        // 전체화면보기페이지 생성
        That.thumnail = new FullPageContainer(thumbTexture, queueRenderPage)
      },
    }

    let highlighter = new Highlighter()
    this.LeftBtn = new ArrowLeft(52 * ratioX)
    this.RightBtn = new ArrowRight(52 * ratioX)
    this.RightBtn.anchorRight = 201 * ratioX
    
    this.webMenu = new WebMenu()
    if (Manager.isPrev) {
      this.webMenu.paintBtn.button.interactive = this.webMenu.bookmarkBtn.button.interactive = false
      this.webMenu.paintBtn.button.emit("disable")
      this.webMenu.bookmarkBtn.button.emit("disable")
    }


    this.viewer = new Viewer(url, this.callBackFunc, this.RightBtn, this.LeftBtn, 386, 261)
    this.con.container.on("goFirst", num => {
      this.viewer.acessQueue(num)
    })

    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")
    Data.cardData.forEach(element => {
      element.texture = new PIXI.Texture.from(S3_URL_RAW + "/" + element.uuid)
    })
   

    this.con.addChild(this.LeftBtn, this.RightBtn, this.webMenu, highlighter)


    
    this.prevCard = new PrevCard()
    this.cardArr = []
    this.Qarr = []
    this.webMenu.webCard = new WebCardCon(this.cardArr)
    new TutorialContainer(this.con)
    this.eventHandler()
    
  }

  //페이지 이동하고 그림단어 업데이트 할때 사용
  cardUpdate () {
    const ratioX = Manager.ratioX
    let size = 20 * ratioX
    this.cardArr = []
    let viewCan = document.getElementById("view-canvas")
    let left = viewCan.style.marginLeft
    let top = viewCan.style.marginTop
    left = parseFloat(left)
    top = parseFloat(top)
    let now = document.getElementById("page_input").textContent - 1
    this.Qarr.forEach(element => {
      this.con.removeChild(element)
    })
    this.Qarr = [];
    Data.cardData.forEach(e => {
      const item = e.list[now]
      if (item !== null && item !== undefined) {
        let texture = e.texture
        let savedCard = new PIXI.UI.Sprite(texture)
        savedCard.sprite.interactive = savedCard.sprite.buttonMode = true
        savedCard.sprite.on("click", () => {
          this.prevCard.card.sprite.texture = savedCard.sprite.texture
          this.con.addChild(this.prevCard)
        })
        this.cardArr.push(savedCard)
        let qTexture = new PIXI.Texture.from("Q_icon")
        this.qSprite = new PIXI.UI.Sprite(qTexture)
        this.qSprite.tint = Enum.color.red
        this.qSprite.width = size
        this.qSprite.height = size
        this.qSprite.x = item.relatePos.x * viewCan.width + left
        this.qSprite.y = item.relatePos.y * viewCan.height + top
        this.qSprite.sprite.interactive = this.qSprite.sprite.buttonMode = true
        this.qSprite.sprite.on("click", () => {
          this.prevCard.card.sprite.texture = texture
          this.con.addChild(this.prevCard)
        })
         //카드버튼 선택했을 때만 돋보기 보이기
         if(Manager.isQ) {
           this.con.addChild(this.qSprite) 
        } 
        this.Qarr.push(this.qSprite)
        
      }
    })
    this.webMenu.webCard.changeCard(this.cardArr)
  }

  // 메뉴 아이콘 클릭시 나오는 이벤트 핸들러
  eventHandler () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let that = this
    let closeFunc = () => {
      perUse(Data.story_num, () => {
        peachClose.closePeachPIXI()
      })
    }
    let closeShort = new ListenPopUpShort(() => {
      that.viewer.acessQueue(1)
    }, closeFunc)

    this.con.container.on("storyEnd", () => {
      this.con.addChild(closeShort)
    })
    let closeLong = new ListenPopUpLong(
      "계속 읽기",
      "스토리 닫기",
      closeFunc,
      () => {
        console.log("계속 읽기")
      },
      "이야기를 종료하시겠어요?",
    )
    let printPopup = new PrintPopup()

    this.webMenu.finBtn.onClick(() => {
      this.con.addChild(closeLong)
    })

    this.webMenu.fullscreenBtn.onClick(() => {
      let viewCan = document.getElementById("view-canvas")
      Manager.isFull = !Manager.isFull

      if (Manager.isFull) {
        //전체보기
        console.log("전체보기")
        this.webMenu.fullscreenBtn.removeImage({ url: 'fullscreen_icon' })
        this.webMenu.fullscreenBtn.addImage({
          url: 'basicscreen_icon',
          width: 23 * ratioX,
          height: 23 * ratioX,
          tint:0x3b3b3b
        })
        this.webMenu.fullscreenBtn.basicscreen_icon.pivotX = 0
        this.webMenu.fullscreenBtn.basicscreen_icon.pivotY = 0
        this.webMenu.fullscreenBtn.basicscreen_icon.anchorRight =  5*ratioX
        this.webMenu.fullscreenBtn.basicscreen_icon.anchorBottom =  5*ratioY

        this.con.removeChild(this.webMenu)
        this.con.addChild(
          this.webMenu.finBtn.button,
          this.webMenu.menuBg,
          this.webMenu.cardBtn.button,
          this.webMenu.paintBtn.button,
          this.webMenu.audioBtn.button,
          this.webMenu.bookmarkBtn.button,
          this.webMenu.fullscreenBtn.button,
          )
        this.webMenu.gatherBtn.button.visible = false
        this.webMenu.printBtn.button.visible = false

        this.webMenu.anchorRight = 0
        this.RightBtn.anchorRight = 0
        this.webMenu.finBtn.background.alpha = 1

        this.webMenu.finBtn.background.width = 100 * ratioX
        this.webMenu.finBtn.background.height = 40 * ratioX

        this.webMenu.finBtn.button.anchorRight = 0
        this.webMenu.finBtn.button.anchorLeft = 1800 * ratioX

        this.webMenu.menuBg.anchorRight = 0 * ratioX
        this.webMenu.cardBtn.button.anchorRight=
        this.webMenu.paintBtn.button.anchorRight=
        this.webMenu.audioBtn.button.anchorRight=
        this.webMenu.bookmarkBtn.button.anchorRight=
        this.webMenu.fullscreenBtn.button.anchorRight = 5 * ratioX


        viewCan.style.marginLeft = `${
          (window.innerWidth - viewCan.width - 156 * ratioX) / 2
        }px`
        Manager.currentScene.RightBtn.width = 204 * ratioX
      } else {
        //전체보기 취소 (기본화면 보기)
        this.webMenu.fullscreenBtn.removeImage({ url: 'basicscreen_icon' })
        this.webMenu.fullscreenBtn.addImage({
          url: 'fullscreen_icon',
          width: 23 * ratioX,
          height: 23 * ratioX,
          tint:0x3b3b3b
        })
        this.webMenu.fullscreenBtn.fullscreen_icon.pivotX = 0
        this.webMenu.fullscreenBtn.fullscreen_icon.pivotY = 0
        this.webMenu.fullscreenBtn.fullscreen_icon.anchorRight = 5*ratioX
        this.webMenu.fullscreenBtn.fullscreen_icon.anchorBottom = 5*ratioY
        this.webMenu.fullscreenBtn.background.alpha = 0
        
        this.webMenu.finBtn.background.alpha =
          this.webMenu.gatherBtn.background.alpha =
          this.webMenu.printBtn.background.alpha =
            1

        this.webMenu.finBtn.background.width = 168 * ratioX
        this.webMenu.gatherBtn.background.width =
          this.webMenu.printBtn.background.width = 83 * ratioX

        this.webMenu.finBtn.background.height =
          this.webMenu.gatherBtn.background.height =
          this.webMenu.printBtn.background.height =
            33 * ratioY

        this.webMenu.finBtn.button.anchorRight = 80 * ratioX
        this.webMenu.finBtn.button.anchorLeft = 80 * ratioX

        this.webMenu.gatherBtn.button.anchorRight = 100 * ratioX
        this.webMenu.printBtn.button.anchorRight = 0 * ratioX

        this.webMenu.gatherBtn.button.anchorLeft = 8 * ratioX
        this.webMenu.printBtn.button.anchorLeft = 90 * ratioX


        Manager.currentScene.RightBtn.width = 52 * ratioX
        Manager.currentScene.LeftBtn.width = 52 * ratioX
        Manager.currentScene.RightBtn.anchorRight = 201 * ratioX
        this.webMenu.gatherBtn.button.visible = true
        this.webMenu.printBtn.button.visible = true
        
        this.webMenu.addChild(
          this.webMenu.finBtn.button,
          this.webMenu.menuBg,
          this.webMenu.cardBtn.button,
          this.webMenu.paintBtn.button,
          this.webMenu.audioBtn.button,
          this.webMenu.bookmarkBtn.button,
          this.webMenu.fullscreenBtn.button,
        )
        this.con.addChild(this.webMenu)
        this.webMenu.menuBg.anchorRight =201 * ratioX
        this.webMenu.cardBtn.button.anchorRight =
        this.webMenu.paintBtn.button.anchorRight =
        this.webMenu.audioBtn.button.anchorRight =
        this.webMenu.bookmarkBtn.button.anchorRight =
        this.webMenu.fullscreenBtn.button.anchorRight =205 * ratioX
        viewCan.style.marginLeft =
          (window.innerWidth - viewCan.width - 199 * ratioX) / 2 + "px"
        Manager.currentScene.cardUpdate()
      }
    })

    this.webMenu.gatherBtn.onClick(() => {
      Manager.isGather = !Manager.isGather
      let nowPage = this.viewer.getPageNum()
      let length = this.thumnail.containerArr[0].length
      this.renderTopText(nowPage, length)
      if (!Manager.isGather) {
        Manager.isGather = false
        this.RightBtn.sprite.interactive =
        this.LeftBtn.sprite.interactive = true
        this.box.removeChild(this.box.children.at(-1))
        this.con.removeChild(this.thumnail,this.box)       
        this.con.addChild(          
          this.RightBtn,
          this.LeftBtn,
          this.webMenu
          )
          this.webMenu.addChild(this.webMenu.contentsBox)
      } else {
        Manager.isGather = true
        this.RightBtn.sprite.interactive =
        this.LeftBtn.sprite.interactive = false

        this.webMenu.addChild(this.webMenu.contentsBox)
        this.con.addChild(
          this.thumnail, 
          this.box,
          this.webMenu
          )
          this.con.removeChild(    
            this.RightBtn, 
            this.LeftBtn,
            )
        for (let i = 0; i < this.Qarr.length; i++) {
          this.con.removeChild(this.Qarr[i])
        }
      }
    })

    this.webMenu.gatherBtn.onHover(() => {
      if (Manager.isGather) {
        this.webMenu.gatherBtn.backgroundColor = Enum.color.button
      } 
    })

    // qSprite 보이게 안보이게 설정하기
    this.webMenu.cardBtn.onClick(() => {
      const searchArr = this.webMenu.webCard.searchArr
      if(Manager.isQ){
        Manager.isQ = false;
        for(let i=0; i<this.Qarr.length; i++){
          this.con.removeChild(this.Qarr[i])
        }
      } else {
        Manager.isQ = true;
        console.log(searchArr.length);
        if(searchArr.length ===0){
          this.webMenu.webCard.textinput.text = "단어검색"
          console.log(391391);
          this.webMenu.webCard.textinput.emit("blur")
        }

        for(let i=0; i<this.Qarr.length; i++){
          this.con.addChild(this.Qarr[i])
        }
      }
    })

    this.webMenu.audioBtn.onClick(()=>{
      for(let i=0; i<this.Qarr.length; i++){
        this.con.removeChild(this.Qarr[i])
      }
    })
    this.webMenu.paintBtn.onClick(()=>{
      for(let i=0; i<this.Qarr.length; i++){
        this.con.removeChild(this.Qarr[i])
      }
    })
    this.webMenu.bookmarkBtn.onClick(()=>{
      for(let i=0; i<this.Qarr.length; i++){
        this.con.removeChild(this.Qarr[i])
      }
    })
    this.webMenu.printBtn.onClick(() => {
      console.log(400400);
      this.con.addChild(printPopup)
      // const isWhole = true
      // Manager.print(3, false, isWhole)

      // static print (copies,isColor,isWhole) {...}
      // 부수,컬러,전체
    })

    this.con.container.on("buttonblurOn", () => {
      this.webMenu.cardBtn.button.interactive =
        this.webMenu.audioBtn.button.interactive =
        this.webMenu.paintBtn.button.interactive =
        this.webMenu.bookmarkBtn.button.interactive =
        this.webMenu.fullscreenBtn.button.interactive =
        this.webMenu.printBtn.button.interactive =
        this.webMenu.finBtn.button.interactive =
          false

      // this.webMenu.cardBtn.button.emit("disable")
      // this.webMenu.audioBtn.button.emit("disable")
      // this.webMenu.paintBtn.button.emit("disable")
      // this.webMenu.bookmarkBtn.button.emit("disable")
      // this.webMenu.fullscreenBtn.button.emit("disable")
      // this.webMenu.printBtn.button.emit("disable")
      // this.webMenu.finBtn.button.emit("disable")
    })
    this.con.container.on("buttonblurOff", () => {
      this.webMenu.cardBtn.button.interactive =
        this.webMenu.audioBtn.button.interactive =
        this.webMenu.paintBtn.button.interactive =
        this.webMenu.bookmarkBtn.button.interactive =
        this.webMenu.printBtn.button.interactive =
        this.webMenu.finBtn.button.interactive =
        this.webMenu.fullscreenBtn.button.interactive =
          true

      this.webMenu.cardBtn.button.emit("active")
      this.webMenu.audioBtn.button.emit("active")
      this.webMenu.paintBtn.button.emit("active")
      this.webMenu.bookmarkBtn.button.emit("active")
      this.webMenu.printBtn.button.emit("active")
      this.webMenu.finBtn.button.emit("active")
      this.webMenu.fullscreenBtn.button.emit("active")
    })
    this.con.container.on("previewblurOff", () => {
      this.webMenu.cardBtn.button.interactive =
        this.webMenu.audioBtn.button.interactive =
        this.webMenu.printBtn.button.interactive =
        this.webMenu.finBtn.button.interactive =
        this.webMenu.fullscreenBtn.button.interactive =
          true

      this.webMenu.cardBtn.button.emit("active")
      this.webMenu.audioBtn.button.emit("active")
      this.webMenu.printBtn.button.emit("active")
      this.webMenu.finBtn.button.emit("active")
      this.webMenu.fullscreenBtn.button.emit("active")
    })
  }

  // 모아보기시 위쪽 ui
  renderTopText(now, thumbsLength) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY

    let imgt = new PIXI.Texture.from("gather_icon"),
    img = new PIXI.UI.Sprite(imgt)
    img.width = img.height = 38 * ratioX
    img.anchorTop = 40 * ratioY
    img.anchorLeft = 63 * ratioX

    let textCont = new PIXI.Graphics()
    textCont.lineStyle(2,0xdbdbdb);
    textCont.beginFill(0xffffff);
    textCont.drawRoundedRect(0,0,55 * ratioX, 43 * ratioY,5);
    textCont.endFill();

    let textContTexture = Manager.app.renderer.generateTexture(textCont)
    let textCon = new PIXI.UI.Sprite(textContTexture)

    let titleTxt = new PIXI.UI.Text(
      "전체 페이지 보기",
      Enum.fontstyle.Black30_R
    )
    titleTxt.anchorTop = 40 * ratioY
    titleTxt.anchorLeft = 115 * ratioX

 
    // let countTxt = new PIXI.UI.Text(thumbsLength, Enum.fontstyle.Black25_R)
    let nowPageTxt = new PIXI.UI.Text(`${now}`, Enum.fontstyle.Black19_R)
    let pageTxt = new PIXI.UI.Text(`/    ${thumbsLength} 페이지`, Enum.fontstyle.Black19_R)
    // nowPageTxt.x = countTxt.width + 20 * ratioX
    pageTxt.verticalAlign = 
    textCon.verticalAlign = 
    nowPageTxt.verticalAlign = "middle"
    nowPageTxt.text = now

    pageTxt.anchorRight = 340 * ratioX
    nowPageTxt.anchorRight = 480 * ratioX
    textCon.anchorRight = 460 * ratioX
    textCon.anchorTop = nowPageTxt.anchorTop = titleTxt.anchorTop

    if(this.box.children.length===0){       
      this.box.addChild(titleTxt, img, textCon, pageTxt, nowPageTxt)
    }
    if(Manager.isGather){
      nowPageTxt.text = now
      this.box.addChild(nowPageTxt)
    }    
  }
  update (framesPassed) {}
  resize (screenWidth, screenHeight) {}
}
