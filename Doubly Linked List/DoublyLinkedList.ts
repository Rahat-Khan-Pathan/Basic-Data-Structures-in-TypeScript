class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
export default class DoublyLinkedList<T> {
    private head: LinkedListNode<T> | null = null;
    private tail: LinkedListNode<T> | null = null;
    private size: number = 0;
    // complexity - O(1)
    insertAtHead = (value: T) => {
        if (this.head === null) {
            this.head = new LinkedListNode<T>(value);
            this.tail = this.head;
        } else {
            const newNode = new LinkedListNode<T>(value);
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
    insertAtTail = (value: T) => {
        if (this.tail === null) {
            this.head = new LinkedListNode<T>(value);
            this.tail = this.head;
        } else {
            const newNode = new LinkedListNode<T>(value);
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
    inserAtIndex = (index: number, value: T) => {
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
        const newNode = new LinkedListNode<T>(value);
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
    getSize = (): number => {
        return this.size;
    };
    // complexity - O(1)
    getHeadValue = (): T | null => {
        if (this.head === null) return null;
        return this.head.value;
    };
    // complexity - O(1)
    getTailValue = (): T | null => {
        if (this.tail === null) return null;
        return this.tail.value;
    };
    // complexity - O(N^2)
    // selection sort
    sort = () => {
        let tmp1 = this.head;
        while (tmp1 !== null) {
            let tmp2 = tmp1.next;
            while (tmp2 !== null) {
                if (tmp1.value > tmp2.value) {
                    [tmp1.value, tmp2.value] = [tmp2.value, tmp1.value];
                }
                tmp2 = tmp2.next;
            }
            tmp1 = tmp1.next;
        }
    };
    // complexity - O(N)
    // two pointers technique
    reverse = () => {
        let i = this.head;
        let j = this.tail;
        while (i && j && i !== j && j.next !== i) {
            [i.value, j.value] = [j.value, i.value];
            i = i.next;
            j = j.prev;
        }
    };
}
