/*
 * Prime factors
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  const minIndex = parseInt(Math.sqrt(num));
  for (let i = 2; i <= minIndex; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

rl.on("line", (line) => {
  line = parseInt(line);
  const res = [];
  const minIndex = parseInt(Math.sqrt(line));
  for (let i = 2; i <= minIndex; i++) {
    while (line % i === 0) {
      if (isPrime(i)) {
        res.push(i);
      }
      line /= i;
    }
  }
  if (line > 1) {
    res.push(line);
  }
  console.log(res.join(" "));
});
