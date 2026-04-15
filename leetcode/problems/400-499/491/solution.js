/*
 * @lc app=leetcode id=491 lang=javascript
 *
 * [491] Non-decreasing Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const result = [];
  const path = [];
  const backtrack = (start) => {
    if (path.length >= 2) {
      result.push([...path]);
    }
    const used = new Set();
    for (let i = start; i < nums.length; i++) {
      if (used.has(nums[i])) continue;
      if (path.length > 0 && nums[i] < path[path.length - 1]) continue;
      used.add(nums[i]);
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };
  backtrack(0);
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findSubsequences([4, 6, 7, 7])));
// [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
console.log(JSON.stringify(findSubsequences([4, 4, 3, 2, 1])));
// [[4,4]]
console.log(JSON.stringify(findSubsequences([1, 2, 3])));
// [[1,2],[1,2,3],[1,3],[2,3]]
