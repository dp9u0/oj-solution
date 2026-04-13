/*
 * @lc app=leetcode id=3153 lang=javascript
 *
 * [3153] Sum of Digit Differences of All Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function(nums) {
    const n = nums.length;
    const digits = String(nums[0]).length;
    let result = 0;

    for (let d = 0; d < digits; d++) {
        const count = new Array(10).fill(0);
        const divisor = Math.pow(10, d);
        for (let i = 0; i < n; i++) {
            const digit = Math.floor(nums[i] / divisor) % 10;
            count[digit]++;
        }
        let same = 0;
        for (let k = 0; k < 10; k++) {
            same += count[k] * (count[k] - 1) / 2;
        }
        result += n * (n - 1) / 2 - same;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(sumDigitDifferences([13, 23, 12])); // 4
console.log(sumDigitDifferences([10, 10, 10, 10])); // 0
console.log(sumDigitDifferences([11, 22, 33])); // 6
console.log(sumDigitDifferences([123, 456, 789])); // 9
