/*
 * @lc app=leetcode id=3678 lang=javascript
 *
 * [3678] Smallest Absent Positive Greater Than Average
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
  const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
  const set = new Set(nums);
  let x = Math.max(1, Math.floor(avg) + 1);
  while (set.has(x)) x++;
  return x;
};
// @lc code=end

// TEST:
console.log(smallestAbsent([3, 5])); // 6
console.log(smallestAbsent([-1, 1, 2])); // 3
console.log(smallestAbsent([4, -1])); // 2
console.log(smallestAbsent([1, 2, 3])); // 4 (avg=2, start from 3, 3 in set, 4 not)
console.log(smallestAbsent([-5, -3])); // 1 (avg=-4, start from 1)
console.log(smallestAbsent([0])); // 1 (avg=0, start from 1)
console.log(smallestAbsent([100])); // 1 (avg=100, start from 101)
