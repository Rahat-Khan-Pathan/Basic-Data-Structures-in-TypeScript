import MaxHeap from "./MaxHeap";

const maxHeap = new MaxHeap<number>();
maxHeap.push(40);
maxHeap.push(50);
maxHeap.push(50);
maxHeap.push(70);
maxHeap.push(30);
maxHeap.pop();
console.log(maxHeap.top());

