/*
 * @lc app=leetcode.cn id=LCR 090 lang=javascript
 *
 * [LCR 090] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];

  // Standard House Robber DP on a linear segment nums[l..r]
  const robRange = (l, r) => {
    let prev2 = 0;
    let prev1 = 0;
    for (let i = l; i <= r; i++) {
      const curr = Math.max(prev1, prev2 + nums[i]);
      prev2 = prev1;
      prev1 = curr;
    }
    return prev1;
  };

  // Break the circle: either skip the first house or skip the last house
  return Math.max(robRange(0, n - 2), robRange(1, n - 1));
};
// @lc code=end

/**
// TEST:
console.log(rob([2, 3, 2])) // expect 3
console.log(rob([1, 2, 3, 1])) // expect 4
console.log(rob([0])) // expect 0
console.log(rob([2, 7, 9, 3, 1])) // expect 11
console.log(rob([1, 2, 3])) // expect 3
console.log(rob([1, 2, 3, 4, 5, 6])) // expect 12
*/
