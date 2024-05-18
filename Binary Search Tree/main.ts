import BinarySearchTree from "./BinarySearchTree";

const bst = new BinarySearchTree<number>();
// bst.convertBstFromArray([20,50,40,10,30,70,80]);
            //           40
            //    20             70
            //10      30     50       80
bst.insert(20);
bst.insert(70);
bst.insert(10);
bst.insert(30);
bst.insert(50);
bst.insert(40);
bst.insert(80);
bst.delete(40);
bst.delete(10);
bst.printInOrder();
console.log(bst.findNode(10));
console.log(bst.findNode(70));