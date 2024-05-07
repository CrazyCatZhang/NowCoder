/*
 * string sort
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

const arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  arr.shift();
  arr.sort().forEach((item) => {
    console.log(item);
  });
});
