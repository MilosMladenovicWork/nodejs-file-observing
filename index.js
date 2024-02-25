import chalk from "chalk";
import fs from "fs";
import dns from "node:dns";

fs.watchFile("./index.html", (current, previous) => {
  console.log(
    chalk.blue(
      `File size of the current file: ${chalk.underline(current.size)} bytes`
    )
  );
  console.log(
    chalk.blue(
      `File size of the previous file: ${chalk.underline(previous.size)} bytes`
    )
  );
});

dns.lookup("google.com", (err, address) => {
  if (err) {
    return console.log(chalk.bgRed(err));
  }

  console.log(chalk.bgBlue(address));
});
