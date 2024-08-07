import { download_zip, get_storyDetail, get_storyHidden, get_hiddenStoryDetail, download_zip_hidden } from "../DC/api"
import Data from "../DC"
import JSZip from "jszip"
import Web from "./web"

import * as PixiUtil from '../utils/PixiUtil';


export default function client ( story_no = 0, hidden = false) {

  let thumb_uuid = null

  if(!hidden){
    get_storyDetail(story_no, response => {
      
      if(response.message == "login required") {
         console.log("로그인이 필요해");
         makePopup();         
      } else if (response.message == "subscription required") {
        console.log("구독권한이 없음");

        //구독 권한 없을 때 팝업 띄우기  
        makePopup();  
      }
      thumb_uuid = response.data.story.thumb_title_uuid
      // console.log("response", response.data.story)
      // console.log("suggest", response.data.story.thumb_suggest_uuid)
      // console.log("title", response.data.story.thumb_title_uuid)
      // console.log(thumb_uuid)
      if (response.code === 0) {
        Data.isHidden = hidden
      }
      // console.log("@@@@@@",response);

      download_zip(story_no, response => {
        let zipInst = null
        let file = response
        // console.log(response);
        // console.log("file", file)
        var S3_URL_PUB = document.getElementById("peach-bundle").getAttribute("data-s3-url-pub")
        if (file) {
          Data.story_num = story_no
          //let t = new PIXI.Texture.from(S3_URL_PUB + "/" + thumb_uuid)
          //Data.thumb_url = S3_URL_PUB + "/" + thumb_uuid
          let t = PixiUtil.Texture.from(S3_URL_PUB + "/" + thumb_uuid)
          //console.log(`>>>>>>>>>> ${S3_URL_PUB}/${thumb_uuid}`)
          Data.thumb_texture = t
          //console.log(Data.thumb_texture)
          var reader = new FileReader()
          reader.onload = function (evt) {
            JSZip.loadAsync(evt.target.result).then(function (zip) {
              zipInst = zip
              showfilelist(zipInst)
            })
          }
          reader.onerror = function (evt) {
            alert("파일을 열 수 없음", evt)
          }
          reader.readAsArrayBuffer(file)
        } else {
          alert("파일이 없습니다")
        }
      })
    })

  }
  else {
    get_hiddenStoryDetail(story_no, response => {
      
      if(response.code === 10000) {
        // console.log("스토리가 없다")
        makePopup();
      }

      if (response.code === 0) {
        thumb_uuid = response.data.story.thumb_title_uuid
        Data.isHidden = hidden
        // console.log("@@@@@@",response);
      }
    })

    download_zip_hidden(story_no, response => {
      console.log("download_zip_hidden", response)
      let zipInst = null
      let file = response
      console.log("file", file)
      var S3_URL_PUB = document.getElementById("peach-bundle").getAttribute("data-s3-url-pub")
      if (file) {
        Data.story_num = story_no
        //let t = new PIXI.Texture.from(S3_URL_PUB + "/" + thumb_uuid)
        //Data.thumb_url = S3_URL_PUB + "/" + thumb_uuid
        let t = PixiUtil.Texture.from(S3_URL_PUB + "/" + thumb_uuid)
        Data.thumb_texture = t
        //console.log(Data.thumb_texture)
        var reader = new FileReader()
        reader.onload = function (evt) {
          JSZip.loadAsync(evt.target.result).then(function (zip) {
            zipInst = zip
            showfilelist(zipInst)
          })
        }
        reader.onerror = function (evt) {
          alert("파일을 열 수 없음", evt)
        }
        reader.readAsArrayBuffer(file)
      } else {
        alert("파일이 없습니다")
      }
    })
  }
  
  function makePopup() {
    
    // let errPopup = new ErrorPopUp();
    //     errPopup;
    alert("잘못된 접근입니다.")

  }
  
  function showfilelist (zip) {
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
              let typedarray = new Uint8Array(res)
              new Web(typedarray)
            })
          })
      } else {
        // console.log("나는 세팅파일", relativePath, entry)
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
