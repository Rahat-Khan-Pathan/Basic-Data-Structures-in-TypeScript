export default class SegmentTree {
    mx = 100005;
    tree: number[] = new Array(this.mx * 3).fill(0);

    init = (node: number, segL: number, segR: number, a: number[]) => {
        if (segL === segR) {
            this.tree[node] = a[segL];
            return;
        }
        const mid = Math.floor((segL + segR) / 2);
        const leftNode = node * 2;
        const rightNode = leftNode + 1;
        this.init(leftNode, segL, mid, a);
        this.init(rightNode, mid + 1, segR, a);
        this.tree[node] = this.tree[leftNode] + this.tree[rightNode];
    };

    query = (
        node: number,
        segL: number,
        segR: number,
        i: number,
        j: number
    ): number => {
        if (segL >= i && segR <= j) return this.tree[node];
        if (segL > j || segR < i) return 0;
        const mid = segL + Math.floor((segR - segL) / 2);
        const leftNode = node * 2;
        const rightNode = leftNode + 1;
        return (
            this.query(leftNode, segL, mid, i, j) +
            this.query(rightNode, mid + 1, segR, i, j)
        );
    };

    update = (
        node: number,
        segL: number,
        segR: number,
        i: number,
        val: number
    ) => {
        if (segL === segR && segL === i) {
            this.tree[node] = val;
            return;
        }
        if (segL > i || segR < i) return;
        const mid = segL + Math.floor((segR - segL) / 2);
        const leftNode = node * 2;
        const rightNode = leftNode + 1;
        this.update(leftNode, segL, mid, i, val);
        this.update(rightNode, mid + 1, segR, i, val);
        this.tree[node] = this.tree[leftNode] + this.tree[rightNode];
    };
}
