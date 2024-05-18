import DoublyLinkedList from "../Doubly Linked List/DoublyLinkedList";

export default class QueueList<T> {
    private doublyList = new DoublyLinkedList<T>();
    // complexity - O(1)
    push = (value: T) => {
        this.doublyList.insertAtTail(value)
    };
    // complexity - O(1)
    pop = (): T | null => {
        if(this.doublyList.getSize() === 0) return null;
        const value = this.doublyList.getHeadValue();
        this.doublyList.deleteHead();
        return value;
    };
    // complexity - O(1)
    front = (): T | null => {
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
