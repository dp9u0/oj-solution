/*
 * @lc app=leetcode id=3314 lang=javascript
 *
 * [3314] Construct the Minimum Bitwise Array I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    return nums.map(n => {
        if (n % 2 === 0) return -1;
        // find the lowest 0 bit, then clear the highest bit of trailing 1s
        let temp = n;
        let shift = 0;
        while (temp & 1) {
            temp >>= 1;
            shift++;
        }
        // clear the highest bit among trailing 1s
        return n ^ (1 << (shift - 1));
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minBitwiseArray([2,3,5,7])));      // [-1,1,4,3]
console.log(JSON.stringify(minBitwiseArray([11,13,31])));     // [9,12,15]
console.log(JSON.stringify(minBitwiseArray([3])));            // [1]
