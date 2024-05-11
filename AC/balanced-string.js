const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  let ans = 0;

  let count = 0;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "X") {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      ans++;
    }
  }

  console.log(ans);
});
