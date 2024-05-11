const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  const num = parseInt(line);
  if (isPrime(num)) {
    console.log("-1 -1");
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      const j = num / i;
      if (isPrime(i) && isPrime(j)) {
        if (i < j) {
          console.log(`${i} ${j}`);
        } else {
          console.log(`${j} ${i}`);
        }
        return;
      }
    }
  }

  console.log("-1 -1");
});

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
