import BinaryTree from "./BinaryTree";

const binaryTree = new BinaryTree<number>();
binaryTree.inputLevelOrder([10,20,30,40,50,60,-1,70,-1,-1,-1,-1,-1,-1,-1]);
//                     10
//            20                30
//       40        50      60        -1
//     70  -1    -1  -1  -1  -1
//   -1  -1
binaryTree.printLevelOrder(); // 10 20 30 40 50 60 70
binaryTree.printPreOrder(); // 10 20 40 70 50 30 60
binaryTree.printPostOrder(); // 70 40 50 20 60 30 10
binaryTree.printInOrder(); // 70 40 20 50 10 60 30
binaryTree.printLeafNodes(); // 70 50 60
console.log(binaryTree.countNodes()); // 7
console.log(binaryTree.maxHeight()); // 4
console.log(binaryTree.findNode(5)); // false
console.log(binaryTree.findNode(50)); // true

