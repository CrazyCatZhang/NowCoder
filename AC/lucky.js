const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const n = parseInt(arr[0]);
  const lucky = parseInt(arr[1]);

  const commands = arr[2].split(" ").map(Number);

  if (n > 100 || n < 1 || lucky > 100 || lucky < -100) {
    console.log("12345");
    return;
  }

  let point = 0;
  let maxPoint = 0;

  for (const command of commands) {
    if (command < -100 || command > 100) {
      console.log("12345");
      return;
    }
    if (command === lucky) {
      if (command > 0) {
        point += command + 1;
      } else if (command < 0) {
        point += command - 1;
      }
    } else {
      point += command;
    }
    maxPoint = Math.max(maxPoint, point);
  }
  console.log(maxPoint);
});
