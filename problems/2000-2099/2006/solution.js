/*
 * @lc app=leetcode id=2006 lang=javascript
 *
 * [2006] Count Number of Pairs With Absolute Difference K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    const count = new Map();
    let result = 0;
    for (const num of nums) {
        result += (count.get(num - k) || 0) + (count.get(num + k) || 0);
        count.set(num, (count.get(num) || 0) + 1);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countKDifference([1,2,2,1], 1));      // 4
console.log(countKDifference([1,3], 3));           // 0
console.log(countKDifference([3,2,1,5,4], 2));    // 3
