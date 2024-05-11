const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const [m, n] = arr[0].split(" ").map(Number);

  const land = arr.slice(1).map((row) => row.split(" ").map(Number));

  let minProps = {};
  let maxProps = {};

  let maxLand = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = land[i][j];
      if (num !== 0) {
        if (!minProps[num]) {
          minProps[num] = { x: i, y: j };
          maxProps[num] = { x: i, y: j };
        } else {
          minProps[num].x = Math.min(minProps[num].x, i);
          minProps[num].y = Math.min(minProps[num].y, j);
          maxProps[num].x = Math.max(maxProps[num].x, i);
          maxProps[num].y = Math.max(maxProps[num].y, j);
        }
      }
    }
  }

  for (const num in minProps) {
    const area =
      (maxProps[num].x - minProps[num].x + 1) *
      (maxProps[num].y - minProps[num].y + 1);
    maxLand = Math.max(maxLand, area);
  }

  console.log(maxLand);
});
