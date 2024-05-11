const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  let count = 0;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "o") {
      count++;
    }
  }

  if (count % 2 === 0) {
    console.log(line.length);
  } else {
    console.log(line.length - 1);
  }
});
