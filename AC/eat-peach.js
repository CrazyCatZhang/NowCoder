const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const piles = arr[0].split(" ").map(Number);
  const h = parseInt(arr[1]);
  console.log(getSpeed(piles, h));
});

function getSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (getTime(piles, mid) <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (getTime(piles, left) <= h) {
    return left;
  } else {
    return 0;
  }
}

function getTime(piles, speed) {
  let time = 0;
  for (const pile of piles) {
    time += Math.ceil(pile / speed);
  }

  return time;
}
