/*
 * @lc app=leetcode id=1850 lang=javascript
 *
 * [1850] Minimum Adjacent Swaps to Reach the Kth Smallest Number
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function(num, k) {
  const n = num.length;
  let arr = num.split('');

  // next permutation k times
  for (let t = 0; t < k; t++) {
    let i = n - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) i--;
    let j = n - 1;
    while (arr[j] <= arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    let l = i + 1, r = n - 1;
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }

  const target = arr;
  const original = num.split('');
  let swaps = 0;

  for (let i = 0; i < n; i++) {
    let j = i;
    while (original[j] !== target[i]) j++;
    while (j > i) {
      [original[j], original[j - 1]] = [original[j - 1], original[j]];
      swaps++;
      j--;
    }
  }

  return swaps;
};
// @lc code=end

// TEST:
console.log(getMinSwaps('5489355142', 4)); // 2
console.log(getMinSwaps('11112', 4)); // 4
console.log(getMinSwaps('00123', 1)); // 1
