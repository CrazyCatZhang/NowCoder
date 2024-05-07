/*
 * Hexadecimal conversion
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  console.log(parseInt(line, 16));
});
