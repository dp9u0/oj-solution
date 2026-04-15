/*
 * @lc app=leetcode id=1995 lang=javascript
 *
 * [1995] Count Special Quadruplets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
  const n = nums.length;
  let count = 0;
  for (let a = 0; a < n - 3; a++) {
    for (let b = a + 1; b < n - 2; b++) {
      for (let c = b + 1; c < n - 1; c++) {
        for (let d = c + 1; d < n; d++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) count++;
        }
      }
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countQuadruplets([1,2,3,6])); // 1
console.log(countQuadruplets([3,3,6,4,5])); // 0
console.log(countQuadruplets([1,1,1,3,5])); // 4
