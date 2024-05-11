const rl = require("readline").createInterface(process.stdin);

rl.on("line", (line) => {
  let result = [];
  for (const item of line) {
    if (item === "<") {
      result.pop();
    } else {
      result.push(item);
    }
  }

  console.log(isValidPassword(result.join("")));
});

function isValidPassword(password) {
  // Write your code here
  // Return true if the password is valid, otherwise return false
  if (password.length < 8) {
    return false;
  }

  if (password.includes(" ")) {
    return false;
  }

  if (
    password.match(/[0-9]/g) &&
    password.match(/[A-Z]/g) &&
    password.match(/[a-z]/g) &&
    password.match(/[^a-zA-Z\d]/g)
  ) {
    return true;
  }

  return false;
}
