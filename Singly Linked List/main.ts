import SinglyLinkedList from "./SinglyLinkedList";

const singlyList = new SinglyLinkedList<number>();
singlyList.insertAtHead(10); // 10
singlyList.insertAtTail(20); // 10 20
singlyList.insertAtTail(30); // 10 20 30
singlyList.insertAtTail(40); // 10 20 30 40
singlyList.inserAtIndex(1, 50); // 10 50 20 30 40
singlyList.sort(); // 10 20 30 40 50
singlyList.reverse(); // 50 40 30 20 10
singlyList.deleteTail(); // 10 50 20 30
singlyList.deleteHead(); // 50 20 30
singlyList.deleteAtIndex(1); // 50 30
singlyList.deleteHead();
singlyList.deleteHead();
singlyList.deleteAtIndex(2);
singlyList.printLinkedList();
console.log("Size: ", singlyList.getSize());
