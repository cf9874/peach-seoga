import WebFont from "webfontloader"
import Manager from "../scenes/Manager"
import LoaderScene from "../scenes/Loader"

/* 
사용하는 웹 폰트를와 관리자페이지에 필요한 이미지를 로드하고, 화면 가로 세로를 Manager에 전달하는 클래스
*/

export default class WebAdmin {
  constructor (url) {
    WebFont.load({
      google: {
        families: ["Noto Sans KR"],
      },
      active: e => {
        console.log("font loaded!")
      },
    })

    const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth)

    const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)

    Manager.height = screenHeight
    Manager.width = screenWidth
    Manager.initialize(url)
    const loady = new LoaderScene(true, url)
    Manager.changeScene(loady)
  }
}
