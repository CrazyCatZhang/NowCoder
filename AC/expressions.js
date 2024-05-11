const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  target = parseInt(line);
  console.log(`${target} = ${target}`);

  const expressions = [];

  for (let i = 0; i < target; i++) {
    let sum = 0;
    let expression = "";

    for (let j = i; j < target; j++) {
      sum += j;
      expression += `${j}+`;
      if (sum === target) {
        expressions.push(expression.slice(0, -1));
        break;
      }
    }
  }

  expressions.sort((a, b) => {
    return a.split("+").length - b.split("+").length;
  });

  expressions.forEach((expression) => {
    console.log(`${target} = ${expression}`);
  });

  console.log(`Result: ${expressions.length + 1}`);
});
