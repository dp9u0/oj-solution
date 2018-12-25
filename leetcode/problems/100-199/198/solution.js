/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let f = [];
  let max = 0;
  for (let index = 0; index < nums.length; index++) {
    f[index] = Math.max(f[index - 2] || 0, f[index - 3] || 0) + nums[index];
    max = Math.max(max, f[index]);
  }
  return max;
};

/**
// TEST: 
console.log(rob([2, 1, 9, 11, 1]))
*/