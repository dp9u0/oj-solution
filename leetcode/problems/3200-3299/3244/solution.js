/*
 * @lc app=leetcode id=3244 lang=javascript
 *
 * [3244] Shortest Distance After Road Addition Queries II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    const next = new Int32Array(n);
    for (let i = 0; i < n; i++) next[i] = i + 1;

    let ans = n - 1;
    const result = [];

    for (const [u, v] of queries) {
        let i = next[u];
        while (i < v) {
            ans--;
            const tmp = next[i];
            next[i] = v;
            i = tmp;
        }
        if (next[u] < v) next[u] = v;
        result.push(ans);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(shortestDistanceAfterQueries(5, [[2,4],[0,2],[0,4]])); // [3,2,1]
console.log(shortestDistanceAfterQueries(4, [[0,3],[0,2]])); // [1,1]
console.log(shortestDistanceAfterQueries(3, [[0,2]])); // [1]
console.log(shortestDistanceAfterQueries(5, [[0,4]])); // [1]
console.log(shortestDistanceAfterQueries(6, [[1,4],[0,2]])); // [3,2]
