/*
 * @lc app=leetcode id=3287 lang=javascript
 *
 * [3287] Find the Maximum Sequence Value of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxValue = function(nums, k) {
  const n = nums.length;
  const M = 128;

  // Left DP: left[i] = set of OR values choosing k from nums[0..i-1]
  const dpL = Array.from({ length: k + 1 }, () => new Uint8Array(M));
  dpL[0][0] = 1;

  const left = new Array(n + 1);
  left[0] = new Uint8Array(M);

  for (let i = 0; i < n; i++) {
    for (let j = Math.min(i + 1, k); j >= 1; j--) {
      const prev = dpL[j - 1], cur = dpL[j];
      for (let v = 0; v < M; v++) {
        if (prev[v]) cur[v | nums[i]] = 1;
      }
    }
    left[i + 1] = new Uint8Array(dpL[k]);
  }

  // Right DP: right[i] = set of OR values choosing k from nums[i..n-1]
  const dpR = Array.from({ length: k + 1 }, () => new Uint8Array(M));
  dpR[0][0] = 1;

  const right = new Array(n + 1);
  right[n] = new Uint8Array(M);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = Math.min(n - i, k); j >= 1; j--) {
      const prev = dpR[j - 1], cur = dpR[j];
      for (let v = 0; v < M; v++) {
        if (prev[v]) cur[v | nums[i]] = 1;
      }
    }
    right[i] = new Uint8Array(dpR[k]);
  }

  // Combine: for each split point, max XOR of left OR and right OR
  let ans = 0;
  for (let i = k; i <= n - k; i++) {
    const ls = left[i], rs = right[i];
    for (let a = 0; a < M; a++) {
      if (!ls[a]) continue;
      for (let b = 0; b < M; b++) {
        if (!rs[b]) continue;
        if ((a ^ b) > ans) ans = a ^ b;
      }
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(maxValue([2, 6, 7], 1)); // 5
console.log(maxValue([4, 2, 5, 6, 7], 2)); // 2
console.log(maxValue([1, 2], 1)); // 3
console.log(maxValue([2, 3, 5, 7], 2)); // (2|3)^(5|7) = 3^7=4, (2|5)^(3|7)=7^7=0, etc.
console.log(maxValue([1, 1, 1, 1], 2)); // (1|1)^(1|1) = 1^1 = 0
console.log(maxValue([63, 63, 63, 63], 2)); // 63^63 = 0
