const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  let maxCount = 0;

  for (let i = 0; i < line.length; i++) {
    if (
      line[i] === "0" &&
      (i === 0 || line[i - 1] === "0") &&
      (i === line.length - 1 || line[i + 1] === "0")
    ) {
      maxCount++;
      line = line.slice(0, i) + "1" + line.slice(i + 1);
      i++;
    }
  }

  console.log(maxCount);
});
