"use strict";

const electron = require("electron");
const app = electron.app;
const ipcMain = electron.ipcMain;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;
require("@electron/remote/main").initialize();
const mainRemote = require("@electron/remote/main");

var path = require("path");
//윈도우 객체 전역에 유지
var mainWindow = null;

//

app.on("window-all-closed", function () {
  if (process.platform != "drawin") app.quit();
});

app.on("ready", async function () {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, "assets/icons/png/64x64.png"),
    title: "피치서가",
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
  });

  mainRemote.enable(mainWindow.webContents);

  mainWindow.maximize();
  // mainWindow.setResizable(false)
  mainWindow.setMinimumSize(1200, 700);
  const agent = mainWindow.webContents.getUserAgent() + "isApp";
  mainWindow.loadURL("https://www.peachseoga.com/", {
    extraHeaders: "pragma: no-cache\n",
    userAgent: agent,
  });

  //디버그 모드
  // mainWindow.webContents.openDevTools()

  // mainWindow.webContents.on("did-finish-load", () => {
  //   mainWindow.webContents.send("loaded", true)
  // })

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  const web = mainWindow.webContents;
  ipcMain.on("print", async (event, data) => {  
    const printDetail = data.split(',')
    const [copies , color] = printDetail
    const pi = await web.getPrintersAsync();

    const printer = pi.filter((printer) => printer.isDefault === true)[0];
    
    if (printer && printer.name.indexOf("PDF") < 0) {

      event.sender.send('result', 'successs')
      const options = {    
        silent:true,    
        deviceName: printer.name,
        landscape: true,
        color : JSON.parse(color),
        copies: +copies,
      };
      console.log(options);
      web.print(options);
    } else {
      event.sender.send('result', 'fail')
      dialog.showErrorBox("Error", "기본프린터가 없거나 지원하지 않는 프린터입니다.");
    }
  });

  // mainWindow.on("print", async function () {
  //   const web = mainWindow.webContents;
  //   const pi = await web.getPrintersAsync();

  //   const printer = pi.filter((printer) => printer.isDefault === true)[0];
  //   if (printer && printer.name.indexOf("PDF") < 0) {
  //     const options = {
  //       silent: true,
  //       deviceName: printer.name,
  //     };

  //     web.print(options);
  //   } else {
  //     dialog.showErrorBox("Error", "기본프린터가 없거나 지원하지 않는 프린터입니다.");
  //   }
  // });
  const filter = {
    urls: ["https://www.peachseoga.com/*"],
  };

  electron.session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
    console.log(details);
    details.requestHeaders["Origin"] = "https://www.peachseoga.com";
    callback({ requestHeaders: details.requestHeaders });
  });

  electron.session.defaultSession.webRequest.onHeadersReceived(filter, (details, callback) => {
    console.log(details);
    details.responseHeaders["Access-Control-Allow-Origin"] = ["capacitor-electron://-"];
    callback({ responseHeaders: details.responseHeaders });
  });

  electron.app.init();
});
