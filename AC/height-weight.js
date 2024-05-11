const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const height = arr[1].split(" ").map(Number);
  const weight = arr[2].split(" ").map(Number);

  const people = height.map((h, idx) => ({
    height: h,
    weight: weight[idx],
    idx,
  }));

  people.sort((a, b) => a.height - b.height || a.weight - b.weight);

  console.log(people.map((person) => person.idx + 1).join(" "));
});
