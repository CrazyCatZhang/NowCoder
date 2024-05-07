const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  const base = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let text = line.replace(/[a-z]/g, (item) => {
    for (const [key, value] of Object.entries(base)) {
      if (value.includes(item)) {
        return key;
      }
    }
  });

  text = text.replace(/[A-Z]/g, (item) => {
    return item === "Z"
      ? "a"
      : String.fromCharCode(item.charCodeAt() + 1).toLowerCase();
  });

  console.log(text);
});
