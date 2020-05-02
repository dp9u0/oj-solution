/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let mins = [nums[0]];
  let maxs = [nums[0]];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      maxs[i] = Math.max(maxs[i - 1] * nums[i], nums[i]);
      mins[i] = Math.min(mins[i - 1] * nums[i], nums[i]);
    }
    else {
      maxs[i] = Math.max(mins[i - 1] * nums[i], nums[i]);
      mins[i] = Math.min(maxs[i - 1] * nums[i], nums[i]);
    }
    max = Math.max(max, maxs[i]);
  }
  return max;
};

// TEST:
console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2]));