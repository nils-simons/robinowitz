const path = require("path");
const { app, BrowserWindow, Menu, nativeImage, Tray } = require("electron");

const AutoLaunch = require("auto-launch");
let autoLaunch = new AutoLaunch({
  name: "Robinowitz",
  path: app.getPath("exe"),
});
autoLaunch.isEnabled().then((isEnabled) => {
  if (!isEnabled) autoLaunch.enable();
});
require("../app/server");
