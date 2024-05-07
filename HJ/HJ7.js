/*
 * Take approximation
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  const intNum = parseInt(line);
  const floatNum = parseFloat(line);
  if (floatNum - intNum >= 0.5) {
    console.log(Math.ceil(floatNum));
  } else {
    console.log(Math.floor(floatNum));
  }
});
