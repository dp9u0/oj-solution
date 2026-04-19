/*
 * @lc app=leetcode id=3315 lang=javascript
 *
 * [3315] Construct the Minimum Bitwise Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    return nums.map(t => {
        if (t === 2) return -1;
        let c = 0, tmp = t;
        while (tmp & 1) { c++; tmp >>= 1; }
        return t ^ (1 << (c - 1));
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minBitwiseArray([2, 3, 5, 7])));       // [-1,1,4,3]
console.log(JSON.stringify(minBitwiseArray([11, 13, 31])));      // [9,12,15]
console.log(JSON.stringify(minBitwiseArray([2])));                // [-1]
