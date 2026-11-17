/*
 * @lc app=leetcode.cn id=259 lang=javascript
 *
 * [259] 较小的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    nums.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let lo = i + 1, hi = nums.length - 1;
        while (lo < hi) {
            if (nums[i] + nums[lo] + nums[hi] < target) {
                // fixing nums[i] and nums[lo], every index in (lo, hi] works
                count += hi - lo;
                lo++;
            } else {
                hi--;
            }
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(threeSumSmaller([-2, 0, 1, 3], 2)); // 2
console.log(threeSumSmaller([1, 2, 3], 100)); // 3 (all pairs)
console.log(threeSumSmaller([1, 2, 3], 6)); // 0 (1+2+3=6 not < 6)
console.log(threeSumSmaller([5, 1, 3, 2], 8)); // 1 (only 1+2+3=6 < 8)
console.log(threeSumSmaller([], 5)); // 0
