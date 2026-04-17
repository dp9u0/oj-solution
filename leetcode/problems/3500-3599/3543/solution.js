/*
 * @lc app=leetcode id=3543 lang=javascript
 *
 * [3543] Maximum Weighted K-Edge Path
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @param {number} t
 * @return {number}
 */
var maxWeight = function(n, edges, k, t) {
    const adj = Array.from({length: n}, () => []);
    for (const [u, v, w] of edges) adj[u].push([v, w]);

    const mask = (1n << BigInt(t)) - 1n;
    let dp = new Array(n).fill(1n);

    for (let j = 0; j < k; j++) {
        const next = new Array(n).fill(0n);
        for (let u = 0; u < n; u++) {
            if (dp[u] === 0n) continue;
            for (const [v, w] of adj[u]) {
                next[v] |= (dp[u] << BigInt(w)) & mask;
            }
        }
        dp = next;
    }

    let result = -1;
    for (let u = 0; u < n; u++) {
        if (dp[u] === 0n) continue;
        for (let s = t - 1; s > result; s--) {
            if (dp[u] & (1n << BigInt(s))) {
                result = s;
                break;
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxWeight(3, [[0,1,1],[1,2,2]], 2, 4)); // 3
console.log(maxWeight(3, [[0,1,2],[0,2,3]], 1, 3)); // 2
console.log(maxWeight(3, [[0,1,6],[1,2,8]], 1, 6)); // -1
console.log(maxWeight(2, [[0,1,1]], 0, 1)); // 0
console.log(maxWeight(2, [], 1, 5)); // -1
