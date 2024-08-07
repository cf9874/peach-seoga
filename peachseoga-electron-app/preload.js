const { ipcRenderer } = require('electron')

ipcRenderer.on('loaded', (event, message) => {
  if (message) {
    window.postMessage({ isApp: true })
  }
})
