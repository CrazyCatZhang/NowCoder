const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  const hill = line.split(",").map((item) => parseInt(item));
  let count = 0;
  for (let i = 0; i < hill.length; i++) {
    if (i === 0 && hill[i] > hill[i + 1]) count++;
    else if (i === hill.length - 1 && hill[i] > hill[i - 1]) count++;
    else if (hill[i] > hill[i - 1] && hill[i] > hill[i + 1]) count++;
  }
  console.log(count);
});
