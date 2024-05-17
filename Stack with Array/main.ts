import StackArray from "./StackArray";

const stackArray = new StackArray();
stackArray.push(10); // 10
stackArray.push(20); // 10 20
stackArray.push(30); // 10 20 30
stackArray.pop(); // 10 20
stackArray.pop(); // 10
stackArray.pop(); // null
console.log(stackArray.top(), stackArray.getSize(), stackArray.isEmpty());
