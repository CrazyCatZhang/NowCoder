const rl = require("readline").createInterface(process.stdin);

let res = Number.MAX_SAFE_INTEGER;
let totalSum = 0;

function dfs(nums, idx, count, currentSum) {
  if (count === 5) {
    const otherSum = totalSum - currentSum;
    const diff = Math.abs(currentSum - otherSum);
    res = Math.min(res, diff);
  }

  if (idx === nums.length) {
    return;
  }

  dfs(nums, idx + 1, count + 1, currentSum + nums[idx]);

  dfs(nums, idx + 1, count, currentSum);
}

rl.on("line", (line) => {
  const nums = line.split(" ").map(Number);

  for (const num of nums) {
    totalSum += num;
  }

  dfs(nums, 0, 0, 0);

  console.log(res);
});
