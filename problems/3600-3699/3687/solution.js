/*
 * @lc app=leetcode.cn id=3687 lang=javascript
 *
 * [3687] 图书馆逾期罚款计算器
 */

// @lc code=start
/**
 * @param {number[]} daysLate
 * @return {number}
 */
var lateFee = function(daysLate) {
    return daysLate.reduce((sum, d) => {
        if (d === 1) return sum + 1;
        if (d <= 5) return sum + 2 * d;
        return sum + 3 * d;
    }, 0);
};
// @lc code=end

// TEST:
console.log(lateFee([5, 1, 7])); // 32
console.log(lateFee([1, 1])); // 2
console.log(lateFee([2])); // 4
console.log(lateFee([5, 5, 5])); // 30
console.log(lateFee([6])); // 18
console.log(lateFee([100])); // 300
console.log(lateFee([1, 2, 5, 6])); // 33
