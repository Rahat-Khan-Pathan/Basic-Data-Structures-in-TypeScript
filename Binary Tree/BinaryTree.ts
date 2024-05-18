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
export default class BinaryTree<T> {
    private root: TreeNode<T> | null = null;
    inputLevelOrder = (inputArray: T[]) => {
        if (inputArray.length > 0) {
            this.root = new TreeNode<T>(inputArray[0]);
        }
        if (this.root === null) return;
        const queue = new QueueList<TreeNode<T> | null>();
        queue.push(this.root);
        for (let i = 1; i < inputArray.length; i += 2) {
            const curNode = queue.front();
            queue.pop();
            if (!curNode) continue;
            let leftNode: TreeNode<T> | null = null;
            let rightNode: TreeNode<T> | null = null;
            if (inputArray[i] !== -1) leftNode = new TreeNode<T>(inputArray[i]);
            if (inputArray[i + 1] !== -1)
                rightNode = new TreeNode<T>(inputArray[i + 1]);
            curNode.left = leftNode;
            curNode.right = rightNode;
            queue.push(curNode.left);
            queue.push(curNode.right);
        }
    };
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
    printPreOrder = (curNode: TreeNode<T> | null = this.root) => {
        if (curNode === null) return;
        console.log(curNode.value);
        this.printPreOrder(curNode.left);
        this.printPreOrder(curNode.right);
    };
    printPostOrder = (curNode: TreeNode<T> | null = this.root) => {
        if (curNode === null) return;
        this.printPostOrder(curNode.left);
        this.printPostOrder(curNode.right);
        console.log(curNode.value);
    };
    printInOrder = (curNode: TreeNode<T> | null = this.root) => {
        if (curNode === null) return;
        this.printInOrder(curNode.left);
        console.log(curNode.value);
        this.printInOrder(curNode.right);
    };
    printLeafNodes = (curNode: TreeNode<T> | null = this.root) => {
        if (curNode === null) return;
        if (curNode.left === null && curNode.right === null) {
            console.log(curNode.value);
        }
        this.printLeafNodes(curNode.left);
        this.printLeafNodes(curNode.right);
    };
    countNodes = (curNode: TreeNode<T> | null = this.root): number => {
        if (curNode === null) return 0;
        return (
            this.countNodes(curNode.left) + this.countNodes(curNode.right) + 1
        );
    };
    maxHeight = (curNode: TreeNode<T> | null = this.root): number => {
        if (curNode === null) return 0;
        return (
            Math.max(
                this.maxHeight(curNode.left),
                this.maxHeight(curNode?.right)
            ) + 1
        );
    };
    findNode = (value: T, curNode: TreeNode<T> | null = this.root): boolean => {
        if (curNode === null) return false;
        if (curNode.value === value) return true;
        return (
            this.findNode(value, curNode.left) ||
            this.findNode(value, curNode.right)
        );
    };
}
