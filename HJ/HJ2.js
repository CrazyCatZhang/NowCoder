/*
 * Calculates the number of a character appears
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

const arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const res = arr[0].toLocaleLowerCase();
  console.log(res.split(arr[1].toLocaleLowerCase()).length - 1);
});
