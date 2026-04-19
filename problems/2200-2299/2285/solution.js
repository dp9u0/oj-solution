/*
 * @lc app=leetcode id=2285 lang=javascript
 *
 * [2285] Maximum Total Importance of Roads
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    const degree = new Array(n).fill(0);
    for (const [a, b] of roads) {
        degree[a]++;
        degree[b]++;
    }
    degree.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += degree[i] * (i + 1);
    }
    return total;
};
// @lc code=end

// TEST:
console.log(maximumImportance(5, [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]])); // 43
console.log(maximumImportance(5, [[0,3],[2,4],[1,3]])); // 20
