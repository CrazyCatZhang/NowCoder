/*
 * random number
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

const arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  arr.shift();
  Array.from(new Set(arr))
    .sort((a, b) => a - b)
    .forEach((item) => {
      console.log(item);
    });
});
