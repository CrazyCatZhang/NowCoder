/*
 * character count
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  console.log(Array.from(new Set(line.split(""))).length);
});
