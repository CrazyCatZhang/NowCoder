const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  const arr = line.split(" ").map((item) => parseInt(item));
  const pluralMap = new Map();

  let maxCount = 0;

  for (const item of arr) {
    if (pluralMap.has(item)) {
      pluralMap.set(item, pluralMap.get(item) + 1);
    } else {
      pluralMap.set(item, 1);
    }
    maxCount = Math.max(maxCount, pluralMap.get(item));
  }

  let resArr = [];

  for (const [key, value] of pluralMap) {
    if (value === maxCount) {
      resArr.push(key);
    }
  }

  resArr.sort((a, b) => a - b);

  let middleNum = 0;
  if (resArr.length % 2 === 0) {
    middleNum = resArr[(resArr.length - 1) / 2];
  } else {
    let middle1 = resArr.length / 2;
    let middle2 = middle1 - 1;
    middleNum = (resArr[middle1] + resArr[middle2]) / 2;
  }

  console.log(middleNum);
});
