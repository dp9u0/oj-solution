/*
 * @lc app=leetcode id=2200 lang=javascript
 *
 * [2200] Find All K-Distant Indices in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let n = nums.length;
    let marked = new Array(n).fill(false);
    for (let j = 0; j < n; j++) {
        if (nums[j] === key) {
            for (let i = Math.max(0, j - k); i <= Math.min(n - 1, j + k); i++) {
                marked[i] = true;
            }
        }
    }
    let result = [];
    for (let i = 0; i < n; i++) {
        if (marked[i]) result.push(i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findKDistantIndices([3,4,9,1,3,9,5], 9, 1))); // [1,2,3,4,5,6]
console.log(JSON.stringify(findKDistantIndices([2,2,2,2,2], 2, 2))); // [0,1,2,3,4]
console.log(JSON.stringify(findKDistantIndices([1,2,3], 2, 1))); // [0,1,2]
