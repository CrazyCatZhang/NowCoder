const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  const res = line
    .split(",")
    .map(Number)
    .sort((a, b) => getKey(a) - getKey(b))
    .join(",");
  console.log(res);
});

function getKey(num) {
  num = num > 0 ? num : -num;
  return num % 10;
}
