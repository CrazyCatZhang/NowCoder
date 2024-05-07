/*
 * Extract unique integers
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  line = line.split("").reverse();
  let res = "";
  Array.from(new Set(line)).forEach((item) => {
    res += item;
  });
  console.log(res);
});
