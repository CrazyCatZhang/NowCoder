const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const arr1 = arr[0].split(" ").map(Number).slice(1);
  const arr2 = arr[1].split(" ").map(Number).slice(1);
  const k = parseInt(arr[2]);

  const res = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res.push(arr1[i] + arr2[j]);
    }
  }

  let sum = res
    .sort((a, b) => a - b)
    .slice(0, k)
    .reduce((sum, cur) => sum + cur, 0);
  console.log(sum);
});
