/*
 * @lc app=leetcode id=3576 lang=javascript
 *
 * [3576] Transform Array to All Equal Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canMakeEqual = function(nums, k) {
    const n = nums.length;

    const solve = (target) => {
        let ops = 0, flip = false;
        for (let i = 0; i < n - 1; i++) {
            const val = flip ? -nums[i] : nums[i];
            if (val !== target) {
                ops++;
                flip = true;
            } else {
                flip = false;
            }
        }
        const last = flip ? -nums[n - 1] : nums[n - 1];
        return last === target ? ops : Infinity;
    };

    return Math.min(solve(1), solve(-1)) <= k;
};
// @lc code=end

// TEST:
console.log(canMakeEqual([1,-1,1,-1,1], 3)); // true
console.log(canMakeEqual([-1,-1,-1,1,1,1], 5)); // false
console.log(canMakeEqual([1,1,1], 1)); // true
console.log(canMakeEqual([-1,-1], 1)); // true
