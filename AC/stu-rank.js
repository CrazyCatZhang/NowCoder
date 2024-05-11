const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  const [n, m] = arr[0].split(" ").map(Number);
  const subjects = arr[1].split(" ");
  const students = [];
  for (let i = 2; i < n + 2; i++) {
    const [name, ...scores] = arr[i].split(" ");
    const student = new Student(name);
    for (let j = 0; j < m; j++) {
      student.addScore(subjects[j], Number(scores[j]));
    }
    students.push(student);
  }

  const rankSubject = arr[n + 2];

  students
    .sort((a, b) => {
      const aScore = !subjects.includes(rankSubject)
        ? a.totalScore
        : a.getScore(rankSubject);
      const bScore = !subjects.includes(rankSubject)
        ? b.totalScore
        : b.getScore(rankSubject);
      if (aScore !== bScore) return bScore - aScore;
      return a.name.localeCompare(b.name);
    })
    .map((student) => student.name);

  console.log(students.join(" "));
});

class Student {
  constructor(name) {
    this.name = name;
    this.totalScore = 0;
    this.score = {};
  }

  addScore(subject, score) {
    this.score[subject] = score;
    this.totalScore += score;
  }

  getScore(subject) {
    return this.score[subject] || 0;
  }
}
