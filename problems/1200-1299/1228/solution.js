/*
 * @lc app=leetcode.cn id=1228 lang=javascript
 *
 * [1228] 等差数列中缺失的数字
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
    const n = arr.length;
    const d = (arr[n - 1] - arr[0]) / n; // true step, exactly divisible
    const trueSum = ((arr[0] + arr[n - 1]) * (n + 1)) / 2;
    return trueSum - arr.reduce((s, x) => s + x, 0);
};
// @lc code=end

// TEST:
console.log(missingNumber([5, 7, 11, 13])); // 9
console.log(missingNumber([15, 13, 12])); // 14
console.log(missingNumber([1, 2, 4])); // 3
console.log(missingNumber([3, 6, 9, 15])); // 12
console.log(missingNumber([100, 90, 80, 60, 50])); // 70 (true step -10)
