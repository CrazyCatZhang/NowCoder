const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
});

rl.on("close", () => {
  let totalPoints = 0;
  const T = parseInt(arr[1]);
  const tasks = arr
    .splice(2)
    .map((task) => task.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  const minHeap = new MinHeap();

  tasks.forEach((task) => {
    const [deadline, points] = task;
    if (minHeap.size() < deadline) {
      minHeap.push(points);
    } else if (minHeap.size() > 0 && minHeap.peek() < points) {
      minHeap.pop();
      minHeap.push(points);
    }

    if (minHeap.size() > T) {
      minHeap.pop();
    }
  });

  while (minHeap.size() > 0) {
    totalPoints += minHeap.pop();
  }
  console.log(totalPoints);
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => 2 * parentIndex + 1;

  getRightChildIndex = (parentIndex) => 2 * parentIndex + 2;

  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  push = (key) => {
    this.heap.push(key);
    if (this.heap.length > 1) {
      this.heapifyUp();
    }
  };

  pop = () => {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  };

  peek = () => {
    return this.heap[0];
  };

  swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  };

  size = () => this.heap.length;

  heapifyDown = () => {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.size()) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.size() &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) break;
      else this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  };
}
