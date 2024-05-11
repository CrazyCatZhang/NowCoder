const rl = require("readline").createInterface(process.stdin);

let hasLetter = false;
let longest = Number.MIN_SAFE_INTEGER;

rl.on("line", (line) => {
  getLongestString(line);
  if (!hasLetter || longest === Number.MIN_SAFE_INTEGER) {
    console.log(-1);
  } else {
    console.log(longest);
  }
});

function getLongestString(str) {
  let left = 0;
  let right = 0;

  let letters = [];

  while (right < str.length) {
    const char = str[right];

    if (char.match(/[a-zA-Z]/)) {
      hasLetter = true;
      letters.push(right);

      if (letters.length > 1) {
        left = letters.shift() + 1;
      }

      if (left === right) {
        right++;
        continue;
      }
    }

    longest = Math.max(longest, right - left + 1);
    right++;
  }

  return longest;
}
