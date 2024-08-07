import Data from "../DC/data.js"
import Manager from "../scenes/Manager.js"

/* 
pdf 뷰어 클래스
pdfDoc 혹은 pdfjsLib 사용하는 함수들은 pdf.js 코드임 
https://pdfjs.express/documentation 참고
*/
export default class Viewer {
  constructor (_url, callFunc, RightBtn, LeftBtn, thumbW, thumbH) {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let url = _url
    let pdfjsLib = window["pdfjs-dist/build/pdf"]
    let thumbArr = []
    let pdfDoc = null,
      pageNum = 1,
      scale,
      pageRendering = false,
      pageNumPending = null,
      canvas = document.getElementById("view-canvas"),
      ctx = canvas.getContext("2d"),
      pageInput = document.getElementById("page_input")

     const that = this
     

    function renderPage (num, callback) {
      Manager.pageNum = num
      pageRendering = true
      pdfDoc.getPage(num).then(function (page) {
        scale = Math.min((Data.viewWidth * ratioX) / page.view[2], (Data.viewHeight * ratioY) / page.view[3])

        let viewport = page.getViewport({ scale: scale })
        canvas.height = viewport.height
        canvas.width = viewport.width
        let renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        }
        let renderTask = page.render(renderContext)

        renderTask.promise.then(function () {
          pageRendering = false
          if (pageNumPending !== null) {
            renderPage(pageNumPending)
            pageNumPending = null
          }
        })

        if (callback) {
          if (callback == callFunc.const) {
            callback(pdfDoc.numPages, num)
          } else {
            callback(num)
          }
        }
      })

      //현재페이지
      pageInput.textContent = num
      // console.log("pageInput:", pageInput)
    }

    this.getPageNum = ()=>{
      return pageNum
    }
    // 미리보기와 관리자페이지 왔다갔다 할때 사용함
    this.changeScalePage = callback => {
      if (pageRendering) {
        pageNumPending = pageNum
      } else {
        renderPage(pageNum, callback)
      }
    }

    //음성파일이 시작하는페이지로 이동할때 사용함
    this.acessQueue = num => {
      pageNum = num;
      that.queueRenderPage(num);
      
    }

    //페이지 이동시 사용하는 기본 함수
    this.queueRenderPage = (num) =>{
      if (pageRendering) {
        pageNumPending = num
      } else {
        renderPage(num, callFunc.update)
      }
    }

    //이전 버튼 클릭시
    function onPrevPage () {

      if (pageNum <= 1) {
        return
      }
      pageNum--
      that.queueRenderPage(pageNum)
      // console.log(pageNum)
    }
    LeftBtn.sprite.on("click", onPrevPage)

    //다음 버튼 클릭시
    function onNextPage () {
      if (pageNum >= pdfDoc.numPages) {
        alert("마지막 페이지입니다.", "#E95C63")
        return
      }
      pageNum++
      that.queueRenderPage(pageNum)
      // console.log(pageNum)
    }
    RightBtn.sprite.on("click", onNextPage)

    function goIndex (num) {
      pageNum = num
      that.queueRenderPage(pageNum)
    }

    //사용자페이지의 전체페이지 보기나 , 관리자페이지의 모아보기시 사용하는 썸네일생성
    function makeThumb (page) {
      var vp = page.getViewport({ scale: 1 })
      var canvas = document.createElement("canvas")
      canvas.width = thumbW * ratioX
      canvas.height = thumbH * ratioY
      var scale = Math.max(canvas.width / vp.width, canvas.height / vp.height)
      // console.warn(page);
      // console.log("!!!!!!page:",page)
      return page
        .render({
          canvasContext: canvas.getContext("2d"),
          viewport: page.getViewport({ scale: scale }),
        })
        .promise.then(function () {
          return canvas
        })
    }

    pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
      pdfDoc = pdfDoc_
      //전체페이지
      renderPage(pageNum, callFunc.const)
      var _t_em_p = new Map();
      var pages = []
      while (pages.length < pdfDoc.numPages) pages.push(pages.length + 1)
      return Promise.all(
        pages.map(function (num) {

          // create a div for each page and build a small canvas for it
          return pdfDoc
            .getPage(num)
            .then(makeThumb)
            .then(function (canvas) {

              _t_em_p.set(num, canvas)

              //thumbArr.push(canvas)
              //if (thumbArr.length == pdfDoc.numPages) {
                if (_t_em_p.size == pdfDoc.numPages) {

                  for (let i = 1; i <= pdfDoc.numPages; ++i) {
                    thumbArr.push(_t_em_p.get(i))
                  }

                callFunc.thumb(thumbArr, goIndex)
              }
            })
        }),
      )
    })
  }
}
