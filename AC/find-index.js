const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const nums = arr[0]
    .split(",")
    .map(Number)
    .sort((a, b) => a - b);
  const target = parseInt(arr[1]);

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  console.log(left + 1);
});
