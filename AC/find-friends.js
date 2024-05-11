const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const n = parseInt(arr[0]);
  const friends = arr[1].split(" ").map(Number);

  const res = new Array(n).fill(0);

  const stack = [0];

  for (let i = 1; i < n; i++) {
    while (stack.length && friends[stack[stack.length - 1]] < friends[i]) {
      res[stack.pop()] = i;
    }

    stack.push(i);
  }

  console.log(res.join(" "));
});
