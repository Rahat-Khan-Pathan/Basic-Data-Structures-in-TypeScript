import QueueList from "./QueueList";

const queueList = new QueueList();
queueList.push(10); // 10
queueList.push(20); // 10 20
queueList.push(30); // 10 20 30
queueList.pop(); // 20 30
queueList.pop(); // 30
queueList.pop(); // null
console.log(queueList.front(), queueList.getSize(), queueList.isEmpty());
