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
import { color } from "../Enum/index.js"
import peachClose from "../setclose/peachclose.js"
import TutorialContainer from "../components/tutorialContainer.js"

export default class SceneBase {
  constructor (url) {
    const ratioX = Manager.ratioX
    //기획서 참고해서 pdf파일 기준 width 설정
    Data.viewWidth = 1614
    this.con = new PIXI.UI.Container("100%", "100%")
  }

  update (framesPassed) {}
  resize (screenWidth, screenHeight) {}
}
