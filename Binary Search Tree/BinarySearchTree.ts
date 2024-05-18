import QueueList from "../Queue with Doubly Linked List/QueueList";

class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export default class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;
    // complexity - O(N)
    private convertToBST = (
        inputArray: T[],
        l: number = 0,
        r: number = inputArray.length - 1
    ): TreeNode<T> | null => {
        if (l > r) return null;
        const mid: number = Math.floor((l + r) / 2);
        const curRoot = new TreeNode<T>(inputArray[mid]);
        if (l == 0 && r == inputArray.length-1) {
            this.root = curRoot;
        }
        const leftNode = this.convertToBST(inputArray, l, mid - 1);
        const rightNode = this.convertToBST(inputArray, mid + 1, r);
        curRoot.left = leftNode;
        curRoot.right = rightNode;
        return curRoot;
    };
    // complexity - O(NlogN)
    convertBstFromArray = (inputArray: T[])=> {
        inputArray.sort();
        this.convertToBST(inputArray);
    }
    // complexity - O(logN);
    private insertNode = (value: T, curNode: TreeNode<T> | null = this.root): TreeNode<T> | null => {
        if(curNode === null) {
            return new TreeNode<T>(value);
        }
        if(value < curNode.value) {
            curNode.left = this.insertNode(value, curNode.left);
        } else {
            curNode.right = this.insertNode(value, curNode.right);
        }
        return curNode;
    } 
    // complexity - O(logN);
    insert = (value: T, curNode: TreeNode<T> | null = this.root) => {
        this.root = this.insertNode(value);
    }
    // complexity - O(logN);
    private deleteNode = (value: T, curNode: TreeNode<T> | null = this.root): TreeNode<T> | null => {
        if(curNode === null) {
            return curNode;
        }
        if(value < curNode.value) {
            curNode.left = this.deleteNode(value, curNode.left);
            return curNode;
        } else if(value > curNode.value) {
            curNode.right = this.deleteNode(value, curNode.right);
            return curNode;
        }
        if(curNode.left === null) {
            return curNode.right;
        }
        else if(curNode.right === null) {
            return curNode.left;
        }
        let succParent = curNode;
        let succ = curNode.right;
        while (succ.left !== null) {
            succParent = succ;
            succ = succ.left;
        }
        curNode.value = succ.value;
        if (succParent.left === succ)
            succParent.left = succ.right;
        else
            succParent.right = succ.right;
        
        return curNode;
    } 
    // complexity - O(logN);
    delete = (value: T, curNode: TreeNode<T> | null = this.root) => {
        this.root = this.deleteNode(value);
    }
    // complexity - O(N)
    printInOrder = (curNode: TreeNode<T> | null = this.root) => {
        if (curNode === null) return;
        this.printInOrder(curNode.left);
        console.log(curNode.value);
        this.printInOrder(curNode.right);
    };
    // complexity - O(log(N))
    findNode = (value: T, curNode: TreeNode<T> | null = this.root): boolean => {
        if (curNode === null) return false;
        if (curNode.value === value) return true;
        if(value < curNode.value) return this.findNode(value, curNode.left);
        return this.findNode(value, curNode.right);
    };
}
