/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let ns = [-1, -1, -1];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    let m = 2;
    while (m >= n) {
      nums[++ns[m]] = m--;
    }
  }
};

/**
// TEST:
let nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
console.log(nums);
*/