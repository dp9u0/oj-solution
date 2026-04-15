/*
 * @lc app=leetcode id=3201 lang=javascript
 *
 * [3201] Find the Maximum Length of Valid Subsequence I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
  let oddCount = 0, evenCount = 0;
  let lenOdd = 0, lenEven = 0; // longest alternating subseq ending with odd/even

  for (const x of nums) {
    const p = x & 1;
    if (p) {
      oddCount++;
      lenOdd = Math.max(lenOdd, lenEven + 1);
    } else {
      evenCount++;
      lenEven = Math.max(lenEven, lenOdd + 1);
    }
  }

  // Case 1: all sums even → all same parity
  // Case 2: all sums odd → alternating parities
  return Math.max(oddCount, evenCount, lenOdd, lenEven);
};
// @lc code=end

// TEST:
console.log(maximumLength([1,2,3,4])); // 4
console.log(maximumLength([1,2,1,1,2,1,2])); // 6
console.log(maximumLength([1,3])); // 2
