/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let cnt = 0; //the number of changes
  for (let i = 1; i < nums.length && cnt <= 1; i++) {
    if (nums[i - 1] > nums[i]) { // decrease
      cnt++;
      if (i - 2 < 0 || nums[i - 2] <= nums[i]) nums[i - 1] = nums[i]; //  改变 nums[i-1] 小于等于 nums[i]
      else nums[i] = nums[i - 1]; //  改变 nums[i] 大于等于 nums[i-1]
    }
  }
  return cnt <= 1;
};