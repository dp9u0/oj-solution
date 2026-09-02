/*
 * @lc app=leetcode.cn id=LCR 093 lang=javascript
 *
 * [LCR 093] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
  const n = arr.length;
  // map value -> index (arr is strictly increasing so values are unique)
  const index = new Map();
  for (let i = 0; i < n; i++) {
    index.set(arr[i], i);
  }

  // dp as nested arrays: dp[i][j] = length of longest fib-like subseq ending at arr[i], arr[j]
  const dp = Array.from({ length: n }, () => new Array(n).fill(2));
  let ans = 0;

  for (let j = 2; j < n; j++) {
    for (let i = j - 1; i >= 0; i--) {
      const prev = arr[j] - arr[i];
      // prev must be smaller than arr[i] (strictly increasing) and present in arr
      if (prev >= arr[i]) break; // as i decreases, arr[i] decreases, prev keeps growing
      const k = index.get(prev);
      if (k !== undefined && k < i) {
        dp[i][j] = dp[k][i] + 1;
        if (dp[i][j] > ans) ans = dp[i][j];
      }
    }
  }

  return ans >= 3 ? ans : 0;
};
// @lc code=end

// TEST:
console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])); // 5
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])); // 3
console.log(lenLongestFibSubseq([1, 2, 3])); // 3
console.log(lenLongestFibSubseq([1, 2, 5])); // 0
console.log(lenLongestFibSubseq([2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50])); // 5 ([4,14,18,32,50])
// @lc code=end
