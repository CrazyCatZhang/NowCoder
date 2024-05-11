const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  let correct = 0;

  for (let i = 0; i < line.length; i++) {
    let digit = parseInt(line[i]);
    if (digit > 4) digit--;
    correct = correct * 9 + digit;
  }
  console.log(correct);
});
