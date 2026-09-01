/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const map = new Map();
    map.set(0, -1);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const rem = sum % k;
        if (map.has(rem)) {
            if (i - map.get(rem) >= 2) return true;
        } else {
            map.set(rem, i);
        }
    }

    return false;
};
// @lc code=end

// TEST:
console.log(checkSubarraySum([23,2,4,6,7], 6));    // true
console.log(checkSubarraySum([23,2,6,4,7], 6));    // true
console.log(checkSubarraySum([23,2,6,4,7], 13));   // false
console.log(checkSubarraySum([5,0,0], 3));          // true
console.log(checkSubarraySum([0], 1));               // false
