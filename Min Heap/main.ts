import MinHeap from "./MinHeap";

const minHeap = new MinHeap<number>();
minHeap.push(40);
minHeap.push(50);
minHeap.push(50);
minHeap.push(20);
minHeap.push(30);
minHeap.pop();
console.log(minHeap.top());
