/*
 * @lc app=leetcode id=3566 lang=javascript
 *
 * [3566] Partition Array into Two Equal Product Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var checkEqualPartitions = function(nums, target) {
    const n = nums.length;
    const T = BigInt(target);

    let total = 1n;
    for (const x of nums) total *= BigInt(x);
    if (total !== T * T) return false;

    const full = (1 << n) - 1;
    for (let mask = 1; mask < full; mask++) {
        let prod = 1n;
        let valid = true;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                prod *= BigInt(nums[i]);
                if (prod > T) { valid = false; break; }
            }
        }
        if (valid && prod === T) return true;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(checkEqualPartitions([3,1,6,8,4], 24)); // true
console.log(checkEqualPartitions([2,5,3,7], 15)); // false
console.log(checkEqualPartitions([2,3,6], 6)); // true: {2,3} and {6}
console.log(checkEqualPartitions([1,2,4], 2)); // false: total=8, target^2=4
console.log(checkEqualPartitions([1,2,3,6], 6)); // true: {1,6} and {2,3}
