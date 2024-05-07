/*
 * The length of the last word of the string
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  let arr = line.split(" ");
  console.log(arr[arr.length - 1].length);
});
