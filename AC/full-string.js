const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  const arr = line.split("@");
  const fullString = arr[0];
  const occupiedString = arr[1];

  const fullStringArr = fullString.split(",");

  const resultMap = new Map();

  for (const item of fullStringArr) {
    const itemArr = item.split(":");
    resultMap.set(itemArr[0], itemArr[1]);
  }

  if (occupiedString === "") {
    console.log(
      [...resultMap].map(([key, value]) => `${key}:${value}`).join(",")
    );
    return;
  }

  const occupiedStringArr = occupiedString.split(",");

  for (const item of occupiedStringArr) {
    const itemArr = item.split(":");
    if (resultMap.has(itemArr[0])) {
      resultMap.set(itemArr[0], resultMap.get(itemArr[0]) - itemArr[1]);
    }
  }

  console.log(
    [...resultMap].map(([key, value]) => `${key}:${value}`).join(",")
  );
});
