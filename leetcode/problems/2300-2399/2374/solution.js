/*
 * @lc app=leetcode id=2374 lang=javascript
 *
 * [2374] Node With Highest Edge Score
 */

// @lc code=start
/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
    const n = edges.length;
    const score = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        score[edges[i]] += i;
    }
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (score[i] > score[result]) result = i;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(edgeScore([1,0,0,0,0,7,7,5])); // 7
console.log(edgeScore([2,0,0,2]));          // 0
