const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const n = parseInt(arr[0]);
  const words = arr.slice(1, n + 1);
  const chars = arr[n + 1];

  const count = new Array(26).fill(0);
  let wildcards = 0;
  for (const char of chars) {
    if (char !== "?") {
      count[char.charCodeAt(0) - 97]++;
    } else {
      wildcards++;
    }
  }

  let res = 0;

  for (const word of words) {
    const wordCount = new Array(26).fill(0);
    for (const char of word) {
      wordCount[char.charCodeAt(0) - 97]++;
    }

    if (canSpell(wordCount, count, wildcards)) {
      res++;
    }
  }

  console.log(res);
});

function canSpell(wordCount, count, wildcards) {
  for (let i = 0; i < 26; i++) {
    if (wordCount[i] > count[i]) {
      wildcards -= wordCount[i] - count[i];

      if (wildcards < 0) {
        return false;
      }
    }
  }

  return true;
}
