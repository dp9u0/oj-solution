/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const count = isConnected.length;
    const unionSet = new UnionSet();
    for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
            if (isConnected[i][j]) {
                unionSet.union(i, j)
            }
        }
    }
    const roots = new Set();
    for (let i = 0; i < count; i++) {
        const root = unionSet.find(i)
        roots.add(root);
    }
    return roots.size;
};

/**
 * 并查集
 */
class UnionSet {
    constructor() {
        this.map = new Map(); // 
    }
    /**
     * 查找 element 的 root
     * @param {*} element 
     */
    find(element) {
        let root = element;
        while (this.map.has(root)) {
            root = this.map.get(root);
        }
        return root;
    }

    /**
     * 合并两个 element
     * @param {*} p  element p 
     * @param {*} q  element q
     */
    union(p, q) {
        const rootP = this.find(p);
        const rootQ = this.find(q);
        if (rootP !== rootQ) {
            this.map.set(rootP, rootQ);
        }
    }
}

// TEST:
console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
