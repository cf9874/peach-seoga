import Manager from "../scenes/Manager.js"
import * as Enum from "../Enum/index.js"
import GraphicsSprite, { LineSprte } from "../UI/graphicSprite.js"
import ButtonHandler from "../UI/Button.js"
import Slider from "../UI/slide.js"
import PaintEvents from "../UI/paintEvents.js"

/* 
사용자 페이지의 판서 컨테이너
*/
export default class WebPaintCon extends PIXI.UI.Container {
  constructor (page, nowPage, LeftBtn, RightBtn) {
    const ratioY = Manager.ratioY
    super("100%", 925 * ratioY)
    this.inputCon = new PIXI.UI.Container("100%", "100%")
    this.con = new PIXI.UI.Container("100%", "100%")
    this.tCon = new PIXI.UI.Container("100%", "100%")
    this.con.container.sortableChildren = true
    this.tCon.container.sortableChildren = true
    Manager.paintStage.addChild(this.con, this.tCon, this.inputCon)
    this.graphic = new PIXI.Graphics()
    this.events = new PaintEvents(this.con, this.tCon, this.inputCon, this.graphic)

    //페이지별 판서 저장할 배열
    Manager.paintArr = [];

    // console.log("page, nowPage :",page, nowPage)
    this.nowPage = nowPage
    this.page = page
    this.prevPage = this.nowPage - 2
    this.nextPage = this.nowPage + 2
    
    this.LeftBtn = LeftBtn
    this.RightBtn = RightBtn

    this.sectionColor()
    this.sectionText()
    this.sectionDraw()
    this.sectionButtonEct()
    this.eventHandler()

  }



  updateIndex (num) {
    this.nowPage = num
    this.prevPage = num - 2
    this.nextPage = num + 2
  }

  //이미지와 텍스트 둘 다 있는 버튼 생성
  makeBtn (img, text, name, width, height, left, w) {
    const ratioX = Manager.ratioX
    let button = new ButtonHandler({
      width: width,
      height: height,
      line: 1.5,
      lineColor: Enum.color.button,
      rounded: 5,
      img,
    })
    button.addText({ text, style: Enum.fontstyle.Black15_R, name })
    button[name].verticalAlign = "middle"
    button[name].anchorLeft = left * ratioX
    button.button.horizontalAlign = "center"
   if(img.url){
    button[img.url].anchorLeft = 35 * ratioX
    button[img.url].verticalAlign = "middle"

    button[img.url].width *= ratioX
    button[img.url].height *= ratioX
   }

    button.onClick(() => {
      this.selected = button
      this.tooltip.visible = false
      this.buttonArray.map(btn => {
        if (btn === button) button.backgroundColor = Enum.color.button
        else btn.backgroundColor = Enum.color.white
      })
    })

    return button
  }

  //아이콘만 있는 버튼 생성
  makeIconButton (img) {
    const ratioX = Manager.ratioX
    let button = new ButtonHandler({
      width: 56 * ratioX,
      height: 56 * ratioX,
      line: 1.5,
      lineColor: Enum.color.button,
      rounded: 5,
      img,
    })
    button[img.url].horizontalAlign = "center"
    button[img.url].verticalAlign = "middle"

    button[img.url].width *= ratioX
    button[img.url].height *= ratioX
    button.onClick(() => {
      this.tooltip.visible = false
      this.buttonArray.map(btn => {
        if (btn === button) button.backgroundColor = Enum.color.button
        else btn.backgroundColor = Enum.color.white
      })
      this.selected = button
    })
    return button
  }

  //모양 버튼 생성
  makeShapeButton (texture, width, height, x, y, shape) {
    const ratioX = Manager.ratioX
    let button = new ButtonHandler({
      width: 30 * ratioX,
      height: 30 * ratioX,
      line: 1.5,
      lineColor: Enum.color.button,
      rounded: 5,
    })
    button.pos(x, y)
    let img = new PIXI.UI.Sprite(texture)
    img.width = width
    img.height = height
    img.horizontalAlign = "center"
    img.verticalAlign = "middle"
    button.button.addChild(img)
    button.onClick(() => {
      this.shapesArray.map(btn => {
        if (btn === button) button.backgroundColor = Enum.color.button
        else btn.backgroundColor = Enum.color.white
      })
      this.shape = shape
    })
    return button
  }

  //그리기 영역 ui
  sectionDraw () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    let background = new LineSprte(199 * ratioX, 142 * ratioY, Enum.color.lightGray)
    background.anchorLeft = 1 * ratioX
    background.anchorTop = 60 * ratioY
    let shapes_tooltipt = new PIXI.Texture.from("shapes_tooltip"),
      tooltip = new PIXI.UI.Sprite(shapes_tooltipt)
    tooltip.width = 179 * ratioX
    tooltip.height = 175 * ratioY
    tooltip.horizontalAlign = "center"
    tooltip.anchorTop = 185 * ratioY
    this.tooltip = tooltip
    let size = 30 * ratioX
    let strokeRec = this.makeShapeButton(
      new PIXI.Texture.from("rec_stroke"),
      17 * ratioX,
      17 * ratioX,
      7 * ratioX,
      20 * ratioY,
      "strokeRec",
      0x333333,
    )
    let strokeCir = this.makeShapeButton(
      new PIXI.Texture.from("cir_stroke"),
      17 * ratioX,
      17 * ratioX,
      41 * ratioX,
      20 * ratioY,
      "strokeCir",
      0x333333,
    )
    let strokeTri = this.makeShapeButton(
      new PIXI.Texture.from("tri_stroke"),
      19 * ratioX,
      16 * ratioY,
      75 * ratioX,
      20 * ratioY,
      "strokeTri",
      0x333333,
    )
    let strokehex = this.makeShapeButton(
      new PIXI.Texture.from("hex_stroke_new"),
      17 * ratioX,
      17 * ratioX,
      109 * ratioX,
      20 * ratioY,
      "strokehex",
      0x333333,
    )
    let strokeStar = this.makeShapeButton(
      new PIXI.Texture.from("star_stroke"),
      19 * ratioX,
      19 * ratioX,
      143 * ratioX,
      20 * ratioY,
      "strokestar",
      0x333333,
    )

    let rec = this.makeShapeButton(
      new PIXI.Texture.from("rec"),
      17 * ratioX,
      17 * ratioX,
      7 * ratioX,
      54 * ratioY,
      "rec",
      Enum.color.red,
    )
    let cir = this.makeShapeButton(
      new PIXI.Texture.from("cir"),
      17 * ratioX,
      17 * ratioX,
      41 * ratioX,
      54 * ratioY,
      "cir",
      Enum.color.red,
    )
    let tri = this.makeShapeButton(
      new PIXI.Texture.from("tri"),
      19 * ratioX,
      16 * ratioY,
      75 * ratioX,
      54 * ratioY,
      "tri",
      Enum.color.red,
    )
    let hex = this.makeShapeButton(
      new PIXI.Texture.from("hex"),
      17 * ratioX,
      17 * ratioX,
      109 * ratioX,
      54 * ratioY,
      "hex",
      Enum.color.red,
    )
    let star = this.makeShapeButton(
      new PIXI.Texture.from("star"),
      19 * ratioX,
      19 * ratioX,
      143 * ratioX,
      54 * ratioY,
      "star",
      Enum.color.red,
    )
    let check = this.makeShapeButton(
      new PIXI.Texture.from("check_new"),
      18 * ratioX,
      9 * ratioX,
      7 * ratioX,
      88 * ratioY,


      "check",
      Enum.color.red,
    )
    let right = this.makeShapeButton(
      new PIXI.Texture.from("arrow_right_new"),
      18 * ratioX,
      9 * ratioX,
      41 * ratioX,
      88 * ratioY,


      "right",
      Enum.color.red,
    )
    let left = this.makeShapeButton(
      new PIXI.Texture.from("arrow_left_new"),
      18 * ratioX,
      9 * ratioX,
      75 * ratioX,
      88 * ratioY,


      "left",
      Enum.color.red,
    )
    let two = this.makeShapeButton(
      new PIXI.Texture.from("two_way_arrow_new"),
      19 * ratioX,
      9 * ratioX,
      109 * ratioX,
      88 * ratioY,


      "two",
      Enum.color.red,
    )

    tooltip.visible = false
    tooltip.addChild(
      strokeRec.button,
      strokeCir.button,
      strokeTri.button,
      strokehex.button,
      strokeStar.button,
      rec.button,
      cir.button,
      tri.button,
      hex.button,
      star.button,
      check.button,
      left.button,
      right.button,
      two.button,
    )
    this.shapesArray = [
      strokeRec,
      strokeCir,
      strokeRec,
      strokeTri,
      strokehex,
      strokeStar,
      rec,
      cir,
      tri,
      hex,
      star,
      left,
      right,
      check,
      two,
    ]
    strokeRec.button.emit("click")

    this.penButton = this.makeIconButton({
      url: "pen_icon",
      // width: 36 * ratioX,
      // height: 36 * ratioX,
    })
    this.hlButton = this.makeIconButton({
      url: "hl_icon",
      // width: 36 * ratioX,
      // height: 36 * ratioX,
    })
    this.shapesButton = this.makeIconButton({
      url: "shapes_icon",
      // width: 36 * ratioX,
      // height: 36 * ratioX,
    })

    this.penButton.button.anchorLeft = this.shapesButton.button.anchorRight = 10 * ratioX
    this.hlButton.button.horizontalAlign = "center"
    this.penButton.button.anchorTop = this.hlButton.button.anchorTop = this.shapesButton.button.anchorTop = 122 * ratioY

    let widthText = new PIXI.UI.Text("펜두께", Enum.fontstyle.Black15_R)
    widthText.anchorLeft = 10 * ratioX
    widthText.anchorTop = 215 * ratioY

    let slider = new Slider(0xe95c63, 0xd9d9d9, 170 * ratioX, 6 * ratioX, 10 * ratioX)
    slider.anchorTop = 255 * ratioY
    slider.horizontalAlign = "center"
    slider.value = 12
    this.penSlider = slider
    this.addChild(
      background,
      this.penButton.button,
      this.hlButton.button,
      this.shapesButton.button,
      widthText,
      slider,
      tooltip,
    )
  }

  // 글씨 영역 ui
  sectionText () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.insertBtn = this.makeBtn(
      {
        url: "text_icon",
      },
      "글씨 넣기",
      "inputtext",
      160 * ratioX,
      44 * ratioY,
      60,
      15,
    )
    this.insertBtn.button.anchorTop = 313 * ratioY

    let title = new PIXI.UI.Text("글씨 크기", Enum.fontstyle.Black15_R)
    title.anchorLeft = 10 * ratioX
    title.anchorTop = 380 * ratioY
    let slider = new Slider(0xe95c63, 0xd9d9d9, 170 * ratioX, 6 * ratioX, 10 * ratioX)
    slider.anchorTop = 420 * ratioY
    slider.horizontalAlign = "center"
    slider.value = 12

    this.textSlider = slider
    this.addChild(this.insertBtn.button, slider, title)
  }

  sectionColor () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY

    let title = new PIXI.UI.Text("색상", Enum.fontstyle.Black15_R)
    title.anchorLeft = 10 * ratioX
    title.anchorTop = 483 * ratioY
    let colors = [
      0xffffff,
      0x000000,
      0xe9352e,
      0xe76b86,
      0xfac6cb,
      0xbb63ee,
      0x006fff,
      0x50d518,
      0xffd500,
      0xf79c64,
      // 0xabc261,
      // 0x028e93,
      // 0x006fff,
      // 0x8eacd9,
      // 0x2165a0,
      // 0x6c77c2,
      // 0xb55096,
    ]

    let checkTexture = new PIXI.Texture.from("color")
    let size = 29 * ratioX
    let colorContainer = new PIXI.UI.Container(173 * ratioX, 115 * ratioY)
    let check = new PIXI.UI.Sprite(checkTexture)
    check.width = 12 * ratioX
    check.height = 10 * ratioY
    check.verticalAlign = "middle"
    check.horizontalAlign = "center"
    check.tint = Enum.color.Gray
    colors.forEach((element, idx) => {
      let graphic = new PIXI.Graphics()
      graphic.clear()
      graphic.lineStyle(1.5, 0xbbbbbb, 1, 1, true)
      graphic.beginFill(element)
      graphic.drawRoundedRect(0, 0, size, size, 2)
      graphic.endFill()
      let sp = new GraphicsSprite(graphic)
      sp.sprite.buttonMode = true
      sp.sprite.interactive = true
      sp.x = (idx % 5) * 36 * ratioX
      sp.y = Math.floor(idx / 5) * (6 * ratioY + size)

      sp.sprite.on("click", () => {
        this.selectColor = element
        this.isInput = false
        sp.addChild(check)
      })
      colorContainer.addChild(sp)
      if (idx === 1) {
        this.selectColor = element
        sp.addChild(check)
      }
    })

    colorContainer.anchorTop = 520 * ratioY
    colorContainer.horizontalAlign = "center"

    let alphaText = new PIXI.UI.Text("불투명도 (%)", Enum.fontstyle.Black15_R)
    alphaText.anchorLeft = 10 * ratioX
    alphaText.anchorTop = 630 * ratioY
    let slider = new Slider(0xe95c63, 0xd9d9d9, 170 * ratioX, 6 * ratioX, 10 * ratioX)
    slider.value = 100
    slider.anchorTop = 665 * ratioY
    slider.horizontalAlign = "center"

    this.alphaSlider = slider
    this.addChild(colorContainer, title, slider, alphaText)
  }

  sectionButtonEct () {
    const ratioX = Manager.ratioX
    const ratioY = Manager.ratioY
    this.selectBtn = this.makeBtn(
      {
        url: "",
      },
      "선택",
      "select",
      177 * ratioX,
      44 * ratioY,
      73,
      26,
    )
    this.eraserBtn = this.makeBtn(
      {
        url: "",
      },
      "지우개",
      "eraser",
      177 * ratioX,
      44 * ratioY,
      66,
      22,
    )
    this.trashBtn = this.makeBtn(
      {
        url: "",
      },
      "전체 지우기",
      "trash",
      177 * ratioX,
      44 * ratioY,
      50,
      22,
    )
    this.saveBtn = this.makeBtn(
      {
        url: "",
      },
      "저장하기",
      "save",
      177 * ratioX,
      44 * ratioY,
      58,
      22,
    )

    this.selectBtn.button.anchorTop = 71 * ratioY
    this.eraserBtn.button.anchorBottom = 160 * ratioY
    this.trashBtn.button.anchorBottom = 100 * ratioY
    this.saveBtn.button.anchorBottom = 40 * ratioY

    this.addChild(this.selectBtn.button, this.eraserBtn.button, this.trashBtn.button, this.saveBtn.button)
    this.buttonArray = [
      this.selectBtn,
      this.eraserBtn,
      this.penButton,
      this.hlButton,
      this.shapesButton,
      this.insertBtn,
    ]
  }

  removeTextInput(){
    while (this.inputCon.children[0]) {
      this.inputCon.removeChild(this.inputCon.children[0])
    }
  }

  //판서내용 저장하기
  savePaint(sp) {
    Manager.paintArr.push(sp)
    // console.log("paintArr:",Manager.paintArr)
    // this.saveArr = [...Manager.paintArr]
    // console.log("saveArr:", saveArr)
    
    Manager.paintMap.set(this.nowPage, {con : Manager.paintArr, events : this.events});
    // console.log("paintMap:", Manager.paintMap)

  }
  //판서내용 없애기
  removePaint(){
    while (this.con.children.length) {
        this.con.removeChild(this.con.children[0]);
      }
    while (this.tCon.children.length) { 
        this.tCon.removeChild(this.tCon.children[0]);
      }
    while (this.inputCon.children.length) {
        this.inputCon.removeChild(this.inputCon.children[0]);
      }
}

  //판서내용 불러오기
  setPaint(page) {
  
    for(let i=0; i<Manager.paintArr.length; i++){
      this.con.addChild(Manager.paintMap.get(page).con[i])
    }
    this.events = Manager.paintMap.get(page).events;
    
  }

  //판서가 있는지 판별하기
  checkPaint(page) {
    
    if(Manager.paintMap.has(page)) {
      // console.log("저장0")
      Manager.paintArr = Manager.paintMap.get(page).con
      this.setPaint(page);
      
    } else {
      // console.log("저장X")
      Manager.paintArr = [];
      
    }
  }
 

  //각 버튼 클릭시 발생하는 이벤트 핸들러
  eventHandler () {
    let paint_canvas = document.getElementById("paint_canvas")
    this.moveFunc = null
    document.removing = false
    this.number = 0
    this.isInput = false

    //판서 저장용 map
    Manager.paintMap = new Map()
    

    //페인트 캔버스에 이벤트 붙여주는 함수
    let addevent = () => {
      paint_canvas.addEventListener("mouseup", onDragEnd)
      paint_canvas.addEventListener("mouseout", onDragEnd)
      paint_canvas.addEventListener("mousemove", this.moveFunc)
    }
    // 드레그 시작시
    let onDragStart = e => {
      this.events.shapeSprite.container.zIndex = this.events.shapeSprite.container._lastSortedIndex = this.number
      this.graphic.minX = e.offsetX
      this.graphic.minY = e.offsetY
      this.events.penThickness = this.penSlider.value
      this.events.fontSize = this.textSlider.value
      this.events.alpha = this.alphaSlider.value / 100
      this.events.color = this.selectColor
      this.events.setstartPos = {
        offsetX: e.offsetX,
        offsetY: e.offsetY,
      }
      //선택한 버튼따라 이벤트 다르게 실행되는데  paint event에 자세히 나와있음
      switch (this.selected) {
        case this.penButton:
          paint_canvas.style.cursor = "crosshair"
          document.dragging = true
          addevent()
          break
        case this.hlButton:
          paint_canvas.style.cursor = "crosshair"
          document.dragging = true
          addevent()
          break
        case this.selectBtn:
          document.dragging = true
          document.selecting = true
          break
        case this.insertBtn:
          document.dragging = false
          if(!this.isInput){
            let text = this.events.textEvent(e, this.number)
            this.inputText =this.events.text
            dragableText(text, this.inputText)
            this.isInput = true
            
          } else {
            this.selected =null
            this.insertBtn.backgroundColor = Enum.color.white
          }
          
          break

        case this.shapesButton:
          this.events.shape = this.shape
          document.dragging = true
          addevent()
          break

        case this.eraserBtn:
          document.dragging = true
          document.removing = true
          addevent()

          break

        case this.trashBtn:
          document.dragging = false

          break

        case this.saveBtn:
          document.dragging = false
          break
      }
    }
    let that = this

    function DragStart (event) {
      if (document.selecting) {
        that.number += 1
        this.parent.zIndex = that.number
        this.parent._lastSortedIndex = that.number
        this.data = event.data
        this.dragging = true
      }
    }


    function DragEnd () {
      this.dragging = false
      this.data = null
    }

    function DragMove () {
      if (this.dragging && document.selecting) {
        const newPosition = this.data.getLocalPosition(this.parent)
        this.x = newPosition.x - this.width / 2
        this.y = newPosition.y - this.height / 2
      }
    }

    function onPointerOver () {
      if (document.removing) {
        this.parent.removeChild(this)
      } else if (that.selected === that.eraserBtn) {
        this.alpha = this.savedAlpha * 0.7
      } else if (that.selected === that.selectBtn) {
        this.alpha = this.savedAlpha * 0.7
      }
    }
    function onPointerOut () {
      this.alpha = this.savedAlpha
    }
    function onClick () {
      if (that.selected === that.eraserBtn) {
        this.alpha = this.savedAlpha * 0.7
        this.parent.removeChild(this)
      }
      if (that.selected === that.selectBtn) {
        paint_canvas.style.cursor = "move"
        this.alpha = this.savedAlpha * 0.7
      }
    }

    function onTextClick () {
      if (that.selected === that.eraserBtn) {
        this.alpha = this.savedAlpha * 0.7
        this.pixiUICon.parent.removeChild(this.pixiUICon);
        let idx = Manager.paintArr.indexOf(this.pixiUICon)
        Manager.paintArr.splice(idx,1)
      }
      if (that.selected === that.selectBtn) {
        paint_canvas.style.cursor = "move"
        this.alpha = this.savedAlpha * 0.7
      }
    }


    //이동 가능한 텍스트 스프라이트 생성
    let dragableText = (text, inputText) => {
      this.number += 1
      inputText.interactive = true
      inputText.buttonMode = true
      inputText.container.zIndex = this.number
      inputText.container._lastSortedIndex = this.number
      inputText.container.savedAlpha = 1
      
      text.interactive = true
      text.buttonMode = true
      text.container.zIndex = this.number
      text.container._lastSortedIndex = this.number
      text.container.savedAlpha = 1
      text.container.pixiUICon = text;

      text.container
        .on("mousedown", function (event) {
          if (document.selecting) {
            that.number += 1
            this.zIndex = that.number
            this._lastSortedIndex = that.number
            this.data = event.data
            this.dragging = true
          }
        })
        .on("mouseup", DragEnd)
        .on("mouseupoutside", DragEnd)
        .on("mousemove", function () {
          if (this.dragging && document.selecting) {
            const newPosition = this.data.getLocalPosition(this.parent)
            text.x = newPosition.x - text.width / 2
            text.y = newPosition.y - text.height / 2
          }
        })
        .on("pointerover", onPointerOver)
        .on("pointerout", onPointerOut)
        // .on("click", onClick)
        .on("click", onTextClick)

        this.savePaint(text)
    }

   

    //캔버스에 한획으로 그린 스프라이트
    let canvasSprite = () => {
      let texture = Manager.paint.renderer.generateTexture(this.graphic)
      let sp = new PIXI.UI.Sprite(texture)
      let minX = this.graphic.minX
      let minY = this.graphic.minY
      sp.x = minX - this.penSlider.value / 2
      sp.y = minY - this.penSlider.value / 2
      sp.sprite.savedAlpha = sp.alpha
      sp.sprite.interactive = true
      this.number += 1
      sp.container.zIndex = this.number
      sp.container._lastSortedIndex = this.number
      sp.sprite
        .on("mousedown", DragStart)
        .on("mouseup", DragEnd)
        .on("mouseupoutside", DragEnd)
        .on("mousemove", DragMove)
        .on("pointerover", onPointerOver)
        .on("pointerout", onPointerOut)
        .on("click", onClick)

      this.graphic.clear()
      return sp
    }

    //캔버스에 그린 모양 스프라이트
    let canvasShape = () => {
      let sp = new PIXI.UI.Sprite(this.events.shapeSprite.sprite.texture)
      sp.pivotX = this.events.shapeSprite.pivotX
      sp.pivotY = this.events.shapeSprite.pivotY
      sp.rotation = this.events.shapeSprite.rotation
      sp.x = this.events.shapeSprite.x
      sp.y = this.events.shapeSprite.y
      sp.alpha = this.events.shapeSprite.alpha
      sp.sprite.savedAlpha = sp.alpha
      sp.width = this.events.shapeSprite.width
      sp.height = this.events.shapeSprite.height
      sp.tint = this.events.shapeSprite.tint
      sp.sprite.interactive = true
      this.number += 1
      sp.container.zIndex = this.number
      sp.container._lastSortedIndex = this.number
      sp.sprite
        .on("mousedown", DragStart)
        .on("mouseup", DragEnd)
        .on("mouseout", DragEnd)
        .on("mousemove", DragMove)
        .on("pointerover", onPointerOver)
        .on("pointerout", onPointerOut)
        .on("click", onClick)

      return sp
    }

    let onDragEnd = e => {
      document.dragging = false
      document.removing = false
      document.selecting = false
      switch (this.selected) {
        case this.penButton:
          let sp = canvasSprite()
          this.con.addChild(sp)
          this.events.penPaths = []
          this.events.polypath = []
          this.events.reversPath = []
          
          this.savePaint(sp);

          break
        case this.hlButton:
          let hl = canvasSprite()
          this.con.addChild(hl)
          this.events.penPaths = []
          this.events.polypath = []

          this.savePaint(hl);
          break
        case this.shapesButton:
          let shapeSp = canvasShape()
          this.con.addChild(shapeSp)
          this.con.removeChild(this.events.shapeSprite)

          this.savePaint(shapeSp);
          break
        
          
      }
      paint_canvas.removeEventListener("mouseup", onDragEnd)
      paint_canvas.removeEventListener("mouseout", onDragEnd)
      paint_canvas.removeEventListener("mousemove", this.moveFunc)
      // paint_canvas.removeEventListener("mousedown", this.events.onTextBoxEvent)
    }

    this.penButton.onClick(() => {
      document.selecting = false
      
      paint_canvas.style.cursor = "crosshair"
      this.moveFunc = this.events.penEvent
      // this.removeTextInput()
    })
    this.selectBtn.onClick(() => {
      document.selecting = true
      
      paint_canvas.style.cursor = "move"
      this.moveFunc = this.events.selectEvent
      // this.removeTextInput()
    })
    this.hlButton.onClick(() => {
      document.selecting = false
      
      paint_canvas.style.cursor = "crosshair"
      this.moveFunc = this.events.hlEvent
      // this.removeTextInput()
      
    })
    this.shapesButton.onClick(() => {
      paint_canvas.style.cursor = "crosshair"
      document.selecting = false
      this.tooltip.visible = true
      
      this.moveFunc = this.events.shapeEvent
      // this.removeTextInput()
    })
    this.insertBtn.onClick(() => {
      document.selecting = false
      this.isInput = false
      paint_canvas.style.cursor = "text"
    })
    this.eraserBtn.onClick(() => {
      document.selecting = false
      this.isInput = false
      paint_canvas.style.cursor = "crosshair"
      this.moveFunc = this.events.eraserEvent
      // this.removeTextInput()
    })
    this.saveBtn.onClick(() => {
      // this.removeTextInput()
      document.selecting = false
      
      paint_canvas.style.cursor = "default"
      let canvas = document.getElementById("paint_canvas")
      canvas.style.display = "block"
      Manager.backGroundON()
      Manager.paint.renderer.extract.canvas(Manager.paint.stage).toBlob(b => {
        const a = document.createElement("a")
        document.body.append(a)
        a.download = "peach-bookcases"
        a.href = URL.createObjectURL(b)
        a.click()
        a.remove()
      }, "peach-bookcases/png")
      Manager.backGroundOFF()
    })

    this.trashBtn.onClick(() => {
      while (this.con.children[0]||this.tCon.children[0]||this.inputCon.children[0]) {
        this.con.removeChild(this.con.children[0])
        this.tCon.removeChild(this.tCon.children[0])
        this.inputCon.removeChild(this.inputCon.children[0])
      }
      Manager.paintArr = [];
      Manager.paintMap.delete(this.nowPage);
    })
    
    this.RightBtn.sprite.on('click', ()=> {
      if(Manager.isPaint){
        if(this.nowPage>=this.page) return
        this.nowPage++
        this.removePaint()
        this.checkPaint(this.nowPage)    
      }
    })

    this.LeftBtn.sprite.on('click', ()=> {
      if(Manager.isPaint){
        if(this.nowPage <= 1) return
        this.nowPage--
        this.removePaint()
        this.checkPaint(this.nowPage)
      }
    })

    paint_canvas.addEventListener("mousedown", onDragStart)
  }
}
