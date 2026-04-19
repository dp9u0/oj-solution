/*
 * @lc app=leetcode id=2420 lang=javascript
 *
 * [2420] Find All Good Indices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function(nums, k) {
    let n = nums.length;
    let left = new Array(n).fill(1);
    let right = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (nums[i] <= nums[i - 1]) left[i] = left[i - 1] + 1;
    }
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] <= nums[i + 1]) right[i] = right[i + 1] + 1;
    }

    let res = [];
    for (let i = k; i < n - k; i++) {
        if (left[i - 1] >= k && right[i + 1] >= k) res.push(i);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(goodIndices([2,1,1,1,3,4,1], 2))); // [2,3]
console.log(JSON.stringify(goodIndices([2,1,1,2], 2))); // []
