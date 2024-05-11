const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  let silverWeightArr = arr[1].split(" ").map(Number);
  silverWeightArr.sort((a, b) => b - a);

  while (silverWeightArr.length >= 3) {
    let z = silverWeightArr.shift();
    let y = silverWeightArr.shift();
    let x = silverWeightArr.shift();

    if (x === y && y === z) {
      continue;
    } else {
      let remaining = 0;

      if (x === y && y !== z) {
        remaining = z - y;
      } else if (x !== y && y === z) {
        remaining = y - x;
      } else {
        remaining = Math.abs(z - y - (y - x));
      }

      if (remaining) {
        silverWeightArr.push(remaining);
        silverWeightArr.sort((a, b) => b - a);
      }
    }
  }

  if (silverWeightArr.length === 0) {
    console.log(0);
  } else {
    console.log(silverWeightArr[0]);
  }
});
