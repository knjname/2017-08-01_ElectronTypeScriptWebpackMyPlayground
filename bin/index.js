const {app, BrowserWindow, Menu, MenuItem} = require("electron");

app.on("ready", () => {
    console.log("ready!");
    const bw = new BrowserWindow();
    bw.loadURL("http://localhost:8080");
    // app.setBadgeCount(10);
});
