const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const n = parseInt(arr[0]);
  const prices = arr.slice(1, n + 1).map(Number);
  const value = parseInt(arr[n + 1]);

  let left = 0;
  let right = 0;
  let max = 0;
  let sum = 0;

  while (right < prices.length) {
    sum += prices[right];
    while (sum > value) {
      sum -= prices[left];
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }

  console.log(max);
});
