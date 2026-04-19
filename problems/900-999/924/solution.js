/*
 * @lc app=leetcode id=924 lang=javascript
 *
 * [924] Minimize Malware Spread
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function(graph, initial) {
    const n = graph.length;

    // Union-Find
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    const union = (a, b) => {
        const ra = find(a), rb = find(b);
        if (ra !== rb) parent[ra] = rb;
    };

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (graph[i][j] === 1) union(i, j);
        }
    }

    // Count component sizes
    const compSize = new Map();
    for (let i = 0; i < n; i++) {
        const r = find(i);
        compSize.set(r, (compSize.get(r) || 0) + 1);
    }

    // Count initial nodes per component
    const initCount = new Map();
    for (const node of initial) {
        const r = find(node);
        initCount.set(r, (initCount.get(r) || 0) + 1);
    }

    // For each initial node, compute save
    let bestSave = -1;
    let bestNode = Math.min(...initial);
    for (const node of initial) {
        const r = find(node);
        const save = initCount.get(r) === 1 ? compSize.get(r) : 0;
        if (save > bestSave || (save === bestSave && node < bestNode)) {
            bestSave = save;
            bestNode = node;
        }
    }

    return bestNode;
};
// @lc code=end

// TEST:
console.log(minMalwareSpread([[1,1,0],[1,1,0],[0,0,1]], [0,1])); // 0
console.log(minMalwareSpread([[1,0,0],[0,1,0],[0,0,1]], [0,2])); // 0
console.log(minMalwareSpread([[1,1,1],[1,1,1],[1,1,1]], [1,2])); // 1
