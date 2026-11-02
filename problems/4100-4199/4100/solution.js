/*
 * @lc app=leetcode.cn id=4100 lang=javascript
 *
 * [4100] 平衡异或路径的最小开销
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var minActivationCost = function(edges, values) {
    const n = values.length;
    // 每个值归约为 popcount 奇偶性：路径平衡 <=> 路径上奇偶性异或和为 0
    const parity = new Array(n);
    for (let i = 0; i < n; i++) {
        let x = values[i], p = 0;
        while (x > 0) { p ^= x & 1; x >>= 1; }
        parity[i] = p;
    }
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, c] of edges) {
        adj[u].push([v, c]);
        adj[v].push([u, c]);
    }
    const velmoranti = adj;
    let ans = Infinity;
    // 候选 1：单边平衡（两端奇偶性相同）
    for (const [u, v, c] of edges) {
        if (parity[u] === parity[v] && c < ans) ans = c;
    }
    // 候选 2：两边平衡（中间点奇偶 0，两个不同奇偶 1 邻居，取两条最便宜的边）
    for (let m = 0; m < n; m++) {
        if (parity[m] !== 0) continue;
        let best = Infinity, second = Infinity;
        for (const [to, c] of velmoranti[m]) {
            if (parity[to] !== 1) continue;
            if (c < best) { second = best; best = c; }
            else if (c < second) { second = c; }
        }
        if (second !== Infinity && best + second < ans) ans = best + second;
    }
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minActivationCost([[0,1,4],[0,2,6],[0,3,3],[3,4,5]], [3,1,7,1,3])); // Expected: 7
console.log(minActivationCost([[0,1,5],[1,2,10]], [1,7,3])); // Expected: 5
console.log(minActivationCost([[0,1,5],[0,2,7],[0,3,9]], [1,3,5,9])); // Expected: -1
console.log(minActivationCost([[0,1,9]], [1,7])); // Expected: 9 (单边平衡)
console.log(minActivationCost([[0,1,9]], [1,3])); // Expected: -1 (1^3=2 只有 1 个置位)
console.log(minActivationCost([[0,1,2],[0,2,3]], [3,1,1])); // Expected: 5 (1-0-2)
console.log(minActivationCost([[0,1,1],[1,2,5]], [3,3,1])); // Expected: 1 (单边 0-1)
