const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  const arr = line.split(",").map(Number);

  const countMap = new Map();
  const firstMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    countMap.set(num, (countMap.get(num) || 0) + 1);
    if (!firstMap.has(num)) {
      firstMap.set(num, i);
    }
  }

  const res = Array.from(countMap.keys());

  res.sort(
    (a, b) =>
      countMap.get(b) - countMap.get(a) || firstMap.get(a) - firstMap.get(b)
  );

  console.log(res.join(","));
});
