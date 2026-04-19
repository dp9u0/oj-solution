/*
 * @lc app=leetcode id=2171 lang=javascript
 *
 * [2171] Removing Minimum Number of Magic Beans
 */

// @lc code=start
/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function(beans) {
    beans.sort((a, b) => a - b);
    const n = beans.length;
    const totalSum = beans.reduce((a, b) => a + b, 0);
    let result = Infinity;
    for (let i = 0; i < n; i++) {
        const removed = totalSum - beans[i] * (n - i);
        result = Math.min(result, removed);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minimumRemoval([4,1,6,5])); // 4
console.log(minimumRemoval([2,10,3,2])); // 7
console.log(minimumRemoval([1])); // 0
