/*
 * @lc app=leetcode id=1664 lang=javascript
 *
 * [1664] Ways to Make a Fair Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    const n = nums.length;
    let evenSum = 0, oddSum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) evenSum += nums[i];
        else oddSum += nums[i];
    }

    let count = 0, preEven = 0, preOdd = 0;
    for (let i = 0; i < n; i++) {
        const sufEven = i % 2 === 0 ? evenSum - preEven - nums[i] : evenSum - preEven;
        const sufOdd = i % 2 === 1 ? oddSum - preOdd - nums[i] : oddSum - preOdd;
        if (preEven + sufOdd === preOdd + sufEven) count++;
        if (i % 2 === 0) preEven += nums[i];
        else preOdd += nums[i];
    }

    return count;
};
// @lc code=end

// TEST:
console.log(waysToMakeFair([2,1,6,4])); // 1
console.log(waysToMakeFair([1,1,1])); // 3
console.log(waysToMakeFair([1,2,3])); // 0
console.log(waysToMakeFair([1])); // 1
console.log(waysToMakeFair([1,1])); // 0
