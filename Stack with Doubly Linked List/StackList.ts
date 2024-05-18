import DoublyLinkedList from "../Doubly Linked List/DoublyLinkedList";

export default class StackList<T> {
    private doublyList = new DoublyLinkedList<T>();
    // complexity - O(1)
    push = (value: T) => {
        this.doublyList.insertAtTail(value)
    };
    // complexity - O(1)
    pop = (): T | null => {
        if(this.doublyList.getSize() === 0) return null;
        const value = this.doublyList.getTailValue();
        this.doublyList.deleteTail();
        return value;
    };
    // complexity - O(1)
    top = (): T | null => {
        if(this.doublyList.getSize() === 0) return null;
        const value = this.doublyList.getTailValue();
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
