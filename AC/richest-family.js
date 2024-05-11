const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const count = parseInt(arr[0]);
  const wealth = arr[1].split(" ").map(Number);
  wealth.unshift(0);
  const familyWealth = [...wealth];
  const richestFamily = wealth[1];

  for (let i = 2; i < count + 1; i++) {
    const [parent, child] = arr[i].split(" ").map(Number);
    familyWealth[parent] += wealth[child];
    richestFamily = Math.max(richestFamily, familyWealth[parent]);
  }

  console.log(richestFamily);
});
