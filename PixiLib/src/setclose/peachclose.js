let _func = null
export default class peachClose {
  constructor () {}

  static setCloseFunc (outsideFunc) {
    _func = outsideFunc
  }

  //admin이나 client쪽에서 종료함수 눌렀을때 호출됨
  static closePeachPIXI () {

    // document.body.removeChild(document.getElementById("printable"))
    // document.body.removeChild(document.getElementById("canvas_wraper"))
    PIXI.utils.clearTextureCache()

    //setclose한 함수있으면 실행 아니면 뒤로가기 실행
    if (_func !== null) _func()
    else {

      window.history.back();
    }
  }
}
