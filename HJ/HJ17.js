/*
 * Coordinate mobile
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  const arr = line.split(";");
  const res = [0, 0];
  arr.forEach((item) => {
    const a = item.slice(0, 1);
    const b = Number(item.slice(1));
    if (isNaN(b)) return;
    switch (a) {
      case "A":
        res[0] -= b;
        break;
      case "D":
        res[0] += b;
        break;
      case "W":
        res[1] += b;
        break;
      case "S":
        res[1] -= b;
        break;
      default:
        break;
    }
  });

  console.log(res.join(","));
});
