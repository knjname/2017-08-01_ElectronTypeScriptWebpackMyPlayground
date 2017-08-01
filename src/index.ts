import {remote} from "electron"

console.log("ready!");
let i = 0;
setInterval(() => {
    remote.app.setBadgeCount(i++);
}, 1)
