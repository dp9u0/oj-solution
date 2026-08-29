/*
 * @lc app=leetcode id=3985 lang=javascript
 *
 * [3985] Palindromic Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var getSum = function(nums) {
  const n = nums.length;
  const pre = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];

  // Manacher over value symbols, -1 as separator (values >= 1)
  const t = [-1];
  for (const v of nums) {
    t.push(v);
    t.push(-1);
  }
  const m = t.length;
  const p = Array(m).fill(0);
  let c = 0;
  let r = 0;
  for (let i = 0; i < m; i++) {
    if (i < r) p[i] = Math.min(r - i, p[2 * c - i]);
    while (i - p[i] - 1 >= 0 && i + p[i] + 1 < m && t[i - p[i] - 1] === t[i + p[i] + 1]) {
      p[i]++;
    }
    if (i + p[i] > r) {
      c = i;
      r = i + p[i];
    }
  }

  let ans = -Infinity;
  for (let i = 0; i < m; i++) {
    const L = (i - p[i]) >> 1;
    const R = (i + p[i] - 1) >> 1;
    if (L > R) continue;
    const sum = pre[R + 1] - pre[L];
    if (sum > ans) ans = sum;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(getSum([10, 10]) === 20);
console.log(getSum([1, 2, 3, 2, 1, 5, 6]) === 9);
console.log(getSum([7, 1, 2, 1, 7, 3, 4, 3, 4]) === 18);
console.log(getSum([1, 2, 3, 4, 5]) === 5);
console.log(getSum([1000]) === 1000);
console.log(getSum([5, 5, 5, 5]) === 20);
console.log(getSum([1, 2, 1, 2, 1]) === 7);
console.log(getSum([3]) === 3);
