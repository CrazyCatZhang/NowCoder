const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  const arr = line.split(" ");
  const str = arr[0];
  const length = parseInt(arr[1]);
  const result = new Set();
  const used = new Array(str.length).fill(false);
  generateDistinctString(str, length, "", result, used);
  console.log([...result].join(" "));
});

function generateDistinctString(str, length, currentStr, result, used) {
  if (currentStr.length === length) {
    result.add(currentStr);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    if (
      used[i] ||
      (currentStr.length > 0 && currentStr[currentStr.length - 1] === str[i])
    )
      continue;
    used[i] = true;
    generateDistinctString(str, length, currentStr + str[i], result, used);
    used[i] = false;
  }
}
