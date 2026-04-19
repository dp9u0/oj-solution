/*
 * @lc app=leetcode id=2772 lang=javascript
 *
 * [2772] Apply Operations to Make All Array Elements Equal to Zero
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function(nums, k) {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0);
    let cur = 0;
    for (let i = 0; i < n; i++) {
        cur += diff[i];
        const val = nums[i] - cur;
        if (val < 0) return false;
        if (val > 0) {
            if (i + k > n) return false;
            cur += val;
            diff[i + k] -= val;
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(checkArray([2,2,3,1,1,0], 3)); // true
console.log(checkArray([1,3,1,1], 2)); // false
