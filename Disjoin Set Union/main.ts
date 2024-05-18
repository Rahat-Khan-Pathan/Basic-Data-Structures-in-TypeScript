import DSU from "./DSU";

const dsu = new DSU(7);
dsu.dsuUnionByLevel(1, 2);
dsu.dsuUnionByLevel(2, 3);
dsu.dsuUnionByLevel(5, 6);
dsu.dsuUnionByLevel(1, 4);
// Group A - 1 2 3 4
// Group B - 5 6
// Group C - 7

console.log(dsu.dsuFind(1));
console.log(dsu.dsuFind(5));
console.log(dsu.dsuFind(7));