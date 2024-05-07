const rl = require("readline").createInterface(process.stdin, process.stdout);

const res = [];

rl.on("line", (line) => {
  res.push(line);
});

rl.on("close", () => {
  res.forEach((item) => {
    if (validPassword(item) && isSubString(item)) {
      console.log("OK");
    } else {
      console.log("NG");
    }
  });
});

function validPassword(password) {
  if (password.length <= 8) {
    return false;
  }
  const reg1 = /[A-Z]/;
  const reg2 = /[a-z]/;
  const reg3 = /\d/;
  const reg4 = /[^A-Za-z0-9]/;
  let count = 0;
  if (reg1.test(password)) count++;
  if (reg2.test(password)) count++;
  if (reg3.test(password)) count++;
  if (reg4.test(password)) count++;
  if (count >= 3) {
    return true;
  }
  return false;
}

function isSubString(str) {
  let arr = [];
  for (let i = 0; i < str.length - 2; i++) {
    const subStr = str.slice(i, i + 3);
    if (arr.includes(subStr)) {
      return false;
    } else {
      arr.push(subStr);
    }
  }
  return true;
}
