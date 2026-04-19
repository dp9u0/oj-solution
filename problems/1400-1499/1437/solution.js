/*
 * @lc app=leetcode id=1437 lang=javascript
 *
 * [1437] Check If All 1's Are at Least Length K Places Away
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let prev = -(k + 1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (i - prev - 1 < k) return false;
            prev = i;
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(kLengthApart([1,0,0,0,1,0,0,1], 2)); // true
console.log(kLengthApart([1,0,0,1,0,1], 2)); // false
console.log(kLengthApart([1,1,0,1], 2)); // false
console.log(kLengthApart([0,0,0], 2)); // true
console.log(kLengthApart([1], 1)); // true
