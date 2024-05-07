/*
 * Merge table records
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

const arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  arr.shift();
  const res = {};
  arr.forEach((item) => {
    temp = item.split(" ");
    if (res[temp[0]]) {
      res[temp[0]] += parseInt(temp[1]);
    } else {
      res[temp[0]] = parseInt(temp[1]);
    }
  });

  for (const key in res) {
    if (Object.hasOwnProperty.call(res, key)) {
      console.log(key + " " + res[key]);
    }
  }
});
