import BinarySearchTree from "./BinarySearchTree";

const bst = new BinarySearchTree<number>();
bst.inputBST([20,50,40,10,30,70,80]);
            //           40
            //    20             70
            //10      30     50       80
// bst.printLevelOrder();
// console.log(bst.findNode(50)); // true
console.log(bst.findNode(60)); // false