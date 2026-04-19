/*
 * @lc app=leetcode id=2360 lang=javascript
 *
 * [2360] Longest Cycle in a Graph
 */

// @lc code=start
/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    const n = edges.length;
    const visited = new Int8Array(n);
    let ans = -1;
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        const dist = new Map();
        let u = i, step = 0;
        while (u !== -1) {
            if (visited[u]) {
                if (dist.has(u)) ans = Math.max(ans, step - dist.get(u));
                break;
            }
            visited[u] = 1;
            dist.set(u, step);
            u = edges[u];
            step++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestCycle([3,3,4,2,3]));
console.log(longestCycle([2,-1,3,1]));
console.log(longestCycle([-1,-1,-1]));
