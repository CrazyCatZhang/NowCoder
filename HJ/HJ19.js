const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  const end = line.split("\\");
  const data = end[end.length - 1];
  const resData = data.split(" ");
  const firstStr = resData[0];
  if (firstStr.length > 16) {
    const subData = firstStr.slice(-16);
    arr.push(subData + " " + resData[1]);
  } else {
    arr.push(data);
  }
});

rl.on("close", () => {
  let obj = {};
  arr.forEach((item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  });
  const resArr = [];
  for (var key in obj) {
    resArr.push(key + " " + obj[key]);
  }
  if (resArr.length > 8) {
    resArr.splice(0, resArr.length - 8);
  }
  console.log(resArr.join("\n"));
});
