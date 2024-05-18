import StackList from "./StackList";


const stackList = new StackList<number>();
stackList.push(10); // 10
stackList.push(20); // 10 20
stackList.push(30); // 10 20 30
stackList.pop(); // 10 20
stackList.pop(); // 10
stackList.pop(); // null
console.log(stackList.top(), stackList.getSize(), stackList.isEmpty());
