/*
 * @lc app=leetcode id=3300 lang=javascript
 *
 * [3300] Minimum Element After Replacement With Digit Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    const digitSum = (n) => {
        let s = 0;
        while (n > 0) { s += n % 10; n = Math.floor(n / 10); }
        return s;
    };
    return Math.min(...nums.map(digitSum));
};
// @lc code=end

// TEST:
console.log(minElement([10,12,13,14])); // 1
console.log(minElement([1,2,3,4])); // 1
console.log(minElement([999,19,199])); // 10
console.log(minElement([10000])); // 1
console.log(minElement([9])); // 9
