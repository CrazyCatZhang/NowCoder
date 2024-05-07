/*
 * The number of 1s in the integer in memory
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  let res = 0;
  parseInt(line)
    .toString(2)
    .split("")
    .forEach((e) => {
      if (e === "1") res++;
    });
  console.log(res);
});
