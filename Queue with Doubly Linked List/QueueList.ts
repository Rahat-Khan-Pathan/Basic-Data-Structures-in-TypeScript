import DoublyLinkedList from "../Doubly Linked List/DoublyLinkedList";

export default class QueueList {
    private doublyList = new DoublyLinkedList();
    // complexity - O(1)
    push = (value: number) => {
        this.doublyList.insertAtTail(value)
    };
    // complexity - O(1)
    pop = (): number | null => {
        if(this.doublyList.getSize() === 0) return null;
        const value = this.doublyList.getHeadValue();
        this.doublyList.deleteHead();
        return value;
    };
    // complexity - O(1)
    front = (): number | null => {
        if(this.doublyList.getSize() === 0) return null;
        const value = this.doublyList.getHeadValue();
        return value;
    };
    // complexity - O(1)
    isEmpty = (): boolean => {
        return this.doublyList.getSize() === 0;
    };
    // complexity - O(1)
    getSize = () => {
        return this.doublyList.getSize();
    };
}
