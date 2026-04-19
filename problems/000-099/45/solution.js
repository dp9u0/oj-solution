/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length < 2) return 0;
  let i = 0;
  let step = 0;
  let currentReach = nums[0];
  let canReach = nums[0]; // 0 + nums[0]
  while (currentReach < nums.length - 1) {
    canReach = Math.max(canReach, i + nums[i]);
    if (i++ === currentReach) {
      step++;
      currentReach = canReach;
    }
  }
  // 到达最后的那步没有计算.
  step++;
  return step;
};

/**
// TEST:
let input = [2, 3, 1, 1, 4]
console.log(jump(input));
*/