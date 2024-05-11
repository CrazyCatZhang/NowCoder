const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  const bricks = line.split(" ").map(Number);
  console.log(minEnergy(bricks, 8));
});

function minEnergy(bricks, hours) {
  if (bricks.length > 8) return -1;

  let left = 1;
  let right = Math.max(...bricks);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (getTime(bricks, mid) <= hours) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (getTime(bricks, left) <= hours) {
    return left;
  } else {
    return -1;
  }
}

function getTime(bricks, energy) {
  let time = 0;
  for (const brick of bricks) {
    time += Math.ceil(brick / energy);
  }
  return time;
}
