/*
 * @lc app=leetcode id=2216 lang=javascript
 *
 * [2216] Minimum Deletions to Make Array Beautiful
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
  let deletions = 0;
  let count = 0;
  let lastKept = -1;

  for (const num of nums) {
    if (count % 2 === 0) {
      lastKept = num;
      count++;
    } else {
      if (num === lastKept) {
        deletions++;
      } else {
        lastKept = num;
        count++;
      }
    }
  }

  if (count % 2 === 1) deletions++;

  return deletions;
};
// @lc code=end

// TEST:
console.log(minDeletion([1,1,2,3,5])); // 1
console.log(minDeletion([1,1,2,2,3,3])); // 2
console.log(minDeletion([1,2,3,4])); // 0
