const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const flaw = parseInt(arr[0]);
  const str = arr[1].trim();

  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const vowelsIndexArr = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsIndexArr.push(i);
    }
  }

  let right = 0,
    left = 0;
  const length = [];

  while (right < vowelsIndexArr.length) {
    const diffFlaw =
      vowelsIndexArr[right] - vowelsIndexArr[left] - (right - left);
    if (diffFlaw > flaw) {
      left++;
    } else {
      if (diffFlaw === flaw) {
        length.push(vowelsIndexArr[right] - vowelsIndexArr[left] + 1);
      }
      right++;
    }
  }

  if (length.length === 0) {
    console.log(0);
    return;
  }

  length.sort((a, b) => b - a);
  console.log(length[0]);
});
