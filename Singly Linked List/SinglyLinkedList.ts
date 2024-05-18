class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
export default class SinglyLinkedList<T> {
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
            this.size--;
        }
    };
    // complexity - O(1)
    insertAtTail = (value: T) => {
        if (this.tail === null) {
            this.head = new LinkedListNode<T>(value);
            this.tail = this.head;
        } else {
            const newNode = new LinkedListNode(value);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    };
    // complexity - O(N)
    deleteTail = () => {
        if (this.head === null) {
            return;
        }
        if (this.head.next === null) {
            this.deleteHead();
            return;
        }
        let tmp = this.head;
        while (tmp.next !== null && tmp.next.next !== null) {
            tmp = tmp.next;
        }
        tmp.next = null;
        this.tail = tmp;
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
        tmp.next = newNode;
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
            tmp.next = tmp.next.next;
        } else {
            tmp.next = null;
        }
        this.size--;
    };
    // complexity - O(N)
    printLinkedList = () => {
        let tmp = this.head;
        while (tmp !== null) {
            console.log(tmp.value);
            tmp = tmp.next;
        }
    };
    // complexity - O(1)
    getSize = () => {
        return this.size;
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
    // recursive technique
    reverse = (curNode = this.head): LinkedListNode<T> | null => {
        if (curNode === null) return null;
        if (curNode.next === null) {
            this.head = curNode;
            return curNode;
        }
        const nextNode = this.reverse(curNode.next);
        if (nextNode) nextNode.next = curNode;
        curNode.next = null;
        return curNode;
    };
}
