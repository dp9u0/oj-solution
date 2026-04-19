/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const length = nums.length;
  const dp = new Array(length).fill(1)
  let max = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) { dp[i] = Math.max(dp[i], dp[j] + 1); }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};


// TEST:
let nums = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(nums));

nums = [0, 1, 0, 3, 2, 3]
console.log(lengthOfLIS(nums))

nums = [7, 7, 7, 7, 7, 7, 7]
console.log(lengthOfLIS(nums))

nums = []
console.log(lengthOfLIS(nums))