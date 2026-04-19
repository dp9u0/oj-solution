/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    const median = nums[Math.floor(nums.length / 2)];
    let result = 0;
    for (const num of nums) {
        result += Math.abs(num - median);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minMoves2([1,2,3])); // 2
console.log(minMoves2([1,10,2,9])); // 16
console.log(minMoves2([1,0,0,8,6])); // 14
