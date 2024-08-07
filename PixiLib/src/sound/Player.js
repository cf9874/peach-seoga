import Manager from "../scenes/Manager.js"
import { Howl } from "howler"
let Player = function (
  playlist,
  total,
  audio_progress,
  pauseBtn,
  playBtn,
  duration,
  timer,
  LeftBtn,
  RightBtn,
  nowPage,
  highlighter,
  idxArray,
) {
  //전체 음악리스트
  this.playlist = playlist
  this.index = 0
  // 전체듣기 버튼과 관련된 객체
  this.total = total
  this.audio_progress = audio_progress
  this.pauseBtn = pauseBtn
  this.playBtn = playBtn
  this.duration = duration
  this.timer = timer
  this.RightBtn = RightBtn
  this.LeftBtn = LeftBtn
  this.nowPage = nowPage
  this.highlighter = highlighter
  this.idxArray = idxArray
  this.ended = false
  this.gs = 0

}
//플레이어에 prototype을 정의함

Player.prototype = {
  // 음악 시작
  play: function (go, index) {
    if (index === null || index === undefined) return
    let viewCan = document.getElementById("view-canvas")
    let speedInput = document.getElementById("speed_input").textContent
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw")

    let left = viewCan.style.marginLeft
    let top = viewCan.style.marginTop
    let self = this
    let sound
    let data = self.playlist[index]

    left = parseFloat(left)
    top = parseFloat(top)
    index = typeof index == "number" ? index : self.index
    // console.log("결과 인덱스", index)

    //하이라이트가 있다면
    if (data.endPos) {
      self.highlighter.visible = true
      let x = data.startPos.x * viewCan.width + left
      let y = data.startPos.y * viewCan.height + top
      let w = (data.endPos.x - data.startPos.x) * viewCan.width
      let h = (data.endPos.y - data.startPos.y) * viewCan.height
      self.highlighter.fill.clear()
      self.highlighter.redraw(w, h)
      self.highlighter.position(x, y)
      // console.log("data:",data)
    } else {
      self.highlighter.visible = false
    }

    //이미 howl이 생성된적 있다면 soud를 howl로 세팅함
    if (data.howl) {
      // console.log("index????????:", index)
      sound = data.howl
    } else {
      // 처음 들어왔다면 하울 생성
      sound = data.howl = new Howl({
        src: [S3_URL_RAW + "/" + data.uuid],
        html5: true,
        onplay: function () {
          //음악 재생 됐을때
          requestAnimationFrame(self.step.bind(self))
          self.pauseBtn.visible = true
          self.playBtn.visible = false
          self.ended = false
        },
        onload: function () {
          //로드 중일때
          self.duration.text = self.formatTime(Math.round(sound.duration()))
          // console.log("self.duration.text:", self.duration.text)
        },
        onend: function () {
          //음악이 끝났을때 스토리 마지막이였다면
          if (self.index === self.playlist.length - 1) {
            self.total.flag = false
            self.index = self.idxArray[self.nowPage]
            if (self.index > self.playlist.length - 1) self.index = 0
            self.playBtn.visible = true
            self.pauseBtn.visible = false
            self.highlighter.visible = false
            self.duration.text = self.formatTime(Math.round(sound.duration()))
            //종료 팝업 띄운다.
            Manager.currentScene.con.container.emit("storyEnd")
          } else {
            self.ended = true
            self.skip("next", true)
          }
        },
        onseek: function () {
          requestAnimationFrame(self.step.bind(self))
        },
      })
    }

    //인덱스 지정
    self.index = index

    //플레이 종료후 prev 누름
    if (self.gs === 2) {
      self.gs = 0
      self.RightBtn.sprite.emit("click")
    }

    //음악 바로 틀어야하는지 멈춰야하는지 구분
    if (go) {
      self.speed(speedInput)
      sound.play()
      if (sound.state() === "loaded") {
        self.playBtn.visible = false
        self.pauseBtn.visible = true
      } else {
        self.playBtn.visible = true
        self.pauseBtn.visible = false
      }
    } else {
      self.playBtn.visible = true
      self.pauseBtn.visible = false
      self.highlighter.visible = false
      self.duration.text = self.formatTime(Math.round(sound.duration()))
    }
  },
  pause: function () {
    let self = this

    let sound = self.playlist[self.index].howl

    sound.pause()

    self.playBtn.visible = true
    self.pauseBtn.visible = false
    self.highlighter.go = false
  },

  skip: function (direction, fromEnd = false) {
    let self = this
    console.log("skip@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    let index = 0
    let button = null
    // 인텍스 계산
    if (direction === "prev") {
      button = self.LeftBtn
      index = self.index - 1
      // console.log("@@@@@@@@@@@@index:", index)
      if (index <= 0) index = 0
    } else {
      // console.log("#skip next로 들어옴")
      button = self.RightBtn
      index = self.index + 1

      // console.log("@@@@@@@@@@@@index:", index)
      if (index >= self.playlist.length) {
        return
        index = self.playlist.length - 1
      }
    }
    

    //상황에 맞게 skipto로 전달
    if (self.playlist[index].num === self.nowPage) {
      // console.log("self.playlist[index].num === self.nowPage")
      self.skipTo(index, 3)
    } else {
      if (fromEnd) {
        //스토리 마지막일때
        if (self.total.flag) {
          button.sprite.emit("click")
        } else {
          // console.log("한 페이지 음원 모두 끝남")
          self.skipTo(index, 2)
        }
      } else {
        if (!self.total.flag) {
          // console.log("nowPage", self.nowPage)
          button.sprite.emit("click")
          
        }
      }
    }
  },

  skipTo: function (index, situation) {
    let self = this
    let playing = false
    if (self.playlist[self.index].howl) {
      playing = self.playlist[self.index].howl.playing()
      self.playlist[self.index].howl.stop()
    }

    self.audio_progress.width = 0

    switch (situation) {
      case 1:
        if (self.ended && self.total.flag) playing = true
        if (playing) self.play(true, index)
        else {
          console.log("1111111")
          self.play(false, index)
        }
        break
      case 2:
        self.gs = 1
        // console.log("끝!!!!!!!!!!!!!!")
        self.play(false, index)
        break
      case 3:
        self.play(true, index)
        break
    }
  },
  seek: function (val) {
    // 음성파일 시간을 val에 맞춰서 옮김

    let self = this
    let sound = self.playlist[self.index].howl

    if (sound.playing()) {
      val = sound.seek() + val
      if (val < 0) val = 0
      sound.seek(val)
    }
  },

  step: function () {
    //음성파일 프로그래스 바
    let self = this
    let sound = self.playlist[self.index].howl

    let seek = sound.seek() || 0
    // console.log("seek:", seek)
    self.timer.text = self.formatTime(Math.round(seek))
    let ratio = seek / sound.duration()|| 0
    // console.log("ratio:",ratio)
    self.audio_progress.width = ratio * 100 + "%"
    self.highlighter.startLine(ratio)
    if (sound.playing()) {
      requestAnimationFrame(self.step.bind(self))
    }
  },

  formatTime: function (secs) {
    //분,초 포멧 맞춰서 리턴해줌
    let minutes = Math.floor(secs / 60) || 0
    let seconds = secs - minutes * 60 || 0

    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  },

  speed: function (per) {
    // 배속
    let self = this
    let sound = self.playlist[self.index].howl
    sound.rate(per)
  },

  
}

export default Player
