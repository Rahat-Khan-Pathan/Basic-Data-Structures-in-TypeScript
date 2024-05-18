import QueueArray from "./QueueArray";

const queueArray = new QueueArray<number>();
queueArray.push(10); // 10
queueArray.push(20); // 10 20
queueArray.push(30); // 10 20 30
queueArray.pop(); // 20 30
queueArray.pop(); // 30
queueArray.pop(); // null
console.log(queueArray.front(), queueArray.getSize(), queueArray.isEmpty());

