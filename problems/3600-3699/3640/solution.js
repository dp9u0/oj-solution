/*
 * @lc app=leetcode id=3640 lang=javascript
 *
 * [3640] Trionic Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumTrionic = function(nums) {
    const INF = Infinity;
    let f0 = -INF, f1 = -INF, f2 = -INF, res = -INF;
    for (let i = 1; i < nums.length; i++) {
        const o0 = f0, o1 = f1, o2 = f2;
        if (nums[i] > nums[i - 1]) {
            f0 = Math.max(nums[i - 1] + nums[i], o0 + nums[i]);
            f1 = -INF;
            f2 = Math.max(o1 + nums[i], o2 + nums[i]);
        } else if (nums[i] < nums[i - 1]) {
            f0 = -INF;
            f1 = Math.max(o0 + nums[i], o1 + nums[i]);
            f2 = -INF;
        } else {
            f0 = f1 = f2 = -INF;
        }
        res = Math.max(res, f2);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(maxSumTrionic([0,-2,-1,-3,0,2,-1])); // -4
console.log(maxSumTrionic([1,4,2,7])); // 14
