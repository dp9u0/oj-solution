/*
 * @lc app=leetcode id=2560 lang=javascript
 *
 * [2560] House Robber IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    let lo = 1, hi = Math.max(...nums);
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (canRob(nums, mid, k)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};

function canRob(nums, cap, k) {
    let count = 0, i = 0;
    while (i < nums.length) {
        if (nums[i] <= cap) {
            count++;
            i += 2;
        } else {
            i++;
        }
    }
    return count >= k;
}
// @lc code=end

// TEST:
console.log(minCapability([2,3,5,9], 2));
console.log(minCapability([2,7,9,3,1], 2));
console.log(minCapability([1,1,1,1], 2));
