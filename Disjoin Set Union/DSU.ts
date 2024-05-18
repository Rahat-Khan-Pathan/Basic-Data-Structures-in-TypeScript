export default class DSU {
    private par: number[];
    private groupSize: number[];
    private level: number[];

    constructor(n: number) {
        this.par = new Array(n+1).fill(-1);
        this.groupSize = new Array(n+1).fill(1);
        this.level = new Array(n+1).fill(0);
    }
    // Complexity - O(logN)
    dsuFind = (node: number): number=> {
        if (this.par[node] === -1) {
            return node;
        }
        const leader = this.dsuFind(this.par[node]);
        this.par[node] = leader; // Path compression
        return leader;
    }
    // Complexity - O(logN)
    dsuUnion = (node1: number, node2: number) => {
        const leaderA = this.dsuFind(node1);
        const leaderB = this.dsuFind(node2);
        this.par[leaderA] = leaderB;
    }
    // Complexity - O(alphaN ~ 4)
    dsuUnionByLevel = (node1: number, node2: number) => {
        const leaderA = this.dsuFind(node1);
        const leaderB = this.dsuFind(node2);
        if (this.level[leaderA] > this.level[leaderB]) {
            this.par[leaderB] = leaderA;
        } else if (this.level[leaderB] > this.level[leaderA]) {
            this.par[leaderA] = leaderB;
        } else {
            this.par[leaderA] = leaderB;
            this.level[leaderB]++;
        }
    }
    // Complexity - O(alphaN ~ 4)
    dsuUnionBySize = (node1: number, node2: number) => {
        const leaderA = this.dsuFind(node1);
        const leaderB = this.dsuFind(node2);
        if (this.groupSize[leaderA] > this.groupSize[leaderB]) {
            this.par[leaderB] = leaderA;
            this.groupSize[leaderA] += this.groupSize[leaderB];
        } else {
            this.par[leaderA] = leaderB;
            this.groupSize[leaderB] += this.groupSize[leaderA];
        }
    }
}
