import WebFont from "webfontloader"
import Manager from "../scenes/Manager"
import LoaderScene from "../scenes/Loader"
/*
 사용자페이지(스토리 뷰어)
 여기서 부터 시작함
 */
export default class Web {
  constructor (url) {
    WebFont.load({
      google: {
        families: ["Noto Sans KR"],
      },
      active: e => {
        console.log("font loaded!")
      },
    })
    const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    // gatsby용 코드
    const screenWidth = Math.max(document.documentElement.clientWidth - 17, window.innerWidth - 17 || 0)
    //next용 코드
    // const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    Manager.height = screenHeight
    Manager.width = screenWidth
    Manager.initialize(url)
    const loady = new LoaderScene(false, url)
    Manager.changeScene(loady)
  }
}
