const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

// quando todas as janelas forem fechadas, fechar o app
app.on("window-all-closed", () => {
  // "darwin" ou Mac, já fecha o app de outra forma, então não é necessário
  if (process.platform !== "darwin") {
    app.quit();
  }
});
// quando apertar CTRL + R, para recarregar o app
app.on("activate", () => {
  // se todas as janelas do app forem fechadas --> criar uma janela de novo
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
