import chalk from "chalk";
import fs from "fs";
import dns from "node:dns";

fs.watchFile("./index.html", (current, previous) => {
  console.log(
    chalk.orange(`File size of the current file: ${current.size} bytes`)
  );
  console.log(
    chalk.orange(`File size of the previous file: ${previous.size} bytes`)
  );
});

dns.lookup("google.com", (err, address) => {
  if (err) {
    return console.log(chalk.red(err));
  }

  console.log(chalk.blue(address));
});
