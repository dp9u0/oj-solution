/*
 * @lc app=leetcode id=2050 lang=javascript
 *
 * [2050] Parallel Courses III
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    const adj = Array.from({ length: n }, () => []);
    const inDeg = new Array(n).fill(0);
    for (const [u, v] of relations) {
        adj[u - 1].push(v - 1);
        inDeg[v - 1]++;
    }

    const dp = new Array(n).fill(0);
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) {
            dp[i] = time[i];
            queue.push(i);
        }
    }

    let ans = 0;
    let head = 0;
    while (head < queue.length) {
        const u = queue[head++];
        ans = Math.max(ans, dp[u]);
        for (const v of adj[u]) {
            dp[v] = Math.max(dp[v], dp[u] + time[v]);
            if (--inDeg[v] === 0) queue.push(v);
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minimumTime(3, [[1,3],[2,3]], [3,2,5])); // 8
console.log(minimumTime(5, [[1,5],[2,5],[3,5],[3,4],[4,5]], [1,2,3,4,5])); // 12
console.log(minimumTime(1, [], [1])); // 1
console.log(minimumTime(2, [], [3,5])); // 5
console.log(minimumTime(3, [[1,2],[2,3]], [1,2,3])); // 6
console.log(minimumTime(4, [[1,2],[1,3],[2,4],[3,4]], [1,2,3,4])); // 1+3+4=8
