import chalkAnimation from "chalk-animation";
import fs from "fs";
import dns from "node:dns";

fs.watchFile("./index.html", (current, previous) => {
  chalkAnimation.rainbow(
    `File size of the current file: ${current.size} bytes`
  );
  chalkAnimation.rainbow(
    `File size of the previous file: ${previous.size} bytes`
  );
});

dns.lookup("google.com", (err, address) => {
  if (err) {
    return chalkAnimation.glitch(err);
  }

  chalkAnimation.glitch(address);
});
