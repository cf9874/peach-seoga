(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es.object.to-string.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('core-js/modules/es.function.name.js'), require('core-js/modules/es.array.iterator.js'), require('core-js/modules/es.typed-array.uint8-array.js'), require('core-js/modules/es.typed-array.copy-within.js'), require('core-js/modules/es.typed-array.every.js'), require('core-js/modules/es.typed-array.fill.js'), require('core-js/modules/es.typed-array.filter.js'), require('core-js/modules/es.typed-array.find.js'), require('core-js/modules/es.typed-array.find-index.js'), require('core-js/modules/es.typed-array.for-each.js'), require('core-js/modules/es.typed-array.includes.js'), require('core-js/modules/es.typed-array.index-of.js'), require('core-js/modules/es.typed-array.iterator.js'), require('core-js/modules/es.typed-array.join.js'), require('core-js/modules/es.typed-array.last-index-of.js'), require('core-js/modules/es.typed-array.map.js'), require('core-js/modules/es.typed-array.reduce.js'), require('core-js/modules/es.typed-array.reduce-right.js'), require('core-js/modules/es.typed-array.reverse.js'), require('core-js/modules/es.typed-array.set.js'), require('core-js/modules/es.typed-array.slice.js'), require('core-js/modules/es.typed-array.some.js'), require('core-js/modules/es.typed-array.sort.js'), require('core-js/modules/es.typed-array.subarray.js'), require('core-js/modules/es.typed-array.to-locale-string.js'), require('core-js/modules/es.typed-array.to-string.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.split.js'), require('core-js/modules/es.promise.js'), require('core-js/modules/es.map.js'), require('core-js/modules/es.string.iterator.js'), require('core-js/modules/web.dom-collections.iterator.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.object.freeze.js'), require('core-js/modules/es.number.constructor.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.sort.js'), require('core-js/modules/es.array.splice.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.array.fill.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.string.includes.js'), require('core-js/modules/web.url.js'), require('core-js/modules/web.url-search-params.js'), require('core-js/modules/es.array.from.js'), require('core-js/modules/es.set.js'), require('core-js/modules/es.string.anchor.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es.object.to-string.js', 'core-js/modules/web.dom-collections.for-each.js', 'core-js/modules/es.function.name.js', 'core-js/modules/es.array.iterator.js', 'core-js/modules/es.typed-array.uint8-array.js', 'core-js/modules/es.typed-array.copy-within.js', 'core-js/modules/es.typed-array.every.js', 'core-js/modules/es.typed-array.fill.js', 'core-js/modules/es.typed-array.filter.js', 'core-js/modules/es.typed-array.find.js', 'core-js/modules/es.typed-array.find-index.js', 'core-js/modules/es.typed-array.for-each.js', 'core-js/modules/es.typed-array.includes.js', 'core-js/modules/es.typed-array.index-of.js', 'core-js/modules/es.typed-array.iterator.js', 'core-js/modules/es.typed-array.join.js', 'core-js/modules/es.typed-array.last-index-of.js', 'core-js/modules/es.typed-array.map.js', 'core-js/modules/es.typed-array.reduce.js', 'core-js/modules/es.typed-array.reduce-right.js', 'core-js/modules/es.typed-array.reverse.js', 'core-js/modules/es.typed-array.set.js', 'core-js/modules/es.typed-array.slice.js', 'core-js/modules/es.typed-array.some.js', 'core-js/modules/es.typed-array.sort.js', 'core-js/modules/es.typed-array.subarray.js', 'core-js/modules/es.typed-array.to-locale-string.js', 'core-js/modules/es.typed-array.to-string.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.split.js', 'core-js/modules/es.promise.js', 'core-js/modules/es.map.js', 'core-js/modules/es.string.iterator.js', 'core-js/modules/web.dom-collections.iterator.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.object.freeze.js', 'core-js/modules/es.number.constructor.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.sort.js', 'core-js/modules/es.array.splice.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.array.fill.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.string.includes.js', 'core-js/modules/web.url.js', 'core-js/modules/web.url-search-params.js', 'core-js/modules/es.array.from.js', 'core-js/modules/es.set.js', 'core-js/modules/es.string.anchor.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.peach = {}));
})(this, (function (exports) { 'use strict';

  function cal(size) {
    var ratioX = Math.floor(window.innerWidth / 1920 * 10) / 10;

    if (ratioX) {
      if (ratioX < 0.5) {
        size -= 6;
      } else if (ratioX >= 0.5 && ratioX < 0.7) {
        size -= 3;
      } else if (ratioX >= 0.7 && ratioX < 1) {
        size -= 2;
      } else if (ratioX >= 1 && ratioX < 1.5) {
        size += 0;
      } else if (ratioX >= 1.5) {
        size += Math.floor(ratioX / 0.5);
      }
    }

    return size;
  }

  var size10 = cal(10),
      size12 = cal(12),
      size14 = cal(14),
      size15 = cal(15),
      size16 = cal(16),
      size17 = cal(17),
      size18 = cal(18),
      size19 = cal(19),
      size25 = cal(25),
      size30 = cal(30);
  var FontStyle = Object.freeze({
    WhiteTitle: {
      fill: "#ffffff",
      fontSize: size18,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Black12: {
      fill: "#000000",
      fontSize: size12,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    Blue12: {
      fill: "#4183C4",
      fontSize: size12,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    Black14: {
      fill: "#000000",
      fontSize: size14,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    Black14_R: {
      fill: "#000000",
      fontSize: size14,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Black15_R: {
      fill: "#000000",
      fontSize: size15,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    White15_R: {
      fill: "#ffffff",
      fontSize: size15,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Black16: {
      fill: "#000000",
      fontSize: size16,
      fontfamily: "Noto Sans KR",
      fontWeight: "600"
    },
    Black16_R: {
      fill: "#000000",
      fontSize: size16,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Black3_16_R: {
      fill: "#333333",
      fontSize: size16,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Black18_R: {
      fill: "#000000",
      fontSize: size18,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Black17: {
      fill: "#000000",
      fontSize: size17,
      fontfamily: "Noto Sans KR",
      fontWeight: "600"
    },
    Black19: {
      fill: "#000000",
      fontSize: size19,
      fontfamily: "Noto Sans KR",
      fontWeight: "700"
    },
    Black30_R: {
      fill: "#000000",
      fontSize: size30,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Black25_R: {
      fill: "#000000",
      fontSize: size25,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Black17_R: {
      fill: "#000000",
      fontSize: size17,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Red17_R: {
      fill: "#E95C63",
      fontSize: size17,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Red17_M: {
      fill: "#E95C63",
      fontSize: size17,
      fontfamily: "Noto Sans KR",
      fontWeight: "600"
    },
    Red16: {
      fill: "#E95C63",
      fontSize: size16,
      fontfamily: "Noto Sans KR",
      fontWeight: "600"
    },
    Red14_R: {
      fill: "#E95C63",
      fontSize: size14,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Red19_R: {
      fill: "#E95C63",
      fontSize: size19,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Red19_M: {
      fill: "#E95C63",
      fontSize: size19,
      fontfamily: "Noto Sans KR",
      fontWeight: "600"
    },
    Red19: {
      fill: "#E95C63",
      fontSize: size19,
      fontfamily: "Noto Sans KR",
      fontWeight: "700"
    },
    Dark19_M: {
      fill: "#404040",
      fontSize: size19,
      fontfamily: "Noto Sans KR",
      fontWeight: "600"
    },
    Black19_R: {
      fill: "#000000",
      fontSize: size19,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Black16_bold: {
      fill: "#000000",
      fontSize: size16,
      fontfamily: "Noto Sans KR",
      fontWeight: "700"
    },
    Black14_bold: {
      fill: "#000000",
      fontSize: size14,
      fontfamily: "Noto Sans KR",
      fontWeight: "700"
    },
    White14: {
      fill: "#ffffff",
      fontSize: size14,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    White17: {
      fill: "#ffffff",
      fontSize: size17,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    White17_M: {
      fill: "#ffffff",
      fontSize: size17,
      fontfamily: "Noto Sans KR",
      fontWeight: "600"
    },
    White16: {
      fill: "#ffffff",
      fontSize: size16,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    GrayTitle: {
      fill: "#707070",
      fontSize: size16,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Gray12_R: {
      fill: "#7c7c7c",
      fontSize: size12,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    Gray12: {
      fill: "#7c7c7c",
      fontSize: size12,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    Gray14: {
      fill: "#7c7c7c",
      fontSize: size14,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    line16: {
      fill: "#dadada",
      fontSize: size16,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    White12: {
      fill: "#ffffff",
      fontSize: size12,
      fontfamily: "Noto Sans KR",
      fontWeight: "500"
    },
    White12_R: {
      fill: "#ffffff",
      fontSize: size12,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    },
    White10_R: {
      fill: "#ffffff",
      fontSize: size10,
      fontfamily: "Noto Sans KR",
      fontWeight: "400"
    }
  });

  var Color = Object.freeze({
    bgBox: 0xF9F9F9,
    bgBoxBorder: 0xDBDBDB,
    line: 0xDADADA,
    handle: 0xD2D2D2,
    arrow: 0xEAEAEA,
    green: 0x0B4247,
    red: 0xE95C63,
    button: 0xE3E1E1,
    white: 0xFFFFFF,
    Black: 0x000000,
    textGray: 0x7c7c7c,
    lightGray: 0xF1F0F0,
    Gray: 0xD9D9D9,
    vividGray: 0xA7A7A7
  });

  var fontstyle = FontStyle;
  var color = Color;

  var ipcRenderer = window.require ? window.require("electron").ipcRenderer : null;

  var _width;

  var _height;

  var _ratioX;

  var _ratioY;

  var _app;

  var _paintStage;

  var _paint;

  var _background;

  var _uiStage;

  var _errorStage;

  var _currentScene;

  var _paint_canvas;

  var _view_canvas;

  var _printable_attribute;

  var _pixi_canvas;

  var _isPrev;

  var _isGather;

  var _isPaint;

  var _isCard;

  var _isAudio;

  var _isBookmark;

  var _isQ;

  var _isMenuHover;

  var _userName;

  var _errApp;

  var _paintMap;

  var _paintArr;

  var _isFull = false;

  var Manager = function Manager() {};

  var staticAccessors$1 = {
    width: {
      configurable: true
    },
    isPrev: {
      configurable: true
    },
    isGather: {
      configurable: true
    },
    isPaint: {
      configurable: true
    },
    isCard: {
      configurable: true
    },
    isAudio: {
      configurable: true
    },
    isBookmark: {
      configurable: true
    },
    isQ: {
      configurable: true
    },
    userName: {
      configurable: true
    },
    height: {
      configurable: true
    },
    paintMap: {
      configurable: true
    },
    paintArr: {
      configurable: true
    },
    isMenuHover: {
      configurable: true
    },
    isFull: {
      configurable: true
    },
    background: {
      configurable: true
    },
    uiStage: {
      configurable: true
    },
    errorStage: {
      configurable: true
    },
    currentScene: {
      configurable: true
    },
    ratioX: {
      configurable: true
    },
    ratioY: {
      configurable: true
    },
    app: {
      configurable: true
    },
    errApp: {
      configurable: true
    },
    paintStage: {
      configurable: true
    },
    paint: {
      configurable: true
    }
  };

  staticAccessors$1.width.set = function (object) {
    _width = object;
  };

  staticAccessors$1.isPrev.set = function (bool) {
    _isPrev = bool;
  };

  staticAccessors$1.isGather.set = function (bool) {
    _isGather = bool;
  };

  staticAccessors$1.isPaint.set = function (bool) {
    _isPaint = bool;
  };

  staticAccessors$1.isCard.set = function (bool) {
    _isCard = bool;
  };

  staticAccessors$1.isAudio.set = function (bool) {
    _isAudio = bool;
  };

  staticAccessors$1.isBookmark.set = function (bool) {
    _isBookmark = bool;
  };

  staticAccessors$1.isQ.set = function (bool) {
    _isQ = bool;
  };

  staticAccessors$1.userName.set = function (s) {
    _userName = s;
  };

  staticAccessors$1.height.set = function (object) {
    _height = object;
  };

  staticAccessors$1.paintMap.set = function (object) {
    _paintMap = object;
  };

  staticAccessors$1.paintArr.set = function (array) {
    _paintArr = array;
  };

  staticAccessors$1.isMenuHover.set = function (bool) {
    _isMenuHover = bool;
  };

  staticAccessors$1.isFull.set = function (bool) {
    if (bool === void 0) bool = false;
    _isFull = bool;
  };

  staticAccessors$1.isFull.get = function () {
    return _isFull;
  };

  staticAccessors$1.isMenuHover.get = function () {
    return _isMenuHover;
  };

  staticAccessors$1.paintArr.get = function () {
    return _paintArr;
  };

  staticAccessors$1.paintMap.get = function () {
    return _paintMap;
  };

  staticAccessors$1.isQ.get = function () {
    return _isQ;
  };

  staticAccessors$1.isCard.get = function () {
    return _isCard;
  };

  staticAccessors$1.isAudio.get = function () {
    return _isAudio;
  };

  staticAccessors$1.isBookmark.get = function () {
    return _isBookmark;
  };

  staticAccessors$1.isPrev.get = function () {
    return _isPrev;
  };

  staticAccessors$1.isGather.get = function () {
    return _isGather;
  };

  staticAccessors$1.isPaint.get = function () {
    return _isPaint;
  };

  staticAccessors$1.width.get = function () {
    return _width;
  };

  staticAccessors$1.height.get = function () {
    return _height;
  };

  staticAccessors$1.background.get = function () {
    return _background;
  };

  staticAccessors$1.uiStage.get = function () {
    return _uiStage;
  };

  staticAccessors$1.errorStage.get = function () {
    return _errorStage;
  };

  staticAccessors$1.currentScene.get = function () {
    return _currentScene;
  };

  staticAccessors$1.height.get = function () {
    return _height;
  };

  staticAccessors$1.ratioX.get = function () {
    return _ratioX;
  };

  staticAccessors$1.ratioY.get = function () {
    return _ratioY;
  };

  staticAccessors$1.app.get = function () {
    return _app;
  };

  staticAccessors$1.errApp.get = function () {
    return _errApp;
  };

  staticAccessors$1.paintStage.get = function () {
    return _paintStage;
  };

  staticAccessors$1.paint.get = function () {
    return _paint;
  };

  Manager.backGroundOFF = function backGroundOFF() {
    _background.visible = false;
  };

  Manager.backGroundON = function backGroundON() {
    _background.visible = true;
  };

  Manager.print = function print(option) {
    var copies = option.copies;
    var isColor = option.isColor;
    var isWhole = option.isWhole;
    var gatsby = document.getElementById("___gatsby");
    var wrapper = document.getElementById("canvas_wraper");
    var printable_attribute = document.getElementById("printable");
    var pixiCanvas = document.getElementById("pixi_canvas");
    var pages = printable_attribute.children;
    var pageNum = Manager.currentScene.viewer.getPageNum() - 1;

    if (!isWhole) {
      for (var index = 0; index < pages.length; index++) {
        if (index !== pageNum) {
          pages[index].style.display = "none";
        }
      }
    }

    printable_attribute.style.display = "block";

    if (gatsby) {
      gatsby.style.display = "none";
    }

    wrapper.style.display = "block";
    _view_canvas.style.display = 'none';
    pixiCanvas.style.display = "none";
    window.onafterprint = this.afterPrint;

    if (ipcRenderer) {
      ipcRenderer.send('print', copies + "," + isColor);
    }

    if (gatsby) {
      gatsby.style.display = "block";
    }

    wrapper.style.display = "block";
    ipcRenderer.on('result', function (event, res) {
      console.log("print result : ", res);

      if (res === "fail") {
        printable_attribute.style.display = "none";
        _view_canvas.style.display = 'block';
        pixiCanvas.style.display = "block";
      }
    });
  };

  Manager.paintApp = function paintApp() {
    _paint_canvas.width = _view_canvas.width;
    _paint_canvas.height = _view_canvas.height;
    _paint_canvas.style.marginLeft = _view_canvas.style.marginLeft;
    _paint_canvas.style.marginTop = _view_canvas.style.marginTop;
    _paint = new PIXI.Application({
      resolution: 1,
      width: _view_canvas.width,
      height: _view_canvas.height,
      antialias: true,
      view: _paint_canvas,
      transparent: true
    });
    _paintStage = new PIXI.UI.Stage(_paint.screen.width, _paint.screen.height);
    var t = PIXI.Texture.WHITE;
    _background = new PIXI.Sprite.from(t);
    _background.width = _paint.screen.width;
    _background.height = _paint.screen.height;
    Manager.backGroundOFF();

    _paint.stage.addChild(_background);

    _paint.stage.addChild(_paintStage);
  };

  Manager.initialize = function initialize(pdfUrl) {
    window.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
    window.addEventListener("keydown", function (event) {
      if (event.keyCode === 80 && (event.ctrlKey || event.metaKey) && !event.altKey && (!event.shiftKey || window.chrome || window.opera)) {
        event.preventDefault();
      }
    }, true);

    function copyToClipboard() {
      var aux = document.createElement("input");
      aux.setAttribute("value", " ");
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
    }

    window.addEventListener("keyup", function (event) {
      if (event.key === "PrintScreen") {
        copyToClipboard();
        alert("보안정책에 따라 캡쳐할 수 없습니다.");
      }
    });
    window.addEventListener("focus", function () {
      document.body.style.display = "block";
    });
    _ratioX = Math.floor(_width / 1920 * 10000) / 10000;
    _ratioY = Math.floor(_height / 1080 * 10000) / 10000;
    var canvas_wraper = document.createElement("div");
    var pageinput = document.createElement("input");
    var speedInput = document.createElement("input");
    pageinput.id = "page_input";
    pageinput.style.display = "none";
    speedInput.id = "speed_input";
    speedInput.style.display = "none";
    canvas_wraper.style.width = "100%";
    canvas_wraper.id = "canvas_wraper";
    canvas_wraper.style.height = "100%";
    canvas_wraper.style.position = "relative";
    _pixi_canvas = document.createElement("canvas");
    _paint_canvas = document.createElement("canvas");
    _view_canvas = document.createElement("canvas");
    _printable_attribute = document.createElement("div");
    _printable_attribute.id = "printable";
    _paint_canvas.style.display = "none";
    _pixi_canvas.id = "pixi_canvas";
    _paint_canvas.id = "paint_canvas";
    _view_canvas.id = "view-canvas";
    _pixi_canvas.style.position = _view_canvas.style.position = _paint_canvas.style.position = "absolute";
    document.body.appendChild(_printable_attribute);
    document.body.appendChild(canvas_wraper);
    canvas_wraper.append(_view_canvas, pageinput, speedInput, _pixi_canvas, _paint_canvas);
    _app = new PIXI.Application({
      resolution: 1,
      width: _width,
      height: _height,
      antialias: true,
      view: _pixi_canvas,
      transparent: true
    });
    _app.ticker.speed = 1.5;

    _app.ticker.add(Manager.update);

    window.addEventListener("resize", Manager.resize);
    _uiStage = new PIXI.UI.Stage(_app.screen.width, _app.screen.height);

    _app.stage.addChild(_uiStage);

    var makeThumb = function makeThumb(page) {
      var canvas = document.createElement("canvas");
      canvas.className = "printable-canvas";
      var vp = page.getViewport({
        scale: 1
      });
      canvas.width = vp.width;
      canvas.height = vp.height;

      if (canvas.width > canvas.height) {
        canvas.style.width = '95%';
      } else {
        canvas.style.height = '95%';
      }

      var scale = 1;
      return page.render({
        canvasContext: canvas.getContext("2d"),
        viewport: page.getViewport({
          scale: scale
        })
      }).promise.then(function () {
        var ctx = canvas.getContext("2d");
        ctx.globalAlpha = 0.5;
        ctx.font = "24px serif";
        var txt = _userName;

        if (txt === undefined) {
          txt = "김다은";
        }

        ctx.fillText(txt, vp.width * scale - 150, 35);
        ctx.fillText(page._pageIndex + 1, 1200, 850);
        return canvas;
      });
    };

    var pdfjsLib = window["pdfjs-dist/build/pdf"];
    pdfjsLib.getDocument(pdfUrl).promise.then(function (pdfDoc_) {
      var pdfDoc = pdfDoc_;
      var pages = [];

      var _t_e_m_p = new Map();

      while (pages.length < pdfDoc.numPages) {
        pages.push(pages.length + 1);
      }

      return Promise.all(pages.map(function (num) {
        return pdfDoc.getPage(num).then(makeThumb).then(function (canvas) {
          _t_e_m_p.set(num, canvas);

          if (_t_e_m_p.size === pdfDoc.numPages) {
            for (var i = 1; i <= pdfDoc.numPages; ++i) {
              var c = _t_e_m_p.get(i);

              var div = document.createElement('div');
              div.style = 'page-break-before:always';
              div.style.margin = '0px';
              div.style.textAlign = 'center';
              document.body.appendChild(div);

              _printable_attribute.append(div);

              div.append(c);
            }

            _printable_attribute.style.display = "none";
          }
        });
      }));
    });
  };

  Manager.changeScene = function changeScene(newScene) {
    if (_currentScene) {
      _uiStage.removeChild(_currentScene.con);
    }

    _currentScene = newScene;

    _uiStage.addChild(_currentScene.con);
  };

  Manager.update = function update(framesPassed) {
    if (_currentScene) {
      _currentScene.update(framesPassed);
    }
  };

  Manager.resize = function resize() {
    if (_currentScene) {
      _currentScene.resize(_width, _height);
    }
  };

  Manager.beforePrint = function beforePrint() {};

  Manager.afterPrint = function afterPrint() {
    var printable_attribute = document.getElementById("printable");
    var pixi_canvas = document.getElementById("pixi_canvas");
    var pages = printable_attribute.children;
    pixi_canvas.style.display = "block";
    _view_canvas.style.display = "block";

    for (var index = 0; index < pages.length; index++) {
      pages[index].style.display = "block";
    }

    printable_attribute.style.display = "none";
  };

  Object.defineProperties(Manager, staticAccessors$1);

  var _api_host_uri = document.getElementById("peach-bundle").getAttribute("data-api-host-url") + "/";

  function get_cookie(cookieName) {
    var cookieValue = null;

    if (document.cookie) {
      var array = document.cookie.split(escape(cookieName) + "=");

      if (array.length >= 2) {
        var arraySub = array[1].split(";");
        cookieValue = unescape(arraySub[0]);
      }
    }

    cookieValue = JSON.parse(cookieValue);

    if (cookieValue !== null) {
      fetch(_api_host_uri + "v2/account/detail", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookieValue.token
        }
      }).then(function (response) {
        return response.json();
      }).then(function (res) {
        if (res.code === 0) {
          Manager.userName = res.data.account.id;
        }
      });
      cookieValue = cookieValue.token;
    }

    return cookieValue;
  }
  var Cookie = get_cookie("access_token");
  function _api_do(m, uri, body, res) {
    try {
      fetch(_api_host_uri + uri, {
        method: m,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookie,
          pragma: "no-cache",
          "cache-control": "no-cache"
        },
        body: JSON.stringify(body)
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        res(json);
      });
    } catch (error) {
      console.log(error);
    }
  }
  function _api_get(m, uri, res) {
    try {
      fetch(_api_host_uri + uri, {
        method: m,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookie,
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        res(json);
      });
    } catch (error) {
      console.log(error);
    }
  }
  function _api_read(m, uri, body, res) {
    return new Promise(function ($return, $error) {
      fetch(_api_host_uri + uri, {
        method: m,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookie,
          pragma: "no-cache",
          "cache-control": "no-cache"
        },
        body: JSON.stringify(body)
      }).then(function (response) {
        response.blob().then(function (myBlob) {
          res(myBlob);
        });
      }).catch(function (e) {
        console.error(e);
      });
      return $return();
    });
  }
  function _api_down(m, uri, body, res) {
    fetch(_api_host_uri + uri, {
      method: m,
      headers: {
        Authorization: "Bearer " + Cookie,
        pragma: "no-cache",
        "cache-control": "no-cache"
      },
      body: body
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      res(json);
    }).catch(function (e) {
      console.error(e);
    });
  }
  function get_CardList(value, res) {
    _api_get("GET", "v2/illust/board/raws?page_number=1&take_number=0&order_number=1&search_number=3001&search_keyword=" + value, res);
  }
  function get_BookMark(num, res) {
    _api_get("GET", "v2/story/bookmark?story_number=" + num, res);
  }
  function delete_bookmark(story_number, page_numbers, res) {
    _api_do("DELETE", "v2/story/bookmark", {
      story_number: story_number,
      page_numbers: page_numbers
    }, res);
  }
  function get_story_detail(row, res) {
    _api_get("GET", "admin/v2/raw/story/detail?raw_number=" + row, res);
  }
  function get_storyDetail(story_num, res) {
    _api_get("GET", "v2/story/detail?story_number=" + story_num, res);
  }
  function get_hiddenStoryDetail(story_num, res) {
    _api_get("GET", "v2/hidden/story/detail?story_number=" + story_num, res);
  }
  function set_bookmark(story_number, page_numbers, res) {
    _api_read("POST", "v2/story/bookmark", {
      story_number: story_number,
      page_numbers: page_numbers
    }, res);
  }
  function get_AudioList(pagenum, order, value, res) {
    _api_get("GET", "admin/v2/raw/voice/board?page_number=" + pagenum + "&take_number=15&order_number=" + order + "&search_number=2001&search_keyword=" + value, res);
  }
  function download_zip(story_number, res) {
    _api_read("POST", "v2/story/read", {
      story_number: story_number
    }, res);
  }
  function download_zip_hidden(story_number, res) {
    _api_read("POST", "v2/hidden/story/read", {
      story_number: story_number
    }, res);
  }
  function saveStory(raw_taggings, raw_status, raw_cards, raw_data, res) {
    var bodyFormData = new FormData();
    bodyFormData.append("raw_taggings", raw_taggings);
    bodyFormData.append("raw_status", raw_status);
    bodyFormData.append("raw_cards", raw_cards);
    bodyFormData.append("raw_data", raw_data);

    _api_down("POST", "admin/v2/raw/story", bodyFormData, res);
  }
  function editStory(raw_number, raw_cards, raw_data, res) {
    var bodyFormData = new FormData();
    bodyFormData.append("raw_number", raw_number);
    bodyFormData.append("raw_cards", raw_cards);
    bodyFormData.append("raw_data", raw_data);

    _api_down("POST", "admin/v2/raw/story/edit", bodyFormData, res);
  }
  function changeDone(raw_number, raw_status, res) {
    _api_do("PUT", "admin/v2/raw/story/status", {
      raw_number: raw_number,
      raw_status: raw_status
    }, res);
  }
  function perUse(story_number, res) {
    _api_do("POST", "v2/story/peruse", {
      story_number: story_number
    }, res);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var howler = createCommonjsModule(function (module, exports) {
  (function () {
      var HowlerGlobal = function () {
          this.init();
      };
      HowlerGlobal.prototype = {
          init: function () {
              var self = this || Howler;
              self._counter = 1000;
              self._html5AudioPool = [];
              self.html5PoolSize = 10;
              self._codecs = {};
              self._howls = [];
              self._muted = false;
              self._volume = 1;
              self._canPlayEvent = 'canplaythrough';
              self._navigator = typeof window !== 'undefined' && window.navigator ? window.navigator : null;
              self.masterGain = null;
              self.noAudio = false;
              self.usingWebAudio = true;
              self.autoSuspend = true;
              self.ctx = null;
              self.autoUnlock = true;
              self._setup();
              return self;
          },
          volume: function (vol) {
              var self = this || Howler;
              vol = parseFloat(vol);
              if (!self.ctx) {
                  setupAudioContext();
              }
              if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                  self._volume = vol;
                  if (self._muted) {
                      return self;
                  }
                  if (self.usingWebAudio) {
                      self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                  }
                  for (var i = 0;i < self._howls.length; i++) {
                      if (!self._howls[i]._webAudio) {
                          var ids = self._howls[i]._getSoundIds();
                          for (var j = 0;j < ids.length; j++) {
                              var sound = self._howls[i]._soundById(ids[j]);
                              if (sound && sound._node) {
                                  sound._node.volume = sound._volume * vol;
                              }
                          }
                      }
                  }
                  return self;
              }
              return self._volume;
          },
          mute: function (muted) {
              var self = this || Howler;
              if (!self.ctx) {
                  setupAudioContext();
              }
              self._muted = muted;
              if (self.usingWebAudio) {
                  self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
              }
              for (var i = 0;i < self._howls.length; i++) {
                  if (!self._howls[i]._webAudio) {
                      var ids = self._howls[i]._getSoundIds();
                      for (var j = 0;j < ids.length; j++) {
                          var sound = self._howls[i]._soundById(ids[j]);
                          if (sound && sound._node) {
                              sound._node.muted = muted ? true : sound._muted;
                          }
                      }
                  }
              }
              return self;
          },
          stop: function () {
              var self = this || Howler;
              for (var i = 0;i < self._howls.length; i++) {
                  self._howls[i].stop();
              }
              return self;
          },
          unload: function () {
              var self = this || Howler;
              for (var i = self._howls.length - 1;i >= 0; i--) {
                  self._howls[i].unload();
              }
              if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
                  self.ctx.close();
                  self.ctx = null;
                  setupAudioContext();
              }
              return self;
          },
          codecs: function (ext) {
              return (this || Howler)._codecs[ext.replace(/^x-/, '')];
          },
          _setup: function () {
              var self = this || Howler;
              self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';
              self._autoSuspend();
              if (!self.usingWebAudio) {
                  if (typeof Audio !== 'undefined') {
                      try {
                          var test = new Audio();
                          if (typeof test.oncanplaythrough === 'undefined') {
                              self._canPlayEvent = 'canplay';
                          }
                      } catch (e) {
                          self.noAudio = true;
                      }
                  } else {
                      self.noAudio = true;
                  }
              }
              try {
                  var test = new Audio();
                  if (test.muted) {
                      self.noAudio = true;
                  }
              } catch (e$1) {}
              if (!self.noAudio) {
                  self._setupCodecs();
              }
              return self;
          },
          _setupCodecs: function () {
              var self = this || Howler;
              var audioTest = null;
              try {
                  audioTest = typeof Audio !== 'undefined' ? new Audio() : null;
              } catch (err) {
                  return self;
              }
              if (!audioTest || typeof audioTest.canPlayType !== 'function') {
                  return self;
              }
              var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');
              var ua = self._navigator ? self._navigator.userAgent : '';
              var checkOpera = ua.match(/OPR\/([0-6].)/g);
              var isOldOpera = checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33;
              var checkSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;
              var safariVersion = ua.match(/Version\/(.*?) /);
              var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
              self._codecs = {
                  mp3: !(!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, '')))),
                  mpeg: !(!mpegTest),
                  opus: !(!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '')),
                  ogg: !(!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')),
                  oga: !(!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')),
                  wav: !(!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, '')),
                  aac: !(!audioTest.canPlayType('audio/aac;').replace(/^no$/, '')),
                  caf: !(!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, '')),
                  m4a: !(!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, '')),
                  m4b: !(!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, '')),
                  mp4: !(!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, '')),
                  weba: !(!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''))),
                  webm: !(!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''))),
                  dolby: !(!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, '')),
                  flac: !(!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, ''))
              };
              return self;
          },
          _unlockAudio: function () {
              var self = this || Howler;
              if (self._audioUnlocked || !self.ctx) {
                  return;
              }
              self._audioUnlocked = false;
              self.autoUnlock = false;
              if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                  self._mobileUnloaded = true;
                  self.unload();
              }
              self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
              var unlock = function (e) {
                  while (self._html5AudioPool.length < self.html5PoolSize) {
                      try {
                          var audioNode = new Audio();
                          audioNode._unlocked = true;
                          self._releaseHtml5Audio(audioNode);
                      } catch (e$1) {
                          self.noAudio = true;
                          break;
                      }
                  }
                  for (var i = 0;i < self._howls.length; i++) {
                      if (!self._howls[i]._webAudio) {
                          var ids = self._howls[i]._getSoundIds();
                          for (var j = 0;j < ids.length; j++) {
                              var sound = self._howls[i]._soundById(ids[j]);
                              if (sound && sound._node && !sound._node._unlocked) {
                                  sound._node._unlocked = true;
                                  sound._node.load();
                              }
                          }
                      }
                  }
                  self._autoResume();
                  var source = self.ctx.createBufferSource();
                  source.buffer = self._scratchBuffer;
                  source.connect(self.ctx.destination);
                  if (typeof source.start === 'undefined') {
                      source.noteOn(0);
                  } else {
                      source.start(0);
                  }
                  if (typeof self.ctx.resume === 'function') {
                      self.ctx.resume();
                  }
                  source.onended = function () {
                      source.disconnect(0);
                      self._audioUnlocked = true;
                      document.removeEventListener('touchstart', unlock, true);
                      document.removeEventListener('touchend', unlock, true);
                      document.removeEventListener('click', unlock, true);
                      document.removeEventListener('keydown', unlock, true);
                      for (var i = 0;i < self._howls.length; i++) {
                          self._howls[i]._emit('unlock');
                      }
                  };
              };
              document.addEventListener('touchstart', unlock, true);
              document.addEventListener('touchend', unlock, true);
              document.addEventListener('click', unlock, true);
              document.addEventListener('keydown', unlock, true);
              return self;
          },
          _obtainHtml5Audio: function () {
              var self = this || Howler;
              if (self._html5AudioPool.length) {
                  return self._html5AudioPool.pop();
              }
              var testPlay = new Audio().play();
              if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
                  testPlay.catch(function () {
                      console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
                  });
              }
              return new Audio();
          },
          _releaseHtml5Audio: function (audio) {
              var self = this || Howler;
              if (audio._unlocked) {
                  self._html5AudioPool.push(audio);
              }
              return self;
          },
          _autoSuspend: function () {
              var self = this;
              if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
                  return;
              }
              for (var i = 0;i < self._howls.length; i++) {
                  if (self._howls[i]._webAudio) {
                      for (var j = 0;j < self._howls[i]._sounds.length; j++) {
                          if (!self._howls[i]._sounds[j]._paused) {
                              return self;
                          }
                      }
                  }
              }
              if (self._suspendTimer) {
                  clearTimeout(self._suspendTimer);
              }
              self._suspendTimer = setTimeout(function () {
                  if (!self.autoSuspend) {
                      return;
                  }
                  self._suspendTimer = null;
                  self.state = 'suspending';
                  var handleSuspension = function () {
                      self.state = 'suspended';
                      if (self._resumeAfterSuspend) {
                          delete self._resumeAfterSuspend;
                          self._autoResume();
                      }
                  };
                  self.ctx.suspend().then(handleSuspension, handleSuspension);
              }, 30000);
              return self;
          },
          _autoResume: function () {
              var self = this;
              if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
                  return;
              }
              if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
                  clearTimeout(self._suspendTimer);
                  self._suspendTimer = null;
              } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
                  self.ctx.resume().then(function () {
                      self.state = 'running';
                      for (var i = 0;i < self._howls.length; i++) {
                          self._howls[i]._emit('resume');
                      }
                  });
                  if (self._suspendTimer) {
                      clearTimeout(self._suspendTimer);
                      self._suspendTimer = null;
                  }
              } else if (self.state === 'suspending') {
                  self._resumeAfterSuspend = true;
              }
              return self;
          }
      };
      var Howler = new HowlerGlobal();
      var Howl = function (o) {
          var self = this;
          if (!o.src || o.src.length === 0) {
              console.error('An array of source files must be passed with any new Howl.');
              return;
          }
          self.init(o);
      };
      Howl.prototype = {
          init: function (o) {
              var self = this;
              if (!Howler.ctx) {
                  setupAudioContext();
              }
              self._autoplay = o.autoplay || false;
              self._format = typeof o.format !== 'string' ? o.format : [o.format];
              self._html5 = o.html5 || false;
              self._muted = o.mute || false;
              self._loop = o.loop || false;
              self._pool = o.pool || 5;
              self._preload = typeof o.preload === 'boolean' || o.preload === 'metadata' ? o.preload : true;
              self._rate = o.rate || 1;
              self._sprite = o.sprite || {};
              self._src = typeof o.src !== 'string' ? o.src : [o.src];
              self._volume = o.volume !== undefined ? o.volume : 1;
              self._xhr = {
                  method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
                  headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
                  withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
              };
              self._duration = 0;
              self._state = 'unloaded';
              self._sounds = [];
              self._endTimers = {};
              self._queue = [];
              self._playLock = false;
              self._onend = o.onend ? [{
                  fn: o.onend
              }] : [];
              self._onfade = o.onfade ? [{
                  fn: o.onfade
              }] : [];
              self._onload = o.onload ? [{
                  fn: o.onload
              }] : [];
              self._onloaderror = o.onloaderror ? [{
                  fn: o.onloaderror
              }] : [];
              self._onplayerror = o.onplayerror ? [{
                  fn: o.onplayerror
              }] : [];
              self._onpause = o.onpause ? [{
                  fn: o.onpause
              }] : [];
              self._onplay = o.onplay ? [{
                  fn: o.onplay
              }] : [];
              self._onstop = o.onstop ? [{
                  fn: o.onstop
              }] : [];
              self._onmute = o.onmute ? [{
                  fn: o.onmute
              }] : [];
              self._onvolume = o.onvolume ? [{
                  fn: o.onvolume
              }] : [];
              self._onrate = o.onrate ? [{
                  fn: o.onrate
              }] : [];
              self._onseek = o.onseek ? [{
                  fn: o.onseek
              }] : [];
              self._onunlock = o.onunlock ? [{
                  fn: o.onunlock
              }] : [];
              self._onresume = [];
              self._webAudio = Howler.usingWebAudio && !self._html5;
              if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
                  Howler._unlockAudio();
              }
              Howler._howls.push(self);
              if (self._autoplay) {
                  self._queue.push({
                      event: 'play',
                      action: function () {
                          self.play();
                      }
                  });
              }
              if (self._preload && self._preload !== 'none') {
                  self.load();
              }
              return self;
          },
          load: function () {
              var self = this;
              var url = null;
              if (Howler.noAudio) {
                  self._emit('loaderror', null, 'No audio support.');
                  return;
              }
              if (typeof self._src === 'string') {
                  self._src = [self._src];
              }
              for (var i = 0;i < self._src.length; i++) {
                  var ext, str;
                  if (self._format && self._format[i]) {
                      ext = self._format[i];
                  } else {
                      str = self._src[i];
                      if (typeof str !== 'string') {
                          self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                          continue;
                      }
                      ext = /^data:audio\/([^;,]+);/i.exec(str);
                      if (!ext) {
                          ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
                      }
                      if (ext) {
                          ext = ext[1].toLowerCase();
                      }
                  }
                  if (!ext) {
                      console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
                  }
                  if (ext && Howler.codecs(ext)) {
                      url = self._src[i];
                      break;
                  }
              }
              if (!url) {
                  self._emit('loaderror', null, 'No codec support for selected audio sources.');
                  return;
              }
              self._src = url;
              self._state = 'loading';
              if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
                  self._html5 = true;
                  self._webAudio = false;
              }
              new Sound(self);
              if (self._webAudio) {
                  loadBuffer(self);
              }
              return self;
          },
          play: function (sprite, internal) {
              var self = this;
              var id = null;
              if (typeof sprite === 'number') {
                  id = sprite;
                  sprite = null;
              } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
                  return null;
              } else if (typeof sprite === 'undefined') {
                  sprite = '__default';
                  if (!self._playLock) {
                      var num = 0;
                      for (var i = 0;i < self._sounds.length; i++) {
                          if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                              num++;
                              id = self._sounds[i]._id;
                          }
                      }
                      if (num === 1) {
                          sprite = null;
                      } else {
                          id = null;
                      }
                  }
              }
              var sound = id ? self._soundById(id) : self._inactiveSound();
              if (!sound) {
                  return null;
              }
              if (id && !sprite) {
                  sprite = sound._sprite || '__default';
              }
              if (self._state !== 'loaded') {
                  sound._sprite = sprite;
                  sound._ended = false;
                  var soundId = sound._id;
                  self._queue.push({
                      event: 'play',
                      action: function () {
                          self.play(soundId);
                      }
                  });
                  return soundId;
              }
              if (id && !sound._paused) {
                  if (!internal) {
                      self._loadQueue('play');
                  }
                  return sound._id;
              }
              if (self._webAudio) {
                  Howler._autoResume();
              }
              var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
              var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000 - seek);
              var timeout = duration * 1000 / Math.abs(sound._rate);
              var start = self._sprite[sprite][0] / 1000;
              var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
              sound._sprite = sprite;
              sound._ended = false;
              var setParams = function () {
                  sound._paused = false;
                  sound._seek = seek;
                  sound._start = start;
                  sound._stop = stop;
                  sound._loop = !(!(sound._loop || self._sprite[sprite][2]));
              };
              if (seek >= stop) {
                  self._ended(sound);
                  return;
              }
              var node = sound._node;
              if (self._webAudio) {
                  var playWebAudio = function () {
                      self._playLock = false;
                      setParams();
                      self._refreshBuffer(sound);
                      var vol = sound._muted || self._muted ? 0 : sound._volume;
                      node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                      sound._playStart = Howler.ctx.currentTime;
                      if (typeof node.bufferSource.start === 'undefined') {
                          sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                      } else {
                          sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                      }
                      if (timeout !== Infinity) {
                          self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                      }
                      if (!internal) {
                          setTimeout(function () {
                              self._emit('play', sound._id);
                              self._loadQueue();
                          }, 0);
                      }
                  };
                  if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
                      playWebAudio();
                  } else {
                      self._playLock = true;
                      self.once('resume', playWebAudio);
                      self._clearTimer(sound._id);
                  }
              } else {
                  var playHtml5 = function () {
                      node.currentTime = seek;
                      node.muted = sound._muted || self._muted || Howler._muted || node.muted;
                      node.volume = sound._volume * Howler.volume();
                      node.playbackRate = sound._rate;
                      try {
                          var play = node.play();
                          if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
                              self._playLock = true;
                              setParams();
                              play.then(function () {
                                  self._playLock = false;
                                  node._unlocked = true;
                                  if (!internal) {
                                      self._emit('play', sound._id);
                                  } else {
                                      self._loadQueue();
                                  }
                              }).catch(function () {
                                  self._playLock = false;
                                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' + 'on mobile devices and Chrome where playback was not within a user interaction.');
                                  sound._ended = true;
                                  sound._paused = true;
                              });
                          } else if (!internal) {
                              self._playLock = false;
                              setParams();
                              self._emit('play', sound._id);
                          }
                          node.playbackRate = sound._rate;
                          if (node.paused) {
                              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' + 'on mobile devices and Chrome where playback was not within a user interaction.');
                              return;
                          }
                          if (sprite !== '__default' || sound._loop) {
                              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                          } else {
                              self._endTimers[sound._id] = function () {
                                  self._ended(sound);
                                  node.removeEventListener('ended', self._endTimers[sound._id], false);
                              };
                              node.addEventListener('ended', self._endTimers[sound._id], false);
                          }
                      } catch (err) {
                          self._emit('playerror', sound._id, err);
                      }
                  };
                  if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
                      node.src = self._src;
                      node.load();
                  }
                  var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS;
                  if (node.readyState >= 3 || loadedNoReadyState) {
                      playHtml5();
                  } else {
                      self._playLock = true;
                      self._state = 'loading';
                      var listener = function () {
                          self._state = 'loaded';
                          playHtml5();
                          node.removeEventListener(Howler._canPlayEvent, listener, false);
                      };
                      node.addEventListener(Howler._canPlayEvent, listener, false);
                      self._clearTimer(sound._id);
                  }
              }
              return sound._id;
          },
          pause: function (id) {
              var arguments$1 = arguments;

              var self = this;
              if (self._state !== 'loaded' || self._playLock) {
                  self._queue.push({
                      event: 'pause',
                      action: function () {
                          self.pause(id);
                      }
                  });
                  return self;
              }
              var ids = self._getSoundIds(id);
              for (var i = 0;i < ids.length; i++) {
                  self._clearTimer(ids[i]);
                  var sound = self._soundById(ids[i]);
                  if (sound && !sound._paused) {
                      sound._seek = self.seek(ids[i]);
                      sound._rateSeek = 0;
                      sound._paused = true;
                      self._stopFade(ids[i]);
                      if (sound._node) {
                          if (self._webAudio) {
                              if (!sound._node.bufferSource) {
                                  continue;
                              }
                              if (typeof sound._node.bufferSource.stop === 'undefined') {
                                  sound._node.bufferSource.noteOff(0);
                              } else {
                                  sound._node.bufferSource.stop(0);
                              }
                              self._cleanBuffer(sound._node);
                          } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                              sound._node.pause();
                          }
                      }
                  }
                  if (!arguments$1[1]) {
                      self._emit('pause', sound ? sound._id : null);
                  }
              }
              return self;
          },
          stop: function (id, internal) {
              var self = this;
              if (self._state !== 'loaded' || self._playLock) {
                  self._queue.push({
                      event: 'stop',
                      action: function () {
                          self.stop(id);
                      }
                  });
                  return self;
              }
              var ids = self._getSoundIds(id);
              for (var i = 0;i < ids.length; i++) {
                  self._clearTimer(ids[i]);
                  var sound = self._soundById(ids[i]);
                  if (sound) {
                      sound._seek = sound._start || 0;
                      sound._rateSeek = 0;
                      sound._paused = true;
                      sound._ended = true;
                      self._stopFade(ids[i]);
                      if (sound._node) {
                          if (self._webAudio) {
                              if (sound._node.bufferSource) {
                                  if (typeof sound._node.bufferSource.stop === 'undefined') {
                                      sound._node.bufferSource.noteOff(0);
                                  } else {
                                      sound._node.bufferSource.stop(0);
                                  }
                                  self._cleanBuffer(sound._node);
                              }
                          } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                              sound._node.currentTime = sound._start || 0;
                              sound._node.pause();
                              if (sound._node.duration === Infinity) {
                                  self._clearSound(sound._node);
                              }
                          }
                      }
                      if (!internal) {
                          self._emit('stop', sound._id);
                      }
                  }
              }
              return self;
          },
          mute: function (muted, id) {
              var self = this;
              if (self._state !== 'loaded' || self._playLock) {
                  self._queue.push({
                      event: 'mute',
                      action: function () {
                          self.mute(muted, id);
                      }
                  });
                  return self;
              }
              if (typeof id === 'undefined') {
                  if (typeof muted === 'boolean') {
                      self._muted = muted;
                  } else {
                      return self._muted;
                  }
              }
              var ids = self._getSoundIds(id);
              for (var i = 0;i < ids.length; i++) {
                  var sound = self._soundById(ids[i]);
                  if (sound) {
                      sound._muted = muted;
                      if (sound._interval) {
                          self._stopFade(sound._id);
                      }
                      if (self._webAudio && sound._node) {
                          sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
                      } else if (sound._node) {
                          sound._node.muted = Howler._muted ? true : muted;
                      }
                      self._emit('mute', sound._id);
                  }
              }
              return self;
          },
          volume: function () {
              var self = this;
              var args = arguments;
              var vol, id;
              if (args.length === 0) {
                  return self._volume;
              } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
                  var ids = self._getSoundIds();
                  var index = ids.indexOf(args[0]);
                  if (index >= 0) {
                      id = parseInt(args[0], 10);
                  } else {
                      vol = parseFloat(args[0]);
                  }
              } else if (args.length >= 2) {
                  vol = parseFloat(args[0]);
                  id = parseInt(args[1], 10);
              }
              var sound;
              if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                  if (self._state !== 'loaded' || self._playLock) {
                      self._queue.push({
                          event: 'volume',
                          action: function () {
                              self.volume.apply(self, args);
                          }
                      });
                      return self;
                  }
                  if (typeof id === 'undefined') {
                      self._volume = vol;
                  }
                  id = self._getSoundIds(id);
                  for (var i = 0;i < id.length; i++) {
                      sound = self._soundById(id[i]);
                      if (sound) {
                          sound._volume = vol;
                          if (!args[2]) {
                              self._stopFade(id[i]);
                          }
                          if (self._webAudio && sound._node && !sound._muted) {
                              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                          } else if (sound._node && !sound._muted) {
                              sound._node.volume = vol * Howler.volume();
                          }
                          self._emit('volume', sound._id);
                      }
                  }
              } else {
                  sound = id ? self._soundById(id) : self._sounds[0];
                  return sound ? sound._volume : 0;
              }
              return self;
          },
          fade: function (from, to, len, id) {
              var self = this;
              if (self._state !== 'loaded' || self._playLock) {
                  self._queue.push({
                      event: 'fade',
                      action: function () {
                          self.fade(from, to, len, id);
                      }
                  });
                  return self;
              }
              from = Math.min(Math.max(0, parseFloat(from)), 1);
              to = Math.min(Math.max(0, parseFloat(to)), 1);
              len = parseFloat(len);
              self.volume(from, id);
              var ids = self._getSoundIds(id);
              for (var i = 0;i < ids.length; i++) {
                  var sound = self._soundById(ids[i]);
                  if (sound) {
                      if (!id) {
                          self._stopFade(ids[i]);
                      }
                      if (self._webAudio && !sound._muted) {
                          var currentTime = Howler.ctx.currentTime;
                          var end = currentTime + len / 1000;
                          sound._volume = from;
                          sound._node.gain.setValueAtTime(from, currentTime);
                          sound._node.gain.linearRampToValueAtTime(to, end);
                      }
                      self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
                  }
              }
              return self;
          },
          _startFadeInterval: function (sound, from, to, len, id, isGroup) {
              var self = this;
              var vol = from;
              var diff = to - from;
              var steps = Math.abs(diff / 0.01);
              var stepLen = Math.max(4, steps > 0 ? len / steps : len);
              var lastTick = Date.now();
              sound._fadeTo = to;
              sound._interval = setInterval(function () {
                  var tick = (Date.now() - lastTick) / len;
                  lastTick = Date.now();
                  vol += diff * tick;
                  vol = Math.round(vol * 100) / 100;
                  if (diff < 0) {
                      vol = Math.max(to, vol);
                  } else {
                      vol = Math.min(to, vol);
                  }
                  if (self._webAudio) {
                      sound._volume = vol;
                  } else {
                      self.volume(vol, sound._id, true);
                  }
                  if (isGroup) {
                      self._volume = vol;
                  }
                  if (to < from && vol <= to || to > from && vol >= to) {
                      clearInterval(sound._interval);
                      sound._interval = null;
                      sound._fadeTo = null;
                      self.volume(to, sound._id);
                      self._emit('fade', sound._id);
                  }
              }, stepLen);
          },
          _stopFade: function (id) {
              var self = this;
              var sound = self._soundById(id);
              if (sound && sound._interval) {
                  if (self._webAudio) {
                      sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
                  }
                  clearInterval(sound._interval);
                  sound._interval = null;
                  self.volume(sound._fadeTo, id);
                  sound._fadeTo = null;
                  self._emit('fade', id);
              }
              return self;
          },
          loop: function () {
              var self = this;
              var args = arguments;
              var loop, id, sound;
              if (args.length === 0) {
                  return self._loop;
              } else if (args.length === 1) {
                  if (typeof args[0] === 'boolean') {
                      loop = args[0];
                      self._loop = loop;
                  } else {
                      sound = self._soundById(parseInt(args[0], 10));
                      return sound ? sound._loop : false;
                  }
              } else if (args.length === 2) {
                  loop = args[0];
                  id = parseInt(args[1], 10);
              }
              var ids = self._getSoundIds(id);
              for (var i = 0;i < ids.length; i++) {
                  sound = self._soundById(ids[i]);
                  if (sound) {
                      sound._loop = loop;
                      if (self._webAudio && sound._node && sound._node.bufferSource) {
                          sound._node.bufferSource.loop = loop;
                          if (loop) {
                              sound._node.bufferSource.loopStart = sound._start || 0;
                              sound._node.bufferSource.loopEnd = sound._stop;
                              if (self.playing(ids[i])) {
                                  self.pause(ids[i], true);
                                  self.play(ids[i], true);
                              }
                          }
                      }
                  }
              }
              return self;
          },
          rate: function () {
              var self = this;
              var args = arguments;
              var rate, id;
              if (args.length === 0) {
                  id = self._sounds[0]._id;
              } else if (args.length === 1) {
                  var ids = self._getSoundIds();
                  var index = ids.indexOf(args[0]);
                  if (index >= 0) {
                      id = parseInt(args[0], 10);
                  } else {
                      rate = parseFloat(args[0]);
                  }
              } else if (args.length === 2) {
                  rate = parseFloat(args[0]);
                  id = parseInt(args[1], 10);
              }
              var sound;
              if (typeof rate === 'number') {
                  if (self._state !== 'loaded' || self._playLock) {
                      self._queue.push({
                          event: 'rate',
                          action: function () {
                              self.rate.apply(self, args);
                          }
                      });
                      return self;
                  }
                  if (typeof id === 'undefined') {
                      self._rate = rate;
                  }
                  id = self._getSoundIds(id);
                  for (var i = 0;i < id.length; i++) {
                      sound = self._soundById(id[i]);
                      if (sound) {
                          if (self.playing(id[i])) {
                              sound._rateSeek = self.seek(id[i]);
                              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
                          }
                          sound._rate = rate;
                          if (self._webAudio && sound._node && sound._node.bufferSource) {
                              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
                          } else if (sound._node) {
                              sound._node.playbackRate = rate;
                          }
                          var seek = self.seek(id[i]);
                          var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000 - seek;
                          var timeout = duration * 1000 / Math.abs(sound._rate);
                          if (self._endTimers[id[i]] || !sound._paused) {
                              self._clearTimer(id[i]);
                              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                          }
                          self._emit('rate', sound._id);
                      }
                  }
              } else {
                  sound = self._soundById(id);
                  return sound ? sound._rate : self._rate;
              }
              return self;
          },
          seek: function () {
              var self = this;
              var args = arguments;
              var seek, id;
              if (args.length === 0) {
                  if (self._sounds.length) {
                      id = self._sounds[0]._id;
                  }
              } else if (args.length === 1) {
                  var ids = self._getSoundIds();
                  var index = ids.indexOf(args[0]);
                  if (index >= 0) {
                      id = parseInt(args[0], 10);
                  } else if (self._sounds.length) {
                      id = self._sounds[0]._id;
                      seek = parseFloat(args[0]);
                  }
              } else if (args.length === 2) {
                  seek = parseFloat(args[0]);
                  id = parseInt(args[1], 10);
              }
              if (typeof id === 'undefined') {
                  return 0;
              }
              if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
                  self._queue.push({
                      event: 'seek',
                      action: function () {
                          self.seek.apply(self, args);
                      }
                  });
                  return self;
              }
              var sound = self._soundById(id);
              if (sound) {
                  if (typeof seek === 'number' && seek >= 0) {
                      var playing = self.playing(id);
                      if (playing) {
                          self.pause(id, true);
                      }
                      sound._seek = seek;
                      sound._ended = false;
                      self._clearTimer(id);
                      if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
                          sound._node.currentTime = seek;
                      }
                      var seekAndEmit = function () {
                          if (playing) {
                              self.play(id, true);
                          }
                          self._emit('seek', id);
                      };
                      if (playing && !self._webAudio) {
                          var emitSeek = function () {
                              if (!self._playLock) {
                                  seekAndEmit();
                              } else {
                                  setTimeout(emitSeek, 0);
                              }
                          };
                          setTimeout(emitSeek, 0);
                      } else {
                          seekAndEmit();
                      }
                  } else {
                      if (self._webAudio) {
                          var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
                          var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                          return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                      } else {
                          return sound._node.currentTime;
                      }
                  }
              }
              return self;
          },
          playing: function (id) {
              var self = this;
              if (typeof id === 'number') {
                  var sound = self._soundById(id);
                  return sound ? !sound._paused : false;
              }
              for (var i = 0;i < self._sounds.length; i++) {
                  if (!self._sounds[i]._paused) {
                      return true;
                  }
              }
              return false;
          },
          duration: function (id) {
              var self = this;
              var duration = self._duration;
              var sound = self._soundById(id);
              if (sound) {
                  duration = self._sprite[sound._sprite][1] / 1000;
              }
              return duration;
          },
          state: function () {
              return this._state;
          },
          unload: function () {
              var self = this;
              var sounds = self._sounds;
              for (var i = 0;i < sounds.length; i++) {
                  if (!sounds[i]._paused) {
                      self.stop(sounds[i]._id);
                  }
                  if (!self._webAudio) {
                      self._clearSound(sounds[i]._node);
                      sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
                      sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
                      sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false);
                      Howler._releaseHtml5Audio(sounds[i]._node);
                  }
                  delete sounds[i]._node;
                  self._clearTimer(sounds[i]._id);
              }
              var index = Howler._howls.indexOf(self);
              if (index >= 0) {
                  Howler._howls.splice(index, 1);
              }
              var remCache = true;
              for (i = 0; i < Howler._howls.length; i++) {
                  if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
                      remCache = false;
                      break;
                  }
              }
              if (cache && remCache) {
                  delete cache[self._src];
              }
              Howler.noAudio = false;
              self._state = 'unloaded';
              self._sounds = [];
              self = null;
              return null;
          },
          on: function (event, fn, id, once) {
              var self = this;
              var events = self['_on' + event];
              if (typeof fn === 'function') {
                  events.push(once ? {
                      id: id,
                      fn: fn,
                      once: once
                  } : {
                      id: id,
                      fn: fn
                  });
              }
              return self;
          },
          off: function (event, fn, id) {
              var self = this;
              var events = self['_on' + event];
              var i = 0;
              if (typeof fn === 'number') {
                  id = fn;
                  fn = null;
              }
              if (fn || id) {
                  for (i = 0; i < events.length; i++) {
                      var isId = id === events[i].id;
                      if (fn === events[i].fn && isId || !fn && isId) {
                          events.splice(i, 1);
                          break;
                      }
                  }
              } else if (event) {
                  self['_on' + event] = [];
              } else {
                  var keys = Object.keys(self);
                  for (i = 0; i < keys.length; i++) {
                      if (keys[i].indexOf('_on') === 0 && Array.isArray(self[keys[i]])) {
                          self[keys[i]] = [];
                      }
                  }
              }
              return self;
          },
          once: function (event, fn, id) {
              var self = this;
              self.on(event, fn, id, 1);
              return self;
          },
          _emit: function (event, id, msg) {
              var self = this;
              var events = self['_on' + event];
              for (var i = events.length - 1;i >= 0; i--) {
                  if (!events[i].id || events[i].id === id || event === 'load') {
                      setTimeout((function (fn) {
                          fn.call(this, id, msg);
                      }).bind(self, events[i].fn), 0);
                      if (events[i].once) {
                          self.off(event, events[i].fn, events[i].id);
                      }
                  }
              }
              self._loadQueue(event);
              return self;
          },
          _loadQueue: function (event) {
              var self = this;
              if (self._queue.length > 0) {
                  var task = self._queue[0];
                  if (task.event === event) {
                      self._queue.shift();
                      self._loadQueue();
                  }
                  if (!event) {
                      task.action();
                  }
              }
              return self;
          },
          _ended: function (sound) {
              var self = this;
              var sprite = sound._sprite;
              if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
                  setTimeout(self._ended.bind(self, sound), 100);
                  return self;
              }
              var loop = !(!(sound._loop || self._sprite[sprite][2]));
              self._emit('end', sound._id);
              if (!self._webAudio && loop) {
                  self.stop(sound._id, true).play(sound._id);
              }
              if (self._webAudio && loop) {
                  self._emit('play', sound._id);
                  sound._seek = sound._start || 0;
                  sound._rateSeek = 0;
                  sound._playStart = Howler.ctx.currentTime;
                  var timeout = (sound._stop - sound._start) * 1000 / Math.abs(sound._rate);
                  self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
              }
              if (self._webAudio && !loop) {
                  sound._paused = true;
                  sound._ended = true;
                  sound._seek = sound._start || 0;
                  sound._rateSeek = 0;
                  self._clearTimer(sound._id);
                  self._cleanBuffer(sound._node);
                  Howler._autoSuspend();
              }
              if (!self._webAudio && !loop) {
                  self.stop(sound._id, true);
              }
              return self;
          },
          _clearTimer: function (id) {
              var self = this;
              if (self._endTimers[id]) {
                  if (typeof self._endTimers[id] !== 'function') {
                      clearTimeout(self._endTimers[id]);
                  } else {
                      var sound = self._soundById(id);
                      if (sound && sound._node) {
                          sound._node.removeEventListener('ended', self._endTimers[id], false);
                      }
                  }
                  delete self._endTimers[id];
              }
              return self;
          },
          _soundById: function (id) {
              var self = this;
              for (var i = 0;i < self._sounds.length; i++) {
                  if (id === self._sounds[i]._id) {
                      return self._sounds[i];
                  }
              }
              return null;
          },
          _inactiveSound: function () {
              var self = this;
              self._drain();
              for (var i = 0;i < self._sounds.length; i++) {
                  if (self._sounds[i]._ended) {
                      return self._sounds[i].reset();
                  }
              }
              return new Sound(self);
          },
          _drain: function () {
              var self = this;
              var limit = self._pool;
              var cnt = 0;
              var i = 0;
              if (self._sounds.length < limit) {
                  return;
              }
              for (i = 0; i < self._sounds.length; i++) {
                  if (self._sounds[i]._ended) {
                      cnt++;
                  }
              }
              for (i = self._sounds.length - 1; i >= 0; i--) {
                  if (cnt <= limit) {
                      return;
                  }
                  if (self._sounds[i]._ended) {
                      if (self._webAudio && self._sounds[i]._node) {
                          self._sounds[i]._node.disconnect(0);
                      }
                      self._sounds.splice(i, 1);
                      cnt--;
                  }
              }
          },
          _getSoundIds: function (id) {
              var self = this;
              if (typeof id === 'undefined') {
                  var ids = [];
                  for (var i = 0;i < self._sounds.length; i++) {
                      ids.push(self._sounds[i]._id);
                  }
                  return ids;
              } else {
                  return [id];
              }
          },
          _refreshBuffer: function (sound) {
              var self = this;
              sound._node.bufferSource = Howler.ctx.createBufferSource();
              sound._node.bufferSource.buffer = cache[self._src];
              if (sound._panner) {
                  sound._node.bufferSource.connect(sound._panner);
              } else {
                  sound._node.bufferSource.connect(sound._node);
              }
              sound._node.bufferSource.loop = sound._loop;
              if (sound._loop) {
                  sound._node.bufferSource.loopStart = sound._start || 0;
                  sound._node.bufferSource.loopEnd = sound._stop || 0;
              }
              sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);
              return self;
          },
          _cleanBuffer: function (node) {
              var self = this;
              var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;
              if (Howler._scratchBuffer && node.bufferSource) {
                  node.bufferSource.onended = null;
                  node.bufferSource.disconnect(0);
                  if (isIOS) {
                      try {
                          node.bufferSource.buffer = Howler._scratchBuffer;
                      } catch (e) {}
                  }
              }
              node.bufferSource = null;
              return self;
          },
          _clearSound: function (node) {
              var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
              if (!checkIE) {
                  node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
              }
          }
      };
      var Sound = function (howl) {
          this._parent = howl;
          this.init();
      };
      Sound.prototype = {
          init: function () {
              var self = this;
              var parent = self._parent;
              self._muted = parent._muted;
              self._loop = parent._loop;
              self._volume = parent._volume;
              self._rate = parent._rate;
              self._seek = 0;
              self._paused = true;
              self._ended = true;
              self._sprite = '__default';
              self._id = ++Howler._counter;
              parent._sounds.push(self);
              self.create();
              return self;
          },
          create: function () {
              var self = this;
              var parent = self._parent;
              var volume = Howler._muted || self._muted || self._parent._muted ? 0 : self._volume;
              if (parent._webAudio) {
                  self._node = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
                  self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
                  self._node.paused = true;
                  self._node.connect(Howler.masterGain);
              } else if (!Howler.noAudio) {
                  self._node = Howler._obtainHtml5Audio();
                  self._errorFn = self._errorListener.bind(self);
                  self._node.addEventListener('error', self._errorFn, false);
                  self._loadFn = self._loadListener.bind(self);
                  self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);
                  self._endFn = self._endListener.bind(self);
                  self._node.addEventListener('ended', self._endFn, false);
                  self._node.src = parent._src;
                  self._node.preload = parent._preload === true ? 'auto' : parent._preload;
                  self._node.volume = volume * Howler.volume();
                  self._node.load();
              }
              return self;
          },
          reset: function () {
              var self = this;
              var parent = self._parent;
              self._muted = parent._muted;
              self._loop = parent._loop;
              self._volume = parent._volume;
              self._rate = parent._rate;
              self._seek = 0;
              self._rateSeek = 0;
              self._paused = true;
              self._ended = true;
              self._sprite = '__default';
              self._id = ++Howler._counter;
              return self;
          },
          _errorListener: function () {
              var self = this;
              self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);
              self._node.removeEventListener('error', self._errorFn, false);
          },
          _loadListener: function () {
              var self = this;
              var parent = self._parent;
              parent._duration = Math.ceil(self._node.duration * 10) / 10;
              if (Object.keys(parent._sprite).length === 0) {
                  parent._sprite = {
                      __default: [0,parent._duration * 1000]
                  };
              }
              if (parent._state !== 'loaded') {
                  parent._state = 'loaded';
                  parent._emit('load');
                  parent._loadQueue();
              }
              self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
          },
          _endListener: function () {
              var self = this;
              var parent = self._parent;
              if (parent._duration === Infinity) {
                  parent._duration = Math.ceil(self._node.duration * 10) / 10;
                  if (parent._sprite.__default[1] === Infinity) {
                      parent._sprite.__default[1] = parent._duration * 1000;
                  }
                  parent._ended(self);
              }
              self._node.removeEventListener('ended', self._endFn, false);
          }
      };
      var cache = {};
      var loadBuffer = function (self) {
          var url = self._src;
          if (cache[url]) {
              self._duration = cache[url].duration;
              loadSound(self);
              return;
          }
          if (/^data:[^;]+;base64,/.test(url)) {
              var data = atob(url.split(',')[1]);
              var dataView = new Uint8Array(data.length);
              for (var i = 0;i < data.length; ++i) {
                  dataView[i] = data.charCodeAt(i);
              }
              decodeAudioData(dataView.buffer, self);
          } else {
              var xhr = new XMLHttpRequest();
              xhr.open(self._xhr.method, url, true);
              xhr.withCredentials = self._xhr.withCredentials;
              xhr.responseType = 'arraybuffer';
              if (self._xhr.headers) {
                  Object.keys(self._xhr.headers).forEach(function (key) {
                      xhr.setRequestHeader(key, self._xhr.headers[key]);
                  });
              }
              xhr.onload = function () {
                  var code = (xhr.status + '')[0];
                  if (code !== '0' && code !== '2' && code !== '3') {
                      self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
                      return;
                  }
                  decodeAudioData(xhr.response, self);
              };
              xhr.onerror = function () {
                  if (self._webAudio) {
                      self._html5 = true;
                      self._webAudio = false;
                      self._sounds = [];
                      delete cache[url];
                      self.load();
                  }
              };
              safeXhrSend(xhr);
          }
      };
      var safeXhrSend = function (xhr) {
          try {
              xhr.send();
          } catch (e) {
              xhr.onerror();
          }
      };
      var decodeAudioData = function (arraybuffer, self) {
          var error = function () {
              self._emit('loaderror', null, 'Decoding audio data failed.');
          };
          var success = function (buffer) {
              if (buffer && self._sounds.length > 0) {
                  cache[self._src] = buffer;
                  loadSound(self, buffer);
              } else {
                  error();
              }
          };
          if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
              Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
          } else {
              Howler.ctx.decodeAudioData(arraybuffer, success, error);
          }
      };
      var loadSound = function (self, buffer) {
          if (buffer && !self._duration) {
              self._duration = buffer.duration;
          }
          if (Object.keys(self._sprite).length === 0) {
              self._sprite = {
                  __default: [0,self._duration * 1000]
              };
          }
          if (self._state !== 'loaded') {
              self._state = 'loaded';
              self._emit('load');
              self._loadQueue();
          }
      };
      var setupAudioContext = function () {
          if (!Howler.usingWebAudio) {
              return;
          }
          try {
              if (typeof AudioContext !== 'undefined') {
                  Howler.ctx = new AudioContext();
              } else if (typeof webkitAudioContext !== 'undefined') {
                  Howler.ctx = new webkitAudioContext();
              } else {
                  Howler.usingWebAudio = false;
              }
          } catch (e) {
              Howler.usingWebAudio = false;
          }
          if (!Howler.ctx) {
              Howler.usingWebAudio = false;
          }
          var iOS = /iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform);
          var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          var version = appVersion ? parseInt(appVersion[1], 10) : null;
          if (iOS && version && version < 9) {
              var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
              if (Howler._navigator && !safari) {
                  Howler.usingWebAudio = false;
              }
          }
          if (Howler.usingWebAudio) {
              Howler.masterGain = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
              Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
              Howler.masterGain.connect(Howler.ctx.destination);
          }
          Howler._setup();
      };
      {
          exports.Howler = Howler;
          exports.Howl = Howl;
      }
      if (typeof commonjsGlobal !== 'undefined') {
          commonjsGlobal.HowlerGlobal = HowlerGlobal;
          commonjsGlobal.Howler = Howler;
          commonjsGlobal.Howl = Howl;
          commonjsGlobal.Sound = Sound;
      } else if (typeof window !== 'undefined') {
          window.HowlerGlobal = HowlerGlobal;
          window.Howler = Howler;
          window.Howl = Howl;
          window.Sound = Sound;
      }
  })();
  (function () {
      HowlerGlobal.prototype._pos = [0,0,0];
      HowlerGlobal.prototype._orientation = [0,0,-1,0,1,0];
      HowlerGlobal.prototype.stereo = function (pan) {
          var self = this;
          if (!self.ctx || !self.ctx.listener) {
              return self;
          }
          for (var i = self._howls.length - 1;i >= 0; i--) {
              self._howls[i].stereo(pan);
          }
          return self;
      };
      HowlerGlobal.prototype.pos = function (x, y, z) {
          var self = this;
          if (!self.ctx || !self.ctx.listener) {
              return self;
          }
          y = typeof y !== 'number' ? self._pos[1] : y;
          z = typeof z !== 'number' ? self._pos[2] : z;
          if (typeof x === 'number') {
              self._pos = [x,y,z];
              if (typeof self.ctx.listener.positionX !== 'undefined') {
                  self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
                  self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
                  self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
              } else {
                  self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
              }
          } else {
              return self._pos;
          }
          return self;
      };
      HowlerGlobal.prototype.orientation = function (x, y, z, xUp, yUp, zUp) {
          var self = this;
          if (!self.ctx || !self.ctx.listener) {
              return self;
          }
          var or = self._orientation;
          y = typeof y !== 'number' ? or[1] : y;
          z = typeof z !== 'number' ? or[2] : z;
          xUp = typeof xUp !== 'number' ? or[3] : xUp;
          yUp = typeof yUp !== 'number' ? or[4] : yUp;
          zUp = typeof zUp !== 'number' ? or[5] : zUp;
          if (typeof x === 'number') {
              self._orientation = [x,y,z,xUp,yUp,zUp];
              if (typeof self.ctx.listener.forwardX !== 'undefined') {
                  self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
                  self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
                  self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
                  self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
                  self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
                  self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
              } else {
                  self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
              }
          } else {
              return or;
          }
          return self;
      };
      Howl.prototype.init = (function (_super) {
          return function (o) {
              var self = this;
              self._orientation = o.orientation || [1,0,0];
              self._stereo = o.stereo || null;
              self._pos = o.pos || null;
              self._pannerAttr = {
                  coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
                  coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
                  coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
                  distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
                  maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
                  panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
                  refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
                  rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
              };
              self._onstereo = o.onstereo ? [{
                  fn: o.onstereo
              }] : [];
              self._onpos = o.onpos ? [{
                  fn: o.onpos
              }] : [];
              self._onorientation = o.onorientation ? [{
                  fn: o.onorientation
              }] : [];
              return _super.call(this, o);
          };
      })(Howl.prototype.init);
      Howl.prototype.stereo = function (pan, id) {
          var self = this;
          if (!self._webAudio) {
              return self;
          }
          if (self._state !== 'loaded') {
              self._queue.push({
                  event: 'stereo',
                  action: function () {
                      self.stereo(pan, id);
                  }
              });
              return self;
          }
          var pannerType = typeof Howler.ctx.createStereoPanner === 'undefined' ? 'spatial' : 'stereo';
          if (typeof id === 'undefined') {
              if (typeof pan === 'number') {
                  self._stereo = pan;
                  self._pos = [pan,0,0];
              } else {
                  return self._stereo;
              }
          }
          var ids = self._getSoundIds(id);
          for (var i = 0;i < ids.length; i++) {
              var sound = self._soundById(ids[i]);
              if (sound) {
                  if (typeof pan === 'number') {
                      sound._stereo = pan;
                      sound._pos = [pan,0,0];
                      if (sound._node) {
                          sound._pannerAttr.panningModel = 'equalpower';
                          if (!sound._panner || !sound._panner.pan) {
                              setupPanner(sound, pannerType);
                          }
                          if (pannerType === 'spatial') {
                              if (typeof sound._panner.positionX !== 'undefined') {
                                  sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                                  sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                                  sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                              } else {
                                  sound._panner.setPosition(pan, 0, 0);
                              }
                          } else {
                              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                          }
                      }
                      self._emit('stereo', sound._id);
                  } else {
                      return sound._stereo;
                  }
              }
          }
          return self;
      };
      Howl.prototype.pos = function (x, y, z, id) {
          var self = this;
          if (!self._webAudio) {
              return self;
          }
          if (self._state !== 'loaded') {
              self._queue.push({
                  event: 'pos',
                  action: function () {
                      self.pos(x, y, z, id);
                  }
              });
              return self;
          }
          y = typeof y !== 'number' ? 0 : y;
          z = typeof z !== 'number' ? -0.5 : z;
          if (typeof id === 'undefined') {
              if (typeof x === 'number') {
                  self._pos = [x,y,z];
              } else {
                  return self._pos;
              }
          }
          var ids = self._getSoundIds(id);
          for (var i = 0;i < ids.length; i++) {
              var sound = self._soundById(ids[i]);
              if (sound) {
                  if (typeof x === 'number') {
                      sound._pos = [x,y,z];
                      if (sound._node) {
                          if (!sound._panner || sound._panner.pan) {
                              setupPanner(sound, 'spatial');
                          }
                          if (typeof sound._panner.positionX !== 'undefined') {
                              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                          } else {
                              sound._panner.setPosition(x, y, z);
                          }
                      }
                      self._emit('pos', sound._id);
                  } else {
                      return sound._pos;
                  }
              }
          }
          return self;
      };
      Howl.prototype.orientation = function (x, y, z, id) {
          var self = this;
          if (!self._webAudio) {
              return self;
          }
          if (self._state !== 'loaded') {
              self._queue.push({
                  event: 'orientation',
                  action: function () {
                      self.orientation(x, y, z, id);
                  }
              });
              return self;
          }
          y = typeof y !== 'number' ? self._orientation[1] : y;
          z = typeof z !== 'number' ? self._orientation[2] : z;
          if (typeof id === 'undefined') {
              if (typeof x === 'number') {
                  self._orientation = [x,y,z];
              } else {
                  return self._orientation;
              }
          }
          var ids = self._getSoundIds(id);
          for (var i = 0;i < ids.length; i++) {
              var sound = self._soundById(ids[i]);
              if (sound) {
                  if (typeof x === 'number') {
                      sound._orientation = [x,y,z];
                      if (sound._node) {
                          if (!sound._panner) {
                              if (!sound._pos) {
                                  sound._pos = self._pos || [0,0,-0.5];
                              }
                              setupPanner(sound, 'spatial');
                          }
                          if (typeof sound._panner.orientationX !== 'undefined') {
                              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                          } else {
                              sound._panner.setOrientation(x, y, z);
                          }
                      }
                      self._emit('orientation', sound._id);
                  } else {
                      return sound._orientation;
                  }
              }
          }
          return self;
      };
      Howl.prototype.pannerAttr = function () {
          var self = this;
          var args = arguments;
          var o, id, sound;
          if (!self._webAudio) {
              return self;
          }
          if (args.length === 0) {
              return self._pannerAttr;
          } else if (args.length === 1) {
              if (typeof args[0] === 'object') {
                  o = args[0];
                  if (typeof id === 'undefined') {
                      if (!o.pannerAttr) {
                          o.pannerAttr = {
                              coneInnerAngle: o.coneInnerAngle,
                              coneOuterAngle: o.coneOuterAngle,
                              coneOuterGain: o.coneOuterGain,
                              distanceModel: o.distanceModel,
                              maxDistance: o.maxDistance,
                              refDistance: o.refDistance,
                              rolloffFactor: o.rolloffFactor,
                              panningModel: o.panningModel
                          };
                      }
                      self._pannerAttr = {
                          coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                          coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                          coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                          distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
                          maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
                          refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
                          rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                          panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
                      };
                  }
              } else {
                  sound = self._soundById(parseInt(args[0], 10));
                  return sound ? sound._pannerAttr : self._pannerAttr;
              }
          } else if (args.length === 2) {
              o = args[0];
              id = parseInt(args[1], 10);
          }
          var ids = self._getSoundIds(id);
          for (var i = 0;i < ids.length; i++) {
              sound = self._soundById(ids[i]);
              if (sound) {
                  var pa = sound._pannerAttr;
                  pa = {
                      coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
                      coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
                      coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
                      distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
                      maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
                      refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
                      rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
                      panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
                  };
                  var panner = sound._panner;
                  if (panner) {
                      panner.coneInnerAngle = pa.coneInnerAngle;
                      panner.coneOuterAngle = pa.coneOuterAngle;
                      panner.coneOuterGain = pa.coneOuterGain;
                      panner.distanceModel = pa.distanceModel;
                      panner.maxDistance = pa.maxDistance;
                      panner.refDistance = pa.refDistance;
                      panner.rolloffFactor = pa.rolloffFactor;
                      panner.panningModel = pa.panningModel;
                  } else {
                      if (!sound._pos) {
                          sound._pos = self._pos || [0,0,-0.5];
                      }
                      setupPanner(sound, 'spatial');
                  }
              }
          }
          return self;
      };
      Sound.prototype.init = (function (_super) {
          return function () {
              var self = this;
              var parent = self._parent;
              self._orientation = parent._orientation;
              self._stereo = parent._stereo;
              self._pos = parent._pos;
              self._pannerAttr = parent._pannerAttr;
              _super.call(this);
              if (self._stereo) {
                  parent.stereo(self._stereo);
              } else if (self._pos) {
                  parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
              }
          };
      })(Sound.prototype.init);
      Sound.prototype.reset = (function (_super) {
          return function () {
              var self = this;
              var parent = self._parent;
              self._orientation = parent._orientation;
              self._stereo = parent._stereo;
              self._pos = parent._pos;
              self._pannerAttr = parent._pannerAttr;
              if (self._stereo) {
                  parent.stereo(self._stereo);
              } else if (self._pos) {
                  parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
              } else if (self._panner) {
                  self._panner.disconnect(0);
                  self._panner = undefined;
                  parent._refreshBuffer(self);
              }
              return _super.call(this);
          };
      })(Sound.prototype.reset);
      var setupPanner = function (sound, type) {
          type = type || 'spatial';
          if (type === 'spatial') {
              sound._panner = Howler.ctx.createPanner();
              sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
              sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
              sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
              sound._panner.distanceModel = sound._pannerAttr.distanceModel;
              sound._panner.maxDistance = sound._pannerAttr.maxDistance;
              sound._panner.refDistance = sound._pannerAttr.refDistance;
              sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
              sound._panner.panningModel = sound._pannerAttr.panningModel;
              if (typeof sound._panner.positionX !== 'undefined') {
                  sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
                  sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
                  sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
              } else {
                  sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
              }
              if (typeof sound._panner.orientationX !== 'undefined') {
                  sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
                  sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
                  sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
              } else {
                  sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
              }
          } else {
              sound._panner = Howler.ctx.createStereoPanner();
              sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
          }
          sound._panner.connect(sound._node);
          if (!sound._paused) {
              sound._parent.pause(sound._id, true).play(sound._id, true);
          }
      };
  })();



  });
  howler.Howler;
  var howler_2 = howler.Howl;

  function dragSprite(title, mather) {
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    var t = new PIXI.Texture.from("Q_icon");
    var Qsprite = new PIXI.UI.Sprite(t);
    Qsprite.tint = color.red;
    var circlet = new PIXI.Texture.from("circle");
    var circle = new PIXI.UI.Sprite(circlet);
    Qsprite.circle = circle;
    Qsprite.x = 230 * ratioX;
    Qsprite.y = 60 * ratioY;
    Qsprite.mather = mather;
    Qsprite.title = title;
    circle.width = circle.height = ratioX * 40;
    Qsprite.width = Qsprite.height = ratioX * 20;
    circle.tint = color.red;
    circle.alpha = 0.5;
    circle.visible = false;
    circle.pivot = 0.2;
    Qsprite.addChild(circle);
    Qsprite.sprite.interactive = true;
    Qsprite.sprite.buttonMode = true;
    Qsprite.pivot = 0.5;
    Qsprite.relatePos = {
      x: 0,
      y: 0
    };
    Qsprite.sprite.on("mousedown", onDragStart).on("mouseup", onDragEnd).on("mouseupoutside", onDragEnd).on("mousemove", onDragMove).on("pointerover", function () {
      Qsprite.mather.tint = color.red;
    }).on("pointerout", function () {
      Qsprite.mather.tint = color.line;
    });

    function onDragStart(event) {
      this.data = event.data;
      this.dragging = true;
    }

    function onDragEnd() {
      this.dragging = false;
      this.data = null;
    }

    var viewCan = document.getElementById("view-canvas");
    var left = viewCan.style.marginLeft;
    var w = viewCan.width;
    var h = viewCan.height;
    left = parseFloat(left);
    var top = viewCan.style.marginTop;
    top = parseFloat(top);

    function onDragMove() {
      if (this.dragging) {
        var relatePos = this.data.getLocalPosition(this.parent.parent.parent);
        var dx = relatePos.x - left;
        var dy = relatePos.y - top;
        Qsprite.relatePos = {
          x: dx / w,
          y: dy / h
        };
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = circle.x = newPosition.x;
        this.y = circle.y = newPosition.y;
      }
    }

    return Qsprite;
  }

  var GraphicsSprite = /*@__PURE__*/function (superclass) {
    function GraphicsSprite(graphic) {
      var texture = Manager.app.renderer.generateTexture(graphic);
      superclass.call(this, texture);
    }

    if (superclass) GraphicsSprite.__proto__ = superclass;
    GraphicsSprite.prototype = Object.create(superclass && superclass.prototype);
    GraphicsSprite.prototype.constructor = GraphicsSprite;
    return GraphicsSprite;
  }(PIXI.UI.Sprite);
  var GraphicTexture = function GraphicTexture(graphic) {
    var texture = Manager.app.renderer.generateTexture(graphic);
    return texture;
  };
  var LineSprte = /*@__PURE__*/function (superclass) {
    function LineSprte(width, height, color) {
      var graphic = new PIXI.Graphics();
      graphic.beginFill(color);
      graphic.drawRect(0, 0, width, height);
      graphic.endFill();
      var texture = Manager.app.renderer.generateTexture(graphic);
      superclass.call(this, texture);
    }

    if (superclass) LineSprte.__proto__ = superclass;
    LineSprte.prototype = Object.create(superclass && superclass.prototype);
    LineSprte.prototype.constructor = LineSprte;
    return LineSprte;
  }(PIXI.UI.Sprite);
  var Filter = /*@__PURE__*/function (superclass) {
    function Filter(width, height) {
      superclass.call(this, PIXI.Texture.WHITE);
      this.tint = 0x000000;
      this.alpha = 0.8;
      this.width = width;
      this.height = height;
      this.sprite.interactive = true;
      this.sprite.buttonMode = true;
    }

    if (superclass) Filter.__proto__ = superclass;
    Filter.prototype = Object.create(superclass && superclass.prototype);
    Filter.prototype.constructor = Filter;
    return Filter;
  }(PIXI.UI.Sprite);
  /*@__PURE__*/(function (superclass) {
    function BorderSprite(tint, lineColor, width, height, line) {
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(line, lineColor);
      graphic.beginFill(tint);
      graphic.drawRect(0, 0, width, height);
      graphic.endFill();
      var texture = Manager.app.renderer.generateTexture(graphic);
      superclass.call(this, texture);
    }

    if (superclass) BorderSprite.__proto__ = superclass;
    BorderSprite.prototype = Object.create(superclass && superclass.prototype);
    BorderSprite.prototype.constructor = BorderSprite;
    return BorderSprite;
  })(PIXI.UI.Sprite);
  var StrokeSquare = /*@__PURE__*/function (superclass) {
    function StrokeSquare(lineColor, width, height, line) {
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(line, lineColor, 1, 0);
      graphic.drawRect(0, 0, width, height);
      graphic.endFill();
      var texture = Manager.app.renderer.generateTexture(graphic);
      superclass.call(this, texture);
    }

    if (superclass) StrokeSquare.__proto__ = superclass;
    StrokeSquare.prototype = Object.create(superclass && superclass.prototype);
    StrokeSquare.prototype.constructor = StrokeSquare;
    return StrokeSquare;
  }(PIXI.UI.Sprite);
  function sXTexture(size) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle({
      width: 2,
      color: 0xffffff,
      alpha: 1,
      join: "round",
      cap: "round"
    });
    graphic.moveTo(0, 0);
    graphic.lineTo(size, size);
    graphic.moveTo(size, 0);
    graphic.lineTo(0, size);
    graphic.endFill();
    var texture = Manager.app.renderer.generateTexture(graphic);
    return texture;
  }
  function xTexture(size, color) {
    if (color === void 0) color = 0xffffff;
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(2, color);
    graphic.moveTo(0, 0);
    graphic.lineTo(size, size);
    graphic.moveTo(size, 0);
    graphic.lineTo(0, size);
    graphic.endFill();
    var texture = Manager.app.renderer.generateTexture(graphic);
    return texture;
  }
  function bookmarkTexture(width, height, color) {
    if (color === void 0) color = Color.red;
    var graphic = new PIXI.Graphics();
    var a = Math.floor(height * 0.7);
    var path = [0, 0, width, 0, width, height, width / 2, a, 0, height];
    graphic.lineStyle(0);
    graphic.beginFill(color, 1);
    graphic.drawPolygon(path);
    graphic.endFill();
    var texture = Manager.app.renderer.generateTexture(graphic);
    return texture;
  }

  var _dataTitle;

  var _dataPdf;

  var _isSaved;

  var _thumb_texture;

  var _story_num;

  var _data;

  var _cardData;

  var _audioArr;

  var _cardArr;

  var _audioData;

  var _pageNum;

  var _viewWidth;

  var _viewHeight = 1070;

  var _raw_num;

  var _story_tag;

  var _state;

  var _isFirst = false;
  var _hlHeight = 60;

  var _isHidden;

  var _cards;

  var Data = function Data() {};

  var staticAccessors = {
    title: {
      configurable: true
    },
    hlHeight: {
      configurable: true
    },
    story_tag: {
      configurable: true
    },
    pdf: {
      configurable: true
    },
    isSaved: {
      configurable: true
    },
    isFirst: {
      configurable: true
    },
    thumb_texture: {
      configurable: true
    },
    story_num: {
      configurable: true
    },
    raw_num: {
      configurable: true
    },
    state: {
      configurable: true
    },
    cardArr: {
      configurable: true
    },
    isHidden: {
      configurable: true
    },
    viewHeight: {
      configurable: true
    },
    cards: {
      configurable: true
    },
    data: {
      configurable: true
    },
    cardData: {
      configurable: true
    },
    audioArr: {
      configurable: true
    },
    audioData: {
      configurable: true
    },
    pageNum: {
      configurable: true
    },
    viewWidth: {
      configurable: true
    }
  };

  staticAccessors.title.set = function (t) {
    _dataTitle = t;
  };

  staticAccessors.hlHeight.set = function (num) {
    _hlHeight = num;
  };

  staticAccessors.story_tag.set = function (t) {
    _story_tag = t;
  };

  staticAccessors.pdf.set = function (file) {
    _dataPdf = file;
  };

  staticAccessors.isSaved.set = function (flag) {
    _isSaved = flag;
  };

  staticAccessors.isFirst.set = function (flag) {
    _isFirst = flag;
  };

  staticAccessors.thumb_texture.set = function (t) {
    _thumb_texture = t;
  };

  staticAccessors.story_num.set = function (num) {
    _story_num = num;
  };

  staticAccessors.raw_num.set = function (num) {
    _raw_num = num;
  };

  staticAccessors.state.set = function (num) {
    _state = num;
  };

  staticAccessors.cardArr.set = function (arr) {
    _cardArr = arr;
  };

  staticAccessors.isHidden.set = function (bool) {
    _isHidden = bool;
  };

  staticAccessors.isHidden.get = function () {
    return _isHidden;
  };

  staticAccessors.viewHeight.get = function () {
    return _viewHeight;
  };

  staticAccessors.cards.get = function () {
    return _cards;
  };

  staticAccessors.state.get = function () {
    return _state;
  };

  staticAccessors.hlHeight.get = function () {
    return _hlHeight;
  };

  staticAccessors.thumb_texture.get = function () {
    return _thumb_texture;
  };

  staticAccessors.story_tag.get = function () {
    return _story_tag;
  };

  staticAccessors.raw_num.get = function () {
    return _raw_num;
  };

  staticAccessors.story_num.get = function () {
    return _story_num;
  };

  staticAccessors.pdf.get = function () {
    return _dataPdf;
  };

  staticAccessors.title.get = function () {
    return _dataTitle;
  };

  staticAccessors.data.get = function () {
    return _data;
  };

  staticAccessors.cardData.get = function () {
    return _cardData;
  };

  staticAccessors.audioArr.get = function () {
    return _audioArr;
  };

  staticAccessors.cardArr.get = function () {
    return _cardArr;
  };

  staticAccessors.audioData.get = function () {
    return _audioData;
  };

  staticAccessors.pageNum.get = function () {
    return _pageNum;
  };

  staticAccessors.viewWidth.set = function (size) {
    _viewWidth = size;
  };

  staticAccessors.viewWidth.get = function () {
    return _viewWidth;
  };

  staticAccessors.isSaved.get = function () {
    return _isSaved;
  };

  staticAccessors.isFirst.get = function () {
    return _isFirst;
  };

  Data.saveCardData = function saveCardData() {
    console.log(_cardArr);
    var arr = _cardArr;
    _isSaved = true;
    _cardData = [];
    var uuidList = [];

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      var list = new Array(_pageNum);

      for (var j = 0; j < item.list.length; j++) {
        var Qsp = item.list[j];

        if (Qsp !== undefined) {
          list[j] = {
            relatePos: Qsp.relatePos
          };
        }
      }

      _cardData[i] = {
        uuid: item.uuid,
        title: item.title,
        list: list
      };
      uuidList.push(item.uuid);
    }

    _cards = JSON.stringify(uuidList);
  };

  Data.saveAudioData = function saveAudioData() {
    var playlist = [];
    var idx = new Array(_pageNum);
    var count = 0;

    for (var i = 0; i < _audioArr.length; i++) {
      var templist = _audioArr[i];

      for (var j = 0; j < templist.length; j++) {
        if (j == 0) {
          idx[i] = count;
        }

        var e = templist[j];
        var endPos = void 0,
            startPos = void 0;

        if (e.hl === undefined) {
          endPos = null;
          startPos = null;
        } else {
          endPos = e.hl.endPos;
          startPos = e.hl.startPos;
        }

        playlist.push({
          num: i,
          uuid: e.uuid,
          title: e.title,
          duration: e.duration,
          howl: null,
          endPos: endPos,
          startPos: startPos
        });
        count++;
      }

      if (templist.length === 0) {
        idx[i] = null;
      }
    }

    _audioData = {
      playlist: playlist,
      idx: idx
    };
  };

  Data.initialize = function initialize(raw) {
    if (raw === void 0) raw = {};
    _data = raw;
    _cardData = raw.cardList || [];
    _audioData = raw.audioList || {};
    _audioArr = [];
    _cardArr = [];
    _isSaved = false;
  };

  Data.rollbackArray = function rollbackArray() {
    var viewCan = document.getElementById("view-canvas");
    var left = viewCan.style.marginLeft;
    left = parseFloat(left);
    var top = viewCan.style.marginTop;
    top = parseFloat(top);
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");

    for (var i = 0; i < _cardData.length; i++) {
      var e = _cardData[i];
      var t = new PIXI.Texture.from(S3_URL_RAW + "/" + e.uuid);
      var item = new PIXI.UI.Sprite(t);
      item.list = new Array(e.list.length);
      item.title = e.title;
      item.uuid = e.uuid;

      for (var j = 0; j < e.list.length; j++) {
        var element = e.list[j];

        if (element === null) {
          continue;
        }

        var dragableItem = dragSprite(item.title, null);
        dragableItem.relatePos = element.relatePos;
        dragableItem.x = element.relatePos.x * viewCan.width + left;
        dragableItem.y = element.relatePos.y * viewCan.height + top;
        item.list[j] = dragableItem;
      }

      _cardArr.push(item);
    }

    var graphic = new PIXI.Graphics();

    if (_audioData.playlist === undefined) {
      return;
    }

    _audioData.playlist.forEach(function (element) {
      var hl = undefined;

      if (element.startPos !== undefined && element.startPos !== null) {
        var ox = element.startPos.x * viewCan.width;
        var oy = element.startPos.y * viewCan.height;
        var dx = element.endPos.x * viewCan.width;
        var dy = element.endPos.y * viewCan.height;
        graphic.clear();
        graphic.beginFill(color.red, 0.5);
        graphic.drawRoundedRect(0, 0, dx - ox, dy - oy, 5);
        graphic.endFill();
        hl = new GraphicsSprite(graphic);
        hl.x = ox + left;
        hl.y = oy + top;
        hl.startPos = element.startPos;
        hl.endPos = element.endPos;
      }

      _audioArr[element.num].push({
        uuid: element.uuid,
        sound: new howler_2({
          src: [S3_URL_RAW + "/" + element.uuid],
          html5: true,
          volume: 0
        }),
        duration: element.duration,
        title: element.title,
        hl: hl
      });
    });
  };

  Data.initArray = function initArray(num) {
    _pageNum = num;

    for (var i = 0; i < num; i++) {
      _audioArr.push([]);
    }
  };

  Data.setData = function setData() {
    _data.title = _dataTitle;
    _data.cardList = _cardData;
    _data.audioList = _audioData;
  };

  Object.defineProperties(Data, staticAccessors);

  var jszip_min = createCommonjsModule(function (module, exports) {
  !(function (t) {
      { module.exports = t(); }
  })(function () {
      return (function s(a, o, h) {
          function u(r, t) {
              if (!o[r]) {
                  if (!a[r]) {
                      var e = "function" == typeof commonjsRequire && commonjsRequire;
                      if (!t && e) 
                          { return e(r, !0); }
                      if (l) 
                          { return l(r, !0); }
                      var i = new Error("Cannot find module '" + r + "'");
                      throw i.code = "MODULE_NOT_FOUND", i;
                  }
                  var n = o[r] = {
                      exports: {}
                  };
                  a[r][0].call(n.exports, function (t) {
                      var e = a[r][1][t];
                      return u(e || t);
                  }, n, n.exports, s, a, o, h);
              }
              return o[r].exports;
          }
          
          for (var l = "function" == typeof commonjsRequire && commonjsRequire, t = 0;t < h.length; t++) 
              { u(h[t]); }
          return u;
      })({
          1: [function (t, e, r) {
              var c = t("./utils"), d = t("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              r.encode = function (t) {
                  for (var e, r, i, n, s, a, o, h = [], u = 0, l = t.length, f = l, d = "string" !== c.getTypeOf(t);u < t.length; ) 
                      { f = l - u, i = d ? (e = t[u++], r = u < l ? t[u++] : 0, u < l ? t[u++] : 0) : (e = t.charCodeAt(u++), r = u < l ? t.charCodeAt(u++) : 0, u < l ? t.charCodeAt(u++) : 0), n = e >> 2, s = (3 & e) << 4 | r >> 4, a = 1 < f ? (15 & r) << 2 | i >> 6 : 64, o = 2 < f ? 63 & i : 64, h.push(p.charAt(n) + p.charAt(s) + p.charAt(a) + p.charAt(o)); }
                  return h.join("");
              }, r.decode = function (t) {
                  var e, r, i, n, s, a, o = 0, h = 0, u = "data:";
                  if (t.substr(0, u.length) === u) 
                      { throw new Error("Invalid base64 input, it looks like a data url."); }
                  var l, f = 3 * (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length / 4;
                  if (t.charAt(t.length - 1) === p.charAt(64) && f--, t.charAt(t.length - 2) === p.charAt(64) && f--, f % 1 != 0) 
                      { throw new Error("Invalid base64 input, bad content length."); }
                  for (l = d.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < t.length; ) 
                      { e = p.indexOf(t.charAt(o++)) << 2 | (n = p.indexOf(t.charAt(o++))) >> 4, r = (15 & n) << 4 | (s = p.indexOf(t.charAt(o++))) >> 2, i = (3 & s) << 6 | (a = p.indexOf(t.charAt(o++))), l[h++] = e, 64 !== s && (l[h++] = r), 64 !== a && (l[h++] = i); }
                  return l;
              };
          },{
              "./support": 30,
              "./utils": 32
          }],
          2: [function (t, e, r) {
              var i = t("./external"), n = t("./stream/DataWorker"), s = t("./stream/Crc32Probe"), a = t("./stream/DataLengthProbe");
              function o(t, e, r, i, n) {
                  this.compressedSize = t, this.uncompressedSize = e, this.crc32 = r, this.compression = i, this.compressedContent = n;
              }
              
              o.prototype = {
                  getContentWorker: function () {
                      var t = new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), e = this;
                      return t.on("end", function () {
                          if (this.streamInfo.data_length !== e.uncompressedSize) 
                              { throw new Error("Bug : uncompressed data size mismatch"); }
                      }), t;
                  },
                  getCompressedWorker: function () {
                      return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
                  }
              }, o.createWorkerFrom = function (t, e, r) {
                  return t.pipe(new s()).pipe(new a("uncompressedSize")).pipe(e.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", e);
              }, e.exports = o;
          },{
              "./external": 6,
              "./stream/Crc32Probe": 25,
              "./stream/DataLengthProbe": 26,
              "./stream/DataWorker": 27
          }],
          3: [function (t, e, r) {
              var i = t("./stream/GenericWorker");
              r.STORE = {
                  magic: "\0\0",
                  compressWorker: function (t) {
                      return new i("STORE compression");
                  },
                  uncompressWorker: function () {
                      return new i("STORE decompression");
                  }
              }, r.DEFLATE = t("./flate");
          },{
              "./flate": 7,
              "./stream/GenericWorker": 28
          }],
          4: [function (t, e, r) {
              var i = t("./utils");
              var o = (function () {
                  for (var t, e = [], r = 0;r < 256; r++) {
                      t = r;
                      for (var i = 0;i < 8; i++) 
                          { t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1; }
                      e[r] = t;
                  }
                  return e;
              })();
              e.exports = function (t, e) {
                  return void 0 !== t && t.length ? "string" !== i.getTypeOf(t) ? (function (t, e, r, i) {
                      var n = o, s = i + r;
                      t ^= -1;
                      for (var a = i;a < s; a++) 
                          { t = t >>> 8 ^ n[255 & (t ^ e[a])]; }
                      return -1 ^ t;
                  })(0 | e, t, t.length, 0) : (function (t, e, r, i) {
                      var n = o, s = i + r;
                      t ^= -1;
                      for (var a = i;a < s; a++) 
                          { t = t >>> 8 ^ n[255 & (t ^ e.charCodeAt(a))]; }
                      return -1 ^ t;
                  })(0 | e, t, t.length, 0) : 0;
              };
          },{
              "./utils": 32
          }],
          5: [function (t, e, r) {
              r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
          },{}],
          6: [function (t, e, r) {
              var i = null;
              i = "undefined" != typeof Promise ? Promise : t("lie"), e.exports = {
                  Promise: i
              };
          },{
              lie: 37
          }],
          7: [function (t, e, r) {
              var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, n = t("pako"), s = t("./utils"), a = t("./stream/GenericWorker"), o = i ? "uint8array" : "array";
              function h(t, e) {
                  a.call(this, "FlateWorker/" + t), this._pako = null, this._pakoAction = t, this._pakoOptions = e, this.meta = {};
              }
              
              r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function (t) {
                  this.meta = t.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, t.data), !1);
              }, h.prototype.flush = function () {
                  a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0);
              }, h.prototype.cleanUp = function () {
                  a.prototype.cleanUp.call(this), this._pako = null;
              }, h.prototype._createPako = function () {
                  this._pako = new n[this._pakoAction]({
                      raw: !0,
                      level: this._pakoOptions.level || -1
                  });
                  var e = this;
                  this._pako.onData = function (t) {
                      e.push({
                          data: t,
                          meta: e.meta
                      });
                  };
              }, r.compressWorker = function (t) {
                  return new h("Deflate", t);
              }, r.uncompressWorker = function () {
                  return new h("Inflate", {});
              };
          },{
              "./stream/GenericWorker": 28,
              "./utils": 32,
              pako: 38
          }],
          8: [function (t, e, r) {
              function A(t, e) {
                  var r, i = "";
                  for (r = 0; r < e; r++) 
                      { i += String.fromCharCode(255 & t), t >>>= 8; }
                  return i;
              }
              
              function i(t, e, r, i, n, s) {
                  var a, o, h = t.file, u = t.compression, l = s !== O.utf8encode, f = I.transformTo("string", s(h.name)), d = I.transformTo("string", O.utf8encode(h.name)), c = h.comment, p = I.transformTo("string", s(c)), m = I.transformTo("string", O.utf8encode(c)), _ = d.length !== h.name.length, g = m.length !== c.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = {
                      crc32: 0,
                      compressedSize: 0,
                      uncompressedSize: 0
                  };
                  e && !r || (x.crc32 = t.crc32, x.compressedSize = t.compressedSize, x.uncompressedSize = t.uncompressedSize);
                  var S = 0;
                  e && (S |= 8), l || !_ && !g || (S |= 2048);
                  var z = 0, C = 0;
                  w && (z |= 16), "UNIX" === n ? (C = 798, z |= (function (t, e) {
                      var r = t;
                      return t || (r = e ? 16893 : 33204), (65535 & r) << 16;
                  })(h.unixPermissions, w)) : (C = 20, z |= (function (t) {
                      return 63 & (t || 0);
                  })(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + d, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
                  var E = "";
                  return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), {
                      fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
                      dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(i, 4) + f + b + p
                  };
              }
              
              var I = t("../utils"), n = t("../stream/GenericWorker"), O = t("../utf8"), B = t("../crc32"), R = t("../signature");
              function s(t, e, r, i) {
                  n.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = e, this.zipPlatform = r, this.encodeFileName = i, this.streamFiles = t, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
              }
              
              I.inherits(s, n), s.prototype.push = function (t) {
                  var e = t.meta.percent || 0, r = this.entriesCount, i = this._sources.length;
                  this.accumulate ? this.contentBuffer.push(t) : (this.bytesWritten += t.data.length, n.prototype.push.call(this, {
                      data: t.data,
                      meta: {
                          currentFile: this.currentFile,
                          percent: r ? (e + 100 * (r - i - 1)) / r : 100
                      }
                  }));
              }, s.prototype.openedSource = function (t) {
                  this.currentSourceOffset = this.bytesWritten, this.currentFile = t.file.name;
                  var e = this.streamFiles && !t.file.dir;
                  if (e) {
                      var r = i(t, e, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                      this.push({
                          data: r.fileRecord,
                          meta: {
                              percent: 0
                          }
                      });
                  } else 
                      { this.accumulate = !0; }
              }, s.prototype.closedSource = function (t) {
                  this.accumulate = !1;
                  var e = this.streamFiles && !t.file.dir, r = i(t, e, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                  if (this.dirRecords.push(r.dirRecord), e) 
                      { this.push({
                      data: (function (t) {
                          return R.DATA_DESCRIPTOR + A(t.crc32, 4) + A(t.compressedSize, 4) + A(t.uncompressedSize, 4);
                      })(t),
                      meta: {
                          percent: 100
                      }
                  }); }
                   else 
                      { for (this.push({
                      data: r.fileRecord,
                      meta: {
                          percent: 0
                      }
                  }); this.contentBuffer.length; ) 
                      { this.push(this.contentBuffer.shift()); } }
                  this.currentFile = null;
              }, s.prototype.flush = function () {
                  for (var t = this.bytesWritten, e = 0;e < this.dirRecords.length; e++) 
                      { this.push({
                      data: this.dirRecords[e],
                      meta: {
                          percent: 100
                      }
                  }); }
                  var r = this.bytesWritten - t, i = (function (t, e, r, i, n) {
                      var s = I.transformTo("string", n(i));
                      return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(t, 2) + A(t, 2) + A(e, 4) + A(r, 4) + A(s.length, 2) + s;
                  })(this.dirRecords.length, r, t, this.zipComment, this.encodeFileName);
                  this.push({
                      data: i,
                      meta: {
                          percent: 100
                      }
                  });
              }, s.prototype.prepareNextSource = function () {
                  this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
              }, s.prototype.registerPrevious = function (t) {
                  this._sources.push(t);
                  var e = this;
                  return t.on("data", function (t) {
                      e.processChunk(t);
                  }), t.on("end", function () {
                      e.closedSource(e.previous.streamInfo), e._sources.length ? e.prepareNextSource() : e.end();
                  }), t.on("error", function (t) {
                      e.error(t);
                  }), this;
              }, s.prototype.resume = function () {
                  return !(!n.prototype.resume.call(this)) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
              }, s.prototype.error = function (t) {
                  var e = this._sources;
                  if (!n.prototype.error.call(this, t)) 
                      { return !1; }
                  for (var r = 0;r < e.length; r++) {
                      try {
                          e[r].error(t);
                      } catch (t$1) {}
                  }
                  return !0;
              }, s.prototype.lock = function () {
                  n.prototype.lock.call(this);
                  for (var t = this._sources, e = 0;e < t.length; e++) 
                      { t[e].lock(); }
              }, e.exports = s;
          },{
              "../crc32": 4,
              "../signature": 23,
              "../stream/GenericWorker": 28,
              "../utf8": 31,
              "../utils": 32
          }],
          9: [function (t, e, r) {
              var u = t("../compressions"), i = t("./ZipFileWorker");
              r.generateWorker = function (t, a, e) {
                  var o = new i(a.streamFiles, e, a.platform, a.encodeFileName), h = 0;
                  try {
                      t.forEach(function (t, e) {
                          h++;
                          var r = (function (t, e) {
                              var r = t || e, i = u[r];
                              if (!i) 
                                  { throw new Error(r + " is not a valid compression method !"); }
                              return i;
                          })(e.options.compression, a.compression), i = e.options.compressionOptions || a.compressionOptions || {}, n = e.dir, s = e.date;
                          e._compressWorker(r, i).withStreamInfo("file", {
                              name: t,
                              dir: n,
                              date: s,
                              comment: e.comment || "",
                              unixPermissions: e.unixPermissions,
                              dosPermissions: e.dosPermissions
                          }).pipe(o);
                      }), o.entriesCount = h;
                  } catch (t$1) {
                      o.error(t$1);
                  }
                  return o;
              };
          },{
              "../compressions": 3,
              "./ZipFileWorker": 8
          }],
          10: [function (t, e, r) {
              function i() {
                  if (!(this instanceof i)) 
                      { return new i(); }
                  if (arguments.length) 
                      { throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."); }
                  this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function () {
                      var t = new i();
                      for (var e in this) 
                          { "function" != typeof this[e] && (t[e] = this[e]); }
                      return t;
                  };
              }
              
              (i.prototype = t("./object")).loadAsync = t("./load"), i.support = t("./support"), i.defaults = t("./defaults"), i.version = "3.7.1", i.loadAsync = function (t, e) {
                  return new i().loadAsync(t, e);
              }, i.external = t("./external"), e.exports = i;
          },{
              "./defaults": 5,
              "./external": 6,
              "./load": 11,
              "./object": 15,
              "./support": 30
          }],
          11: [function (t, e, r) {
              var i = t("./utils"), n = t("./external"), o = t("./utf8"), h = t("./zipEntries"), s = t("./stream/Crc32Probe"), u = t("./nodejsUtils");
              function l(i) {
                  return new n.Promise(function (t, e) {
                      var r = i.decompressed.getContentWorker().pipe(new s());
                      r.on("error", function (t) {
                          e(t);
                      }).on("end", function () {
                          r.streamInfo.crc32 !== i.decompressed.crc32 ? e(new Error("Corrupted zip : CRC32 mismatch")) : t();
                      }).resume();
                  });
              }
              
              e.exports = function (t, s) {
                  var a = this;
                  return s = i.extend(s || {}, {
                      base64: !1,
                      checkCRC32: !1,
                      optimizedBinaryString: !1,
                      createFolders: !1,
                      decodeFileName: o.utf8decode
                  }), u.isNode && u.isStream(t) ? n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", t, !0, s.optimizedBinaryString, s.base64).then(function (t) {
                      var e = new h(s);
                      return e.load(t), e;
                  }).then(function (t) {
                      var e = [n.Promise.resolve(t)], r = t.files;
                      if (s.checkCRC32) 
                          { for (var i = 0;i < r.length; i++) 
                          { e.push(l(r[i])); } }
                      return n.Promise.all(e);
                  }).then(function (t) {
                      for (var e = t.shift(), r = e.files, i = 0;i < r.length; i++) {
                          var n = r[i];
                          a.file(n.fileNameStr, n.decompressed, {
                              binary: !0,
                              optimizedBinaryString: !0,
                              date: n.date,
                              dir: n.dir,
                              comment: n.fileCommentStr.length ? n.fileCommentStr : null,
                              unixPermissions: n.unixPermissions,
                              dosPermissions: n.dosPermissions,
                              createFolders: s.createFolders
                          });
                      }
                      return e.zipComment.length && (a.comment = e.zipComment), a;
                  });
              };
          },{
              "./external": 6,
              "./nodejsUtils": 14,
              "./stream/Crc32Probe": 25,
              "./utf8": 31,
              "./utils": 32,
              "./zipEntries": 33
          }],
          12: [function (t, e, r) {
              var i = t("../utils"), n = t("../stream/GenericWorker");
              function s(t, e) {
                  n.call(this, "Nodejs stream input adapter for " + t), this._upstreamEnded = !1, this._bindStream(e);
              }
              
              i.inherits(s, n), s.prototype._bindStream = function (t) {
                  var e = this;
                  (this._stream = t).pause(), t.on("data", function (t) {
                      e.push({
                          data: t,
                          meta: {
                              percent: 0
                          }
                      });
                  }).on("error", function (t) {
                      e.isPaused ? (this.generatedError = t) : e.error(t);
                  }).on("end", function () {
                      e.isPaused ? (e._upstreamEnded = !0) : e.end();
                  });
              }, s.prototype.pause = function () {
                  return !(!n.prototype.pause.call(this)) && (this._stream.pause(), !0);
              }, s.prototype.resume = function () {
                  return !(!n.prototype.resume.call(this)) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
              }, e.exports = s;
          },{
              "../stream/GenericWorker": 28,
              "../utils": 32
          }],
          13: [function (t, e, r) {
              var n = t("readable-stream").Readable;
              function i(t, e, r) {
                  n.call(this, e), this._helper = t;
                  var i = this;
                  t.on("data", function (t, e) {
                      i.push(t) || i._helper.pause(), r && r(e);
                  }).on("error", function (t) {
                      i.emit("error", t);
                  }).on("end", function () {
                      i.push(null);
                  });
              }
              
              t("../utils").inherits(i, n), i.prototype._read = function () {
                  this._helper.resume();
              }, e.exports = i;
          },{
              "../utils": 32,
              "readable-stream": 16
          }],
          14: [function (t, e, r) {
              e.exports = {
                  isNode: "undefined" != typeof Buffer,
                  newBufferFrom: function (t, e) {
                      if (Buffer.from && Buffer.from !== Uint8Array.from) 
                          { return Buffer.from(t, e); }
                      if ("number" == typeof t) 
                          { throw new Error('The "data" argument must not be a number'); }
                      return new Buffer(t, e);
                  },
                  allocBuffer: function (t) {
                      if (Buffer.alloc) 
                          { return Buffer.alloc(t); }
                      var e = new Buffer(t);
                      return e.fill(0), e;
                  },
                  isBuffer: function (t) {
                      return Buffer.isBuffer(t);
                  },
                  isStream: function (t) {
                      return t && "function" == typeof t.on && "function" == typeof t.pause && "function" == typeof t.resume;
                  }
              };
          },{}],
          15: [function (t, e, r) {
              function s(t, e, r) {
                  var i, n = u.getTypeOf(e), s = u.extend(r || {}, f);
                  s.date = s.date || new Date(), null !== s.compression && (s.compression = s.compression.toUpperCase()), "string" == typeof s.unixPermissions && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (t = g(t)), s.createFolders && (i = _(t)) && b.call(this, i, !0);
                  var a = "string" === n && !1 === s.binary && !1 === s.base64;
                  r && void 0 !== r.binary || (s.binary = !a), (e instanceof d && 0 === e.uncompressedSize || s.dir || !e || 0 === e.length) && (s.base64 = !1, s.binary = !0, e = "", s.compression = "STORE", n = "string");
                  var o = null;
                  o = e instanceof d || e instanceof l ? e : p.isNode && p.isStream(e) ? new m(t, e) : u.prepareContent(t, e, s.binary, s.optimizedBinaryString, s.base64);
                  var h = new c(t, o, s);
                  this.files[t] = h;
              }
              
              var n = t("./utf8"), u = t("./utils"), l = t("./stream/GenericWorker"), a = t("./stream/StreamHelper"), f = t("./defaults"), d = t("./compressedObject"), c = t("./zipObject"), o = t("./generate"), p = t("./nodejsUtils"), m = t("./nodejs/NodejsStreamInputAdapter"), _ = function (t) {
                  "/" === t.slice(-1) && (t = t.substring(0, t.length - 1));
                  var e = t.lastIndexOf("/");
                  return 0 < e ? t.substring(0, e) : "";
              }, g = function (t) {
                  return "/" !== t.slice(-1) && (t += "/"), t;
              }, b = function (t, e) {
                  return e = void 0 !== e ? e : f.createFolders, t = g(t), this.files[t] || s.call(this, t, null, {
                      dir: !0,
                      createFolders: e
                  }), this.files[t];
              };
              function h(t) {
                  return "[object RegExp]" === Object.prototype.toString.call(t);
              }
              
              var i = {
                  load: function () {
                      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                  },
                  forEach: function (t) {
                      var e, r, i;
                      for (e in this.files) 
                          { i = this.files[e], (r = e.slice(this.root.length, e.length)) && e.slice(0, this.root.length) === this.root && t(r, i); }
                  },
                  filter: function (r) {
                      var i = [];
                      return this.forEach(function (t, e) {
                          r(t, e) && i.push(e);
                      }), i;
                  },
                  file: function (t, e, r) {
                      if (1 !== arguments.length) 
                          { return t = this.root + t, s.call(this, t, e, r), this; }
                      if (h(t)) {
                          var i = t;
                          return this.filter(function (t, e) {
                              return !e.dir && i.test(t);
                          });
                      }
                      var n = this.files[this.root + t];
                      return n && !n.dir ? n : null;
                  },
                  folder: function (r) {
                      if (!r) 
                          { return this; }
                      if (h(r)) 
                          { return this.filter(function (t, e) {
                          return e.dir && r.test(t);
                      }); }
                      var t = this.root + r, e = b.call(this, t), i = this.clone();
                      return i.root = e.name, i;
                  },
                  remove: function (r) {
                      r = this.root + r;
                      var t = this.files[r];
                      if (t || ("/" !== r.slice(-1) && (r += "/"), t = this.files[r]), t && !t.dir) 
                          { delete this.files[r]; }
                       else 
                          { for (var e = this.filter(function (t, e) {
                          return e.name.slice(0, r.length) === r;
                      }), i = 0;i < e.length; i++) 
                          { delete this.files[e[i].name]; } }
                      return this;
                  },
                  generate: function (t) {
                      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                  },
                  generateInternalStream: function (t) {
                      var e, r = {};
                      try {
                          if ((r = u.extend(t || {}, {
                              streamFiles: !1,
                              compression: "STORE",
                              compressionOptions: null,
                              type: "",
                              platform: "DOS",
                              comment: null,
                              mimeType: "application/zip",
                              encodeFileName: n.utf8encode
                          })).type = r.type.toLowerCase(), r.compression = r.compression.toUpperCase(), "binarystring" === r.type && (r.type = "string"), !r.type) 
                              { throw new Error("No output type specified."); }
                          u.checkSupport(r.type), "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"), "win32" === r.platform && (r.platform = "DOS");
                          var i = r.comment || this.comment || "";
                          e = o.generateWorker(this, r, i);
                      } catch (t$1) {
                          (e = new l("error")).error(t$1);
                      }
                      return new a(e, r.type || "string", r.mimeType);
                  },
                  generateAsync: function (t, e) {
                      return this.generateInternalStream(t).accumulate(e);
                  },
                  generateNodeStream: function (t, e) {
                      return (t = t || {}).type || (t.type = "nodebuffer"), this.generateInternalStream(t).toNodejsStream(e);
                  }
              };
              e.exports = i;
          },{
              "./compressedObject": 2,
              "./defaults": 5,
              "./generate": 9,
              "./nodejs/NodejsStreamInputAdapter": 12,
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
              "./utils": 32,
              "./zipObject": 35
          }],
          16: [function (t, e, r) {
              e.exports = t("stream");
          },{
              stream: void 0
          }],
          17: [function (t, e, r) {
              var i = t("./DataReader");
              function n(t) {
                  i.call(this, t);
                  for (var e = 0;e < this.data.length; e++) 
                      { t[e] = 255 & t[e]; }
              }
              
              t("../utils").inherits(n, i), n.prototype.byteAt = function (t) {
                  return this.data[this.zero + t];
              }, n.prototype.lastIndexOfSignature = function (t) {
                  for (var e = t.charCodeAt(0), r = t.charCodeAt(1), i = t.charCodeAt(2), n = t.charCodeAt(3), s = this.length - 4;0 <= s; --s) 
                      { if (this.data[s] === e && this.data[s + 1] === r && this.data[s + 2] === i && this.data[s + 3] === n) 
                      { return s - this.zero; } }
                  return -1;
              }, n.prototype.readAndCheckSignature = function (t) {
                  var e = t.charCodeAt(0), r = t.charCodeAt(1), i = t.charCodeAt(2), n = t.charCodeAt(3), s = this.readData(4);
                  return e === s[0] && r === s[1] && i === s[2] && n === s[3];
              }, n.prototype.readData = function (t) {
                  if (this.checkOffset(t), 0 === t) 
                      { return []; }
                  var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
                  return this.index += t, e;
              }, e.exports = n;
          },{
              "../utils": 32,
              "./DataReader": 18
          }],
          18: [function (t, e, r) {
              var i = t("../utils");
              function n(t) {
                  this.data = t, this.length = t.length, this.index = 0, this.zero = 0;
              }
              
              n.prototype = {
                  checkOffset: function (t) {
                      this.checkIndex(this.index + t);
                  },
                  checkIndex: function (t) {
                      if (this.length < this.zero + t || t < 0) 
                          { throw new Error("End of data reached (data length = " + this.length + ", asked index = " + t + "). Corrupted zip ?"); }
                  },
                  setIndex: function (t) {
                      this.checkIndex(t), this.index = t;
                  },
                  skip: function (t) {
                      this.setIndex(this.index + t);
                  },
                  byteAt: function (t) {},
                  readInt: function (t) {
                      var e, r = 0;
                      for (this.checkOffset(t), e = this.index + t - 1; e >= this.index; e--) 
                          { r = (r << 8) + this.byteAt(e); }
                      return this.index += t, r;
                  },
                  readString: function (t) {
                      return i.transformTo("string", this.readData(t));
                  },
                  readData: function (t) {},
                  lastIndexOfSignature: function (t) {},
                  readAndCheckSignature: function (t) {},
                  readDate: function () {
                      var t = this.readInt(4);
                      return new Date(Date.UTC(1980 + (t >> 25 & 127), (t >> 21 & 15) - 1, t >> 16 & 31, t >> 11 & 31, t >> 5 & 63, (31 & t) << 1));
                  }
              }, e.exports = n;
          },{
              "../utils": 32
          }],
          19: [function (t, e, r) {
              var i = t("./Uint8ArrayReader");
              function n(t) {
                  i.call(this, t);
              }
              
              t("../utils").inherits(n, i), n.prototype.readData = function (t) {
                  this.checkOffset(t);
                  var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
                  return this.index += t, e;
              }, e.exports = n;
          },{
              "../utils": 32,
              "./Uint8ArrayReader": 21
          }],
          20: [function (t, e, r) {
              var i = t("./DataReader");
              function n(t) {
                  i.call(this, t);
              }
              
              t("../utils").inherits(n, i), n.prototype.byteAt = function (t) {
                  return this.data.charCodeAt(this.zero + t);
              }, n.prototype.lastIndexOfSignature = function (t) {
                  return this.data.lastIndexOf(t) - this.zero;
              }, n.prototype.readAndCheckSignature = function (t) {
                  return t === this.readData(4);
              }, n.prototype.readData = function (t) {
                  this.checkOffset(t);
                  var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
                  return this.index += t, e;
              }, e.exports = n;
          },{
              "../utils": 32,
              "./DataReader": 18
          }],
          21: [function (t, e, r) {
              var i = t("./ArrayReader");
              function n(t) {
                  i.call(this, t);
              }
              
              t("../utils").inherits(n, i), n.prototype.readData = function (t) {
                  if (this.checkOffset(t), 0 === t) 
                      { return new Uint8Array(0); }
                  var e = this.data.subarray(this.zero + this.index, this.zero + this.index + t);
                  return this.index += t, e;
              }, e.exports = n;
          },{
              "../utils": 32,
              "./ArrayReader": 17
          }],
          22: [function (t, e, r) {
              var i = t("../utils"), n = t("../support"), s = t("./ArrayReader"), a = t("./StringReader"), o = t("./NodeBufferReader"), h = t("./Uint8ArrayReader");
              e.exports = function (t) {
                  var e = i.getTypeOf(t);
                  return i.checkSupport(e), "string" !== e || n.uint8array ? "nodebuffer" === e ? new o(t) : n.uint8array ? new h(i.transformTo("uint8array", t)) : new s(i.transformTo("array", t)) : new a(t);
              };
          },{
              "../support": 30,
              "../utils": 32,
              "./ArrayReader": 17,
              "./NodeBufferReader": 19,
              "./StringReader": 20,
              "./Uint8ArrayReader": 21
          }],
          23: [function (t, e, r) {
              r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\b";
          },{}],
          24: [function (t, e, r) {
              var i = t("./GenericWorker"), n = t("../utils");
              function s(t) {
                  i.call(this, "ConvertWorker to " + t), this.destType = t;
              }
              
              n.inherits(s, i), s.prototype.processChunk = function (t) {
                  this.push({
                      data: n.transformTo(this.destType, t.data),
                      meta: t.meta
                  });
              }, e.exports = s;
          },{
              "../utils": 32,
              "./GenericWorker": 28
          }],
          25: [function (t, e, r) {
              var i = t("./GenericWorker"), n = t("../crc32");
              function s() {
                  i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
              }
              
              t("../utils").inherits(s, i), s.prototype.processChunk = function (t) {
                  this.streamInfo.crc32 = n(t.data, this.streamInfo.crc32 || 0), this.push(t);
              }, e.exports = s;
          },{
              "../crc32": 4,
              "../utils": 32,
              "./GenericWorker": 28
          }],
          26: [function (t, e, r) {
              var i = t("../utils"), n = t("./GenericWorker");
              function s(t) {
                  n.call(this, "DataLengthProbe for " + t), this.propName = t, this.withStreamInfo(t, 0);
              }
              
              i.inherits(s, n), s.prototype.processChunk = function (t) {
                  if (t) {
                      var e = this.streamInfo[this.propName] || 0;
                      this.streamInfo[this.propName] = e + t.data.length;
                  }
                  n.prototype.processChunk.call(this, t);
              }, e.exports = s;
          },{
              "../utils": 32,
              "./GenericWorker": 28
          }],
          27: [function (t, e, r) {
              var i = t("../utils"), n = t("./GenericWorker");
              function s(t) {
                  n.call(this, "DataWorker");
                  var e = this;
                  this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, t.then(function (t) {
                      e.dataIsReady = !0, e.data = t, e.max = t && t.length || 0, e.type = i.getTypeOf(t), e.isPaused || e._tickAndRepeat();
                  }, function (t) {
                      e.error(t);
                  });
              }
              
              i.inherits(s, n), s.prototype.cleanUp = function () {
                  n.prototype.cleanUp.call(this), this.data = null;
              }, s.prototype.resume = function () {
                  return !(!n.prototype.resume.call(this)) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
              }, s.prototype._tickAndRepeat = function () {
                  this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
              }, s.prototype._tick = function () {
                  if (this.isPaused || this.isFinished) 
                      { return !1; }
                  var t = null, e = Math.min(this.max, this.index + 16384);
                  if (this.index >= this.max) 
                      { return this.end(); }
                  switch (this.type) {
                      case "string":
                          t = this.data.substring(this.index, e);
                          break;
                      case "uint8array":
                          t = this.data.subarray(this.index, e);
                          break;
                      case "array":
                      case "nodebuffer":
                          t = this.data.slice(this.index, e);
                  }
                  return this.index = e, this.push({
                      data: t,
                      meta: {
                          percent: this.max ? this.index / this.max * 100 : 0
                      }
                  });
              }, e.exports = s;
          },{
              "../utils": 32,
              "./GenericWorker": 28
          }],
          28: [function (t, e, r) {
              function i(t) {
                  this.name = t || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                      data: [],
                      end: [],
                      error: []
                  }, this.previous = null;
              }
              
              i.prototype = {
                  push: function (t) {
                      this.emit("data", t);
                  },
                  end: function () {
                      if (this.isFinished) 
                          { return !1; }
                      this.flush();
                      try {
                          this.emit("end"), this.cleanUp(), this.isFinished = !0;
                      } catch (t) {
                          this.emit("error", t);
                      }
                      return !0;
                  },
                  error: function (t) {
                      return !this.isFinished && (this.isPaused ? (this.generatedError = t) : (this.isFinished = !0, this.emit("error", t), this.previous && this.previous.error(t), this.cleanUp()), !0);
                  },
                  on: function (t, e) {
                      return this._listeners[t].push(e), this;
                  },
                  cleanUp: function () {
                      this.streamInfo = (this.generatedError = (this.extraStreamInfo = null)), this._listeners = [];
                  },
                  emit: function (t, e) {
                      if (this._listeners[t]) 
                          { for (var r = 0;r < this._listeners[t].length; r++) 
                          { this._listeners[t][r].call(this, e); } }
                  },
                  pipe: function (t) {
                      return t.registerPrevious(this);
                  },
                  registerPrevious: function (t) {
                      if (this.isLocked) 
                          { throw new Error("The stream '" + this + "' has already been used."); }
                      this.streamInfo = t.streamInfo, this.mergeStreamInfo(), this.previous = t;
                      var e = this;
                      return t.on("data", function (t) {
                          e.processChunk(t);
                      }), t.on("end", function () {
                          e.end();
                      }), t.on("error", function (t) {
                          e.error(t);
                      }), this;
                  },
                  pause: function () {
                      return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
                  },
                  resume: function () {
                      if (!this.isPaused || this.isFinished) 
                          { return !1; }
                      var t = this.isPaused = !1;
                      return this.generatedError && (this.error(this.generatedError), t = !0), this.previous && this.previous.resume(), !t;
                  },
                  flush: function () {},
                  processChunk: function (t) {
                      this.push(t);
                  },
                  withStreamInfo: function (t, e) {
                      return this.extraStreamInfo[t] = e, this.mergeStreamInfo(), this;
                  },
                  mergeStreamInfo: function () {
                      for (var t in this.extraStreamInfo) 
                          { this.extraStreamInfo.hasOwnProperty(t) && (this.streamInfo[t] = this.extraStreamInfo[t]); }
                  },
                  lock: function () {
                      if (this.isLocked) 
                          { throw new Error("The stream '" + this + "' has already been used."); }
                      this.isLocked = !0, this.previous && this.previous.lock();
                  },
                  toString: function () {
                      var t = "Worker " + this.name;
                      return this.previous ? this.previous + " -> " + t : t;
                  }
              }, e.exports = i;
          },{}],
          29: [function (t, e, r) {
              var h = t("../utils"), n = t("./ConvertWorker"), s = t("./GenericWorker"), u = t("../base64"), i = t("../support"), a = t("../external"), o = null;
              if (i.nodestream) {
                  try {
                      o = t("../nodejs/NodejsStreamOutputAdapter");
                  } catch (t$1) {}
              }
              function l(t, o) {
                  return new a.Promise(function (e, r) {
                      var i = [], n = t._internalType, s = t._outputType, a = t._mimeType;
                      t.on("data", function (t, e) {
                          i.push(t), o && o(e);
                      }).on("error", function (t) {
                          i = [], r(t);
                      }).on("end", function () {
                          try {
                              var t = (function (t, e, r) {
                                  switch (t) {
                                      case "blob":
                                          return h.newBlob(h.transformTo("arraybuffer", e), r);
                                      case "base64":
                                          return u.encode(e);
                                      default:
                                          return h.transformTo(t, e);
                                  }
                              })(s, (function (t, e) {
                                  var r, i = 0, n = null, s = 0;
                                  for (r = 0; r < e.length; r++) 
                                      { s += e[r].length; }
                                  switch (t) {
                                      case "string":
                                          return e.join("");
                                      case "array":
                                          return Array.prototype.concat.apply([], e);
                                      case "uint8array":
                                          for (n = new Uint8Array(s), r = 0; r < e.length; r++) 
                                              { n.set(e[r], i), i += e[r].length; }
                                          return n;
                                      case "nodebuffer":
                                          return Buffer.concat(e);
                                      default:
                                          throw new Error("concat : unsupported type '" + t + "'");
                                  }
                              })(n, i), a);
                              e(t);
                          } catch (t$1) {
                              r(t$1);
                          }
                          i = [];
                      }).resume();
                  });
              }
              
              function f(t, e, r) {
                  var i = e;
                  switch (e) {
                      case "blob":
                      case "arraybuffer":
                          i = "uint8array";
                          break;
                      case "base64":
                          i = "string";
                  }
                  try {
                      this._internalType = i, this._outputType = e, this._mimeType = r, h.checkSupport(i), this._worker = t.pipe(new n(i)), t.lock();
                  } catch (t$1) {
                      this._worker = new s("error"), this._worker.error(t$1);
                  }
              }
              
              f.prototype = {
                  accumulate: function (t) {
                      return l(this, t);
                  },
                  on: function (t, e) {
                      var r = this;
                      return "data" === t ? this._worker.on(t, function (t) {
                          e.call(r, t.data, t.meta);
                      }) : this._worker.on(t, function () {
                          h.delay(e, arguments, r);
                      }), this;
                  },
                  resume: function () {
                      return h.delay(this._worker.resume, [], this._worker), this;
                  },
                  pause: function () {
                      return this._worker.pause(), this;
                  },
                  toNodejsStream: function (t) {
                      if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) 
                          { throw new Error(this._outputType + " is not supported by this method"); }
                      return new o(this, {
                          objectMode: "nodebuffer" !== this._outputType
                      }, t);
                  }
              }, e.exports = f;
          },{
              "../base64": 1,
              "../external": 6,
              "../nodejs/NodejsStreamOutputAdapter": 13,
              "../support": 30,
              "../utils": 32,
              "./ConvertWorker": 24,
              "./GenericWorker": 28
          }],
          30: [function (t, e, r) {
              if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) 
                  { r.blob = !1; }
               else {
                  var i = new ArrayBuffer(0);
                  try {
                      r.blob = 0 === new Blob([i], {
                          type: "application/zip"
                      }).size;
                  } catch (t$1) {
                      try {
                          var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                          n.append(i), r.blob = 0 === n.getBlob("application/zip").size;
                      } catch (t$2) {
                          r.blob = !1;
                      }
                  }
              }
              try {
                  r.nodestream = !(!t("readable-stream").Readable);
              } catch (t$3) {
                  r.nodestream = !1;
              }
          },{
              "readable-stream": 16
          }],
          31: [function (t, e, s) {
              for (var o = t("./utils"), h = t("./support"), r = t("./nodejsUtils"), i = t("./stream/GenericWorker"), u = new Array(256), n = 0;n < 256; n++) 
                  { u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1; }
              u[254] = (u[254] = 1);
              function a() {
                  i.call(this, "utf-8 decode"), this.leftOver = null;
              }
              
              function l() {
                  i.call(this, "utf-8 encode");
              }
              
              s.utf8encode = function (t) {
                  return h.nodebuffer ? r.newBufferFrom(t, "utf-8") : (function (t) {
                      var e, r, i, n, s, a = t.length, o = 0;
                      for (n = 0; n < a; n++) 
                          { 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4; }
                      for (e = h.uint8array ? new Uint8Array(o) : new Array(o), n = (s = 0); s < o; n++) 
                          { 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), r < 128 ? (e[s++] = r) : (r < 2048 ? (e[s++] = 192 | r >>> 6) : (r < 65536 ? (e[s++] = 224 | r >>> 12) : (e[s++] = 240 | r >>> 18, e[s++] = 128 | r >>> 12 & 63), e[s++] = 128 | r >>> 6 & 63), e[s++] = 128 | 63 & r); }
                      return e;
                  })(t);
              }, s.utf8decode = function (t) {
                  return h.nodebuffer ? o.transformTo("nodebuffer", t).toString("utf-8") : (function (t) {
                      var e, r, i, n, s = t.length, a = new Array(2 * s);
                      for (e = (r = 0); e < s; ) 
                          { if ((i = t[e++]) < 128) 
                          { a[r++] = i; }
                       else if (4 < (n = u[i])) 
                          { a[r++] = 65533, e += n - 1; }
                       else {
                          for (i &= 2 === n ? 31 : 3 === n ? 15 : 7; 1 < n && e < s; ) 
                              { i = i << 6 | 63 & t[e++], n--; }
                          1 < n ? (a[r++] = 65533) : i < 65536 ? (a[r++] = i) : (i -= 65536, a[r++] = 55296 | i >> 10 & 1023, a[r++] = 56320 | 1023 & i);
                      } }
                      return a.length !== r && (a.subarray ? (a = a.subarray(0, r)) : (a.length = r)), o.applyFromCharCode(a);
                  })(t = o.transformTo(h.uint8array ? "uint8array" : "array", t));
              }, o.inherits(a, i), a.prototype.processChunk = function (t) {
                  var e = o.transformTo(h.uint8array ? "uint8array" : "array", t.data);
                  if (this.leftOver && this.leftOver.length) {
                      if (h.uint8array) {
                          var r = e;
                          (e = new Uint8Array(r.length + this.leftOver.length)).set(this.leftOver, 0), e.set(r, this.leftOver.length);
                      } else 
                          { e = this.leftOver.concat(e); }
                      this.leftOver = null;
                  }
                  var i = (function (t, e) {
                      var r;
                      for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; 0 <= r && 128 == (192 & t[r]); ) 
                          { r--; }
                      return r < 0 ? e : 0 === r ? e : r + u[t[r]] > e ? r : e;
                  })(e), n = e;
                  i !== e.length && (h.uint8array ? (n = e.subarray(0, i), this.leftOver = e.subarray(i, e.length)) : (n = e.slice(0, i), this.leftOver = e.slice(i, e.length))), this.push({
                      data: s.utf8decode(n),
                      meta: t.meta
                  });
              }, a.prototype.flush = function () {
                  this.leftOver && this.leftOver.length && (this.push({
                      data: s.utf8decode(this.leftOver),
                      meta: {}
                  }), this.leftOver = null);
              }, s.Utf8DecodeWorker = a, o.inherits(l, i), l.prototype.processChunk = function (t) {
                  this.push({
                      data: s.utf8encode(t.data),
                      meta: t.meta
                  });
              }, s.Utf8EncodeWorker = l;
          },{
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./support": 30,
              "./utils": 32
          }],
          32: [function (t, e, a) {
              var o = t("./support"), h = t("./base64"), r = t("./nodejsUtils"), i = t("set-immediate-shim"), u = t("./external");
              function n(t) {
                  return t;
              }
              
              function l(t, e) {
                  for (var r = 0;r < t.length; ++r) 
                      { e[r] = 255 & t.charCodeAt(r); }
                  return e;
              }
              
              a.newBlob = function (e, r) {
                  a.checkSupport("blob");
                  try {
                      return new Blob([e], {
                          type: r
                      });
                  } catch (t) {
                      try {
                          var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                          return i.append(e), i.getBlob(r);
                      } catch (t$1) {
                          throw new Error("Bug : can't construct the Blob.");
                      }
                  }
              };
              var s = {
                  stringifyByChunk: function (t, e, r) {
                      var i = [], n = 0, s = t.length;
                      if (s <= r) 
                          { return String.fromCharCode.apply(null, t); }
                      for (; n < s; ) 
                          { "array" === e || "nodebuffer" === e ? i.push(String.fromCharCode.apply(null, t.slice(n, Math.min(n + r, s)))) : i.push(String.fromCharCode.apply(null, t.subarray(n, Math.min(n + r, s)))), n += r; }
                      return i.join("");
                  },
                  stringifyByChar: function (t) {
                      for (var e = "", r = 0;r < t.length; r++) 
                          { e += String.fromCharCode(t[r]); }
                      return e;
                  },
                  applyCanBeUsed: {
                      uint8array: (function () {
                          try {
                              return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
                          } catch (t) {
                              return !1;
                          }
                      })(),
                      nodebuffer: (function () {
                          try {
                              return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
                          } catch (t) {
                              return !1;
                          }
                      })()
                  }
              };
              function f(t) {
                  var e = 65536, r = a.getTypeOf(t), i = !0;
                  if ("uint8array" === r ? (i = s.applyCanBeUsed.uint8array) : "nodebuffer" === r && (i = s.applyCanBeUsed.nodebuffer), i) 
                      { for (; 1 < e; ) {
                      try {
                          return s.stringifyByChunk(t, r, e);
                      } catch (t$1) {
                          e = Math.floor(e / 2);
                      }
                  } }
                  return s.stringifyByChar(t);
              }
              
              function d(t, e) {
                  for (var r = 0;r < t.length; r++) 
                      { e[r] = t[r]; }
                  return e;
              }
              
              a.applyFromCharCode = f;
              var c = {};
              c.string = {
                  string: n,
                  array: function (t) {
                      return l(t, new Array(t.length));
                  },
                  arraybuffer: function (t) {
                      return c.string.uint8array(t).buffer;
                  },
                  uint8array: function (t) {
                      return l(t, new Uint8Array(t.length));
                  },
                  nodebuffer: function (t) {
                      return l(t, r.allocBuffer(t.length));
                  }
              }, c.array = {
                  string: f,
                  array: n,
                  arraybuffer: function (t) {
                      return new Uint8Array(t).buffer;
                  },
                  uint8array: function (t) {
                      return new Uint8Array(t);
                  },
                  nodebuffer: function (t) {
                      return r.newBufferFrom(t);
                  }
              }, c.arraybuffer = {
                  string: function (t) {
                      return f(new Uint8Array(t));
                  },
                  array: function (t) {
                      return d(new Uint8Array(t), new Array(t.byteLength));
                  },
                  arraybuffer: n,
                  uint8array: function (t) {
                      return new Uint8Array(t);
                  },
                  nodebuffer: function (t) {
                      return r.newBufferFrom(new Uint8Array(t));
                  }
              }, c.uint8array = {
                  string: f,
                  array: function (t) {
                      return d(t, new Array(t.length));
                  },
                  arraybuffer: function (t) {
                      return t.buffer;
                  },
                  uint8array: n,
                  nodebuffer: function (t) {
                      return r.newBufferFrom(t);
                  }
              }, c.nodebuffer = {
                  string: f,
                  array: function (t) {
                      return d(t, new Array(t.length));
                  },
                  arraybuffer: function (t) {
                      return c.nodebuffer.uint8array(t).buffer;
                  },
                  uint8array: function (t) {
                      return d(t, new Uint8Array(t.length));
                  },
                  nodebuffer: n
              }, a.transformTo = function (t, e) {
                  if (e = e || "", !t) 
                      { return e; }
                  a.checkSupport(t);
                  var r = a.getTypeOf(e);
                  return c[r][t](e);
              }, a.getTypeOf = function (t) {
                  return "string" == typeof t ? "string" : "[object Array]" === Object.prototype.toString.call(t) ? "array" : o.nodebuffer && r.isBuffer(t) ? "nodebuffer" : o.uint8array && t instanceof Uint8Array ? "uint8array" : o.arraybuffer && t instanceof ArrayBuffer ? "arraybuffer" : void 0;
              }, a.checkSupport = function (t) {
                  if (!o[t.toLowerCase()]) 
                      { throw new Error(t + " is not supported by this platform"); }
              }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function (t) {
                  var e, r, i = "";
                  for (r = 0; r < (t || "").length; r++) 
                      { i += "\\x" + ((e = t.charCodeAt(r)) < 16 ? "0" : "") + e.toString(16).toUpperCase(); }
                  return i;
              }, a.delay = function (t, e, r) {
                  i(function () {
                      t.apply(r || null, e || []);
                  });
              }, a.inherits = function (t, e) {
                  function r() {}
                  
                  r.prototype = e.prototype, t.prototype = new r();
              }, a.extend = function () {
                  var arguments$1 = arguments;

                  var t, e, r = {};
                  for (t = 0; t < arguments.length; t++) 
                      { for (e in arguments[t]) 
                      { arguments$1[t].hasOwnProperty(e) && void 0 === r[e] && (r[e] = arguments$1[t][e]); } }
                  return r;
              }, a.prepareContent = function (r, t, i, n, s) {
                  return u.Promise.resolve(t).then(function (i) {
                      return o.blob && (i instanceof Blob || -1 !== ["[object File]",
                          "[object Blob]"].indexOf(Object.prototype.toString.call(i))) && "undefined" != typeof FileReader ? new u.Promise(function (e, r) {
                          var t = new FileReader();
                          t.onload = function (t) {
                              e(t.target.result);
                          }, t.onerror = function (t) {
                              r(t.target.error);
                          }, t.readAsArrayBuffer(i);
                      }) : i;
                  }).then(function (t) {
                      var e = a.getTypeOf(t);
                      return e ? ("arraybuffer" === e ? (t = a.transformTo("uint8array", t)) : "string" === e && (s ? (t = h.decode(t)) : i && !0 !== n && (t = (function (t) {
                          return l(t, o.uint8array ? new Uint8Array(t.length) : new Array(t.length));
                      })(t))), t) : u.Promise.reject(new Error("Can't read the data of '" + r + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
                  });
              };
          },{
              "./base64": 1,
              "./external": 6,
              "./nodejsUtils": 14,
              "./support": 30,
              "set-immediate-shim": 54
          }],
          33: [function (t, e, r) {
              var i = t("./reader/readerFor"), n = t("./utils"), s = t("./signature"), a = t("./zipEntry"), o = (t("./utf8"), t("./support"));
              function h(t) {
                  this.files = [], this.loadOptions = t;
              }
              
              h.prototype = {
                  checkSignature: function (t) {
                      if (!this.reader.readAndCheckSignature(t)) {
                          this.reader.index -= 4;
                          var e = this.reader.readString(4);
                          throw new Error("Corrupted zip or bug: unexpected signature (" + n.pretty(e) + ", expected " + n.pretty(t) + ")");
                      }
                  },
                  isSignature: function (t, e) {
                      var r = this.reader.index;
                      this.reader.setIndex(t);
                      var i = this.reader.readString(4) === e;
                      return this.reader.setIndex(r), i;
                  },
                  readBlockEndOfCentral: function () {
                      this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                      var t = this.reader.readData(this.zipCommentLength), e = o.uint8array ? "uint8array" : "array", r = n.transformTo(e, t);
                      this.zipComment = this.loadOptions.decodeFileName(r);
                  },
                  readBlockZip64EndOfCentral: function () {
                      this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                      for (var t, e, r, i = this.zip64EndOfCentralSize - 44;0 < i; ) 
                          { t = this.reader.readInt(2), e = this.reader.readInt(4), r = this.reader.readData(e), this.zip64ExtensibleData[t] = {
                          id: t,
                          length: e,
                          value: r
                      }; }
                  },
                  readBlockZip64EndOfCentralLocator: function () {
                      if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) 
                          { throw new Error("Multi-volumes zip are not supported"); }
                  },
                  readLocalFiles: function () {
                      var t, e;
                      for (t = 0; t < this.files.length; t++) 
                          { e = this.files[t], this.reader.setIndex(e.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), e.readLocalPart(this.reader), e.handleUTF8(), e.processAttributes(); }
                  },
                  readCentralDir: function () {
                      var t;
                      for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) 
                          { (t = new a({
                          zip64: this.zip64
                      }, this.loadOptions)).readCentralPart(this.reader), this.files.push(t); }
                      if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) 
                          { throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length); }
                  },
                  readEndOfCentral: function () {
                      var t = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
                      if (t < 0) 
                          { throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory"); }
                      this.reader.setIndex(t);
                      var e = t;
                      if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === n.MAX_VALUE_16BITS || this.diskWithCentralDirStart === n.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === n.MAX_VALUE_16BITS || this.centralDirRecords === n.MAX_VALUE_16BITS || this.centralDirSize === n.MAX_VALUE_32BITS || this.centralDirOffset === n.MAX_VALUE_32BITS) {
                          if (this.zip64 = !0, (t = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) 
                              { throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator"); }
                          if (this.reader.setIndex(t), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) 
                              { throw new Error("Corrupted zip: can't find the ZIP64 end of central directory"); }
                          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
                      }
                      var r = this.centralDirOffset + this.centralDirSize;
                      this.zip64 && (r += 20, r += 12 + this.zip64EndOfCentralSize);
                      var i = e - r;
                      if (0 < i) 
                          { this.isSignature(e, s.CENTRAL_FILE_HEADER) || (this.reader.zero = i); }
                       else if (i < 0) 
                          { throw new Error("Corrupted zip: missing " + Math.abs(i) + " bytes."); }
                  },
                  prepareReader: function (t) {
                      this.reader = i(t);
                  },
                  load: function (t) {
                      this.prepareReader(t), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
                  }
              }, e.exports = h;
          },{
              "./reader/readerFor": 22,
              "./signature": 23,
              "./support": 30,
              "./utf8": 31,
              "./utils": 32,
              "./zipEntry": 34
          }],
          34: [function (t, e, r) {
              var i = t("./reader/readerFor"), s = t("./utils"), n = t("./compressedObject"), a = t("./crc32"), o = t("./utf8"), h = t("./compressions"), u = t("./support");
              function l(t, e) {
                  this.options = t, this.loadOptions = e;
              }
              
              l.prototype = {
                  isEncrypted: function () {
                      return 1 == (1 & this.bitFlag);
                  },
                  useUTF8: function () {
                      return 2048 == (2048 & this.bitFlag);
                  },
                  readLocalPart: function (t) {
                      var e, r;
                      if (t.skip(22), this.fileNameLength = t.readInt(2), r = t.readInt(2), this.fileName = t.readData(this.fileNameLength), t.skip(r), -1 === this.compressedSize || -1 === this.uncompressedSize) 
                          { throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"); }
                      if (null === (e = (function (t) {
                          for (var e in h) 
                              { if (h.hasOwnProperty(e) && h[e].magic === t) 
                              { return h[e]; } }
                          return null;
                      })(this.compressionMethod))) 
                          { throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")"); }
                      this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, e, t.readData(this.compressedSize));
                  },
                  readCentralPart: function (t) {
                      this.versionMadeBy = t.readInt(2), t.skip(2), this.bitFlag = t.readInt(2), this.compressionMethod = t.readString(2), this.date = t.readDate(), this.crc32 = t.readInt(4), this.compressedSize = t.readInt(4), this.uncompressedSize = t.readInt(4);
                      var e = t.readInt(2);
                      if (this.extraFieldsLength = t.readInt(2), this.fileCommentLength = t.readInt(2), this.diskNumberStart = t.readInt(2), this.internalFileAttributes = t.readInt(2), this.externalFileAttributes = t.readInt(4), this.localHeaderOffset = t.readInt(4), this.isEncrypted()) 
                          { throw new Error("Encrypted zip are not supported"); }
                      t.skip(e), this.readExtraFields(t), this.parseZIP64ExtraField(t), this.fileComment = t.readData(this.fileCommentLength);
                  },
                  processAttributes: function () {
                      this.unixPermissions = null, this.dosPermissions = null;
                      var t = this.versionMadeBy >> 8;
                      this.dir = !(!(16 & this.externalFileAttributes)), 0 == t && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == t && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
                  },
                  parseZIP64ExtraField: function (t) {
                      if (this.extraFields[1]) {
                          var e = i(this.extraFields[1].value);
                          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
                      }
                  },
                  readExtraFields: function (t) {
                      var e, r, i, n = t.index + this.extraFieldsLength;
                      for (this.extraFields || (this.extraFields = {}); t.index + 4 < n; ) 
                          { e = t.readInt(2), r = t.readInt(2), i = t.readData(r), this.extraFields[e] = {
                          id: e,
                          length: r,
                          value: i
                      }; }
                      t.setIndex(n);
                  },
                  handleUTF8: function () {
                      var t = u.uint8array ? "uint8array" : "array";
                      if (this.useUTF8()) 
                          { this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment); }
                       else {
                          var e = this.findExtraFieldUnicodePath();
                          if (null !== e) 
                              { this.fileNameStr = e; }
                           else {
                              var r = s.transformTo(t, this.fileName);
                              this.fileNameStr = this.loadOptions.decodeFileName(r);
                          }
                          var i = this.findExtraFieldUnicodeComment();
                          if (null !== i) 
                              { this.fileCommentStr = i; }
                           else {
                              var n = s.transformTo(t, this.fileComment);
                              this.fileCommentStr = this.loadOptions.decodeFileName(n);
                          }
                      }
                  },
                  findExtraFieldUnicodePath: function () {
                      var t = this.extraFields[28789];
                      if (t) {
                          var e = i(t.value);
                          return 1 !== e.readInt(1) ? null : a(this.fileName) !== e.readInt(4) ? null : o.utf8decode(e.readData(t.length - 5));
                      }
                      return null;
                  },
                  findExtraFieldUnicodeComment: function () {
                      var t = this.extraFields[25461];
                      if (t) {
                          var e = i(t.value);
                          return 1 !== e.readInt(1) ? null : a(this.fileComment) !== e.readInt(4) ? null : o.utf8decode(e.readData(t.length - 5));
                      }
                      return null;
                  }
              }, e.exports = l;
          },{
              "./compressedObject": 2,
              "./compressions": 3,
              "./crc32": 4,
              "./reader/readerFor": 22,
              "./support": 30,
              "./utf8": 31,
              "./utils": 32
          }],
          35: [function (t, e, r) {
              function i(t, e, r) {
                  this.name = t, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = e, this._dataBinary = r.binary, this.options = {
                      compression: r.compression,
                      compressionOptions: r.compressionOptions
                  };
              }
              
              var s = t("./stream/StreamHelper"), n = t("./stream/DataWorker"), a = t("./utf8"), o = t("./compressedObject"), h = t("./stream/GenericWorker");
              i.prototype = {
                  internalStream: function (t) {
                      var e = null, r = "string";
                      try {
                          if (!t) 
                              { throw new Error("No output type specified."); }
                          var i = "string" === (r = t.toLowerCase()) || "text" === r;
                          "binarystring" !== r && "text" !== r || (r = "string"), e = this._decompressWorker();
                          var n = !this._dataBinary;
                          n && !i && (e = e.pipe(new a.Utf8EncodeWorker())), !n && i && (e = e.pipe(new a.Utf8DecodeWorker()));
                      } catch (t$1) {
                          (e = new h("error")).error(t$1);
                      }
                      return new s(e, r, "");
                  },
                  async: function (t, e) {
                      return this.internalStream(t).accumulate(e);
                  },
                  nodeStream: function (t, e) {
                      return this.internalStream(t || "nodebuffer").toNodejsStream(e);
                  },
                  _compressWorker: function (t, e) {
                      if (this._data instanceof o && this._data.compression.magic === t.magic) 
                          { return this._data.getCompressedWorker(); }
                      var r = this._decompressWorker();
                      return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r, t, e);
                  },
                  _decompressWorker: function () {
                      return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new n(this._data);
                  }
              };
              for (var u = ["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"], l = function () {
                  throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
              }, f = 0;f < u.length; f++) 
                  { i.prototype[u[f]] = l; }
              e.exports = i;
          },{
              "./compressedObject": 2,
              "./stream/DataWorker": 27,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31
          }],
          36: [function (t, l, e) {
              (function (e) {
                  var r, i, t = e.MutationObserver || e.WebKitMutationObserver;
                  if (t) {
                      var n = 0, s = new t(u), a = e.document.createTextNode("");
                      s.observe(a, {
                          characterData: !0
                      }), r = function () {
                          a.data = (n = ++n % 2);
                      };
                  } else if (e.setImmediate || void 0 === e.MessageChannel) 
                      { r = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
                      var t = e.document.createElement("script");
                      t.onreadystatechange = function () {
                          u(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
                      }, e.document.documentElement.appendChild(t);
                  } : function () {
                      setTimeout(u, 0);
                  }; }
                   else {
                      var o = new e.MessageChannel();
                      o.port1.onmessage = u, r = function () {
                          o.port2.postMessage(0);
                      };
                  }
                  var h = [];
                  function u() {
                      var t, e;
                      i = !0;
                      for (var r = h.length;r; ) {
                          for (e = h, h = [], t = -1; ++t < r; ) 
                              { e[t](); }
                          r = h.length;
                      }
                      i = !1;
                  }
                  
                  l.exports = function (t) {
                      1 !== h.push(t) || i || r();
                  };
              }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
          },{}],
          37: [function (t, e, r) {
              var n = t("immediate");
              function u() {}
              
              var l = {}, s = ["REJECTED"], a = ["FULFILLED"], i = ["PENDING"];
              function o(t) {
                  if ("function" != typeof t) 
                      { throw new TypeError("resolver must be a function"); }
                  this.state = i, this.queue = [], this.outcome = void 0, t !== u && c(this, t);
              }
              
              function h(t, e, r) {
                  this.promise = t, "function" == typeof e && (this.onFulfilled = e, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected);
              }
              
              function f(e, r, i) {
                  n(function () {
                      var t;
                      try {
                          t = r(i);
                      } catch (t$1) {
                          return l.reject(e, t$1);
                      }
                      t === e ? l.reject(e, new TypeError("Cannot resolve promise with itself")) : l.resolve(e, t);
                  });
              }
              
              function d(t) {
                  var e = t && t.then;
                  if (t && ("object" == typeof t || "function" == typeof t) && "function" == typeof e) 
                      { return function () {
                      e.apply(t, arguments);
                  }; }
              }
              
              function c(e, t) {
                  var r = !1;
                  function i(t) {
                      r || (r = !0, l.reject(e, t));
                  }
                  
                  function n(t) {
                      r || (r = !0, l.resolve(e, t));
                  }
                  
                  var s = p(function () {
                      t(n, i);
                  });
                  "error" === s.status && i(s.value);
              }
              
              function p(t, e) {
                  var r = {};
                  try {
                      r.value = t(e), r.status = "success";
                  } catch (t$1) {
                      r.status = "error", r.value = t$1;
                  }
                  return r;
              }
              
              (e.exports = o).prototype.finally = function (e) {
                  if ("function" != typeof e) 
                      { return this; }
                  var r = this.constructor;
                  return this.then(function (t) {
                      return r.resolve(e()).then(function () {
                          return t;
                      });
                  }, function (t) {
                      return r.resolve(e()).then(function () {
                          throw t;
                      });
                  });
              }, o.prototype.catch = function (t) {
                  return this.then(null, t);
              }, o.prototype.then = function (t, e) {
                  if ("function" != typeof t && this.state === a || "function" != typeof e && this.state === s) 
                      { return this; }
                  var r = new this.constructor(u);
                  this.state !== i ? f(r, this.state === a ? t : e, this.outcome) : this.queue.push(new h(r, t, e));
                  return r;
              }, h.prototype.callFulfilled = function (t) {
                  l.resolve(this.promise, t);
              }, h.prototype.otherCallFulfilled = function (t) {
                  f(this.promise, this.onFulfilled, t);
              }, h.prototype.callRejected = function (t) {
                  l.reject(this.promise, t);
              }, h.prototype.otherCallRejected = function (t) {
                  f(this.promise, this.onRejected, t);
              }, l.resolve = function (t, e) {
                  var r = p(d, e);
                  if ("error" === r.status) 
                      { return l.reject(t, r.value); }
                  var i = r.value;
                  if (i) 
                      { c(t, i); }
                   else {
                      t.state = a, t.outcome = e;
                      for (var n = -1, s = t.queue.length;++n < s; ) 
                          { t.queue[n].callFulfilled(e); }
                  }
                  return t;
              }, l.reject = function (t, e) {
                  t.state = s, t.outcome = e;
                  for (var r = -1, i = t.queue.length;++r < i; ) 
                      { t.queue[r].callRejected(e); }
                  return t;
              }, o.resolve = function (t) {
                  if (t instanceof this) 
                      { return t; }
                  return l.resolve(new this(u), t);
              }, o.reject = function (t) {
                  var e = new this(u);
                  return l.reject(e, t);
              }, o.all = function (t) {
                  var r = this;
                  if ("[object Array]" !== Object.prototype.toString.call(t)) 
                      { return this.reject(new TypeError("must be an array")); }
                  var i = t.length, n = !1;
                  if (!i) 
                      { return this.resolve([]); }
                  var s = new Array(i), a = 0, e = -1, o = new this(u);
                  for (; ++e < i; ) 
                      { h(t[e], e); }
                  return o;
                  function h(t, e) {
                      r.resolve(t).then(function (t) {
                          s[e] = t, ++a !== i || n || (n = !0, l.resolve(o, s));
                      }, function (t) {
                          n || (n = !0, l.reject(o, t));
                      });
                  }
                  
              }, o.race = function (t) {
                  var e = this;
                  if ("[object Array]" !== Object.prototype.toString.call(t)) 
                      { return this.reject(new TypeError("must be an array")); }
                  var r = t.length, i = !1;
                  if (!r) 
                      { return this.resolve([]); }
                  var n = -1, s = new this(u);
                  for (; ++n < r; ) 
                      { a = t[n], e.resolve(a).then(function (t) {
                      i || (i = !0, l.resolve(s, t));
                  }, function (t) {
                      i || (i = !0, l.reject(s, t));
                  }); }
                  var a;
                  return s;
              };
          },{
              immediate: 36
          }],
          38: [function (t, e, r) {
              var i = {};
              (0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), e.exports = i;
          },{
              "./lib/deflate": 39,
              "./lib/inflate": 40,
              "./lib/utils/common": 41,
              "./lib/zlib/constants": 44
          }],
          39: [function (t, e, r) {
              var a = t("./zlib/deflate"), o = t("./utils/common"), h = t("./utils/strings"), n = t("./zlib/messages"), s = t("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, d = 0, c = 8;
              function p(t) {
                  if (!(this instanceof p)) 
                      { return new p(t); }
                  this.options = o.assign({
                      level: f,
                      method: c,
                      chunkSize: 16384,
                      windowBits: 15,
                      memLevel: 8,
                      strategy: d,
                      to: ""
                  }, t || {});
                  var e = this.options;
                  e.raw && 0 < e.windowBits ? (e.windowBits = -e.windowBits) : e.gzip && 0 < e.windowBits && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
                  var r = a.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
                  if (r !== l) 
                      { throw new Error(n[r]); }
                  if (e.header && a.deflateSetHeader(this.strm, e.header), e.dictionary) {
                      var i;
                      if (i = "string" == typeof e.dictionary ? h.string2buf(e.dictionary) : "[object ArrayBuffer]" === u.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (r = a.deflateSetDictionary(this.strm, i)) !== l) 
                          { throw new Error(n[r]); }
                      this._dict_set = !0;
                  }
              }
              
              function i(t, e) {
                  var r = new p(e);
                  if (r.push(t, !0), r.err) 
                      { throw r.msg || n[r.err]; }
                  return r.result;
              }
              
              p.prototype.push = function (t, e) {
                  var r, i, n = this.strm, s = this.options.chunkSize;
                  if (this.ended) 
                      { return !1; }
                  i = e === ~(~e) ? e : !0 === e ? 4 : 0, "string" == typeof t ? (n.input = h.string2buf(t)) : "[object ArrayBuffer]" === u.call(t) ? (n.input = new Uint8Array(t)) : (n.input = t), n.next_in = 0, n.avail_in = n.input.length;
                  do {
                      if (0 === n.avail_out && (n.output = new o.Buf8(s), n.next_out = 0, n.avail_out = s), 1 !== (r = a.deflate(n, i)) && r !== l) 
                          { return this.onEnd(r), !(this.ended = !0); }
                      0 !== n.avail_out && (0 !== n.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(n.output, n.next_out))) : this.onData(o.shrinkBuf(n.output, n.next_out)));
                  } while ((0 < n.avail_in || 0 === n.avail_out) && 1 !== r);
                  return 4 === i ? (r = a.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === l) : 2 !== i || (this.onEnd(l), !(n.avail_out = 0));
              }, p.prototype.onData = function (t) {
                  this.chunks.push(t);
              }, p.prototype.onEnd = function (t) {
                  t === l && ("string" === this.options.to ? (this.result = this.chunks.join("")) : (this.result = o.flattenChunks(this.chunks))), this.chunks = [], this.err = t, this.msg = this.strm.msg;
              }, r.Deflate = p, r.deflate = i, r.deflateRaw = function (t, e) {
                  return (e = e || {}).raw = !0, i(t, e);
              }, r.gzip = function (t, e) {
                  return (e = e || {}).gzip = !0, i(t, e);
              };
          },{
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/deflate": 46,
              "./zlib/messages": 51,
              "./zlib/zstream": 53
          }],
          40: [function (t, e, r) {
              var d = t("./zlib/inflate"), c = t("./utils/common"), p = t("./utils/strings"), m = t("./zlib/constants"), i = t("./zlib/messages"), n = t("./zlib/zstream"), s = t("./zlib/gzheader"), _ = Object.prototype.toString;
              function a(t) {
                  if (!(this instanceof a)) 
                      { return new a(t); }
                  this.options = c.assign({
                      chunkSize: 16384,
                      windowBits: 0,
                      to: ""
                  }, t || {});
                  var e = this.options;
                  e.raw && 0 <= e.windowBits && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(0 <= e.windowBits && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), 15 < e.windowBits && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new n(), this.strm.avail_out = 0;
                  var r = d.inflateInit2(this.strm, e.windowBits);
                  if (r !== m.Z_OK) 
                      { throw new Error(i[r]); }
                  this.header = new s(), d.inflateGetHeader(this.strm, this.header);
              }
              
              function o(t, e) {
                  var r = new a(e);
                  if (r.push(t, !0), r.err) 
                      { throw r.msg || i[r.err]; }
                  return r.result;
              }
              
              a.prototype.push = function (t, e) {
                  var r, i, n, s, a, o, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = !1;
                  if (this.ended) 
                      { return !1; }
                  i = e === ~(~e) ? e : !0 === e ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof t ? (h.input = p.binstring2buf(t)) : "[object ArrayBuffer]" === _.call(t) ? (h.input = new Uint8Array(t)) : (h.input = t), h.next_in = 0, h.avail_in = h.input.length;
                  do {
                      if (0 === h.avail_out && (h.output = new c.Buf8(u), h.next_out = 0, h.avail_out = u), (r = d.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r = d.inflateSetDictionary(this.strm, o)), r === m.Z_BUF_ERROR && !0 === f && (r = m.Z_OK, f = !1), r !== m.Z_STREAM_END && r !== m.Z_OK) 
                          { return this.onEnd(r), !(this.ended = !0); }
                      h.next_out && (0 !== h.avail_out && r !== m.Z_STREAM_END && (0 !== h.avail_in || i !== m.Z_FINISH && i !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n = p.utf8border(h.output, h.next_out), s = h.next_out - n, a = p.buf2string(h.output, n), h.next_out = s, h.avail_out = u - s, s && c.arraySet(h.output, h.output, n, s, 0), this.onData(a)) : this.onData(c.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = !0);
                  } while ((0 < h.avail_in || 0 === h.avail_out) && r !== m.Z_STREAM_END);
                  return r === m.Z_STREAM_END && (i = m.Z_FINISH), i === m.Z_FINISH ? (r = d.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === m.Z_OK) : i !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
              }, a.prototype.onData = function (t) {
                  this.chunks.push(t);
              }, a.prototype.onEnd = function (t) {
                  t === m.Z_OK && ("string" === this.options.to ? (this.result = this.chunks.join("")) : (this.result = c.flattenChunks(this.chunks))), this.chunks = [], this.err = t, this.msg = this.strm.msg;
              }, r.Inflate = a, r.inflate = o, r.inflateRaw = function (t, e) {
                  return (e = e || {}).raw = !0, o(t, e);
              }, r.ungzip = o;
          },{
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/constants": 44,
              "./zlib/gzheader": 47,
              "./zlib/inflate": 49,
              "./zlib/messages": 51,
              "./zlib/zstream": 53
          }],
          41: [function (t, e, r) {
              var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
              r.assign = function (t) {
                  for (var e = Array.prototype.slice.call(arguments, 1);e.length; ) {
                      var r = e.shift();
                      if (r) {
                          if ("object" != typeof r) 
                              { throw new TypeError(r + "must be non-object"); }
                          for (var i in r) 
                              { r.hasOwnProperty(i) && (t[i] = r[i]); }
                      }
                  }
                  return t;
              }, r.shrinkBuf = function (t, e) {
                  return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
              };
              var n = {
                  arraySet: function (t, e, r, i, n) {
                      if (e.subarray && t.subarray) 
                          { t.set(e.subarray(r, r + i), n); }
                       else 
                          { for (var s = 0;s < i; s++) 
                          { t[n + s] = e[r + s]; } }
                  },
                  flattenChunks: function (t) {
                      var e, r, i, n, s, a;
                      for (e = (i = 0), r = t.length; e < r; e++) 
                          { i += t[e].length; }
                      for (a = new Uint8Array(i), e = (n = 0), r = t.length; e < r; e++) 
                          { s = t[e], a.set(s, n), n += s.length; }
                      return a;
                  }
              }, s = {
                  arraySet: function (t, e, r, i, n) {
                      for (var s = 0;s < i; s++) 
                          { t[n + s] = e[r + s]; }
                  },
                  flattenChunks: function (t) {
                      return [].concat.apply([], t);
                  }
              };
              r.setTyped = function (t) {
                  t ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, n)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
              }, r.setTyped(i);
          },{}],
          42: [function (t, e, r) {
              var h = t("./common"), n = !0, s = !0;
              try {
                  String.fromCharCode.apply(null, [0]);
              } catch (t$1) {
                  n = !1;
              }
              try {
                  String.fromCharCode.apply(null, new Uint8Array(1));
              } catch (t$2) {
                  s = !1;
              }
              for (var u = new h.Buf8(256), i = 0;i < 256; i++) 
                  { u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1; }
              function l(t, e) {
                  if (e < 65537 && (t.subarray && s || !t.subarray && n)) 
                      { return String.fromCharCode.apply(null, h.shrinkBuf(t, e)); }
                  for (var r = "", i = 0;i < e; i++) 
                      { r += String.fromCharCode(t[i]); }
                  return r;
              }
              
              u[254] = (u[254] = 1), r.string2buf = function (t) {
                  var e, r, i, n, s, a = t.length, o = 0;
                  for (n = 0; n < a; n++) 
                      { 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4; }
                  for (e = new h.Buf8(o), n = (s = 0); s < o; n++) 
                      { 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), r < 128 ? (e[s++] = r) : (r < 2048 ? (e[s++] = 192 | r >>> 6) : (r < 65536 ? (e[s++] = 224 | r >>> 12) : (e[s++] = 240 | r >>> 18, e[s++] = 128 | r >>> 12 & 63), e[s++] = 128 | r >>> 6 & 63), e[s++] = 128 | 63 & r); }
                  return e;
              }, r.buf2binstring = function (t) {
                  return l(t, t.length);
              }, r.binstring2buf = function (t) {
                  for (var e = new h.Buf8(t.length), r = 0, i = e.length;r < i; r++) 
                      { e[r] = t.charCodeAt(r); }
                  return e;
              }, r.buf2string = function (t, e) {
                  var r, i, n, s, a = e || t.length, o = new Array(2 * a);
                  for (r = (i = 0); r < a; ) 
                      { if ((n = t[r++]) < 128) 
                      { o[i++] = n; }
                   else if (4 < (s = u[n])) 
                      { o[i++] = 65533, r += s - 1; }
                   else {
                      for (n &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < a; ) 
                          { n = n << 6 | 63 & t[r++], s--; }
                      1 < s ? (o[i++] = 65533) : n < 65536 ? (o[i++] = n) : (n -= 65536, o[i++] = 55296 | n >> 10 & 1023, o[i++] = 56320 | 1023 & n);
                  } }
                  return l(o, i);
              }, r.utf8border = function (t, e) {
                  var r;
                  for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; 0 <= r && 128 == (192 & t[r]); ) 
                      { r--; }
                  return r < 0 ? e : 0 === r ? e : r + u[t[r]] > e ? r : e;
              };
          },{
              "./common": 41
          }],
          43: [function (t, e, r) {
              e.exports = function (t, e, r, i) {
                  for (var n = 65535 & t | 0, s = t >>> 16 & 65535 | 0, a = 0;0 !== r; ) {
                      for (r -= (a = 2e3 < r ? 2e3 : r); s = s + (n = n + e[i++] | 0) | 0, --a; ) 
                          { }
                      n %= 65521, s %= 65521;
                  }
                  return n | s << 16 | 0;
              };
          },{}],
          44: [function (t, e, r) {
              e.exports = {
                  Z_NO_FLUSH: 0,
                  Z_PARTIAL_FLUSH: 1,
                  Z_SYNC_FLUSH: 2,
                  Z_FULL_FLUSH: 3,
                  Z_FINISH: 4,
                  Z_BLOCK: 5,
                  Z_TREES: 6,
                  Z_OK: 0,
                  Z_STREAM_END: 1,
                  Z_NEED_DICT: 2,
                  Z_ERRNO: -1,
                  Z_STREAM_ERROR: -2,
                  Z_DATA_ERROR: -3,
                  Z_BUF_ERROR: -5,
                  Z_NO_COMPRESSION: 0,
                  Z_BEST_SPEED: 1,
                  Z_BEST_COMPRESSION: 9,
                  Z_DEFAULT_COMPRESSION: -1,
                  Z_FILTERED: 1,
                  Z_HUFFMAN_ONLY: 2,
                  Z_RLE: 3,
                  Z_FIXED: 4,
                  Z_DEFAULT_STRATEGY: 0,
                  Z_BINARY: 0,
                  Z_TEXT: 1,
                  Z_UNKNOWN: 2,
                  Z_DEFLATED: 8
              };
          },{}],
          45: [function (t, e, r) {
              var o = (function () {
                  for (var t, e = [], r = 0;r < 256; r++) {
                      t = r;
                      for (var i = 0;i < 8; i++) 
                          { t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1; }
                      e[r] = t;
                  }
                  return e;
              })();
              e.exports = function (t, e, r, i) {
                  var n = o, s = i + r;
                  t ^= -1;
                  for (var a = i;a < s; a++) 
                      { t = t >>> 8 ^ n[255 & (t ^ e[a])]; }
                  return -1 ^ t;
              };
          },{}],
          46: [function (t, e, r) {
              var h, d = t("../utils/common"), u = t("./trees"), c = t("./adler32"), p = t("./crc32"), i = t("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, n = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
              function R(t, e) {
                  return t.msg = i[e], e;
              }
              
              function T(t) {
                  return (t << 1) - (4 < t ? 9 : 0);
              }
              
              function D(t) {
                  for (var e = t.length;0 <= --e; ) 
                      { t[e] = 0; }
              }
              
              function F(t) {
                  var e = t.state, r = e.pending;
                  r > t.avail_out && (r = t.avail_out), 0 !== r && (d.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out), t.next_out += r, e.pending_out += r, t.total_out += r, t.avail_out -= r, e.pending -= r, 0 === e.pending && (e.pending_out = 0));
              }
              
              function N(t, e) {
                  u._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, F(t.strm);
              }
              
              function U(t, e) {
                  t.pending_buf[t.pending++] = e;
              }
              
              function P(t, e) {
                  t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
              }
              
              function L(t, e) {
                  var r, i, n = t.max_chain_length, s = t.strstart, a = t.prev_length, o = t.nice_match, h = t.strstart > t.w_size - z ? t.strstart - (t.w_size - z) : 0, u = t.window, l = t.w_mask, f = t.prev, d = t.strstart + S, c = u[s + a - 1], p = u[s + a];
                  t.prev_length >= t.good_match && (n >>= 2), o > t.lookahead && (o = t.lookahead);
                  do {
                      if (u[(r = e) + a] === p && u[r + a - 1] === c && u[r] === u[s] && u[++r] === u[s + 1]) {
                          s += 2, r++;
                          do {} while (u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && s < d);
                          if (i = S - (d - s), s = d - S, a < i) {
                              if (t.match_start = e, o <= (a = i)) 
                                  { break; }
                              c = u[s + a - 1], p = u[s + a];
                          }
                      }
                  } while ((e = f[e & l]) > h && 0 != --n);
                  return a <= t.lookahead ? a : t.lookahead;
              }
              
              function j(t) {
                  var e, r, i, n, s, a, o, h, u, l, f = t.w_size;
                  do {
                      if (n = t.window_size - t.lookahead - t.strstart, t.strstart >= f + (f - z)) {
                          for (d.arraySet(t.window, t.window, f, f, 0), t.match_start -= f, t.strstart -= f, t.block_start -= f, e = (r = t.hash_size); i = t.head[--e], t.head[e] = f <= i ? i - f : 0, --r; ) 
                              { }
                          for (e = (r = f); i = t.prev[--e], t.prev[e] = f <= i ? i - f : 0, --r; ) 
                              { }
                          n += f;
                      }
                      if (0 === t.strm.avail_in) 
                          { break; }
                      if (a = t.strm, o = t.window, h = t.strstart + t.lookahead, u = n, l = void 0, l = a.avail_in, u < l && (l = u), r = 0 === l ? 0 : (a.avail_in -= l, d.arraySet(o, a.input, a.next_in, l, h), 1 === a.state.wrap ? (a.adler = c(a.adler, o, l, h)) : 2 === a.state.wrap && (a.adler = p(a.adler, o, l, h)), a.next_in += l, a.total_in += l, l), t.lookahead += r, t.lookahead + t.insert >= x) 
                          { for (s = t.strstart - t.insert, t.ins_h = t.window[s], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + x - 1]) & t.hash_mask, t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < x)); ) 
                          { } }
                  } while (t.lookahead < z && 0 !== t.strm.avail_in);
              }
              
              function Z(t, e) {
                  for (var r, i;; ) {
                      if (t.lookahead < z) {
                          if (j(t), t.lookahead < z && e === l) 
                              { return A; }
                          if (0 === t.lookahead) 
                              { break; }
                      }
                      if (r = 0, t.lookahead >= x && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = (t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), t.head[t.ins_h] = t.strstart), 0 !== r && t.strstart - r <= t.w_size - z && (t.match_length = L(t, r)), t.match_length >= x) 
                          { if (i = u._tr_tally(t, t.strstart - t.match_start, t.match_length - x), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= x) {
                          for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = (t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), t.head[t.ins_h] = t.strstart, 0 != --t.match_length; ) 
                              { }
                          t.strstart++;
                      } else 
                          { t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask; } }
                       else 
                          { i = u._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++; }
                      if (i && (N(t, !1), 0 === t.strm.avail_out)) 
                          { return A; }
                  }
                  return t.insert = t.strstart < x - 1 ? t.strstart : x - 1, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
              }
              
              function W(t, e) {
                  for (var r, i, n;; ) {
                      if (t.lookahead < z) {
                          if (j(t), t.lookahead < z && e === l) 
                              { return A; }
                          if (0 === t.lookahead) 
                              { break; }
                      }
                      if (r = 0, t.lookahead >= x && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = (t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = x - 1, 0 !== r && t.prev_length < t.max_lazy_match && t.strstart - r <= t.w_size - z && (t.match_length = L(t, r), t.match_length <= 5 && (1 === t.strategy || t.match_length === x && 4096 < t.strstart - t.match_start) && (t.match_length = x - 1)), t.prev_length >= x && t.match_length <= t.prev_length) {
                          for (n = t.strstart + t.lookahead - x, i = u._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - x), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= n && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = (t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), t.head[t.ins_h] = t.strstart), 0 != --t.prev_length; ) 
                              { }
                          if (t.match_available = 0, t.match_length = x - 1, t.strstart++, i && (N(t, !1), 0 === t.strm.avail_out)) 
                              { return A; }
                      } else if (t.match_available) {
                          if ((i = u._tr_tally(t, 0, t.window[t.strstart - 1])) && N(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) 
                              { return A; }
                      } else 
                          { t.match_available = 1, t.strstart++, t.lookahead--; }
                  }
                  return t.match_available && (i = u._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < x - 1 ? t.strstart : x - 1, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
              }
              
              function M(t, e, r, i, n) {
                  this.good_length = t, this.max_lazy = e, this.nice_length = r, this.max_chain = i, this.func = n;
              }
              
              function H() {
                  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new d.Buf16(2 * w), this.dyn_dtree = new d.Buf16(2 * (2 * a + 1)), this.bl_tree = new d.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new d.Buf16(k + 1), this.heap = new d.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new d.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
              }
              
              function G(t) {
                  var e;
                  return t && t.state ? (t.total_in = (t.total_out = 0), t.data_type = n, (e = t.state).pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? C : E, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = l, u._tr_init(e), m) : R(t, _);
              }
              
              function K(t) {
                  var e = G(t);
                  return e === m && (function (t) {
                      t.window_size = 2 * t.w_size, D(t.head), t.max_lazy_match = h[t.level].max_lazy, t.good_match = h[t.level].good_length, t.nice_match = h[t.level].nice_length, t.max_chain_length = h[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = (t.prev_length = x - 1), t.match_available = 0, t.ins_h = 0;
                  })(t.state), e;
              }
              
              function Y(t, e, r, i, n, s) {
                  if (!t) 
                      { return _; }
                  var a = 1;
                  if (e === g && (e = 6), i < 0 ? (a = 0, i = -i) : 15 < i && (a = 2, i -= 16), n < 1 || y < n || r !== v || i < 8 || 15 < i || e < 0 || 9 < e || s < 0 || b < s) 
                      { return R(t, _); }
                  8 === i && (i = 9);
                  var o = new H();
                  return (t.state = o).strm = t, o.wrap = a, o.gzhead = null, o.w_bits = i, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = n + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~(~((o.hash_bits + x - 1) / x)), o.window = new d.Buf8(2 * o.w_size), o.head = new d.Buf16(o.hash_size), o.prev = new d.Buf16(o.w_size), o.lit_bufsize = 1 << n + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new d.Buf8(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = e, o.strategy = s, o.method = r, K(t);
              }
              
              h = [new M(0, 0, 0, 0, function (t, e) {
                  var r = 65535;
                  for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5); ; ) {
                      if (t.lookahead <= 1) {
                          if (j(t), 0 === t.lookahead && e === l) 
                              { return A; }
                          if (0 === t.lookahead) 
                              { break; }
                      }
                      t.strstart += t.lookahead, t.lookahead = 0;
                      var i = t.block_start + r;
                      if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, N(t, !1), 0 === t.strm.avail_out)) 
                          { return A; }
                      if (t.strstart - t.block_start >= t.w_size - z && (N(t, !1), 0 === t.strm.avail_out)) 
                          { return A; }
                  }
                  return t.insert = 0, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : (t.strstart > t.block_start && (N(t, !1), t.strm.avail_out), A);
              }),new M(4, 4, 8, 4, Z),new M(4, 5, 16, 8, Z),new M(4, 6, 32, 32, Z),
                  new M(4, 4, 16, 16, W),new M(8, 16, 32, 32, W),new M(8, 16, 128, 128, W),
                  new M(8, 32, 128, 256, W),new M(32, 128, 258, 1024, W),new M(32, 258, 258, 4096, W)], r.deflateInit = function (t, e) {
                  return Y(t, e, v, 15, 8, 0);
              }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function (t, e) {
                  return t && t.state ? 2 !== t.state.wrap ? _ : (t.state.gzhead = e, m) : _;
              }, r.deflate = function (t, e) {
                  var r, i, n, s;
                  if (!t || !t.state || 5 < e || e < 0) 
                      { return t ? R(t, _) : _; }
                  if (i = t.state, !t.output || !t.input && 0 !== t.avail_in || 666 === i.status && e !== f) 
                      { return R(t, 0 === t.avail_out ? -5 : _); }
                  if (i.strm = t, r = i.last_flush, i.last_flush = e, i.status === C) 
                      { if (2 === i.wrap) 
                      { t.adler = 0, U(i, 31), U(i, 139), U(i, 8), i.gzhead ? (U(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), U(i, 255 & i.gzhead.time), U(i, i.gzhead.time >> 8 & 255), U(i, i.gzhead.time >> 16 & 255), U(i, i.gzhead.time >> 24 & 255), U(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), U(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (U(i, 255 & i.gzhead.extra.length), U(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (t.adler = p(t.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (U(i, 0), U(i, 0), U(i, 0), U(i, 0), U(i, 0), U(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), U(i, 3), i.status = E); }
                   else {
                      var a = v + (i.w_bits - 8 << 4) << 8;
                      a |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6, 0 !== i.strstart && (a |= 32), a += 31 - a % 31, i.status = E, P(i, a), 0 !== i.strstart && (P(i, t.adler >>> 16), P(i, 65535 & t.adler)), t.adler = 1;
                  } }
                  if (69 === i.status) 
                      { if (i.gzhead.extra) {
                      for (n = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), F(t), n = i.pending, i.pending !== i.pending_buf_size)); ) 
                          { U(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++; }
                      i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73);
                  } else 
                      { i.status = 73; } }
                  if (73 === i.status) 
                      { if (i.gzhead.name) {
                      n = i.pending;
                      do {
                          if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), F(t), n = i.pending, i.pending === i.pending_buf_size)) {
                              s = 1;
                              break;
                          }
                          s = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, U(i, s);
                      } while (0 !== s);
                      i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), 0 === s && (i.gzindex = 0, i.status = 91);
                  } else 
                      { i.status = 91; } }
                  if (91 === i.status) 
                      { if (i.gzhead.comment) {
                      n = i.pending;
                      do {
                          if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), F(t), n = i.pending, i.pending === i.pending_buf_size)) {
                              s = 1;
                              break;
                          }
                          s = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, U(i, s);
                      } while (0 !== s);
                      i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), 0 === s && (i.status = 103);
                  } else 
                      { i.status = 103; } }
                  if (103 === i.status && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && F(t), i.pending + 2 <= i.pending_buf_size && (U(i, 255 & t.adler), U(i, t.adler >> 8 & 255), t.adler = 0, i.status = E)) : (i.status = E)), 0 !== i.pending) {
                      if (F(t), 0 === t.avail_out) 
                          { return i.last_flush = -1, m; }
                  } else if (0 === t.avail_in && T(e) <= T(r) && e !== f) 
                      { return R(t, -5); }
                  if (666 === i.status && 0 !== t.avail_in) 
                      { return R(t, -5); }
                  if (0 !== t.avail_in || 0 !== i.lookahead || e !== l && 666 !== i.status) {
                      var o = 2 === i.strategy ? (function (t, e) {
                          for (var r;; ) {
                              if (0 === t.lookahead && (j(t), 0 === t.lookahead)) {
                                  if (e === l) 
                                      { return A; }
                                  break;
                              }
                              if (t.match_length = 0, r = u._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, r && (N(t, !1), 0 === t.strm.avail_out)) 
                                  { return A; }
                          }
                          return t.insert = 0, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
                      })(i, e) : 3 === i.strategy ? (function (t, e) {
                          for (var r, i, n, s, a = t.window;; ) {
                              if (t.lookahead <= S) {
                                  if (j(t), t.lookahead <= S && e === l) 
                                      { return A; }
                                  if (0 === t.lookahead) 
                                      { break; }
                              }
                              if (t.match_length = 0, t.lookahead >= x && 0 < t.strstart && (i = a[n = t.strstart - 1]) === a[++n] && i === a[++n] && i === a[++n]) {
                                  s = t.strstart + S;
                                  do {} while (i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && n < s);
                                  t.match_length = S - (s - n), t.match_length > t.lookahead && (t.match_length = t.lookahead);
                              }
                              if (t.match_length >= x ? (r = u._tr_tally(t, 1, t.match_length - x), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (r = u._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), r && (N(t, !1), 0 === t.strm.avail_out)) 
                                  { return A; }
                          }
                          return t.insert = 0, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
                      })(i, e) : h[i.level].func(i, e);
                      if (o !== O && o !== B || (i.status = 666), o === A || o === O) 
                          { return 0 === t.avail_out && (i.last_flush = -1), m; }
                      if (o === I && (1 === e ? u._tr_align(i) : 5 !== e && (u._tr_stored_block(i, 0, 0, !1), 3 === e && (D(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), F(t), 0 === t.avail_out)) 
                          { return i.last_flush = -1, m; }
                  }
                  return e !== f ? m : i.wrap <= 0 ? 1 : (2 === i.wrap ? (U(i, 255 & t.adler), U(i, t.adler >> 8 & 255), U(i, t.adler >> 16 & 255), U(i, t.adler >> 24 & 255), U(i, 255 & t.total_in), U(i, t.total_in >> 8 & 255), U(i, t.total_in >> 16 & 255), U(i, t.total_in >> 24 & 255)) : (P(i, t.adler >>> 16), P(i, 65535 & t.adler)), F(t), 0 < i.wrap && (i.wrap = -i.wrap), 0 !== i.pending ? m : 1);
              }, r.deflateEnd = function (t) {
                  var e;
                  return t && t.state ? (e = t.state.status) !== C && 69 !== e && 73 !== e && 91 !== e && 103 !== e && e !== E && 666 !== e ? R(t, _) : (t.state = null, e === E ? R(t, -3) : m) : _;
              }, r.deflateSetDictionary = function (t, e) {
                  var r, i, n, s, a, o, h, u, l = e.length;
                  if (!t || !t.state) 
                      { return _; }
                  if (2 === (s = (r = t.state).wrap) || 1 === s && r.status !== C || r.lookahead) 
                      { return _; }
                  for (1 === s && (t.adler = c(t.adler, e, l, 0)), r.wrap = 0, l >= r.w_size && (0 === s && (D(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), u = new d.Buf8(r.w_size), d.arraySet(u, e, l - r.w_size, r.w_size, 0), e = u, l = r.w_size), a = t.avail_in, o = t.next_in, h = t.input, t.avail_in = l, t.next_in = 0, t.input = e, j(r); r.lookahead >= x; ) {
                      for (i = r.strstart, n = r.lookahead - (x - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[i + x - 1]) & r.hash_mask, r.prev[i & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = i, i++, --n; ) 
                          { }
                      r.strstart = i, r.lookahead = x - 1, j(r);
                  }
                  return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = (r.prev_length = x - 1), r.match_available = 0, t.next_in = o, t.input = h, t.avail_in = a, r.wrap = s, m;
              }, r.deflateInfo = "pako deflate (from Nodeca project)";
          },{
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./messages": 51,
              "./trees": 52
          }],
          47: [function (t, e, r) {
              e.exports = function () {
                  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
              };
          },{}],
          48: [function (t, e, r) {
              e.exports = function (t, e) {
                  var r, i, n, s, a, o, h, u, l, f, d, c, p, m, _, g, b, v, y, w, k, x, S, z, C;
                  r = t.state, i = t.next_in, z = t.input, n = i + (t.avail_in - 5), s = t.next_out, C = t.output, a = s - (e - t.avail_out), o = s + (t.avail_out - 257), h = r.dmax, u = r.wsize, l = r.whave, f = r.wnext, d = r.window, c = r.hold, p = r.bits, m = r.lencode, _ = r.distcode, g = (1 << r.lenbits) - 1, b = (1 << r.distbits) - 1;
                  t:do {
                      p < 15 && (c += z[i++] << p, p += 8, c += z[i++] << p, p += 8), v = m[c & g];
                      e:for (; ; ) {
                          if (c >>>= (y = v >>> 24), p -= y, 0 === (y = v >>> 16 & 255)) 
                              { C[s++] = 65535 & v; }
                           else {
                              if (!(16 & y)) {
                                  if (0 == (64 & y)) {
                                      v = m[(65535 & v) + (c & (1 << y) - 1)];
                                      continue e;
                                  }
                                  if (32 & y) {
                                      r.mode = 12;
                                      break t;
                                  }
                                  t.msg = "invalid literal/length code", r.mode = 30;
                                  break t;
                              }
                              w = 65535 & v, (y &= 15) && (p < y && (c += z[i++] << p, p += 8), w += c & (1 << y) - 1, c >>>= y, p -= y), p < 15 && (c += z[i++] << p, p += 8, c += z[i++] << p, p += 8), v = _[c & b];
                              r:for (; ; ) {
                                  if (c >>>= (y = v >>> 24), p -= y, !(16 & (y = v >>> 16 & 255))) {
                                      if (0 == (64 & y)) {
                                          v = _[(65535 & v) + (c & (1 << y) - 1)];
                                          continue r;
                                      }
                                      t.msg = "invalid distance code", r.mode = 30;
                                      break t;
                                  }
                                  if (k = 65535 & v, p < (y &= 15) && (c += z[i++] << p, (p += 8) < y && (c += z[i++] << p, p += 8)), h < (k += c & (1 << y) - 1)) {
                                      t.msg = "invalid distance too far back", r.mode = 30;
                                      break t;
                                  }
                                  if (c >>>= y, p -= y, (y = s - a) < k) {
                                      if (l < (y = k - y) && r.sane) {
                                          t.msg = "invalid distance too far back", r.mode = 30;
                                          break t;
                                      }
                                      if (S = d, (x = 0) === f) {
                                          if (x += u - y, y < w) {
                                              for (w -= y; C[s++] = d[x++], --y; ) 
                                                  { }
                                              x = s - k, S = C;
                                          }
                                      } else if (f < y) {
                                          if (x += u + f - y, (y -= f) < w) {
                                              for (w -= y; C[s++] = d[x++], --y; ) 
                                                  { }
                                              if (x = 0, f < w) {
                                                  for (w -= (y = f); C[s++] = d[x++], --y; ) 
                                                      { }
                                                  x = s - k, S = C;
                                              }
                                          }
                                      } else if (x += f - y, y < w) {
                                          for (w -= y; C[s++] = d[x++], --y; ) 
                                              { }
                                          x = s - k, S = C;
                                      }
                                      for (; 2 < w; ) 
                                          { C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3; }
                                      w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                                  } else {
                                      for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); ) 
                                          { }
                                      w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                                  }
                                  break;
                              }
                          }
                          break;
                      }
                  } while (i < n && s < o);
                  i -= (w = p >> 3), c &= (1 << (p -= w << 3)) - 1, t.next_in = i, t.next_out = s, t.avail_in = i < n ? n - i + 5 : 5 - (i - n), t.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = c, r.bits = p;
              };
          },{}],
          49: [function (t, e, r) {
              var I = t("../utils/common"), O = t("./adler32"), B = t("./crc32"), R = t("./inffast"), T = t("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, i = 852, n = 592;
              function L(t) {
                  return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
              }
              
              function s() {
                  this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
              }
              
              function a(t) {
                  var e;
                  return t && t.state ? (e = t.state, t.total_in = (t.total_out = (e.total = 0)), t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = P, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = (e.lendyn = new I.Buf32(i)), e.distcode = (e.distdyn = new I.Buf32(n)), e.sane = 1, e.back = -1, N) : U;
              }
              
              function o(t) {
                  var e;
                  return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, a(t)) : U;
              }
              
              function h(t, e) {
                  var r, i;
                  return t && t.state ? (i = t.state, e < 0 ? (r = 0, e = -e) : (r = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || 15 < e) ? U : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = r, i.wbits = e, o(t))) : U;
              }
              
              function u(t, e) {
                  var r, i;
                  return t ? (i = new s(), (t.state = i).window = null, (r = h(t, e)) !== N && (t.state = null), r) : U;
              }
              
              var l, f, d = !0;
              function j(t) {
                  if (d) {
                      var e;
                      for (l = new I.Buf32(512), f = new I.Buf32(32), e = 0; e < 144; ) 
                          { t.lens[e++] = 8; }
                      for (; e < 256; ) 
                          { t.lens[e++] = 9; }
                      for (; e < 280; ) 
                          { t.lens[e++] = 7; }
                      for (; e < 288; ) 
                          { t.lens[e++] = 8; }
                      for (T(D, t.lens, 0, 288, l, 0, t.work, {
                          bits: 9
                      }), e = 0; e < 32; ) 
                          { t.lens[e++] = 5; }
                      T(F, t.lens, 0, 32, f, 0, t.work, {
                          bits: 5
                      }), d = !1;
                  }
                  t.lencode = l, t.lenbits = 9, t.distcode = f, t.distbits = 5;
              }
              
              function Z(t, e, r, i) {
                  var n, s = t.state;
                  return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new I.Buf8(s.wsize)), i >= s.wsize ? (I.arraySet(s.window, e, r - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : (i < (n = s.wsize - s.wnext) && (n = i), I.arraySet(s.window, e, r - i, n, s.wnext), (i -= n) ? (I.arraySet(s.window, e, r - i, i, 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += n, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += n))), 0;
              }
              
              r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function (t) {
                  return u(t, 15);
              }, r.inflateInit2 = u, r.inflate = function (t, e) {
                  var r, i, n, s, a, o, h, u, l, f, d, c, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16,
                      17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
                  if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) 
                      { return U; }
                  12 === (r = t.state).mode && (r.mode = 13), a = t.next_out, n = t.output, h = t.avail_out, s = t.next_in, i = t.input, o = t.avail_in, u = r.hold, l = r.bits, f = o, d = h, x = N;
                  t:for (; ; ) 
                      { switch (r.mode) {
                      case P:
                          if (0 === r.wrap) {
                              r.mode = 13;
                              break;
                          }
                          for (; l < 16; ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          if (2 & r.wrap && 35615 === u) {
                              E[r.check = 0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0), l = (u = 0), r.mode = 2;
                              break;
                          }
                          if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
                              t.msg = "incorrect header check", r.mode = 30;
                              break;
                          }
                          if (8 != (15 & u)) {
                              t.msg = "unknown compression method", r.mode = 30;
                              break;
                          }
                          if (l -= 4, k = 8 + (15 & (u >>>= 4)), 0 === r.wbits) 
                              { r.wbits = k; }
                           else if (k > r.wbits) {
                              t.msg = "invalid window size", r.mode = 30;
                              break;
                          }
                          r.dmax = 1 << k, t.adler = (r.check = 1), r.mode = 512 & u ? 10 : 12, l = (u = 0);
                          break;
                      case 2:
                          for (; l < 16; ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          if (r.flags = u, 8 != (255 & r.flags)) {
                              t.msg = "unknown compression method", r.mode = 30;
                              break;
                          }
                          if (57344 & r.flags) {
                              t.msg = "unknown header flags set", r.mode = 30;
                              break;
                          }
                          r.head && (r.head.text = u >> 8 & 1), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = (u = 0), r.mode = 3;
                      case 3:
                          for (; l < 32; ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          r.head && (r.head.time = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, E[2] = u >>> 16 & 255, E[3] = u >>> 24 & 255, r.check = B(r.check, E, 4, 0)), l = (u = 0), r.mode = 4;
                      case 4:
                          for (; l < 16; ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          r.head && (r.head.xflags = 255 & u, r.head.os = u >> 8), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = (u = 0), r.mode = 5;
                      case 5:
                          if (1024 & r.flags) {
                              for (; l < 16; ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u += i[s++] << l, l += 8;
                              }
                              r.length = u, r.head && (r.head.extra_len = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = (u = 0);
                          } else 
                              { r.head && (r.head.extra = null); }
                          r.mode = 6;
                      case 6:
                          if (1024 & r.flags && (o < (c = r.length) && (c = o), c && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), I.arraySet(r.head.extra, i, s, c, k)), 512 & r.flags && (r.check = B(r.check, i, c, s)), o -= c, s += c, r.length -= c), r.length)) 
                              { break t; }
                          r.length = 0, r.mode = 7;
                      case 7:
                          if (2048 & r.flags) {
                              if (0 === o) 
                                  { break t; }
                              for (c = 0; k = i[s + c++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k)), k && c < o; ) 
                                  { }
                              if (512 & r.flags && (r.check = B(r.check, i, c, s)), o -= c, s += c, k) 
                                  { break t; }
                          } else 
                              { r.head && (r.head.name = null); }
                          r.length = 0, r.mode = 8;
                      case 8:
                          if (4096 & r.flags) {
                              if (0 === o) 
                                  { break t; }
                              for (c = 0; k = i[s + c++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k)), k && c < o; ) 
                                  { }
                              if (512 & r.flags && (r.check = B(r.check, i, c, s)), o -= c, s += c, k) 
                                  { break t; }
                          } else 
                              { r.head && (r.head.comment = null); }
                          r.mode = 9;
                      case 9:
                          if (512 & r.flags) {
                              for (; l < 16; ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u += i[s++] << l, l += 8;
                              }
                              if (u !== (65535 & r.check)) {
                                  t.msg = "header crc mismatch", r.mode = 30;
                                  break;
                              }
                              l = (u = 0);
                          }
                          r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), t.adler = (r.check = 0), r.mode = 12;
                          break;
                      case 10:
                          for (; l < 32; ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          t.adler = (r.check = L(u)), l = (u = 0), r.mode = 11;
                      case 11:
                          if (0 === r.havedict) 
                              { return t.next_out = a, t.avail_out = h, t.next_in = s, t.avail_in = o, r.hold = u, r.bits = l, 2; }
                          t.adler = (r.check = 1), r.mode = 12;
                      case 12:
                          if (5 === e || 6 === e) 
                              { break t; }
                      case 13:
                          if (r.last) {
                              u >>>= 7 & l, l -= 7 & l, r.mode = 27;
                              break;
                          }
                          for (; l < 3; ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          switch (r.last = 1 & u, l -= 1, 3 & (u >>>= 1)) {
                              case 0:
                                  r.mode = 14;
                                  break;
                              case 1:
                                  if (j(r), r.mode = 20, 6 !== e) 
                                      { break; }
                                  u >>>= 2, l -= 2;
                                  break t;
                              case 2:
                                  r.mode = 17;
                                  break;
                              case 3:
                                  t.msg = "invalid block type", r.mode = 30;
                          }
                          u >>>= 2, l -= 2;
                          break;
                      case 14:
                          for (u >>>= 7 & l, l -= 7 & l; l < 32; ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          if ((65535 & u) != (u >>> 16 ^ 65535)) {
                              t.msg = "invalid stored block lengths", r.mode = 30;
                              break;
                          }
                          if (r.length = 65535 & u, l = (u = 0), r.mode = 15, 6 === e) 
                              { break t; }
                      case 15:
                          r.mode = 16;
                      case 16:
                          if (c = r.length) {
                              if (o < c && (c = o), h < c && (c = h), 0 === c) 
                                  { break t; }
                              I.arraySet(n, i, s, c, a), o -= c, s += c, h -= c, a += c, r.length -= c;
                              break;
                          }
                          r.mode = 12;
                          break;
                      case 17:
                          for (; l < 14; ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          if (r.nlen = 257 + (31 & u), u >>>= 5, l -= 5, r.ndist = 1 + (31 & u), u >>>= 5, l -= 5, r.ncode = 4 + (15 & u), u >>>= 4, l -= 4, 286 < r.nlen || 30 < r.ndist) {
                              t.msg = "too many length or distance symbols", r.mode = 30;
                              break;
                          }
                          r.have = 0, r.mode = 18;
                      case 18:
                          for (; r.have < r.ncode; ) {
                              for (; l < 3; ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u += i[s++] << l, l += 8;
                              }
                              r.lens[A[r.have++]] = 7 & u, u >>>= 3, l -= 3;
                          }
                          for (; r.have < 19; ) 
                              { r.lens[A[r.have++]] = 0; }
                          if (r.lencode = r.lendyn, r.lenbits = 7, S = {
                              bits: r.lenbits
                          }, x = T(0, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
                              t.msg = "invalid code lengths set", r.mode = 30;
                              break;
                          }
                          r.have = 0, r.mode = 19;
                      case 19:
                          for (; r.have < r.nlen + r.ndist; ) {
                              for (; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l); ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u += i[s++] << l, l += 8;
                              }
                              if (b < 16) 
                                  { u >>>= _, l -= _, r.lens[r.have++] = b; }
                               else {
                                  if (16 === b) {
                                      for (z = _ + 2; l < z; ) {
                                          if (0 === o) 
                                              { break t; }
                                          o--, u += i[s++] << l, l += 8;
                                      }
                                      if (u >>>= _, l -= _, 0 === r.have) {
                                          t.msg = "invalid bit length repeat", r.mode = 30;
                                          break;
                                      }
                                      k = r.lens[r.have - 1], c = 3 + (3 & u), u >>>= 2, l -= 2;
                                  } else if (17 === b) {
                                      for (z = _ + 3; l < z; ) {
                                          if (0 === o) 
                                              { break t; }
                                          o--, u += i[s++] << l, l += 8;
                                      }
                                      l -= _, k = 0, c = 3 + (7 & (u >>>= _)), u >>>= 3, l -= 3;
                                  } else {
                                      for (z = _ + 7; l < z; ) {
                                          if (0 === o) 
                                              { break t; }
                                          o--, u += i[s++] << l, l += 8;
                                      }
                                      l -= _, k = 0, c = 11 + (127 & (u >>>= _)), u >>>= 7, l -= 7;
                                  }
                                  if (r.have + c > r.nlen + r.ndist) {
                                      t.msg = "invalid bit length repeat", r.mode = 30;
                                      break;
                                  }
                                  for (; c--; ) 
                                      { r.lens[r.have++] = k; }
                              }
                          }
                          if (30 === r.mode) 
                              { break; }
                          if (0 === r.lens[256]) {
                              t.msg = "invalid code -- missing end-of-block", r.mode = 30;
                              break;
                          }
                          if (r.lenbits = 9, S = {
                              bits: r.lenbits
                          }, x = T(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
                              t.msg = "invalid literal/lengths set", r.mode = 30;
                              break;
                          }
                          if (r.distbits = 6, r.distcode = r.distdyn, S = {
                              bits: r.distbits
                          }, x = T(F, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, x) {
                              t.msg = "invalid distances set", r.mode = 30;
                              break;
                          }
                          if (r.mode = 20, 6 === e) 
                              { break t; }
                      case 20:
                          r.mode = 21;
                      case 21:
                          if (6 <= o && 258 <= h) {
                              t.next_out = a, t.avail_out = h, t.next_in = s, t.avail_in = o, r.hold = u, r.bits = l, R(t, d), a = t.next_out, n = t.output, h = t.avail_out, s = t.next_in, i = t.input, o = t.avail_in, u = r.hold, l = r.bits, 12 === r.mode && (r.back = -1);
                              break;
                          }
                          for (r.back = 0; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l); ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          if (g && 0 == (240 & g)) {
                              for (v = _, y = g, w = b; g = (C = r.lencode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l); ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u += i[s++] << l, l += 8;
                              }
                              u >>>= v, l -= v, r.back += v;
                          }
                          if (u >>>= _, l -= _, r.back += _, r.length = b, 0 === g) {
                              r.mode = 26;
                              break;
                          }
                          if (32 & g) {
                              r.back = -1, r.mode = 12;
                              break;
                          }
                          if (64 & g) {
                              t.msg = "invalid literal/length code", r.mode = 30;
                              break;
                          }
                          r.extra = 15 & g, r.mode = 22;
                      case 22:
                          if (r.extra) {
                              for (z = r.extra; l < z; ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u += i[s++] << l, l += 8;
                              }
                              r.length += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
                          }
                          r.was = r.length, r.mode = 23;
                      case 23:
                          for (; g = (C = r.distcode[u & (1 << r.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l); ) {
                              if (0 === o) 
                                  { break t; }
                              o--, u += i[s++] << l, l += 8;
                          }
                          if (0 == (240 & g)) {
                              for (v = _, y = g, w = b; g = (C = r.distcode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l); ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u += i[s++] << l, l += 8;
                              }
                              u >>>= v, l -= v, r.back += v;
                          }
                          if (u >>>= _, l -= _, r.back += _, 64 & g) {
                              t.msg = "invalid distance code", r.mode = 30;
                              break;
                          }
                          r.offset = b, r.extra = 15 & g, r.mode = 24;
                      case 24:
                          if (r.extra) {
                              for (z = r.extra; l < z; ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u += i[s++] << l, l += 8;
                              }
                              r.offset += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
                          }
                          if (r.offset > r.dmax) {
                              t.msg = "invalid distance too far back", r.mode = 30;
                              break;
                          }
                          r.mode = 25;
                      case 25:
                          if (0 === h) 
                              { break t; }
                          if (c = d - h, r.offset > c) {
                              if ((c = r.offset - c) > r.whave && r.sane) {
                                  t.msg = "invalid distance too far back", r.mode = 30;
                                  break;
                              }
                              p = c > r.wnext ? (c -= r.wnext, r.wsize - c) : r.wnext - c, c > r.length && (c = r.length), m = r.window;
                          } else 
                              { m = n, p = a - r.offset, c = r.length; }
                          for (h < c && (c = h), h -= c, r.length -= c; n[a++] = m[p++], --c; ) 
                              { }
                          0 === r.length && (r.mode = 21);
                          break;
                      case 26:
                          if (0 === h) 
                              { break t; }
                          n[a++] = r.length, h--, r.mode = 21;
                          break;
                      case 27:
                          if (r.wrap) {
                              for (; l < 32; ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u |= i[s++] << l, l += 8;
                              }
                              if (d -= h, t.total_out += d, r.total += d, d && (t.adler = (r.check = r.flags ? B(r.check, n, d, a - d) : O(r.check, n, d, a - d))), d = h, (r.flags ? u : L(u)) !== r.check) {
                                  t.msg = "incorrect data check", r.mode = 30;
                                  break;
                              }
                              l = (u = 0);
                          }
                          r.mode = 28;
                      case 28:
                          if (r.wrap && r.flags) {
                              for (; l < 32; ) {
                                  if (0 === o) 
                                      { break t; }
                                  o--, u += i[s++] << l, l += 8;
                              }
                              if (u !== (4294967295 & r.total)) {
                                  t.msg = "incorrect length check", r.mode = 30;
                                  break;
                              }
                              l = (u = 0);
                          }
                          r.mode = 29;
                      case 29:
                          x = 1;
                          break t;
                      case 30:
                          x = -3;
                          break t;
                      case 31:
                          return -4;
                      case 32:
                      default:
                          return U;
                  } }
                  return t.next_out = a, t.avail_out = h, t.next_in = s, t.avail_in = o, r.hold = u, r.bits = l, (r.wsize || d !== t.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== e)) && Z(t, t.output, t.next_out, d - t.avail_out) ? (r.mode = 31, -4) : (f -= t.avail_in, d -= t.avail_out, t.total_in += f, t.total_out += d, r.total += d, r.wrap && d && (t.adler = (r.check = r.flags ? B(r.check, n, d, t.next_out - d) : O(r.check, n, d, t.next_out - d))), t.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 == f && 0 === d || 4 === e) && x === N && (x = -5), x);
              }, r.inflateEnd = function (t) {
                  if (!t || !t.state) 
                      { return U; }
                  var e = t.state;
                  return e.window && (e.window = null), t.state = null, N;
              }, r.inflateGetHeader = function (t, e) {
                  var r;
                  return t && t.state ? 0 == (2 & (r = t.state).wrap) ? U : ((r.head = e).done = !1, N) : U;
              }, r.inflateSetDictionary = function (t, e) {
                  var r, i = e.length;
                  return t && t.state ? 0 !== (r = t.state).wrap && 11 !== r.mode ? U : 11 === r.mode && O(1, e, i, 0) !== r.check ? -3 : Z(t, e, i, i) ? (r.mode = 31, -4) : (r.havedict = 1, N) : U;
              }, r.inflateInfo = "pako inflate (from Nodeca project)";
          },{
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./inffast": 48,
              "./inftrees": 50
          }],
          50: [function (t, e, r) {
              var D = t("../utils/common"), F = [3,4,5,6,7,8,9,10,11,13,15,17,19,23,
                  27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0], N = [16,
                  16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,
                  20,21,21,21,21,16,72,78], U = [1,2,3,4,5,7,9,13,17,25,33,49,65,97,
                  129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,
                  16385,24577,0,0], P = [16,16,16,16,17,17,18,18,19,19,20,20,21,21,
                  22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];
              e.exports = function (t, e, r, i, n, s, a, o) {
                  var h, u, l, f, d, c, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
                  for (b = 0; b <= 15; b++) 
                      { O[b] = 0; }
                  for (v = 0; v < i; v++) 
                      { O[e[r + v]]++; }
                  for (k = g, w = 15; 1 <= w && 0 === O[w]; w--) 
                      { }
                  if (w < k && (k = w), 0 === w) 
                      { return n[s++] = 20971520, n[s++] = 20971520, o.bits = 1, 0; }
                  for (y = 1; y < w && 0 === O[y]; y++) 
                      { }
                  for (k < y && (k = y), b = (z = 1); b <= 15; b++) 
                      { if (z <<= 1, (z -= O[b]) < 0) 
                      { return -1; } }
                  if (0 < z && (0 === t || 1 !== w)) 
                      { return -1; }
                  for (B[1] = 0, b = 1; b < 15; b++) 
                      { B[b + 1] = B[b] + O[b]; }
                  for (v = 0; v < i; v++) 
                      { 0 !== e[r + v] && (a[B[e[r + v]]++] = v); }
                  if (c = 0 === t ? (A = (R = a), 19) : 1 === t ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, d = s, S = (v = (E = 0)), l = -1, f = (C = 1 << (x = k)) - 1, 1 === t && 852 < C || 2 === t && 592 < C) 
                      { return 1; }
                  for (; ; ) {
                      for (p = b - S, _ = a[v] < c ? (m = 0, a[v]) : a[v] > c ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = (u = 1 << x); n[d + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; ) 
                          { }
                      for (h = 1 << b - 1; E & h; ) 
                          { h >>= 1; }
                      if (0 !== h ? (E &= h - 1, E += h) : (E = 0), v++, 0 == --O[b]) {
                          if (b === w) 
                              { break; }
                          b = e[r + a[v]];
                      }
                      if (k < b && (E & f) !== l) {
                          for (0 === S && (S = k), d += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); ) 
                              { x++, z <<= 1; }
                          if (C += 1 << x, 1 === t && 852 < C || 2 === t && 592 < C) 
                              { return 1; }
                          n[l = E & f] = k << 24 | x << 16 | d - s | 0;
                      }
                  }
                  return 0 !== E && (n[d + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
              };
          },{
              "../utils/common": 41
          }],
          51: [function (t, e, r) {
              e.exports = {
                  2: "need dictionary",
                  1: "stream end",
                  0: "",
                  "-1": "file error",
                  "-2": "stream error",
                  "-3": "data error",
                  "-4": "insufficient memory",
                  "-5": "buffer error",
                  "-6": "incompatible version"
              };
          },{}],
          52: [function (t, e, r) {
              var n = t("../utils/common"), o = 0, h = 1;
              function i(t) {
                  for (var e = t.length;0 <= --e; ) 
                      { t[e] = 0; }
              }
              
              var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, d = 19, _ = 2 * l + 1, g = 15, c = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0,
                  0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0], k = [0,
                  0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13], x = [0,
                  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7], S = [16,17,18,0,8,7,9,6,10,
                  5,11,4,12,3,13,2,14,1,15], z = new Array(2 * (l + 2));
              i(z);
              var C = new Array(2 * f);
              i(C);
              var E = new Array(512);
              i(E);
              var A = new Array(256);
              i(A);
              var I = new Array(a);
              i(I);
              var O, B, R, T = new Array(f);
              function D(t, e, r, i, n) {
                  this.static_tree = t, this.extra_bits = e, this.extra_base = r, this.elems = i, this.max_length = n, this.has_stree = t && t.length;
              }
              
              function F(t, e) {
                  this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
              }
              
              function N(t) {
                  return t < 256 ? E[t] : E[256 + (t >>> 7)];
              }
              
              function U(t, e) {
                  t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
              }
              
              function P(t, e, r) {
                  t.bi_valid > c - r ? (t.bi_buf |= e << t.bi_valid & 65535, U(t, t.bi_buf), t.bi_buf = e >> c - t.bi_valid, t.bi_valid += r - c) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += r);
              }
              
              function L(t, e, r) {
                  P(t, r[2 * e], r[2 * e + 1]);
              }
              
              function j(t, e) {
                  for (var r = 0;r |= 1 & t, t >>>= 1, r <<= 1, 0 < --e; ) 
                      { }
                  return r >>> 1;
              }
              
              function Z(t, e, r) {
                  var i, n, s = new Array(g + 1), a = 0;
                  for (i = 1; i <= g; i++) 
                      { s[i] = (a = a + r[i - 1] << 1); }
                  for (n = 0; n <= e; n++) {
                      var o = t[2 * n + 1];
                      0 !== o && (t[2 * n] = j(s[o]++, o));
                  }
              }
              
              function W(t) {
                  var e;
                  for (e = 0; e < l; e++) 
                      { t.dyn_ltree[2 * e] = 0; }
                  for (e = 0; e < f; e++) 
                      { t.dyn_dtree[2 * e] = 0; }
                  for (e = 0; e < d; e++) 
                      { t.bl_tree[2 * e] = 0; }
                  t.dyn_ltree[2 * m] = 1, t.opt_len = (t.static_len = 0), t.last_lit = (t.matches = 0);
              }
              
              function M(t) {
                  8 < t.bi_valid ? U(t, t.bi_buf) : 0 < t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
              }
              
              function H(t, e, r, i) {
                  var n = 2 * e, s = 2 * r;
                  return t[n] < t[s] || t[n] === t[s] && i[e] <= i[r];
              }
              
              function G(t, e, r) {
                  for (var i = t.heap[r], n = r << 1;n <= t.heap_len && (n < t.heap_len && H(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !H(e, i, t.heap[n], t.depth)); ) 
                      { t.heap[r] = t.heap[n], r = n, n <<= 1; }
                  t.heap[r] = i;
              }
              
              function K(t, e, r) {
                  var i, n, s, a, o = 0;
                  if (0 !== t.last_lit) 
                      { for (; i = t.pending_buf[t.d_buf + 2 * o] << 8 | t.pending_buf[t.d_buf + 2 * o + 1], n = t.pending_buf[t.l_buf + o], o++, 0 === i ? L(t, n, e) : (L(t, (s = A[n]) + u + 1, e), 0 !== (a = w[s]) && P(t, n -= I[s], a), L(t, s = N(--i), r), 0 !== (a = k[s]) && P(t, i -= T[s], a)), o < t.last_lit; ) 
                      { } }
                  L(t, m, e);
              }
              
              function Y(t, e) {
                  var r, i, n, s = e.dyn_tree, a = e.stat_desc.static_tree, o = e.stat_desc.has_stree, h = e.stat_desc.elems, u = -1;
                  for (t.heap_len = 0, t.heap_max = _, r = 0; r < h; r++) 
                      { 0 !== s[2 * r] ? (t.heap[++t.heap_len] = (u = r), t.depth[r] = 0) : (s[2 * r + 1] = 0); }
                  for (; t.heap_len < 2; ) 
                      { s[2 * (n = (t.heap[++t.heap_len] = u < 2 ? ++u : 0))] = 1, t.depth[n] = 0, t.opt_len--, o && (t.static_len -= a[2 * n + 1]); }
                  for (e.max_code = u, r = t.heap_len >> 1; 1 <= r; r--) 
                      { G(t, s, r); }
                  for (n = h; r = t.heap[1], t.heap[1] = t.heap[t.heap_len--], G(t, s, 1), i = t.heap[1], t.heap[--t.heap_max] = r, t.heap[--t.heap_max] = i, s[2 * n] = s[2 * r] + s[2 * i], t.depth[n] = (t.depth[r] >= t.depth[i] ? t.depth[r] : t.depth[i]) + 1, s[2 * r + 1] = (s[2 * i + 1] = n), t.heap[1] = n++, G(t, s, 1), 2 <= t.heap_len; ) 
                      { }
                  t.heap[--t.heap_max] = t.heap[1], (function (t, e) {
                      var r, i, n, s, a, o, h = e.dyn_tree, u = e.max_code, l = e.stat_desc.static_tree, f = e.stat_desc.has_stree, d = e.stat_desc.extra_bits, c = e.stat_desc.extra_base, p = e.stat_desc.max_length, m = 0;
                      for (s = 0; s <= g; s++) 
                          { t.bl_count[s] = 0; }
                      for (h[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1; r < _; r++) 
                          { p < (s = h[2 * h[2 * (i = t.heap[r]) + 1] + 1] + 1) && (s = p, m++), h[2 * i + 1] = s, u < i || (t.bl_count[s]++, a = 0, c <= i && (a = d[i - c]), o = h[2 * i], t.opt_len += o * (s + a), f && (t.static_len += o * (l[2 * i + 1] + a))); }
                      if (0 !== m) {
                          do {
                              for (s = p - 1; 0 === t.bl_count[s]; ) 
                                  { s--; }
                              t.bl_count[s]--, t.bl_count[s + 1] += 2, t.bl_count[p]--, m -= 2;
                          } while (0 < m);
                          for (s = p; 0 !== s; s--) 
                              { for (i = t.bl_count[s]; 0 !== i; ) 
                              { u < (n = t.heap[--r]) || (h[2 * n + 1] !== s && (t.opt_len += (s - h[2 * n + 1]) * h[2 * n], h[2 * n + 1] = s), i--); } }
                      }
                  })(t, e), Z(s, u, t.bl_count);
              }
              
              function X(t, e, r) {
                  var i, n, s = -1, a = e[1], o = 0, h = 7, u = 4;
                  for (0 === a && (h = 138, u = 3), e[2 * (r + 1) + 1] = 65535, i = 0; i <= r; i++) 
                      { n = a, a = e[2 * (i + 1) + 1], ++o < h && n === a || (o < u ? (t.bl_tree[2 * n] += o) : 0 !== n ? (n !== s && t.bl_tree[2 * n]++, t.bl_tree[2 * b]++) : o <= 10 ? t.bl_tree[2 * v]++ : t.bl_tree[2 * y]++, s = n, u = (o = 0) === a ? (h = 138, 3) : n === a ? (h = 6, 3) : (h = 7, 4)); }
              }
              
              function V(t, e, r) {
                  var i, n, s = -1, a = e[1], o = 0, h = 7, u = 4;
                  for (0 === a && (h = 138, u = 3), i = 0; i <= r; i++) 
                      { if (n = a, a = e[2 * (i + 1) + 1], !(++o < h && n === a)) {
                      if (o < u) 
                          { for (; L(t, n, t.bl_tree), 0 != --o; ) 
                          { } }
                       else 
                          { 0 !== n ? (n !== s && (L(t, n, t.bl_tree), o--), L(t, b, t.bl_tree), P(t, o - 3, 2)) : o <= 10 ? (L(t, v, t.bl_tree), P(t, o - 3, 3)) : (L(t, y, t.bl_tree), P(t, o - 11, 7)); }
                      s = n, u = (o = 0) === a ? (h = 138, 3) : n === a ? (h = 6, 3) : (h = 7, 4);
                  } }
              }
              
              i(T);
              var q = !1;
              function J(t, e, r, i) {
                  P(t, (s << 1) + (i ? 1 : 0), 3), (function (t, e, r, i) {
                      M(t), i && (U(t, r), U(t, ~r)), n.arraySet(t.pending_buf, t.window, e, r, t.pending), t.pending += r;
                  })(t, e, r, !0);
              }
              
              r._tr_init = function (t) {
                  q || ((function () {
                      var t, e, r, i, n, s = new Array(g + 1);
                      for (i = (r = 0); i < a - 1; i++) 
                          { for (I[i] = r, t = 0; t < 1 << w[i]; t++) 
                          { A[r++] = i; } }
                      for (A[r - 1] = i, i = (n = 0); i < 16; i++) 
                          { for (T[i] = n, t = 0; t < 1 << k[i]; t++) 
                          { E[n++] = i; } }
                      for (n >>= 7; i < f; i++) 
                          { for (T[i] = n << 7, t = 0; t < 1 << k[i] - 7; t++) 
                          { E[256 + n++] = i; } }
                      for (e = 0; e <= g; e++) 
                          { s[e] = 0; }
                      for (t = 0; t <= 143; ) 
                          { z[2 * t + 1] = 8, t++, s[8]++; }
                      for (; t <= 255; ) 
                          { z[2 * t + 1] = 9, t++, s[9]++; }
                      for (; t <= 279; ) 
                          { z[2 * t + 1] = 7, t++, s[7]++; }
                      for (; t <= 287; ) 
                          { z[2 * t + 1] = 8, t++, s[8]++; }
                      for (Z(z, l + 1, s), t = 0; t < f; t++) 
                          { C[2 * t + 1] = 5, C[2 * t] = j(t, 5); }
                      O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, d, p);
                  })(), q = !0), t.l_desc = new F(t.dyn_ltree, O), t.d_desc = new F(t.dyn_dtree, B), t.bl_desc = new F(t.bl_tree, R), t.bi_buf = 0, t.bi_valid = 0, W(t);
              }, r._tr_stored_block = J, r._tr_flush_block = function (t, e, r, i) {
                  var n, s, a = 0;
                  0 < t.level ? (2 === t.strm.data_type && (t.strm.data_type = (function (t) {
                      var e, r = 4093624447;
                      for (e = 0; e <= 31; e++, r >>>= 1) 
                          { if (1 & r && 0 !== t.dyn_ltree[2 * e]) 
                          { return o; } }
                      if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) 
                          { return h; }
                      for (e = 32; e < u; e++) 
                          { if (0 !== t.dyn_ltree[2 * e]) 
                          { return h; } }
                      return o;
                  })(t)), Y(t, t.l_desc), Y(t, t.d_desc), a = (function (t) {
                      var e;
                      for (X(t, t.dyn_ltree, t.l_desc.max_code), X(t, t.dyn_dtree, t.d_desc.max_code), Y(t, t.bl_desc), e = d - 1; 3 <= e && 0 === t.bl_tree[2 * S[e] + 1]; e--) 
                          { }
                      return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
                  })(t), n = t.opt_len + 3 + 7 >>> 3, (s = t.static_len + 3 + 7 >>> 3) <= n && (n = s)) : (n = (s = r + 5)), r + 4 <= n && -1 !== e ? J(t, e, r, i) : 4 === t.strategy || s === n ? (P(t, 2 + (i ? 1 : 0), 3), K(t, z, C)) : (P(t, 4 + (i ? 1 : 0), 3), (function (t, e, r, i) {
                      var n;
                      for (P(t, e - 257, 5), P(t, r - 1, 5), P(t, i - 4, 4), n = 0; n < i; n++) 
                          { P(t, t.bl_tree[2 * S[n] + 1], 3); }
                      V(t, t.dyn_ltree, e - 1), V(t, t.dyn_dtree, r - 1);
                  })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1), K(t, t.dyn_ltree, t.dyn_dtree)), W(t), i && M(t);
              }, r._tr_tally = function (t, e, r) {
                  return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & r, t.last_lit++, 0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++, e--, t.dyn_ltree[2 * (A[r] + u + 1)]++, t.dyn_dtree[2 * N(e)]++), t.last_lit === t.lit_bufsize - 1;
              }, r._tr_align = function (t) {
                  P(t, 2, 3), L(t, m, z), (function (t) {
                      16 === t.bi_valid ? (U(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : 8 <= t.bi_valid && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
                  })(t);
              };
          },{
              "../utils/common": 41
          }],
          53: [function (t, e, r) {
              e.exports = function () {
                  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
              };
          },{}],
          54: [function (t, e, r) {
              e.exports = "function" == typeof setImmediate ? setImmediate : function () {
                  var t = [].slice.apply(arguments);
                  t.splice(1, 0, 0), setTimeout.apply(null, t);
              };
          },{}]
      }, {}, [10])(10);
  });



  });

  var webfontloader = createCommonjsModule(function (module) {
  (function () {
      function aa(a, b, c) {
          return a.call.apply(a.bind, arguments);
      }
      
      function ba(a, b, c) {
          if (!a) 
              { throw Error(); }
          if (2 < arguments.length) {
              var d = Array.prototype.slice.call(arguments, 2);
              return function () {
                  var c = Array.prototype.slice.call(arguments);
                  Array.prototype.unshift.apply(c, d);
                  return a.apply(b, c);
              };
          }
          return function () {
              return a.apply(b, arguments);
          };
      }
      
      function p(a, b, c) {
          p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
          return p.apply(null, arguments);
      }
      
      var q = Date.now || function () {
          return +new Date();
      };
      function ca(a, b) {
          this.a = a;
          this.o = b || a;
          this.c = this.o.document;
      }
      
      var da = !(!window.FontFace);
      function t(a, b, c, d) {
          b = a.c.createElement(b);
          if (c) 
              { for (var e in c) 
              { c.hasOwnProperty(e) && ("style" == e ? (b.style.cssText = c[e]) : b.setAttribute(e, c[e])); } }
          d && b.appendChild(a.c.createTextNode(d));
          return b;
      }
      
      function u(a, b, c) {
          a = a.c.getElementsByTagName(b)[0];
          a || (a = document.documentElement);
          a.insertBefore(c, a.lastChild);
      }
      
      function v(a) {
          a.parentNode && a.parentNode.removeChild(a);
      }
      
      function w(a, b, c) {
          b = b || [];
          c = c || [];
          for (var d = a.className.split(/\s+/), e = 0;e < b.length; e += 1) {
              for (var f = !1, g = 0;g < d.length; g += 1) 
                  { if (b[e] === d[g]) {
                  f = !0;
                  break;
              } }
              f || d.push(b[e]);
          }
          b = [];
          for (e = 0; e < d.length; e += 1) {
              f = !1;
              for (g = 0; g < c.length; g += 1) 
                  { if (d[e] === c[g]) {
                  f = !0;
                  break;
              } }
              f || b.push(d[e]);
          }
          a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
      }
      
      function y(a, b) {
          for (var c = a.className.split(/\s+/), d = 0, e = c.length;d < e; d++) 
              { if (c[d] == b) 
              { return !0; } }
          return !1;
      }
      
      function ea(a) {
          return a.o.location.hostname || a.a.location.hostname;
      }
      
      function z(a, b, c) {
          function d() {
              m && e && f && (m(g), m = null);
          }
          
          b = t(a, "link", {
              rel: "stylesheet",
              href: b,
              media: "all"
          });
          var e = !1, f = !0, g = null, m = c || null;
          da ? (b.onload = function () {
              e = !0;
              d();
          }, b.onerror = function () {
              e = !0;
              g = Error("Stylesheet failed to load");
              d();
          }) : setTimeout(function () {
              e = !0;
              d();
          }, 0);
          u(a, "head", b);
      }
      
      function A(a, b, c, d) {
          var e = a.c.getElementsByTagName("head")[0];
          if (e) {
              var f = t(a, "script", {
                  src: b
              }), g = !1;
              f.onload = (f.onreadystatechange = function () {
                  g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = (f.onreadystatechange = null), "HEAD" == f.parentNode.tagName && e.removeChild(f));
              });
              e.appendChild(f);
              setTimeout(function () {
                  g || (g = !0, c && c(Error("Script load timeout")));
              }, d || 5E3);
              return f;
          }
          return null;
      }
      function B() {
          this.a = 0;
          this.c = null;
      }
      
      function C(a) {
          a.a++;
          return function () {
              a.a--;
              D(a);
          };
      }
      
      function E(a, b) {
          a.c = b;
          D(a);
      }
      
      function D(a) {
          0 == a.a && a.c && (a.c(), a.c = null);
      }
      function F(a) {
          this.a = a || "-";
      }
      
      F.prototype.c = function (a) {
          var arguments$1 = arguments;

          for (var b = [], c = 0;c < arguments.length; c++) 
              { b.push(arguments$1[c].replace(/[\W_]+/g, "").toLowerCase()); }
          return b.join(this.a);
      };
      function G(a, b) {
          this.c = a;
          this.f = 4;
          this.a = "n";
          var c = (b || "n4").match(/^([nio])([1-9])$/i);
          c && (this.a = c[1], this.f = parseInt(c[2], 10));
      }
      
      function fa(a) {
          return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
      }
      
      function I(a) {
          var b = [];
          a = a.split(/,\s*/);
          for (var c = 0;c < a.length; c++) {
              var d = a[c].replace(/['"]/g, "");
              -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
          }
          return b.join(",");
      }
      
      function J(a) {
          return a.a + a.f;
      }
      
      function H(a) {
          var b = "normal";
          "o" === a.a ? (b = "oblique") : "i" === a.a && (b = "italic");
          return b;
      }
      
      function ga(a) {
          var b = 4, c = "n", d = null;
          a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? (b = 7) : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
          return c + b;
      }
      function ha(a, b) {
          this.c = a;
          this.f = a.o.document.documentElement;
          this.h = b;
          this.a = new F("-");
          this.j = !1 !== b.events;
          this.g = !1 !== b.classes;
      }
      
      function ia(a) {
          a.g && w(a.f, [a.a.c("wf", "loading")]);
          K(a, "loading");
      }
      
      function L(a) {
          if (a.g) {
              var b = y(a.f, a.a.c("wf", "active")), c = [], d = [a.a.c("wf", "loading")];
              b || c.push(a.a.c("wf", "inactive"));
              w(a.f, c, d);
          }
          K(a, "inactive");
      }
      
      function K(a, b, c) {
          if (a.j && a.h[b]) 
              { if (c) 
              { a.h[b](c.c, J(c)); }
           else 
              { a.h[b](); } }
      }
      function ja() {
          this.c = {};
      }
      
      function ka(a, b, c) {
          var d = [], e;
          for (e in b) 
              { if (b.hasOwnProperty(e)) {
              var f = a.c[e];
              f && d.push(f(b[e], c));
          } }
          return d;
      }
      function M(a, b) {
          this.c = a;
          this.f = b;
          this.a = t(this.c, "span", {
              "aria-hidden": "true"
          }, this.f);
      }
      
      function N(a) {
          u(a.c, "body", a.a);
      }
      
      function O(a) {
          return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
      }
      function P(a, b, c, d, e, f) {
          this.g = a;
          this.j = b;
          this.a = d;
          this.c = c;
          this.f = e || 3E3;
          this.h = f || void 0;
      }
      
      P.prototype.start = function () {
          var a = this.c.o.document, b = this, c = q(), d = new Promise(function (d, e) {
              function f() {
                  q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
                      1 <= a.length ? d() : setTimeout(f, 25);
                  }, function () {
                      e();
                  });
              }
              
              f();
          }), e = null, f = new Promise(function (a, d) {
              e = setTimeout(d, b.f);
          });
          Promise.race([f,d]).then(function () {
              e && (clearTimeout(e), e = null);
              b.g(b.a);
          }, function () {
              b.j(b.a);
          });
      };
      function Q(a, b, c, d, e, f, g) {
          this.v = a;
          this.B = b;
          this.c = c;
          this.a = d;
          this.s = g || "BESbswy";
          this.f = {};
          this.w = e || 3E3;
          this.u = f || null;
          this.m = (this.j = (this.h = (this.g = null)));
          this.g = new M(this.c, this.s);
          this.h = new M(this.c, this.s);
          this.j = new M(this.c, this.s);
          this.m = new M(this.c, this.s);
          a = new G(this.a.c + ",serif", J(this.a));
          a = O(a);
          this.g.a.style.cssText = a;
          a = new G(this.a.c + ",sans-serif", J(this.a));
          a = O(a);
          this.h.a.style.cssText = a;
          a = new G("serif", J(this.a));
          a = O(a);
          this.j.a.style.cssText = a;
          a = new G("sans-serif", J(this.a));
          a = O(a);
          this.m.a.style.cssText = a;
          N(this.g);
          N(this.h);
          N(this.j);
          N(this.m);
      }
      
      var R = {
          D: "serif",
          C: "sans-serif"
      }, S = null;
      function T() {
          if (null === S) {
              var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
              S = !(!a) && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
          }
          return S;
      }
      
      Q.prototype.start = function () {
          this.f.serif = this.j.a.offsetWidth;
          this.f["sans-serif"] = this.m.a.offsetWidth;
          this.A = q();
          U(this);
      };
      function la(a, b, c) {
          for (var d in R) 
              { if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) 
              { return !0; } }
          return !1;
      }
      
      function U(a) {
          var b = a.g.a.offsetWidth, c = a.h.a.offsetWidth, d;
          (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
          d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
      }
      
      function ma(a) {
          setTimeout(p(function () {
              U(this);
          }, a), 50);
      }
      
      function V(a, b) {
          setTimeout(p(function () {
              v(this.g.a);
              v(this.h.a);
              v(this.j.a);
              v(this.m.a);
              b(this.a);
          }, a), 0);
      }
      function W(a, b, c) {
          this.c = a;
          this.a = b;
          this.f = 0;
          this.m = (this.j = !1);
          this.s = c;
      }
      
      var X = null;
      W.prototype.g = function (a) {
          var b = this.a;
          b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"),
              b.a.c("wf", a.c, J(a).toString(), "inactive")]);
          K(b, "fontactive", a);
          this.m = !0;
          na(this);
      };
      W.prototype.h = function (a) {
          var b = this.a;
          if (b.g) {
              var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")), d = [], e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
              c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
              w(b.f, d, e);
          }
          K(b, "fontinactive", a);
          na(this);
      };
      function na(a) {
          0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"),
              a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
      }
      function oa(a) {
          this.j = a;
          this.a = new ja();
          this.h = 0;
          this.f = (this.g = !0);
      }
      
      oa.prototype.load = function (a) {
          this.c = new ca(this.j, a.context || this.j);
          this.g = !1 !== a.events;
          this.f = !1 !== a.classes;
          pa(this, new ha(this.c, a), a);
      };
      function qa(a, b, c, d, e) {
          var f = 0 == --a.h;
          (a.f || a.g) && setTimeout(function () {
              var a = e || null, m = d || null || {};
              if (0 === c.length && f) 
                  { L(b.a); }
               else {
                  b.f += c.length;
                  f && (b.j = f);
                  var h, l = [];
                  for (h = 0; h < c.length; h++) {
                      var k = c[h], n = m[k.c], r = b.a, x = k;
                      r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
                      K(r, "fontloading", x);
                      r = null;
                      if (null === X) 
                          { if (window.FontFace) {
                          var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                          X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0;
                      } else 
                          { X = !1; } }
                      X ? (r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n)) : (r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a, n));
                      l.push(r);
                  }
                  for (h = 0; h < l.length; h++) 
                      { l[h].start(); }
              }
          }, 0);
      }
      
      function pa(a, b, c) {
          var d = [], e = c.timeout;
          ia(b);
          var d = ka(a.a, c, a.c), f = new W(a.c, b, e);
          a.h = d.length;
          b = 0;
          for (c = d.length; b < c; b++) 
              { d[b].load(function (b, d, c) {
              qa(a, f, b, d, c);
          }); }
      }
      function ra(a, b) {
          this.c = a;
          this.a = b;
      }
      
      ra.prototype.load = function (a) {
          function b() {
              if (f["__mti_fntLst" + d]) {
                  var c = f["__mti_fntLst" + d](), e = [], h;
                  if (c) 
                      { for (var l = 0;l < c.length; l++) {
                      var k = c[l].fontfamily;
                      void 0 != c[l].fontStyle && void 0 != c[l].fontWeight ? (h = c[l].fontStyle + c[l].fontWeight, e.push(new G(k, h))) : e.push(new G(k));
                  } }
                  a(e);
              } else 
                  { setTimeout(function () {
                  b();
              }, 50); }
          }
          
          var c = this, d = c.a.projectId, e = c.a.version;
          if (d) {
              var f = c.c.o;
              A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function (e) {
                  e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
                      return c.a;
                  }, b());
              }).id = "__MonotypeAPIScript__" + d;
          } else 
              { a([]); }
      };
      function sa(a, b) {
          this.c = a;
          this.a = b;
      }
      
      sa.prototype.load = function (a) {
          var b, c, d = this.a.urls || [], e = this.a.families || [], f = this.a.testStrings || {}, g = new B();
          b = 0;
          for (c = d.length; b < c; b++) 
              { z(this.c, d[b], C(g)); }
          var m = [];
          b = 0;
          for (c = e.length; b < c; b++) 
              { if (d = e[b].split(":"), d[1]) 
              { for (var h = d[1].split(","), l = 0;l < h.length; l += 1) 
              { m.push(new G(d[0], h[l])); } }
           else 
              { m.push(new G(d[0])); } }
          E(g, function () {
              a(m, f);
          });
      };
      function ta(a, b) {
          a ? (this.c = a) : (this.c = ua);
          this.a = [];
          this.f = [];
          this.g = b || "";
      }
      
      var ua = "https://fonts.googleapis.com/css";
      function va(a, b) {
          for (var c = b.length, d = 0;d < c; d++) {
              var e = b[d].split(":");
              3 == e.length && a.f.push(e.pop());
              var f = "";
              2 == e.length && "" != e[1] && (f = ":");
              a.a.push(e.join(f));
          }
      }
      
      function wa(a) {
          if (0 == a.a.length) 
              { throw Error("No fonts to load!"); }
          if (-1 != a.c.indexOf("kit=")) 
              { return a.c; }
          for (var b = a.a.length, c = [], d = 0;d < b; d++) 
              { c.push(a.a[d].replace(/ /g, "+")); }
          b = a.c + "?family=" + c.join("%7C");
          0 < a.f.length && (b += "&subset=" + a.f.join(","));
          0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
          return b;
      }
      function ya(a) {
          this.f = a;
          this.a = [];
          this.c = {};
      }
      
      var za = {
          latin: "BESbswy",
          "latin-ext": "\u00e7\u00f6\u00fc\u011f\u015f",
          cyrillic: "\u0439\u044f\u0416",
          greek: "\u03b1\u03b2\u03a3",
          khmer: "\u1780\u1781\u1782",
          Hanuman: "\u1780\u1781\u1782"
      }, Aa = {
          thin: "1",
          extralight: "2",
          "extra-light": "2",
          ultralight: "2",
          "ultra-light": "2",
          light: "3",
          regular: "4",
          book: "4",
          medium: "5",
          "semi-bold": "6",
          semibold: "6",
          "demi-bold": "6",
          demibold: "6",
          bold: "7",
          "extra-bold": "8",
          extrabold: "8",
          "ultra-bold": "8",
          ultrabold: "8",
          black: "9",
          heavy: "9",
          l: "3",
          r: "4",
          b: "7"
      }, Ba = {
          i: "i",
          italic: "i",
          n: "n",
          normal: "n"
      }, Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
      function Da(a) {
          for (var b = a.f.length, c = 0;c < b; c++) {
              var d = a.f[c].split(":"), e = d[0].replace(/\+/g, " "), f = ["n4"];
              if (2 <= d.length) {
                  var g;
                  var m = d[1];
                  g = [];
                  if (m) 
                      { for (var m = m.split(","), h = m.length, l = 0;l < h; l++) {
                      var k;
                      k = m[l];
                      if (k.match(/^[\w-]+$/)) {
                          var n = Ca.exec(k.toLowerCase());
                          if (null == n) 
                              { k = ""; }
                           else {
                              k = n[2];
                              k = null == k || "" == k ? "n" : Ba[k];
                              n = n[1];
                              if (null == n || "" == n) 
                                  { n = "4"; }
                               else 
                                  { var r = Aa[n], n = r ? r : isNaN(n) ? "4" : n.substr(0, 1); }
                              k = [k,n].join("");
                          }
                      } else 
                          { k = ""; }
                      k && g.push(k);
                  } }
                  0 < g.length && (f = g);
                  3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
              }
              a.c[e] || (d = za[e]) && (a.c[e] = d);
              for (d = 0; d < f.length; d += 1) 
                  { a.a.push(new G(e, f[d])); }
          }
      }
      function Ea(a, b) {
          this.c = a;
          this.a = b;
      }
      
      var Fa = {
          Arimo: !0,
          Cousine: !0,
          Tinos: !0
      };
      Ea.prototype.load = function (a) {
          var b = new B(), c = this.c, d = new ta(this.a.api, this.a.text), e = this.a.families;
          va(d, e);
          var f = new ya(e);
          Da(f);
          z(c, wa(d), C(b));
          E(b, function () {
              a(f.a, f.c, Fa);
          });
      };
      function Ga(a, b) {
          this.c = a;
          this.a = b;
      }
      
      Ga.prototype.load = function (a) {
          var b = this.a.id, c = this.c.o;
          b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
              if (b) 
                  { a([]); }
               else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
                  b = c.Typekit.config.fn;
                  for (var e = [], f = 0;f < b.length; f += 2) 
                      { for (var g = b[f], m = b[f + 1], h = 0;h < m.length; h++) 
                      { e.push(new G(g, m[h])); } }
                  try {
                      c.Typekit.load({
                          events: !1,
                          classes: !1,
                          async: !0
                      });
                  } catch (l) {}
                  a(e);
              }
          }, 2E3) : a([]);
      };
      function Ha(a, b) {
          this.c = a;
          this.f = b;
          this.a = [];
      }
      
      Ha.prototype.load = function (a) {
          var b = this.f.id, c = this.c.o, d = this;
          b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
              for (var g = 0, m = c.fonts.length;g < m; ++g) {
                  var h = c.fonts[g];
                  d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
              }
              a(d.a);
          }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
              b && a([]);
          })) : a([]);
      };
      var Y = new oa(window);
      Y.a.c.custom = function (a, b) {
          return new sa(b, a);
      };
      Y.a.c.fontdeck = function (a, b) {
          return new Ha(b, a);
      };
      Y.a.c.monotype = function (a, b) {
          return new ra(b, a);
      };
      Y.a.c.typekit = function (a, b) {
          return new Ga(b, a);
      };
      Y.a.c.google = function (a, b) {
          return new Ea(b, a);
      };
      var Z = {
          load: p(Y.load, Y)
      };
      module.exports ? (module.exports = Z) : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
  })();



  });

  var assetsWeb = [{
    name: "symbol",
    url: "/peachImage/symbol.png"
  }, {
    name: "peach_logo_black",
    url: "/peachImage/peach_logo_black.png"
  }, {
    name: "basicscreen_icon",
    url: "/peachImage/basicscreen_icon.png"
  }, {
    name: "card_icon_new",
    url: "/peachImage/card_icon_new.png"
  }, {
    name: "paint_icon_new",
    url: "/peachImage/paint_icon_new.png"
  }, {
    name: "arrow_left_new",
    url: "/peachImage/arrow_left_new.png"
  }, {
    name: "arrow_right_new",
    url: "/peachImage/arrow_right_new.png"
  }, {
    name: "two_way_arrow_new",
    url: "/peachImage/two_way_arrow_new.png"
  }, {
    name: "check_new",
    url: "/peachImage/check_new.png"
  }, {
    name: "hex_stroke_new",
    url: "/peachImage/hex_stroke_new.png"
  }, {
    name: "down",
    url: "/peachImage/btn-down-hov.png"
  }, {
    name: "triangleR",
    url: "/peachImage/triangleR.png"
  }, {
    name: "triangleL",
    url: "/peachImage/triangleL.png"
  }, {
    name: "bookmark_icon",
    url: "/peachImage/bookmark_icon.png"
  }, {
    name: "card_icon",
    url: "/peachImage/card_icon.png"
  }, {
    name: "fullscreen_icon",
    url: "/peachImage/fullscreen_icon.png"
  }, {
    name: "paint_icon",
    url: "/peachImage/paint_icon.png"
  }, {
    name: "print_icon",
    url: "/peachImage/print_icon.png"
  }, {
    name: "thumb_icon",
    url: "/peachImage/thumb_icon.png"
  }, {
    name: "audio_icon",
    url: "/peachImage/audio_icon.png"
  }, {
    name: "finish_icon",
    url: "/peachImage/finish_icon.png"
  }, {
    name: "inputBox",
    url: "/peachImage/inputBox.png"
  }, {
    name: "explain_icon",
    url: "/peachImage/explain_icon.png"
  }, {
    name: "topBox",
    url: "/peachImage/top_rounded_rec.png"
  }, {
    name: "manual_long",
    url: "/peachImage/manual_long.png"
  }, {
    name: "rounded_rec",
    url: "/peachImage/rounded_rec.png"
  }, {
    name: "prince",
    url: "/peachImage/prince.jpg"
  }, {
    name: "after10",
    url: "/peachImage/after10.png"
  }, {
    name: "audio_next",
    url: "/peachImage/audio_next.png"
  }, {
    name: "audio_pause",
    url: "/peachImage/audio_pause.png"
  }, {
    name: "audio_play",
    url: "/peachImage/audio_play.png"
  }, {
    name: "audio_prev",
    url: "/peachImage/audio_prev.png"
  }, {
    name: "before10",
    url: "/peachImage/before10.png"
  }, {
    name: "hl_icon",
    url: "/peachImage/hl_icon.png"
  }, {
    name: "pen_icon",
    url: "/peachImage/pen_icon.png"
  }, {
    name: "shapes_icon",
    url: "/peachImage/shapes_icon.png"
  }, {
    name: "Q_icon",
    url: "/peachImage/Q_icon.png"
  }, {
    name: "bookmark",
    url: "/peachImage/bookmark.png"
  }, {
    name: "bookmark_star",
    url: "/peachImage/bookmark_star.png"
  }, {
    name: "select_icon",
    url: "/peachImage/select_icon.png"
  }, {
    name: "trash_icon",
    url: "/peachImage/trash_icon.png"
  }, {
    name: "text_icon",
    url: "/peachImage/text_icon.png"
  }, {
    name: "save_icon",
    url: "/peachImage/save_icon.png"
  }, {
    name: "eraser_icon",
    url: "/peachImage/eraser_icon.png"
  }, {
    name: "speedBtn",
    url: "/peachImage/speedBtn.png"
  }, {
    name: "check",
    url: "/peachImage/check.png"
  }, {
    name: "circle",
    url: "/peachImage/circle.png"
  }, {
    name: "btn25",
    url: "/peachImage/btn25.png"
  }, {
    name: "border25",
    url: "/peachImage/border25.png"
  }, {
    name: "shapes_tooltip",
    url: "/peachImage/shapes_tooltip.png"
  }, {
    name: "arrow_left",
    url: "/peachImage/arrow_left.png"
  }, {
    name: "arrow_right",
    url: "/peachImage/arrow_right.png"
  }, {
    name: "cir",
    url: "/peachImage/cir.png"
  }, {
    name: "cir_stroke",
    url: "/peachImage/cir_stroke.png"
  }, {
    name: "hex_stroke",
    url: "/peachImage/hex_stroke.png"
  }, {
    name: "gather_icon",
    url: "/peachImage/gather_icon.png"
  }, {
    name: "hex",
    url: "/peachImage/hex.png"
  }, {
    name: "listenAll",
    url: "/peachImage/listenAll.png"
  }, {
    name: "rec_stroke",
    url: "/peachImage/rec_stroke.png"
  }, {
    name: "rec",
    url: "/peachImage/rec.png"
  }, {
    name: "star",
    url: "/peachImage/star.png"
  }, {
    name: "star_stroke",
    url: "/peachImage/star_stroke.png"
  }, {
    name: "tri_stroke",
    url: "/peachImage/tri_stroke.png"
  }, {
    name: "tri",
    url: "/peachImage/tri.png"
  }, {
    name: "two_way_arrow",
    url: "/peachImage/two_way_arrow.png"
  }, {
    name: "btn22",
    url: "/peachImage/btn22.png"
  }, {
    name: "color",
    url: "/peachImage/color.png"
  }, {
    name: "tutorial_next",
    url: "/peachImage/tutorial_next.png"
  }, {
    name: "tutorial_prev",
    url: "/peachImage/tutorial_prev.png"
  }, {
    name: "tutorial_txt",
    url: "/peachImage/tutorial_txt.png"
  }, {
    name: "tutorial_x",
    url: "/peachImage/tutorial_x.png"
  }, {
    name: "tutorial1",
    url: "/peachImage/tutorial1.png"
  }, {
    name: "tutorial2_1",
    url: "/peachImage/tutorial2_1.png"
  }, {
    name: "tutorial2_2",
    url: "/peachImage/tutorial2_2.png"
  }, {
    name: "tutorial2_3",
    url: "/peachImage/tutorial2_3.png"
  }, {
    name: "tutorial2_4",
    url: "/peachImage/tutorial2_4.png"
  }, {
    name: "tutorial2_5",
    url: "/peachImage/tutorial2_5.png"
  }, {
    name: "tutorial2_6",
    url: "/peachImage/tutorial2_6.png"
  }, {
    name: "tutorial2_7",
    url: "/peachImage/tutorial2_7.png"
  }, {
    name: "tutorial3_1",
    url: "/peachImage/tutorial3_1.png"
  }, {
    name: "tutorial3_2",
    url: "/peachImage/tutorial3_2.png"
  }, {
    name: "tutorial3_3",
    url: "/peachImage/tutorial3_3.png"
  }, {
    name: "tutorial3_4",
    url: "/peachImage/tutorial3_4.png"
  }, {
    name: "tutorial4_1",
    url: "/peachImage/tutorial4_1.png"
  }, {
    name: "tutorial4_2",
    url: "/peachImage/tutorial4_2.png"
  }, {
    name: "tutorial5_1",
    url: "/peachImage/tutorial5_1.png"
  }, {
    name: "tutorial5_2",
    url: "/peachImage/tutorial5_2.png"
  }, {
    name: "tutorial6_1",
    url: "/peachImage/tutorial6_1.png"
  }, {
    name: "tutorial6_2",
    url: "/peachImage/tutorial6_2.png"
  }, {
    name: "tutorial7_1",
    url: "/peachImage/tutorial7_1.png"
  }, {
    name: "tutorial7_2",
    url: "/peachImage/tutorial7_2.png"
  }, {
    name: "tutorial8_1",
    url: "/peachImage/tutorial8_1.png"
  }, {
    name: "tutorial8_2",
    url: "/peachImage/tutorial8_2.png"
  }, {
    name: "tutorial9_1",
    url: "/peachImage/tutorial9_1.png"
  }, {
    name: "tutorial9_2",
    url: "/peachImage/tutorial9_2.png"
  }, {
    name: "asc",
    url: "/peachImage/asc.png"
  }, {
    name: "dsc",
    url: "/peachImage/dsc.png"
  }];
  var assetsAdmin = [{
    name: "symbol",
    url: "/peachImage/symbol.png"
  }, {
    name: "peach_logo_black",
    url: "/peachImage/peach_logo_black.png"
  }, {
    name: "basicscreen_icon",
    url: "/peachImage/basicscreen_icon.png"
  }, {
    name: "card_icon_new",
    url: "/peachImage/card_icon_new.png"
  }, {
    name: "paint_icon_new",
    url: "/peachImage/paint_icon_new.png"
  }, {
    name: "arrow_left_new",
    url: "/peachImage/arrow_left_new.png"
  }, {
    name: "arrow_right_new",
    url: "/peachImage/arrow_right_new.png"
  }, {
    name: "two_way_arrow_new",
    url: "/peachImage/two_way_arrow_new.png"
  }, {
    name: "check_new",
    url: "/peachImage/check_new.png"
  }, {
    name: "down",
    url: "/peachImage/btn-down-hov.png"
  }, {
    name: "height_icon",
    url: "/peachImage/height.png"
  }, {
    name: "listenAll",
    url: "/peachImage/listenAll.png"
  }, {
    name: "btn25",
    url: "/peachImage/btn25.png"
  }, {
    name: "border25",
    url: "/peachImage/border25.png"
  }, {
    name: "speedBtn",
    url: "/peachImage/speedBtn.png"
  }, {
    name: "after10",
    url: "/peachImage/after10.png"
  }, {
    name: "audio_next",
    url: "/peachImage/audio_next.png"
  }, {
    name: "audio_pause",
    url: "/peachImage/audio_pause.png"
  }, {
    name: "audio_play",
    url: "/peachImage/audio_play.png"
  }, {
    name: "audio_prev",
    url: "/peachImage/audio_prev.png"
  }, {
    name: "before10",
    url: "/peachImage/before10.png"
  }, {
    name: "prince",
    url: "/peachImage/prince.jpg"
  }, {
    name: "plus",
    url: "/peachImage/plus.png"
  }, {
    name: "dotSquare",
    url: "/peachImage/dotSquare.png"
  }, {
    name: "rounded_rec",
    url: "/peachImage/rounded_rec.png"
  }, {
    name: "asc",
    url: "/peachImage/asc.png"
  }, {
    name: "dsc",
    url: "/peachImage/dsc.png"
  }, {
    name: "tooltip",
    url: "/peachImage/tooltip.png"
  }, {
    name: "manual_long",
    url: "/peachImage/manual_long.png"
  }, {
    name: "topBox",
    url: "/peachImage/top_rounded_rec.png"
  }, {
    name: "card_icon",
    url: "/peachImage/card_icon.png"
  }, {
    name: "bookmark_icon",
    url: "/peachImage/bookmark_icon.png"
  }, {
    name: "fullscreen_icon",
    url: "/peachImage/fullscreen_icon.png"
  }, {
    name: "paint_icon",
    url: "/peachImage/paint_icon.png"
  }, {
    name: "print_icon",
    url: "/peachImage/print_icon.png"
  }, {
    name: "explain_icon",
    url: "/peachImage/explain_icon.png"
  }, {
    name: "circle",
    url: "/peachImage/circle.png"
  }, {
    name: "clampy",
    url: "/peachImage/clampy.png"
  }, {
    name: "triangleR",
    url: "/peachImage/triangleR.png"
  }, {
    name: "triangleL",
    url: "/peachImage/triangleL.png"
  }, {
    name: "grid",
    url: "/peachImage/grid.png"
  }, {
    name: "arrow",
    url: "/peachImage/arrow-down.png"
  }, {
    name: "disk_icon",
    url: "/peachImage/disk_icon.png"
  }, {
    name: "finish_icon",
    url: "/peachImage/finish_icon.png"
  }, {
    name: "grid_icon",
    url: "/peachImage/grid_icon.png"
  }, {
    name: "preview_icon",
    url: "/peachImage/preview_icon.png"
  }, {
    name: "Q_icon",
    url: "/peachImage/Q_icon.png"
  }, {
    name: "audio_icon",
    url: "/peachImage/audio_icon.png"
  }, {
    name: "thumb_icon",
    url: "/peachImage/thumb_icon.png"
  }, {
    name: "btn_02",
    url: "/peachImage/btn-02.png"
  }, {
    name: "btn_03",
    url: "/peachImage/btn-03.png"
  }, {
    name: "go_first",
    url: "/peachImage/go_first.png"
  }, {
    name: "go_last",
    url: "/peachImage/go_last.png"
  }, {
    name: "page_next",
    url: "/peachImage/page_next.png"
  }, {
    name: "page_prev",
    url: "/peachImage/page_prev.png"
  }, {
    name: "inputBox",
    url: "/peachImage/inputBox.png"
  }, {
    name: "tutorial_next",
    url: "/peachImage/tutorial_next.png"
  }, {
    name: "tutorial_prev",
    url: "/peachImage/tutorial_prev.png"
  }, {
    name: "tutorial_txt",
    url: "/peachImage/tutorial_txt.png"
  }, {
    name: "tutorial_x",
    url: "/peachImage/tutorial_x.png"
  }, {
    name: "tutorial1",
    url: "/peachImage/tutorial1.png"
  }, {
    name: "tutorial2_1",
    url: "/peachImage/tutorial2_1.png"
  }, {
    name: "tutorial2_2",
    url: "/peachImage/tutorial2_2.png"
  }, {
    name: "tutorial2_3",
    url: "/peachImage/tutorial2_3.png"
  }, {
    name: "tutorial2_4",
    url: "/peachImage/tutorial2_4.png"
  }, {
    name: "tutorial2_5",
    url: "/peachImage/tutorial2_5.png"
  }, {
    name: "tutorial2_6",
    url: "/peachImage/tutorial2_6.png"
  }, {
    name: "tutorial2_7",
    url: "/peachImage/tutorial2_7.png"
  }, {
    name: "tutorial3_1",
    url: "/peachImage/tutorial3_1.png"
  }, {
    name: "tutorial3_2",
    url: "/peachImage/tutorial3_2.png"
  }, {
    name: "tutorial3_3",
    url: "/peachImage/tutorial3_3.png"
  }, {
    name: "tutorial3_4",
    url: "/peachImage/tutorial3_4.png"
  }, {
    name: "tutorial4_1",
    url: "/peachImage/tutorial4_1.png"
  }, {
    name: "tutorial4_2",
    url: "/peachImage/tutorial4_2.png"
  }, {
    name: "tutorial5_1",
    url: "/peachImage/tutorial5_1.png"
  }, {
    name: "tutorial5_2",
    url: "/peachImage/tutorial5_2.png"
  }, {
    name: "tutorial6_1",
    url: "/peachImage/tutorial6_1.png"
  }, {
    name: "tutorial6_2",
    url: "/peachImage/tutorial6_2.png"
  }, {
    name: "tutorial7_1",
    url: "/peachImage/tutorial7_1.png"
  }, {
    name: "tutorial7_2",
    url: "/peachImage/tutorial7_2.png"
  }, {
    name: "tutorial8_1",
    url: "/peachImage/tutorial8_1.png"
  }, {
    name: "tutorial8_2",
    url: "/peachImage/tutorial8_2.png"
  }, {
    name: "tutorial9_1",
    url: "/peachImage/tutorial9_1.png"
  }, {
    name: "tutorial9_2",
    url: "/peachImage/tutorial9_2.png"
  }];

  var ButtonHandler = function ButtonHandler(option) {
    this.graphic = new PIXI.Graphics();
    var lineColor = option.lineColor || 0;
    var line = 2;

    if (option.line !== undefined) {
      line = option.line;
    }

    this.graphic.lineStyle(line, lineColor, 1, 1, true);
    this.graphic.beginFill(0xffffff);

    if (option.rounded) {
      this.graphic.drawRoundedRect(0, 0, option.width, option.height, option.rounded);
    } else {
      this.graphic.drawRect(0, 0, option.width, option.height);
    }

    this.graphic.endFill();

    if (option.background) {
      this.background = option.background;
    } else {
      this.background = new GraphicsSprite(this.graphic);
    }

    if (option.text) {
      var obj = option.text;
      this.buttonText = new PIXI.UI.Text(obj.name, obj.style);
      this.button = new PIXI.UI.Button({
        background: this.background,
        width: option.width,
        height: option.height,
        text: this.buttonText
      });
    } else {
      this.button = new PIXI.UI.Button({
        background: this.background,
        width: option.width,
        height: option.height
      });
    }

    if (option.img) {
      var obj$1 = option.img;

      if (obj$1.url) {
        this.addImage(obj$1, option.bg);
      }
    }

    if (option.tint) {
      this.background.tint = option.tint;
    }
  };

  var prototypeAccessors$1 = {
    text: {
      configurable: true
    },
    changeBack: {
      configurable: true
    },
    backgroundColor: {
      configurable: true
    },
    bounds: {
      configurable: true
    },
    alpha: {
      configurable: true
    }
  };

  prototypeAccessors$1.text.set = function (t) {
    this.buttonText.text = t;
  };

  prototypeAccessors$1.text.get = function () {
    return this.buttonText;
  };

  prototypeAccessors$1.changeBack.set = function (texture) {
    this.button.background.sprite.texture = texture;
  };

  prototypeAccessors$1.backgroundColor.set = function (tint) {
    this.button.background.tint = tint;
  };

  ButtonHandler.prototype.pos = function pos(x, y) {
    this.button.x = x;
    this.button.y = y;
  };

  prototypeAccessors$1.bounds.get = function () {
    return this.target.getBoundingClientRect();
  };

  prototypeAccessors$1.alpha.set = function (a) {
    this.button.background.alpha = a;
  };

  ButtonHandler.prototype.onHover = function onHover(func) {
    this.button.on("hover", func);
  };

  ButtonHandler.prototype.onClick = function onClick(func) {
    this.button.on("click", func);
  };

  ButtonHandler.prototype.addImage = function addImage(obj, bg) {
    if (bg) {
      this.button.addChild(bg);
    }

    var t = new PIXI.Texture.from(obj.url);
    this[obj.url] = new PIXI.UI.Sprite(t);

    if (obj.tint) {
      this[obj.url].tint = obj.tint;
    }

    this[obj.url].interactive = true;
    this[obj.url].buttonMode = true;

    if (obj.width) {
      this[obj.url].width = obj.width;
    }

    if (obj.height) {
      this[obj.url].height = obj.height;
    }

    this[obj.url].pivotX = 0.5;
    this[obj.url].pivotY = 0.5;
    this.button.addChild(this[obj.url]);
  };

  ButtonHandler.prototype.removeImage = function removeImage(obj) {
    this.button.removeChild(this[obj.url]);
  };

  ButtonHandler.prototype.addText = function addText(obj) {
    this[obj.name] = new PIXI.UI.Text(obj.text, obj.style);
    this.button.addChild(this[obj.name]);
  };

  ButtonHandler.prototype.removeText = function removeText(obj) {
    this.button.removeChild(this[obj.name]);
  };

  ButtonHandler.prototype.MakedisableTexture = function MakedisableTexture(tint, lineColor) {
    this.graphic.clear();
    this.graphic.lineStyle(2, lineColor, 1, 1, true);
    this.graphic.beginFill(tint);
    this.graphic.drawRect(0, 0, this.button.width, this.button.height);
    this.graphic.endFill();
    this.disableT = Manager.app.renderer.generateTexture(this.graphic);
  };

  ButtonHandler.prototype.MakeactiveTexture = function MakeactiveTexture(tint, lineColor) {
    this.graphic.clear();
    this.graphic.lineStyle(2, lineColor);
    this.graphic.beginFill(tint);
    this.graphic.drawRect(0, 0, this.button.width, this.button.height);
    this.graphic.endFill();
    this.activeT = Manager.app.renderer.generateTexture(this.graphic);
  };

  Object.defineProperties(ButtonHandler.prototype, prototypeAccessors$1);

  var DeletePopUp = /*@__PURE__*/function (superclass) {
    function DeletePopUp(func, text) {
      var this$1$1 = this;
      superclass.call(this, "100%", "100%");
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.filter = new Filter("100%", "100%");
      this.filter.sprite.buttonMode = false;
      var graphics = new PIXI.Graphics();
      graphics.lineStyle(2, 0xffffff, 1);
      graphics.beginFill(0xffffff);
      graphics.drawRoundedRect(0, 0, 410 * ratioX, 120 * ratioY, 4);
      graphics.endFill();
      this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
      this.card.sprite.interactive = true;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var cancleBtn = new ButtonHandler({
        width: 120 * ratioX,
        height: 40 * ratioY,
        lineColor: 0xdadada,
        text: {
          name: "취소",
          style: fontstyle.Black14
        }
      });
      var deleteBtn = new ButtonHandler({
        width: 120 * ratioX,
        height: 40 * ratioY,
        tint: 0x0b4247,
        lineColor: 0x0b4247,
        text: {
          name: "삭제",
          style: fontstyle.White14
        }
      });
      cancleBtn.button.anchorLeft = deleteBtn.button.anchorRight = 75 * ratioX;
      cancleBtn.button.anchorBottom = deleteBtn.button.anchorBottom = 18 * ratioY;
      var txt = new PIXI.UI.Text(text, fontstyle.Black16);
      txt.horizontalAlign = "center";
      txt.anchorTop = 20 * ratioY;
      this.container.on("close", function () {
        this$1$1.parent.removeChild(this$1$1);
      });
      cancleBtn.onClick(function () {
        this$1$1.container.emit("close");
      });
      deleteBtn.onClick(function () {
        func();
        this$1$1.container.emit("close");
      });
      this.card.addChild(cancleBtn.button, deleteBtn.button, txt);
      this.addChild(this.filter, this.card);
    }

    if (superclass) DeletePopUp.__proto__ = superclass;
    DeletePopUp.prototype = Object.create(superclass && superclass.prototype);
    DeletePopUp.prototype.constructor = DeletePopUp;
    return DeletePopUp;
  }(PIXI.UI.Container);

  var _baseSelect;

  var LeftMenuAdmin = /*@__PURE__*/function (superclass) {
    function LeftMenuAdmin() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(1, color.bgBox);
      graphic.beginFill(color.bgBox);
      graphic.drawRect(0, 0, 221 * ratioX, window.innerHeight);
      graphic.endFill();
      superclass.call(this, PIXI.Texture.EMPTY);
      this.back = new GraphicsSprite(graphic);
      graphic.clear();
      graphic.lineStyle(1, color.white);
      graphic.beginFill(color.white);
      graphic.drawRect(0, 0, 270 * ratioX, window.innerHeight);
      graphic.endFill();
      this.startClick = false;
      this.listcon = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      this.filter = new GraphicsSprite(graphic);
      this.filter.alpha = 0.5;
      this.width = 270 * ratioX;
      this.height = "100%";
      this.back.heigth = "100%";
      var verticalLine = new LineSprte(1, 1020 * ratioY, color.line);
      verticalLine.anchorLeft = 210 * ratioX;
      verticalLine.anchorBottom = 0;
      this.picture = this.makeTitleSprite("그림단어");
      this.voice = this.makeTitleSprite("음성");
      this.listcon.heigth = "100%";
      graphic.clear();
      graphic.lineStyle(2, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRoundedRect(0, 0, 10, 10, 10);
      graphic.endFill();
      var t = Manager.app.renderer.generateTexture(graphic);
      var ScrollingContainer = new PIXI.UI.ScrollingContainer({
        scrollX: false,
        scrollY: true
      });
      ScrollingContainer.width = "100%";
      ScrollingContainer.height = "102%";
      ScrollingContainer.anchorTop = 61 * ratioY;
      ScrollingContainer.dragThreshold = 5;
      ScrollingContainer.dragRestrictAxis = "y";
      ScrollingContainer.addChild(this.listcon);
      ScrollingContainer.on("dragStart", function () {});
      ScrollingContainer.on("dragEnd", function () {});
      var ScrollBar = new PIXI.UI.ScrollBar({
        track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        handle: new PIXI.UI.SliceSprite(t, 5),
        vertical: true,
        scrollingContainer: ScrollingContainer,
        autohide: true
      });
      ScrollBar.track.alpha = 0;
      ScrollBar.handle.width = 8 * ratioX;
      ScrollBar.anchorTop = 61 * ratioY;
      ScrollBar.anchorLeft = 208 * ratioX;
      ScrollBar.anchorBottom = 0;
      ScrollBar.handle.tint = color.green;
      this.ScrollingContainer = ScrollingContainer;
      this.picture.sprite.on("show", function (e) {
        if (!this$1$1._cardContainer) {
          return;
        }

        if (e) {
          this$1$1.picture.addChild(this$1$1._cardContainer);
          this$1$1.picture.height = 45 * ratioY + this$1$1._cardContainer.height;
        } else {
          this$1$1.picture.removeChild(this$1$1._cardContainer);
          this$1$1.picture.height = 45 * ratioY;
        }

        this$1$1.sort();
      });
      this.voice.sprite.on("show", function (e) {
        if (!this$1$1._audioContainer) {
          return;
        }

        if (e) {
          this$1$1.voice.addChild(this$1$1._audioContainer);
          this$1$1.voice.height = 45 * ratioY + this$1$1._audioContainer.height;
        } else {
          this$1$1.voice.removeChild(this$1$1._audioContainer);
          this$1$1.voice.height = 45 * ratioY;
        }

        this$1$1.sort();
      });
      this.voice.y = this.picture.y + this.picture.height;
      this.listcon.addChild(this.picture, this.voice);
      this.addChild(this.back, verticalLine, ScrollBar, ScrollingContainer);
    }

    if (superclass) LeftMenuAdmin.__proto__ = superclass;
    LeftMenuAdmin.prototype = Object.create(superclass && superclass.prototype);
    LeftMenuAdmin.prototype.constructor = LeftMenuAdmin;

    LeftMenuAdmin.prototype.sort = function sort() {
      this.voice.y = this.picture.y + this.picture.height;
      this.listcon.height = this.voice.height + this.picture.height + 80 * Manager.ratioY;
    };

    LeftMenuAdmin.prototype.makeCardContainer = function makeCardContainer() {
      var this$1$1 = this;

      if (this._cardContainer) {
        while (this._cardContainer.children[0]) {
          this._cardContainer.removeChild(this._cardContainer.children[0]);
        }
      }

      var Clist = Data.cardArr;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var now = document.getElementById("page_input").textContent - 1;
      var con = new PIXI.UI.Container(260 * ratioX, 55 * Clist.length * ratioY);

      var loop = function loop(i) {
        if (this$1$1.lastNumc !== undefined) {
          this$1$1.removeChild(Clist[i].list[this$1$1.lastNumc]);
        }

        var blank = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
        var img = new PIXI.UI.Sprite(Clist[i].sprite.texture);
        var base = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
        var txt = new PIXI.UI.Text(Clist[i].title, fontstyle.Gray12_R);
        var tooltiptexture = new PIXI.Texture.from("tooltip");
        var tooltip = new PIXI.UI.Sprite(tooltiptexture);
        tooltip.sprite.interactive = tooltip.sprite.buttonMode = true;
        blank.width = "100%";
        tooltip.width = 58 * ratioX;
        tooltip.height = blank.height = 74 * ratioY;
        var w = 42 * ratioX;
        var h = 23 * ratioY;
        var CardeditBtn = new ButtonHandler({
          width: w,
          height: h,
          lineColor: color.white,
          text: {
            name: "수정",
            style: fontstyle.White12_R
          }
        });
        var CarddelBtn = new ButtonHandler({
          width: w,
          height: h,
          lineColor: color.white,
          text: {
            name: "삭제",
            style: fontstyle.White12_R
          }
        });
        CarddelBtn.text.tint = CardeditBtn.text.tint = color.textGray;
        CarddelBtn.button.anchorRight = CardeditBtn.button.anchorRight = 5 * ratioX;
        CardeditBtn.button.anchorTop = 10 * ratioY;
        CarddelBtn.button.anchorTop = 38 * ratioY;
        base.sprite.interactive = base.sprite.buttonMode = true;
        base.click = false;
        img.width = img.height = 35 * ratioY;
        img.anchorLeft = 6 * ratioX;
        txt.verticalAlign = img.verticalAlign = "middle";
        txt.anchorLeft = 54 * ratioX;

        if (txt.width > 100 * ratioX) {
          var oneL = txt.width / Clist[i].title.length;
          var su = Math.floor(90 * ratioX / oneL);
          txt.text = Clist[i].title.substring(0, su) + " ...";
        }

        base.width = 193 * ratioX;
        base.height = 45 * ratioY;
        var border = new StrokeSquare(0xffffff, base.width, base.height, 1);
        border.tint = color.line;
        tooltip.anchorRight = 3;
        blank.y = 55 * ratioY * i;
        base.addChild(border, txt, img);
        blank.addChild(base);

        function hoverEvent(e) {
          if (e) {
            this.text.tint = color.white;
            this.background.tint = color.red;
          } else {
            this.text.tint = color.textGray;
            this.background.tint = color.white;
          }
        }

        CarddelBtn.onHover(hoverEvent);
        CardeditBtn.onHover(hoverEvent);
        CardeditBtn.onClick(function () {
          var dList = Clist[i].list;

          var afterEdit = function afterEdit() {
            txt.text = Data.cardArr[i].title;
            img.sprite.texture = Data.cardArr[i].sprite.texture;
            dList.map(function (e) {
              if (e) {
                e.title = Data.cardArr[i].title;
                e.uuid = Data.cardArr[i].uuid;
              }
            });
            Data.cardArr[i].list = dList;
          };

          this$1$1.parent.emit("editCard", i, afterEdit);
        });
        CarddelBtn.onClick(function () {
          var left = this$1$1;
          var a = new DeletePopUp(function () {
            Clist[i].list.map(function (e) {
              left.removeChild(e);
            });
            Clist.splice(i, 1);
            left.makeCardContainer(Data.cardArr);
          }, "그림단어를 삭제 하시겠습니까?");
          this$1$1.parent.addChild(a);
        });
        var d = Clist[i].list[now];

        if (d) {
          d.mather = border;
          this$1$1.addChild(d);
        }

        base.sprite.on("click", function () {
          if (d === undefined) {
            d = dragSprite(Clist[i].title, border);
            this$1$1.addChild(d);
            Clist[i].list[now] = d;
            return;
          }

          base.click = !base.click;

          if (base.click) {
            blank.addChild(tooltip);
            border.tint = color.red;
          } else {
            blank.removeChild(tooltip);
            border.tint = color.line;
          }
        });
        base.sprite.on("pointerover", function () {
          if (d) {
            d.circle.visible = true;
          }
        });
        base.sprite.on("pointerout", function () {
          if (d) {
            d.circle.visible = false;
          }
        });
        tooltip.addChild(CarddelBtn.button, CardeditBtn.button);
        con.addChild(blank);
      };

      for (var i = 0; i < Clist.length; i++) {
        loop(i);
      }

      con.anchorTop = 45 * ratioY;
      this._cardContainer = con;
      this.lastNumc = now;

      if (Clist.length !== 0) {
        this.picture.sprite.emit("click", null, true);
      }
    };

    LeftMenuAdmin.prototype.makeAudioContainer = function makeAudioContainer() {
      var this$1$1 = this;
      var now = document.getElementById("page_input").textContent - 1;

      if (this._audioContainer) {
        while (this._audioContainer.children[0]) {
          this._audioContainer.removeChild(this._audioContainer.children[0]);
        }
      }

      if (this.lastNuma !== undefined) {
        Data.audioArr[this.lastNuma].forEach(function (e) {
          this$1$1.removeChild(e.hl);
        });
      }

      var list = Data.audioArr[now];

      if (list.length === 0) {
        this._audioContainer ? this._audioContainer.height = 0 : undefined;
        this.voice.sprite.emit("show", true);
        return;
      }

      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var con = new PIXI.UI.Container(260 * ratioX, 97 * list.length * ratioY);

      var loop = function loop(i) {
        var blank = new PIXI.UI.Sprite(PIXI.Texture.EMPTY),
            base = new PIXI.UI.Sprite(PIXI.Texture.WHITE),
            audioTitle = new PIXI.UI.Text(list[i].title, fontstyle.Gray12_R),
            audioDuration = new PIXI.UI.Text("음성길이", fontstyle.Gray12_R),
            duration = new PIXI.UI.Text("", fontstyle.Gray12_R),
            tooltiptexture = new PIXI.Texture.from("tooltip"),
            tooltip = new PIXI.UI.Sprite(tooltiptexture),
            line = new LineSprte(180 * ratioX, 1, color.line),
            h = 24 * ratioY,
            w = 42 * ratioX,
            AudioeditBtn = new ButtonHandler({
          width: w,
          height: h,
          lineColor: color.white,
          text: {
            name: "수정",
            style: fontstyle.White12_R
          }
        }),
            AudiodelBtn = new ButtonHandler({
          width: w,
          height: h,
          lineColor: color.white,
          text: {
            name: "삭제",
            style: fontstyle.White12_R
          }
        }),
            prevListenBtn = new ButtonHandler({
          width: w,
          height: h,
          lineColor: color.white,
          text: {
            name: "미리듣기",
            style: fontstyle.White10_R
          }
        }),
            seek = Math.round(list[i].duration),
            minutes = Math.floor(seek / 60) || 0,
            seconds = seek - minutes * 60 || 0;
        duration.text = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds + "초";
        blank.width = "100%";
        blank.y = 97 * ratioY * i;
        tooltip.sprite.interactive = tooltip.sprite.buttonMode = true;
        tooltip.sprite._zIndex = 10;
        tooltip.width = 60 * ratioX;
        tooltip.height = blank.height = 97 * ratioY;
        tooltip.anchorRight = 3;
        AudiodelBtn.text.tint = AudioeditBtn.text.tint = prevListenBtn.text.tint = color.textGray;
        AudiodelBtn.button.anchorRight = AudioeditBtn.button.anchorRight = prevListenBtn.button.anchorRight = 7 * ratioX;
        AudioeditBtn.button.anchorTop = 10 * ratioY;
        AudiodelBtn.button.anchorTop = 38 * ratioY;
        prevListenBtn.button.anchorTop = 69 * ratioY;
        base.width = 193 * ratioX;
        base.height = 90 * ratioY;
        var handle = this$1$1.makeSwapButton(i, 8 * ratioX, base.height);

        if (audioTitle.width > 160 * ratioX) {
          var oneL = audioTitle.width / list[i].title.length;
          var su = Math.floor(150 * ratioX / oneL);
          audioTitle.text = list[i].title.substring(0, su) + " ...";
        }

        base.sprite.interactive = base.sprite.buttonMode = true;
        base.click = false;
        audioTitle.anchorLeft = 10 * ratioX;
        audioTitle.anchorTop = 13 * ratioY;
        line.verticalAlign = "middle";
        line.horizontalAlign = "center";
        audioDuration.anchorLeft = 10 * ratioX;
        audioDuration.anchorBottom = 13 * ratioY;
        duration.anchorRight = 9 * ratioX;
        duration.anchorBottom = 13 * ratioY;
        var border = new StrokeSquare(0xffffff, base.width, base.height, 1);
        border.tint = color.line;
        base.addChild(border, audioTitle, audioDuration, duration, line);
        blank.addChild(base);

        function hoverEvent(e) {
          if (e) {
            this.text.tint = color.white;
            this.background.tint = color.red;
          } else {
            this.text.tint = color.textGray;
            this.background.tint = color.white;
          }
        }

        AudiodelBtn.onHover(hoverEvent);
        AudioeditBtn.onHover(hoverEvent);
        prevListenBtn.onHover(hoverEvent);
        AudioeditBtn.onClick(function () {
          var afterEdit = function afterEdit() {
            var changeData = Data.audioArr[now][i];
            list[i] = changeData;
            audioTitle.text = changeData.title;
            var sec = Math.round(changeData.duration),
                minutes = Math.floor(sec / 60) || 0,
                seconds = sec - minutes * 60 || 0;
            duration.text = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds + "초";
          };

          this$1$1.parent.emit("editAudio", i, afterEdit);
        });
        AudiodelBtn.onClick(function () {
          var left = this$1$1;
          var a = new DeletePopUp(function () {
            left.removeChild(list[i].hl);
            list.splice(i, 1);
            left.makeAudioContainer();
          }, "음성을 삭제하시겠습니까?");
          this$1$1.parent.addChild(a);
        });
        prevListenBtn.onClick(function () {
          list[i].sound.stop();
          list[i].sound.volume(1);
          list[i].sound.play();
        });
        base.sprite.on("click", function () {
          if (_baseSelect) {
            return;
          }

          border.tint = color.red;

          if (list[i].hl === undefined) {
            _baseSelect = true;

            if (base.dragable) {
              return;
            }

            highlightMaker(this$1$1, border, list[i], base);
            base.dragable = true;
            return;
          }

          base.click = !base.click;

          if (base.click) {
            blank.addChild(tooltip);
            list[i].hl.visible = true;
          } else {
            blank.removeChild(tooltip);
            border.tint = color.line;
            list[i].hl.visible = false;
          }
        });

        if (list[i].hl) {
          list[i].hl.mather = border;
          this$1$1.addChild(list[i].hl);

          if (list[i].hl.visible) {
            base.sprite.emit("click");
          }
        }

        base.addChild(handle);
        blank.handle = handle;
        tooltip.addChild(AudiodelBtn.button, AudioeditBtn.button, prevListenBtn.button);
        con.addChild(blank);
      };

      for (var i = 0; i < list.length; i++) {
        loop(i);
      }

      con.anchorTop = 45 * ratioY;
      this._audioContainer = con;
      this.lastNuma = now;
      this.voice.sprite.emit("click", null, true);
    };

    LeftMenuAdmin.prototype.filterOn = function filterOn() {
      this.interactiveChildren = false;
      this.addChild(this.filter);
    };

    LeftMenuAdmin.prototype.filterOff = function filterOff() {
      this.removeChild(this.filter);
      this.interactiveChildren = true;
    };

    LeftMenuAdmin.prototype.makeTitleSprite = function makeTitleSprite(text) {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var conSprite = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      conSprite.width = 193 * ratioX;
      conSprite.height = 45 * ratioY;
      conSprite.anchorLeft = 14 * ratioX;
      var baseT = new PIXI.Texture.from("arrow");
      var arrowt = new PIXI.Texture(baseT, null, null, null, 2);
      var arrow = new PIXI.UI.Sprite(arrowt);
      var txt = new PIXI.UI.Text(text, fontstyle.GrayTitle);
      arrow.anchorTop = txt.anchorTop = 10 * ratioY;
      arrow.width = 9 * ratioX;
      arrow.height = 18 * ratioY;
      arrow.tint = 0x707070;
      arrow.anchorLeft = 10 * ratioX;
      txt.anchorLeft = 48 * ratioX;
      var underLine = new LineSprte(193 * ratioX, 1, color.line);
      underLine.anchorBottom = 0;
      conSprite.addChild(arrow, txt, underLine);
      var click = true;
      conSprite.sprite.interactive = true;
      conSprite.sprite.buttonMode = true;
      conSprite.sprite.on("click", function (e, flag) {
        if (flag) {
          click = true;
        }

        if (click) {
          arrow.sprite.texture = baseT;
          arrow.width = 18 * ratioX;
          arrow.height = 9 * ratioY;
          arrow.anchorTop = 19 * ratioY;
          conSprite.sprite.emit("show", true);
        } else {
          arrow.sprite.texture = arrowt;
          arrow.width = 9 * ratioX;
          arrow.height = 18 * ratioY;
          arrow.anchorTop = 10 * ratioY;
          conSprite.sprite.emit("show", false);
        }

        click = !click;
      });
      return conSprite;
    };

    LeftMenuAdmin.prototype.makeSwapButton = function makeSwapButton(i, width, height) {
      var this$1$1 = this;
      document.getElementById("page_input").textContent - 1;
      var handle = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      handle.number = i;
      var upBtn = new ButtonHandler({
        line: 0,
        width: width,
        height: height / 2,
        tint: 0xe2e2e2,
        text: {
          name: "▲",
          style: fontstyle.Black12
        }
      });
      var downBtn = new ButtonHandler({
        line: 0,
        width: width,
        height: height / 2,
        tint: 0xe2e2e2,
        text: {
          name: "▼",
          style: fontstyle.Black12
        }
      });
      upBtn.onClick(function () {
        var now = document.getElementById("page_input").textContent - 1;

        if (handle.number === 0) {
          return;
        }

        var temp = Data.audioArr[now][handle.number];
        Data.audioArr[now][handle.number] = Data.audioArr[now][handle.number - 1];
        Data.audioArr[now][handle.number - 1] = temp;
        this$1$1.makeAudioContainer();
      });
      downBtn.onClick(function () {
        var now = document.getElementById("page_input").textContent - 1;

        if (handle.number === Data.audioArr[now].length - 1) {
          return;
        }

        var temp = Data.audioArr[now][handle.number];
        Data.audioArr[now][handle.number] = Data.audioArr[now][handle.number + 1];
        Data.audioArr[now][handle.number + 1] = temp;
        this$1$1.makeAudioContainer();
      });
      downBtn.button.anchorTop = height / 2;
      handle.x = 1;
      handle.addChild(upBtn.button, downBtn.button);
      return handle;
    };

    return LeftMenuAdmin;
  }(PIXI.UI.Sprite);
  function highlightMaker(container, mather, item, base) {
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    var t = new PIXI.Texture.from("dotSquare");
    var dotSprite = new PIXI.UI.Sprite(t);
    dotSprite.tint = color.red;
    dotSprite.width = dotSprite.height = 0;
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(2, color.line);
    graphic.beginFill(color.white);
    graphic.drawRoundedRect(0, 0, 100 * ratioX, 71 * ratioY, 2);
    var generateBox = new GraphicsSprite(graphic);
    var makeBtn = new ButtonHandler({
      width: 98 * ratioX,
      height: 34 * ratioY,
      lineColor: color.white,
      text: {
        name: "하이라이트 생성",
        style: fontstyle.Black12
      }
    });
    var delBtn = new ButtonHandler({
      width: 98 * ratioX,
      height: 34 * ratioY,
      lineColor: color.white,
      text: {
        name: "하이라이트 삭제",
        style: fontstyle.Gray12
      }
    });
    var line = new LineSprte(90 * ratioX, 1, color.line);
    line.verticalAlign = "middle";
    line.horizontalAlign = makeBtn.button.horizontalAlign = delBtn.button.horizontalAlign = "center";
    makeBtn.button.anchorTop = delBtn.button.anchorBottom = 1;
    generateBox.addChild(makeBtn.button, delBtn.button, line);
    makeBtn.onClick(function () {
      graphic.clear();
      graphic.beginFill(color.red, 0.5);
      graphic.drawRoundedRect(0, 0, dotSprite.width, Data.hlHeight, 5);
      graphic.endFill();
      _baseSelect = false;
      var tempHighlight = new GraphicsSprite(graphic);
      tempHighlight.startPos = dotSprite.startPos;
      tempHighlight.endPos = dotSprite.endPos;
      tempHighlight.x = dotSprite.x;
      tempHighlight.y = dotSprite.y;
      tempHighlight.pivotX = dotSprite.pivotX;
      tempHighlight.pivotY = dotSprite.pivotY;
      container.removeChild(generateBox, dotSprite);
      item.hl = tempHighlight;
      container.addChild(tempHighlight);
      setTimeout(function () {
        base.sprite.emit("click");
      }, 500);
    });
    delBtn.onClick(function () {
      base.dragable = false;
      _baseSelect = false;
      container.removeChild(generateBox, dotSprite);
      mather.tint = color.line;
    });

    function onDragStart(e) {
      this.dragging = true;
      container.addChild(dotSprite);
      console.log("dotSprite:", dotSprite);
      this.dotStart = {
        x: e.clientX,
        y: e.clientY
      };
      console.log("this.dotStart:", this.dotStart);
      var dx = e.clientX - left;
      var dy = e.clientY - top;
      dotSprite.x = e.clientX;
      dotSprite.y = e.clientY;
      dotSprite.startPos = {
        x: dx / w,
        y: dy / h
      };
    }

    function onDragEnd(e) {
      this.dragging = false;
      console.log(dotSprite.endPos);
      document.removeEventListener("mousedown", onDragStart);
      document.removeEventListener("mouseup", onDragEnd);
      document.removeEventListener("mouseupoutside", onDragEnd);
      document.removeEventListener("mousemove", onDragMove);
      generateBox.anchorRight = -generateBox.width - 20 * ratioX;
      generateBox.verticalAlign = "middle";
      dotSprite.addChild(generateBox);
    }

    var viewCan = document.getElementById("view-canvas");
    var left = viewCan.style.marginLeft;
    var w = viewCan.width;
    var h = viewCan.height;
    left = parseFloat(left);
    var top = viewCan.style.marginTop;
    top = parseFloat(top);

    function onDragMove(e) {
      if (this.dragging) {
        var dx = e.clientX - left;
        var dy = this.dotStart.y + Data.hlHeight - top;
        dotSprite.endPos = {
          x: dx / w,
          y: dy / h
        };
        var ox = e.clientX - this.dotStart.x;
        var oy = Data.hlHeight;
        var width = Math.abs(ox);
        var height = oy;

        if (ox >= 0) {
          dotSprite.pivotX = 0;
        } else {
          dotSprite.pivotX = 1;
        }

        if (oy >= 0) {
          dotSprite.pivotY = 0;
        } else {
          dotSprite.pivotY = 1;
        }

        dotSprite.width = width;
        dotSprite.height = height;
      }
    }

    document.addEventListener("mousedown", onDragStart);
    document.addEventListener("mouseup", onDragEnd);
    document.addEventListener("mouseupoutside", onDragEnd);
    document.addEventListener("mousemove", onDragMove);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var RightMenu = /*@__PURE__*/function (superclass) {
    function RightMenu(tileGrid) {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(1, color.bgBoxBorder);
      graphic.beginFill(color.bgBox);
      graphic.drawRect(0, 0, 85 * ratioX, window.innerHeight);
      graphic.endFill();
      graphic.clear();
      graphic.lineStyle(0);
      graphic.beginFill(color.bgBox);
      graphic.drawRect(0, 0, 85 * ratioX, window.innerHeight);
      graphic.endFill();
      superclass.call(this, Manager.app.renderer.generateTexture(graphic));
      this.filter = new GraphicsSprite(graphic);
      this.filter.alpha = 0.8;
      this.filter.anchorBottom = 160 * ratioY;
      this.filter.sprite.interactive = true;
      this.width = 85 * ratioX;
      this.heigth = "100%";
      this.tileGrid = tileGrid;
      this.heigth = "100%";
      this.anchorRight = 0;
      var a = ratioX * 27;
      this.cardBtn = this.makeBtn({
        url: "card_icon",
        width: a,
        height: a
      }, "그림단어", "cardBtn");
      this.audioBtn = this.makeBtn({
        url: "audio_icon",
        width: a,
        height: a
      }, "음성", "audioBtn");
      this.gridBtn = this.makeBtn({
        url: "grid_icon",
        width: a,
        height: a
      }, "안내선", "gridBtn");
      this.hlBtn = this.makeBtn({
        url: "height_icon",
        width: a,
        height: a
      }, "형광펜\n  높이", "hlBtn");
      this.previewBtn = this.makeBtn({
        url: "preview_icon",
        width: a,
        height: a
      }, "미리보기", "previewBtn");
      this.gatherBtn = this.makeBtn({
        url: "thumb_icon",
        width: a,
        height: a
      }, "모아보기", "gatherBtn");
      this.saveBtn = this.makeBtn({
        url: "disk_icon",
        width: a,
        height: a
      }, "저장", "saveBtn");
      this.finBtn = this.makeBtn({
        url: "finish_icon",
        width: a,
        height: a
      }, "종료", "finBtn");
      this.cardBtn.button.anchorTop = 60 * ratioY;
      this.audioBtn.button.anchorTop = 153 * ratioY;
      this.gridBtn.button.anchorTop = 246 * ratioY;
      this.hlBtn.button.anchorTop = 350 * ratioY;
      this.previewBtn.button.anchorBottom = 349 * ratioY;
      this.gatherBtn.button.anchorBottom = 256 * ratioY;
      this.saveBtn.button.anchorBottom = 163 * ratioY;
      this.finBtn.button.anchorBottom = 70 * ratioY;
      this.addChild(this.cardBtn.button, this.audioBtn.button, this.gridBtn.button, this.hlBtn.button, this.previewBtn.button, this.gatherBtn.button, this.saveBtn.button, this.finBtn.button);
      this.GridButtonChildren();
    }

    if (superclass) RightMenu.__proto__ = superclass;
    RightMenu.prototype = Object.create(superclass && superclass.prototype);
    RightMenu.prototype.constructor = RightMenu;

    RightMenu.prototype.filterOn = function filterOn() {
      this.addChild(this.filter);
    };

    RightMenu.prototype.filterOff = function filterOff() {
      this.removeChild(this.filter);
    };

    RightMenu.prototype.GridButtonChildren = function GridButtonChildren() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.gridBtn.addImage({
        url: "btn_02",
        width: 30 * ratioX,
        height: 25 * ratioY,
        tint: color.button
      });
      this.gridBtn.addImage({
        url: "btn_03",
        width: 30 * ratioX,
        height: 25 * ratioY,
        tint: color.button
      });
      var plus = new PIXI.UI.Text("+", fontstyle.Black14_bold);
      var minus = new PIXI.UI.Text("-", fontstyle.Black14_bold);
      plus.verticalAlign = minus.verticalAlign = "middle";
      plus.horizontalAlign = minus.horizontalAlign = "center";
      this.gridBtn.btn_02.addChild(minus);
      this.gridBtn.btn_03.addChild(plus);
      this.gridBtn.btn_02.anchorTop = this.gridBtn.btn_03.anchorTop = 70 * ratioY;
      this.gridBtn.btn_02.anchorRight = this.gridBtn.btn_03.anchorLeft = 26 * ratioX;
      this.gridBtn.btn_02.alpha = 0;
      this.gridBtn.btn_03.alpha = 0;
      var plusbtn = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      var minbtn = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      plusbtn.width = minbtn.width = 30 * ratioX;
      plusbtn.height = minbtn.height = 25 * ratioY;
      plusbtn.anchorTop = minbtn.anchorTop = 316 * ratioY;
      plusbtn.anchorRight = 12 * ratioX;
      minbtn.anchorLeft = 12 * ratioX;
      plusbtn.sprite.interactive = true;
      plusbtn.sprite.buttonMode = true;
      minbtn.sprite.interactive = true;
      minbtn.sprite.buttonMode = true;
      plusbtn.sprite.on("pointerover", function (e) {
        this$1$1.gridBtn.button.emit("hover", e);
      });
      plusbtn.sprite.on("pointerout", function (e) {
        this$1$1.gridBtn.button.emit("hover");
      });
      plusbtn.sprite.on("click", function () {
        this$1$1.tileGrid.tileScale.x += 0.1;
        this$1$1.tileGrid.tileScale.y += 0.1;
      });
      minbtn.sprite.on("pointerover", function (e) {
        this$1$1.gridBtn.button.emit("hover", e);
      });
      minbtn.sprite.on("pointerout", function () {
        this$1$1.gridBtn.button.emit("hover");
      });
      minbtn.sprite.on("click", function () {
        if (this$1$1.tileGrid.tileScale.x - 0.1 <= 0.1) {
          this$1$1.tileGrid.tileScale.x = 0.1;
          this$1$1.tileGrid.tileScale.y = 0.1;
          return;
        }

        this$1$1.tileGrid.tileScale.x -= 0.1;
        this$1$1.tileGrid.tileScale.y -= 0.1;
      });
      this.addChild(plusbtn, minbtn);
    };

    RightMenu.prototype.girdEvent = function girdEvent(button, e) {
      if (e) {
        button.btn_02.alpha = 1;
        button.btn_03.alpha = 1;
      } else {
        button.btn_02.alpha = 0;
        button.btn_03.alpha = 0;
      }
    };

    RightMenu.prototype.makeBtn = function makeBtn(img, text, name) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var height = 63 * ratioY;

      if (name === "hlBtn") {
        height = 77 * ratioY;
      }

      var button = new ButtonHandler({
        width: 51 * ratioX,
        height: height,
        tint: color.button,
        line: 0,
        rounded: 5,
        img: img
      });
      button.addText(_defineProperty({
        name: text,
        style: fontstyle.Black12
      }, "name", name));
      button.background.alpha = 0;
      button[name].horizontalAlign = "center";

      if (name === "hlBtn") {
        button[name].anchorBottom = 0;
      } else {
        button[name].anchorBottom = 5 * ratioY;
      }

      button[img.url].tint = 0x333333;
      button[img.url].anchorTop = 5 * ratioY;
      button[img.url].horizontalAlign = "center";
      button.button.horizontalAlign = "center";
      button.onHover(function (e) {
        if (name === "gridBtn") {
          this$1$1.girdEvent(button, e);
        }

        if (e) {
          button.background.alpha = 1;
        } else {
          button.background.alpha = 0;
        }
      });
      return button;
    };

    return RightMenu;
  }(PIXI.UI.Sprite);

  var ArrowLeft = /*@__PURE__*/function (superclass) {
    function ArrowLeft(width) {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(1, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRect(0, 0, width, window.innerHeight);
      graphic.endFill();
      superclass.call(this, Manager.app.renderer.generateTexture(graphic));
      this.width = width;
      this.heigth = "100%";
      var arrowTexture = new PIXI.Texture.from("triangleL");
      var arrowSp = new PIXI.UI.Sprite(arrowTexture);
      arrowSp.horizontalAlign = "center";
      arrowSp.y = window.innerHeight * 0.5;
      arrowSp.width = 27 * ratioX;
      arrowSp.height = 42 * ratioY;
      arrowSp.tint = color.arrow;
      this.sprite.interactive = true;
      this.sprite.buttonMode = true;
      this.sprite.on('mouseover', function () {
        arrowSp.tint = color.red;
      });
      this.sprite.on('mouseout', function () {
        arrowSp.tint = color.arrow;
      });
      this.addChild(arrowSp);
    }

    if (superclass) ArrowLeft.__proto__ = superclass;
    ArrowLeft.prototype = Object.create(superclass && superclass.prototype);
    ArrowLeft.prototype.constructor = ArrowLeft;
    return ArrowLeft;
  }(PIXI.UI.Sprite);

  var ArrowRight = /*@__PURE__*/function (superclass) {
    function ArrowRight(width) {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(1, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRect(0, 0, width, window.innerHeight);
      graphic.endFill();
      superclass.call(this, Manager.app.renderer.generateTexture(graphic));
      this.width = width;
      this.heigth = "100%";
      var arrowTexture = new PIXI.Texture.from("triangleR");
      var arrowSp = new PIXI.UI.Sprite(arrowTexture);
      arrowSp.horizontalAlign = "center";
      arrowSp.y = window.innerHeight * 0.5;
      arrowSp.width = 27 * ratioX;
      arrowSp.height = 42 * ratioY;
      arrowSp.tint = color.arrow;
      this.sprite.interactive = true;
      this.sprite.buttonMode = true;
      this.sprite.on('mouseover', function () {
        arrowSp.tint = color.red;
      });
      this.sprite.on('mouseout', function () {
        arrowSp.tint = color.arrow;
      });
      this.addChild(arrowSp);
    }

    if (superclass) ArrowRight.__proto__ = superclass;
    ArrowRight.prototype = Object.create(superclass && superclass.prototype);
    ArrowRight.prototype.constructor = ArrowRight;
    return ArrowRight;
  }(PIXI.UI.Sprite);

  var Viewer = function Viewer(_url, callFunc, RightBtn, LeftBtn, thumbW, thumbH) {
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    var url = _url;
    var pdfjsLib = window["pdfjs-dist/build/pdf"];
    var thumbArr = [];
    var pdfDoc = null,
        pageNum = 1,
        scale,
        pageRendering = false,
        pageNumPending = null,
        canvas = document.getElementById("view-canvas"),
        ctx = canvas.getContext("2d"),
        pageInput = document.getElementById("page_input");
    var that = this;

    function renderPage(num, callback) {
      Manager.pageNum = num;
      pageRendering = true;
      pdfDoc.getPage(num).then(function (page) {
        scale = Math.min(Data.viewWidth * ratioX / page.view[2], Data.viewHeight * ratioY / page.view[3]);
        var viewport = page.getViewport({
          scale: scale
        });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
          pageRendering = false;

          if (pageNumPending !== null) {
            renderPage(pageNumPending);
            pageNumPending = null;
          }
        });

        if (callback) {
          if (callback == callFunc.const) {
            callback(pdfDoc.numPages, num);
          } else {
            callback(num);
          }
        }
      });
      pageInput.textContent = num;
    }

    this.getPageNum = function () {
      return pageNum;
    };

    this.changeScalePage = function (callback) {
      if (pageRendering) {
        pageNumPending = pageNum;
      } else {
        renderPage(pageNum, callback);
      }
    };

    this.acessQueue = function (num) {
      pageNum = num;
      that.queueRenderPage(num);
    };

    this.queueRenderPage = function (num) {
      if (pageRendering) {
        pageNumPending = num;
      } else {
        renderPage(num, callFunc.update);
      }
    };

    function onPrevPage() {
      if (pageNum <= 1) {
        return;
      }

      pageNum--;
      that.queueRenderPage(pageNum);
    }

    LeftBtn.sprite.on("click", onPrevPage);

    function onNextPage() {
      if (pageNum >= pdfDoc.numPages) {
        alert("마지막 페이지입니다.", "#E95C63");
        return;
      }

      pageNum++;
      that.queueRenderPage(pageNum);
    }

    RightBtn.sprite.on("click", onNextPage);

    function goIndex(num) {
      pageNum = num;
      that.queueRenderPage(pageNum);
    }

    function makeThumb(page) {
      var vp = page.getViewport({
        scale: 1
      });
      var canvas = document.createElement("canvas");
      canvas.width = thumbW * ratioX;
      canvas.height = thumbH * ratioY;
      var scale = Math.max(canvas.width / vp.width, canvas.height / vp.height);
      return page.render({
        canvasContext: canvas.getContext("2d"),
        viewport: page.getViewport({
          scale: scale
        })
      }).promise.then(function () {
        return canvas;
      });
    }

    pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
      pdfDoc = pdfDoc_;
      renderPage(pageNum, callFunc.const);

      var _t_em_p = new Map();

      var pages = [];

      while (pages.length < pdfDoc.numPages) {
        pages.push(pages.length + 1);
      }

      return Promise.all(pages.map(function (num) {
        return pdfDoc.getPage(num).then(makeThumb).then(function (canvas) {
          _t_em_p.set(num, canvas);

          if (_t_em_p.size == pdfDoc.numPages) {
            for (var i = 1; i <= pdfDoc.numPages; ++i) {
              thumbArr.push(_t_em_p.get(i));
            }

            callFunc.thumb(thumbArr, goIndex);
          }
        });
      }));
    });
  };

  var ScrollThumb = /*@__PURE__*/function (superclass) {
    function ScrollThumb(thumbArr, queueRenderPage) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      var tWidth = 1614 * ratioX;
      var tHeight = Manager.height;
      superclass.call(this, PIXI.Texture.WHITE);
      this.width = tWidth;
      this.height = tHeight;
      graphic.clear();
      graphic.lineStyle(2, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRoundedRect(0, 0, 10, 10, 10);
      graphic.endFill();
      var t = Manager.app.renderer.generateTexture(graphic);
      this.verticalAlign = "middle";
      this.anchorLeft = 221 * ratioX;
      var listCon = new PIXI.UI.Container("100%", "100%");
      var ScrollingContainer = new PIXI.UI.ScrollingContainer({
        scrollX: false,
        scrollY: true
      });
      ScrollingContainer.anchorLeft = ScrollingContainer.anchorRight = 0;
      ScrollingContainer.anchorTop = 63 * ratioY;
      ScrollingContainer.anchorBottom = 40 * ratioY;
      ScrollingContainer.dragThreshold = 5;
      ScrollingContainer.dragRestrictAxis = "y";
      ScrollingContainer.addChild(listCon);
      ScrollingContainer.on("dragStart", function () {});
      ScrollingContainer.on("dragEnd", function () {});
      var ScrollBar = new PIXI.UI.ScrollBar({
        track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        handle: new PIXI.UI.SliceSprite(t, 5),
        vertical: true,
        scrollingContainer: ScrollingContainer,
        autohide: true
      });
      ScrollBar.track.width = 9 * ratioX;
      ScrollBar.handle.width = 8 * ratioX;
      ScrollBar.track.pivotX = -0.5;
      ScrollBar.anchorTop = 63 * ratioY;
      ScrollBar.anchorBottom = 40 * ratioY;
      ScrollBar.anchorRight = 0;
      ScrollBar.track.tint = 0xdbdbdb;
      ScrollBar.track.blendMode = 0;
      ScrollBar.handle.tint = color.green;
      listCon.anchorLeft = 147 * ratioX;

      var loop = function loop(i) {
        var canvas = thumbArr[i];
        var texture = new PIXI.Texture.from(canvas);
        var sp = new PIXI.UI.Sprite(texture);
        sp.x = i % 4 * (sp.width + 40 * ratioX);
        sp.y = Math.floor(i / 4) * (sp.height + 30 * ratioY);
        listCon.height += sp.y;
        sp.sprite.interactive = sp.sprite.buttonMode = true;
        sp.sprite.on("click", function () {
          if (Data.state !== 0) {
            this$1$1.parent.emit("filterOff");
          }

          this$1$1.parent.removeChild(this$1$1);
          queueRenderPage(i + 1);
        });
        listCon.addChild(sp);
      };

      for (var i = 0; i < thumbArr.length; i++) {
        loop(i);
      }

      var btntitle;

      if (Data.isFirst) {
        btntitle = "스토리 제작하기";
      } else {
        btntitle = "스토리뷰어 수정하기";
      }

      graphic.clear();
      graphic.lineStyle(1, color.line, 1, 1, true);
      graphic.beginFill(color.green);
      graphic.drawRect(0, 0, tWidth, 40 * ratioY);
      graphic.endFill();
      var back = new GraphicsSprite(graphic);
      this.editBtn = new ButtonHandler({
        width: tWidth,
        height: 40 * ratioY,
        background: back,
        text: {
          name: btntitle,
          style: fontstyle.White14
        }
      });
      this.editBtn.MakedisableTexture(color.arrow, color.arrow);

      if (Data.state === 0) {
        this.editBtn.button.interactive = false;
        this.editBtn.changeBack = this.editBtn.disableT;
      }

      this.editBtn.background.tint = 0xffffff;
      this.editBtn.button.anchorBottom = 0;
      this.addChild(ScrollingContainer, ScrollBar, this.editBtn.button);
      this.editBtn.onClick(function () {
        this$1$1.parent.emit("filterOff");
        this$1$1.parent.removeChild(this$1$1);
        queueRenderPage(1);
      });
    }

    if (superclass) ScrollThumb.__proto__ = superclass;
    ScrollThumb.prototype = Object.create(superclass && superclass.prototype);
    ScrollThumb.prototype.constructor = ScrollThumb;
    return ScrollThumb;
  }(PIXI.UI.Sprite);

  var VirtualCon = /*@__PURE__*/function (Array) {
    function VirtualCon() {
      Array.call(this);
    }

    if (Array) VirtualCon.__proto__ = Array;
    VirtualCon.prototype = Object.create(Array && Array.prototype);
    VirtualCon.prototype.constructor = VirtualCon;
    var prototypeAccessors = {
      x: {
        configurable: true
      },
      y: {
        configurable: true
      }
    };

    VirtualCon.prototype.addChild = function addChild() {
      var ref;
      var childs = [],
          len = arguments.length;

      while (len--) {
        childs[len] = arguments[len];
      }

      (ref = this).push.apply(ref, childs);
    };

    VirtualCon.prototype.position = function position(x, y) {
      this.map(function (child) {
        child.x += x;
        child.y += y;
      });
    };

    prototypeAccessors.x.set = function (x) {
      this.map(function (child) {
        child.x += x;
      });
    };

    prototypeAccessors.y.set = function (y) {
      this.map(function (child) {
        child.y += y;
      });
    };

    Object.defineProperties(VirtualCon.prototype, prototypeAccessors);
    return VirtualCon;
  }(Array);

  var Texture = function Texture() {};

  Texture.from = function from(url) {
    var i = new Image();
    i.crossOrigin = "anonymous";
    i.src = url + "?timestamp=" + new Date().getTime();
    return PIXI.Texture.from(i);
  };

  var CardPopUpContainer = /*@__PURE__*/function (superclass) {
    function CardPopUpContainer() {
      var this$1$1 = this;
      var ratioY = Manager.ratioY;
      superclass.call(this, "100%", "100%");
      this.filter = new Filter("100%", "100%");
      this.filter.sprite.buttonMode = false;
      var make = new cardscrollCon();
      this.card = make;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var edit = new editScroll();

      this.editScroll = function (idx, callFucn) {
        edit.setCallFucn = callFucn;
        edit.setchildNum = idx;
        this$1$1.removeChild(this$1$1.card);
        this$1$1.card = edit;
        this$1$1.addChild(this$1$1.card);
      };

      this.selectScroll = function () {
        this$1$1.removeChild(this$1$1.card);
        this$1$1.card = make;
        this$1$1.addChild(this$1$1.card);
      };

      this.container.on("close", function () {
        this$1$1.card.items.map(function (c) {
          this$1$1.card.listCon.removeChild(c);
        });
        this$1$1.card.Sitems.map(function (c) {
          this$1$1.card.selectedListCon.removeChild(c);
        });
        this$1$1.card.Sitems = [];
        this$1$1.card.textinput.text = "";
        this$1$1.card.textinput.emit("blur");
        this$1$1.card.height = 375 * ratioY;
        this$1$1.card.sprite.texture = this$1$1.card.minTexture;
        this$1$1.card.title.text = "그림단어";
        this$1$1.parent.removeChild(this$1$1);
      });
      this.addChild(this.filter);
    }

    if (superclass) CardPopUpContainer.__proto__ = superclass;
    CardPopUpContainer.prototype = Object.create(superclass && superclass.prototype);
    CardPopUpContainer.prototype.constructor = CardPopUpContainer;
    return CardPopUpContainer;
  }(PIXI.UI.Container);
  var cardscrollCon = /*@__PURE__*/function (superclass) {
    function cardscrollCon() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      var tWidth = 1412 * ratioX;
      var tHight = 375 * ratioY;
      var tmHight = 918 * ratioY;
      var dy = 52 * ratioY;
      var dt = 7 * ratioY;
      var radius = 3;
      makeCardContainer$2(graphic, tWidth, tHight, dy, dt, radius);
      var minTexture = Manager.app.renderer.generateTexture(graphic);
      superclass.call(this, minTexture);
      this.items = [];
      this.Sitems = [];
      makeCardContainer$2(graphic, tWidth, tmHight, dy, dt, radius);
      var maxTexture = Manager.app.renderer.generateTexture(graphic);
      graphic.clear();
      graphic.lineStyle(2, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRoundedRect(0, 0, 10, 10, 10);
      graphic.endFill();
      var t = Manager.app.renderer.generateTexture(graphic);
      this.verticalAlign = "middle";
      this.horizontalAlign = "center";
      var noResearch = new PIXI.UI.Text("검색결과 없음", fontstyle.Black16);
      noResearch.anchorTop = 250 * ratioY;
      noResearch.horizontalAlign = "center";
      this.noResearch = noResearch;
      var title = new PIXI.UI.Text("그림단어", fontstyle.WhiteTitle);
      title.anchorTop = 14 * ratioY;
      title.anchorLeft = 39 * ratioX;
      var xtexture = xTexture(18 * ratioX);
      var x_btn = new PIXI.UI.Sprite(xtexture);
      x_btn.anchorTop = 17 * ratioY;
      x_btn.anchorRight = 20 * ratioX;
      x_btn.sprite.interactive = x_btn.sprite.buttonMode = true;
      x_btn.sprite.on("click", function () {
        this$1$1.parent.container.emit("close");
      });
      var listCon = new PIXI.UI.Container("100%", "100%");
      var ScrollingContainer = new PIXI.UI.ScrollingContainer({
        scrollX: false,
        scrollY: true
      });
      ScrollingContainer.width = "100%";
      ScrollingContainer.height = 290 * ratioY;
      ScrollingContainer.anchorTop = 160 * ratioY;
      ScrollingContainer.dragThreshold = 5;
      ScrollingContainer.dragRestrictAxis = "y";
      ScrollingContainer.addChild(listCon);
      ScrollingContainer.on("dragStart", function () {});
      ScrollingContainer.on("dragEnd", function () {});
      var ScrollBar = new PIXI.UI.ScrollBar({
        track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        handle: new PIXI.UI.SliceSprite(t, 5),
        vertical: true,
        scrollingContainer: ScrollingContainer,
        autohide: true
      });
      ScrollBar.track.width = ScrollBar.handle.width = 8 * ratioX;
      ScrollBar.track.pivotX = -0.5;
      ScrollBar.anchorTop = 160 * ratioY;
      ScrollBar.anchorBottom = 514 * ratioY;
      ScrollBar.anchorRight = 0;
      ScrollBar.track.blendMode = 0;
      ScrollBar.handle.tint = color.green;
      var line3 = new LineSprte(1306 * ratioX, 2, color.line);
      line3.verticalAlign = "middle";
      line3.horizontalAlign = "center";
      listCon.anchorLeft = 54 * ratioX;
      var selectT = new PIXI.UI.Text("선택한 그림단어", fontstyle.Black14);
      selectT.anchorTop = 40 * ratioY;
      line3.addChild(selectT);
      this.cardAreaConatainer(t);
      var search = this.searchContainer();
      this.minTexture = minTexture;
      this.maxTexture = maxTexture;
      this.title = title;
      this.listCon = listCon;
      this.ScrollingContainer = ScrollingContainer;
      var enrollBtn = new ButtonHandler({
        width: 1306 * ratioX,
        height: 40 * ratioY,
        line: 1,
        lineColor: color.line,
        tint: color.green,
        text: {
          name: "등록하기",
          style: fontstyle.White12_R
        }
      });
      enrollBtn.button.anchorBottom = 46 * ratioY;
      enrollBtn.button.horizontalAlign = "center";
      enrollBtn.onClick(function () {
        var ref;
        (ref = Data.cardArr).push.apply(ref, this$1$1.selectedListCon.children);
        this$1$1.parent.parent.emit("selectCard");
        this$1$1.parent.container.emit("close");
      });
      this.addChild(title, x_btn, ScrollingContainer, ScrollBar, search, enrollBtn.button, line3);
    }

    if (superclass) cardscrollCon.__proto__ = superclass;
    cardscrollCon.prototype = Object.create(superclass && superclass.prototype);
    cardscrollCon.prototype.constructor = cardscrollCon;

    cardscrollCon.prototype.cardAreaConatainer = function cardAreaConatainer(t) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var pageNum = Data.pageNum;
      var listCon = new PIXI.UI.Container("100%", "100%");
      var ScrollingContainer = new PIXI.UI.ScrollingContainer({
        scrollX: false,
        scrollY: true
      });
      ScrollingContainer.width = "100%";
      ScrollingContainer.height = 290 * ratioY;
      ScrollingContainer.anchorBottom = 100 * ratioY;
      ScrollingContainer.dragThreshold = 5;
      ScrollingContainer.dragRestrictAxis = "y";
      ScrollingContainer.addChild(listCon);
      ScrollingContainer.on("dragStart", function () {});
      ScrollingContainer.on("dragEnd", function () {});
      var ScrollBar = new PIXI.UI.ScrollBar({
        track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        handle: new PIXI.UI.SliceSprite(t, 5),
        vertical: true,
        scrollingContainer: ScrollingContainer,
        autohide: true
      });
      ScrollBar.track.width = ScrollBar.handle.width = 8 * ratioX;
      ScrollBar.track.pivotX = -0.5;
      ScrollBar.anchorTop = 567 * ratioY;
      ScrollBar.anchorBottom = 100 * ratioY;
      ScrollBar.anchorRight = 0;
      ScrollBar.track.blendMode = 0;
      ScrollBar.handle.tint = color.green;
      listCon.anchorLeft = 54 * ratioX;
      this.selectedListCon = listCon;

      var sort = function sort(a) {
        var arr = this$1$1.selectedListCon.children;
        arr.map(function (c, i) {
          c.x = i % 6 * (c.width + a);
          c.y = Math.floor(i / 6) * (c.height + a);
        });
      };

      this.selectedListCon.container.on("select", function (btn, sample, uuid, a) {
        var item = new PIXI.UI.Sprite(sample.sprite.texture);
        var selectBox = new ButtonHandler({
          width: btn.button.width,
          height: btn.button.height,
          line: 1,
          tint: "#000000",
          text: {
            name: "선택 해제",
            style: fontstyle.White12_R
          }
        });
        selectBox.background.alpha = 0.8;
        selectBox.button.interactive = false;
        selectBox.button.anchorBottom = 0;
        item.width = sample.width;
        item.height = sample.height;
        item.addChild(selectBox.button);
        item.uuid = uuid;
        var i = this$1$1.selectedListCon.children.length;
        item.x = i % 6 * (item.width + a);
        item.y = Math.floor(i / 6) * (item.height + a);
        this$1$1.selectedListCon.height = item.y + item.height + a;
        item.sprite.interactive = true;
        item.title = sample.title;
        item.list = new Array(pageNum);
        this$1$1.Sitems.push(item);
        item.sprite.on("click", function () {
          sample.removeChild(btn.button);
          this$1$1.selectedListCon.removeChild(item);
          sort(a);
        });
        this$1$1.selectedListCon.addChild(item);
      });
      this.selectedContainer = ScrollingContainer;
      this.addChild(ScrollingContainer, ScrollBar);
    };

    cardscrollCon.prototype.removeChildren = function removeChildren() {
      var this$1$1 = this;
      var ratioY = Manager.ratioY;
      this.items.map(function (c) {
        this$1$1.listCon.removeChild(c);
      });
      this.items = [];
      this.height = 375 * ratioY;
      this.sprite.texture = this.minTexture;
      this.title.text = "그림단어";
    };

    cardscrollCon.prototype.addchildren = function addchildren() {
      var this$1$1 = this;
      var ratioY = Manager.ratioY;
      this.items.map(function (c) {
        this$1$1.listCon.removeChild(c);
      });
      this.items = [];
      this.height = 918 * ratioY;
      this.sprite.texture = this.maxTexture;
      this.title.text = "그림단어 보관함";
    };

    cardscrollCon.prototype.searchContainer = function searchContainer() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var con = new PIXI.UI.Container(1306 * ratioX, 250 * ratioY);
      var spT = new PIXI.Texture.from("manual_long");
      var sp = new PIXI.UI.Sprite(spT);
      sp.width = 415 * ratioX;
      sp.height = 46 * ratioY;
      sp.anchorLeft = 860 * ratioX;
      sp.anchorTop = 10 * ratioY;
      sp.alpha = 0;
      var graphic = new PIXI.Graphics();
      graphic.clear();
      graphic.lineStyle(0);
      graphic.beginFill(color.red);
      graphic.drawRoundedRect(0, 0, 1185 * ratioX, 3, 3);
      graphic.endFill();
      var line2 = new GraphicsSprite(graphic);
      line2.anchorTop = 30 * ratioY;
      con.anchorTop = 106 * ratioY;
      con.horizontalAlign = "center";
      var placeholder = "검색할 단어를 입력하세요.";
      this.textinput = new PIXI.UI.TextInput({
        background: PIXI.UI.Sprite(PIXI.Texture.WHITE),
        value: placeholder,
        style: fontstyle.Black14,
        lineHeight: 30 * ratioY,
        paddingLeft: 10 * ratioX,
        width: "90%",
        height: 30
      });
      this.textinput.alpha = 0.5;
      var qTexture = new PIXI.Texture.from("Q_icon");
      var qSprite = new PIXI.UI.Sprite(qTexture);
      qSprite.tint = color.red;
      qSprite.anchorRight = 2 * ratioX;
      qSprite.anchorBottom = 3 * ratioY;
      qSprite.width = qSprite.height = 20 * ratioX;
      line2.addChild(qSprite);
      var explainT = new PIXI.Texture.from("explain_icon");
      var explain = new PIXI.UI.Sprite(explainT);
      explain.anchorRight = 0;
      explain.anchorTop = 13 * ratioY;
      explain.width = explain.height = 18 * ratioX;
      con.addChild(line2, explain, sp);
      this.textinput.on("keyup", function (e) {
        if (e.keyCode === 13) {
          this$1$1.textinput.value = this$1$1.textinput._lastValue;
          this$1$1.textinput.emit("blur");
          qSprite.sprite.emit("click");
        }
      });
      this.textinput.on("focus", function () {
        if (this$1$1.textinput.value === placeholder) {
          this$1$1.textinput.value = "";
          this$1$1.textinput.alpha = 1;
        }
      });
      this.textinput.on("blur", function () {
        if (this$1$1.textinput.value === "") {
          this$1$1.textinput.value = placeholder;
          this$1$1.textinput.alpha = 0.5;
        }
      });
      con.addChild(this.textinput);
      qSprite.sprite.interactive = qSprite.sprite.buttonMode = true;
      explain.sprite.interactive = explain.sprite.buttonMode = true;
      qSprite.sprite.on("click", function () {
        this$1$1.addchildren();
        var val = this$1$1.textinput.value.replace(/,/g, "#");
        get_CardList(val, function (res) {
          if (res.code === 0) {
            if (res.data.total === 0) {
              this$1$1.addChild(this$1$1.noResearch);
            } else {
              this$1$1.removeChild(this$1$1.noResearch);
            }

            this$1$1.listItem(res.data.pageList);
          }
        });
      });
      explain.sprite.on("pointerover", function () {
        sp.alpha = 1;
      });
      explain.sprite.on("pointerout", function () {
        sp.alpha = 0;
      });
      return con;
    };

    cardscrollCon.prototype.listItem = function listItem(arr) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var leng = arr.length;
      var itemHeight = 0;
      var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");

      var loop = function loop(j) {
        var i = this$1$1.listCon.children.length;
        var uuid = arr[j].data_uuid;
        var t = Texture.from(S3_URL_RAW + "/" + uuid, true);
        var item = new PIXI.UI.Sprite(t);
        this$1$1.listCon.addChild(item);
        item.width = 200 * ratioX;
        item.height = 271 * ratioY;
        item.sprite.interactive = true;
        var w = item._width;
        var h = item._height / 5;
        var selectBox = new ButtonHandler({
          width: w,
          height: h,
          line: 1,
          lineColor: color.red,
          tint: color.red,
          text: {
            name: "선택",
            style: fontstyle.White12_R
          }
        });
        selectBox.background.alpha = 0.8;
        selectBox.button.interactive = false;
        selectBox.button.anchorBottom = 0;
        var a = 20 * ratioX;
        item.x = i % 6 * (item.width + a);
        item.y = Math.floor(i / 6) * (item.height + a);
        item.title = arr[j].title;
        itemHeight += item.height + a;
        item.sprite.on("click", function () {
          if (!selectBox.button.parent) {
            this$1$1.selectedListCon.container.emit("select", selectBox, item, uuid, a);
            item.addChild(selectBox.button);
          }
        });
        this$1$1.items.push(item);
      };

      for (var j = 0; j < leng; j++) {
        loop(j);
      }

      this.listCon.height = itemHeight;
    };

    return cardscrollCon;
  }(PIXI.UI.Sprite);
  var editScroll = /*@__PURE__*/function (superclass) {
    function editScroll() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      var tWidth = 1412 * ratioX;
      var tHight = 375 * ratioY;
      var tmHight = 918 * ratioY;
      var dy = 52 * ratioY;
      var dt = 7 * ratioY;
      var radius = 3;
      makeCardContainer$2(graphic, tWidth, tHight, dy, dt, radius);
      var minTexture = Manager.app.renderer.generateTexture(graphic);
      superclass.call(this, minTexture);
      this.items = [];
      this.Sitems = [];
      this.childNum = 0;
      makeCardContainer$2(graphic, tWidth, tmHight, dy, dt, radius);
      var maxTexture = Manager.app.renderer.generateTexture(graphic);
      graphic.clear();
      graphic.lineStyle(2, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRoundedRect(0, 0, 10, 10, 10);
      graphic.endFill();
      var t = Manager.app.renderer.generateTexture(graphic);
      this.verticalAlign = "middle";
      this.horizontalAlign = "center";
      var title = new PIXI.UI.Text("그림단어", fontstyle.WhiteTitle);
      title.anchorTop = 14 * ratioY;
      title.anchorLeft = 39 * ratioX;
      var noResearche = new PIXI.UI.Text("검색결과 없음", fontstyle.Black16);
      noResearche.anchorTop = 250 * ratioY;
      noResearche.horizontalAlign = "center";
      this.noResearche = noResearche;
      var xtexture = xTexture(18 * ratioX);
      var x_btn = new PIXI.UI.Sprite(xtexture);
      x_btn.width = x_btn.height = 18 * ratioX;
      x_btn.anchorTop = 17 * ratioY;
      x_btn.anchorRight = 20 * ratioX;
      x_btn.sprite.interactive = x_btn.sprite.buttonMode = true;
      x_btn.sprite.on("click", function () {
        this$1$1.parent.container.emit("close");
      });
      var listCon = new PIXI.UI.Container(1306 * ratioY, "100%");
      var ScrollingContainer = new PIXI.UI.ScrollingContainer({
        scrollX: false,
        scrollY: true
      });
      ScrollingContainer.width = "100%";
      ScrollingContainer.height = 290 * ratioY;
      ScrollingContainer.anchorTop = 160 * ratioY;
      ScrollingContainer.dragThreshold = 5;
      ScrollingContainer.dragRestrictAxis = "y";
      ScrollingContainer.addChild(listCon);
      ScrollingContainer.on("dragStart", function () {});
      ScrollingContainer.on("dragEnd", function () {});
      var ScrollBar = new PIXI.UI.ScrollBar({
        track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        handle: new PIXI.UI.SliceSprite(t, 5),
        vertical: true,
        scrollingContainer: ScrollingContainer,
        autohide: true
      });
      ScrollBar.track.width = ScrollBar.handle.width = 8 * ratioX;
      ScrollBar.track.pivotX = -0.5;
      ScrollBar.anchorTop = 160 * ratioY;
      ScrollBar.anchorBottom = 514 * ratioY;
      ScrollBar.anchorRight = 0;
      ScrollBar.track.blendMode = 0;
      ScrollBar.handle.tint = color.green;
      var line3 = new LineSprte(1306 * ratioX, 2, color.line);
      line3.verticalAlign = "middle";
      line3.horizontalAlign = "center";
      listCon.anchorLeft = 54 * ratioX;
      var selectT = new PIXI.UI.Text("선택한 그림단어", fontstyle.Black14);
      selectT.anchorTop = 40 * ratioY;
      line3.addChild(selectT);
      this.cardAreaConatainere();
      var search = this.searchContainere();
      this.minTexture = minTexture;
      this.maxTexture = maxTexture;
      this.title = title;
      this.listCon = listCon;
      this.ScrollingContainer = ScrollingContainer;
      var enrollBtn = new ButtonHandler({
        width: 1306 * ratioX,
        height: 40 * ratioY,
        line: 1,
        lineColor: color.line,
        tint: color.green,
        text: {
          name: "등록하기",
          style: fontstyle.White12_R
        }
      });
      enrollBtn.button.anchorBottom = 46 * ratioY;
      enrollBtn.button.horizontalAlign = "center";
      enrollBtn.onClick(function () {
        Data.cardArr[this$1$1.childNum] = this$1$1.selectedListCon.children[0];
        this$1$1.parent.container.emit("close");
        this$1$1.selectedListCon.removeChild(this$1$1.selectedListCon.children[0]);
        this$1$1.callFucn();
      });
      this.addChild(title, x_btn, ScrollingContainer, ScrollBar, search, enrollBtn.button, line3);
    }

    if (superclass) editScroll.__proto__ = superclass;
    editScroll.prototype = Object.create(superclass && superclass.prototype);
    editScroll.prototype.constructor = editScroll;
    var prototypeAccessors = {
      setchildNum: {
        configurable: true
      },
      setCallFucn: {
        configurable: true
      }
    };

    prototypeAccessors.setchildNum.set = function (num) {
      this.childNum = num;
    };

    prototypeAccessors.setCallFucn.set = function (func) {
      this.callFucn = func;
    };

    editScroll.prototype.cardAreaConatainere = function cardAreaConatainere() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var pageNum = Data.pageNum;
      var listCon = new PIXI.UI.Container(1306 * ratioY, "100%");
      listCon.anchorLeft = 54 * ratioX;
      listCon.anchorTop = 567 * ratioY;
      this.selectedListCon = listCon;
      this.selectedListCon.container.on("change", function (btn, sample, uuid) {
        var item = new PIXI.UI.Sprite(sample.sprite.texture);
        var selectBox = new ButtonHandler({
          width: btn.button.width,
          height: btn.button.height,
          line: 1,
          tint: "#000000",
          text: {
            name: "선택 해제",
            style: fontstyle.White12_R
          }
        });
        selectBox.background.alpha = 0.8;
        selectBox.button.interactive = false;
        selectBox.button.anchorBottom = 0;
        item.width = sample.width;
        item.height = sample.height;
        item.addChild(selectBox.button);
        item.uuid = uuid;
        item.sprite.interactive = true;
        item.title = sample.title;
        item.list = new Array(pageNum);
        this$1$1.Sitems.push(item);
        item.sprite.on("click", function () {
          sample.removeChild(btn.button);
          this$1$1.selectedListCon.removeChild(item);
        });

        if (this$1$1.selectedListCon.children.length) {
          this$1$1.selectedListCon.removeChild(this$1$1.selectedListCon.children[0]);
          this$1$1.selectedListCon.addChild(item);
        } else {
          this$1$1.selectedListCon.addChild(item);
        }
      });
      this.addChild(this.selectedListCon);
    };

    editScroll.prototype.removeChildren = function removeChildren() {
      var this$1$1 = this;
      var ratioY = Manager.ratioY;
      this.items.map(function (c) {
        this$1$1.listCon.removeChild(c);
      });
      this.items = [];
      this.height = 375 * ratioY;
      this.sprite.texture = this.minTexture;
      this.title.text = "그림단어";
    };

    editScroll.prototype.addchildrene = function addchildrene() {
      var this$1$1 = this;
      var ratioY = Manager.ratioY;
      this.items.map(function (c) {
        this$1$1.listCon.removeChild(c);
      });
      this.items = [];
      this.height = 918 * ratioY;
      this.sprite.texture = this.maxTexture;
      this.title.text = "그림단어 보관함";
    };

    editScroll.prototype.searchContainere = function searchContainere() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var con = new PIXI.UI.Container(1306 * ratioX, 250 * ratioY);
      var sp = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
      sp.tint = 0xff99dd;
      sp.width = 403 * ratioX;
      sp.height = 22 * ratioY;
      sp.anchorRight = 30 * ratioX;
      sp.anchorTop = 13 * ratioY;
      sp.alpha = 0;
      var graphic = new PIXI.Graphics();
      graphic.clear();
      graphic.lineStyle(0);
      graphic.beginFill(color.red);
      graphic.drawRoundedRect(0, 0, 1185 * ratioX, 3, 3);
      graphic.endFill();
      var line2 = new GraphicsSprite(graphic);
      line2.anchorTop = 30 * ratioY;
      con.anchorTop = 106 * ratioY;
      con.horizontalAlign = "center";
      var placeholder = "검색할 단어를 입력하세요.";
      this.textinput = new PIXI.UI.TextInput({
        background: PIXI.UI.Sprite(PIXI.Texture.WHITE),
        value: placeholder,
        style: fontstyle.Black14,
        lineHeight: 30 * ratioY,
        paddingLeft: 10 * ratioX,
        width: "90%",
        height: 30
      });
      this.textinput.alpha = 0.5;
      var qTexture = new PIXI.Texture.from("Q_icon");
      var qSpritee = new PIXI.UI.Sprite(qTexture);
      qSpritee.tint = color.red;
      qSpritee.anchorRight = 2 * ratioX;
      qSpritee.anchorBottom = 3 * ratioY;
      qSpritee.width = qSpritee.height = 20 * ratioX;
      line2.addChild(qSpritee);
      var explainT = new PIXI.Texture.from("explain_icon");
      var explain = new PIXI.UI.Sprite(explainT);
      explain.anchorRight = 0;
      explain.anchorTop = 13 * ratioY;
      explain.width = explain.height = 18 * ratioX;
      con.addChild(line2, explain, sp);
      this.textinput.on("keyup", function (e) {
        if (e.keyCode === 13) {
          this$1$1.textinput.value = this$1$1.textinput._lastValue;
          this$1$1.textinput.emit("blur");
          qSpritee.sprite.emit("click");
        }
      });
      this.textinput.on("focus", function () {
        if (this$1$1.textinput.value === placeholder) {
          this$1$1.textinput.value = "";
          this$1$1.textinput.alpha = 1;
        }
      });
      this.textinput.on("blur", function () {
        if (this$1$1.textinput.value === "") {
          this$1$1.textinput.value = placeholder;
          this$1$1.textinput.alpha = 0.5;
        }
      });
      con.addChild(this.textinput);
      qSpritee.sprite.interactive = qSpritee.sprite.buttonMode = true;
      explain.sprite.interactive = explain.sprite.buttonMode = true;
      qSpritee.sprite.on("click", function () {
        this$1$1.addchildrene();
        var val = this$1$1.textinput.value.replace(/,/g, "#");
        get_CardList(val, function (res) {
          if (res.code === 0) {
            if (res.data.total === 0) {
              this$1$1.addChild(this$1$1.noResearche);
            } else {
              this$1$1.removeChild(this$1$1.noResearche);
            }

            this$1$1.listIteme(res.data.pageList);
          }
        });
      });
      explain.sprite.on("pointerover", function () {
        sp.alpha = 1;
      });
      explain.sprite.on("pointerout", function () {
        sp.alpha = 0;
      });
      return con;
    };

    editScroll.prototype.listIteme = function listIteme(arr) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var leng = arr.length;
      var itemHeight = 0;
      var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");

      var loop = function loop(j) {
        var i = this$1$1.listCon.children.length;
        var uuid = arr[j].data_uuid;
        var t = Texture.from(S3_URL_RAW + "/" + uuid, true);
        var item = new PIXI.UI.Sprite(t);
        this$1$1.listCon.addChild(item);
        item.width = 200 * ratioX;
        item.height = 271 * ratioY;
        item.sprite.interactive = true;
        var w = item._width;
        var h = item._height / 5;
        var selectBox = new ButtonHandler({
          width: w,
          height: h,
          line: 1,
          lineColor: color.red,
          tint: color.red,
          text: {
            name: "선택",
            style: fontstyle.White12_R
          }
        });
        selectBox.background.alpha = 0.8;
        selectBox.button.interactive = false;
        selectBox.button.anchorBottom = 0;
        var a = 20 * ratioX;
        item.x = i % 6 * (item.width + a);
        item.y = Math.floor(i / 6) * (item.height + a);
        item.title = arr[j].title;
        itemHeight += item.height + a;
        item.sprite.on("click", function () {
          if (!selectBox.button.parent) {
            if (this$1$1.temps !== undefined) {
              this$1$1.temps[1].removeChild(this$1$1.temps[0].button);
            }

            this$1$1.selectedListCon.container.emit("change", selectBox, item, uuid);
            item.addChild(selectBox.button);
            this$1$1.temps = [selectBox, item];
          }
        });
        this$1$1.items.push(item);
      };

      for (var j = 0; j < leng; j++) {
        loop(j);
      }

      this.listCon.height = itemHeight;
    };

    Object.defineProperties(editScroll.prototype, prototypeAccessors);
    return editScroll;
  }(PIXI.UI.Sprite);
  function makeCardContainer$2(graphic, tWidth, tHight, dy, dt, radius) {
    graphic.clear();
    graphic.lineStyle(1, 0x0ffffff, 1, 1, true);
    graphic.beginFill(0x0b4247);
    graphic.drawRoundedRect(0, 0, tWidth, tHight - dy - dt, radius);
    graphic.endFill();
    graphic.lineStyle(1, 0xffffff, 1, 1, true);
    graphic.beginFill(0xffffff);
    graphic.drawRect(0, dy, tWidth, dt * 2);
    graphic.endFill();
    graphic.lineStyle(1, 0xffffff, 1, 1, true);
    graphic.beginFill(0xffffff);
    graphic.drawRoundedRect(0, dy + dt, tWidth, tHight - dy - dt, radius);
    graphic.endFill();
  }
  /*@__PURE__*/(function (superclass) {
    function DropDown(option) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      superclass.call(this, option.width, option.height);
      var mainBtn = new ButtonHandler({
        width: 92 * ratioX,
        height: 32 * ratioY,
        lineColor: 0xffffff,
        img: {
          url: "down",
          width: 8 * ratioX,
          height: 6 * ratioY,
          tint: 0x7c7c7c
        }
      });
      mainBtn.addText({
        text: "전체",
        style: fontstyle.Black12,
        name: "main"
      });
      mainBtn.onClick(function () {
        var ref, ref$1;
        this$1$1.click = !this$1$1.click;

        if (this$1$1.click) {
          (ref = this$1$1).addChild.apply(ref, item);
        } else {
          (ref$1 = this$1$1).removeChild.apply(ref$1, item);
        }
      });
      mainBtn.speech = 0;
      var item = new ListItem$1(mainBtn).con;
      mainBtn.down.anchorTop = 15 * ratioY;
      mainBtn.down.anchorRight = 10 * ratioX;
      mainBtn.main.verticalAlign = "middle";
      mainBtn.main.anchorLeft = 10 * ratioX;
      mainBtn.button.anchorLeft = 8 * ratioX;
      this.mainBtn = mainBtn;
      this.addChild(mainBtn.button);
    }

    if (superclass) DropDown.__proto__ = superclass;
    DropDown.prototype = Object.create(superclass && superclass.prototype);
    DropDown.prototype.constructor = DropDown;
    return DropDown;
  })(PIXI.UI.Container);
  var ListItem$1 = function ListItem(mainBtn) {
    var this$1$1 = this;
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    this.con = new VirtualCon();
    var titles = ["전체", "타이틀", "태그"];

    var loop = function loop(i) {
      var title = titles[i];
      var name = "part" + i;
      var width = 92 * ratioX;
      var height = 32 * ratioY;
      var btn = new ButtonHandler({
        width: width,
        height: height,
        line: 1,
        lineColor: 0xffffff
      });
      btn.addText(_defineProperty({
        name: title,
        style: fontstyle.Black12
      }, "name", name));
      btn[name].verticalAlign = "middle";
      btn[name].anchorLeft = 10 * ratioX;
      btn.pos(8 * ratioX, height + height * i);
      btn.speech = (i + 1) * 1000 + 1;
      btn.onHover(function (e) {
        if (e) {
          btn[name]._text.style.fill = 0xff0000;
        } else {
          btn[name]._text.style.fill = 0x000000;
        }
      });
      btn.onClick(function () {
        mainBtn.main.text = btn[name].text;
        mainBtn.speech = btn.speech;
        mainBtn.button.emit("click");
      });
      this$1$1.con.addChild(btn.button);
    };

    for (var i = 0; i < titles.length; i++) {
      loop(i);
    }
  };

  var WebMenu = /*@__PURE__*/function (superclass) {
    function WebMenu() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var size = 23 * ratioX;
      this.graphic = new PIXI.Graphics();
      this.graphic.lineStyle(1, color.bgBoxBorder);
      this.graphic.beginFill(color.bgBox);
      this.graphic.drawRect(0, 0, 200 * ratioX, window.innerHeight);
      this.graphic.endFill();
      superclass.call(this, Manager.app.renderer.generateTexture(this.graphic));
      this.heigth = "100%";
      this.anchorRight = 0;
      var bgGraphic = new PIXI.Graphics();
      bgGraphic.lineStyle(1, color.bgBoxBorder);
      bgGraphic.beginFill(color.bgBox);
      bgGraphic.moveTo(20 * ratioX, 0);
      bgGraphic.lineTo(47 * ratioX, 0);
      bgGraphic.lineTo(47 * ratioX, 285 * ratioY);
      bgGraphic.lineTo(20 * ratioX, 285 * ratioY);
      bgGraphic.arcTo(0, 285 * ratioY, 0, 265 * ratioY, 20);
      bgGraphic.lineTo(0, 20 * ratioY);
      bgGraphic.arcTo(0, 0, 20 * ratioX, 0, 20);
      bgGraphic.endFill();
      this.menuBg = new GraphicsSprite(bgGraphic);
      this.menuBg.anchorTop = 60 * ratioY;
      this.menuBg.anchorRight = 201 * ratioX;
      this.menuBg.interactive = true;
      this.menuBg.buttonMode = true;
      this.menuBg.on("mouseover", function () {});
      this.cardBtn = this.makeBtn({
        url: "card_icon_new",
        width: size,
        height: size,
        text: {
          name: "그림단어",
          style: fontstyle.Black15_R
        }
      });
      this.audioBtn = this.makeBtn({
        url: "audio_icon",
        width: size,
        height: size,
        text: {
          name: "음성",
          text: "음성",
          style: fontstyle.Black15_R
        }
      });
      this.paintBtn = this.makeBtn({
        url: "paint_icon_new",
        width: size,
        height: size,
        text: {
          name: "판서",
          text: "판서",
          style: fontstyle.Black15_R
        }
      });
      this.bookmarkBtn = this.makeBtn({
        url: "bookmark_icon",
        width: size,
        height: size,
        text: {
          name: "책갈피",
          text: "책갈피",
          style: fontstyle.Black15_R
        }
      });
      this.fullscreenBtn = this.makeBtn({
        url: "fullscreen_icon",
        width: size,
        height: size,
        text: {
          name: "전체화면",
          text: "전체화면",
          style: fontstyle.Black15_R
        }
      });
      this.gatherBtn = this.makeBox({
        width: 83 * ratioX,
        height: 33 * ratioX,
        tint: color.white,
        line: 5,
        text: {
          name: "모아보기",
          style: fontstyle.Black15_R
        },
        rounded: 11,
        lineColor: 0x707070
      });
      this.printBtn = this.makeBox({
        width: 83 * ratioX,
        height: 33 * ratioX,
        tint: color.white,
        line: 5,
        text: {
          name: "인쇄하기",
          style: fontstyle.Black15_R
        },
        rounded: 11,
        lineColor: 0x707070
      });
      this.finBtn = this.makeBox({
        width: 168 * ratioX,
        height: 40 * ratioX,
        tint: color.white,
        line: 5,
        text: {
          name: "스토리 닫기",
          style: fontstyle.Black15_R
        },
        rounded: 6,
        lineColor: 0xf1f0f0
      });
      this.finBtn.button.anchorLeft = 20 * ratioX;
      this.cardBtn.button.anchorRight = this.audioBtn.button.anchorRight = this.paintBtn.button.anchorRight = this.bookmarkBtn.button.anchorRight = this.fullscreenBtn.button.anchorRight = 205 * ratioX;
      this.gatherBtn.button.anchorLeft = 15 * ratioX;
      this.printBtn.button.anchorLeft = 105 * ratioX;
      this.finBtn.button.anchorTop = 10 * ratioY;
      this.cardBtn.button.anchorTop = 70 * ratioY;
      this.audioBtn.button.anchorTop = 123 * ratioY;
      this.paintBtn.button.anchorTop = 176 * ratioY;
      this.bookmarkBtn.button.anchorTop = 229 * ratioY;
      this.fullscreenBtn.button.anchorTop = 282 * ratioY;
      this.gatherBtn.button.anchorTop = this.printBtn.button.anchorTop = 1035 * ratioY;
      this.finBtn.alpha = this.gatherBtn.alpha = this.printBtn.alpha = 1;
      this.addChild(this.menuBg, this.cardBtn.button, this.paintBtn.button, this.audioBtn.button, this.bookmarkBtn.button, this.fullscreenBtn.button, this.finBtn.button, this.gatherBtn.button, this.printBtn.button);
      this.buttonArray = [this.cardBtn, this.paintBtn, this.audioBtn, this.bookmarkBtn, this.fullscreenBtn];
    }

    if (superclass) WebMenu.__proto__ = superclass;
    WebMenu.prototype = Object.create(superclass && superclass.prototype);
    WebMenu.prototype.constructor = WebMenu;

    WebMenu.prototype.makeContentsBox = function makeContentsBox() {
      var ratioY = Manager.ratioY;
      this.contentsBox = new PIXI.UI.Container("100%", "100%");
      this.contents = this.webCard;
      this.contentsBox.addChild(this.contents);
      this.contents.anchorTop = 23 * ratioY;
    };

    WebMenu.prototype.clickEventHandler = function clickEventHandler(btn) {
      if (Manager.isPrev) {
        Manager.currentScene.con.container.emit("previewblurOff");
      } else {
        Manager.currentScene.con.container.emit("buttonblurOff");
      }

      var paint_canvas = document.getElementById("paint_canvas");
      paint_canvas.style.display = "none";

      if (this.contentsBox === undefined) {
        this.makeContentsBox();
      }

      if (!btn) {
        return;
      }

      if (btn.buttonText !== "음성" && this.webAudio.player !== undefined && this.webAudio.player.playlist[this.webAudio.player.index].howl !== null) {
        this.webAudio.pauseBtn.sprite.emit("click");
        this.webAudio.highlighter.visible = false;
      }

      switch (btn.buttonText) {
        case "그림단어":
          if (!Manager.isCard) {
            this.contentsBox.removeChild(this.contents);
            this.contents = this.webCard;
            this.contentsBox.addChild(this.contents);
            this.addChild(this.contentsBox);
            Manager.isCard = true;
            Manager.isPaint = false;
            Manager.isAudio = false;
            Manager.isBookmark = false;
            btn.backgroundColor = color.button;
          } else {
            this.removeChild(this.contentsBox);
            Manager.isCard = false;
            btn.backgroundColor = color.bgBox;
          }

          break;

        case "음성":
          if (!Manager.isAudio) {
            this.contentsBox.removeChild(this.contents);
            this.contents = this.webAudio;
            this.contentsBox.addChild(this.contents);
            this.addChild(this.contentsBox);
            Manager.isAudio = true;
            Manager.isCard = false;
            Manager.isQ = false;
            Manager.isPaint = false;
            Manager.isBookmark = false;
            btn.backgroundColor = color.button;
          } else {
            this.removeChild(this.contentsBox);
            Manager.isAudio = false;
            btn.backgroundColor = color.bgBox;
          }

          break;

        case "판서":
          if (!Manager.isPaint) {
            this.contentsBox.removeChild(this.contents);
            this.contents = this.webPaint;
            this.contentsBox.addChild(this.contents);
            this.addChild(this.contentsBox);
            paint_canvas.style.display = "block";
            Manager.isPaint = true;
            Manager.isCard = false;
            Manager.isQ = false;
            Manager.isAudio = false;
            Manager.isBookmark = false;
            btn.backgroundColor = color.button;
          } else {
            this.removeChild(this.contentsBox);
            Manager.isPaint = false;
            btn.backgroundColor = color.bgBox;
          }

          break;

        case "책갈피":
          if (!Manager.isBookmark) {
            this.contentsBox.removeChild(this.contents);
            this.contents = this.webBookmark;
            this.contentsBox.addChild(this.contents);
            this.addChild(this.contentsBox);
            Manager.isBookmark = true;
            Manager.isCard = false;
            Manager.isQ = false;
            Manager.isPaint = false;
            Manager.isAudio = false;
            btn.backgroundColor = color.button;
          } else {
            this.removeChild(this.contentsBox);
            Manager.isBookmark = false;
            btn.backgroundColor = color.bgBox;
          }

          break;

        case "모아보기":
          this.removeChild(this.contentsBox);

          if (!Manager.isGather) {
            Manager.currentScene.con.container.emit("buttonblurOn");
            Manager.isCard = false;
            Manager.isQ = false;
          }

          Manager.isCard = false;
          Manager.isQ = false;
          break;

        case "전체화면":
          this.removeChild(this.contentsBox);
          Manager.isCard = false;
          Manager.isQ = false;
          break;

        case "인쇄하기":
          this.removeChild(this.contentsBox);
          Manager.currentScene.con.container.emit("buttonblurOn");
          break;

        case "스토리 닫기":
          this.removeChild(this.contentsBox);
          break;
      }
    };

    WebMenu.prototype.makeBox = function makeBox(option) {
      var this$1$1 = this;
      var width = option.width;
      var height = option.height;
      var tint = option.tint;
      var line = option.line;
      var text = option.text;
      var rounded = option.rounded;
      var lineColor = option.lineColor;
      var button = new ButtonHandler({
        width: width,
        height: height,
        tint: tint,
        line: line,
        text: text,
        rounded: rounded,
        lineColor: lineColor
      });
      button.buttonText = option.text.name;
      button.onClick(function () {
        this$1$1.selectedBtn = button;
        Manager.currentScene.webMenu.clickEventHandler(button);
      });
      button.onHover(function (e) {
        if (e) {
          if (button === this$1$1.finBtn) {
            var whiteText = new PIXI.UI.Text(text.name, fontstyle.White15_R);
            whiteText.horizontalAlign = "center";
            whiteText.verticalAlign = "middle";
            button.backgroundColor = color.red;
            button.button.removeChild(button.button.children[1]);
            button.button.addChild(whiteText);
          } else {
            button.backgroundColor = color.button;
          }
        } else {
          if (button === this$1$1.finBtn) {
            var blackText = new PIXI.UI.Text(text.name, fontstyle.Black15_R);
            blackText.horizontalAlign = "center";
            blackText.verticalAlign = "middle";
            button.button.removeChild(button.button.children[1]);
            button.button.addChild(blackText);
          }

          button.backgroundColor = color.white;
        }
      });
      return button;
    };

    WebMenu.prototype.makeBtn = function makeBtn(img) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(0, 0xffffff);
      graphic.beginFill(color.lightGray);
      graphic.drawRoundedRect(0, 0, 120 * ratioX, 45 * ratioX, 10);
      graphic.endFill();
      var bg = new GraphicsSprite(graphic);
      bg.alpha = 0;
      bg.anchorRight = 0;
      var button = new ButtonHandler({
        width: 35 * ratioX,
        height: 35 * ratioX,
        tint: color.button,
        line: 0,
        rounded: 10,
        img: img,
        bg: bg
      });
      button.background.alpha = 0;
      button.buttonText = img.text.name;

      if (img) {
        button[img.url].anchorRight = 5 * ratioX;
        button[img.url].anchorBottom = 5 * ratioY;
        button[img.url].tint = 0x333333;
        button.button.on("disable", function () {
          button[img.url].tint = 0xeaeaea;
        });
        button.button.on("active", function () {
          button[img.url].tint = 0x333333;
        });
      }

      button.onClick(function () {
        button.backgroundColor = color.lightGray;
        this$1$1.buttonArray.map(function (btn) {
          if (btn.buttonText !== "전체화면") {
            if (btn === button) {
              button.background.alpha = 1;
            } else {
              btn.background.alpha = 0;
            }
          }
        });
        this$1$1.selectedBtn = button;
        Manager.currentScene.webMenu.clickEventHandler(button);
      });
      button.onHover(function (e) {
        if (e) {
          button.addText({
            name: img.text.name,
            text: img.text.name,
            style: img.text.style
          });
          button[img.text.name].x = -70 * ratioX;
          button[img.text.name].y = 15 * ratioY;
          bg.anchorRight = 0;
          bg.alpha = 1;
        } else {
          button.removeText({
            name: img.text.name,
            text: img.text.name,
            style: fontstyle.Black15_R
          });
          bg.alpha = 0;
        }
      });
      return button;
    };

    return WebMenu;
  }(PIXI.UI.Sprite);

  var PrevCard = /*@__PURE__*/function (superclass) {
    function PrevCard() {
      var this$1$1 = this;
      superclass.call(this, "100%", "100%");
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.filter = new Filter("100%", "100%");
      this.card = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
      this.card.width = 490 * ratioX;
      this.card.height = 682 * ratioY;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      this.container.on("close", function () {
        this$1$1.parent.removeChild(this$1$1);
      });
      this.filter.sprite.on("click", function () {
        this$1$1.filter.parent.container.emit("close");
      });
      this.addChild(this.filter, this.card);
    }

    if (superclass) PrevCard.__proto__ = superclass;
    PrevCard.prototype = Object.create(superclass && superclass.prototype);
    PrevCard.prototype.constructor = PrevCard;
    return PrevCard;
  }(PIXI.UI.Container);

  var WebCardCon = /*@__PURE__*/function (superclass) {
    function WebCardCon(arr) {
      var ratioY = Manager.ratioY;
      superclass.call(this, "100%", 1000 * ratioY);
      this.cardArr = arr;
      this.searchArr = [];
      this.generateSearch();
      this.ShowRegisteredCard();
    }

    if (superclass) WebCardCon.__proto__ = superclass;
    WebCardCon.prototype = Object.create(superclass && superclass.prototype);
    WebCardCon.prototype.constructor = WebCardCon;

    WebCardCon.prototype.updateSaveCard = function updateSaveCard(arr) {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.listCon.height = 232 * arr.length * ratioY;

      if (arr.length <= 3) {
        this.savedLine.alpha = 0;
      } else {
        this.savedLine.alpha = 1;
      }

      for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        element.width = 143 * ratioX;
        element.height = 190 * ratioY;
        element.horizontalAlign = "center";
        element.y = (220 * i + 10) * ratioY;
        this.listCon.addChild(element);
      }

      this.count.text = arr.length;
    };

    WebCardCon.prototype.updateSearchCard = function updateSearchCard(arr, container) {
      this.searchArr = arr;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      container.height = 232 * arr.length * ratioY;

      for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        element.width = 143 * ratioX;
        element.height = 190 * ratioY;
        element.horizontalAlign = "center";
        element.y = (220 * i + 10) * ratioY;
        container.addChild(element);
      }
    };

    WebCardCon.prototype.changeCard = function changeCard(arr) {
      var this$1$1 = this;
      this.cardArr.forEach(function (element) {
        this$1$1.listCon.removeChild(element);
      });
      this.cardArr = arr;
      this.updateSaveCard(this.cardArr);
    };

    WebCardCon.prototype.generateSearch = function generateSearch() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var listCon = new PIXI.UI.Container("100%", "100%");
      var con = new PIXI.UI.Container("100%", "100%");
      var txt = new PIXI.UI.Text("단어검색", fontstyle.Black16_R);
      txt.horizontalAlign = "center";
      txt.anchorTop = 18 * ratioY;
      var noneTxt = new PIXI.UI.Text("등록된 단어가 없습니다.", fontstyle.Black14_R);
      noneTxt.horizontalAlign = "center";
      noneTxt.anchorTop = 222 * ratioY;
      noneTxt.visible = false;
      var inputt = new PIXI.Texture.from("inputBox");
      var sp = new PIXI.UI.Sprite(inputt);
      sp.width = "90%";
      sp.height = 43 * ratioY;
      sp.horizontalAlign = "center";
      sp.anchorTop = 56 * ratioY;
      var placeholder = "단어 검색";
      this.textinput = new PIXI.UI.TextInput({
        background: PIXI.UI.Sprite(PIXI.Texture.WHITE),
        style: fontstyle.Black14,
        lineHeight: 40 * ratioY,
        paddingLeft: 10 * ratioX,
        width: 160 * ratioX,
        height: 40 * ratioY,
        value: placeholder
      });
      this.textinput.alpha = 0.5;
      this.textinput.anchorLeft = 10 * ratioX;
      var qTexture = new PIXI.Texture.from("Q_icon");
      var qSprite = new PIXI.UI.Sprite(qTexture);
      qSprite.tint = color.Black;
      qSprite.anchorRight = 10 * ratioX;
      qSprite.verticalAlign = "middle";
      qSprite.width = qSprite.height = 20 * ratioX;
      var explainT = new PIXI.Texture.from("explain_icon");
      var explain = new PIXI.UI.Sprite(explainT);
      explain.anchorRight = 14 * ratioX;
      explain.width = explain.height = 20 * ratioX;
      explain.verticalAlign = "middle";
      var back = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
      back.visible = false;
      back.width = 199 * ratioX;
      back.height = 45 * ratioY;
      back.horizontalAlign = "center";
      back.anchorTop = 130 * ratioY;
      back.tint = color.lightGray;
      var shadow = new LineSprte(back.width, 2, color.Gray);
      shadow.alpha = 0.5;
      shadow.anchorBottom = 0;
      var beginningText = new PIXI.UI.Text("검색 결과 ", fontstyle.Black14_R);
      var result = new PIXI.UI.Text("1", fontstyle.Red16);
      var enddingText = new PIXI.UI.Text("개", fontstyle.Black14_R);
      beginningText.verticalAlign = enddingText.verticalAlign = result.verticalAlign = "middle";
      beginningText.anchorLeft = 43 * ratioX;
      result.x = beginningText.anchorLeft + beginningText.width;
      enddingText.x = result.x + result.width + 5 * ratioX;
      var closeBtn = new ButtonHandler({
        line: 3,
        lineColor: color.vividGray,
        text: {
          name: "검색 결과 닫기",
          style: fontstyle.Black12
        },
        rounded: 2,
        width: 143 * ratioX,
        height: 36 * ratioY
      });
      closeBtn.button.horizontalAlign = "center";
      closeBtn.button.anchorBottom = 0;
      closeBtn.button.visible = false;
      closeBtn.button.interactive = true;
      closeBtn.button.buttonMode = true;
      this.textinput.on("keyup", function (e) {
        if (this$1$1.textinput.value === "\n") {
          return;
        }

        if (e.keyCode === 13) {
          this$1$1.textinput.value = this$1$1.textinput._lastValue;
          qSprite.sprite.emit("click");
          return;
        }
      });
      this.textinput.on("blur", function (e) {
        if (this$1$1.searchArr.length === 0) {
          back.visible = noneTxt.visible = closeBtn.button.visible = false;
          this$1$1.addChild(this$1$1.savedCon);

          if (listCon) {
            while (listCon.children[0]) {
              listCon.removeChild(listCon.children[0]);
            }
          }
        }
      });
      this.textinput.on("focus", function () {
        this$1$1.textinput.text = "";
      });
      var shortT = new PIXI.Texture.from("manual_long");
      var shortManual = new PIXI.UI.Sprite(shortT);
      shortManual.width = 415 * ratioX;
      shortManual.height = 46 * ratioY;
      shortManual.anchorRight = -explain.width / 2;
      shortManual.anchorBottom = explain.height;
      explain.sprite.interactive = explain.sprite.buttonMode = true;
      shortManual.visible = false;
      explain.sprite.on("pointerover", function () {
        shortManual.visible = true;
      });
      explain.sprite.on("pointerout", function () {
        shortManual.visible = false;
      });
      explain.addChild(shortManual);
      var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");
      qSprite.sprite.interactive = qSprite.sprite.buttonMode = true;
      qSprite.sprite.interactive = qSprite.sprite.buttonMode = true;
      qSprite.sprite.on("click", function () {
        if (this$1$1.textinput.value === "") {
          return;
        }

        if (listCon) {
          while (listCon.children[0]) {
            listCon.removeChild(listCon.children[0]);
          }
        }

        back.visible = closeBtn.button.visible = true;
        this$1$1.removeChild(this$1$1.savedCon);
        get_CardList(this$1$1.textinput.value, function (res) {
          var arr = [];

          if (res.code === 0) {
            res.data.pageList.forEach(function (element) {
              var uuid = element.data_uuid;
              var t = Texture.from(S3_URL_RAW + "/" + uuid, true);
              var item = new PIXI.UI.Sprite(t);
              item.sprite.interactive = item.sprite.buttonMode = true;
              item.sprite.on("click", function () {
                Manager.currentScene.prevCard.card.sprite.texture = t;
                Manager.currentScene.con.addChild(Manager.currentScene.prevCard);
              });
              arr.push(item);
            });
            result.text = arr.length;

            if (arr.length > 3) {
              verticalLine.alpha = 1;
            } else {
              verticalLine.alpha = 0;
            }

            if (arr.length === 0) {
              noneTxt.visible = true;
              this$1$1.searchArr = [];
            } else {
              this$1$1.updateSearchCard(arr, listCon);
              noneTxt.visible = false;
            }
          }

          enddingText.x = result.x + result.width + 5 * ratioX;
        });
      });
      closeBtn.onClick(function () {
        this$1$1.textinput.text = "";
        verticalLine.alpha = 0;
        this$1$1.textinput.emit("blur");
      });
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(2, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRoundedRect(0, 0, 10, 10, 10);
      graphic.endFill();
      var t = Manager.app.renderer.generateTexture(graphic);
      var ScrollingContainer = new PIXI.UI.ScrollingContainer({
        scrollX: false,
        scrollY: true
      });
      ScrollingContainer.width = "100%";
      ScrollingContainer.dragThreshold = 5;
      ScrollingContainer.dragRestrictAxis = "y";
      ScrollingContainer.addChild(listCon);
      var ScrollBar = new PIXI.UI.ScrollBar({
        track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        handle: new PIXI.UI.SliceSprite(t, 5),
        vertical: true,
        scrollingContainer: ScrollingContainer,
        autohide: true
      });
      ScrollingContainer.height = ScrollBar.height = 657 * ratioY;
      ScrollBar.track.width = 8 * ratioX;
      ScrollBar.handle.width = 5 * ratioX;
      ScrollBar.track.tint = color.bgBox;
      ScrollBar.handle.tint = color.handle;
      ScrollBar.handle.pivotX = 0;
      ScrollBar.anchorRight = 0;
      ScrollBar.anchorTop = ScrollingContainer.anchorTop = 188 * ratioY;
      var verticalLine = new LineSprte(2, 657 * ratioY, color.line);
      verticalLine.anchorRight = 13 * ratioX;
      verticalLine.anchorTop = 188 * ratioY;
      verticalLine.alpha = 0;
      back.addChild(shadow, beginningText, enddingText, result, explain);
      sp.addChild(this.textinput, qSprite);
      this.back = back;
      con.addChild(sp, back, ScrollingContainer, ScrollBar, noneTxt, verticalLine);
      this.addChild(con, closeBtn.button);
    };

    WebCardCon.prototype.ShowRegisteredCard = function ShowRegisteredCard() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var con = new PIXI.UI.Container("100%", 765 * ratioY);
      var back = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
      back.width = 198 * ratioX;
      back.height = 45 * ratioY;
      back.horizontalAlign = "center";
      back.tint = color.lightGray;
      back.anchorTop = -17.5 * ratioY;
      var shadow = new LineSprte(back.width, 2, color.Gray);
      shadow.alpha = 0.5;
      shadow.anchorBottom = 0;
      con.anchorTop = 130 * ratioY;
      var beginningText = new PIXI.UI.Text("등록된 단어 ", fontstyle.Black14_R);
      this.count = new PIXI.UI.Text("", fontstyle.Red16);
      var enddingText = new PIXI.UI.Text("개", fontstyle.Black14_R);
      beginningText.anchorLeft = 24 * ratioX;
      this.count.x = beginningText.anchorLeft + beginningText.width;
      enddingText.x = this.count.x + this.count.width + 5 * ratioX;
      this.count.on("change", function (txt) {
        this$1$1.count.text = txt;
        enddingText.x = this$1$1.count.x + this$1$1.count.width + 5 * ratioX;
      });
      var explainT = new PIXI.Texture.from("explain_icon");
      var explain = new PIXI.UI.Sprite(explainT);
      explain.anchorRight = 14 * ratioX;
      explain.width = explain.height = 20 * ratioX;
      var shortT = new PIXI.Texture.from("manual_long");
      var shortManual = new PIXI.UI.Sprite(shortT);
      shortManual.width = 415 * ratioX;
      shortManual.height = 46 * ratioY;
      shortManual.anchorRight = -explain.width / 2;
      shortManual.anchorBottom = explain.height;
      explain.sprite.interactive = explain.sprite.buttonMode = true;
      shortManual.visible = false;
      explain.sprite.on("pointerover", function () {
        shortManual.visible = true;
      });
      explain.sprite.on("pointerout", function () {
        shortManual.visible = false;
      });
      explain.addChild(shortManual);
      beginningText.verticalAlign = enddingText.verticalAlign = this.count.verticalAlign = explain.verticalAlign = "middle";
      back.addChild(shadow, beginningText, enddingText, this.count, explain);
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(2, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRoundedRect(0, 0, 10, 10, 10);
      graphic.endFill();
      var t = Manager.app.renderer.generateTexture(graphic);
      var listCon = new PIXI.UI.Container("100%", 0);
      var ScrollingContainer = new PIXI.UI.ScrollingContainer({
        scrollX: false,
        scrollY: true
      });
      ScrollingContainer.width = "100%";
      ScrollingContainer.dragThreshold = 5;
      ScrollingContainer.dragRestrictAxis = "y";
      ScrollingContainer.addChild(listCon);
      var ScrollBar = new PIXI.UI.ScrollBar({
        track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        handle: new PIXI.UI.SliceSprite(t, 5),
        vertical: true,
        scrollingContainer: ScrollingContainer,
        autohide: true
      });
      ScrollingContainer.height = ScrollBar.height = 657 * ratioY;
      ScrollBar.track.width = ScrollBar.handle.width = 8 * ratioX;
      ScrollBar.track.tint = color.bgBox;
      ScrollBar.handle.tint = color.handle;
      ScrollBar.anchorTop = ScrollingContainer.anchorTop = 50 * ratioY;
      ScrollBar.anchorRight = 0;
      ScrollBar.track.blendMode = 0;
      var verticalLine = new LineSprte(2, 657 * ratioY, color.line);
      verticalLine.anchorRight = 13 * ratioX;
      verticalLine.anchorTop = 50 * ratioX;
      verticalLine.alpha = 0;
      this.savedLine = verticalLine;
      this.listCon = listCon;
      this.cardScrollingCon = ScrollingContainer;
      this.savedCon = con;
      con.addChild(back, ScrollingContainer, ScrollBar, verticalLine);
      this.addChild(con);
      this.updateSaveCard(this.cardArr);
    };

    return WebCardCon;
  }(PIXI.UI.Container);

  var CircleMaskCon = /*@__PURE__*/function (superclass) {
    function CircleMaskCon(width, height) {
      superclass.call(this, width, height);
      this.save = {
        width: 0,
        height: 0
      };
      this.setupMask();
    }

    if (superclass) CircleMaskCon.__proto__ = superclass;
    CircleMaskCon.prototype = Object.create(superclass && superclass.prototype);
    CircleMaskCon.prototype.constructor = CircleMaskCon;

    CircleMaskCon.prototype.setupMask = function setupMask() {
      var mask = new PIXI.Graphics();
      this.container.addChild(mask);
      this.container.mask = mask;
      this.resizeUpdate();
    };

    CircleMaskCon.prototype.resizeUpdate = function resizeUpdate() {
      if (this.actual_width !== this.save.width || this.actual_height !== this.save.height) {
        this.container.mask.clear();
        this.container.mask.lineStyle(0);
        this.container.mask.beginFill(0xffffff, 1);
        this.save.width = this.actual_width;
        this.save.height = this.actual_height;
        this.container.mask.drawCircle(this.save.width * 0.5, this.save.width * 0.5, this.save.width * 0.5);
        this.container.mask.endFill();
      }
    };

    return CircleMaskCon;
  }(PIXI.UI.Container);

  var Player = function Player(playlist, total, audio_progress, pauseBtn, playBtn, duration, timer, LeftBtn, RightBtn, nowPage, highlighter, idxArray) {
    this.playlist = playlist;
    this.index = 0;
    this.total = total;
    this.audio_progress = audio_progress;
    this.pauseBtn = pauseBtn;
    this.playBtn = playBtn;
    this.duration = duration;
    this.timer = timer;
    this.RightBtn = RightBtn;
    this.LeftBtn = LeftBtn;
    this.nowPage = nowPage;
    this.highlighter = highlighter;
    this.idxArray = idxArray;
    this.ended = false;
    this.gs = 0;
  };

  Player.prototype = {
    play: function play(go, index) {
      if (index === null || index === undefined) {
        return;
      }

      var viewCan = document.getElementById("view-canvas");
      var speedInput = document.getElementById("speed_input").textContent;
      var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");
      var left = viewCan.style.marginLeft;
      var top = viewCan.style.marginTop;
      var self = this;
      var sound;
      var data = self.playlist[index];
      left = parseFloat(left);
      top = parseFloat(top);
      index = typeof index == "number" ? index : self.index;

      if (data.endPos) {
        self.highlighter.visible = true;
        var x = data.startPos.x * viewCan.width + left;
        var y = data.startPos.y * viewCan.height + top;
        var w = (data.endPos.x - data.startPos.x) * viewCan.width;
        var h = (data.endPos.y - data.startPos.y) * viewCan.height;
        self.highlighter.fill.clear();
        self.highlighter.redraw(w, h);
        self.highlighter.position(x, y);
      } else {
        self.highlighter.visible = false;
      }

      if (data.howl) {
        sound = data.howl;
      } else {
        sound = data.howl = new howler_2({
          src: [S3_URL_RAW + "/" + data.uuid],
          html5: true,
          onplay: function onplay() {
            requestAnimationFrame(self.step.bind(self));
            self.pauseBtn.visible = true;
            self.playBtn.visible = false;
            self.ended = false;
          },
          onload: function onload() {
            self.duration.text = self.formatTime(Math.round(sound.duration()));
          },
          onend: function onend() {
            if (self.index === self.playlist.length - 1) {
              self.total.flag = false;
              self.index = self.idxArray[self.nowPage];

              if (self.index > self.playlist.length - 1) {
                self.index = 0;
              }

              self.playBtn.visible = true;
              self.pauseBtn.visible = false;
              self.highlighter.visible = false;
              self.duration.text = self.formatTime(Math.round(sound.duration()));
              Manager.currentScene.con.container.emit("storyEnd");
            } else {
              self.ended = true;
              self.skip("next", true);
            }
          },
          onseek: function onseek() {
            requestAnimationFrame(self.step.bind(self));
          }
        });
      }

      self.index = index;

      if (self.gs === 2) {
        self.gs = 0;
        self.RightBtn.sprite.emit("click");
      }

      if (go) {
        self.speed(speedInput);
        sound.play();

        if (sound.state() === "loaded") {
          self.playBtn.visible = false;
          self.pauseBtn.visible = true;
        } else {
          self.playBtn.visible = true;
          self.pauseBtn.visible = false;
        }
      } else {
        self.playBtn.visible = true;
        self.pauseBtn.visible = false;
        self.highlighter.visible = false;
        self.duration.text = self.formatTime(Math.round(sound.duration()));
      }
    },
    pause: function pause() {
      var self = this;
      var sound = self.playlist[self.index].howl;
      sound.pause();
      self.playBtn.visible = true;
      self.pauseBtn.visible = false;
      self.highlighter.go = false;
    },
    skip: function skip(direction, fromEnd) {
      if (fromEnd === void 0) fromEnd = false;
      var self = this;
      console.log("skip@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      var index = 0;
      var button = null;

      if (direction === "prev") {
        button = self.LeftBtn;
        index = self.index - 1;

        if (index <= 0) {
          index = 0;
        }
      } else {
        button = self.RightBtn;
        index = self.index + 1;

        if (index >= self.playlist.length) {
          return;
        }
      }

      if (self.playlist[index].num === self.nowPage) {
        self.skipTo(index, 3);
      } else {
        if (fromEnd) {
          if (self.total.flag) {
            button.sprite.emit("click");
          } else {
            self.skipTo(index, 2);
          }
        } else {
          if (!self.total.flag) {
            button.sprite.emit("click");
          }
        }
      }
    },
    skipTo: function skipTo(index, situation) {
      var self = this;
      var playing = false;

      if (self.playlist[self.index].howl) {
        playing = self.playlist[self.index].howl.playing();
        self.playlist[self.index].howl.stop();
      }

      self.audio_progress.width = 0;

      switch (situation) {
        case 1:
          if (self.ended && self.total.flag) {
            playing = true;
          }

          if (playing) {
            self.play(true, index);
          } else {
            console.log("1111111");
            self.play(false, index);
          }

          break;

        case 2:
          self.gs = 1;
          self.play(false, index);
          break;

        case 3:
          self.play(true, index);
          break;
      }
    },
    seek: function seek(val) {
      var self = this;
      var sound = self.playlist[self.index].howl;

      if (sound.playing()) {
        val = sound.seek() + val;

        if (val < 0) {
          val = 0;
        }

        sound.seek(val);
      }
    },
    step: function step() {
      var self = this;
      var sound = self.playlist[self.index].howl;
      var seek = sound.seek() || 0;
      self.timer.text = self.formatTime(Math.round(seek));
      var ratio = seek / sound.duration() || 0;
      self.audio_progress.width = ratio * 100 + "%";
      self.highlighter.startLine(ratio);

      if (sound.playing()) {
        requestAnimationFrame(self.step.bind(self));
      }
    },
    formatTime: function formatTime(secs) {
      var minutes = Math.floor(secs / 60) || 0;
      var seconds = secs - minutes * 60 || 0;
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    speed: function speed(per) {
      var self = this;
      var sound = self.playlist[self.index].howl;
      sound.rate(per);
    }
  };

  var ListenPopUpLong = /*@__PURE__*/function (superclass) {
    function ListenPopUpLong(t1, t2, firstFunc, nowFunc, contentsText) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      superclass.call(this, "100%", "100%");
      this.filter = new Filter("100%", "100%");
      this.filter.sprite.buttonMode = false;
      var graphics = new PIXI.Graphics();
      graphics.lineStyle(1, 0xffffff, 1);
      graphics.beginFill(0xffffff);
      graphics.drawRoundedRect(0, 0, 490 * ratioX, 520 * ratioY, 51);
      graphics.endFill();
      this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
      this.card.sprite.interactive = true;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      graphics.clear();
      graphics.lineStyle(2, color.red, 1, 1, true);
      graphics.beginFill(color.white);
      graphics.drawRoundedRect(0, 0, 200 * ratioX, 51 * ratioY, 16 * ratioX);
      graphics.endFill();
      var btn25texture = new PIXI.Texture.from("btn25");
      var border25 = new PIXI.Texture.from("border25");
      var nowBack = new PIXI.UI.Sprite(btn25texture);
      var border = new PIXI.UI.Sprite(border25);
      border.tint = color.red;
      border.width = 202.7 * ratioX;
      border.height = 51.3 * ratioX;
      nowBack.addChild(border);
      var firstBack = new PIXI.UI.Sprite(btn25texture);
      var listenNow = new ButtonHandler({
        width: 202.7 * ratioX,
        height: 51.3 * ratioX,
        background: nowBack,
        text: {
          name: t1,
          style: fontstyle.Red17_M
        }
      });
      var listenFirst = new ButtonHandler({
        width: 202.7 * ratioX,
        height: 51.3 * ratioX,
        tint: color.red,
        background: firstBack,
        text: {
          name: t2,
          style: fontstyle.White17_M
        }
      });
      var size = 185 * ratioX;
      var circleCon = new CircleMaskCon(size, size);
      var t = Data.thumb_texture || PIXI.Texture.WHITE;
      var img = new PIXI.UI.Sprite(t);
      img.width = img.height = "100%";
      circleCon.addChild(img);
      circleCon.horizontalAlign = "center";
      circleCon.anchorTop = 57 * ratioY;
      var xtexture = xTexture(21 * ratioY, 0x4a4a4a);
      var x_btn = new PIXI.UI.Sprite(xtexture);
      x_btn.anchorTop = 28 * ratioY;
      x_btn.anchorRight = 28 * ratioX;
      x_btn.sprite.interactive = x_btn.sprite.buttonMode = true;
      x_btn.sprite.on("click", function () {
        this$1$1.container.emit("close");
      });

      if (Data.title.length > 25) {
        var title1 = Data.title.slice(0, 12);
        var title2 = Data.title.slice(13);
        var explaintitle1 = new PIXI.UI.Text("" + title1, fontstyle.Red19_M);
        var explaintitle2 = new PIXI.UI.Text("" + title2, fontstyle.Red19_M);
        explaintitle1.anchorTop = 287 * ratioY;
        explaintitle2.anchorTop = 310 * ratioY;
        explaintitle1.horizontalAlign = explaintitle2.horizontalAlign = "center";
        this.card.addChild(explaintitle1, explaintitle2);
      } else {
        var title = Data.title;
        var explaintitle = new PIXI.UI.Text("" + title, fontstyle.Red19_M);
        explaintitle.anchorTop = 300 * ratioY;
        explaintitle.horizontalAlign = "center";
        this.card.addChild(explaintitle);
      }

      var explainmain = new PIXI.UI.Text(contentsText, fontstyle.Dark19_M);
      explainmain.horizontalAlign = "center";
      explainmain.y = 350 * ratioY;
      listenNow.button.anchorRight = listenFirst.button.anchorLeft = 33 * ratioX;
      listenNow.button.anchorBottom = listenFirst.button.anchorBottom = 60 * ratioY;
      this.container.on("close", function () {
        if (this$1$1.parent !== null) {
          this$1$1.parent.removeChild(this$1$1);
        }
      });
      listenNow.onClick(function () {
        nowFunc();
        this$1$1.container.emit("close");
      });
      listenFirst.onClick(function () {
        listenFirst.button.blur();
        firstFunc();
        this$1$1.container.emit("close");
      });
      this.card.addChild(listenNow.button, listenFirst.button, circleCon, x_btn, explainmain);
      this.addChild(this.filter, this.card);
    }

    if (superclass) ListenPopUpLong.__proto__ = superclass;
    ListenPopUpLong.prototype = Object.create(superclass && superclass.prototype);
    ListenPopUpLong.prototype.constructor = ListenPopUpLong;
    return ListenPopUpLong;
  }(PIXI.UI.Container);
  var ListenPopUpShort = /*@__PURE__*/function (superclass) {
    function ListenPopUpShort(firstFunc, closeFunc) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      superclass.call(this, "100%", "100%");
      this.filter = new Filter("100%", "100%");
      this.filter.sprite.buttonMode = false;
      var graphics = new PIXI.Graphics();
      graphics.lineStyle(2, 0xdbdbdb, 1);
      graphics.beginFill(0xffffff);
      graphics.drawRoundedRect(0, 0, 350 * ratioX, 470 * ratioY, 51);
      graphics.endFill();
      this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
      this.card.sprite.interactive = true;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var btn25texture = new PIXI.Texture.from("btn25");
      var closeStory = new ButtonHandler({
        width: 202 * ratioX,
        height: 51 * ratioY,
        background: new PIXI.UI.Sprite(btn25texture),
        tint: color.red,
        text: {
          name: "스토리 닫기",
          style: fontstyle.White16
        }
      });
      var listenFirst = new ButtonHandler({
        width: 202 * ratioX,
        height: 24 * ratioY,
        lineColor: color.white,
        text: {
          name: "처음부터 읽기",
          style: fontstyle.line16
        }
      });
      var fline = new LineSprte(listenFirst.text.width, 1, color.line);
      fline.anchorBottom = 0;
      fline.horizontalAlign = "center";
      listenFirst.button.addChild(fline);
      var size = 150 * ratioX;
      var circleCon = new CircleMaskCon(size, size);
      var t = Data.thumb_texture || PIXI.Texture.WHITE;
      var img = new PIXI.UI.Sprite(t);
      img.width = img.height = "100%";
      circleCon.addChild(img);
      circleCon.horizontalAlign = "center";
      circleCon.anchorTop = 42 * ratioY;
      var xtexture = xTexture(18 * ratioX);
      var x_btn = new PIXI.UI.Sprite(xtexture);
      x_btn.tint = 0x4a4a4a;
      x_btn.width = x_btn.height = 21 * ratioX;
      x_btn.anchorTop = 28 * ratioY;
      x_btn.anchorRight = 28 * ratioX;
      x_btn.sprite.interactive = x_btn.sprite.buttonMode = true;
      x_btn.sprite.on("click", function () {
        this$1$1.container.emit("close");
      });
      var title = Data.title;
      var explaintitle = new PIXI.UI.Text("" + title, fontstyle.Red19);
      var explainmain = new PIXI.UI.Text("이야기를 다 읽었습니다.", fontstyle.Black19);
      explainmain.horizontalAlign = explaintitle.horizontalAlign = "center";
      explainmain.anchorBottom = 152 * ratioY;
      explaintitle.anchorTop = 260 * ratioY;
      closeStory.button.horizontalAlign = listenFirst.button.horizontalAlign = "center";
      closeStory.button.anchorBottom = 66 * ratioY;
      listenFirst.button.anchorBottom = 22 * ratioY;
      this.container.on("close", function () {
        if (this$1$1.parent !== null) {
          this$1$1.parent.removeChild(this$1$1);
        }
      });
      closeStory.onClick(function () {
        closeStory.button.blur();
        closeFunc();
        this$1$1.container.emit("close");
      });
      listenFirst.onClick(function () {
        firstFunc();
        this$1$1.container.emit("close");
      });
      this.card.addChild(closeStory.button, listenFirst.button, circleCon, x_btn, explainmain, explaintitle);
      this.addChild(this.filter, this.card);
    }

    if (superclass) ListenPopUpShort.__proto__ = superclass;
    ListenPopUpShort.prototype = Object.create(superclass && superclass.prototype);
    ListenPopUpShort.prototype.constructor = ListenPopUpShort;
    return ListenPopUpShort;
  }(PIXI.UI.Container);

  var WebAudioCon = /*@__PURE__*/function (superclass) {
    function WebAudioCon(data, numPages, num, LeftBtn, RightBtn, highlighter, state) {
      var this$1$1 = this;
      if (state === void 0) state = 1;
      var ratioY = Manager.ratioY;
      superclass.call(this, "100%", 902 * ratioY);
      this.state = state;
      this.anchorTop = 51 * ratioY;
      this.representationImg();
      this.someButtons();
      this.MakeprogressBar();
      this.listenToAll();
      this.page = numPages - 1;
      this.nowPage = num - 1;
      this.idxArray = data.idx;
      this.highlighter = highlighter;

      if (data.playlist.length === 0) {
        return;
      }

      this.player = new Player(data.playlist, {
        flag: false
      }, this.audio_progress, this.pauseBtn, this.playBtn, this.duration, this.timer, LeftBtn, RightBtn, this.nowPage, highlighter, this.idxArray);
      this.setHowler();
      this.container.on("pause", function () {
        try {
          this$1$1.player.pause();
        } catch (error) {}
      });
    }

    if (superclass) WebAudioCon.__proto__ = superclass;
    WebAudioCon.prototype = Object.create(superclass && superclass.prototype);
    WebAudioCon.prototype.constructor = WebAudioCon;

    WebAudioCon.prototype.updateIndex = function updateIndex(num) {
      var nowPage = num - 1;

      if (this.player === undefined) {
        return;
      }

      this.player.nowPage = nowPage;
      this.player.skipTo(this.idxArray[nowPage], 1);
    };

    WebAudioCon.prototype.setHowler = function setHowler() {
      var this$1$1 = this;
      this.player.play(false);
      this.playBtn.sprite.on("click", function () {
        var now = document.getElementById("page_input").textContent - 1;
        var idx = this$1$1.idxArray[now];

        if (idx === null) {
          return;
        }

        if (this$1$1.player.gs === 1) {
          this$1$1.player.gs = 3;
          this$1$1.updateIndex(now + 1);
        }

        this$1$1.player.play(true, this$1$1.player.index);
      });
      this.pauseBtn.sprite.on("click", function () {
        this$1$1.player.pause();
      });
      this.prevBtn.sprite.on("click", function () {
        this$1$1.player.skip("prev");
      });
      this.nextBtn.sprite.on("click", function () {
        this$1$1.player.skip("next");
      });
      this.before10.sprite.on("click", function () {
        this$1$1.player.seek(-10);
      });
      this.after10.sprite.on("click", function () {
        this$1$1.player.seek(10);
      });
      var firstPage;

      for (var i = 0; i < this.idxArray.length; i++) {
        var element = this.idxArray[i];

        if (element === 0) {
          firstPage = i + 1;
          break;
        }
      }

      var listpopup = new ListenPopUpLong("현재 페이지부터 듣기", "처음부터 듣기", function () {
        var data = this$1$1.player.playlist[this$1$1.player.index];
        var sound = data.howl;
        this$1$1.player.total.flag = true;

        if (this$1$1.state) {
          Manager.currentScene.con.container.emit("goFirst", firstPage);
          return;
        }

        if (this$1$1.player.index == 0) {
          sound.seek(0);
        } else {
          this$1$1.player.skipTo(0);
        }
      }, function () {
        var now = document.getElementById("page_input").textContent - 1;
        this$1$1.player.total.flag = true;
        var data = this$1$1.player.playlist[this$1$1.player.index];
        var sound = data.howl;

        if (this$1$1.idxArray[now] === null) {
          Manager.currentScene.con.container.emit("goFirst", firstPage);
          return;
        }

        sound.seek(0);
      }, "전체듣기를 시작할까요?");
      this.allBtn.onClick(function () {
        this$1$1.parent.parent.parent.addChild(listpopup);
      });
      var speedInput = document.getElementById("speed_input");
      speedInput.textContent = 1;
      this.slowDownBtn.button.on("click", function () {
        this$1$1.slowDownBtn.backgroundColor = color.red;
        this$1$1.speedOrigin.backgroundColor = color.vividGray;
        this$1$1.speedUpBtn.backgroundColor = color.vividGray;
        speedInput.textContent = 0.8;
        this$1$1.player.speed(0.8);
      });
      this.speedOrigin.button.on("click", function () {
        this$1$1.slowDownBtn.backgroundColor = color.vividGray;
        this$1$1.speedOrigin.backgroundColor = color.red;
        this$1$1.speedUpBtn.backgroundColor = color.vividGray;
        speedInput.textContent = 1;
        this$1$1.player.speed(1);
      });
      this.speedUpBtn.button.on("click", function () {
        this$1$1.slowDownBtn.backgroundColor = color.vividGray;
        this$1$1.speedOrigin.backgroundColor = color.vividGray;
        this$1$1.speedUpBtn.backgroundColor = color.red;
        speedInput.textContent = 1.2;
        this$1$1.player.speed(1.2);
      });
    };

    WebAudioCon.prototype.listenToAll = function listenToAll() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var allBtn = new ButtonHandler({
        lineColor: 0xb4b4b4,
        line: 1.5,
        rounded: 6,
        width: 168 * ratioX,
        height: 36 * ratioY,
        text: {
          name: "    전체듣기",
          style: fontstyle.Black14_R
        }
      });
      var alltexture = new PIXI.Texture.from("listenAll"),
          all = new PIXI.UI.Sprite(alltexture);
      all.width = 17 * ratioX;
      all.height = 13 * ratioY;
      allBtn.button.addChild(all);
      allBtn.button.anchorBottom = 440 * ratioY;
      allBtn.button.horizontalAlign = "center";
      all.verticalAlign = "middle";
      all.anchorLeft = 37 * ratioX;
      this.allBtn = allBtn;
      this.addChild(allBtn.button);
    };

    WebAudioCon.prototype.someButtons = function someButtons() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var beforeT = new PIXI.Texture.from("before10"),
          afterT = new PIXI.Texture.from("after10"),
          pauseT = new PIXI.Texture.from("audio_pause"),
          playT = new PIXI.Texture.from("audio_play"),
          prevT = new PIXI.Texture.from("audio_prev"),
          nextT = new PIXI.Texture.from("audio_next");
      var prevBtn = new PIXI.UI.Sprite(prevT);
      var playBtn = new PIXI.UI.Sprite(playT);
      var nextBtn = new PIXI.UI.Sprite(nextT);
      var before10 = new PIXI.UI.Sprite(beforeT);
      var after10 = new PIXI.UI.Sprite(afterT);
      var pauseBtn = new PIXI.UI.Sprite(pauseT);
      prevBtn.sprite.interactive = prevBtn.sprite.buttonMode = playBtn.sprite.interactive = playBtn.sprite.buttonMode = nextBtn.sprite.interactive = nextBtn.sprite.buttonMode = before10.sprite.interactive = before10.sprite.buttonMode = after10.sprite.interactive = after10.sprite.buttonMode = pauseBtn.sprite.interactive = pauseBtn.sprite.buttonMode = true;
      prevBtn.width = 23 * ratioX;
      prevBtn.height = 26 * ratioY;
      prevBtn.anchorLeft = 20 * ratioX;
      prevBtn.anchorTop = 249 * ratioY;
      playBtn.width = playBtn.height = 56 * ratioX;
      playBtn.horizontalAlign = "center";
      playBtn.anchorTop = 234 * ratioY;
      pauseBtn.width = pauseBtn.height = 56 * ratioX;
      pauseBtn.horizontalAlign = "center";
      pauseBtn.anchorTop = 234 * ratioY;
      nextBtn.width = 23 * ratioX;
      nextBtn.height = 26 * ratioY;
      nextBtn.anchorRight = 20 * ratioX;
      nextBtn.anchorTop = 249 * ratioY;
      before10.width = before10.height = 37 * ratioX;
      before10.anchorLeft = 18 * ratioX;
      before10.anchorTop = 300 * ratioY;
      after10.width = after10.height = 37 * ratioX;
      after10.anchorRight = 18 * ratioX;
      after10.anchorTop = 300 * ratioY;
      pauseBtn.visible = false;
      var backTexture = new PIXI.Texture.from("speedBtn");

      var makeSpeedBtn = function makeSpeedBtn(text, click) {
        var speedBackground = new PIXI.UI.Sprite(backTexture);
        var speed = new ButtonHandler({
          background: speedBackground,
          width: 55 * ratioX,
          height: 30 * ratioY,
          text: {
            name: text,
            style: fontstyle.White15_R
          }
        });
        speed.click = click;
        speed.button.anchorTop = 365 * ratioY;
        speed.backgroundColor = speed.click ? color.red : color.vividGray;
        return speed;
      };

      var slowDownBtn = makeSpeedBtn("0.8x", false);
      var speedOrigin = makeSpeedBtn("1x", true);
      var speedUpBtn = makeSpeedBtn("1.2x", false);
      slowDownBtn.button.anchorLeft = 12 * ratioX;
      speedOrigin.button.horizontalAlign = "center";
      speedUpBtn.button.anchorRight = 12 * ratioX;
      this.slowDownBtn = slowDownBtn;
      this.speedOrigin = speedOrigin;
      this.speedUpBtn = speedUpBtn;
      this.prevBtn = prevBtn;
      this.playBtn = playBtn;
      this.pauseBtn = pauseBtn;
      this.nextBtn = nextBtn;
      this.before10 = before10;
      this.after10 = after10;
      this.addChild(prevBtn, playBtn, nextBtn, pauseBtn, slowDownBtn.button, speedOrigin.button, speedUpBtn.button, before10, after10);
    };

    WebAudioCon.prototype.representationImg = function representationImg() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var background = new LineSprte(199 * ratioX, 220 * ratioY, color.lightGray);
      var shadow = new LineSprte(199 * ratioX, 2, color.Gray);
      background.anchorLeft = 1 * ratioX;
      background.anchorTop = 10 * ratioY;
      var size = 130 * ratioX;
      var circleCon = new CircleMaskCon(size, size),
          t = Data.thumb_texture || PIXI.Texture.WHITE,
          img = new PIXI.UI.Sprite(t);
      img.width = img.height = "100%";
      circleCon.addChild(img);
      circleCon.horizontalAlign = "center";
      circleCon.anchorTop = 22 * ratioY;
      shadow.alpha = 0.5;
      shadow.anchorBottom = 0;
      background.addChild(shadow, circleCon);
      this.addChild(background);
    };

    WebAudioCon.prototype.MakeprogressBar = function MakeprogressBar() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(1, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRoundedRect(0, 0, 170 * ratioX, 12 * ratioY, 6);
      graphic.endFill();
      var track = new GraphicsSprite(graphic);
      var barTexture = new GraphicTexture(graphic);
      var bar = new PIXI.UI.SliceSprite(barTexture, 2);
      track.tint = color.Gray;
      bar.tint = color.red;
      var duration = new PIXI.UI.Text("0:00", fontstyle.Black15_R);
      var timer = new PIXI.UI.Text("0:00", fontstyle.Black15_R);
      track.addChild(duration, timer, bar);
      bar.width = 0;
      duration.anchorTop = timer.anchorTop = 16 * ratioY;
      duration.anchorRight = 0;
      track.anchorTop = 182 * ratioY;
      track.horizontalAlign = "center";
      this.timer = timer;
      this.duration = duration;
      this.audio_progress = bar;
      this.addChild(track);
    };

    return WebAudioCon;
  }(PIXI.UI.Container);

  var Highlighter = /*@__PURE__*/function (superclass) {
    function Highlighter() {
      superclass.call(this, window.innerWidth, window.innerHeight);
      this.fill = new PIXI.Graphics();
      this.lineWidth = 100;
      this.fill.beginFill(color.red, 0.4);
      this.fill.drawRoundedRect(0, 0, 100, 100, 4);
      this.fill.endFill();
      this.texture = Manager.app.renderer.generateTexture(this.fill);
      this.sprite = new PIXI.UI.SliceSprite(this.texture, 2);
      this.sprite.width = 0;
      this.addChild(this.sprite);
    }

    if (superclass) Highlighter.__proto__ = superclass;
    Highlighter.prototype = Object.create(superclass && superclass.prototype);
    Highlighter.prototype.constructor = Highlighter;

    Highlighter.prototype.startLine = function startLine(Ratio) {
      this.sprite.width = this.lineWidth * Ratio;
    };

    Highlighter.prototype.position = function position(x, y) {
      this.x = x;
      this.y = y;
    };

    Highlighter.prototype.redraw = function redraw(width, height) {
      this.fill.beginFill(color.red, 0.5);
      this.fill.drawRoundedRect(0, 0, width, height, 5);
      this.fill.endFill();
      this.lineWidth = width;
      this.texture = Manager.app.renderer.generateTexture(this.fill);
      this.sprite.texture = this.texture;
      this.sprite.width = 0;
      this.sprite.height = height;
    };

    return Highlighter;
  }(PIXI.UI.Container);

  var PreviewScene = function PreviewScene(lastScene) {
    var this$1$1 = this;
    var ratioX = Manager.ratioX;
    var viewCan = document.getElementById("view-canvas");
    this.con = new PIXI.UI.Container("100%", "100%");
    this.LeftBtn = new ArrowLeft(52 * ratioX);
    this.RightBtn = new ArrowRight(54 * ratioX);
    this.RightBtn.anchorRight = 199 * ratioX;
    var highlighter = new Highlighter();
    viewCan.style.marginLeft = ((Manager.width - viewCan.width - 305) / 2 + 52) * ratioX + "px";
    viewCan.style.marginTop = (Manager.height - viewCan.height) / 2 + "px";
    this.webMenu = new WebMenu();
    this.webMenu.gatherBtn.button.interactive = this.webMenu.fullscreenBtn.button.interactive = this.webMenu.paintBtn.button.interactive = this.webMenu.bookmarkBtn.button.interactive = this.webMenu.printBtn.button.interactive = false;
    this.webMenu.gatherBtn.button.emit("disable");
    this.webMenu.fullscreenBtn.button.emit("disable");
    this.webMenu.paintBtn.button.emit("disable");
    this.webMenu.bookmarkBtn.button.emit("disable");
    this.webMenu.printBtn.button.emit("disable");
    this.con.addChild(this.LeftBtn, this.RightBtn, this.webMenu, highlighter);
    var now = document.getElementById("page_input").textContent - 1;
    var templist = Data.audioArr[now];
    var playlist = [];
    var idx = new Array(Data.audioArr.length);
    var endPos;
    var startPos;
    idx[now] = templist.length;

    for (var i = 0; i < templist.length; i++) {
      var e = templist[i];

      if (e.hl === undefined) {
        endPos = null;
        startPos = null;
      } else {
        endPos = e.hl.endPos;
        startPos = e.hl.startPos;
      }

      playlist.push({
        num: now,
        uuid: e.uuid,
        howl: null,
        endPos: endPos,
        startPos: startPos
      });
    }

    var data = {
      playlist: playlist,
      idx: idx
    };
    this.prevCard = new PrevCard();
    var left = viewCan.style.marginLeft;
    var top = viewCan.style.marginTop;
    left = parseFloat(left);
    top = parseFloat(top);
    var cardArr = [];
    Data.cardArr.forEach(function (e) {
      var item = e.list[now];

      if (item !== undefined) {
        var texture = e.sprite.texture;
        var qSprite = new PIXI.UI.Sprite(item.sprite.texture);
        qSprite.width = item.width;
        qSprite.height = item.height;
        qSprite.x = item.relatePos.x * viewCan.width + left;
        qSprite.y = item.relatePos.y * viewCan.height + top;
        qSprite.tint = color.red;
        qSprite.sprite.interactive = qSprite.sprite.buttonMode = true;
        qSprite.sprite.on("click", function () {
          this$1$1.prevCard.card.sprite.texture = texture;
          this$1$1.con.addChild(this$1$1.prevCard);
        });
        this$1$1.con.addChild(qSprite);
        var savedCard = new PIXI.UI.Sprite(e.sprite.texture);
        savedCard.sprite.interactive = savedCard.sprite.buttonMode = true;
        savedCard.sprite.on("click", function () {
          this$1$1.prevCard.card.sprite.texture = savedCard.sprite.texture;
          this$1$1.con.addChild(this$1$1.prevCard);
        });
        cardArr.push(savedCard);
      }
    });
    this.webMenu.webCard = new WebCardCon(cardArr);
    this.webMenu.webAudio = new WebAudioCon(data, now + 1, now + 1, this.LeftBtn, this.RightBtn, highlighter);
    this.webMenu.webAudio.allBtn.button.interactive = false;
    this.webMenu.cardBtn.button.emit("click");
    this.webMenu.finBtn.button.on("click", function () {
      this$1$1.webMenu.webAudio.container.emit("pause");
      Data.viewWidth = 1400;
      lastScene.viewer.changeScalePage(function () {
        Manager.changeScene(lastScene);
        viewCan.style.marginLeft = ((Manager.width - viewCan.width - 520) / 2 + 328) * ratioX + "px";
        viewCan.style.marginTop = (Manager.height - viewCan.height) / 2 + "px";
      });
    });
  };

  PreviewScene.prototype.update = function update(framesPassed) {};

  PreviewScene.prototype.resize = function resize(screenWidth, screenHeight) {};

  var PageNation = /*@__PURE__*/function (superclass) {
    function PageNation(listSize) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      superclass.call(this, 559 * ratioX, 31 * ratioY);
      this.pageNum = 10;
      this.pageSize = 15;
      this.nowPage = 1;
      this.buttonArray = [];
      this.buttonarr = [];
      this.max = Math.ceil(listSize / this.pageSize);

      if (this.max < this.pageNum) {
        this.pageNum = this.max;
        this.short = true;
        this.width = (this.max + 4) * 35 * ratioX;
      }

      this.gofirstBtn = this.makeImagebtn({
        url: "go_first",
        width: 20 * ratioX,
        height: 20 * ratioX
      }, 0);
      this.gofirstBtn.onClick(function () {
        this$1$1.start();
      });
      this.prevBtn = this.makeImagebtn({
        url: "page_prev",
        width: 20 * ratioX,
        height: 20 * ratioX
      }, 36 * ratioY);
      this.prevBtn.onClick(function () {
        this$1$1.preview();
      });
      var xvar = 36 * ratioX;

      var loop = function loop(i) {
        xvar += 36 * ratioX;
        var btn = this$1$1.makeTextBtn(i, xvar);
        btn.onClick(function () {
          this$1$1.nowPage = Number(btn.text.text);

          if (this$1$1.selectedBtn !== btn) {
            this$1$1.change(btn);
          }
        });

        if (i === this$1$1.nowPage) {
          this$1$1.selectedBtn = btn;
          btn.background.alpha = 1;
        } else {
          btn.text._text.tint = color.textGray;
        }

        this$1$1.buttonArray.push(btn);
        this$1$1.buttonarr.push(btn);
        this$1$1.addChild(btn.button);
      };

      for (var i = 1; i <= this$1$1.pageNum; i++) {
        loop(i);
      }

      this.nextBtn = this.makeImagebtn({
        url: "page_next",
        width: 20 * ratioX,
        height: 20 * ratioX
      }, xvar + 36 * ratioX);
      this.golastBtn = this.makeImagebtn({
        url: "go_last",
        width: 20 * ratioX,
        height: 20 * ratioX
      }, xvar + 72 * ratioX);
      this.nextBtn.onClick(function () {
        this$1$1.next();
      });
      this.golastBtn.onClick(function () {
        this$1$1.end();
      });

      if (this.max !== 1) {
        this.addChild(this.nextBtn.button, this.golastBtn.button);
      }

      if (this.short) {
        this.removeChild(this.golastBtn.button);
      }
    }

    if (superclass) PageNation.__proto__ = superclass;
    PageNation.prototype = Object.create(superclass && superclass.prototype);
    PageNation.prototype.constructor = PageNation;

    PageNation.prototype.check = function check() {
      var del = this.max % this.pageNum;
      this.removeChild(this.prevBtn.button, this.gofirstBtn.button, this.nextBtn.button, this.golastBtn.button);

      if (this.max === 1) {
        return;
      }

      if (this.short) {
        if (this.nowPage === 1) {
          this.addChild(this.nextBtn.button);
        } else if (this.nowPage < this.pageNum) {
          this.addChild(this.prevBtn.button, this.nextBtn.button);
        } else if (this.nowPage === this.max) {
          this.addChild(this.prevBtn.button);
        }
      } else {
        if (this.nowPage === 1) {
          this.addChild(this.nextBtn.button, this.golastBtn.button);
        } else if (this.nowPage <= this.pageNum) {
          this.addChild(this.prevBtn.button, this.nextBtn.button, this.golastBtn.button);
        } else if (this.pageNum < this.nowPage && this.nowPage <= this.max - del) {
          this.addChild(this.prevBtn.button, this.gofirstBtn.button, this.nextBtn.button, this.golastBtn.button);
        } else if (this.max - del < this.nowPage && this.nowPage < this.max) {
          this.addChild(this.prevBtn.button, this.gofirstBtn.button, this.nextBtn.button);
        } else if (this.nowPage === this.max) {
          this.addChild(this.prevBtn.button, this.gofirstBtn.button);
        }
      }
    };

    PageNation.prototype.change = function change(e) {
      this.selectedBtn.background.alpha = 0;
      this.selectedBtn.text._text.tint = color.textGray;
      e.background.alpha = 1;
      e.text._text.tint = color.white;
      this.selectedBtn = e;
      this.container.emit("changePage", this.nowPage);
      this.check();
    };

    PageNation.prototype.start = function start() {
      this.buttonArray = this.buttonarr;
      this.pageNum = Number(this.pageNum);
      var j = Math.floor(this.nowPage / this.pageNum) - 1;

      for (var i = 0; i < this.buttonArray.length; i++) {
        var e = this.buttonArray[i];
        e.text.text = this.pageNum * j + i + 1;
        this.addChild(e.button);
      }

      this.nowPage = this.pageNum * j + 1;
      this.change(this.buttonArray[0]);
    };

    PageNation.prototype.end = function end() {
      var del = this.max % this.pageNum;
      var j = Math.floor(this.nowPage / this.pageNum) + 1;
      this.nowPage = this.pageNum * j + 1;

      if (this.nowPage <= this.max - del) {
        for (var i = 0; i < this.buttonArray.length; i++) {
          var e = this.buttonArray[i];
          e.text.text = this.pageNum * j + i + 1;
        }
      } else {
        var temp = [];

        for (var i$1 = 0; i$1 < this.buttonArray.length; i$1++) {
          var element = this.buttonArray[i$1];

          if (i$1 >= del) {
            this.removeChild(element.button);
          } else {
            temp.push(element);
            var e$1 = this.buttonArray[i$1];
            e$1.text.text = this.max - del + i$1 + 1;
          }
        }

        this.buttonArray = temp;
      }

      this.change(this.buttonArray[0]);
    };

    PageNation.prototype.next = function next() {
      var del = this.max % this.pageNum;
      this.nowPage += 1;
      var a = this.nowPage % this.pageNum;

      if (a == 0) {
        a = this.pageNum;
      }

      if (this.nowPage <= this.max - del) {
        for (var i = 0; i < this.buttonArray.length; i++) {
          var e = this.buttonArray[i];
          e.text.text = this.nowPage - a + 1 + i;
        }
      } else {
        var temp = [];

        for (var i$1 = 0; i$1 < this.buttonArray.length; i$1++) {
          var element = this.buttonArray[i$1];

          if (i$1 >= del) {
            this.removeChild(element.button);
          } else {
            temp.push(element);
            var e$1 = this.buttonArray[i$1];
            e$1.text.text = this.max - del + i$1 + 1;
          }
        }

        this.buttonArray = temp;
      }

      var idx = this.nowPage % this.pageNum - 1;
      idx < 0 ? idx = this.buttonArray.length - 1 : idx;
      this.change(this.buttonArray[idx]);
    };

    PageNation.prototype.preview = function preview() {
      this.pageNum = Number(this.pageNum);
      var del = this.max % this.pageNum;
      this.nowPage -= 1;
      var a = this.nowPage % this.pageNum;

      if (a == 0) {
        a = this.pageNum;
      }

      if (this.nowPage <= this.max - del) {
        this.buttonArray = this.buttonarr;

        for (var i = 0; i < this.buttonArray.length; i++) {
          var e = this.buttonArray[i];
          e.text.text = this.nowPage - a + i + 1;
          this.addChild(e.button);
        }
      } else {
        var temp = [];

        for (var i$1 = 0; i$1 < this.buttonArray.length; i$1++) {
          var element = this.buttonArray[i$1];

          if (i$1 >= del) {
            this.removeChild(element.button);
          } else {
            temp.push(element);
            var e$1 = this.buttonArray[i$1];
            e$1.text.text = this.max - del + i$1 + 1;
          }
        }

        this.buttonArray = temp;
      }

      var idx = this.nowPage % this.pageNum - 1;
      idx < 0 ? idx = this.buttonArray.length - 1 : idx;
      this.change(this.buttonArray[idx]);
    };

    PageNation.prototype.makeImagebtn = function makeImagebtn(img, x) {
      var ratioX = Manager.ratioX;
      var button = new ButtonHandler({
        width: 31 * ratioX,
        height: 31 * ratioX,
        line: 1,
        lineColor: 0xdfdfdf,
        img: img,
        background: new PIXI.UI.Sprite(PIXI.Texture.EMPTY)
      });
      button[img.url].anchorTop = 9;
      button[img.url].tint = 0x000000;
      button[img.url].horizontalAlign = "center";
      button[img.url].verticalAlign = "middle";
      button.button.x = x;
      return button;
    };

    PageNation.prototype.makeTextBtn = function makeTextBtn(text, x) {
      var ratioX = Manager.ratioX;
      var button = new ButtonHandler({
        width: 31 * ratioX,
        height: 31 * ratioX,
        line: 1,
        tint: color.red,
        lineColor: color.red,
        text: {
          name: text,
          style: fontstyle.White12_R
        }
      });
      button.background.alpha = 0;
      button.button.x = x;
      return button;
    };

    return PageNation;
  }(PIXI.UI.Container);

  var CheckBox = function CheckBox(option) {
    this.check = false;
    var checked = new checkedBox(option);
    var unchecked = new unChecked(option);
    var checkT = Manager.app.renderer.generateTexture(checked);
    var uncheckT = Manager.app.renderer.generateTexture(unchecked);
    this.checkbox = new PIXI.UI.CheckBox({
      checked: option.checked,
      background: new PIXI.UI.Sprite(uncheckT),
      checkmark: new PIXI.UI.Sprite(checkT),
      checkgroup: option.group,
      value: option.value
    });
    return this.checkbox;
  };
  var unChecked = /*@__PURE__*/function (superclass) {
    function unChecked(option) {
      superclass.call(this);
      this.UCsize = option.size;

      if (option.lineColor !== undefined) {
        this.UClineColor = option.lineColor;
      } else {
        this.UClineColor = 0x000000;
      }

      if (option.line !== undefined) {
        this.UCline = option.line;
      } else {
        this.UCline = 2;
      }

      this.lineStyle(this.UCline, this.UClineColor, 1, 1, true);
      this.drawRect(0, 0, this.UCsize, this.UCsize);
      this.endFill();
    }

    if (superclass) unChecked.__proto__ = superclass;
    unChecked.prototype = Object.create(superclass && superclass.prototype);
    unChecked.prototype.constructor = unChecked;
    return unChecked;
  }(PIXI.Graphics);
  var checkedBox = /*@__PURE__*/function (superclass) {
    function checkedBox(option) {
      superclass.call(this);
      this.Csize = option.size;

      if (option.lineColor !== undefined) {
        this.ClineColor = option.lineColor;
      } else {
        this.ClineColor = 0x000000;
      }

      if (option.insideColor !== undefined) {
        this.CinsideColor = option.insideColor;
      } else {
        this.CinsideColor = 0xff0000;
      }

      if (option.line !== undefined) {
        this.Cline = option.line;
      } else {
        this.Cline = 2;
      }

      var Ins = this.Csize * 0.7;
      var ds = (this.Csize - Ins) / 2;
      this.lineStyle(this.Cline, this.ClineColor, 1, 1, true);
      this.beginFill(0xffffff);
      this.drawRect(0, 0, this.Csize, this.Csize);
      this.endFill();
      this.lineStyle(null);
      this.beginFill(this.CinsideColor);
      this.drawRect(ds, ds, Ins, Ins);
      this.endFill();
    }

    if (superclass) checkedBox.__proto__ = superclass;
    checkedBox.prototype = Object.create(superclass && superclass.prototype);
    checkedBox.prototype.constructor = checkedBox;
    return checkedBox;
  }(PIXI.Graphics);

  var AudioPopUpContianer = /*@__PURE__*/function (superclass) {
    function AudioPopUpContianer() {
      var this$1$1 = this;
      superclass.call(this, "100%", "100%");
      this.filter = new Filter("100%", "100%");
      this.filter.sprite.buttonMode = false;
      var make = new CheckBoxContainer();
      this.card = make;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var edit = new RadioBoxContainer();

      this.radioBox = function (idx, callFucn) {
        edit.setCallFucn = callFucn;
        edit.setchildNum = idx;
        this$1$1.removeChild(this$1$1.card);
        this$1$1.card = edit;
        this$1$1.addChild(this$1$1.card);
      };

      this.checkBox = function () {
        this$1$1.removeChild(this$1$1.card);
        this$1$1.card = make;
        this$1$1.addChild(this$1$1.card);
      };

      this.container.on("close", function () {
        while (this$1$1.card.listCon.children[0]) {
          this$1$1.card.listCon.removeChild(this$1$1.card.listCon.children[0]);
        }

        this$1$1.card.textinput.text = "";
        this$1$1.card.textinput.emit("blur");
        this$1$1.card.removeChild(this$1$1.card.pagenation);
        this$1$1.parent.emit("selectAudio");
        this$1$1.parent.removeChild(this$1$1);
      });
      this.addChild(this.filter);
    }

    if (superclass) AudioPopUpContianer.__proto__ = superclass;
    AudioPopUpContianer.prototype = Object.create(superclass && superclass.prototype);
    AudioPopUpContianer.prototype.constructor = AudioPopUpContianer;
    return AudioPopUpContianer;
  }(PIXI.UI.Container);
  var BaseContainer = /*@__PURE__*/function (superclass) {
    function BaseContainer() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var graphic = new PIXI.Graphics();
      var tWidth = 1412 * ratioX;
      var tHight = 1051 * ratioY;
      var dy = 52 * ratioY;
      var dt = 7 * ratioY;
      var radius = 3;
      makeCardContainer$1(graphic, tWidth, tHight, dy, dt, radius);
      var cardTexture = Manager.app.renderer.generateTexture(graphic);
      superclass.call(this, cardTexture);
      this.order_num = 2;
      this.verticalAlign = "middle";
      this.horizontalAlign = "center";
      this.sortingContainer();
      var title = new PIXI.UI.Text("음성 / TTS 보관함", fontstyle.WhiteTitle);
      title.anchorTop = 14 * ratioY;
      title.anchorLeft = 39 * ratioX;
      var xtexture = xTexture(18 * ratioX);
      var x_btn = new PIXI.UI.Sprite(xtexture);
      x_btn.anchorTop = 17 * ratioY;
      x_btn.anchorRight = 20 * ratioX;
      x_btn.sprite.interactive = x_btn.sprite.buttonMode = true;
      x_btn.sprite.on("click", function () {
        this$1$1.parent.container.emit("close");
      });
      var search = this.searchContainer();
      var enrollBtn = new ButtonHandler({
        width: 1306 * ratioX,
        height: 40 * ratioY,
        line: 1,
        lineColor: color.line,
        tint: color.green,
        text: {
          name: "등록하기",
          style: fontstyle.White12_R
        }
      });
      enrollBtn.button.anchorBottom = 10 * ratioY;
      enrollBtn.button.horizontalAlign = "center";
      this.enrollBtn = enrollBtn;
      this.addChild(title, x_btn, search, enrollBtn.button);
    }

    if (superclass) BaseContainer.__proto__ = superclass;
    BaseContainer.prototype = Object.create(superclass && superclass.prototype);
    BaseContainer.prototype.constructor = BaseContainer;
    var prototypeAccessors = {
      setCallFucn: {
        configurable: true
      },
      setchildNum: {
        configurable: true
      }
    };

    prototypeAccessors.setCallFucn.set = function (func) {
      this.callFucn = func;
    };

    prototypeAccessors.setchildNum.set = function (idx) {
      this.childNum = idx;
    };

    BaseContainer.prototype.makePageNation = function makePageNation(total) {
      var this$1$1 = this;
      this.removeChild(this.pagenation);
      var ratioY = Manager.ratioY;
      var pagenation = new PageNation(total);
      pagenation.container.on("changePage", function (num, array) {
        if (array) {
          var arr = array;
          this$1$1.container.emit("setList", arr);
          return;
        }

        get_AudioList(num, this$1$1.order_num, this$1$1.textinput.value, function (res) {
          if (res.code === 0) {
            var arr = res.data.pageList;
            this$1$1.container.emit("setList", arr);
          }
        });
      });
      pagenation.anchorBottom = 70 * ratioY;
      pagenation.horizontalAlign = "center";
      this.pagenation = pagenation;
      this.addChild(pagenation);
    };

    BaseContainer.prototype.sortingContainer = function sortingContainer() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var con = new PIXI.UI.Container(1250 * ratioX, 52 * ratioY + 3);
      var cb = new CheckBox({
        size: 11 * ratioX,
        value: "manager",
        line: 3,
        insideColor: color.red
      });
      var topLine = new LineSprte(con.width, 1, color.line);
      var bottomLine = new LineSprte(con.width, 2, color.line);
      var no = titleSprite(75 * ratioX, 53 * ratioY, "번호");
      var title = titleSprite(235 * ratioX, 53 * ratioY, "제목");
      var registration = titleSprite(115 * ratioX, 53 * ratioY, "등록일");
      var recent = titleSprite(115 * ratioX, 53 * ratioY, "최근수정일");
      var prevListen = new PIXI.UI.Text("미리듣기", fontstyle.Black12);
      cb.verticalAlign = "middle";
      cb.anchorLeft = 13 * ratioX;
      no.anchorLeft = 36 * ratioX;
      title.anchorLeft = 131 * ratioX;
      registration.anchorRight = 70 * ratioX;
      recent.anchorRight = 0;
      prevListen.anchorRight = 304 * ratioX;
      prevListen.verticalAlign = "middle";
      con.anchorLeft = 53 * ratioX;
      con.anchorTop = 160 * ratioY;
      topLine.anchorTop = 0;
      bottomLine.anchorBottom = 0;
      this.listCon = new PIXI.UI.Container(con.width, 713 * ratioY);
      this.listCon.anchorLeft = 53 * ratioX;
      this.listCon.anchorTop = con.anchorTop + con.height;
      this.managerCb = cb;
      con.addChild(cb, bottomLine, no, title, registration, prevListen, topLine);
      this.addChild(con, this.listCon);
    };

    BaseContainer.prototype.searchContainer = function searchContainer() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var con = new PIXI.UI.Container(1304 * ratioX, 220 * ratioY);
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(0);
      graphic.beginFill(color.red);
      graphic.drawRoundedRect(0, 0, 100 * ratioX, 3, 3);
      graphic.endFill();
      var line = new GraphicsSprite(graphic);
      var lineText = new PIXI.UI.Text("제목", fontstyle.Black12);
      line.addChild(lineText);
      lineText.anchorLeft = 20 * ratioX;
      lineText.anchorBottom = 5 * ratioY;
      graphic.clear();
      graphic.lineStyle(0);
      graphic.beginFill(color.red);
      graphic.drawRoundedRect(0, 0, 975 * ratioX, 3, 3);
      graphic.endFill();
      var line2 = new GraphicsSprite(graphic);
      line.anchorTop = line2.anchorTop = 30 * ratioY;
      line2.anchorLeft = 105 * ratioX;
      con.anchorTop = 106 * ratioY;
      con.horizontalAlign = "center";
      var placeholder = "검색어를 입력하세요.";
      this.textinput = new PIXI.UI.TextInput({
        background: PIXI.UI.Sprite(PIXI.Texture.WHITE),
        value: placeholder,
        style: fontstyle.Black14,
        lineHeight: 30 * ratioY,
        paddingLeft: 10 * ratioX,
        width: "70%",
        height: 30
      });
      this.textinput.alpha = 0.5;
      var qTexture = new PIXI.Texture.from("Q_icon");
      var qSprite = new PIXI.UI.Sprite(qTexture);
      qSprite.tint = color.red;
      qSprite.anchorRight = 2 * ratioX;
      qSprite.anchorBottom = 3 * ratioY;
      qSprite.width = qSprite.height = 20 * ratioX;
      line2.addChild(qSprite);
      con.addChild(line, line2);
      var isCtrl = false;
      var isSelect = false;
      var saveText;
      this.textinput.on("keydown", function (e) {
        if (e.which == 17) {
          isCtrl = true;
        }

        if (e.which == 65 && isCtrl == true) {
          console.log("ctrl+a!!!");
          isSelect = true;
          saveText = this$1$1.textinput.value;
        }

        if (e.which == 67 && isCtrl == true) {
          console.log("ctrl+c!!!");
        }

        if (isCtrl == false && e.key !== "Enter") {
          isSelect = false;
        }
      });
      this.textinput.on("keyup", function (e) {
        if (e.which == 17) {
          isCtrl = false;
        }

        if (e.key === "Enter") {
          if (isSelect) {
            this$1$1.textinput.value = saveText;
            console.log("this.textinput.value:", this$1$1.textinput.value);
            console.log("this.textinput.lastvalue:", this$1$1.textinput._lastValue);
            isSelect = false;
            saveText = "";
          }

          this$1$1.textinput.blur();
          qSprite.sprite.emit("click");

          if (this$1$1.textinput.value === "") {
            this$1$1.textinput.value = placeholder;
            this$1$1.textinput.alpha = 0.5;
          }
        }
      });
      this.textinput.on("focus", function () {
        if (this$1$1.textinput.value.includes(placeholder) || this$1$1.textinput._lastValue == "" || this$1$1.textinput.value == " ") {
          console.log("focus!!!!!!!!!!!!!");
          this$1$1.textinput.value = "";
          this$1$1.textinput._lastValue = "";
          this$1$1.textinput.alpha = 1;
        }
      });
      this.textinput.on("blur", function () {
        console.log("blur");
        console.log("this.textinput.value:", this$1$1.textinput.value);

        if (this$1$1.textinput.value === "" || this$1$1.textinput.value == " " || this$1$1.textinput.value == placeholder) {
          console.log("empty blur");
          this$1$1.textinput.value = placeholder;
          this$1$1.textinput.alpha = 0.5;
        }
      });
      this.textinput.anchorLeft = 110;
      con.addChild(this.textinput);
      var recentBtn = new ButtonHandler({
        width: 80 * ratioX,
        height: 18 * ratioY,
        line: 1,
        lineColor: color.white,
        text: {
          name: "최신등록순",
          style: fontstyle.White12_R
        }
      });
      recentBtn.button.text.tint = color.line;
      var oldBtn = new ButtonHandler({
        width: 80 * ratioX,
        height: 18 * ratioY,
        line: 1,
        lineColor: color.white,
        text: {
          name: "오래된순",
          style: fontstyle.White12_R
        }
      });
      oldBtn.button.text.tint = color.red;
      recentBtn.button.anchorRight = oldBtn.button.width;
      oldBtn.button.anchorRight = 0;
      var line3 = new LineSprte(2, 18 * ratioY, color.line);
      line3.anchorRight = 74 * ratioX;
      oldBtn.button.anchorTop = recentBtn.button.anchorTop = line3.anchorTop = 13 * ratioY;
      con.addChild(recentBtn.button, oldBtn.button, line3);
      qSprite.sprite.interactive = qSprite.sprite.buttonMode = true;
      qSprite.sprite.on("click", function () {
        get_AudioList(1, this$1$1.order_num, this$1$1.textinput.value, function (res) {
          if (res.code === 0) {
            this$1$1.makePageNation(res.data.total);
            var arr = res.data.pageList;
            this$1$1.pagenation.container.emit("changePage", 1, arr);
          }
        });
      });
      recentBtn.onClick(function () {
        oldBtn.button.text.tint = color.line;
        recentBtn.button.text.tint = color.red;
        this$1$1.order_num = 1;
        qSprite.sprite.emit("click");
      });
      oldBtn.onClick(function () {
        oldBtn.button.text.tint = color.red;
        recentBtn.button.text.tint = color.line;
        this$1$1.order_num = 2;
        qSprite.sprite.emit("click");
      });
      return con;
    };

    Object.defineProperties(BaseContainer.prototype, prototypeAccessors);
    return BaseContainer;
  }(PIXI.UI.Sprite);
  var CheckBoxContainer = function CheckBoxContainer() {
    var this$1$1 = this;
    this.selectedList = [];
    this.cbArr = [];
    var con = new BaseContainer();
    con.enrollBtn.onClick(function () {
      var ref;
      var now = document.getElementById("page_input").textContent - 1;
      (ref = Data.audioArr[now]).push.apply(ref, this$1$1.selectedList);
      this$1$1.selectedList = [];
      con.parent.container.emit("close");
    });
    con.container.on("setList", function (arr) {
      this$1$1.listItem(arr, con.listCon, con.managerCb);
    });
    con.managerCb.on("click", function () {
      if (con.managerCb.checked) {
        this$1$1.cbArr.map(function (e) {
          e.checked = false;
          e.emit("change", false);
        });
      } else {
        this$1$1.cbArr.map(function (e) {
          e.checked = true;
          e.emit("change", true);
        });
      }
    });
    return con;
  };

  CheckBoxContainer.prototype.listItem = function listItem(arr, listCon, managerCb) {
    var this$1$1 = this;
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    var cbLeft = 12 * ratioX;
    var noLeft = 65 * ratioX;
    var titleLeft = 140 * ratioX;
    var registrationR = 80 * ratioX;
    var recentR = 13 * ratioX;
    var prevListenR = 289 * ratioX;

    while (listCon.children[0]) {
      listCon.removeChild(listCon.children[0]);
    }

    var cbArr = [];
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");

    var loop = function loop(i) {
      var element = arr[i];
      var blank = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      blank.width = listCon.width;
      blank.height = 46 * ratioY;
      var uuid = element.data_uuid;
      var raw_no = new PIXI.UI.Text(element.raw_no, fontstyle.Black12);
      var title = new PIXI.UI.Text(element.title, fontstyle.Blue12);

      function Unix_timestamp(t) {
        var date = new Date(t * 1000);
        var year = date.getFullYear();
        var month = "0" + (date.getMonth() + 1);
        var day = "0" + date.getDate();
        var hour = "0" + date.getHours();
        var minute = "0" + date.getMinutes();
        return year + "." + month.substr(-2) + "." + day.substr(-2) + " " + hour.substr(-2) + ":" + minute.substr(-2);
      }

      var registration = new PIXI.UI.Text(Unix_timestamp(element.registerTime), fontstyle.Black12);
      var recent = new PIXI.UI.Text(Unix_timestamp(element.registerTime), fontstyle.Black12);
      var duration = void 0;
      var sound = new Howl({
        src: [S3_URL_RAW + "/" + uuid],
        html5: true,
        volume: 0,
        onload: function onload() {
          duration = sound.duration();
        }
      });
      var cb = new CheckBox({
        size: 11 * ratioX,
        line: 1,
        insideColor: color.red,
        value: element.raw_no
      });
      this$1$1.selectedList.map(function (e) {
        if (e.raw_no == element.raw_no) {
          cb.checked = true;
        }
      });
      cb.on("change", function (checked) {
        if (checked) {
          this$1$1.selectedList.push({
            uuid: uuid,
            raw_no: element.raw_no,
            sound: sound,
            duration: duration,
            title: title.text
          });
        } else {
          var a = this$1$1.selectedList.filter(function (x) {
            if (x.raw_no !== element.raw_no) {
              return x;
            }
          });
          this$1$1.selectedList = a;
        }
      });
      cb.on("click", function () {
        if (cb.checked) {
          managerCb.checked = false;
        }
      });
      var prevListenBtn = new ButtonHandler({
        width: 80 * ratioX,
        height: 45 * ratioX,
        lineColor: color.white,
        img: {
          url: "audio_icon",
          width: 22 * ratioX,
          height: 18 * ratioY,
          tint: 0x333333
        }
      });
      prevListenBtn.background.alpha = 0;
      prevListenBtn.onClick(function () {
        sound.stop();
        sound.volume(1);
        sound.play();
      });
      var bottomLine = new LineSprte(blank.width, 1, color.line);
      bottomLine.anchorBottom = 0;
      cb.anchorLeft = cbLeft;
      cb.verticalAlign = "middle";
      raw_no.anchorLeft = noLeft;
      raw_no.verticalAlign = "middle";
      title.anchorLeft = titleLeft;
      title.verticalAlign = "middle";
      registration.anchorRight = registrationR;
      registration.verticalAlign = "middle";
      recent.anchorRight = recentR;
      recent.verticalAlign = "middle";
      prevListenBtn["audio_icon"].horizontalAlign = "center";
      prevListenBtn["audio_icon"].verticalAlign = "middle";
      prevListenBtn.button.anchorRight = prevListenR;
      cbArr.push(cb);
      blank.y = blank.height * i;
      blank.addChild(cb, raw_no, title, registration, prevListenBtn.button, bottomLine);
      listCon.addChild(blank);
      sound.play();
    };

    for (var i = 0; i < arr.length; i++) {
      loop(i);
    }

    var flag = true;

    for (var i$1 = 0; i$1 < cbArr.length; i$1++) {
      var element$1 = cbArr[i$1];

      if (element$1.checked === false) {
        flag = false;
        break;
      }
    }

    this.cbArr = cbArr;
    managerCb.checked = flag;
  };

  var RadioBoxContainer = function RadioBoxContainer() {
    var this$1$1 = this;
    this.selected = undefined;
    var con = new BaseContainer();
    con.enrollBtn.onClick(function () {
      var now = document.getElementById("page_input").textContent - 1;
      Data.audioArr[now][con.childNum].title = this$1$1.selected.title;
      Data.audioArr[now][con.childNum].uuid = this$1$1.selected.uuid;
      Data.audioArr[now][con.childNum].raw_no = this$1$1.selected.raw_no;
      Data.audioArr[now][con.childNum].sound = this$1$1.selected.sound;
      Data.audioArr[now][con.childNum].duration = this$1$1.selected.duration;
      this$1$1.selected = undefined;
      con.parent.container.emit("close");
      con.callFucn();
    });
    con.container.on("setList", function (arr) {
      this$1$1.listItem(arr, con.listCon);
    });
    con.managerCb.visible = false;
    return con;
  };

  RadioBoxContainer.prototype.listItem = function listItem(arr, listCon) {
    var this$1$1 = this;
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    var cbLeft = 12 * ratioX;
    var noLeft = 65 * ratioX;
    var titleLeft = 140 * ratioX;
    var registrationR = 157 * ratioX;
    var recentR = 13 * ratioX;
    var prevListenR = 289 * ratioX;

    while (listCon.children[0]) {
      listCon.removeChild(listCon.children[0]);
    }
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");

    var loop = function loop(i) {
      var element = arr[i];
      var blank = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      blank.width = listCon.width;
      blank.height = 46 * ratioY;
      var uuid = element.data_uuid;
      var raw_no = new PIXI.UI.Text(element.raw_no, fontstyle.Black12);
      var title = new PIXI.UI.Text(element.title, fontstyle.Blue12);
      var date_R = new Date(element.registerTime);
      var registration = new PIXI.UI.Text(date_R.getFullYear() + "." + (date_R.getMonth() + 1) + "." + date_R.getDate() + " " + (date_R.getHours() < 10 ? "0" : "") + date_R.getHours() + ":" + (date_R.getMinutes() < 10 ? "0" : "") + date_R.getMinutes(), fontstyle.Black12);
      var date = new Date(element.registerTime);
      var recent = new PIXI.UI.Text(date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate() + " " + (date.getHours() < 10 ? "0" : "") + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(), fontstyle.Black12);
      var duration = void 0;
      var sound = new Howl({
        src: [S3_URL_RAW + "/" + uuid],
        html5: true,
        volume: 0,
        onload: function onload() {
          duration = sound.duration();
        }
      });
      var cb = new CheckBox({
        size: 11 * ratioX,
        line: 1,
        insideColor: color.red,
        value: element.raw_no,
        group: "radio"
      });

      if (this$1$1.selected && this$1$1.selected.raw_no === element.raw_no) {
        cb.checked = true;
      }

      cb.on("change", function (checked) {
        if (checked) {
          this$1$1.selected = {
            uuid: uuid,
            raw_no: element.raw_no,
            sound: sound,
            duration: duration,
            title: title.text
          };
        } else {
          if (this$1$1.selected.raw_no === element.raw_no) {
            this$1$1.selected = undefined;
          }
        }
      });
      var prevListenBtn = new ButtonHandler({
        width: 80 * ratioX,
        height: 45 * ratioX,
        lineColor: color.white,
        img: {
          url: "audio_icon",
          width: 22 * ratioX,
          height: 18 * ratioY
        }
      });
      prevListenBtn.background.alpha = 0;
      prevListenBtn.onClick(function () {
        sound.stop();
        sound.volume(1);
        sound.play();
      });
      var bottomLine = new LineSprte(blank.width, 1, color.line);
      bottomLine.anchorBottom = 0;
      cb.anchorLeft = cbLeft;
      cb.verticalAlign = "middle";
      raw_no.anchorLeft = noLeft;
      raw_no.verticalAlign = "middle";
      title.anchorLeft = titleLeft;
      title.verticalAlign = "middle";
      registration.anchorRight = registrationR;
      registration.verticalAlign = "middle";
      recent.anchorRight = recentR;
      recent.verticalAlign = "middle";
      prevListenBtn["audio_icon"].horizontalAlign = "center";
      prevListenBtn["audio_icon"].verticalAlign = "middle";
      prevListenBtn.button.anchorRight = prevListenR;
      blank.y = blank.height * i;
      blank.addChild(cb, raw_no, title, registration, recent, prevListenBtn.button, bottomLine);
      listCon.addChild(blank);
      sound.play();
    };

    for (var i = 0; i < arr.length; i++) {
      loop(i);
    }
  };

  function makeCardContainer$1(graphic, tWidth, tHight, dy, dt, radius) {
    graphic.clear();
    graphic.lineStyle(1, 0x0ffffff, 1, 1, true);
    graphic.beginFill(0x0b4247);
    graphic.drawRoundedRect(0, 0, tWidth, tHight - dy - dt, radius);
    graphic.endFill();
    graphic.lineStyle(1, 0xffffff, 1, 1, true);
    graphic.beginFill(0xffffff);
    graphic.drawRect(0, dy, tWidth, dt * 2);
    graphic.endFill();
    graphic.lineStyle(1, 0xffffff, 1, 1, true);
    graphic.beginFill(0xffffff);
    graphic.drawRoundedRect(0, dy + dt, tWidth, tHight - dy - dt, radius);
    graphic.endFill();
  }
  function titleSprite(width, height, text, right) {
    var tSprite = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
    tSprite.width = width;
    tSprite.height = height;
    tSprite.order = true;
    var txt = new PIXI.UI.Text(text, fontstyle.Black12);
    txt.verticalAlign = "middle";
    txt.horizontalAlign = "center";
    tSprite.addChild(txt);
    return tSprite;
  }

  var radioBox = function radioBox(option) {
    var checked = new checkedRadio(option);
    var unchecked = new unCheckeRradio(option);
    var checkT = Manager.app.renderer.generateTexture(checked);
    var uncheckT = Manager.app.renderer.generateTexture(unchecked);
    this.radiobox = new PIXI.UI.CheckBox({
      checked: option.checked,
      background: new PIXI.UI.SliceSprite(uncheckT),
      checkmark: new PIXI.UI.SliceSprite(checkT, 9),
      checkgroup: option.group,
      value: option.value
    });
    this.radiobox.x = option.x;
    this.radiobox.y = option.y;
    this.radiobox.scaleX = 0.5;
    this.radiobox.scaleY = 0.5;
    return this.radiobox;
  };
  var unCheckeRradio = /*@__PURE__*/function (superclass) {
    function unCheckeRradio(option) {
      superclass.call(this);
      this.URsize = option.size * 2;

      if (option.lineColor !== undefined) {
        this.URlineColor = option.lineColor;
      } else {
        this.URlineColor = 0x000000;
      }

      if (option.line !== undefined) {
        this.URline = option.line;
      } else {
        this.URline = 2;
      }

      this.lineStyle(this.URline, this.URlineColor, 1, 1, true);
      this.beginFill(0xffffff);
      this.drawCircle(0, 0, this.URsize);
      this.endFill();
    }

    if (superclass) unCheckeRradio.__proto__ = superclass;
    unCheckeRradio.prototype = Object.create(superclass && superclass.prototype);
    unCheckeRradio.prototype.constructor = unCheckeRradio;
    return unCheckeRradio;
  }(PIXI.Graphics);
  var checkedRadio = /*@__PURE__*/function (superclass) {
    function checkedRadio(option) {
      superclass.call(this);
      this.Rsize = option.size * 2;

      if (option.lineColor !== undefined) {
        this.RlineColor = option.lineColor;
      } else {
        this.RlineColor = 0x000000;
      }

      if (option.insideColor !== undefined) {
        this.RinsideColor = option.insideColor;
      } else {
        this.RinsideColor = 0xe95c63;
      }

      if (option.line !== undefined) {
        this.Rline = option.line;
      } else {
        this.Rline = 2;
      }

      var Ins = this.Rsize * 0.7;
      this.lineStyle(this.Rline, this.RlineColor, 1, 1, true);
      this.beginFill(0xffffff);
      this.drawCircle(0, 0, this.Rsize);
      this.endFill();
      this.lineStyle(null);
      this.beginFill(this.RinsideColor);
      this.drawCircle(0, 0, Ins);
      this.endFill();
    }

    if (superclass) checkedRadio.__proto__ = superclass;
    checkedRadio.prototype = Object.create(superclass && superclass.prototype);
    checkedRadio.prototype.constructor = checkedRadio;
    return checkedRadio;
  }(PIXI.Graphics);

  var SavePopUp = /*@__PURE__*/function (superclass) {
    function SavePopUp(saveFunc) {
      var this$1$1 = this;
      superclass.call(this, "100%", "100%");
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.filter = new Filter("100%", "100%");
      this.filter.sprite.buttonMode = false;
      var graphic = new PIXI.Graphics();
      var tWidth = 790 * ratioX;
      var tHight = 281 * ratioY;
      var dy = 52 * ratioY;
      var dt = 7 * ratioY;
      var radius = 10;
      makeCardContainer(graphic, tWidth, tHight, dy, dt, radius);
      var cardTexture = Manager.app.renderer.generateTexture(graphic);
      this.card = new PIXI.UI.Sprite(cardTexture);
      this.card.sprite.interactive = true;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var saveBtn = new ButtonHandler({
        width: 100 * ratioX,
        height: 40 * ratioY,
        tint: color.green,
        line: 0,
        text: {
          name: "저장",
          style: fontstyle.White12
        }
      });
      var cancleBtn = new ButtonHandler({
        width: 100 * ratioX,
        height: 40 * ratioY,
        lineColor: color.line,
        text: {
          name: "취소",
          style: fontstyle.Black12
        }
      });
      cancleBtn.button.anchorRight = 40 * ratioX;
      saveBtn.button.anchorRight = 145 * ratioX;
      cancleBtn.button.anchorBottom = saveBtn.button.anchorBottom = 42 * ratioY;
      var title = new PIXI.UI.Text("스토리 뷰어 저장하기", fontstyle.WhiteTitle);
      title.anchorTop = 14 * ratioY;
      title.anchorLeft = 53 * ratioX;
      var storyTitle = new PIXI.UI.Text("제목", fontstyle.Black14_bold);
      var storyT = new PIXI.UI.Text(Data.title, fontstyle.Gray14);
      var storyLine = new LineSprte(550 * ratioX, 2, color.line);
      storyT.anchorBottom = 167 * ratioY;
      storyLine.anchorTop = storyT.height + 2;
      storyLine.anchorLeft = -4;
      storyT.addChild(storyLine);
      storyT.anchorLeft = 210 * ratioX;
      var txt = new PIXI.UI.Text("스토리 뷰어 상태", fontstyle.Black14_bold);
      txt.anchorBottom = 110 * ratioY;
      txt.anchorLeft = 54 * ratioX;
      storyTitle.anchorBottom = 166 * ratioY;
      storyTitle.anchorLeft = 54 * ratioX;
      var xtexture = xTexture(18 * ratioX);
      var x_btn = new PIXI.UI.Sprite(xtexture);
      x_btn.anchorTop = 17 * ratioY;
      x_btn.anchorRight = 20 * ratioX;
      x_btn.sprite.interactive = x_btn.sprite.buttonMode = true;
      x_btn.sprite.on("click", function () {
        this$1$1.container.emit("close");
      });
      this.container.on("close", function () {
        this$1$1.parent.removeChild(this$1$1);
      });
      cancleBtn.onClick(function () {
        this$1$1.container.emit("close");
      });
      saveBtn.onClick(function () {
        saveFunc();
        this$1$1.container.emit("close");
      });
      var radioDoing = new radioBox({
        x: 338 * ratioX,
        y: 155 * ratioY,
        size: 6,
        value: 1,
        group: "radioStory"
      });
      var radioFin = new radioBox({
        x: 229 * ratioX,
        y: 155 * ratioY,
        size: 6,
        value: 2,
        group: "radioStory"
      });
      var radioPublish = new radioBox({
        x: 449 * ratioX,
        y: 155 * ratioY,
        size: 6,
        value: 0,
        group: "radioStory"
      });
      var fintext = new PIXI.UI.Text("작성 완료", fontstyle.Black12);
      var dotext = new PIXI.UI.Text("작성 중", fontstyle.Black12);
      var publishTxt = new PIXI.UI.Text("발행", fontstyle.Black12);
      fintext.anchorLeft = 251 * ratioX;
      dotext.anchorLeft = 360 * ratioX;
      publishTxt.anchorLeft = 469 * ratioX;
      fintext.anchorBottom = dotext.anchorBottom = publishTxt.anchorBottom = 110 * ratioY;

      if (Data.state === undefined) {
        Data.state = 1;
        radioDoing.checked = true;
      } else {
        switch (Data.state) {
          case 0:
            radioPublish.checked = true;
            break;

          case 1:
            radioDoing.checked = true;
            break;

          case 2:
            radioFin.checked = true;
            break;
        }
      }

      radioFin.on("change", function (checked) {
        if (checked) {
          Data.state = radioFin.value;
        }
      });
      radioDoing.on("change", function (checked) {
        if (checked) {
          Data.state = radioDoing.value;
        }
      });
      radioPublish.on("change", function (checked) {
        if (checked) {
          Data.state = 0;
        }
      });
      this.card.addChild(cancleBtn.button, saveBtn.button, txt, title, x_btn, radioFin, radioDoing, fintext, dotext, storyTitle, storyT);

      if (!Data.isFirst) {
        this.card.addChild(radioPublish, publishTxt);
      }

      this.addChild(this.filter, this.card);
    }

    if (superclass) SavePopUp.__proto__ = superclass;
    SavePopUp.prototype = Object.create(superclass && superclass.prototype);
    SavePopUp.prototype.constructor = SavePopUp;
    return SavePopUp;
  }(PIXI.UI.Container);
  function makeCardContainer(graphic, tWidth, tHight, dy, dt, radius) {
    graphic.clear();
    graphic.lineStyle(1, 0x0ffffff, 1, 1, true);
    graphic.beginFill(color.green);
    graphic.drawRoundedRect(0, 0, tWidth, tHight - dy - dt, radius);
    graphic.endFill();
    graphic.lineStyle(1, 0xffffff, 1, 1, true);
    graphic.beginFill(0xffffff);
    graphic.drawRect(0, dy, tWidth, dt * 2);
    graphic.endFill();
    graphic.lineStyle(1, 0xffffff, 1, 1, true);
    graphic.beginFill(0xffffff);
    graphic.drawRoundedRect(0, dy + dt, tWidth, tHight - dy - dt, radius);
    graphic.endFill();
  }

  var AfterSavePopup = /*@__PURE__*/function (superclass) {
    function AfterSavePopup(closeFunc) {
      var this$1$1 = this;
      superclass.call(this, "100%", "100%");
      this.filter = new Filter("100%", "100%");
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.filter.sprite.interactive = false;
      var graphics = new PIXI.Graphics();
      graphics.lineStyle(2, 0xffffff, 1);
      graphics.beginFill(0xffffff);
      graphics.drawRoundedRect(0, 0, 410 * ratioX, 198 * ratioY, 4);
      graphics.endFill();
      this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
      this.card.sprite.interactive = true;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var closeBtn = new ButtonHandler({
        width: 120 * ratioX,
        height: 40 * ratioY,
        lineColor: color.line,
        text: {
          name: "종료하기",
          style: fontstyle.Black14
        }
      });
      var continueBtn = new ButtonHandler({
        width: 120 * ratioX,
        height: 40 * ratioY,
        tint: color.green,
        line: 0,
        text: {
          name: "계속편집하기",
          style: fontstyle.White14
        }
      });
      closeBtn.button.anchorBottom = 68 * ratioY;
      continueBtn.button.anchorBottom = 18 * ratioY;
      closeBtn.button.horizontalAlign = continueBtn.button.horizontalAlign = "center";
      var fin1 = new PIXI.UI.Text("스토리 제작도구를 ", fontstyle.Black16);
      var fin2 = new PIXI.UI.Text("종료 ", fontstyle.Red16);
      var fin3 = new PIXI.UI.Text("하시겠습니까?", fontstyle.Black16);
      var textBox = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      textBox.width = fin1.width + fin2.width + fin3.width;
      fin2.x = fin1.width;
      fin3.x = fin2.x + fin2.width;
      textBox.addChild(fin1, fin2, fin3);
      var txt = new PIXI.UI.Text("저장되었습니다.", fontstyle.Black16);
      textBox.horizontalAlign = txt.horizontalAlign = "center";
      txt.y = 20 * ratioY;
      textBox.y = txt.height + txt.y + 2;
      this.container.interactive = true;
      this.container.on("close", function () {
        this$1$1.parent.removeChild(this$1$1);
      });
      continueBtn.onClick(function () {
        this$1$1.container.emit("close");
      });
      closeBtn.onClick(function () {
        closeBtn.button.blur();
        closeFunc();
        this$1$1.container.emit("close");
      });
      this.card.addChild(closeBtn.button, continueBtn.button, textBox, txt);
      this.addChild(this.filter, this.card);
    }

    if (superclass) AfterSavePopup.__proto__ = superclass;
    AfterSavePopup.prototype = Object.create(superclass && superclass.prototype);
    AfterSavePopup.prototype.constructor = AfterSavePopup;
    return AfterSavePopup;
  }(PIXI.UI.Container);
  var OnlyClosePopup = /*@__PURE__*/function (superclass) {
    function OnlyClosePopup(closeFunc) {
      var this$1$1 = this;
      superclass.call(this, "100%", "100%");
      this.filter = new Filter("100%", "100%");
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.filter.sprite.interactive = false;
      var graphics = new PIXI.Graphics();
      graphics.lineStyle(2, 0xffffff, 1);
      graphics.beginFill(0xffffff);
      graphics.drawRoundedRect(0, 0, 410 * ratioX, 172 * ratioY, 4);
      graphics.endFill();
      this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
      this.card.sprite.interactive = true;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var closeBtn = new ButtonHandler({
        width: 120 * ratioX,
        height: 40 * ratioY,
        lineColor: color.line,
        text: {
          name: "종료하기",
          style: fontstyle.Black14
        }
      });
      var continueBtn = new ButtonHandler({
        width: 120 * ratioX,
        height: 40 * ratioY,
        tint: color.green,
        line: 0,
        text: {
          name: "계속편집하기",
          style: fontstyle.White14
        }
      });
      closeBtn.button.anchorBottom = 68 * ratioY;
      continueBtn.button.anchorBottom = 18 * ratioY;
      closeBtn.button.horizontalAlign = continueBtn.button.horizontalAlign = "center";
      var fin1 = new PIXI.UI.Text("스토리 제작도구를 ", fontstyle.Black16);
      var fin2 = new PIXI.UI.Text("종료 ", fontstyle.Red16);
      var fin3 = new PIXI.UI.Text("하시겠습니까?", fontstyle.Black16);
      var textBox = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      textBox.width = fin1.width + fin2.width + fin3.width;
      fin2.x = fin1.width;
      fin3.x = fin2.x + fin2.width;
      textBox.addChild(fin1, fin2, fin3);
      textBox.anchorTop = 20 * ratioY;
      textBox.horizontalAlign = "center";
      this.container.interactive = true;
      this.container.on("close", function () {
        this$1$1.parent.removeChild(this$1$1);
      });
      continueBtn.onClick(function () {
        this$1$1.container.emit("close");
      });
      closeBtn.onClick(function () {
        closeBtn.button.blur();
        closeFunc();
        this$1$1.container.emit("close");
      });
      this.card.addChild(closeBtn.button, continueBtn.button, textBox);
      this.addChild(this.filter, this.card);
    }

    if (superclass) OnlyClosePopup.__proto__ = superclass;
    OnlyClosePopup.prototype = Object.create(superclass && superclass.prototype);
    OnlyClosePopup.prototype.constructor = OnlyClosePopup;
    return OnlyClosePopup;
  }(PIXI.UI.Container);

  var ProgressPopup = /*@__PURE__*/function (superclass) {
    function ProgressPopup() {
      superclass.call(this, "100%", "100%");
      this.filter = new Filter("100%", "100%");
      var graphics = new PIXI.Graphics();
      graphics.lineStyle(2, 0xffffff, 1);
      graphics.beginFill(0xffffff);
      graphics.drawRoundedRect(0, 0, 410 * Manager.ratioX, 120 * Manager.ratioY, 4);
      graphics.endFill();
      this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
      this.card.sprite.interactive = true;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var txt = new PIXI.UI.Text("", fontstyle.Black16);
      txt.anchorTop = (this.card.height - txt.height) / 2;
      txt.horizontalAlign = "center";
      this.txt = txt;
      this.card.addChild(txt);
      this.addChild(this.filter, this.card);
    }

    if (superclass) ProgressPopup.__proto__ = superclass;
    ProgressPopup.prototype = Object.create(superclass && superclass.prototype);
    ProgressPopup.prototype.constructor = ProgressPopup;

    ProgressPopup.prototype.Setpublish = function Setpublish(endFunc) {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.txt.anchorTop = 20 * ratioY;
      var endBtn = new ButtonHandler({
        tint: color.green,
        text: {
          name: "스토리 저작도구 닫기",
          style: fontstyle.White14
        },
        width: 162 * ratioX,
        height: 36 * ratioY
      });
      this.txt.text = "발행되었습니다.";
      endBtn.onClick(function () {
        endBtn.button.blur();
        endFunc();
      });
      endBtn.button.anchorBottom = 20 * ratioY;
      endBtn.button.horizontalAlign = "center";
      this.card.addChild(endBtn.button);
    };

    return ProgressPopup;
  }(PIXI.UI.Container);

  var _func = null;

  var peachClose = function peachClose() {};

  peachClose.setCloseFunc = function setCloseFunc(outsideFunc) {
    _func = outsideFunc;
  };

  peachClose.closePeachPIXI = function closePeachPIXI() {
    PIXI.utils.clearTextureCache();

    if (_func !== null) {
      _func();
    } else {
      window.history.back();
    }
  };

  var AdminScene = function AdminScene(url) {
    var this$1$1 = this;
    var ratioX = Manager.ratioX;
    Data.viewWidth = 1400;
    this.con = new PIXI.UI.Container("100%", "100%");
    var viewCan = document.getElementById("view-canvas");
    var _con = this.con;
    this.tileGrid = new PIXI.UI.TilingSprite(PIXI.Texture.from("grid"), Manager.width, Manager.height);
    this.tileGrid.tint = 0xfafafa;
    this.tileGrid.alpha = 0;
    this.tileGrid.tileScale.x = this.tileGrid.tileScale.y = 0.5;
    this.leftmenu = new LeftMenuAdmin();
    this.rightmenu = new RightMenu(this.tileGrid);
    this.leftmenu.filterOn();
    this.rightmenu.filterOn();
    this.url = url;
    this.con.on("filterOn", function () {
      this$1$1.leftmenu.filterOn();
      this$1$1.rightmenu.filterOn();
    });
    this.con.on("filterOff", function () {
      this$1$1.leftmenu.filterOff();
      this$1$1.rightmenu.filterOff();
    });
    var _leftmenu = this.leftmenu;
    this.callBackFunc = {
      update: function update() {
        _con.emit("selectCard");

        _con.emit("selectAudio");
      },
      const: function setAudio(page) {
        viewCan.style.marginTop = (Manager.height - viewCan.height) / 2 + "px";
        viewCan.style.marginLeft = ((Manager.width - viewCan.width - 520) / 2 + 328) * ratioX + "px";
        Data.initArray(page);
        Data.rollbackArray();
        Manager.paintApp();

        _leftmenu.makeCardContainer();
      },
      thumb: function makeThumbNail(thumbArr, queueRenderPage) {
        this.scrollThumb = new ScrollThumb(thumbArr, queueRenderPage);

        _con.addChild(this.scrollThumb);
      }
    };
    this.LeftBtn = new ArrowLeft(107 * ratioX);
    this.RightBtn = new ArrowRight(107 * ratioX);
    this.LeftBtn.anchorLeft = 221 * ratioX;
    this.RightBtn.anchorRight = 83 * ratioX;
    this.viewer = new Viewer(url, this.callBackFunc, this.RightBtn, this.LeftBtn, 300, 200);
    this.con.addChild(this.tileGrid, this.LeftBtn, this.RightBtn, this.leftmenu, this.rightmenu);
    this.addEvent();
  };

  AdminScene.prototype.addEvent = function addEvent() {
    var this$1$1 = this;
    var popup = new ProgressPopup();

    var endFunc = function endFunc() {
      if (Data.isSaved) {
        this$1$1.con.addChild(popup);
        var zip = new jszip_min();
        var setting = JSON.stringify(Data.data);
        zip.file("setting.txt", setting);
        zip.file(Data.pdf.name, Data.pdf);
        zip.generateAsync({
          type: "blob",
          compression: "DEFLATE"
        }, function updateCallback(metadata) {
          popup.txt.text = "zip파일 생성중 ... " + (metadata.percent || 0) + " %";
        }).then(function (zipContents) {
          var filename = Data.title + ".zip";
          var file = new File([zipContents], filename, {
            type: "application/zip"
          });

          if (Data.isFirst) {
            saveStory(Data.story_tag, Data.state, Data.cards, file, function (res) {
              if (res.code === 0) {
                popup.txt.text = "서버전송 완료";
              } else {
                popup.txt.text = "서버전송 실패";
              }

              setTimeout(function () {
                peachClose.closePeachPIXI();
              }, 500);
            });
          } else {
            changeDone(Data.raw_num, Data.state, function (res) {
              if (res.code === 0) {
                popup.txt.text = "상태변경 완료...";
              } else {
                popup.txt.text = "상태변경 실패";
              }
            });
            editStory(Data.raw_num, Data.cards, file, function (res) {
              if (res.code === 0) {
                popup.txt.text = "서버전송 완료!";
              } else {
                popup.txt.text = "서버전송 실패";
              }

              setTimeout(function () {
                peachClose.closePeachPIXI();
              }, 500);
            });
          }
        });
      } else {
        setTimeout(function () {
          peachClose.closePeachPIXI();
        }, 500);
      }
    };

    var cardPopup = new CardPopUpContainer();
    var audioPopup = new AudioPopUpContianer();
    var aftersavePop = new AfterSavePopup(endFunc);
    var onlyclosepop = new OnlyClosePopup(endFunc);
    var savePopup = new SavePopUp(function () {
      Data.saveAudioData();
      Data.saveCardData();
      Data.setData();

      if (Data.state === 0) {
        changeDone(Data.raw_num, Data.state, function (res) {
          if (res.code === 0) {
            this$1$1.con.addChild(popup);
            popup.Setpublish(peachClose.closePeachPIXI);
          }
        });
      } else {
        this$1$1.con.addChild(aftersavePop);
      }
    });
    this.con.on("editCard", function (idx, call) {
      cardPopup.editScroll(idx, call);
      this$1$1.con.addChild(cardPopup);
    });
    this.con.on("editAudio", function (idx, call) {
      audioPopup.radioBox(idx, call);
      this$1$1.con.addChild(audioPopup);
    });
    this.con.on("selectCard", function () {
      this$1$1.leftmenu.makeCardContainer(Data.cardArr);
    });
    this.con.on("selectAudio", function () {
      this$1$1.leftmenu.makeAudioContainer();
    });
    this.rightmenu.gatherBtn.onClick(function () {
      this$1$1.con.addChild(this$1$1.callBackFunc.scrollThumb);
      this$1$1.con.emit("filterOn");
    });
    this.rightmenu.cardBtn.onClick(function () {
      cardPopup.selectScroll();
      this$1$1.con.addChild(cardPopup);
    });
    this.rightmenu.audioBtn.onClick(function () {
      audioPopup.checkBox();
      this$1$1.con.addChild(audioPopup);
    });
    this.rightmenu.previewBtn.onClick(function () {
      var lastScene = this$1$1;
      Data.viewWidth = 1614;
      this$1$1.viewer.changeScalePage(function () {
        Manager.changeScene(new PreviewScene(lastScene));
      });
    });
    this.rightmenu.saveBtn.onClick(function () {
      this$1$1.con.addChild(savePopup);
    });
    this.rightmenu.finBtn.onClick(function () {
      this$1$1.con.addChild(onlyclosepop);
    });
    this.rightmenu.gridBtn.onClick(function () {
      if (this$1$1.tileGrid.alpha === 1) {
        this$1$1.tileGrid.alpha = 0;
      } else {
        this$1$1.tileGrid.alpha = 1;
      }
    });
    this.rightmenu.hlBtn.onClick(function () {
      var inputNum = prompt("숫자만 입력하세요", Data.hlHeight);
      var a = Number(inputNum);

      if (a !== 0 && !isNaN(inputNum)) {
        Data.hlHeight = a;
      }
    });
  };

  AdminScene.prototype.update = function update(framesPassed) {};

  AdminScene.prototype.resize = function resize(screenWidth, screenHeight) {};

  var Slider = function Slider(handleColor, trackColor, width, height, size) {
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(0);
    graphic.beginFill(0xffffff);
    graphic.drawRoundedRect(0, 0, width, height, 3 * ratioX);
    graphic.endFill();
    var track = new GraphicTexture(graphic);
    var handlet = new PIXI.Texture.from("circle"),
        handle = new PIXI.UI.Sprite(handlet);
    handle.width = handle.height = size;
    handle.tint = handleColor;
    graphic.clear();
    graphic.lineStyle(1.5, 0xdbdbdb, 1, 1, true);
    graphic.beginFill(0xffffff);
    graphic.drawRoundedRect(0, 0, 35 * ratioX, 23 * ratioY, 5 * ratioX);
    graphic.endFill();
    var box = new GraphicsSprite(graphic);
    var text = new PIXI.UI.Text("0", fontstyle.Black14_R);
    box.addChild(text);
    box.bottom = -10 * ratioY;
    text.verticalAlign = "middle";
    text.horizontalAlign = "center";
    box.horizontalAlign = "center";
    var slider = new PIXI.UI.Slider({
      track: new PIXI.UI.SliceSprite(track, 3),
      handle: handle,
      fill: new PIXI.UI.SliceSprite(track, 3),
      value: 10,
      minValue: 0,
      maxValue: 100,
      decimals: 0,
      onValueChanging: function onValueChanging(val) {
        text.value = val + "";
      }
    });
    slider.width = width;
    slider.fill.tint = trackColor;
    slider.track.tint = trackColor;
    slider.handle.addChild(box);
    return slider;
  };

  function recTexture(w, h, parent) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(0);
    graphic.beginFill(0xffffff);
    graphic.drawRect(0, 0, w, h);
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function recStrokeTexture(w, h, parent) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(6, 0xffffff, 1);
    graphic.drawRect(0, 0, w, h);
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function circleTexture(radius, parent) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(4, 0xffffff, 1, 0);
    graphic.beginFill(0xffffff);
    graphic.drawCircle(0, 0, radius);
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function circleStrokeTexture(radius, parent) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(14, 0xffffff, 1, 0);
    graphic.drawCircle(0, 0, radius);
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function triangleTexture(w, h, parent) {
    var graphic = new PIXI.Graphics();
    graphic.beginFill(0xffffff);
    graphic.lineStyle(0);
    graphic.drawPolygon([w / 2, 0, 0, h, w, h]);
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function triangleStrokeTexture(w, h, parent) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(10, 0xffffff, 1);
    graphic.drawPolygon([w / 2, 0, 0, h, w, h]);
    graphic.endFill();
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function hexagonTexture(radius, parent) {
    var graphic = new PIXI.Graphics();
    graphic.beginFill(0xffffff);
    graphic.lineStyle(3, 0xffffff, 1);
    graphic.drawStar(0, 0, 6, radius, radius * 0.9);
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function hexagonStrokeTexture(radius, parent) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(10, 0xffffff, 1);
    graphic.drawStar(0, 0, 6, radius, radius * 0.9);
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function starTexture(radius, parent) {
    var graphic = new PIXI.Graphics();
    graphic.beginFill(0xffffff);
    graphic.lineStyle(3, 0xffffff, 1, 1);
    graphic.drawStar(0, 0, 5, radius);
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function starStrokeTexture(radius, parent) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle(10, 0xffffff, 1, 1);
    graphic.drawStar(0, 0, 5, radius);
    graphic.endFill();
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function twoTexture(width, height, parent) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle({
      width: 10,
      color: 0xffffff,
      alpha: 1,
      join: "miter",
      cap: "round"
    });
    graphic.moveTo(0, height / 2);
    graphic.lineTo(width / 4, 0);
    graphic.lineTo(width / 4, height);
    graphic.lineTo(0, height / 2);
    graphic.moveTo(width / 4, height / 2);
    graphic.lineStyle({
      width: 20,
      color: 0xffffff,
      alpha: 1,
      join: "miter",
      cap: "miter"
    });
    graphic.lineTo(width / 4 * 3, height / 2);
    graphic.lineStyle({
      width: 10,
      color: 0xffffff,
      alpha: 1,
      join: "miter",
      cap: "round"
    });
    graphic.moveTo(width, height / 2);
    graphic.lineTo(width / 4 * 3, height);
    graphic.lineTo(width / 4 * 3, 0);
    graphic.lineTo(width, height / 2);
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function leftTexture(width, height, parent) {
    var graphic = new PIXI.Graphics();
    graphic.lineStyle({
      width: 10,
      color: 0xffffff,
      alpha: 1,
      join: "miter",
      cap: "round"
    });
    graphic.moveTo(0, height / 2);
    graphic.lineTo(width / 4, 0);
    graphic.lineTo(width / 4, height);
    graphic.lineTo(0, height / 2);
    graphic.moveTo(width / 4, height / 2);
    graphic.lineStyle({
      width: 20,
      color: 0xffffff,
      alpha: 1,
      join: "miter",
      cap: "miter"
    });
    graphic.lineTo(width / 4 * 3, height / 2);
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function rightTexture(width, height, parent) {
    var graphic = new PIXI.Graphics();
    graphic.moveTo(width / 4, height / 2);
    graphic.lineStyle({
      width: 20,
      color: 0xffffff,
      alpha: 1,
      join: "miter",
      cap: "miter"
    });
    graphic.lineTo(width / 4 * 3, height / 2);
    graphic.lineStyle({
      width: 10,
      color: 0xffffff,
      alpha: 1,
      join: "miter",
      cap: "round"
    });
    graphic.moveTo(width, height / 2);
    graphic.lineTo(width / 4 * 3, height);
    graphic.lineTo(width / 4 * 3, 0);
    graphic.lineTo(width, height / 2);
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }
  function checkTexture(width, height, parent) {
    var graphic = new PIXI.Graphics();
    graphic.moveTo(0, height / 2);
    graphic.lineStyle({
      width: 15,
      color: 0xffffff,
      alpha: 1,
      join: "round",
      cap: "round"
    });
    graphic.lineTo(width / 2, height);
    graphic.lineTo(width, 0);
    var texture = parent.renderer.generateTexture(graphic);
    return texture;
  }

  var PaintEvents = function PaintEvents(con, tCon, inputCon, graphics) {
    this.penPaths = [];
    this.con = con;
    this.inputCon = inputCon;
    this.tCon = tCon;
    this.graphics = Manager.paint.stage.addChild(graphics);
    this.preparePen();
    this.prepareText();
    this.prepareHl();
    this.prepareShape();
    this.prepareEraser();
    this.prepareSelect();
  };

  var prototypeAccessors = {
    penThickness: {
      configurable: true
    },
    fontSize: {
      configurable: true
    },
    alpha: {
      configurable: true
    },
    color: {
      configurable: true
    },
    setstartPos: {
      configurable: true
    },
    tiMinWidth: {
      configurable: true
    },
    tiMinHeight: {
      configurable: true
    }
  };

  prototypeAccessors.penThickness.set = function (num) {
    this._penThickness = num;
  };

  prototypeAccessors.fontSize.set = function (num) {
    this._fontSize = num;
  };

  prototypeAccessors.alpha.set = function (num) {
    this._alpha = num;
  };

  prototypeAccessors.color.set = function (num) {
    this._color = num;
  };

  prototypeAccessors.setstartPos.set = function (object) {
    this.startPos = object;
  };

  prototypeAccessors.tiMinWidth.get = function () {
    return this._fontSize * 6;
  };

  prototypeAccessors.tiMinHeight.get = function () {
    return this._fontSize + 10;
  };

  PaintEvents.prototype.preparePen = function preparePen() {
    var this$1$1 = this;
    var graphics = this.graphics;
    this.polypath = [];
    this.reversPath = [];

    this.penEvent = function (e) {
      if (document.dragging) {
        if (e.offsetX < graphics.minX) {
          graphics.minX = e.offsetX;
        }

        if (e.offsetY < graphics.minY) {
          graphics.minY = e.offsetY;
        }

        var radian = Math.abs(90 * Math.PI / 180 - Math.atan2(e.movementY, e.movementX));
        var x = Math.cos(radian) * (e.offsetX + this$1$1._penThickness / 2) - Math.sin(radian) * e.offsetY;
        var y = Math.sin(radian) * (e.offsetX + this$1$1._penThickness / 2) + Math.sin(radian) * e.offsetY;

        if (this$1$1.reversPath.length === 0) {
          this$1$1.reversPath.push(e.offsetX);
          this$1$1.reversPath.push(e.offsetY);
        } else {
          this$1$1.reversPath.push(x);
          this$1$1.reversPath.push(y);
        }

        this$1$1.penPaths.push({
          offsetX: e.offsetX,
          offsetY: e.offsetY
        });
        this$1$1.polypath.push(e.offsetX);
        this$1$1.polypath.push(e.offsetY);
        this$1$1.graphics.clear();
        this$1$1.graphics.lineStyle({
          width: this$1$1._penThickness,
          color: this$1$1._color,
          alpha: this$1$1._alpha,
          join: "round",
          cap: "round"
        });
        this$1$1.graphics.moveTo(this$1$1.startPos.offsetX, this$1$1.startPos.offsetY);
        this$1$1.penPaths.forEach(function (e) {
          this$1$1.graphics.lineTo(e.offsetX, e.offsetY);
        });
      }
    };
  };

  PaintEvents.prototype.prepareText = function prepareText() {
    var this$1$1 = this;
    this.textMap = new Map();
    this.tMap = new Map();
    var paint_canvas = document.getElementById("paint_canvas");
    this.isBlur;

    this.textEvent = function (e, number) {
      var placeholder = "";
      var t = new PIXI.UI.Text("", {
        fontSize: this$1$1._fontSize,
        fill: this$1$1._color,
        fontfamily: "Noto Sans KR"
      });
      t.visible = false;
      this$1$1.text = new PIXI.UI.TextInput({
        background: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        value: placeholder,
        style: {
          fontSize: this$1$1._fontSize,
          fill: this$1$1._color,
          fontfamily: "Noto Sans KR"
        },
        lineHeight: this$1$1._fontSize,
        width: this$1$1.tiMinWidth,
        height: this$1$1.tiMinHeight
      });
      this$1$1.text.container.zIndex = number;
      this$1$1.text.container._lastSortedIndex = number;
      this$1$1.tMap.set(this$1$1.text.container.zIndex, t);
      this$1$1.textMap.set(this$1$1.text.container.zIndex, this$1$1.text);

      if (this$1$1._color === 16777215) {
        text.background.tint = 0x000000;
      }

      this$1$1.text.x = t.x = e.offsetX;
      this$1$1.text.y = t.y = e.offsetY;
      this$1$1.text.on("change", function () {
        this$1$1.text.width = Math.max(this$1$1.tiMinWidth, this$1$1.text.textContainer.innerContainer.width);
        this$1$1.text.height = Math.max(this$1$1.tiMinHeight, this$1$1.text.textContainer.innerContainer.height);
      });
      this$1$1.text.on("focus", function () {
        if (this$1$1.text.value === placeholder) {
          this$1$1.text.value = "";
          this$1$1.text.alpha = 1;
        }
      });
      this$1$1.text.on("blur", function () {
        this$1$1.isBlur = true;

        if (this$1$1.text.value === "" || this$1$1.text.value === placeholder) {
          this$1$1.tCon.removeChild(this$1$1.tMap.get(this$1$1.text.container.zIndex - 1));
        }

        this$1$1.inputCon.removeChild(this$1$1.textMap.get(this$1$1.text.container.zIndex - 1));
        t.text = this$1$1.text.text;
        t.visible = true;
        paint_canvas.style.cursor = "default";
      });
      paint_canvas.addEventListener("mousedown", this$1$1.onTextBoxEvent(this$1$1.text, placeholder));
      this$1$1.inputCon.addChild(this$1$1.textMap.get(this$1$1.text.container.zIndex));
      this$1$1.tCon.addChild(this$1$1.tMap.get(this$1$1.text.container.zIndex));
      setTimeout(function () {
        this$1$1.text.focus();
        document.getElementById("_pui_tempInput").focus();
      }, 20);
      return t;
    };
  };

  PaintEvents.prototype.onTextBoxEvent = function onTextBoxEvent(text, placeholder) {
    if (this.isBlur) {
      this.isBlur = false;
      return;
    }

    if (text.value === "" || text.value === placeholder) {
      this.tCon.removeChild(this.tMap.get(text.container.zIndex - 1));
    }

    this.inputCon.removeChild(this.textMap.get(text.container.zIndex - 1));
  };

  PaintEvents.prototype.prepareHl = function prepareHl() {
    var this$1$1 = this;
    var graphics = this.graphics;

    this.hlEvent = function (e) {
      if (document.dragging) {
        if (e.offsetX < graphics.minX) {
          graphics.minX = e.offsetX;
        }

        if (e.offsetY < graphics.minY) {
          graphics.minY = e.offsetY;
        }

        this$1$1.penPaths.push({
          offsetX: e.offsetX,
          offsetY: e.offsetY
        });
        this$1$1.polypath.push(e.offsetX);
        this$1$1.polypath.push(e.offsetY);
        this$1$1.graphics.clear();
        this$1$1.graphics.lineStyle({
          width: this$1$1._penThickness,
          color: this$1$1._color,
          alpha: this$1$1._alpha * 0.8,
          join: "miter",
          cap: "miter"
        });
        this$1$1.graphics.moveTo(this$1$1.startPos.offsetX, this$1$1.startPos.offsetY);
        this$1$1.penPaths.forEach(function (e) {
          this$1$1.graphics.lineTo(e.offsetX, e.offsetY);
        });
      }
    };
  };

  PaintEvents.prototype.prepareShape = function prepareShape() {
    var this$1$1 = this;
    var size = Manager.paint.renderer.width / 4;
    var strokeRec = recStrokeTexture(size, size, Manager.paint);
    var strokeCir = circleStrokeTexture(size, Manager.paint);
    var strokeTri = triangleStrokeTexture(size, size, Manager.paint);
    var strokehex = hexagonStrokeTexture(size, Manager.paint);
    var strokeStar = starStrokeTexture(size, Manager.paint);
    var rec = recTexture(size, size, Manager.paint);
    var cir = circleTexture(size, Manager.paint);
    var tri = triangleTexture(size, size, Manager.paint);
    var hex = hexagonTexture(size, Manager.paint);
    var star = starTexture(size, Manager.paint);
    var left = leftTexture(size, size, Manager.paint);
    var right = rightTexture(size, size, Manager.paint);
    var two = twoTexture(size, size, Manager.paint);
    var check = checkTexture(size, size, Manager.paint);
    this.shapeSprite = new PIXI.UI.Sprite(rec);

    this.shapeEvent = function (e) {
      if (document.dragging) {
        this$1$1.shapeSprite.alpha = this$1$1._alpha;
        this$1$1.shapeSprite.x = this$1$1.startPos.offsetX;
        this$1$1.shapeSprite.y = this$1$1.startPos.offsetY;
        var dx = this$1$1.startPos.offsetX - e.offsetX;
        var dy = this$1$1.startPos.offsetY - e.offsetY;
        var width = Math.abs(dx);
        var height = Math.abs(dy);
        this$1$1.shapeSprite.width = width;
        this$1$1.shapeSprite.height = height;
        this$1$1.shapeSprite.tint = this$1$1._color;
        this$1$1.shapeSprite.rotation = 0;

        if (dx >= 0) {
          this$1$1.shapeSprite.pivotX = 1;
        } else {
          this$1$1.shapeSprite.pivotX = 0;
        }

        if (dy >= 0) {
          this$1$1.shapeSprite.pivotY = 1;
        } else {
          this$1$1.shapeSprite.pivotY = 0;
        }

        switch (this$1$1.shape) {
          case "strokeRec":
            this$1$1.shapeSprite.sprite.texture = strokeRec;
            break;

          case "strokeCir":
            this$1$1.shapeSprite.sprite.texture = strokeCir;
            break;

          case "strokeTri":
            this$1$1.shapeSprite.sprite.texture = strokeTri;
            break;

          case "strokehex":
            this$1$1.shapeSprite.sprite.texture = strokehex;
            break;

          case "strokestar":
            this$1$1.shapeSprite.sprite.texture = strokeStar;
            break;

          case "rec":
            this$1$1.shapeSprite.sprite.texture = rec;
            break;

          case "cir":
            this$1$1.shapeSprite.sprite.texture = cir;
            break;

          case "tri":
            this$1$1.shapeSprite.sprite.texture = tri;
            break;

          case "hex":
            this$1$1.shapeSprite.sprite.texture = hex;
            break;

          case "star":
            this$1$1.shapeSprite.sprite.texture = star;
            break;

          case "left":
            this$1$1.shapeSprite.sprite.texture = left;
            break;

          case "right":
            this$1$1.shapeSprite.sprite.texture = right;
            break;

          case "check":
            this$1$1.shapeSprite.sprite.texture = check;
            break;

          case "two":
            this$1$1.shapeSprite.sprite.texture = two;
            break;
        }

        this$1$1.con.addChild(this$1$1.shapeSprite);
      }
    };
  };

  PaintEvents.prototype.prepareEraser = function prepareEraser() {
    this.eraserEvent = function () {
      if (document.dragging) {
        document.removing = true;
      }
    };
  };

  PaintEvents.prototype.prepareSelect = function prepareSelect() {
    this.selectEvent = function () {};
  };

  Object.defineProperties(PaintEvents.prototype, prototypeAccessors);

  var WebPaintCon = /*@__PURE__*/function (superclass) {
    function WebPaintCon(page, nowPage, LeftBtn, RightBtn) {
      var ratioY = Manager.ratioY;
      superclass.call(this, "100%", 925 * ratioY);
      this.inputCon = new PIXI.UI.Container("100%", "100%");
      this.con = new PIXI.UI.Container("100%", "100%");
      this.tCon = new PIXI.UI.Container("100%", "100%");
      this.con.container.sortableChildren = true;
      this.tCon.container.sortableChildren = true;
      Manager.paintStage.addChild(this.con, this.tCon, this.inputCon);
      this.graphic = new PIXI.Graphics();
      this.events = new PaintEvents(this.con, this.tCon, this.inputCon, this.graphic);
      Manager.paintArr = [];
      this.nowPage = nowPage;
      this.page = page;
      this.prevPage = this.nowPage - 2;
      this.nextPage = this.nowPage + 2;
      this.LeftBtn = LeftBtn;
      this.RightBtn = RightBtn;
      this.sectionColor();
      this.sectionText();
      this.sectionDraw();
      this.sectionButtonEct();
      this.eventHandler();
    }

    if (superclass) WebPaintCon.__proto__ = superclass;
    WebPaintCon.prototype = Object.create(superclass && superclass.prototype);
    WebPaintCon.prototype.constructor = WebPaintCon;

    WebPaintCon.prototype.updateIndex = function updateIndex(num) {
      this.nowPage = num;
      this.prevPage = num - 2;
      this.nextPage = num + 2;
    };

    WebPaintCon.prototype.makeBtn = function makeBtn(img, text, name, width, height, left, w) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var button = new ButtonHandler({
        width: width,
        height: height,
        line: 1.5,
        lineColor: color.button,
        rounded: 5,
        img: img
      });
      button.addText({
        text: text,
        style: fontstyle.Black15_R,
        name: name
      });
      button[name].verticalAlign = "middle";
      button[name].anchorLeft = left * ratioX;
      button.button.horizontalAlign = "center";

      if (img.url) {
        button[img.url].anchorLeft = 35 * ratioX;
        button[img.url].verticalAlign = "middle";
        button[img.url].width *= ratioX;
        button[img.url].height *= ratioX;
      }

      button.onClick(function () {
        this$1$1.selected = button;
        this$1$1.tooltip.visible = false;
        this$1$1.buttonArray.map(function (btn) {
          if (btn === button) {
            button.backgroundColor = color.button;
          } else {
            btn.backgroundColor = color.white;
          }
        });
      });
      return button;
    };

    WebPaintCon.prototype.makeIconButton = function makeIconButton(img) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var button = new ButtonHandler({
        width: 56 * ratioX,
        height: 56 * ratioX,
        line: 1.5,
        lineColor: color.button,
        rounded: 5,
        img: img
      });
      button[img.url].horizontalAlign = "center";
      button[img.url].verticalAlign = "middle";
      button[img.url].width *= ratioX;
      button[img.url].height *= ratioX;
      button.onClick(function () {
        this$1$1.tooltip.visible = false;
        this$1$1.buttonArray.map(function (btn) {
          if (btn === button) {
            button.backgroundColor = color.button;
          } else {
            btn.backgroundColor = color.white;
          }
        });
        this$1$1.selected = button;
      });
      return button;
    };

    WebPaintCon.prototype.makeShapeButton = function makeShapeButton(texture, width, height, x, y, shape) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var button = new ButtonHandler({
        width: 30 * ratioX,
        height: 30 * ratioX,
        line: 1.5,
        lineColor: color.button,
        rounded: 5
      });
      button.pos(x, y);
      var img = new PIXI.UI.Sprite(texture);
      img.width = width;
      img.height = height;
      img.horizontalAlign = "center";
      img.verticalAlign = "middle";
      button.button.addChild(img);
      button.onClick(function () {
        this$1$1.shapesArray.map(function (btn) {
          if (btn === button) {
            button.backgroundColor = color.button;
          } else {
            btn.backgroundColor = color.white;
          }
        });
        this$1$1.shape = shape;
      });
      return button;
    };

    WebPaintCon.prototype.sectionDraw = function sectionDraw() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var background = new LineSprte(199 * ratioX, 142 * ratioY, color.lightGray);
      background.anchorLeft = 1 * ratioX;
      background.anchorTop = 60 * ratioY;
      var shapes_tooltipt = new PIXI.Texture.from("shapes_tooltip"),
          tooltip = new PIXI.UI.Sprite(shapes_tooltipt);
      tooltip.width = 179 * ratioX;
      tooltip.height = 175 * ratioY;
      tooltip.horizontalAlign = "center";
      tooltip.anchorTop = 185 * ratioY;
      this.tooltip = tooltip;
      var strokeRec = this.makeShapeButton(new PIXI.Texture.from("rec_stroke"), 17 * ratioX, 17 * ratioX, 7 * ratioX, 20 * ratioY, "strokeRec", 0x333333);
      var strokeCir = this.makeShapeButton(new PIXI.Texture.from("cir_stroke"), 17 * ratioX, 17 * ratioX, 41 * ratioX, 20 * ratioY, "strokeCir", 0x333333);
      var strokeTri = this.makeShapeButton(new PIXI.Texture.from("tri_stroke"), 19 * ratioX, 16 * ratioY, 75 * ratioX, 20 * ratioY, "strokeTri", 0x333333);
      var strokehex = this.makeShapeButton(new PIXI.Texture.from("hex_stroke_new"), 17 * ratioX, 17 * ratioX, 109 * ratioX, 20 * ratioY, "strokehex", 0x333333);
      var strokeStar = this.makeShapeButton(new PIXI.Texture.from("star_stroke"), 19 * ratioX, 19 * ratioX, 143 * ratioX, 20 * ratioY, "strokestar", 0x333333);
      var rec = this.makeShapeButton(new PIXI.Texture.from("rec"), 17 * ratioX, 17 * ratioX, 7 * ratioX, 54 * ratioY, "rec", color.red);
      var cir = this.makeShapeButton(new PIXI.Texture.from("cir"), 17 * ratioX, 17 * ratioX, 41 * ratioX, 54 * ratioY, "cir", color.red);
      var tri = this.makeShapeButton(new PIXI.Texture.from("tri"), 19 * ratioX, 16 * ratioY, 75 * ratioX, 54 * ratioY, "tri", color.red);
      var hex = this.makeShapeButton(new PIXI.Texture.from("hex"), 17 * ratioX, 17 * ratioX, 109 * ratioX, 54 * ratioY, "hex", color.red);
      var star = this.makeShapeButton(new PIXI.Texture.from("star"), 19 * ratioX, 19 * ratioX, 143 * ratioX, 54 * ratioY, "star", color.red);
      var check = this.makeShapeButton(new PIXI.Texture.from("check_new"), 18 * ratioX, 9 * ratioX, 7 * ratioX, 88 * ratioY, "check", color.red);
      var right = this.makeShapeButton(new PIXI.Texture.from("arrow_right_new"), 18 * ratioX, 9 * ratioX, 41 * ratioX, 88 * ratioY, "right", color.red);
      var left = this.makeShapeButton(new PIXI.Texture.from("arrow_left_new"), 18 * ratioX, 9 * ratioX, 75 * ratioX, 88 * ratioY, "left", color.red);
      var two = this.makeShapeButton(new PIXI.Texture.from("two_way_arrow_new"), 19 * ratioX, 9 * ratioX, 109 * ratioX, 88 * ratioY, "two", color.red);
      tooltip.visible = false;
      tooltip.addChild(strokeRec.button, strokeCir.button, strokeTri.button, strokehex.button, strokeStar.button, rec.button, cir.button, tri.button, hex.button, star.button, check.button, left.button, right.button, two.button);
      this.shapesArray = [strokeRec, strokeCir, strokeRec, strokeTri, strokehex, strokeStar, rec, cir, tri, hex, star, left, right, check, two];
      strokeRec.button.emit("click");
      this.penButton = this.makeIconButton({
        url: "pen_icon"
      });
      this.hlButton = this.makeIconButton({
        url: "hl_icon"
      });
      this.shapesButton = this.makeIconButton({
        url: "shapes_icon"
      });
      this.penButton.button.anchorLeft = this.shapesButton.button.anchorRight = 10 * ratioX;
      this.hlButton.button.horizontalAlign = "center";
      this.penButton.button.anchorTop = this.hlButton.button.anchorTop = this.shapesButton.button.anchorTop = 122 * ratioY;
      var widthText = new PIXI.UI.Text("펜두께", fontstyle.Black15_R);
      widthText.anchorLeft = 10 * ratioX;
      widthText.anchorTop = 215 * ratioY;
      var slider = new Slider(0xe95c63, 0xd9d9d9, 170 * ratioX, 6 * ratioX, 10 * ratioX);
      slider.anchorTop = 255 * ratioY;
      slider.horizontalAlign = "center";
      slider.value = 12;
      this.penSlider = slider;
      this.addChild(background, this.penButton.button, this.hlButton.button, this.shapesButton.button, widthText, slider, tooltip);
    };

    WebPaintCon.prototype.sectionText = function sectionText() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.insertBtn = this.makeBtn({
        url: "text_icon"
      }, "글씨 넣기", "inputtext", 160 * ratioX, 44 * ratioY, 60, 15);
      this.insertBtn.button.anchorTop = 313 * ratioY;
      var title = new PIXI.UI.Text("글씨 크기", fontstyle.Black15_R);
      title.anchorLeft = 10 * ratioX;
      title.anchorTop = 380 * ratioY;
      var slider = new Slider(0xe95c63, 0xd9d9d9, 170 * ratioX, 6 * ratioX, 10 * ratioX);
      slider.anchorTop = 420 * ratioY;
      slider.horizontalAlign = "center";
      slider.value = 12;
      this.textSlider = slider;
      this.addChild(this.insertBtn.button, slider, title);
    };

    WebPaintCon.prototype.sectionColor = function sectionColor() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var title = new PIXI.UI.Text("색상", fontstyle.Black15_R);
      title.anchorLeft = 10 * ratioX;
      title.anchorTop = 483 * ratioY;
      var colors = [0xffffff, 0x000000, 0xe9352e, 0xe76b86, 0xfac6cb, 0xbb63ee, 0x006fff, 0x50d518, 0xffd500, 0xf79c64];
      var checkTexture = new PIXI.Texture.from("color");
      var size = 29 * ratioX;
      var colorContainer = new PIXI.UI.Container(173 * ratioX, 115 * ratioY);
      var check = new PIXI.UI.Sprite(checkTexture);
      check.width = 12 * ratioX;
      check.height = 10 * ratioY;
      check.verticalAlign = "middle";
      check.horizontalAlign = "center";
      check.tint = color.Gray;
      colors.forEach(function (element, idx) {
        var graphic = new PIXI.Graphics();
        graphic.clear();
        graphic.lineStyle(1.5, 0xbbbbbb, 1, 1, true);
        graphic.beginFill(element);
        graphic.drawRoundedRect(0, 0, size, size, 2);
        graphic.endFill();
        var sp = new GraphicsSprite(graphic);
        sp.sprite.buttonMode = true;
        sp.sprite.interactive = true;
        sp.x = idx % 5 * 36 * ratioX;
        sp.y = Math.floor(idx / 5) * (6 * ratioY + size);
        sp.sprite.on("click", function () {
          this$1$1.selectColor = element;
          this$1$1.isInput = false;
          sp.addChild(check);
        });
        colorContainer.addChild(sp);

        if (idx === 1) {
          this$1$1.selectColor = element;
          sp.addChild(check);
        }
      });
      colorContainer.anchorTop = 520 * ratioY;
      colorContainer.horizontalAlign = "center";
      var alphaText = new PIXI.UI.Text("불투명도 (%)", fontstyle.Black15_R);
      alphaText.anchorLeft = 10 * ratioX;
      alphaText.anchorTop = 630 * ratioY;
      var slider = new Slider(0xe95c63, 0xd9d9d9, 170 * ratioX, 6 * ratioX, 10 * ratioX);
      slider.value = 100;
      slider.anchorTop = 665 * ratioY;
      slider.horizontalAlign = "center";
      this.alphaSlider = slider;
      this.addChild(colorContainer, title, slider, alphaText);
    };

    WebPaintCon.prototype.sectionButtonEct = function sectionButtonEct() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.selectBtn = this.makeBtn({
        url: ""
      }, "선택", "select", 177 * ratioX, 44 * ratioY, 73, 26);
      this.eraserBtn = this.makeBtn({
        url: ""
      }, "지우개", "eraser", 177 * ratioX, 44 * ratioY, 66, 22);
      this.trashBtn = this.makeBtn({
        url: ""
      }, "전체 지우기", "trash", 177 * ratioX, 44 * ratioY, 50, 22);
      this.saveBtn = this.makeBtn({
        url: ""
      }, "저장하기", "save", 177 * ratioX, 44 * ratioY, 58, 22);
      this.selectBtn.button.anchorTop = 71 * ratioY;
      this.eraserBtn.button.anchorBottom = 160 * ratioY;
      this.trashBtn.button.anchorBottom = 100 * ratioY;
      this.saveBtn.button.anchorBottom = 40 * ratioY;
      this.addChild(this.selectBtn.button, this.eraserBtn.button, this.trashBtn.button, this.saveBtn.button);
      this.buttonArray = [this.selectBtn, this.eraserBtn, this.penButton, this.hlButton, this.shapesButton, this.insertBtn];
    };

    WebPaintCon.prototype.removeTextInput = function removeTextInput() {
      while (this.inputCon.children[0]) {
        this.inputCon.removeChild(this.inputCon.children[0]);
      }
    };

    WebPaintCon.prototype.savePaint = function savePaint(sp) {
      Manager.paintArr.push(sp);
      Manager.paintMap.set(this.nowPage, {
        con: Manager.paintArr,
        events: this.events
      });
    };

    WebPaintCon.prototype.removePaint = function removePaint() {
      while (this.con.children.length) {
        this.con.removeChild(this.con.children[0]);
      }

      while (this.tCon.children.length) {
        this.tCon.removeChild(this.tCon.children[0]);
      }

      while (this.inputCon.children.length) {
        this.inputCon.removeChild(this.inputCon.children[0]);
      }
    };

    WebPaintCon.prototype.setPaint = function setPaint(page) {
      for (var i = 0; i < Manager.paintArr.length; i++) {
        this.con.addChild(Manager.paintMap.get(page).con[i]);
      }

      this.events = Manager.paintMap.get(page).events;
    };

    WebPaintCon.prototype.checkPaint = function checkPaint(page) {
      if (Manager.paintMap.has(page)) {
        Manager.paintArr = Manager.paintMap.get(page).con;
        this.setPaint(page);
      } else {
        Manager.paintArr = [];
      }
    };

    WebPaintCon.prototype.eventHandler = function eventHandler() {
      var this$1$1 = this;
      var paint_canvas = document.getElementById("paint_canvas");
      this.moveFunc = null;
      document.removing = false;
      this.number = 0;
      this.isInput = false;
      Manager.paintMap = new Map();

      var addevent = function addevent() {
        paint_canvas.addEventListener("mouseup", onDragEnd);
        paint_canvas.addEventListener("mouseout", onDragEnd);
        paint_canvas.addEventListener("mousemove", this$1$1.moveFunc);
      };

      var onDragStart = function onDragStart(e) {
        this$1$1.events.shapeSprite.container.zIndex = this$1$1.events.shapeSprite.container._lastSortedIndex = this$1$1.number;
        this$1$1.graphic.minX = e.offsetX;
        this$1$1.graphic.minY = e.offsetY;
        this$1$1.events.penThickness = this$1$1.penSlider.value;
        this$1$1.events.fontSize = this$1$1.textSlider.value;
        this$1$1.events.alpha = this$1$1.alphaSlider.value / 100;
        this$1$1.events.color = this$1$1.selectColor;
        this$1$1.events.setstartPos = {
          offsetX: e.offsetX,
          offsetY: e.offsetY
        };

        switch (this$1$1.selected) {
          case this$1$1.penButton:
            paint_canvas.style.cursor = "crosshair";
            document.dragging = true;
            addevent();
            break;

          case this$1$1.hlButton:
            paint_canvas.style.cursor = "crosshair";
            document.dragging = true;
            addevent();
            break;

          case this$1$1.selectBtn:
            document.dragging = true;
            document.selecting = true;
            break;

          case this$1$1.insertBtn:
            document.dragging = false;

            if (!this$1$1.isInput) {
              var text = this$1$1.events.textEvent(e, this$1$1.number);
              this$1$1.inputText = this$1$1.events.text;
              dragableText(text, this$1$1.inputText);
              this$1$1.isInput = true;
            } else {
              this$1$1.selected = null;
              this$1$1.insertBtn.backgroundColor = color.white;
            }

            break;

          case this$1$1.shapesButton:
            this$1$1.events.shape = this$1$1.shape;
            document.dragging = true;
            addevent();
            break;

          case this$1$1.eraserBtn:
            document.dragging = true;
            document.removing = true;
            addevent();
            break;

          case this$1$1.trashBtn:
            document.dragging = false;
            break;

          case this$1$1.saveBtn:
            document.dragging = false;
            break;
        }
      };

      var that = this;

      function DragStart(event) {
        if (document.selecting) {
          that.number += 1;
          this.parent.zIndex = that.number;
          this.parent._lastSortedIndex = that.number;
          this.data = event.data;
          this.dragging = true;
        }
      }

      function DragEnd() {
        this.dragging = false;
        this.data = null;
      }

      function DragMove() {
        if (this.dragging && document.selecting) {
          var newPosition = this.data.getLocalPosition(this.parent);
          this.x = newPosition.x - this.width / 2;
          this.y = newPosition.y - this.height / 2;
        }
      }

      function onPointerOver() {
        if (document.removing) {
          this.parent.removeChild(this);
        } else if (that.selected === that.eraserBtn) {
          this.alpha = this.savedAlpha * 0.7;
        } else if (that.selected === that.selectBtn) {
          this.alpha = this.savedAlpha * 0.7;
        }
      }

      function onPointerOut() {
        this.alpha = this.savedAlpha;
      }

      function onClick() {
        if (that.selected === that.eraserBtn) {
          this.alpha = this.savedAlpha * 0.7;
          this.parent.removeChild(this);
        }

        if (that.selected === that.selectBtn) {
          paint_canvas.style.cursor = "move";
          this.alpha = this.savedAlpha * 0.7;
        }
      }

      function onTextClick() {
        if (that.selected === that.eraserBtn) {
          this.alpha = this.savedAlpha * 0.7;
          this.pixiUICon.parent.removeChild(this.pixiUICon);
          var idx = Manager.paintArr.indexOf(this.pixiUICon);
          Manager.paintArr.splice(idx, 1);
        }

        if (that.selected === that.selectBtn) {
          paint_canvas.style.cursor = "move";
          this.alpha = this.savedAlpha * 0.7;
        }
      }

      var dragableText = function dragableText(text, inputText) {
        this$1$1.number += 1;
        inputText.interactive = true;
        inputText.buttonMode = true;
        inputText.container.zIndex = this$1$1.number;
        inputText.container._lastSortedIndex = this$1$1.number;
        inputText.container.savedAlpha = 1;
        text.interactive = true;
        text.buttonMode = true;
        text.container.zIndex = this$1$1.number;
        text.container._lastSortedIndex = this$1$1.number;
        text.container.savedAlpha = 1;
        text.container.pixiUICon = text;
        text.container.on("mousedown", function (event) {
          if (document.selecting) {
            that.number += 1;
            this.zIndex = that.number;
            this._lastSortedIndex = that.number;
            this.data = event.data;
            this.dragging = true;
          }
        }).on("mouseup", DragEnd).on("mouseupoutside", DragEnd).on("mousemove", function () {
          if (this.dragging && document.selecting) {
            var newPosition = this.data.getLocalPosition(this.parent);
            text.x = newPosition.x - text.width / 2;
            text.y = newPosition.y - text.height / 2;
          }
        }).on("pointerover", onPointerOver).on("pointerout", onPointerOut).on("click", onTextClick);
        this$1$1.savePaint(text);
      };

      var canvasSprite = function canvasSprite() {
        var texture = Manager.paint.renderer.generateTexture(this$1$1.graphic);
        var sp = new PIXI.UI.Sprite(texture);
        var minX = this$1$1.graphic.minX;
        var minY = this$1$1.graphic.minY;
        sp.x = minX - this$1$1.penSlider.value / 2;
        sp.y = minY - this$1$1.penSlider.value / 2;
        sp.sprite.savedAlpha = sp.alpha;
        sp.sprite.interactive = true;
        this$1$1.number += 1;
        sp.container.zIndex = this$1$1.number;
        sp.container._lastSortedIndex = this$1$1.number;
        sp.sprite.on("mousedown", DragStart).on("mouseup", DragEnd).on("mouseupoutside", DragEnd).on("mousemove", DragMove).on("pointerover", onPointerOver).on("pointerout", onPointerOut).on("click", onClick);
        this$1$1.graphic.clear();
        return sp;
      };

      var canvasShape = function canvasShape() {
        var sp = new PIXI.UI.Sprite(this$1$1.events.shapeSprite.sprite.texture);
        sp.pivotX = this$1$1.events.shapeSprite.pivotX;
        sp.pivotY = this$1$1.events.shapeSprite.pivotY;
        sp.rotation = this$1$1.events.shapeSprite.rotation;
        sp.x = this$1$1.events.shapeSprite.x;
        sp.y = this$1$1.events.shapeSprite.y;
        sp.alpha = this$1$1.events.shapeSprite.alpha;
        sp.sprite.savedAlpha = sp.alpha;
        sp.width = this$1$1.events.shapeSprite.width;
        sp.height = this$1$1.events.shapeSprite.height;
        sp.tint = this$1$1.events.shapeSprite.tint;
        sp.sprite.interactive = true;
        this$1$1.number += 1;
        sp.container.zIndex = this$1$1.number;
        sp.container._lastSortedIndex = this$1$1.number;
        sp.sprite.on("mousedown", DragStart).on("mouseup", DragEnd).on("mouseout", DragEnd).on("mousemove", DragMove).on("pointerover", onPointerOver).on("pointerout", onPointerOut).on("click", onClick);
        return sp;
      };

      var onDragEnd = function onDragEnd(e) {
        document.dragging = false;
        document.removing = false;
        document.selecting = false;

        switch (this$1$1.selected) {
          case this$1$1.penButton:
            var sp = canvasSprite();
            this$1$1.con.addChild(sp);
            this$1$1.events.penPaths = [];
            this$1$1.events.polypath = [];
            this$1$1.events.reversPath = [];
            this$1$1.savePaint(sp);
            break;

          case this$1$1.hlButton:
            var hl = canvasSprite();
            this$1$1.con.addChild(hl);
            this$1$1.events.penPaths = [];
            this$1$1.events.polypath = [];
            this$1$1.savePaint(hl);
            break;

          case this$1$1.shapesButton:
            var shapeSp = canvasShape();
            this$1$1.con.addChild(shapeSp);
            this$1$1.con.removeChild(this$1$1.events.shapeSprite);
            this$1$1.savePaint(shapeSp);
            break;
        }

        paint_canvas.removeEventListener("mouseup", onDragEnd);
        paint_canvas.removeEventListener("mouseout", onDragEnd);
        paint_canvas.removeEventListener("mousemove", this$1$1.moveFunc);
      };

      this.penButton.onClick(function () {
        document.selecting = false;
        paint_canvas.style.cursor = "crosshair";
        this$1$1.moveFunc = this$1$1.events.penEvent;
      });
      this.selectBtn.onClick(function () {
        document.selecting = true;
        paint_canvas.style.cursor = "move";
        this$1$1.moveFunc = this$1$1.events.selectEvent;
      });
      this.hlButton.onClick(function () {
        document.selecting = false;
        paint_canvas.style.cursor = "crosshair";
        this$1$1.moveFunc = this$1$1.events.hlEvent;
      });
      this.shapesButton.onClick(function () {
        paint_canvas.style.cursor = "crosshair";
        document.selecting = false;
        this$1$1.tooltip.visible = true;
        this$1$1.moveFunc = this$1$1.events.shapeEvent;
      });
      this.insertBtn.onClick(function () {
        document.selecting = false;
        this$1$1.isInput = false;
        paint_canvas.style.cursor = "text";
      });
      this.eraserBtn.onClick(function () {
        document.selecting = false;
        this$1$1.isInput = false;
        paint_canvas.style.cursor = "crosshair";
        this$1$1.moveFunc = this$1$1.events.eraserEvent;
      });
      this.saveBtn.onClick(function () {
        document.selecting = false;
        paint_canvas.style.cursor = "default";
        var canvas = document.getElementById("paint_canvas");
        canvas.style.display = "block";
        Manager.backGroundON();
        Manager.paint.renderer.extract.canvas(Manager.paint.stage).toBlob(function (b) {
          var a = document.createElement("a");
          document.body.append(a);
          a.download = "peach-bookcases";
          a.href = URL.createObjectURL(b);
          a.click();
          a.remove();
        }, "peach-bookcases/png");
        Manager.backGroundOFF();
      });
      this.trashBtn.onClick(function () {
        while (this$1$1.con.children[0] || this$1$1.tCon.children[0] || this$1$1.inputCon.children[0]) {
          this$1$1.con.removeChild(this$1$1.con.children[0]);
          this$1$1.tCon.removeChild(this$1$1.tCon.children[0]);
          this$1$1.inputCon.removeChild(this$1$1.inputCon.children[0]);
        }

        Manager.paintArr = [];
        Manager.paintMap.delete(this$1$1.nowPage);
      });
      this.RightBtn.sprite.on('click', function () {
        if (Manager.isPaint) {
          if (this$1$1.nowPage >= this$1$1.page) {
            return;
          }

          this$1$1.nowPage++;
          this$1$1.removePaint();
          this$1$1.checkPaint(this$1$1.nowPage);
        }
      });
      this.LeftBtn.sprite.on('click', function () {
        if (Manager.isPaint) {
          if (this$1$1.nowPage <= 1) {
            return;
          }

          this$1$1.nowPage--;
          this$1$1.removePaint();
          this$1$1.checkPaint(this$1$1.nowPage);
        }
      });
      paint_canvas.addEventListener("mousedown", onDragStart);
    };

    return WebPaintCon;
  }(PIXI.UI.Container);

  var RoundedMaskCon = /*@__PURE__*/function (superclass) {
    function RoundedMaskCon(width, height, radius) {
      superclass.call(this, width, height);
      this.save = {
        width: 0,
        height: 0
      };
      this.radius = radius;
      this.setupMask();
    }

    if (superclass) RoundedMaskCon.__proto__ = superclass;
    RoundedMaskCon.prototype = Object.create(superclass && superclass.prototype);
    RoundedMaskCon.prototype.constructor = RoundedMaskCon;

    RoundedMaskCon.prototype.setupMask = function setupMask() {
      var mask = new PIXI.Graphics();
      this.container.addChild(mask);
      this.container.mask = mask;
      this.resizeUpdate();
    };

    RoundedMaskCon.prototype.resizeUpdate = function resizeUpdate() {
      if (this.actual_width !== this.save.width || this.actual_height !== this.save.height) {
        this.container.mask.clear();
        this.container.mask.lineStyle(0);
        this.container.mask.beginFill(0xffffff, 1);
        this.save.width = this.actual_width;
        this.save.height = this.actual_height;
        this.container.mask.drawRoundedRect(0, 0, this.save.width, this.save.height);
        this.container.mask.endFill();
      }
    };

    RoundedMaskCon.prototype.border = function border() {
      var graphic = new PIXI.Graphics();
      graphic.clear();
      graphic.lineStyle(1, 0xcfcfcf, 1, 1);
      graphic.drawRoundedRect(0, 0, this.save.width - 1, this.save.height);
      graphic.endFill();
      var sprite = new GraphicsSprite(graphic);
      this.addChild(sprite);
    };

    return RoundedMaskCon;
  }(PIXI.UI.Container);

  var FullPageContainer = /*@__PURE__*/function (superclass) {
    function FullPageContainer(thumbArr, queueRenderPage) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      superclass.call(this, PIXI.Texture.WHITE);
      this.width = 1722 * ratioX;
      this.height = "100%";
      this.sprite.interactive = true;
      this.superCon = new PIXI.UI.Container("100%", "100%");
      this.sprite.on("close", function () {
        this$1$1.parent.removeChild(this$1$1);
      });
      this.addChild(this.superCon);
      this.makeThumbNail(thumbArr, queueRenderPage);
      this.renderSmallPages();
    }

    if (superclass) FullPageContainer.__proto__ = superclass;
    FullPageContainer.prototype = Object.create(superclass && superclass.prototype);
    FullPageContainer.prototype.constructor = FullPageContainer;

    FullPageContainer.prototype.makeButtons = function makeButtons() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var arrowLeft = new PIXI.Texture.from("triangleL");
      var arrowRight = new PIXI.Texture.from("triangleR");
      var leftSp = new PIXI.UI.Sprite(arrowLeft);
      var RightSp = new PIXI.UI.Sprite(arrowRight);
      leftSp.tint = RightSp.tint = color.arrow;
      leftSp.verticalAlign = RightSp.verticalAlign = "middle";
      leftSp.width = RightSp.width = 27 * ratioX;
      leftSp.height = RightSp.height = 42 * ratioY;
      leftSp.sprite.interactive = true;
      leftSp.sprite.buttonMode = true;
      RightSp.sprite.interactive = true;
      RightSp.sprite.buttonMode = true;
      leftSp.anchorLeft = RightSp.anchorRight = 5 * ratioX;
      leftSp.sprite.on("click", function () {
        if (this$1$1.idx <= 0) {
          this$1$1.idx = 0;
          return;
        } else {
          this$1$1.idx -= 1;
          this$1$1.renderSmallPages();
        }
      });
      RightSp.sprite.on("click", function () {
        if (this$1$1.idx >= this$1$1.containerArr.length - 1) {
          this$1$1.idx = this$1$1.containerArr.length - 1;
          return;
        } else {
          this$1$1.idx += 1;
          this$1$1.renderSmallPages();
        }
      });
      this.addChild(RightSp, leftSp);
    };

    FullPageContainer.prototype.makeThumbNail = function makeThumbNail(thumbArr, queueRenderPage) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.idx = 0;
      var pages = Math.ceil(thumbArr.length / 12);
      this.containerArr = new Array(pages);

      var loop = function loop(j) {
        var temp = [];

        var loop$1 = function loop$1(i) {
          var texture = thumbArr[j * 12 + i];

          if (texture) {
            var con = new RoundedMaskCon(386 * ratioX, 260 * ratioY, 13);
            var sp = new PIXI.UI.Sprite(texture);
            sp.sprite.interactive = sp.sprite.buttonMode = true;
            sp.sprite.on("click", function () {
              queueRenderPage(j * 12 + i + 1);
              this$1$1.sprite.emit("close");
              Manager.currentScene.webMenu.clickEventHandler(undefined);
              Manager.isGather = false;
              Manager.currentScene.RightBtn.sprite.interactive = Manager.currentScene.LeftBtn.sprite.interactive = true;
              Manager.currentScene.webMenu.gatherBtn.backgroundColor = color.white;
              Manager.currentScene.box.removeChild(Manager.currentScene.box.children.at(-1));
              Manager.currentScene.con.removeChild(Manager.currentScene.box);
              Manager.currentScene.con.addChild(Manager.currentScene.RightBtn, Manager.currentScene.LeftBtn);
            });
            con.anchorLeft = i % 4 * (23 * ratioX + con.width) + 52 * ratioX;
            con.anchorTop = Math.floor(i / 4) * (20 * ratioY + con.height) + 144 * ratioY;
            con.addChild(sp);
            con.border();
            temp.push(con);
          } else {
            return 'break';
          }

          this$1$1.containerArr[j] = temp;
        };

        for (var i = 0; i < 12; i++) {
          var returned = loop$1(i);
          if (returned === 'break') break;
        }
      };

      for (var j = 0; j < pages; j++) {
        loop(j);
      }
    };

    FullPageContainer.prototype.renderSmallPages = function renderSmallPages() {
      var this$1$1 = this;

      while (this.superCon.children[0]) {
        this.superCon.removeChild(this.superCon.children[0]);
      }

      this.containerArr[this.idx].forEach(function (element) {
        this$1$1.superCon.addChild(element);
      });
    };

    return FullPageContainer;
  }(PIXI.UI.Sprite);

  var WebBookmarkCon = /*@__PURE__*/function (superclass) {
    function WebBookmarkCon(bookmarkArr, thumbArr, Viewer) {
      var ratioY = Manager.ratioY;
      superclass.call(this, "100%", 902 * ratioY);
      this.mySet = bookmarkArr;
      this.thumbArr = thumbArr;
      this.ShowRegisteredpage();
      this.makeHeaderButton();
      this.viewer = Viewer;
    }

    if (superclass) WebBookmarkCon.__proto__ = superclass;
    WebBookmarkCon.prototype = Object.create(superclass && superclass.prototype);
    WebBookmarkCon.prototype.constructor = WebBookmarkCon;

    WebBookmarkCon.prototype.updateSavepage = function updateSavepage() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;

      while (this.listCon.children[0]) {
        this.listCon.removeChild(this.listCon.children[0]);
      }

      this.listCon.height = 199 * this.pageList.length * ratioY;

      if (this.pageList.length < 5) {
        this.savedLine.alpha = 0;
      } else {
        this.savedLine.alpha = 1;
      }

      if (this.pageList.length === 0) {
        this.noneTxt.visible = true;
      } else {
        this.noneTxt.visible = false;
      }

      var xtexture = sXTexture(12 * ratioX);
      var bookmarkT = bookmarkTexture(12 * ratioX, 18 * ratioY);

      var loop = function loop(i) {
        var num = this$1$1.pageList[i];
        var texture = this$1$1.thumbArr[num - 1];
        var con = new PIXI.UI.Container(165 * ratioX, 140 * ratioY);
        var spCon = new RoundedMaskCon(165 * ratioX, 105 * ratioY, 5);
        var sp = new PIXI.UI.Sprite(texture);
        var bookmark = new PIXI.UI.Sprite(bookmarkT);
        var pageText = new PIXI.UI.Text(num + " 페이지", fontstyle.Black17_R);
        var x_btn = new PIXI.UI.Sprite(xtexture);
        con.anchorLeft = 17 * ratioX;
        pageText.anchorLeft = 18 * ratioX;
        sp.width = con.width;
        sp.height = 105 * ratioY;
        spCon.anchorTop = 35 * ratioX;
        sp.sprite.on('click', function () {
          console.log("bookmark click", num);
          this$1$1.viewer.queueRenderPage(num);
        });
        sp.sprite.interactive = sp.sprite.buttonMode = true;
        x_btn.tint = 0x717171;
        x_btn.anchorRight = 0;
        x_btn.sprite.interactive = x_btn.sprite.buttonMode = true;
        x_btn.sprite.on("click", function () {
          var a = "";
          this$1$1.mySet.forEach(function (value) {
            a += value + "#";
          });
          delete_bookmark(Data.story_num, a, function (res) {
            this$1$1.mySet.delete(num);
            a = "";
            this$1$1.mySet.forEach(function (value) {
              a += value + "#";
            });
            set_bookmark(Data.story_num, a, function (res) {
              this$1$1.pageList = Array.from(this$1$1.mySet);
              this$1$1.pageList.sort(function (a, b) {
                return a - b;
              });
              this$1$1.updateSavepage();
            });
          });
        });
        con.y = (19 + i * 180) * ratioY;
        spCon.addChild(sp);
        con.addChild(spCon, bookmark, x_btn, pageText);
        this$1$1.listCon.addChild(con);
      };

      for (var i = 0; i < this$1$1.pageList.length; i++) {
        loop(i);
      }
    };

    WebBookmarkCon.prototype.makeHeaderButton = function makeHeaderButton() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var con = new PIXI.UI.Container("100%", 104 * ratioY);
      var bookstarT = new PIXI.Texture.from("bookmark_star"),
          bookstar = new PIXI.UI.Sprite(bookstarT);
      bookstar.anchorLeft = 23 * ratioX;
      bookstar.width = 24 * ratioX;
      bookstar.height = 25 * ratioY;
      bookstar.verticalAlign = "middle";
      var backt = new PIXI.Texture.from("btn22"),
          back = new PIXI.UI.Sprite(backt);
      var addBtn = new ButtonHandler({
        lineColor: color.bgBoxBorder,
        line: 3,
        background: back,
        text: {
          name: "책갈피 추가",
          style: fontstyle.Black15_R
        },
        width: 133 * ratioX,
        height: 44 * ratioY
      });
      addBtn.button.anchorRight = 11 * ratioX;
      addBtn.button.verticalAlign = "middle";
      addBtn.onClick(function () {
        var now = document.getElementById("page_input").textContent;
        now = Number(now);

        if (this$1$1.mySet.has(now)) {
          return;
        } else {
          var a = "";
          this$1$1.mySet.forEach(function (value) {
            a += value + "#";
          });
          delete_bookmark(Data.story_num, a, function (res) {
            this$1$1.mySet.add(now);
            a = "";
            this$1$1.mySet.forEach(function (value) {
              a += value + "#";
            });
            set_bookmark(Data.story_num, a, function (res) {
              this$1$1.pageList = Array.from(this$1$1.mySet);
              this$1$1.pageList.sort(function (a, b) {
                return a - b;
              });
              this$1$1.updateSavepage();
            });
          });
        }
      });
      con.anchorTop = 51 * ratioY;
      con.addChild(bookstar, addBtn.button);
      this.addChild(con);
    };

    WebBookmarkCon.prototype.changeCard = function changeCard(arr) {
      var this$1$1 = this;
      this.cardArr.forEach(function (element) {
        this$1$1.listCon.removeChild(element);
      });
      this.cardArr = arr;
      this.updateSaveCard(this.cardArr);
    };

    WebBookmarkCon.prototype.ShowRegisteredpage = function ShowRegisteredpage() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var con = new PIXI.UI.Container("100%", 765 * ratioY);
      var back = new PIXI.UI.Sprite(PIXI.Texture.WHITE);
      var shadow = new LineSprte(199 * ratioX, 2, color.Gray);
      var Text = new PIXI.UI.Text("등록된 책갈피 ", fontstyle.Black16_R);
      var graphic = new PIXI.Graphics();
      graphic.lineStyle(2, 0xffffff);
      graphic.beginFill(0xffffff);
      graphic.drawRoundedRect(0, 0, 10, 10, 10);
      graphic.endFill();
      var t = Manager.app.renderer.generateTexture(graphic),
          listCon = new PIXI.UI.Container("100%", 0),
          ScrollingContainer = new PIXI.UI.ScrollingContainer({
        scrollX: false,
        scrollY: true
      });
      var ScrollBar = new PIXI.UI.ScrollBar({
        track: new PIXI.UI.Sprite(PIXI.Texture.WHITE),
        handle: new PIXI.UI.SliceSprite(t, 5),
        vertical: true,
        scrollingContainer: ScrollingContainer,
        autohide: true
      });
      var verticalLine = new LineSprte(2, 689 * ratioY, color.line);
      var noneTxt = new PIXI.UI.Text("등록된 책갈피가 없습니다.", fontstyle.Black14_R);
      noneTxt.horizontalAlign = "center";
      noneTxt.anchorTop = 85 * ratioY;
      noneTxt.visible = false;
      this.noneTxt = noneTxt;
      con.anchorTop = 155 * ratioY;
      back.width = 199 * ratioX;
      back.height = 45 * ratioY;
      back.horizontalAlign = "center";
      back.tint = color.lightGray;
      shadow.alpha = 0.5;
      shadow.anchorBottom = 0;
      Text.verticalAlign = "middle";
      Text.horizontalAlign = "center";
      ScrollingContainer.width = "100%";
      ScrollingContainer.dragThreshold = 5;
      ScrollingContainer.dragRestrictAxis = "y";
      ScrollingContainer.height = ScrollBar.height = 689 * ratioY;
      ScrollBar.handle.width = 8 * ratioX;
      ScrollBar.track.tint = color.bgBox;
      ScrollBar.handle.tint = color.handle;
      ScrollBar.anchorTop = ScrollingContainer.anchorTop = 50 * ratioY;
      ScrollBar.anchorRight = -4 * ratioX;
      verticalLine.anchorRight = 10 * ratioX;
      verticalLine.anchorTop = 50 * ratioX;
      verticalLine.alpha = 0;
      this.savedLine = verticalLine;
      this.listCon = listCon;
      this.cardScrollingCon = ScrollingContainer;
      this.savedCon = con;
      this.pageList = Array.from(this.mySet);
      this.pageList.sort(function (a, b) {
        return a - b;
      });
      back.addChild(shadow, Text);
      ScrollingContainer.addChild(listCon);
      con.addChild(back, ScrollingContainer, ScrollBar, verticalLine, noneTxt);
      this.addChild(con);
      this.updateSavepage();
    };

    return WebBookmarkCon;
  }(PIXI.UI.Container);

  var TutorialContainer = /*@__PURE__*/function (superclass) {
    function TutorialContainer(con) {
      var this$1$1 = this;
      superclass.call(this, "100%", "100%");
      this.filter = new Filter("100%", "100%");
      this.filter.sprite.buttonMode = false;
      var isOpen;

      if (localStorage.getItem("peach_tutorial") === null) {
        localStorage.setItem("peach_tutorial", true);
        isOpen = "true";
      } else {
        isOpen = localStorage.getItem("peach_tutorial");
      }

      this.addChild(this.filter);

      if (isOpen === "true") {
        this.appendMenu();
        con.addChild(this);
      }

      this.container.on("close", function () {
        this$1$1.parent.removeChild(this$1$1);
      });
    }

    if (superclass) TutorialContainer.__proto__ = superclass;
    TutorialContainer.prototype = Object.create(superclass && superclass.prototype);
    TutorialContainer.prototype.constructor = TutorialContainer;

    TutorialContainer.prototype.appendMenu = function appendMenu() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      var MenuArray = [[PIXI.Texture.from("tutorial1")], [PIXI.Texture.from("tutorial2_1"), PIXI.Texture.from("tutorial2_2"), PIXI.Texture.from("tutorial2_3"), PIXI.Texture.from("tutorial2_4"), PIXI.Texture.from("tutorial2_5"), PIXI.Texture.from("tutorial2_6"), PIXI.Texture.from("tutorial2_7")], [PIXI.Texture.from("tutorial3_1"), PIXI.Texture.from("tutorial3_2"), PIXI.Texture.from("tutorial3_3"), PIXI.Texture.from("tutorial3_4")], [PIXI.Texture.from("tutorial4_1"), PIXI.Texture.from("tutorial4_2")], [PIXI.Texture.from("tutorial5_1"), PIXI.Texture.from("tutorial5_2")], [PIXI.Texture.from("tutorial6_1"), PIXI.Texture.from("tutorial6_2")], [PIXI.Texture.from("tutorial7_1"), PIXI.Texture.from("tutorial7_2")], [PIXI.Texture.from("tutorial8_1"), PIXI.Texture.from("tutorial8_2")], [PIXI.Texture.from("tutorial9_1"), PIXI.Texture.from("tutorial9_2")]];
      this.page = 0;
      this.num = 0;
      var menuSprite = new PIXI.UI.Sprite(MenuArray[0][0]);
      menuSprite.width = 1080 * ratioX;
      menuSprite.height = 650 * ratioY;
      menuSprite.verticalAlign = "middle";
      menuSprite.horizontalAlign = "center";
      var x_btn = new PIXI.UI.Sprite(PIXI.Texture.from("tutorial_x"));
      x_btn.width = x_btn.height = 32 * ratioX;
      x_btn.anchorLeft = 1072 * ratioX;
      x_btn.anchorBottom = 645 * ratioY;
      x_btn.sprite.on("click", function () {
        this$1$1.container.emit("close");
      });
      var x_txt = new PIXI.UI.Sprite(PIXI.Texture.from("tutorial_txt"));
      x_txt.width = 268 * ratioX;
      x_txt.height = 24 * ratioY;
      x_txt.anchorTop = 655 * ratioY;
      x_txt.anchorRight = 0;
      x_txt.sprite.on("click", function () {
        localStorage.removeItem("peach_tutorial");
        localStorage.setItem("peach_tutorial", false);
        this$1$1.container.emit("close");
      });
      var nextBtn = new PIXI.UI.Sprite(PIXI.Texture.from("tutorial_next"));
      var prevBtn = new PIXI.UI.Sprite(PIXI.Texture.from("tutorial_prev"));
      nextBtn.anchorBottom = prevBtn.anchorBottom = 30 * ratioY;
      nextBtn.width = prevBtn.width = 66 * ratioX;
      nextBtn.height = prevBtn.height = 32 * ratioY;
      prevBtn.anchorLeft = 40 * ratioX;
      nextBtn.anchorLeft = 130 * ratioX;
      prevBtn.visible = false;
      x_btn.sprite.interactive = x_btn.sprite.buttonMode = x_txt.sprite.interactive = x_txt.sprite.buttonMode = nextBtn.sprite.interactive = nextBtn.sprite.buttonMode = prevBtn.sprite.interactive = prevBtn.sprite.buttonMode = true;
      prevBtn.sprite.on("click", function () {
        var leng = MenuArray[this$1$1.page].length - 1;
        console.log("leng:", leng, "page", this$1$1.page, "num", this$1$1.num);

        if (this$1$1.page === 0 && this$1$1.num === 0) {
          return;
        }

        if (this$1$1.num == 0) {
          this$1$1.page--;
          this$1$1.num = MenuArray[this$1$1.page].length - 1;
        } else if (leng >= this$1$1.num) {
          this$1$1.num--;
        } else {
          this$1$1.page--;
          this$1$1.num = MenuArray[this$1$1.page].length - 1;
        }

        if (this$1$1.page < 0) {
          this$1$1.page = 0;
        }

        this$1$1.changeTexture();
      });
      nextBtn.sprite.on("click", function () {
        var leng = MenuArray[this$1$1.page].length - 1;

        if (this$1$1.page === MenuArray.length - 1 && this$1$1.num === leng) {
          return;
        }

        if (leng > this$1$1.num) {
          this$1$1.num++;
        } else {
          this$1$1.page++;
          this$1$1.num = 0;
        }

        if (this$1$1.page > MenuArray.length - 1) {
          this$1$1.page = MenuArray.length - 1;
        }

        this$1$1.changeTexture();
      });
      var menu = this.makeNaviBtn(0, 63 * ratioX, 69 * ratioY);
      var card = this.makeNaviBtn(1, 92 * ratioX, 103 * ratioY);
      var audio = this.makeNaviBtn(2, 92 * ratioX, 137 * ratioY);
      var paint = this.makeNaviBtn(3, 63 * ratioX, 171 * ratioY);
      var bookmark = this.makeNaviBtn(4, 78 * ratioX, 205 * ratioY);
      var gather = this.makeNaviBtn(5, 92 * ratioX, 239 * ratioY);
      var fullscreen = this.makeNaviBtn(6, 92 * ratioX, 273 * ratioY);
      var print = this.makeNaviBtn(7, 63 * ratioX, 307 * ratioY);
      var fin = this.makeNaviBtn(8, 63 * ratioX, 341 * ratioY);
      this.menuSprite = menuSprite;
      this.MenuArray = MenuArray;
      this.prevBtn = prevBtn;
      this.nextBtn = nextBtn;
      menuSprite.addChild(x_btn, nextBtn, prevBtn, menu, card, audio, paint, bookmark, gather, fullscreen, print, fin, x_txt);
      this.addChild(menuSprite);
    };

    TutorialContainer.prototype.changeTexture = function changeTexture() {
      if (this.page === 0) {
        this.prevBtn.visible = false;
      } else if (this.page === this.MenuArray.length - 1 && this.num === this.MenuArray[this.page].length - 1) {
        this.nextBtn.visible = false;
      } else {
        this.prevBtn.visible = true;
        this.nextBtn.visible = true;
      }

      console.log(this.page, this.num);
      this.menuSprite.sprite.texture = this.MenuArray[this.page][this.num];
    };

    TutorialContainer.prototype.makeNaviBtn = function makeNaviBtn(num, width, y) {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var button = new PIXI.UI.Sprite(PIXI.Texture.EMPTY);
      button.anchorLeft = 24 * ratioX;
      button.height = 24 * ratioX;
      button.anchorTop = y;
      button.width = width;
      button.sprite.interactive = button.sprite.buttonMode = true;
      button.sprite.on("click", function () {
        this$1$1.page = num;
        this$1$1.num = 0;
        this$1$1.changeTexture();
      });
      return button;
    };

    return TutorialContainer;
  }(PIXI.UI.Container);

  var SceneBase = function SceneBase(url) {
    Data.viewWidth = 1614;
    this.con = new PIXI.UI.Container("100%", "100%");
  };

  SceneBase.prototype.update = function update(framesPassed) {};

  SceneBase.prototype.resize = function resize(screenWidth, screenHeight) {};

  /*@__PURE__*/(function (superclass) {
    function DropDown(option, list) {
      var this$1$1 = this;
      superclass.call(this, option.width, option.height);
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      this.click = false;
      this.mainBtn = new ButtonHandler({
        width: option.width,
        height: option.height,
        lineColor: 0x0,
        img: {
          url: "dsc",
          width: 8,
          height: 6,
          tint: 0x9e9e9e
        }
      });
      this.mainBtn.addText({
        text: "전체",
        style: fontstyle.Black12,
        name: "main"
      });
      this.mainBtn.onClick(function () {
        var ref, ref$1;
        this$1$1.click = !this$1$1.click;

        if (this$1$1.click) {
          (ref = this$1$1).addChild.apply(ref, item.con);
        } else {
          (ref$1 = this$1$1).removeChild.apply(ref$1, item.con);
        }
      });
      var item = new ListItem(this.mainBtn);
      this.mainBtn.dsc.anchorTop = 10 * ratioY;
      this.mainBtn.dsc.anchorRight = 10 * ratioX;
      this.mainBtn.main.verticalAlign = "middle";
      this.mainBtn.main.anchorLeft = 10 * ratioX;
      this.addChild(this.mainBtn.button);
    }

    if (superclass) DropDown.__proto__ = superclass;
    DropDown.prototype = Object.create(superclass && superclass.prototype);
    DropDown.prototype.constructor = DropDown;

    DropDown.prototype.ddd = function ddd() {};

    return DropDown;
  })(PIXI.UI.Container);
  var ListItem = function ListItem(mainBtn) {
    var this$1$1 = this;
    this.con = new VirtualCon();
    var titles = ["전체", "명사"];

    var loop = function loop(i) {
      var title = titles[i];
      var name = "part" + i;
      var width = 92;
      var height = 32;
      var btn = new ButtonHandler({
        width: width,
        height: height,
        line: 1,
        lineColor: 0x0
      });
      btn.addText({
        text: title,
        style: fontstyle.Black12,
        name: name
      });
      btn[name].verticalAlign = "middle";
      btn[name].anchorLeft = 10;
      btn.onHover(function (e) {
        if (e) {
          btn[name]._text.style.fill = 0xff0000;
        } else {
          btn[name]._text.style.fill = 0x000000;
        }
      });
      btn.onClick(function () {
        mainBtn.main.text = btn[name].text;
        mainBtn.button.emit("click");
      });
      btn.button.anchorTop = (height - 2) * (i + 1);
      this$1$1.con.addChild(btn.button);
    };

    for (var i = 0; i < titles.length; i++) {
      loop(i);
    }
  };
  var Selector = function Selector(option, list) {
    var this$1$1 = this;
    var width = option.width;
    var height = option.height;
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    this.mainBtn = new ButtonHandler({
      width: width,
      height: height,
      lineColor: 0xffffff,
      img: {
        url: "dsc",
        width: 13 * ratioX,
        height: 13 * ratioY,
        tint: 0x9e9e9e
      }
    });
    this.mainBtn.addText({
      text: list[0],
      style: fontstyle.Black12,
      name: "main"
    });
    this.mainBtn.dsc.anchorTop = 10 * ratioY;
    this.mainBtn.dsc.anchorRight = 10 * ratioX;
    this.mainBtn.main.verticalAlign = "middle";
    this.mainBtn.main.anchorLeft = 20 * ratioX;
    var graphics = new PIXI.Graphics();
    graphics.lineStyle(0, 0xffffff);
    graphics.beginFill(0xffffff);
    graphics.drawRoundedRect(0, 0, width, height, 5);
    graphics.endFill();
    this.box = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
    var subBtn = this.addList({
      width: width,
      height: height
    }, list);
    this.mainBtn.onClick(function () {
      var ref, ref$1;
      this$1$1.click = !this$1$1.click;

      if (this$1$1.click) {
        (ref = this$1$1.box).addChild.apply(ref, subBtn);
      } else {
        (ref$1 = this$1$1.box).removeChild.apply(ref$1, subBtn);
      }
    });
    this.box.addChild(this.mainBtn.button);
  };

  Selector.prototype.addList = function addList(option, list) {
    var this$1$1 = this;
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    var width = option.width;
    var height = option.height;
    var btnList = [];

    var loop = function loop(i) {
      var btn = new ButtonHandler({
        width: width,
        height: height,
        lineColor: 0xffffff,
        rounded: 0
      });
      btn.addText({
        text: list[i],
        style: fontstyle.Black12,
        name: list[i]
      });
      btn[list[i]].verticalAlign = "middle";
      btn[list[i]].anchorLeft = 20 * ratioX;
      btn.button.anchorTop = (height - 1) * (i + 1) * ratioY;
      btn.onClick(function () {
        this$1$1.mainBtn.main.text = btn[list[i]].text;
        this$1$1.mainBtn.button.emit("click");
      });
      btn.onHover(function (e) {
        if (e) {
          btn[list[i]]._text.style.fill = 0xff0000;
        } else {
          btn[list[i]]._text.style.fill = 0x000000;
        }
      });
      btnList.push(btn.button);
    };

    for (var i = 0; i < list.length; i++) {
      loop(i);
    }

    return btnList;
  };

  var InputNumbering = function InputNumbering(option) {
    var this$1$1 = this;
    var width = option.width;
    var height = option.height;
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    this.count = new PIXI.UI.Text("1", fontstyle.Black16_R);
    this.count.anchorLeft = 20 * ratioX;
    this.count.verticalAlign = "middle";
    var graphics = new PIXI.Graphics();
    graphics.lineStyle(0, 0xffffff);
    graphics.beginFill(0xffffff);
    graphics.drawRoundedRect(0, 0, width, height, 5);
    graphics.endFill();
    this.box = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
    this.box.interactive = true;
    this.box.buttonMode = true;
    var ascBtn = new ButtonHandler({
      width: 13 * ratioX,
      height: 13 * ratioY,
      lineColor: 0xffffff,
      img: {
        url: "asc",
        width: 13 * ratioX,
        height: 13 * ratioY,
        tint: 0x9e9e9e
      }
    });
    var dscBtn = new ButtonHandler({
      width: 13 * ratioX,
      height: 13 * ratioY,
      lineColor: 0xffffff,
      img: {
        url: "dsc",
        width: 13 * ratioX,
        height: 13 * ratioY,
        tint: 0x9e9e9e
      }
    });
    ascBtn.asc.pivotX = ascBtn.asc.pivotY = 0;
    dscBtn.dsc.pivotX = dscBtn.dsc.pivotY = 0;
    ascBtn.button.anchorRight = dscBtn.button.anchorRight = 10 * ratioX;
    ascBtn.button.anchorTop = dscBtn.button.anchorBottom = 3 * ratioY;
    ascBtn.onClick(function () {
      this$1$1.count.text = +this$1$1.count.text + 1;
    });
    dscBtn.onClick(function () {
      this$1$1.count.text = +this$1$1.count.text - 1;
      console.log(218218, this$1$1.count.text);

      if (+this$1$1.count.text < 1) {
        alert("1장 미만으로는 인쇄할 수 없어요", "#E95C63");
        this$1$1.count.text = 1;
        return;
      }
    });
    this.box.addChild(this.count, ascBtn.button, dscBtn.button);
  };

  var PrintPopup = /*@__PURE__*/function (superclass) {
    function PrintPopup() {
      var this$1$1 = this;
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      superclass.call(this, "100%", "100%");
      this.filter = new Filter("100%", "100%");
      this.filter.sprite.buttonMode = false;
      var copies = 1;
      var isColor = false;
      var isWhole = null;
      var graphics = new PIXI.Graphics();
      graphics.lineStyle(1, 0xffffff, 1);
      graphics.beginFill(0xeeeeee);
      graphics.drawRoundedRect(0, 0, 380 * ratioX, 560 * ratioY, 0);
      graphics.endFill();
      this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
      this.card.sprite.interactive = true;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var print_icont = new PIXI.Texture.from("print_icon");
      var print_icon = new PIXI.UI.Sprite(print_icont);
      print_icon.width = 67 * ratioX;
      print_icon.height = 71 * ratioY;
      print_icon.horizontalAlign = "center";
      print_icon.anchorTop = 74 * ratioY;
      print_icon.tint = color.Black;
      var nav_color = new PIXI.UI.Text("컬러", fontstyle.Black16_R);
      var nav_copies = new PIXI.UI.Text("매수", fontstyle.Black16_R);
      nav_color.anchorLeft = nav_copies.anchorLeft = 50 * ratioX;
      nav_color.anchorTop = 258 * ratioY;
      nav_copies.anchorTop = 320 * ratioY;
      var colorArray = ["흑백", "컬러"];
      var colorSelect = new Selector({
        width: 220 * ratioX,
        height: 32 * ratioY
      }, colorArray);
      var copiesSelect = new InputNumbering({
        width: 220 * ratioX,
        height: 32 * ratioY
      });
      copiesSelect.interactive = copiesSelect.buttonMode = true;
      colorSelect.box.anchorLeft = copiesSelect.box.anchorLeft = 120 * ratioX;
      colorSelect.box.anchorTop = 250 * ratioY;
      copiesSelect.box.anchorTop = 320 * ratioY;
      var nowPage = new ButtonHandler({
        width: 120 * ratioX,
        height: 40 * ratioY,
        line: 0,
        tint: 0x9e9e9e,
        rounded: 40 * ratioY,
        text: {
          name: "현재 페이지",
          style: fontstyle.White14
        }
      });
      var wholePage = new ButtonHandler({
        width: 120 * ratioX,
        height: 40 * ratioY,
        line: 0,
        tint: 0x9e9e9e,
        rounded: 40 * ratioY,
        text: {
          name: "전체 페이지",
          style: fontstyle.White14
        }
      });
      var print = new ButtonHandler({
        width: 120 * ratioX,
        height: 40 * ratioY,
        line: 0,
        tint: 0x9e9e9e,
        text: {
          name: "인쇄하기",
          style: fontstyle.White14
        }
      });
      var modal = new Modal();
      nowPage.button.anchorLeft = wholePage.button.anchorRight = 50 * ratioX;
      nowPage.button.anchorBottom = wholePage.button.anchorBottom = 120 * ratioY;
      print.button.anchorBottom = 50 * ratioY;
      print.button.horizontalAlign = "center";
      var xtexture = xTexture(21 * ratioY, 0x4a4a4a);
      var x_btn = new PIXI.UI.Sprite(xtexture);
      x_btn.anchorTop = 28 * ratioY;
      x_btn.anchorRight = 28 * ratioX;
      x_btn.sprite.interactive = x_btn.sprite.buttonMode = true;
      x_btn.sprite.on("click", function () {
        Manager.currentScene.webMenu.printBtn.backgroundColor = color.white;
        Manager.currentScene.con.container.emit("buttonblurOff");
        cancelPrint();
        this$1$1.container.emit("close");
      });
      var explainmain = new PIXI.UI.Text("기본 설정된 프린터로 테스트 인쇄를 진행하여 \n\n 정상적으로 출력되는지 확인 후 진행해 주세요.", fontstyle.Black14_R);
      explainmain.horizontalAlign = "center";
      explainmain.anchorTop = 170 * ratioY;
      this.container.on("close", function () {
        if (this$1$1.parent !== null) {
          this$1$1.parent.removeChild(this$1$1);
        }
      });
      nowPage.onClick(function () {
        isWhole = false;
        nowPage.backgroundColor = print.backgroundColor = color.red;
        wholePage.backgroundColor = 0x9e9e9e;
      });
      wholePage.onClick(function () {
        isWhole = true;
        nowPage.backgroundColor = 0x9e9e9e;
        wholePage.backgroundColor = print.backgroundColor = color.red;
      });
      print.onClick(function () {
        isColor = colorSelect.mainBtn.main.text === "컬러" ? true : false;
        copies = copiesSelect.count.text;

        if (isWhole === null) {
          alert("페이지 설정을 완료해주세요", "#E95C63");
          return;
        }

        nowPage.backgroundColor = 0x9e9e9e;
        wholePage.backgroundColor = 0x9e9e9e;
        Manager.currentScene.webMenu.printBtn.backgroundColor = color.white;
        Manager.currentScene.con.container.emit("buttonblurOff");
        this$1$1.removeChild(this$1$1.card);
        this$1$1.addChild(modal.card);
      });
      modal.leaveBtn.onClick(function () {
        var printOptions = {
          copies: copies,
          isColor: isColor,
          isWhole: isWhole
        };
        close(this$1$1);
        Manager.print(printOptions);
        cancelPrint();
      });
      modal.x_btn.sprite.on("click", function () {
        var printOptions = {
          copies: copies,
          isColor: isColor,
          isWhole: isWhole
        };
        close(this$1$1);
        Manager.print(printOptions);
        cancelPrint();
      });
      this.card.addChild(print_icon, nowPage.button, wholePage.button, print.button, explainmain, x_btn, nav_color, nav_copies, copiesSelect.box, colorSelect.box);
      this.addChild(this.filter, this.card);

      function close(e) {
        e.container.emit("close");
        Manager.currentScene.webMenu.printBtn.backgroundColor = color.white;
        Manager.currentScene.con.container.emit("buttonblurOff");
        e.addChild(e.card);
        e.removeChild(modal.card);
      }

      function cancelPrint() {
        nowPage.backgroundColor = wholePage.backgroundColor = print.backgroundColor = 0x9e9e9e;
        colorSelect.mainBtn.main.text = "흑백";
        copiesSelect.count.text = 1;
        copies = 1;
        isColor = false;
        isWhole = null;
      }
    }

    if (superclass) PrintPopup.__proto__ = superclass;
    PrintPopup.prototype = Object.create(superclass && superclass.prototype);
    PrintPopup.prototype.constructor = PrintPopup;
    return PrintPopup;
  }(PIXI.UI.Container);
  var Modal = /*@__PURE__*/function (superclass) {
    function Modal() {
      var ratioX = Manager.ratioX;
      var ratioY = Manager.ratioY;
      superclass.call(this, "100%", "100%");
      var graphics = new PIXI.Graphics();
      graphics.lineStyle(1, 0xffffff, 1);
      graphics.beginFill(0xeeeeee);
      graphics.drawRoundedRect(0, 0, 380 * ratioX, 380 * ratioY, 0);
      graphics.endFill();
      this.card = new PIXI.UI.Sprite(Manager.app.renderer.generateTexture(graphics));
      this.card.sprite.interactive = true;
      this.card.verticalAlign = "middle";
      this.card.horizontalAlign = "center";
      var xtexture = xTexture(21 * ratioY, 0x4a4a4a);
      this.x_btn = new PIXI.UI.Sprite(xtexture);
      this.x_btn.anchorTop = 28 * ratioY;
      this.x_btn.anchorRight = 28 * ratioX;
      this.x_btn.sprite.interactive = this.x_btn.sprite.buttonMode = true;
      var print_icont = new PIXI.Texture.from("print_icon");
      var print_icon = new PIXI.UI.Sprite(print_icont);
      print_icon.width = 67 * ratioX;
      print_icon.height = 71 * ratioY;
      print_icon.horizontalAlign = "center";
      print_icon.anchorTop = 74 * ratioY;
      print_icon.tint = color.Black;
      var explainmain = new PIXI.UI.Text("인쇄가 시작됩니다.", fontstyle.Black25_R);
      explainmain.horizontalAlign = "center";
      explainmain.anchorTop = 190 * ratioY;
      this.leaveBtn = new ButtonHandler({
        width: 120 * ratioX,
        height: 45 * ratioY,
        lineColor: color.line,
        line: 3,
        text: {
          name: "확인",
          style: fontstyle.Black14_bold
        }
      });
      this.leaveBtn.button.horizontalAlign = "center";
      this.leaveBtn.button.anchorBottom = 74 * ratioY;
      this.card.addChild(print_icon, this.x_btn, this.leaveBtn.button, explainmain);
    }

    if (superclass) Modal.__proto__ = superclass;
    Modal.prototype = Object.create(superclass && superclass.prototype);
    Modal.prototype.constructor = Modal;
    return Modal;
  }(PIXI.UI.Container);

  var WebScene = function WebScene(url) {
    var this$1$1 = this;
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    Data.viewWidth = 1614;
    this.con = new PIXI.UI.Container("100%", "100%");
    this.box = new PIXI.UI.Container("100%", 104 * ratioY);
    var viewCan = document.getElementById("view-canvas");
    var That = this;
    Manager.isGather = false;
    Manager.isQ = false;
    Manager.isCard = false;
    Manager.isAudio = false;
    Manager.isBookmark = false;
    this.callBackFunc = {
      update: function update(nowPage) {
        That.cardUpdate();
        That.webMenu.webAudio.updateIndex(nowPage);
        That.webMenu.webPaint.updateIndex(nowPage);
        console.log("nowPage", nowPage);
      },
      const: function setAudio(page, nowPage) {
        viewCan.style.marginTop = (Manager.height - viewCan.height) / 2 + "px";
        viewCan.style.marginLeft = (window.innerWidth - viewCan.width - 199 * ratioX) / 2 + "px";
        That.cardUpdate();
        That.webMenu.webAudio = new WebAudioCon(Data.audioData, page, nowPage, That.LeftBtn, That.RightBtn, highlighter);
        console.log("nowPage", nowPage);
        That.webMenu.webAudio.updateIndex(nowPage);
        Manager.paintApp();
        That.webMenu.webPaint = new WebPaintCon(page, nowPage, That.LeftBtn, That.RightBtn);
      },
      thumb: function makeThumbNail(thumbArr, queueRenderPage, nowPage) {
        var thumbTexture = [];
        thumbArr.forEach(function (element) {
          var texture = new PIXI.Texture.from(element);
          thumbTexture.push(texture);
        });
        get_BookMark(Data.story_num, function (res) {
          if (res.code == 0) {
            var arr = [];

            for (var i = 0, list = res.data.story.BookMark; i < list.length; i += 1) {
              var item = list[i];
              arr.push(item.page_no);
            }

            That.bookmarkArr = new Set(arr);
            That.webMenu.webBookmark = new WebBookmarkCon(That.bookmarkArr, thumbTexture, That.viewer);
          }
        });
        That.thumnail = new FullPageContainer(thumbTexture, queueRenderPage);
      }
    };
    var highlighter = new Highlighter();
    this.LeftBtn = new ArrowLeft(52 * ratioX);
    this.RightBtn = new ArrowRight(52 * ratioX);
    this.RightBtn.anchorRight = 201 * ratioX;
    this.webMenu = new WebMenu();

    if (Manager.isPrev) {
      this.webMenu.paintBtn.button.interactive = this.webMenu.bookmarkBtn.button.interactive = false;
      this.webMenu.paintBtn.button.emit("disable");
      this.webMenu.bookmarkBtn.button.emit("disable");
    }

    this.viewer = new Viewer(url, this.callBackFunc, this.RightBtn, this.LeftBtn, 386, 261);
    this.con.container.on("goFirst", function (num) {
      this$1$1.viewer.acessQueue(num);
    });
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");
    Data.cardData.forEach(function (element) {
      element.texture = new PIXI.Texture.from(S3_URL_RAW + "/" + element.uuid);
    });
    this.con.addChild(this.LeftBtn, this.RightBtn, this.webMenu, highlighter);
    this.prevCard = new PrevCard();
    this.cardArr = [];
    this.Qarr = [];
    this.webMenu.webCard = new WebCardCon(this.cardArr);
    new TutorialContainer(this.con);
    this.eventHandler();
  };

  WebScene.prototype.cardUpdate = function cardUpdate() {
    var this$1$1 = this;
    var ratioX = Manager.ratioX;
    var size = 20 * ratioX;
    this.cardArr = [];
    var viewCan = document.getElementById("view-canvas");
    var left = viewCan.style.marginLeft;
    var top = viewCan.style.marginTop;
    left = parseFloat(left);
    top = parseFloat(top);
    var now = document.getElementById("page_input").textContent - 1;
    this.Qarr.forEach(function (element) {
      this$1$1.con.removeChild(element);
    });
    this.Qarr = [];
    Data.cardData.forEach(function (e) {
      var item = e.list[now];

      if (item !== null && item !== undefined) {
        var texture = e.texture;
        var savedCard = new PIXI.UI.Sprite(texture);
        savedCard.sprite.interactive = savedCard.sprite.buttonMode = true;
        savedCard.sprite.on("click", function () {
          this$1$1.prevCard.card.sprite.texture = savedCard.sprite.texture;
          this$1$1.con.addChild(this$1$1.prevCard);
        });
        this$1$1.cardArr.push(savedCard);
        var qTexture = new PIXI.Texture.from("Q_icon");
        this$1$1.qSprite = new PIXI.UI.Sprite(qTexture);
        this$1$1.qSprite.tint = color.red;
        this$1$1.qSprite.width = size;
        this$1$1.qSprite.height = size;
        this$1$1.qSprite.x = item.relatePos.x * viewCan.width + left;
        this$1$1.qSprite.y = item.relatePos.y * viewCan.height + top;
        this$1$1.qSprite.sprite.interactive = this$1$1.qSprite.sprite.buttonMode = true;
        this$1$1.qSprite.sprite.on("click", function () {
          this$1$1.prevCard.card.sprite.texture = texture;
          this$1$1.con.addChild(this$1$1.prevCard);
        });

        if (Manager.isQ) {
          this$1$1.con.addChild(this$1$1.qSprite);
        }

        this$1$1.Qarr.push(this$1$1.qSprite);
      }
    });
    this.webMenu.webCard.changeCard(this.cardArr);
  };

  WebScene.prototype.eventHandler = function eventHandler() {
    var this$1$1 = this;
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    var that = this;

    var closeFunc = function closeFunc() {
      perUse(Data.story_num, function () {
        peachClose.closePeachPIXI();
      });
    };

    var closeShort = new ListenPopUpShort(function () {
      that.viewer.acessQueue(1);
    }, closeFunc);
    this.con.container.on("storyEnd", function () {
      this$1$1.con.addChild(closeShort);
    });
    var closeLong = new ListenPopUpLong("계속 읽기", "스토리 닫기", closeFunc, function () {
      console.log("계속 읽기");
    }, "이야기를 종료하시겠어요?");
    var printPopup = new PrintPopup();
    this.webMenu.finBtn.onClick(function () {
      this$1$1.con.addChild(closeLong);
    });
    this.webMenu.fullscreenBtn.onClick(function () {
      var viewCan = document.getElementById("view-canvas");
      Manager.isFull = !Manager.isFull;

      if (Manager.isFull) {
        console.log("전체보기");
        this$1$1.webMenu.fullscreenBtn.removeImage({
          url: 'fullscreen_icon'
        });
        this$1$1.webMenu.fullscreenBtn.addImage({
          url: 'basicscreen_icon',
          width: 23 * ratioX,
          height: 23 * ratioX,
          tint: 0x3b3b3b
        });
        this$1$1.webMenu.fullscreenBtn.basicscreen_icon.pivotX = 0;
        this$1$1.webMenu.fullscreenBtn.basicscreen_icon.pivotY = 0;
        this$1$1.webMenu.fullscreenBtn.basicscreen_icon.anchorRight = 5 * ratioX;
        this$1$1.webMenu.fullscreenBtn.basicscreen_icon.anchorBottom = 5 * ratioY;
        this$1$1.con.removeChild(this$1$1.webMenu);
        this$1$1.con.addChild(this$1$1.webMenu.finBtn.button, this$1$1.webMenu.menuBg, this$1$1.webMenu.cardBtn.button, this$1$1.webMenu.paintBtn.button, this$1$1.webMenu.audioBtn.button, this$1$1.webMenu.bookmarkBtn.button, this$1$1.webMenu.fullscreenBtn.button);
        this$1$1.webMenu.gatherBtn.button.visible = false;
        this$1$1.webMenu.printBtn.button.visible = false;
        this$1$1.webMenu.anchorRight = 0;
        this$1$1.RightBtn.anchorRight = 0;
        this$1$1.webMenu.finBtn.background.alpha = 1;
        this$1$1.webMenu.finBtn.background.width = 100 * ratioX;
        this$1$1.webMenu.finBtn.background.height = 40 * ratioX;
        this$1$1.webMenu.finBtn.button.anchorRight = 0;
        this$1$1.webMenu.finBtn.button.anchorLeft = 1800 * ratioX;
        this$1$1.webMenu.menuBg.anchorRight = 0 * ratioX;
        this$1$1.webMenu.cardBtn.button.anchorRight = this$1$1.webMenu.paintBtn.button.anchorRight = this$1$1.webMenu.audioBtn.button.anchorRight = this$1$1.webMenu.bookmarkBtn.button.anchorRight = this$1$1.webMenu.fullscreenBtn.button.anchorRight = 5 * ratioX;
        viewCan.style.marginLeft = (window.innerWidth - viewCan.width - 156 * ratioX) / 2 + "px";
        Manager.currentScene.RightBtn.width = 204 * ratioX;
      } else {
        this$1$1.webMenu.fullscreenBtn.removeImage({
          url: 'basicscreen_icon'
        });
        this$1$1.webMenu.fullscreenBtn.addImage({
          url: 'fullscreen_icon',
          width: 23 * ratioX,
          height: 23 * ratioX,
          tint: 0x3b3b3b
        });
        this$1$1.webMenu.fullscreenBtn.fullscreen_icon.pivotX = 0;
        this$1$1.webMenu.fullscreenBtn.fullscreen_icon.pivotY = 0;
        this$1$1.webMenu.fullscreenBtn.fullscreen_icon.anchorRight = 5 * ratioX;
        this$1$1.webMenu.fullscreenBtn.fullscreen_icon.anchorBottom = 5 * ratioY;
        this$1$1.webMenu.fullscreenBtn.background.alpha = 0;
        this$1$1.webMenu.finBtn.background.alpha = this$1$1.webMenu.gatherBtn.background.alpha = this$1$1.webMenu.printBtn.background.alpha = 1;
        this$1$1.webMenu.finBtn.background.width = 168 * ratioX;
        this$1$1.webMenu.gatherBtn.background.width = this$1$1.webMenu.printBtn.background.width = 83 * ratioX;
        this$1$1.webMenu.finBtn.background.height = this$1$1.webMenu.gatherBtn.background.height = this$1$1.webMenu.printBtn.background.height = 33 * ratioY;
        this$1$1.webMenu.finBtn.button.anchorRight = 80 * ratioX;
        this$1$1.webMenu.finBtn.button.anchorLeft = 80 * ratioX;
        this$1$1.webMenu.gatherBtn.button.anchorRight = 100 * ratioX;
        this$1$1.webMenu.printBtn.button.anchorRight = 0 * ratioX;
        this$1$1.webMenu.gatherBtn.button.anchorLeft = 8 * ratioX;
        this$1$1.webMenu.printBtn.button.anchorLeft = 90 * ratioX;
        Manager.currentScene.RightBtn.width = 52 * ratioX;
        Manager.currentScene.LeftBtn.width = 52 * ratioX;
        Manager.currentScene.RightBtn.anchorRight = 201 * ratioX;
        this$1$1.webMenu.gatherBtn.button.visible = true;
        this$1$1.webMenu.printBtn.button.visible = true;
        this$1$1.webMenu.addChild(this$1$1.webMenu.finBtn.button, this$1$1.webMenu.menuBg, this$1$1.webMenu.cardBtn.button, this$1$1.webMenu.paintBtn.button, this$1$1.webMenu.audioBtn.button, this$1$1.webMenu.bookmarkBtn.button, this$1$1.webMenu.fullscreenBtn.button);
        this$1$1.con.addChild(this$1$1.webMenu);
        this$1$1.webMenu.menuBg.anchorRight = 201 * ratioX;
        this$1$1.webMenu.cardBtn.button.anchorRight = this$1$1.webMenu.paintBtn.button.anchorRight = this$1$1.webMenu.audioBtn.button.anchorRight = this$1$1.webMenu.bookmarkBtn.button.anchorRight = this$1$1.webMenu.fullscreenBtn.button.anchorRight = 205 * ratioX;
        viewCan.style.marginLeft = (window.innerWidth - viewCan.width - 199 * ratioX) / 2 + "px";
        Manager.currentScene.cardUpdate();
      }
    });
    this.webMenu.gatherBtn.onClick(function () {
      Manager.isGather = !Manager.isGather;
      var nowPage = this$1$1.viewer.getPageNum();
      var length = this$1$1.thumnail.containerArr[0].length;
      this$1$1.renderTopText(nowPage, length);

      if (!Manager.isGather) {
        Manager.isGather = false;
        this$1$1.RightBtn.sprite.interactive = this$1$1.LeftBtn.sprite.interactive = true;
        this$1$1.box.removeChild(this$1$1.box.children.at(-1));
        this$1$1.con.removeChild(this$1$1.thumnail, this$1$1.box);
        this$1$1.con.addChild(this$1$1.RightBtn, this$1$1.LeftBtn, this$1$1.webMenu);
        this$1$1.webMenu.addChild(this$1$1.webMenu.contentsBox);
      } else {
        Manager.isGather = true;
        this$1$1.RightBtn.sprite.interactive = this$1$1.LeftBtn.sprite.interactive = false;
        this$1$1.webMenu.addChild(this$1$1.webMenu.contentsBox);
        this$1$1.con.addChild(this$1$1.thumnail, this$1$1.box, this$1$1.webMenu);
        this$1$1.con.removeChild(this$1$1.RightBtn, this$1$1.LeftBtn);

        for (var i = 0; i < this$1$1.Qarr.length; i++) {
          this$1$1.con.removeChild(this$1$1.Qarr[i]);
        }
      }
    });
    this.webMenu.gatherBtn.onHover(function () {
      if (Manager.isGather) {
        this$1$1.webMenu.gatherBtn.backgroundColor = color.button;
      }
    });
    this.webMenu.cardBtn.onClick(function () {
      var searchArr = this$1$1.webMenu.webCard.searchArr;

      if (Manager.isQ) {
        Manager.isQ = false;

        for (var i = 0; i < this$1$1.Qarr.length; i++) {
          this$1$1.con.removeChild(this$1$1.Qarr[i]);
        }
      } else {
        Manager.isQ = true;
        console.log(searchArr.length);

        if (searchArr.length === 0) {
          this$1$1.webMenu.webCard.textinput.text = "단어검색";
          console.log(391391);
          this$1$1.webMenu.webCard.textinput.emit("blur");
        }

        for (var i$1 = 0; i$1 < this$1$1.Qarr.length; i$1++) {
          this$1$1.con.addChild(this$1$1.Qarr[i$1]);
        }
      }
    });
    this.webMenu.audioBtn.onClick(function () {
      for (var i = 0; i < this$1$1.Qarr.length; i++) {
        this$1$1.con.removeChild(this$1$1.Qarr[i]);
      }
    });
    this.webMenu.paintBtn.onClick(function () {
      for (var i = 0; i < this$1$1.Qarr.length; i++) {
        this$1$1.con.removeChild(this$1$1.Qarr[i]);
      }
    });
    this.webMenu.bookmarkBtn.onClick(function () {
      for (var i = 0; i < this$1$1.Qarr.length; i++) {
        this$1$1.con.removeChild(this$1$1.Qarr[i]);
      }
    });
    this.webMenu.printBtn.onClick(function () {
      console.log(400400);
      this$1$1.con.addChild(printPopup);
    });
    this.con.container.on("buttonblurOn", function () {
      this$1$1.webMenu.cardBtn.button.interactive = this$1$1.webMenu.audioBtn.button.interactive = this$1$1.webMenu.paintBtn.button.interactive = this$1$1.webMenu.bookmarkBtn.button.interactive = this$1$1.webMenu.fullscreenBtn.button.interactive = this$1$1.webMenu.printBtn.button.interactive = this$1$1.webMenu.finBtn.button.interactive = false;
    });
    this.con.container.on("buttonblurOff", function () {
      this$1$1.webMenu.cardBtn.button.interactive = this$1$1.webMenu.audioBtn.button.interactive = this$1$1.webMenu.paintBtn.button.interactive = this$1$1.webMenu.bookmarkBtn.button.interactive = this$1$1.webMenu.printBtn.button.interactive = this$1$1.webMenu.finBtn.button.interactive = this$1$1.webMenu.fullscreenBtn.button.interactive = true;
      this$1$1.webMenu.cardBtn.button.emit("active");
      this$1$1.webMenu.audioBtn.button.emit("active");
      this$1$1.webMenu.paintBtn.button.emit("active");
      this$1$1.webMenu.bookmarkBtn.button.emit("active");
      this$1$1.webMenu.printBtn.button.emit("active");
      this$1$1.webMenu.finBtn.button.emit("active");
      this$1$1.webMenu.fullscreenBtn.button.emit("active");
    });
    this.con.container.on("previewblurOff", function () {
      this$1$1.webMenu.cardBtn.button.interactive = this$1$1.webMenu.audioBtn.button.interactive = this$1$1.webMenu.printBtn.button.interactive = this$1$1.webMenu.finBtn.button.interactive = this$1$1.webMenu.fullscreenBtn.button.interactive = true;
      this$1$1.webMenu.cardBtn.button.emit("active");
      this$1$1.webMenu.audioBtn.button.emit("active");
      this$1$1.webMenu.printBtn.button.emit("active");
      this$1$1.webMenu.finBtn.button.emit("active");
      this$1$1.webMenu.fullscreenBtn.button.emit("active");
    });
  };

  WebScene.prototype.renderTopText = function renderTopText(now, thumbsLength) {
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    var imgt = new PIXI.Texture.from("gather_icon"),
        img = new PIXI.UI.Sprite(imgt);
    img.width = img.height = 38 * ratioX;
    img.anchorTop = 40 * ratioY;
    img.anchorLeft = 63 * ratioX;
    var textCont = new PIXI.Graphics();
    textCont.lineStyle(2, 0xdbdbdb);
    textCont.beginFill(0xffffff);
    textCont.drawRoundedRect(0, 0, 55 * ratioX, 43 * ratioY, 5);
    textCont.endFill();
    var textContTexture = Manager.app.renderer.generateTexture(textCont);
    var textCon = new PIXI.UI.Sprite(textContTexture);
    var titleTxt = new PIXI.UI.Text("전체 페이지 보기", fontstyle.Black30_R);
    titleTxt.anchorTop = 40 * ratioY;
    titleTxt.anchorLeft = 115 * ratioX;
    var nowPageTxt = new PIXI.UI.Text("" + now, fontstyle.Black19_R);
    var pageTxt = new PIXI.UI.Text("/    " + thumbsLength + " 페이지", fontstyle.Black19_R);
    pageTxt.verticalAlign = textCon.verticalAlign = nowPageTxt.verticalAlign = "middle";
    nowPageTxt.text = now;
    pageTxt.anchorRight = 340 * ratioX;
    nowPageTxt.anchorRight = 480 * ratioX;
    textCon.anchorRight = 460 * ratioX;
    textCon.anchorTop = nowPageTxt.anchorTop = titleTxt.anchorTop;

    if (this.box.children.length === 0) {
      this.box.addChild(titleTxt, img, textCon, pageTxt, nowPageTxt);
    }

    if (Manager.isGather) {
      nowPageTxt.text = now;
      this.box.addChild(nowPageTxt);
    }
  };

  WebScene.prototype.update = function update(framesPassed) {};

  WebScene.prototype.resize = function resize(screenWidth, screenHeight) {};

  var loaderBarWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.2;
  var loaderBarHeight = 500;

  var LoaderScene = function LoaderScene(flag, url) {
    var ratioX = Manager.ratioX;
    var ratioY = Manager.ratioY;
    this.con = new PIXI.UI.Container("100%", "100%");
    this.url = url;
    var texture = PIXI.Texture.WHITE;
    var sp = new PIXI.UI.Sprite(texture);
    this.con.addChild(sp);
    sp.tint = 0xffffff;
    sp.width = Math.max(document.documentElement.clientWidth, window.innerWidth);
    sp.height = Math.max(document.documentElement.clientHeight, window.innerHeight);
    this.loader = new PIXI.Loader();
    this.IsAdmin = flag;
    this.loaderBarFill = new PIXI.Graphics();
    this.loaderBarFill.beginFill(0xffffff, 1);
    this.loaderBarFill.drawRect(0, 0, loaderBarWidth, loaderBarHeight + 100);
    this.loaderBarFill.endFill();
    this.loaderBarBoder = new PIXI.Graphics();
    this.loaderBarBoder.drawRect(0, 0, loaderBarWidth, loaderBarHeight + 100);
    this.barfill = new GraphicsSprite(this.loaderBarFill);
    this.barfill.height = 0;
    var barboarder = new GraphicsSprite(this.loaderBarBoder);
    this.loaderBar = new PIXI.UI.Container();
    this.loaderBar.addChild(this.barfill);
    this.loaderBar.addChild(barboarder);
    this.loaderBar.anchorTop = Manager.height / 2 - loaderBarHeight / 2;
    this.loaderBar.anchorLeft = Manager.width / 2 - loaderBarWidth / 2;
    this.loader.reset();

    if (this.IsAdmin) {
      this.loader.add(assetsAdmin);
    } else {
      this.loader.add(assetsWeb);
    }

    var symbolTexture = new PIXI.Texture.from('peachImage/symbol.png');
    var logoTexture = new PIXI.Texture.from('peachImage/peach_logo_black.png');
    var symbol = new PIXI.UI.Sprite(symbolTexture);
    var logo = new PIXI.UI.Sprite(logoTexture);
    symbol.width = loaderBarWidth / 2.55;
    symbol.height = loaderBarWidth;
    logo.width = 200 * ratioX;
    logo.height = 44.58 * ratioY;
    symbol.anchorTop = Manager.height / 2 - symbol.height / 2;
    logo.anchorBottom = loaderBarHeight * 0.2;
    symbol.anchorLeft = Manager.width / 2 - symbol.width / 2;
    logo.anchorLeft = Manager.width / 2 - logo.width / 2;
    this.loader.onProgress.add(this.downloadProgress, this);
    this.loader.onComplete.once(this.gameLoaded, this);
    this.con.addChild(symbol, logo);
    this.loader.load();
    this.con.addChild(this.loaderBar);
  };

  LoaderScene.prototype.downloadProgress = function downloadProgress(loader) {
    var progressRatio = loader.progress / 100;
    this.barfill.height = loaderBarWidth - loaderBarWidth * progressRatio;
  };

  LoaderScene.prototype.gameLoaded = function gameLoaded() {
    if (this.IsAdmin) {
      Manager.changeScene(new AdminScene(this.url));
    } else {
      Manager.changeScene(new WebScene(this.url));
    }
  };

  LoaderScene.prototype.update = function update(framesPassed) {};

  LoaderScene.prototype.resize = function resize(screenWidth, screenHeight) {};

  var Web = function Web(url) {
    webfontloader.load({
      google: {
        families: ["Noto Sans KR"]
      },
      active: function active(e) {
        console.log("font loaded!");
      }
    });
    var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var screenWidth = Math.max(document.documentElement.clientWidth - 17, window.innerWidth - 17 || 0);
    Manager.height = screenHeight;
    Manager.width = screenWidth;
    Manager.initialize(url);
    var loady = new LoaderScene(false, url);
    Manager.changeScene(loady);
  };

  function client(story_no, hidden) {
    if (story_no === void 0) story_no = 0;
    if (hidden === void 0) hidden = false;
    var thumb_uuid = null;

    if (!hidden) {
      get_storyDetail(story_no, function (response) {
        if (response.message == "login required") {
          console.log("로그인이 필요해");
          makePopup();
        } else if (response.message == "subscription required") {
          console.log("구독권한이 없음");
          makePopup();
        }

        thumb_uuid = response.data.story.thumb_title_uuid;

        if (response.code === 0) {
          Data.isHidden = hidden;
        }

        download_zip(story_no, function (response) {
          var zipInst = null;
          var file = response;
          var S3_URL_PUB = document.getElementById("peach-bundle").getAttribute("data-s3-url-pub");

          if (file) {
            Data.story_num = story_no;
            var t = Texture.from(S3_URL_PUB + "/" + thumb_uuid);
            Data.thumb_texture = t;
            var reader = new FileReader();

            reader.onload = function (evt) {
              jszip_min.loadAsync(evt.target.result).then(function (zip) {
                zipInst = zip;
                showfilelist(zipInst);
              });
            };

            reader.onerror = function (evt) {
              alert("파일을 열 수 없음", evt);
            };

            reader.readAsArrayBuffer(file);
          } else {
            alert("파일이 없습니다");
          }
        });
      });
    } else {
      get_hiddenStoryDetail(story_no, function (response) {
        if (response.code === 10000) {
          makePopup();
        }

        if (response.code === 0) {
          thumb_uuid = response.data.story.thumb_title_uuid;
          Data.isHidden = hidden;
        }
      });
      download_zip_hidden(story_no, function (response) {
        console.log("download_zip_hidden", response);
        var zipInst = null;
        var file = response;
        console.log("file", file);
        var S3_URL_PUB = document.getElementById("peach-bundle").getAttribute("data-s3-url-pub");

        if (file) {
          Data.story_num = story_no;
          var t = Texture.from(S3_URL_PUB + "/" + thumb_uuid);
          Data.thumb_texture = t;
          var reader = new FileReader();

          reader.onload = function (evt) {
            jszip_min.loadAsync(evt.target.result).then(function (zip) {
              zipInst = zip;
              showfilelist(zipInst);
            });
          };

          reader.onerror = function (evt) {
            alert("파일을 열 수 없음", evt);
          };

          reader.readAsArrayBuffer(file);
        } else {
          alert("파일이 없습니다");
        }
      });
    }

    function makePopup() {
      alert("잘못된 접근입니다.");
    }

    function showfilelist(zip) {
      zip.forEach(function (relativePath, entry) {
        var pathpoint = relativePath.lastIndexOf(".");
        var filepoint = relativePath.substring(pathpoint + 1, relativePath.length);
        var filetype = filepoint.toLowerCase();

        if (filetype === "pdf") {
          zip.file(entry.name).async("blob").then(function (blob) {
            new Response(blob).arrayBuffer().then(function (res) {
              var typedarray = new Uint8Array(res);
              new Web(typedarray);
            });
          });
        } else {
          zip.file(entry.name).async("blob").then(function (blob) {
            blob.text().then(function (text) {
              var data = JSON.parse(text);
              Data.initialize(data);
              Data.title = data.title;
            });
          });
        }
      });
    }
  }

  var WebAdmin = function WebAdmin(url) {
    webfontloader.load({
      google: {
        families: ["Noto Sans KR"]
      },
      active: function active(e) {
        console.log("font loaded!");
      }
    });
    var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    Manager.height = screenHeight;
    Manager.width = screenWidth;
    Manager.initialize(url);
    var loady = new LoaderScene(true, url);
    Manager.changeScene(loady);
  };

  function admin(navigateFunc) {
    document.querySelector("#pdf_upload").addEventListener("change", function (e) {
      var pdffile = e.target.files[0];

      if (pdffile.type != "application/pdf") {
        console.error(pdffile.name, "is not a pdf file.");
        return;
      }

      Data.initialize();
      Data.pdf = pdffile;
      var tag = pdffile.name.replace(/(.pdf|.jpg|.jpeg|.gif)$/, "");
      var words = tag.split("#");
      Data.story_tag = tag;
      Data.title = words[0];
      Data.isFirst = true;
      var fileReader = new FileReader();

      fileReader.onload = function () {
        navigateFunc();
        var typedarray = new Uint8Array(this.result);
        new WebAdmin(typedarray, 0);
      };

      fileReader.readAsArrayBuffer(pdffile);
    });
  }

  function setpeachClose(_outFunc) {
    peachClose.setCloseFunc(_outFunc);
  }

  function close() {
    document.body.removeChild(document.getElementById("printable"));
    document.body.removeChild(document.getElementById("canvas_wraper"));
    PIXI.utils.clearTextureCache();
  }

  function edit(raw_no) {
    var zipInst = null;
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");
    get_story_detail(raw_no, function (response) {
      if (response.code === 0) {
        console.log(response.data.storyRaw.status);

        switch (response.data.storyRaw.status) {
          case 0:
            Data.state = 0;
            break;

          case 1:
            Data.state = 1;
            break;

          case 2:
            Data.state = 2;
            break;

          case 6:
            Data.state = 0;
            break;

          case 7:
            Data.state = 1;
            break;

          default:
            Data.state = 1;
        }

        console.log("스테이트", Data.state);
        Data.isFirst = false;
        var story_uuid = response.data.storyRaw.data_uuid;
        var myHeaders = new Headers();
        myHeaders.append("pragma", "no-cache");
        myHeaders.append("cache-control", "no-cache");
        var myInit = {
          method: "GET",
          headers: myHeaders
        };
        fetch(S3_URL_RAW + "/" + story_uuid, myInit).then(function (res) {
          return res.blob();
        }).then(function (blob) {
          var file = blob;

          if (file) {
            Data.raw_num = raw_no;
            var reader = new FileReader();

            reader.onload = function (evt) {
              jszip_min.loadAsync(evt.target.result).then(function (zip) {
                zipInst = zip;
                showfilelistAdmin(zipInst);
              });
            };

            reader.readAsArrayBuffer(file);
          }
        });
      }
    });

    function showfilelistAdmin(zip) {
      zip.forEach(function (relativePath, entry) {
        var pathpoint = relativePath.lastIndexOf(".");
        var filepoint = relativePath.substring(pathpoint + 1, relativePath.length);
        var filetype = filepoint.toLowerCase();

        if (filetype === "pdf") {
          zip.file(entry.name).async("blob").then(function (blob) {
            var pdfFile = new File([blob], relativePath);
            Data.pdf = pdfFile;
            new Response(blob).arrayBuffer().then(function (res) {
              var typedarray = new Uint8Array(res);
              new WebAdmin(typedarray);
            });
          });
        } else {
          zip.file(entry.name).async("blob").then(function (blob) {
            blob.text().then(function (text) {
              var data = JSON.parse(text);
              console.log(data);
              Data.initialize(data);
              Data.title = data.title;
            });
          });
        }
      });
    }
  }

  function preview(raw_no, thumb_uuid) {
    var zipInst = null;
    var S3_URL_RAW = document.getElementById("peach-bundle").getAttribute("data-s3-url-raw");

    if (thumb_uuid !== undefined) {
      var t = new PIXI.Texture.from(S3_URL_RAW + "/" + thumb_uuid);
      Data.thumb_texture = t;
    }

    get_story_detail(raw_no, function (response) {
      if (response.code === 0) {
        var story_uuid = response.data.storyRaw.data_uuid;
        var myHeaders = new Headers();
        myHeaders.append("pragma", "no-cache");
        myHeaders.append("cache-control", "no-cache");
        var myInit = {
          method: "GET",
          headers: myHeaders
        };
        fetch(S3_URL_RAW + "/" + story_uuid, myInit).then(function (res) {
          return res.blob();
        }).then(function (blob) {
          var file = blob;

          if (file) {
            var reader = new FileReader();

            reader.onload = function (evt) {
              jszip_min.loadAsync(evt.target.result).then(function (zip) {
                zipInst = zip;
                showfilelistpreview(zipInst);
              });
            };

            reader.readAsArrayBuffer(file);
          }
        });
      }
    });

    function showfilelistpreview(zip) {
      zip.forEach(function (relativePath, entry) {
        var pathpoint = relativePath.lastIndexOf(".");
        var filepoint = relativePath.substring(pathpoint + 1, relativePath.length);
        var filetype = filepoint.toLowerCase();

        if (filetype === "pdf") {
          zip.file(entry.name).async("blob").then(function (blob) {
            new Response(blob).arrayBuffer().then(function (res) {
              Manager.isPrev = true;
              var typedarray = new Uint8Array(res);
              new Web(typedarray);
            });
          });
        } else {
          console.log("나는 세팅파일", relativePath, entry);
          zip.file(entry.name).async("blob").then(function (blob) {
            blob.text().then(function (text) {
              var data = JSON.parse(text);
              Data.initialize(data);
              Data.title = data.title;
            });
          });
        }
      });
    }
  }

  var Slide = function Slide(urlArr, mainIndex) {
    this.urlArr = urlArr;
    this.app = new PIXI.Application({
      resolution: window.devicePixelRatio || 1,
      antialias: true,
      transparent: true,
      width: window.innerWidth,
      height: window.innerHeight,
      autoDensity: true
    });
    this.now = mainIndex;
    this.onComplete();
  };

  Slide.prototype.onComplete = function onComplete() {
    var this$1$1 = this;

    for (var i = 0; i < this.urlArr.length; i++) {
      this["card" + (i + 1)] = Texture.from(this.urlArr[i]);
    }

    var filter = new PIXI.Sprite(PIXI.Texture.WHITE);
    var mask = new PIXI.Sprite(PIXI.Texture.WHITE);
    mask.width = this.app.view.width;
    mask.height = this.app.view.height;
    mask.tint = 0x000000;
    mask.alpha = 0.4;
    filter.tint = 0x000000;
    filter.alpha = 0.6;
    filter.width = this.app.view.width;
    filter.height = this.app.view.height;
    var prevBtn = new PIXI.Sprite.from("/peachImage/round_left.png");
    var nextBtn = new PIXI.Sprite.from("/peachImage/round_right.png");
    prevBtn.interactive = nextBtn.interactive = filter.interactive = true;
    nextBtn.buttonMode = prevBtn.buttonMode = filter.buttonMode = true;
    prevBtn.width = prevBtn.height = nextBtn.width = nextBtn.height = 66;
    prevBtn.y = nextBtn.y = this.app.view.height / 2;
    prevBtn.x = this.app.view.width * 0.25;
    nextBtn.x = this.app.view.width * 0.75;
    prevBtn.anchor.set(0.5);
    nextBtn.anchor.set(0.5);
    var leftNum = this.now === 1 ? this.urlArr.length : this.now - 1;
    var rightNum = this.now === this.urlArr.length ? 1 : this.now + 1;
    this.leftcard = new PIXI.Sprite.from(this["card" + leftNum]);
    this.centecard = new PIXI.Sprite.from(this["card" + this.now]);
    this.rightcard = new PIXI.Sprite.from(this["card" + rightNum]);
    this.leftcard.interactive = this.centecard.interactive = this.rightcard.interactive = true;
    this.leftcard.anchor.set(0, 0.5);
    this.leftcard.x = 38;
    this.leftcard.width = 200;
    this.leftcard.height = 300;
    this.rightcard.anchor.set(1, 0.5);
    this.rightcard.x = this.app.view.width - 38;
    this.rightcard.width = 200;
    this.rightcard.height = 300;
    this.centecard.anchor.set(0.5);
    this.centecard.x = this.app.view.width / 2;
    this.centecard.width = 380;
    this.centecard.height = 520;
    this.leftcard.y = this.centecard.y = this.rightcard.y = this.app.view.height / 2;
    this.app.stage.addChild(filter, this.leftcard, this.rightcard, mask, this.centecard, prevBtn, nextBtn);
    filter.on("click", function () {
      this$1$1.close();
    });

    this.open = function () {
      this$1$1.app.stage.addChild(filter, this$1$1.leftcard, this$1$1.rightcard, mask, this$1$1.centecard, prevBtn, nextBtn);
    };

    this.close = function () {
      PIXI.utils.clearTextureCache();
      var self = this$1$1.app.view;
      this$1$1.app.view.parentNode.removeChild(self);
    };

    prevBtn.on("click", function () {
      this$1$1.prevEvent();
      this$1$1.changeTexture();
    });
    nextBtn.on("click", function () {
      this$1$1.nextEvent();
      this$1$1.changeTexture();
    });
  };

  Slide.prototype.changeTexture = function changeTexture() {
    if (this.now === 1) {
      this.leftcard.texture = this["card" + this.urlArr.length];
      this.rightcard.texture = this["card" + (this.now + 1)];
    } else if (this.now === this.urlArr.length) {
      this.leftcard.texture = this["card" + (this.now - 1)];
      this.rightcard.texture = this["card1"];
    } else {
      this.leftcard.texture = this["card" + (this.now - 1)];
      this.rightcard.texture = this["card" + (this.now + 1)];
    }

    this.centecard.texture = this["card" + this.now];
  };

  Slide.prototype.prevEvent = function prevEvent() {
    this.now -= 1;

    if (this.now < 1) {
      this.now = this.urlArr.length;
    }
  };

  Slide.prototype.nextEvent = function nextEvent() {
    this.now += 1;

    if (this.now > this.urlArr.length) {
      this.now = 1;
    }
  };

  function peachSlide(arr, idx) {
    var slide = new Slide(arr, idx);
    return slide.app;
  }

  {
    console.log("난 개발모드다");
  }

  exports.admin = admin;
  exports.client = client;
  exports.close = close;
  exports.edit = edit;
  exports.peachSlide = peachSlide;
  exports.preview = preview;
  exports.setclose = setpeachClose;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
