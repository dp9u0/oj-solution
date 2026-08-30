/*
 * @lc app=leetcode id=3909 lang=javascript
 *
 * [3909] Compare Sums of Bitonic Parts
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var compareBitonicSums = function(nums) {
  const n = nums.length;
  let ascSum = 0;
  let peak = -1;
  for (let i = 0; i < n; i++) {
    ascSum += nums[i];
    if (i === n - 1 || nums[i] > nums[i + 1]) {
      peak = i;
      break;
    }
  }
  let restSum = 0;
  for (let i = peak + 1; i < n; i++) restSum += nums[i];
  const descSum = nums[peak] + restSum;
  if (ascSum > descSum) return 0;
  if (descSum > ascSum) return 1;
  return -1;
};
// @lc code=end

// TEST:
console.log(compareBitonicSums([1, 3, 2, 1]) === 1);   // asc 4 < desc 6
console.log(compareBitonicSums([2, 4, 5, 2]) === 0);   // asc 11 > desc 7
console.log(compareBitonicSums([1, 2, 4, 3]) === -1);  // asc 7 == desc 7
console.log(compareBitonicSums([5, 3, 1]) === 1);      // peak at 0: asc 5 < desc 9
console.log(compareBitonicSums([1, 2, 3]) === 0);      // peak at end: asc 6, desc 3
