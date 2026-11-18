/*
 * @lc app=leetcode.cn id=360 lang=javascript
 *
 * [360] 有序转化数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
    const n = nums.length;
    const f = x => a * x * x + b * x + c;
    const res = new Array(n);
    let left = 0, right = n - 1;

    if (a > 0) {
        // parabola opens up: the two ends hold the largest values -> fill from back
        let idx = n - 1;
        while (left <= right) {
            const lv = f(nums[left]), rv = f(nums[right]);
            if (lv > rv) { res[idx--] = lv; left++; }
            else { res[idx--] = rv; right--; }
        }
    } else if (a < 0) {
        // parabola opens down: the two ends hold the smallest values -> fill from front
        let idx = 0;
        while (left <= right) {
            const lv = f(nums[left]), rv = f(nums[right]);
            if (lv < rv) { res[idx++] = lv; left++; }
            else { res[idx++] = rv; right--; }
        }
    } else {
        // linear: bx + c (constant when b === 0)
        for (let i = 0; i < n; i++) res[i] = b * nums[i] + c;
        if (b < 0) res.reverse();
    }
    return res;
};
// @lc code=end

// TEST:
console.log(sortTransformedArray([-4, -2, 2, 4], 1, 3, 5)); // [3,9,15,33]
console.log(sortTransformedArray([-4, -2, 2, 4], -1, 3, 5)); // [-23,-5,1,7]
console.log(sortTransformedArray([-4, -2, 2, 4], 0, 2, 1)); // [-7,-3,5,9]
console.log(sortTransformedArray([-4, -2, 2, 4], 0, -2, 1)); // [-7,-3,5,9] (b<0 -> reversed map, ascending)
console.log(sortTransformedArray([3], 2, -1, 4)); // [19]
console.log(sortTransformedArray([-5, -3, 0, 1, 2], 1, 0, 2)); // [2,3,6,11,27]
