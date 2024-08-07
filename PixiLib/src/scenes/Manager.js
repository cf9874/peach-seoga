// require("@electron/remote/main").initialize();
// const remote = window.require("@electron/remote");
import * as Enum from "../Enum/index.js"

const ipcRenderer = window.require? window.require("electron").ipcRenderer : null


let _width
let _height
let _ratioX
let _ratioY
let _app
let _paintStage
let _paint
let _background
let _uiStage
let _errorStage
let _currentScene
let _paint_canvas
let _view_canvas
let _printable_attribute
let _pixi_canvas
let _isPrev
let _isGather
let _isPaint
let _isCard
let _isAudio
let _isBookmark
let _isQ
let _isMenuHover
let _userName
let _errApp
let _paintMap
let _paintArr
let _isFull = false

/* 
Manager
1.모든 Dom elemnet의 생성은 manager에서 한다. (프린트와 판서 역시 canvas를 생성하고 append하기에 Manger가 관리한다.)
2. Scene을 관리하는 클래스
PIXI Application을 생성하기 때문에 비율(ratio), 화면크기(width,height) ..들은 매니저 클래스를 통해
get한다.
*/
export default class Manager {
  constructor () {}
  static set width (object) {
    _width = object
  }

  static set isPrev (bool) {
    _isPrev = bool
  }

  static set isGather (bool) {
    _isGather = bool
  }

  static set isPaint (bool) {
    _isPaint = bool
  }

  static set isCard (bool) {
    _isCard = bool
  }
  static set isAudio (bool) {
    _isAudio = bool
  }
  static set isBookmark (bool) {
    _isBookmark = bool
  }
  static set isQ (bool) {
    _isQ = bool
  }

  static set userName (s) {
    _userName = s
  }

  static set height (object) {
    _height = object
  }

  static set paintMap (object) {
    _paintMap = object
  }

  static set paintArr (array) {
    _paintArr = array
  }
  
  static set isMenuHover(bool) {
    _isMenuHover = bool
  }

  static set isFull(bool=false) {
    _isFull = bool
  }
  
  static get isFull () {
    return _isFull
  }

  static get isMenuHover () {
    return _isMenuHover
  }

  static get paintArr () {
    return _paintArr
  }

  static get paintMap () {
    return _paintMap
  }

  static get isQ () {
    return _isQ
  }

  static get isCard () {
    return _isCard
  }
  static get isAudio () {
    return _isAudio
  }
  static get isBookmark () {
    return _isBookmark
  }
  static get isPrev () {
    return _isPrev
  }

  static get isGather () {
    return _isGather
  }

  static get isPaint () {
    return _isPaint
  }

  static get width () {
    return _width
  }

  static get height () {
    return _height
  }

  static get background () {
    return _background
  }

  static get uiStage () {
    return _uiStage
  }

  static get errorStage () {
    return _errorStage
  }

  static get currentScene () {
    return _currentScene
  }

  static get height () {
    return _height
  }

  static get ratioX () {
    return _ratioX
  }
  static get ratioY () {
    return _ratioY
  }

  static get app () {
    return _app
  }

  static get errApp () {
    return _errApp
  }

  static get paintStage () {
    return _paintStage
  }

  static get paint () {
    return _paint
  }



  static backGroundOFF () {
    _background.visible = false
  }
  static backGroundON () {
    _background.visible = true
  }

  //window.print 대신해서 사용
  static print (option ) {
    const { copies, isColor, isWhole } = option
    const gatsby = document.getElementById("___gatsby");
    let wrapper = document.getElementById("canvas_wraper")
    let printable_attribute = document.getElementById("printable")
    let pixiCanvas = document.getElementById("pixi_canvas")
    
    const pages = printable_attribute.children
    const pageNum = Manager.currentScene.viewer.getPageNum() -1

    if(!isWhole){      
      for (let index = 0; index < pages.length; index++) {
        if(index !== pageNum) pages[index].style.display = "none"    
      }
    }
    printable_attribute.style.display = "block"

    if (gatsby) {
      gatsby.style.display = "none"
    }
    wrapper.style.display = "block"

    _view_canvas.style.display = 'none'
    pixiCanvas.style.display = "none"
    window.onafterprint = this.afterPrint;

    if(ipcRenderer) ipcRenderer.send('print', `${copies},${isColor}`)

    if (gatsby) {
      gatsby.style.display = "block"
    }

    wrapper.style.display = "block"

    // printable_attribute.style.display = "none"
    // _view_canvas.style.display = 'block'
    // pixiCanvas.style.display = "block"
    
    ipcRenderer.on('result',(event,res)=>{
      console.log("print result : ", res);
     if(res === "fail"){        
        printable_attribute.style.display = "none"
        _view_canvas.style.display = 'block'
        pixiCanvas.style.display = "block"
      }
    })

  }

  // paint 용 Application은 따로 사용
  static paintApp () {
    _paint_canvas.width = _view_canvas.width
    _paint_canvas.height = _view_canvas.height
    _paint_canvas.style.marginLeft = _view_canvas.style.marginLeft
    _paint_canvas.style.marginTop = _view_canvas.style.marginTop

    _paint = new PIXI.Application({
      resolution: 1,
      width: _view_canvas.width,
      height: _view_canvas.height,
      antialias: true,
      view: _paint_canvas,
      transparent: true,
    })

    _paintStage = new PIXI.UI.Stage(_paint.screen.width, _paint.screen.height)
    let t = PIXI.Texture.WHITE
    _background = new PIXI.Sprite.from(t)
    _background.width = _paint.screen.width
    _background.height = _paint.screen.height
    Manager.backGroundOFF()
    _paint.stage.addChild(_background)
    _paint.stage.addChild(_paintStage)
  }

  

  //첫 호출시 불러옴
  static initialize (pdfUrl) {
    window.addEventListener("contextmenu", function (e) {
      e.preventDefault()
    })
    window.addEventListener(
      "keydown",
      function (event) {
     
        if (
          event.keyCode === 80 &&
          (event.ctrlKey || event.metaKey) &&
          !event.altKey &&
          (!event.shiftKey || window.chrome || window.opera)
        ) {
          event.preventDefault()
        }
      },
      true,
    )
    function copyToClipboard() {
      // Create a "hidden" input
      var aux = document.createElement("input");
      // Assign it the value of the specified element
      aux.setAttribute("value", " ");
      // Append it to the body
      document.body.appendChild(aux);
      // Highlight its content
      aux.select();
      // Copy the highlighted text
      document.execCommand("copy");
      // Remove it from the body
      document.body.removeChild(aux);
      // alert("Print screen desabilitado.");
    }
    window.addEventListener("keyup",function(event){
      if(event.key === "PrintScreen"){
        copyToClipboard()
        alert("보안정책에 따라 캡쳐할 수 없습니다.")
      }
    })

    window.addEventListener("focus",function(){
      document.body.style.display="block"
      // document.body.style.backgroundColor="#000000"
    })
    // window.addEventListener("blur", function(){
    //   document.body.style.display="none"
    // })

    _ratioX = Math.floor((_width / 1920) * 10000) / 10000
    _ratioY = Math.floor((_height / 1080) * 10000) / 10000

    let canvas_wraper = document.createElement("div")
    let pageinput = document.createElement("input")
    let speedInput = document.createElement("input")
    pageinput.id = "page_input"
    pageinput.style.display = "none"
    speedInput.id = "speed_input"
    speedInput.style.display = "none"
    canvas_wraper.style.width = "100%"
    canvas_wraper.id = "canvas_wraper"
    canvas_wraper.style.height = "100%"
    canvas_wraper.style.position = "relative"

    _pixi_canvas = document.createElement("canvas")
    _paint_canvas = document.createElement("canvas")
    _view_canvas = document.createElement("canvas")
    _printable_attribute = document.createElement("div")
    _printable_attribute.id = "printable"
    _paint_canvas.style.display = "none"
    _pixi_canvas.id = "pixi_canvas"
    _paint_canvas.id = "paint_canvas"
    _view_canvas.id = "view-canvas"
    _pixi_canvas.style.position = _view_canvas.style.position = _paint_canvas.style.position = "absolute"
    document.body.appendChild(_printable_attribute)
    document.body.appendChild(canvas_wraper)
    canvas_wraper.append(_view_canvas, pageinput, speedInput, _pixi_canvas, _paint_canvas)
    _app = new PIXI.Application({
      resolution: 1,
      width: _width,
      height: _height,
      antialias: true,
      view: _pixi_canvas,
      transparent: true,
    })

    _app.ticker.speed = 1.5
    _app.ticker.add(Manager.update)

    window.addEventListener("resize", Manager.resize)

    _uiStage = new PIXI.UI.Stage(_app.screen.width, _app.screen.height)
    _app.stage.addChild(_uiStage)

    let makeThumb = page => {
      var canvas = document.createElement("canvas")
      canvas.className = "printable-canvas"
      var vp = page.getViewport({ scale: 1 })
      // canvas.width = window.innerWidth
      // canvas.height = window.innerHeight
      // var scale = (canvas.width > canvas.height) ? (canvas.height / vp.height) : (canvas.width / vp.width)

      // var scale = 1;
      // if (vp.width > vp.height) {
      //   canvas.width = 720;
      //   scale = canvas.width / vp.width;
      //   canvas.height = vp.height * scale;
      // } else {
      //   canvas.height = 720;
      //   scale = canvas.height / vp.height;
      //   canvas.width = vp.width * scale;
      // }

      canvas.width = vp.width
      canvas.height = vp.height

      if (canvas.width > canvas.height) {

        canvas.style.width = '95%'

      } else {
        canvas.style.height = '95%'
      }

      var scale = 1

      // canvas.width = window.innerWidth * 0.9;
      // var scale = canvas.width / vp.width;
      // canvas.height = vp.height * scale;
      return page
        .render({
          canvasContext: canvas.getContext("2d"),
          viewport: page.getViewport({ scale: scale }),
        })
        .promise.then(function () {
          let ctx = canvas.getContext("2d")
          ctx.globalAlpha = 0.5
          ctx.font = "24px serif"
          let txt = _userName
          if (txt === undefined) txt = "김다은"
          ctx.fillText(txt, vp.width * scale - 150 , 35)
          ctx.fillText(page._pageIndex + 1 ,1200,850)
          return canvas
        })
    }

    let pdfjsLib = window["pdfjs-dist/build/pdf"]

    pdfjsLib.getDocument(pdfUrl).promise.then( function(pdfDoc_) {
      let pdfDoc = pdfDoc_
      var pages = []
      var _t_e_m_p = new Map()
      while (pages.length < pdfDoc.numPages) pages.push(pages.length + 1)
      return Promise.all(
        pages.map( function(num) {
          return pdfDoc
            .getPage(num)
            .then(makeThumb)
            .then( function(canvas) {
    
              _t_e_m_p.set(num, canvas);

              if (_t_e_m_p.size === pdfDoc.numPages) {

                for (let i = 1; i <= pdfDoc.numPages; ++i) {
                  const c = _t_e_m_p.get(i)
                  const div = document.createElement('div')
                  div.style = 'page-break-before:always'
                  div.style.margin = '0px'
                  div.style.textAlign = 'center'
       
                  document.body.appendChild(div)
                  _printable_attribute.append(div)
                  div.append(c);
                }

                _printable_attribute.style.display = "none"

              }

              // _printable_attribute.append(canvas)
              // _printable_attribute.style.display = "none"
            })
        }),
      )
    })

    //const src = `https://peach-bookcases-pub-qa.s3.ap-northeast-2.amazonaws.com/d577d310548d477b9cfbfc4aeb66b381?timestamp=${new Date().getTime()}`;
    //const src = `https://peach-bookcases-pub-qa.s3.ap-northeast-2.amazonaws.com/aaea247b13fa478099f22a56dae9fb48`;
    //const src = `https://peach-bookcases-pub-qa.s3.ap-northeast-2.amazonaws.com/d577d310548d477b9cfbfc4aeb66b381`;

    //const i = new Image();
    // i.onload = () => { 
    //   console.log("------------------------------");
    //   const t = PIXI.Texture.from(i);
    //   console.log(`texture: ${t}, ${t.width}`);
    // };

    //i.crossOrigin = "anonymous";
    //i.src = src;

    //console.log("=====================================");
    //const t = PIXI.Texture.from("https://peach-bookcases-pub-qa.s3.ap-northeast-2.amazonaws.com/d577d310548d477b9cfbfc4aeb66b381");
    //const s = new PIXI.UI.Sprite(PIXI.Texture.from(i));
    //console.log(s);
  }
  //Scene변경하는 코드
  static changeScene (newScene) {
    if (_currentScene) {
      _uiStage.removeChild(_currentScene.con)
    }
    _currentScene = newScene
    _uiStage.addChild(_currentScene.con)
  }

  static update (framesPassed) {
    if (_currentScene) {
      _currentScene.update(framesPassed)
    }
  }

  static resize () {
    if (_currentScene) {
      // _app.resize(window.innerWidth * devicePixelRatio, window.innerHeight * devicePixelRatio)
      // _uiStage.resize(window.innerWidth * devicePixelRatio, window.innerHeight * devicePixelRatio)
      _currentScene.resize(_width, _height)
    }
  }
  static beforePrint(){
    //프린트 전 설정    
  }
  static afterPrint(){
    //프린트 후 설정
    let printable_attribute = document.getElementById("printable")
    let pixi_canvas = document.getElementById("pixi_canvas")
    const pages = printable_attribute.children
    pixi_canvas.style.display = "block"
    _view_canvas.style.display = "block"

    for (let index = 0; index < pages.length; index++) {
      pages[index].style.display = "block"
     }
    printable_attribute.style.display = "none"


  }
}
