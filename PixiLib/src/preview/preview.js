import { get_story_detail } from "../DC/api"
import JSZip from "jszip"
import Data from "../DC"
import Web from "../client/web"
import Manager from "../scenes/Manager"

/* 
관리자페이지에서 전체 미리보기시 사용
Manager.isPrev = true로 만들어
사용자 페이지에서 일부 버튼 disable함
*/
export default function preview (raw_no, thumb_uuid) {
  let zipInst = null
  var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")
  if (thumb_uuid !== undefined) {
    let t = new PIXI.Texture.from(S3_URL_RAW + "/" + thumb_uuid)
    Data.thumb_texture = t
  }
  get_story_detail(raw_no, response => {
    if (response.code === 0) {
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
            var reader = new FileReader()
            reader.onload = function (evt) {
              JSZip.loadAsync(evt.target.result).then(function (zip) {
                zipInst = zip
                showfilelistpreview(zipInst)
              })
            }
            reader.readAsArrayBuffer(file)
          }
        })
    }
  })
  function showfilelistpreview (zip) {
    zip.forEach(function (relativePath, entry) {
      let pathpoint = relativePath.lastIndexOf(".")
      let filepoint = relativePath.substring(pathpoint + 1, relativePath.length)
      let filetype = filepoint.toLowerCase()
      if (filetype === "pdf") {
        zip
          .file(entry.name)
          .async("blob")
          .then(function (blob) {
            new Response(blob).arrayBuffer().then(res => {
              Manager.isPrev = true
              let typedarray = new Uint8Array(res)
              new Web(typedarray)
            })
          })
      } else {
        console.log("나는 세팅파일", relativePath, entry)
        zip
          .file(entry.name)
          .async("blob")
          .then(function (blob) {
            blob.text().then(text => {
              let data = JSON.parse(text)
              Data.initialize(data)
              Data.title = data.title
            })
          })
      }
    })
  }
}
