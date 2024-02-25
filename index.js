const fs = require("fs");

fs.watchFile("./index.html", () => console.log("listener called"));
