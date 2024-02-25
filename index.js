const fs = require("fs");

fs.watchFile("./index.html", (current, previous) => {
  console.log(`File size of the current file: ${current.size} bytes`);
  console.log(`File size of the previous file: ${previous.size} bytes`);
});
