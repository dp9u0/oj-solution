/*
 * @lc app=leetcode id=3354 lang=javascript
 *
 * [3354] Make Array Elements Equal to Zero
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
  const n = nums.length;
  let count = 0;

  const simulate = (start, dir) => {
    let arr = [...nums];
    let curr = start;
    let d = dir; // 1 = right, -1 = left
    while (curr >= 0 && curr < n) {
      if (arr[curr] === 0) {
        curr += d;
      } else {
        arr[curr]--;
        d = -d;
        curr += d;
      }
    }
    return arr.every(v => v === 0);
  };

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (simulate(i, 1)) count++;
      if (simulate(i, -1)) count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countValidSelections([1,0,2,0,3])); // 2
console.log(countValidSelections([2,3,4,0,4,1,0])); // 0
console.log(countValidSelections([0])); // 2
console.log(countValidSelections([0,0])); // 4
