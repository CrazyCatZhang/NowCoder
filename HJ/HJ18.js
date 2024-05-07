/*
 * Identify valid IP addresses and masks and perform classification statistics
 */

const rl = require("readline").createInterface(process.stdin, process.stdout);

const res = [];

rl.on("line", (line) => {
  const arr = line.split("~");
  res.push({
    ip: arr[0],
    mask: arr[1],
  });
});

rl.on("close", () => {
  checkIPAndMask(res);
});

function isValidIP(ip) {
  if (!ip) return false;
  const ipReg = /^\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}$/;
  if (!ipReg.test(ip)) return false;
  ip.split(".").forEach((item) => {
    if (Number(item) < 0 || Number(item) > 255) return false;
  });
  return true;
}

function isValidSubMask(mask) {
  const arr = mask.split(".");
  let binary = "";
  arr.forEach((item) => {
    binary += parseInt(item).toString(2).padStart(8, "0");
  });
  if (binary.includes("01")) return false;
  if (binary.indexOf("0") < 0 || binary.indexOf("1") < 0) return false;
  return true;
}

function isPrivateIP(ip) {
  const arr = ip.split(".");
  const firstNumber = parseInt(arr[0]);
  const secondNumber = parseInt(arr[1]);
  if (
    firstNumber === 10 ||
    (firstNumber === 172 && secondNumber >= 16 && secondNumber <= 31) ||
    (firstNumber === 192 && secondNumber === 168)
  ) {
    return true;
  }
  return false;
}

function checkIPAndMask(data) {
  const counter = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    Error: 0,
    Private: 0,
  };

  data.forEach((item) => {
    const firstIPNumber = parseInt(item.ip.split(".")[0]);
    if (firstIPNumber === 0 || firstIPNumber === 127) return;
    if (!isValidIP(item.ip) || !isValidSubMask(item.mask)) {
      counter.Error++;
    } else {
      if (isPrivateIP(item.ip)) {
        counter.Private++;
      }
      if (firstIPNumber > 0 && firstIPNumber < 127) {
        counter.A++;
      } else if (firstIPNumber > 127 && firstIPNumber < 192) {
        counter.B++;
      } else if (firstIPNumber > 191 && firstIPNumber < 224) {
        counter.C++;
      } else if (firstIPNumber > 223 && firstIPNumber < 240) {
        counter.D++;
      } else if (firstIPNumber > 239 && firstIPNumber < 256) {
        counter.E++;
      }
    }
  });

  let result = "";

  for (const key in counter) {
    if (Object.hasOwnProperty.call(counter, key)) {
      result += counter[key] + " ";
    }
  }

  console.log(result);
}
