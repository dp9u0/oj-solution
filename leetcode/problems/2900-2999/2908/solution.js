/*
 * @lc app=leetcode id=2908 lang=javascript
 *
 * [2908] Minimum Sum of Mountain Triplets I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
  const n = nums.length;
  let leftMin = new Array(n).fill(Infinity);
  for (let i = 1; i < n; i++) leftMin[i] = Math.min(leftMin[i - 1], nums[i - 1]);
  let rightMin = new Array(n).fill(Infinity);
  for (let i = n - 2; i >= 0; i--) rightMin[i] = Math.min(rightMin[i + 1], nums[i + 1]);

  let ans = Infinity;
  for (let j = 1; j < n - 1; j++) {
    if (leftMin[j] < nums[j] && rightMin[j] < nums[j]) {
      ans = Math.min(ans, leftMin[j] + nums[j] + rightMin[j]);
    }
  }
  return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minimumSum([8,6,1,5,3])); // 9
console.log(minimumSum([5,4,8,7,10,2])); // 13
console.log(minimumSum([6,5,4,3,4,5])); // -1
console.log(minimumSum([1,2,3])); // -1
