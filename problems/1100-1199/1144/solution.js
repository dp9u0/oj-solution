/*
 * @lc app=leetcode id=1144 lang=javascript
 *
 * [1144] Decrease Elements To Make Array Zigzag
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
  const n = nums.length;
  const cost = (startValley) => {
    let total = 0;
    for (let i = startValley; i < n; i += 2) {
      const left = i > 0 ? nums[i - 1] : Infinity;
      const right = i < n - 1 ? nums[i + 1] : Infinity;
      const target = Math.min(left, right) - 1;
      if (nums[i] > target) total += nums[i] - target;
    }
    return total;
  };
  return Math.min(cost(0), cost(1));
};
// @lc code=end

// TEST:
console.log(movesToMakeZigzag([1,2,3])); // 2
console.log(movesToMakeZigzag([9,6,1,6,2])); // 4
console.log(movesToMakeZigzag([2,7,10,9,8])); // 4
