const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const frequency = arr[1]
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {});

  const threshold = parseInt(arr[2]);

  const hotMemory = Object.keys(frequency)
    .filter((key) => frequency[key] >= threshold)
    .map(Number)
    .sort((a, b) => frequency[b] - frequency[a] || a - b);

  console.log(hotMemory.length);
  if (hotMemory.length) {
    console.log(hotMemory.join("\n"));
  }
});
