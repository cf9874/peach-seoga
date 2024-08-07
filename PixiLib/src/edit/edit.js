import { get_story_detail } from "../DC/api"
import JSZip from "jszip"
import Data from "../DC"
import webAdmin from "../admin/webAdmin"

/* 
관리자페이지에서 수정하기시 사용
state를 구분해 저장한다. 
발행일땐 종료를뺀 모든 기능을 disable시키고, 메뉴에 필터도 켜준다.
발행 :0 작성중 : 1 작성완료 : 3  인것만 기억하면 된다. 
0,1,2외의 상태에서 수정 불가능한 상태는 0(발행으로 취급) 수정가능한 상태는 1(수정중으로 취급)
*/
export default function edit (raw_no) {
  let zipInst = null
  var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")
  get_story_detail(raw_no, response => {
    if (response.code === 0) {
      console.log(response.data.storyRaw.status)
      switch (response.data.storyRaw.status) {
        case 0:
          Data.state = 0
          break
        case 1:
          Data.state = 1
          break
        case 2:
          Data.state = 2
          break
        case 6:
          Data.state = 0
          break
        case 7:
          Data.state = 1
          break
        default:
          Data.state = 1
      }
      console.log("스테이트", Data.state)
      Data.isFirst = false
      const story_uuid = response.data.storyRaw.data_uuid
      var myHeaders = new Headers()
      myHeaders.append("pragma", "no-cache")
      myHeaders.append("cache-control", "no-cache")

      var myInit = {
        method: "GET",
        headers: myHeaders,
      }
      fetch(`${S3_URL_RAW}/${story_uuid}`, myInit)
        .then(res => res.blob())
        .then(blob => {
          let file = blob
          if (file) {
            Data.raw_num = raw_no
            var reader = new FileReader()
            reader.onload = function (evt) {
              JSZip.loadAsync(evt.target.result).then(function (zip) {
                zipInst = zip
                showfilelistAdmin(zipInst)
              })
            }
            reader.readAsArrayBuffer(file)
          }
        })
    }
  })
  function showfilelistAdmin (zip) {
    zip.forEach(function (relativePath, entry) {
      let pathpoint = relativePath.lastIndexOf(".")
      let filepoint = relativePath.substring(pathpoint + 1, relativePath.length)
      let filetype = filepoint.toLowerCase()
      if (filetype === "pdf") {
        zip
          .file(entry.name)
          .async("blob")
          .then(function (blob) {
            var pdfFile = new File([blob], relativePath)
            Data.pdf = pdfFile
            new Response(blob).arrayBuffer().then(res => {
              let typedarray = new Uint8Array(res)
              new webAdmin(typedarray)
            })
          })
      } else {
        zip
          .file(entry.name)
          .async("blob")
          .then(function (blob) {
            blob.text().then(text => {
              let data = JSON.parse(text)
              console.log(data)
              Data.initialize(data)
              Data.title = data.title
            })
          })
      }
    })
  }
}
