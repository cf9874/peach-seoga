import Manager from "../scenes/Manager.js"
import {
  checkTexture,
  circleStrokeTexture,
  circleTexture,
  hexagonStrokeTexture,
  hexagonTexture,
  leftTexture,
  recStrokeTexture,
  recTexture,
  rightTexture,
  starStrokeTexture,
  starTexture,
  triangleStrokeTexture,
  triangleTexture,
  twoTexture,
} from "./brush.js"

/* 
webpaintcon에서 마우스 클릭한 상태로 움직일때 실행되는 이벤트들
*/
export default class PaintEvents {
  set penThickness (num) {
    this._penThickness = num
  }

  set fontSize (num) {
    this._fontSize = num
  }

  set alpha (num) {
    this._alpha = num
  }

  set color (num) {
    this._color = num
  }

  set setstartPos (object) {
    this.startPos = object
  }

  get tiMinWidth() {return this._fontSize * 6; }
  get tiMinHeight() {return this._fontSize + 10; }

  constructor (con, tCon, inputCon, graphics) {
    this.penPaths = []
    this.con = con
    this.inputCon = inputCon
    this.tCon = tCon
    this.graphics = Manager.paint.stage.addChild(graphics)
    this.preparePen()
    this.prepareText()
    this.prepareHl()
    this.prepareShape()
    this.prepareEraser()
    this.prepareSelect()

    // this.tiMinWidth = this._fontSize * 6;
    // this.tiMinHeight =  this._fontSize + 10;

  }

  preparePen () {
    let graphics = this.graphics
    this.polypath = []
    this.reversPath = []

    this.penEvent = e => {
      if (document.dragging) {
        if (e.offsetX < graphics.minX) {
          graphics.minX = e.offsetX
        }
        if (e.offsetY < graphics.minY) {
          graphics.minY = e.offsetY
        }

        let radian = Math.abs((90 * Math.PI) / 180 - Math.atan2(e.movementY, e.movementX))
        let x = Math.cos(radian) * (e.offsetX + this._penThickness / 2) - Math.sin(radian) * e.offsetY
        let y = Math.sin(radian) * (e.offsetX + this._penThickness / 2) + Math.sin(radian) * e.offsetY
        if (this.reversPath.length === 0) {
          this.reversPath.push(e.offsetX)
          this.reversPath.push(e.offsetY)
        } else {
          this.reversPath.push(x)
          this.reversPath.push(y)
        }
        this.penPaths.push({ offsetX: e.offsetX, offsetY: e.offsetY })
        this.polypath.push(e.offsetX)
        this.polypath.push(e.offsetY)
        this.graphics.clear()
        this.graphics.lineStyle({
          width: this._penThickness,
          color: this._color,
          alpha: this._alpha,
          join: "round",
          cap: "round",
        })
        this.graphics.moveTo(this.startPos.offsetX, this.startPos.offsetY)
        this.penPaths.forEach(e => {
          this.graphics.lineTo(e.offsetX, e.offsetY)
        })
      }
    }
  }

  prepareText () {
    this.textMap = new Map();
    this.tMap = new Map();

    
    let paint_canvas = document.getElementById("paint_canvas")
    
    
    this.isBlur;
    this.textEvent = (e, number) => {
      let placeholder = ""
      let t = new PIXI.UI.Text("", {
        fontSize: this._fontSize,
        fill: this._color,
        fontfamily: "Noto Sans KR",
        
      })


      t.visible = false
      this.text = new PIXI.UI.TextInput({
        background: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        value: placeholder,
        style: {
          fontSize: this._fontSize,
          fill: this._color,
          fontfamily: "Noto Sans KR",
        },
        lineHeight: this._fontSize,
        width: this.tiMinWidth,
        height: this.tiMinHeight,
      })

      this.text.container.zIndex = number
      this.text.container._lastSortedIndex = number
 

      // console.log("@@@@!!!!text:",this.text)
      

      this.tMap.set(this.text.container.zIndex, t);
      this.textMap.set(this.text.container.zIndex, this.text)
    
      
      if (this._color === 16777215) text.background.tint = 0x000000
      this.text.x = t.x = e.offsetX
      this.text.y = t.y = e.offsetY
      this.text.on("change", () => {
        
        this.text.width = Math.max(this.tiMinWidth, this.text.textContainer.innerContainer.width);
        this.text.height = Math.max(this.tiMinHeight, this.text.textContainer.innerContainer.height);
      })
     
      this.text.on("focus", () => {
        if (this.text.value === placeholder) {
          this.text.value = ""
          this.text.alpha = 1    
        }
      })
      this.text.on("blur", () => {
        this.isBlur = true;
        if (this.text.value === "" || this.text.value === placeholder) {
          this.tCon.removeChild(this.tMap.get(this.text.container.zIndex-1))
        }
        this.inputCon.removeChild(this.textMap.get(this.text.container.zIndex-1))
        t.text = this.text.text
        t.visible = true
        paint_canvas.style.cursor = "default"
      })


     //빈 곳을 클릭하면 이전에 생성했던 글상자 사라지는 이벤트 등록
      paint_canvas.addEventListener("mousedown", this.onTextBoxEvent(this.text,placeholder))

      this.inputCon.addChild(this.textMap.get(this.text.container.zIndex))
      this.tCon.addChild(this.tMap.get(this.text.container.zIndex))
      // console.log('zindex : ', this.text.container.zIndex);
      // console.log("inputCon:", this.inputCon.children)
      // console.log("tCon:", this.tCon.children)
     

      //생성시 바로 포커스 
      setTimeout(() => {
        this.text.focus();
        document.getElementById("_pui_tempInput").focus()
      }, 20);


      return t
    }
  }

  onTextBoxEvent(text,placeholder) {
    if(this.isBlur) {
      this.isBlur=false;
      return
    }   
    if(text.value === "" || text.value === placeholder) {
      // console.log("onmousesdown 들어왔음@@@@")
      this.tCon.removeChild(this.tMap.get(text.container.zIndex-1))
    } 
    this.inputCon.removeChild(this.textMap.get(text.container.zIndex-1))
    
  }

  prepareHl () {
    let graphics = this.graphics
    this.hlEvent = e => {
      if (document.dragging) {
        if (e.offsetX < graphics.minX) {
          graphics.minX = e.offsetX
        }
        if (e.offsetY < graphics.minY) {
          graphics.minY = e.offsetY
        }

        this.penPaths.push({ offsetX: e.offsetX, offsetY: e.offsetY })
        this.polypath.push(e.offsetX)
        this.polypath.push(e.offsetY)
        this.graphics.clear()
        this.graphics.lineStyle({
          width: this._penThickness,
          color: this._color,
          alpha: this._alpha * 0.8,
          join: "miter",
          cap: "miter",
        })
        this.graphics.moveTo(this.startPos.offsetX, this.startPos.offsetY)
        this.penPaths.forEach(e => {
          this.graphics.lineTo(e.offsetX, e.offsetY)
        })
      }
    }
  }

  prepareShape () {
    let size = Manager.paint.renderer.width / 4
    let strokeRec = recStrokeTexture(size, size, Manager.paint)
    let strokeCir = circleStrokeTexture(size, Manager.paint)
    let strokeTri = triangleStrokeTexture(size, size, Manager.paint)
    let strokehex = hexagonStrokeTexture(size, Manager.paint)
    let strokeStar = starStrokeTexture(size, Manager.paint)
    let rec = recTexture(size, size, Manager.paint)
    let cir = circleTexture(size, Manager.paint)
    let tri = triangleTexture(size, size, Manager.paint)
    let hex = hexagonTexture(size, Manager.paint)
    let star = starTexture(size, Manager.paint)
    let left = leftTexture(size, size, Manager.paint)
    let right = rightTexture(size, size, Manager.paint)
    let two = twoTexture(size, size, Manager.paint)
    let check = checkTexture(size, size, Manager.paint)
    this.shapeSprite = new PIXI.UI.Sprite(rec)
    this.shapeEvent = e => {
      if (document.dragging) {
        this.shapeSprite.alpha = this._alpha
        this.shapeSprite.x = this.startPos.offsetX
        this.shapeSprite.y = this.startPos.offsetY
        let dx = this.startPos.offsetX - e.offsetX
        let dy = this.startPos.offsetY - e.offsetY
        let width = Math.abs(dx)
        let height = Math.abs(dy)
        this.shapeSprite.width = width
        this.shapeSprite.height = height
        this.shapeSprite.tint = this._color
        this.shapeSprite.rotation = 0

        if (dx >= 0) this.shapeSprite.pivotX = 1
        else this.shapeSprite.pivotX = 0
        if (dy >= 0) this.shapeSprite.pivotY = 1
        else this.shapeSprite.pivotY = 0
        switch (this.shape) {
          case "strokeRec":
            this.shapeSprite.sprite.texture = strokeRec
            break
          case "strokeCir":
            this.shapeSprite.sprite.texture = strokeCir
            break
          case "strokeTri":
            this.shapeSprite.sprite.texture = strokeTri
            break
          case "strokehex":
            this.shapeSprite.sprite.texture = strokehex
            break
          case "strokestar":
            this.shapeSprite.sprite.texture = strokeStar
            break
          case "rec":
            this.shapeSprite.sprite.texture = rec
            break
          case "cir":
            this.shapeSprite.sprite.texture = cir
            break
          case "tri":
            this.shapeSprite.sprite.texture = tri
            break
          case "hex":
            this.shapeSprite.sprite.texture = hex
            break
          case "star":
            this.shapeSprite.sprite.texture = star
            break
          case "left":
            this.shapeSprite.sprite.texture = left
            break
          case "right":
            this.shapeSprite.sprite.texture = right
            break
          case "check":
            this.shapeSprite.sprite.texture = check
            break
          case "two":
            // if (this.shapeSprite.height < 50) this.shapeSprite.height = 50
            // else {
            //   if (dx > 0 && dy > 0) this.shapeSprite.pivot = 0
            //   else if (dx > 0 && dy < 0) {
            //     this.shapeSprite.pivotX = 0
            //     this.shapeSprite.pivotY = 1
            //   }
            //   var rad = Math.atan2(e.offsetY - this.startPos.offsetY, e.offsetX - this.startPos.offsetX)
            //   this.shapeSprite.rotation = rad
            //   console.log(rad)
            // }
            this.shapeSprite.sprite.texture = two
            break
        }
        this.con.addChild(this.shapeSprite)
      }
    }
  }

  prepareEraser () {
    this.eraserEvent = () => {
      if (document.dragging) document.removing = true
    }
  }

  prepareSelect () {
    this.selectEvent = () => {}
  }
}
