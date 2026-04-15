/*
 * @lc app=leetcode id=1893 lang=javascript
 *
 * [1893] Check if All the Integers in a Range Are Covered
 */

// @lc code=start
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    const diff = new Array(52).fill(0);
    for (const [s, e] of ranges) {
        diff[s]++;
        diff[e + 1]--;
    }
    let cover = 0;
    for (let i = 1; i <= 50; i++) {
        cover += diff[i];
        if (i >= left && i <= right && cover <= 0) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isCovered([[1,2],[3,4],[5,6]], 2, 5)); // true
console.log(isCovered([[1,10],[10,20]], 21, 21)); // false
console.log(isCovered([[1,50]], 1, 50)); // true
