const fs = require("fs");
const dns = require("node:dns");

fs.watchFile("./index.html", (current, previous) => {
  console.log(`File size of the current file: ${current.size} bytes`);
  console.log(`File size of the previous file: ${previous.size} bytes`);
});

dns.lookup("google.com", (err, address) => {
  if (err) {
    return console.log(err);
  }

  console.log(address);
});
