/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    let h = 0;
    while (h < citations.length && citations[h] > h) {
        h++;
    }
    return h;
};
// @lc code=end

// TEST:
console.log(hIndex([3,0,6,1,5])); // Output: 3
console.log(hIndex([1,3,1])); // Output: 1
console.log(hIndex([100])); // Output: 1
console.log(hIndex([0])); // Output: 0
