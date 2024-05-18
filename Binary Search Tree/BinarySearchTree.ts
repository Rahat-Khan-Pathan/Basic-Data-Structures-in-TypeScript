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
    convertToBST = (
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
    inputBST = (inputArray: T[])=> {
        inputArray.sort();
        this.convertToBST(inputArray);
    }
    // complexity - O(N)
    printLevelOrder = () => {
        if (this.root === null) return;
        const queue = new QueueList<TreeNode<T>>();
        queue.push(this.root);
        while (!queue.isEmpty()) {
            const par = queue.front();
            queue.pop();
            if (!par) continue;
            console.log(par.value);
            if (par.left) queue.push(par.left);
            if (par.right) queue.push(par.right);
        }
    };
    // complexity - O(log(N))
    findNode = (value: T, curNode: TreeNode<T> | null = this.root): boolean => {
        if (curNode === null) return false;
        if (curNode.value === value) return true;
        if(value < curNode.value) return this.findNode(value, curNode.left);
        return this.findNode(value, curNode.right);
    };
}
