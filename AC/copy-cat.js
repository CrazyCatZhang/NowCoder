const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  let count = parseInt(arr.shift());

  const staff = arr
    .map((el) => el.split(" ").map(Number))
    .sort((a, b) => a[1] - b[1]);

  const result = [];

  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < count - 1; i++) {
    for (let j = i + 1; j < count; j++) {
      const diff = staff[j][1] - staff[i][1];
      if (diff < min) {
        result.length = 0;
        min = diff;
        result.push({
          id1: Math.min(staff[i][0], staff[j][0]),
          id2: Math.max(staff[i][0], staff[j][0]),
        });
      } else if (diff === min) {
        result.push({
          id1: Math.min(staff[i][0], staff[j][0]),
          id2: Math.max(staff[i][0], staff[j][0]),
        });
      } else {
        break;
      }
    }
  }

  result.sort((a, b) => a.id1 - b.id1 || a.id2 - b.id2);

  result.forEach((el) => console.log(el.id1, el.id2));
});
