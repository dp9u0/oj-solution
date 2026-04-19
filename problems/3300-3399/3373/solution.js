/*
 * @lc app=leetcode id=3373 lang=javascript
 *
 * [3373] Maximize the Number of Target Nodes After Connecting Trees II
 */

// @lc code=start
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2) {
    const n = edges1.length + 1, m = edges2.length + 1;

    const color1 = bfsColor(edges1, n);
    const color2 = bfsColor(edges2, m);

    const cnt1 = [0, 0], cnt2 = [0, 0];
    for (let i = 0; i < n; i++) cnt1[color1[i]]++;
    for (let i = 0; i < m; i++) cnt2[color2[i]]++;

    const best2 = Math.max(cnt2[0], cnt2[1]);
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = cnt1[color1[i]] + best2;
    }
    return result;
};

function bfsColor(edges, n) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const color = new Int8Array(n).fill(-1);
    const queue = [0];
    color[0] = 0;
    let head = 0;
    while (head < queue.length) {
        const u = queue[head++];
        for (const v of adj[u]) {
            if (color[v] === -1) {
                color[v] = 1 - color[u];
                queue.push(v);
            }
        }
    }
    return color;
}
// @lc code=end

// TEST:
console.log(JSON.stringify(maxTargetNodes([[0,1],[0,2],[2,3],[2,4]], [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]])));
// [8,7,7,8,8]
console.log(JSON.stringify(maxTargetNodes([[0,1],[0,2],[0,3],[0,4]], [[0,1],[1,2],[2,3]])));
// [3,6,6,6,6]
console.log(JSON.stringify(maxTargetNodes([[0,1]], [[0,1]])));
// [2,2]