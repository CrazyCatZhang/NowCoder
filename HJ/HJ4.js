/*
 * split string
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

function splitStr(str) {
  if (str.length > 8) {
    console.log(str.slice(0, 8));
    splitStr(str.slice(8));
  } else {
    console.log(str.padEnd(8, "0"));
  }
}

rl.on("line", (line) => {
  splitStr(line);
});
