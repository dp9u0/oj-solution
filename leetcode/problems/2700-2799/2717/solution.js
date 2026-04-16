/*
 * @lc app=leetcode id=2717 lang=javascript
 *
 * [2717] Semi-Ordered Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    let n = nums.length;
    let pos1 = nums.indexOf(1);
    let posN = nums.indexOf(n);
    let ops = pos1 + (n - 1 - posN);
    if (pos1 > posN) ops--;
    return ops;
};
// @lc code=end

// TEST:
console.log(semiOrderedPermutation([2,1,4,3])); // 2
console.log(semiOrderedPermutation([2,4,1,3])); // 3
console.log(semiOrderedPermutation([1,3,4,2,5])); // 0
console.log(semiOrderedPermutation([3,2,1])); // 3
