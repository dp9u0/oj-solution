/*
 * @lc app=leetcode id=1558 lang=javascript
 *
 * [1558] Minimum Numbers of Function Calls to Make Target Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let adds = 0, maxBits = 0;
    for (const x of nums) {
        if (x === 0) continue;
        adds += x.toString(2).replace(/0/g, '').length;
        maxBits = Math.max(maxBits, 32 - Math.clz32(x));
    }
    return adds + Math.max(0, maxBits - 1);
};
// @lc code=end

// TEST:
console.log(minOperations([1,5])); // 5
console.log(minOperations([2,2])); // 3
console.log(minOperations([4,2,5])); // 6
console.log(minOperations([0])); // 0
