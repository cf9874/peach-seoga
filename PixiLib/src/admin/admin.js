import Data from "../DC"
import webAdmin from "./webAdmin"
/*
 관리자페이지 등록(저작도구)
 여기서 부터 시작함
 */
export default function admin (navigateFunc) {
  document.querySelector("#pdf_upload").addEventListener("change", function (e) {
    var pdffile = e.target.files[0]
    if (pdffile.type != "application/pdf") {
      console.error(pdffile.name, "is not a pdf file.")
      return
    }
    //세팅파일로 사용할 데이터 초기화
    Data.initialize()
    Data.pdf = pdffile
    // 관리자가 제목에 #을 넣으면 #앞을 제목, 제목을 포함한 나머지를 태그로 사용함
    const tag = pdffile.name.replace(/(.pdf|.jpg|.jpeg|.gif)$/, "")
    const words = tag.split("#")
    Data.story_tag = tag
    Data.title = words[0]
    //스토리뷰어 등록인지, 수정인지 구분
    Data.isFirst = true

    var fileReader = new FileReader()

    fileReader.onload = function () {
      navigateFunc() //next.js 에서 저작도구 페이지로 네비게이션하는 함수 받아서 호출
      var typedarray = new Uint8Array(this.result) //uint8array로 변경해줘야 pdf.js에서 사용가능함
      new webAdmin(typedarray, 0)
    }

    fileReader.readAsArrayBuffer(pdffile)
  })
}
