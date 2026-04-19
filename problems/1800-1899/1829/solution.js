/*
 * @lc app=leetcode id=1829 lang=javascript
 *
 * [1829] Maximum XOR for Each Query
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let n = nums.length;
    let mask = (1 << maximumBit) - 1;
    let xorSum = 0;
    for (let x of nums) xorSum ^= x;
    let ans = new Array(n);
    for (let i = 0; i < n; i++) {
        ans[i] = xorSum ^ mask;
        xorSum ^= nums[n - 1 - i];
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getMaximumXor([0,1,1,3], 2)));
console.log(JSON.stringify(getMaximumXor([2,3,4,7], 3)));
console.log(JSON.stringify(getMaximumXor([0,1,2,2,5,7], 3)));
