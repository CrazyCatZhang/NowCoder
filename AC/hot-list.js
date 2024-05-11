const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const n = parseInt(arr[0]);
  const weight = arr[1].split(" ").map(Number);

  const projects = [];

  for (let i = 2; i < n + 2; i++) {
    const name = arr[i].split(" ")[0];
    const scores = arr[i].split(" ").slice(1).map(Number);

    let hot = 0;

    for (let j = 0; j < 5; j++) {
      hot += weight[j] * scores[j];
    }

    projects.push({ name, hot });
  }

  projects.sort((a, b) => b.hot - a.hot || a.name.localeCompare(b.name));

  for (const project of projects) {
    console.log(project.name);
  }
});
