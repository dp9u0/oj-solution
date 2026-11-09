/*
 * @lc app=leetcode.cn id=4108 lang=javascript
 *
 * [4108] 使红色节点连通的最小代价
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function(n, colors, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // BFS 定根求序与父节点
    const order = [];
    const parent = new Array(n).fill(-1);
    const seen = new Array(n).fill(false);
    const queue = [0];
    seen[0] = true;
    for (let qi = 0; qi < queue.length; qi++) {
        const u = queue[qi];
        order.push(u);
        for (const w of adj[u]) {
            if (!seen[w]) {
                seen[w] = true;
                parent[w] = u;
                queue.push(w);
            }
        }
    }

    // 子树大小
    const size = new Array(n).fill(1);
    for (let i = n - 1; i >= 1; i--) size[parent[order[i]]] += size[order[i]];

    const INF = Infinity;
    const dpR = new Array(n).fill(0);
    const dpB = new Array(n).fill(0);
    const dpS = new Array(n).fill(0);
    // 子节点聚合值
    const sumMin = new Array(n).fill(0); // sum min(dpR[c], dpB[c])
    const sumB = new Array(n).fill(0); // sum dpB[c]
    const bestSwap = new Array(n).fill(INF); // min over c of (min(dpR[c], dpS[c]) - dpB[c])

    for (let i = n - 1; i >= 0; i--) {
        const v = order[i];
        const isRed = colors[v] === 'R';
        const costR = isRed ? 0 : size[v]; // 终态为红:蓝->红需翻转
        const costB = isRed ? size[v] : 0; // 终态为蓝:红->蓝需翻转

        dpR[v] = costR + sumMin[v];
        dpB[v] = costB + sumB[v];
        dpS[v] = costB + sumB[v] + bestSwap[v];

        const p = parent[v];
        if (p >= 0) {
            sumMin[p] += Math.min(dpR[v], dpB[v]);
            sumB[p] += dpB[v];
            const cand = Math.min(dpR[v], dpS[v]) - dpB[v];
            if (cand < bestSwap[p]) bestSwap[p] = cand;
        }
    }
    return Math.min(dpR[0], dpS[0], dpB[0]);
};
// @lc code=end

// TEST:
console.log(minCost(3, 'RBR', [[0, 1], [1, 2]]) === 1);
console.log(minCost(3, 'RBR', [[0, 1], [0, 2]]) === 0);
console.log(minCost(4, 'BRRR', [[0, 1], [0, 2], [0, 3]]) === 2);
console.log(minCost(3, 'BBB', [[0, 1], [1, 2]]) === 0);
console.log(minCost(1, 'R', []) === 0);
console.log(minCost(1, 'B', []) === 0);
console.log(minCost(3, 'RRR', [[0, 1], [1, 2]]) === 0);
console.log(minCost(3, 'BRR', [[0, 1], [0, 2]]) === 1);
console.log(minCost(5, 'RBRBR', [[0, 1], [1, 2], [2, 3], [3, 4]]) === 4);
console.log(minCost(4, 'BRBR', [[0, 1], [1, 2], [2, 3]]) === 1);
console.log(minCost(7, 'RRBBRRR', [[3, 4], [5, 6], [0, 3], [0, 1], [4, 5], [0, 2]]) === 4);
