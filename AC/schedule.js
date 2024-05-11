const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
}).on("close", () => {
  const maxTasks = parseInt(arr[0]);
  const taskLength = parseInt(arr[1]);
  const tasks = arr[2].split(" ").map(Number);

  let time = 0;
  let currentTask = 0;
  let index = 0;

  while (currentTask !== 0 || index !== taskLength) {
    if (index < taskLength) {
      currentTask += tasks[index];
      index++;
    }
    currentTask -= maxTasks;
    if (currentTask < 0) {
      currentTask = 0;
    }
    time++;
  }

  console.log(time);
});
