const rl = require("readline").createInterface(process.stdin);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const count = parseInt(arr[0]);
  const res = [];
  for (let i = 1; i <= count; i++) {
    const records = arr[i].split(" ");
    res.push(canReceiveAward(records));
  }
  console.log(res.join(" "));
});

function canReceiveAward(records) {
  let absentCount = 0;

  for (let i = 0; i < records.length; i++) {
    if (records[i] === "absent") {
      absentCount++;

      if (absentCount > 1) return false;
    }

    if (records[i] === "late" || records[i] === "leaveearly") {
      if (
        i > 0 &&
        (records[i - 1] === "late" || records[i - 1] === "leaveearly")
      ) {
        return false;
      }
    }

    if (i >= 6) {
      let countDays = 0;
      for (let j = i - 6; j <= i; j++) {
        if (records[j] !== "present") {
          countDays++;
        }
      }

      if (countDays > 3) {
        return false;
      }
    }
  }

  return true;
}
