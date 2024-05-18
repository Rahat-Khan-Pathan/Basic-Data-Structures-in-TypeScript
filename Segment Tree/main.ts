import SegmentTree from "./SegmentTree";

const segTree = new SegmentTree();
const a = [1, 2, 3, 4, 5, 6, 7];
segTree.init(1, 0, a.length - 1, a);
// console.log(segTree.query(1,0,a.length-1,1,5)); // 20
segTree.update(1, 0, a.length - 1, 3, 10); // [1,2,3,10,5,6,7]
console.log(segTree.query(1, 0, a.length - 1, 1, 5)); // 26
