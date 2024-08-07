import LeftMenuAdmin from "../components/LeftmenuAdmin.js"
import RightMenu from "../components/RightmenuAdmin.js"
import Manager from "./Manager.js"
import ArrowLeft from "../components/arrowLeft.js"
import ArrowRight from "../components/arrowRight.js"
import Viewer from "../components/viewer.js"
import { ScrollThumb } from "../components/scrollThumb.js"
import CardPopUpContainer from "../components/cardPopupContainer.js"
import Data from "../DC/data.js"
import { PreviewScene } from "./PreviewScene.js"
import AudioPopUpContianer from "../components/audioPopupContainer.js"
import { SavePopUp } from "../components/savePopUp.js"
import { AfterSavePopup, OnlyClosePopup } from "../components/closePopup.js"
import { changeDone, editStory, saveStory } from "../DC/api.js"
import { ProgressPopup } from "../UI/progressPopup.js"
import JSZip from "jszip"
import peachClose from "../setclose/peachclose.js"

/* 
저작도구에서 보여지는 모든 UI는 AdminScene의 container안에 addchild한다.
 ---함수별 변수 정리 ---
 1) constructor
 this.con : main container로 화면에 보이는 모든객체는 this.con에 addchild된다.
 viewCan : pdf파일 렌더해서 보여주는 캔버스
 this.tileGrid : 안내선
 this.leftmenu : 왼쪽 메뉴창
 this.rightmenu : 오른쪽 메뉴창
 this.url : pdf파일
 this.callBackFunc : viewer에서 상황에따라 다르게 호출하는 콜백함수들 모아놓음
 {
   update : 페이지 바뀔때마다 호출
   const: 처음 pdf파일 렌더할때만 한번 호출
   thumb : 모아보기에서 사용할  thumnail 생성 후 scrollThumb 생성
 }
 this.leftBtn : 왼쪽 화살표 모양의 이전페이지 버튼
 this.rightBtn : 오른쪽 화살표 모양의 이전페이지 버튼
 this.viewer : pdf그리는 viewer 클래스
2) addEvent
popup : 저장하기 이후 종료 눌렀을때 나오는 팝업
cardpopup  : 그림단어 아이콘 호출시 나오는 팝업
audiopopup : 음성 아이콘 호출시 나오는 팝업
onlyclosepopup : 종료 아이콘 눌렀을때 나오는 팝업
savepopup : 저장 아이콘

*/
export default class AdminScene {
  constructor (url) {
    const ratioX = Manager.ratioX
    Data.viewWidth = 1400
    this.con = new PIXI.UI.Container("100%", "100%")
    let viewCan = document.getElementById("view-canvas")
    let _con = this.con
    this.tileGrid = new PIXI.UI.TilingSprite(PIXI.Texture.from("grid"), Manager.width, Manager.height)
    this.tileGrid.tint = 0xfafafa
    this.tileGrid.alpha = 0
    this.tileGrid.tileScale.x = this.tileGrid.tileScale.y = 0.5
    this.leftmenu = new LeftMenuAdmin()
    this.rightmenu = new RightMenu(this.tileGrid)
    this.leftmenu.filterOn()
    this.rightmenu.filterOn()
    this.con.on("filterOn", () => {
      this.leftmenu.filterOn()
      this.rightmenu.filterOn()
    })
    this.con.on("filterOff", () => {
      this.leftmenu.filterOff()
      this.rightmenu.filterOff()
    })

    var _leftmenu = this.leftmenu
    this.callBackFunc = {
      update: function update () {
        //페이지 변경될때마다 호출
        _con.emit("selectCard")
        _con.emit("selectAudio")
      },
      //처음 렌더할때 호출
      const: function setAudio (page) {
        // 캔버스 위치 조정
        viewCan.style.marginTop = (Manager.height - viewCan.height) / 2 + "px"
        viewCan.style.marginLeft = ((Manager.width - viewCan.width - 520) / 2 + 328) * ratioX + "px"
        // 페이지 수 따라 데이터 초기화
        Data.initArray(page)
        //수정일 수 있으므로 기존 데이터 불러옴
        Data.rollbackArray()
        Manager.paintApp()
        _leftmenu.makeCardContainer()
      },
      thumb: function makeThumbNail (thumbArr, queueRenderPage) {
        //모아보기 페이지 생성
        this.scrollThumb = new ScrollThumb(thumbArr, queueRenderPage)
        _con.addChild(this.scrollThumb)
      },
    }

    this.LeftBtn = new ArrowLeft(107 * ratioX)
    this.RightBtn = new ArrowRight(107 * ratioX)

    this.LeftBtn.anchorLeft = 221 * ratioX
    this.RightBtn.anchorRight = 83 * ratioX
    this.viewer = new Viewer(url, this.callBackFunc, this.RightBtn, this.LeftBtn, 300, 200)
    this.con.addChild(this.tileGrid, this.LeftBtn, this.RightBtn, this.leftmenu, this.rightmenu)
    this.addEvent()
  }

  // 오른쪽메뉴에 존재하는 아이콘 클릭 이벤트 모음
  addEvent () {
    let popup = new ProgressPopup()
    //종료하기 눌렀을때 실행되는 함수
    let endFunc = () => {
      //저장하기 눌렀을때 실행
      if (Data.isSaved) {
        //저장상태를 알리기 위한 팝업
        this.con.addChild(popup)
        //pdf와 setting파일을 하나의 zip파일로 만듬
        var zip = new JSZip()
        let setting = JSON.stringify(Data.data)
        zip.file("setting.txt", setting)
        zip.file(Data.pdf.name, Data.pdf)
        zip
          .generateAsync(
            {
              type: "blob",
              compression: "DEFLATE",
            },
            function updateCallback (metadata) {
              //zip파일 생성중일때 progress 보여줌
              popup.txt.text = `zip파일 생성중 ... ${metadata.percent || 0} %`
            },
          )
          .then(function (zipContents) {
            //zip파일 생성 완료시
            var filename = Data.title + ".zip"
            var file = new File([zipContents], filename, {
              type: "application/zip",
            })
            //등록일때
            if (Data.isFirst) {
              saveStory(Data.story_tag, Data.state, Data.cards, file, res => {
                if (res.code === 0) popup.txt.text = "서버전송 완료"
                else popup.txt.text = "서버전송 실패"
                setTimeout(() => {
                  peachClose.closePeachPIXI()
                }, 500)
              })
            } else {
              // 수정일때 상태 먼저 변경해줌
              changeDone(Data.raw_num, Data.state, res => {
                if (res.code === 0) {
                  popup.txt.text = "상태변경 완료..."
                } else {
                  popup.txt.text = "상태변경 실패"
                }
              })
              // 바뀐 내용 저장
              editStory(Data.raw_num, Data.cards, file, res => {
                if (res.code === 0) popup.txt.text = "서버전송 완료!"
                else popup.txt.text = "서버전송 실패"
                setTimeout(() => {
                  peachClose.closePeachPIXI()
                }, 500)
              })
            }
          })
      } else {
        //그냥 나가기
        setTimeout(() => {
          peachClose.closePeachPIXI()
        }, 500)
      }
    }
    let cardPopup = new CardPopUpContainer()
    let audioPopup = new AudioPopUpContianer()
    let aftersavePop = new AfterSavePopup(endFunc)
    let onlyclosepop = new OnlyClosePopup(endFunc)
    let savePopup = new SavePopUp(() => {
      Data.saveAudioData()
      Data.saveCardData()
      Data.setData()
      if (Data.state === 0) {
        changeDone(Data.raw_num, Data.state, res => {
          if (res.code === 0) {
            this.con.addChild(popup)
            popup.Setpublish(peachClose.closePeachPIXI)
          }
        })
      } else {
        this.con.addChild(aftersavePop)
      }
    })
    this.con.on("editCard", (idx, call) => {
      cardPopup.editScroll(idx, call)
      this.con.addChild(cardPopup)
    })
    this.con.on("editAudio", (idx, call) => {
      audioPopup.radioBox(idx, call)
      this.con.addChild(audioPopup)
    })
    this.con.on("selectCard", () => {
      this.leftmenu.makeCardContainer(Data.cardArr)
    })
    this.con.on("selectAudio", () => {
      this.leftmenu.makeAudioContainer()
    })
    this.rightmenu.gatherBtn.onClick(() => {
      this.con.addChild(this.callBackFunc.scrollThumb)
      this.con.emit("filterOn")
    })
    this.rightmenu.cardBtn.onClick(() => {
      cardPopup.selectScroll()
      this.con.addChild(cardPopup)
    })
    this.rightmenu.audioBtn.onClick(() => {
      audioPopup.checkBox()
      this.con.addChild(audioPopup)
    })
    this.rightmenu.previewBtn.onClick(() => {
      let lastScene = this
      Data.viewWidth = 1614
      this.viewer.changeScalePage(() => {
        Manager.changeScene(new PreviewScene(lastScene))
      })
    })
    this.rightmenu.saveBtn.onClick(() => {
      this.con.addChild(savePopup)
    })

    this.rightmenu.finBtn.onClick(() => {
      this.con.addChild(onlyclosepop)
    })
    this.rightmenu.gridBtn.onClick(() => {
      // 타일그리드의 알파값만 변경
      if (this.tileGrid.alpha === 1) this.tileGrid.alpha = 0
      else this.tileGrid.alpha = 1
    })

    this.rightmenu.hlBtn.onClick(() => {
      var inputNum = prompt("숫자만 입력하세요", Data.hlHeight)
      var a = Number(inputNum)
      if (a !== 0 && !isNaN(inputNum)) {
        Data.hlHeight = a
      }
    })
  }

  update (framesPassed) {}
  resize (screenWidth, screenHeight) {}
}
