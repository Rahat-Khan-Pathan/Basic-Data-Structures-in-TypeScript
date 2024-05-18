import DoublyLinkedList from "./DoublyLinkedList";

const doublyList = new DoublyLinkedList();
doublyList.insertAtHead(10); // 10
doublyList.insertAtTail(20); // 10 20
doublyList.insertAtTail(30); // 10 20 30
doublyList.insertAtTail(40); // 10 20 30 40
doublyList.inserAtIndex(1, 50); // 10 50 20 30 40
doublyList.sort(); // 10 20 30 40 50
doublyList.reverse(); // 50 40 30 20 10
doublyList.deleteTail(); // 10 50 20 30
doublyList.deleteHead(); // 50 20 30
doublyList.deleteAtIndex(1); // 50 30
doublyList.printLinkedList();
console.log("Size: ", doublyList.getSize());
