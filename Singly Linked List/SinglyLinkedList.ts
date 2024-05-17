class LinkedListNode  {
    value: number;
    next: LinkedListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
export default class SinglyLinkedList {
    private head: LinkedListNode | null = null;
    private tail: LinkedListNode | null = null;
    private size: number = 0;
    insertAtHead = (value: number)=> {
        if(this.head === null) {
            this.head = new LinkedListNode(value);
            this.tail = this.head;
        } else {
            const newNode = new LinkedListNode(value);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    deleteHead = ()=> {
        if(this.head === null) {
            return;
        }
        else if(this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.size--;
        } else {
            this.head = this.head.next;
            this.size--;
        }
    }
    insertAtTail = (value: number)=> {
        if(this.tail === null) {
            this.head = new LinkedListNode(value);
            this.tail = this.head;
        } else {
            const newNode = new LinkedListNode(value);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    deleteTail = ()=> {
        if(this.head === null) {
            return;
        }
        if(this.head.next === null) {
            this.deleteHead();
            return;
        }
        let tmp = this.head;
        while(tmp.next !== null && tmp.next.next != null) {
            tmp = tmp.next;
        }
        tmp.next = null;
        this.tail = tmp;
        this.size--;
    }
    inserAtIndex = (index: number, value: number)=> {
        if(index === 0) {
            this.insertAtHead(value);
            return;
        }
        if(index === this.size) {
            this.insertAtTail(value);
            return;
        }
        let tmp = this.head!;
        for(let i=0; i<index-1; i++) {
            if(tmp.next===null) {
                return;
            }
            tmp = tmp.next;
        }
        const newNode = new LinkedListNode(value);
        newNode.next = tmp.next;
        tmp.next = newNode;
        this.size++;
    }
    deleteAtIndex = (index: number) => {
        if(index === 0) {
            this.deleteHead();
            return;
        }
        if(index === this.size-1) {
            this.deleteTail();
            return;
        }
        let tmp = this.head!;
        for(let i=0; i<index-1; i++) {
            if(tmp.next===null) {
                return;
            }
            tmp = tmp.next;
        }
        if(tmp.next !== null && tmp.next.next != null) {
            tmp.next = tmp.next.next;
        } else {
            tmp.next = null;
        }
        this.size--;
    }
    printLinkedList = ()=> {
        let tmp = this.head;
        while(tmp !== null) {
            console.log(tmp.value);
            tmp=tmp.next;
        }
    }
    getSize = ()=> {
        return this.size;
    }
}