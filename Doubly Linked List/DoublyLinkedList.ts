class LinkedListNode {
    value: number;
    next: LinkedListNode | null;
    prev: LinkedListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
export default class DoublyLinkedList {
    private head: LinkedListNode | null = null;
    private tail: LinkedListNode | null = null;
    private size: number = 0;
    // complexity - O(1)
    insertAtHead = (value: number) => {
        if (this.head === null) {
            this.head = new LinkedListNode(value);
            this.tail = this.head;
        } else {
            const newNode = new LinkedListNode(value);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    };
    // complexity - O(1)
    deleteHead = () => {
        if (this.head === null) {
            return;
        } else if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.size--;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
        }
    };
    // complexity - O(1)
    insertAtTail = (value: number) => {
        if (this.tail === null) {
            this.head = new LinkedListNode(value);
            this.tail = this.head;
        } else {
            const newNode = new LinkedListNode(value);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    };
    // complexity - O(1)
    deleteTail = () => {
        if (this.head === null || this.tail === null) {
            return;
        }
        if (this.head.next === null) {
            this.deleteHead();
            return;
        }
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        this.size--;
    };
    // complexity - O(N)
    inserAtIndex = (index: number, value: number) => {
        if (index === 0) {
            this.insertAtHead(value);
            return;
        }
        if (this.head === null) {
            return;
        }
        if (index === this.size) {
            this.insertAtTail(value);
            return;
        }
        let tmp = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (tmp.next === null) {
                return;
            }
            tmp = tmp.next;
        }
        const newNode = new LinkedListNode(value);
        newNode.next = tmp.next;
        if (tmp.next) tmp.next.prev = newNode;
        tmp.next = newNode;
        newNode.prev = tmp;
        this.size++;
    };
    // complexity - O(N)
    deleteAtIndex = (index: number) => {
        if (index === 0) {
            this.deleteHead();
            return;
        }
        if (this.head === null) {
            return;
        }
        if (index === this.size - 1) {
            this.deleteTail();
            return;
        }
        let tmp = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (tmp.next === null) {
                return;
            }
            tmp = tmp.next;
        }
        if (tmp.next !== null && tmp.next.next !== null) {
            tmp.next.next.prev = tmp;
            tmp.next = tmp.next.next;
        } else {
            tmp.next = null;
        }
        this.size--;
    };
    // complexity - O(N)
    printLinkedList = () => {
        let tmp = this.head;
        console.log("Front:");
        while (tmp !== null) {
            console.log(tmp.value);
            tmp = tmp.next;
        }
        console.log("Back:");
        tmp = this.tail;
        while (tmp != null) {
            console.log(tmp.value);
            tmp = tmp.prev;
        }
    };
    // complexity - O(1)
    getSize = () => {
        return this.size;
    };
}
