const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const powerAGroups = arr[1].split(" ").map(Number);
  const totalPowerA = powerAGroups.reduce((acc, cur) => acc + cur, 0);

  const powerBGroups = arr[2].split(" ").map(Number);
  const totalPowerB = powerBGroups.reduce((acc, cur) => acc + cur, 0);

  const halfDifference = Math.round((totalPowerA - totalPowerB) / 2);

  powerAGroups.sort((a, b) => a - b);

  for (const power of powerAGroups) {
    const powerB = power - halfDifference;

    if (powerBGroups.includes(powerB)) {
      console.log(`${power} ${powerB}`);
      break;
    }
  }
});
