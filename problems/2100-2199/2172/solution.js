/*
 * @lc app=leetcode id=2172 lang=javascript
 *
 * [2172] Maximum AND Sum of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function(nums, numSlots) {
    const total = Math.pow(3, numSlots);
    const dp = new Array(total).fill(-Infinity);
    dp[0] = 0;

    const pow3 = [1];
    for (let i = 1; i <= numSlots; i++) pow3[i] = pow3[i - 1] * 3;

    let result = 0;

    for (const num of nums) {
        for (let mask = total - 1; mask >= 0; mask--) {
            if (dp[mask] === -Infinity) continue;
            for (let slot = 0; slot < numSlots; slot++) {
                const count = Math.floor(mask / pow3[slot]) % 3;
                if (count < 2) {
                    const newMask = mask + pow3[slot];
                    dp[newMask] = Math.max(dp[newMask], dp[mask] + (num & (slot + 1)));
                    result = Math.max(result, dp[newMask]);
                }
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maximumANDSum([1,2,3,4,5,6], 3)); // 9
console.log(maximumANDSum([1,3,10,4,7,1], 9)); // 24
console.log(maximumANDSum([1,2,3], 2)); // 3
console.log(maximumANDSum([14,7,9,8], 4)); // 9
console.log(maximumANDSum([1], 1)); // 1
