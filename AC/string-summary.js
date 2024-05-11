const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  line = line.toLowerCase();

  const charCountArray = new Array(128).fill(0);

  let str = "";

  for (let i = 0; i < line.length; i++) {
    char = line[i];

    if (char >= "a" && char <= "z") {
      charCountArray[char.charCodeAt(0)]++;
      str += char;
    }
  }

  str = str + " ";

  const summary = [];
  let pre = str.charAt(0);
  let repeat = 1;

  charCountArray[pre.charCodeAt(0)]--;

  for (let i = 1; i < str.length; i++) {
    const current = str.charAt(i);
    charCountArray[current.charCodeAt(0)]--;
    if (current === pre) {
      repeat++;
    } else {
      summary.push(
        pre + (repeat > 1 ? repeat : charCountArray[pre.charCodeAt(0)])
      );
      pre = current;
      repeat = 1;
    }
  }

  summary.sort(
    (a, b) => b[1] - a[1] || a[0].charCodeAt(0) - b[0].charCodeAt(0)
  );

  console.log(summary.join(""));
});
