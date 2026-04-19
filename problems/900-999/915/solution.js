/*
 * @lc app=leetcode id=915 lang=javascript
 *
 * [915] Partition Array into Disjoint Intervals
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
  let leftMax = nums[0];
  let curMax = nums[0];
  let partition = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < leftMax) {
      leftMax = curMax;
      partition = i + 1;
    } else {
      curMax = Math.max(curMax, nums[i]);
    }
  }

  return partition;
};
// @lc code=end

// TEST:
console.log(partitionDisjoint([5,0,3,8,6])); // 3
console.log(partitionDisjoint([1,1,1,0,6,12])); // 4
console.log(partitionDisjoint([1,1])); // 1
