/*
 * @lc app=leetcode id=3152 lang=javascript
 *
 * [3152] Special Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    const n = nums.length;
    const bad = new Int32Array(n);
    for (let i = 1; i < n; i++)
        bad[i] = bad[i - 1] + ((nums[i] & 1) === (nums[i - 1] & 1) ? 1 : 0);
    return queries.map(([l, r]) => bad[r] === bad[l]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(isArraySpecial([3,4,1,2,6], [[0,4]]))); // [false]
console.log(JSON.stringify(isArraySpecial([4,3,1,6], [[0,2],[2,3]]))); // [false,true]
console.log(JSON.stringify(isArraySpecial([1], [[0,0]]))); // [true]
console.log(JSON.stringify(isArraySpecial([2,4], [[0,1]]))); // [false]
console.log(JSON.stringify(isArraySpecial([1,2], [[0,1]]))); // [true]
