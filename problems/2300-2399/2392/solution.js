/*
 * @lc app=leetcode id=2392 lang=javascript
 *
 * [2392] Build a Matrix With Conditions
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
    const topoSort = (conditions) => {
        const adj = Array.from({ length: k + 1 }, () => []);
        const inDeg = new Int32Array(k + 1);
        for (const [u, v] of conditions) {
            adj[u].push(v);
            inDeg[v]++;
        }
        const queue = [];
        let head = 0;
        for (let i = 1; i <= k; i++) {
            if (inDeg[i] === 0) queue.push(i);
        }
        const order = [];
        while (head < queue.length) {
            const u = queue[head++];
            order.push(u);
            for (const v of adj[u]) {
                if (--inDeg[v] === 0) queue.push(v);
            }
        }
        return order.length === k ? order : null;
    };

    const rowOrder = topoSort(rowConditions);
    if (!rowOrder) return [];
    const colOrder = topoSort(colConditions);
    if (!colOrder) return [];

    const rowPos = new Int32Array(k + 1);
    const colPos = new Int32Array(k + 1);
    for (let i = 0; i < k; i++) {
        rowPos[rowOrder[i]] = i;
        colPos[colOrder[i]] = i;
    }

    const matrix = Array.from({ length: k }, () => new Int32Array(k));
    for (let v = 1; v <= k; v++) {
        matrix[rowPos[v]][colPos[v]] = v;
    }
    return matrix;
};
// @lc code=end

// TEST:
const m1 = buildMatrix(3, [[1,2],[3,2]], [[2,1],[3,2]]);
console.log(JSON.stringify(m1)); // valid placement
console.log(JSON.stringify(buildMatrix(3, [[1,2],[2,3],[3,1],[2,3]], [[2,1]]))); // []
console.log(JSON.stringify(buildMatrix(2, [[1,2]], [[1,2]]))); // [[1,0],[0,2]]
console.log(JSON.stringify(buildMatrix(4, [[1,2],[2,3],[3,4]], [[1,2],[2,3],[3,4]]))); // diagonal
console.log(JSON.stringify(buildMatrix(2, [[1,2]], [[2,1]]))); // [[0,1],[2,0]]
