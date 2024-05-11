const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const height = arr[0].split(" ").map(Number)[0];

  const students = arr[1].split(" ").map(Number);

  students.sort((a, b) => {
    const diffA = Math.abs(height - a);
    const diffB = Math.abs(height - b);

    return diffA - diffB || a - b;
  });

  console.log(students.join(" "));
});
