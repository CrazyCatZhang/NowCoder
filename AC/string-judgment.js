const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const strS = arr[0];
  const strL = arr[1];
  let indexS = 0;
  let indexL = 0;
  while (indexS < strS.length && indexL < strL.length) {
    if (strS[indexS] === strL[indexL]) {
      indexS++;
    }
    indexL++;
  }

  if (indexS === strS.length) {
    console.log(indexL - 1);
  } else {
    console.log(-1);
  }
});
