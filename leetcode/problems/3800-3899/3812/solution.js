/*
 * @lc app=leetcode id=3812 lang=javascript
 *
 * [3812] Minimum Edge Toggles on a Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} start
 * @param {string} target
 * @return {number[]}
 */
var minimumFlips = function(n, edges, start, target) {
    const diff = new Uint8Array(n);
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        diff[i] = start.charCodeAt(i) !== target.charCodeAt(i) ? 1 : 0;
        cnt += diff[i];
    }
    if (cnt & 1) return [-1];

    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push([edges[i][1], i]);
        adj[edges[i][1]].push([edges[i][0], i]);
    }

    const parent = new Int32Array(n).fill(-1);
    const parentEdge = new Int32Array(n).fill(-1);
    const order = [];
    const visited = new Uint8Array(n);
    const stack = [0];
    visited[0] = 1;

    while (stack.length > 0) {
        const u = stack.pop();
        order.push(u);
        for (const [v, idx] of adj[u]) {
            if (!visited[v]) {
                visited[v] = 1;
                parent[v] = u;
                parentEdge[v] = idx;
                stack.push(v);
            }
        }
    }

    const flipCount = new Uint8Array(n);
    const result = [];

    for (let i = order.length - 1; i >= 0; i--) {
        const u = order[i];
        if (parent[u] === -1) continue;
        if (diff[u] ^ flipCount[u]) {
            result.push(parentEdge[u]);
            flipCount[parent[u]] ^= 1;
        }
    }

    if (flipCount[0] !== diff[0]) return [-1];

    return result.sort((a, b) => a - b);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minimumFlips(3, [[0,1],[1,2]], '010', '100')));           // [0]
console.log(JSON.stringify(minimumFlips(7, [[0,1],[1,2],[2,3],[3,4],[3,5],[1,6]], '0011000', '0010001'))); // [1,2,5]
console.log(JSON.stringify(minimumFlips(2, [[0,1]], '00', '01')));                    // [-1]
console.log(JSON.stringify(minimumFlips(3, [[0,1],[1,2]], '000', '000')));            // []
console.log(JSON.stringify(minimumFlips(4, [[0,1],[1,2],[2,3]], '1111', '0000')));    // [0,2] or similar
