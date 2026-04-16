/*
 * @lc app=leetcode id=3355 lang=javascript
 *
 * [3355] Zero Array Transformation I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0);
    for (const [l, r] of queries) {
        diff[l]++;
        diff[r + 1]--;
    }
    let cur = 0;
    for (let i = 0; i < n; i++) {
        cur += diff[i];
        if (cur < nums[i]) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isZeroArray([1,0,1], [[0,2]])); // true
console.log(isZeroArray([4,3,2,1], [[1,3],[0,2]])); // false
console.log(isZeroArray([2,0,2], [[0,2],[0,2]])); // true
