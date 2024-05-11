const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  const sortedArr = line.split("").sort();

  if (sortedArr.join("") === line) {
    console.log(line);
    return;
  }

  const strArr = line.split("");

  for (let i = 0; i < sortedArr.length; i++) {
    if (strArr[i] !== sortedArr[i]) {
      const temp = strArr[i];
      let swapIndex = -1;
      for (let j = i + 1; j < sortedArr.length; j++) {
        if (strArr[j] === sortedArr[i]) {
          swapIndex = j;
        }
      }

      strArr[i] = sortedArr[i];
      strArr[swapIndex] = temp;
      break;
    }
  }

  console.log(strArr.join(""));
});
