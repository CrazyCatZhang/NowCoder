const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  const price = line.split(" ").map(Number);

  const n = price.length;

  const res = new Array(n).fill(0);

  const stack = [];

  for (let i = 0; i < 2 * n - 1; i++) {
    const index = i % n;

    while (stack.length && price[stack[stack.length - 1]] > price[index]) {
      let tag = stack.pop();
      res[tag] = price[tag] + price[index];
    }

    if (i < n) {
      stack.push(i);
    }
  }

  while (stack.length) {
    let tag = stack.pop();
    res[tag] = price[tag];
  }

  console.log(res.join(" "));
});
