const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const nums = arr[1].split(" ").map(Number);
  const n = parseInt(arr[2]);
  console.log(getSumOfMaxAndMin(nums, n));
});

function getSumOfMaxAndMin(nums, n) {
  const numSet = new Set(nums);

  for (const num of numSet) {
    if (num < 0 || num > 1000) return -1;
  }

  if (numSet.size < 2 * n) return -1;

  const sortedNums = nums.sort((a, b) => a - b);

  let left = 0,
    right = sortedNums.length - 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += sortedNums[left] + sortedNums[right];
    left++;
    right--;
  }

  return sum;
}
