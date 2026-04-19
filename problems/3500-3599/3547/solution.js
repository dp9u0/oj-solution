/*
 * @lc app=leetcode id=3547 lang=javascript
 *
 * [3547] Maximum Sum of Edge Values in a Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxScore = function(n, edges) {
    const isCycle = edges.length === n;
    let score = 0, prev = 1;

    for (let v = 3; v <= n; v += 2) {
        score += prev * v;
        prev = v;
    }
    for (let v = n % 2 === 0 ? n : n - 1; v >= 2; v -= 2) {
        score += prev * v;
        prev = v;
    }
    if (isCycle) score += prev;

    return score;
};
// @lc code=end

// TEST:
console.log(maxScore(4, [[0,1],[1,2],[2,3]])); // 23
console.log(maxScore(6, [[0,3],[4,5],[2,0],[1,3],[2,4],[1,5]])); // 82
console.log(maxScore(2, [[0,1]])); // 2
console.log(maxScore(3, [[0,1],[1,2]])); // 9
console.log(maxScore(3, [[0,1],[1,2],[2,0]])); // 11
console.log(maxScore(5, [[0,1],[1,2],[2,3],[3,4],[4,0]])); // 48
