/*
 * @lc app=leetcode id=3574 lang=javascript
 *
 * [3574] Maximize Subarray GCD Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxGCDScore = function(nums, k) {
  const n = nums.length;

  function gcd(a, b) {
    while (b) { const t = b; b = a % t; a = t; }
    return a;
  }

  const v2s = new Int32Array(n);
  for (let i = 0; i < n; i++) {
    let x = nums[i], c = 0;
    while (x % 2 === 0) { c++; x /= 2; }
    v2s[i] = c;
  }

  let ans = 0;

  for (let l = 0; l < n; l++) {
    let g = 0, minV = Infinity, minVC = 0;
    for (let r = l; r < n; r++) {
      g = gcd(g, nums[r]);
      if (v2s[r] < minV) { minV = v2s[r]; minVC = 1; }
      else if (v2s[r] === minV) minVC++;

      const len = r - l + 1;
      const base = len * g;
      const boosted = minVC <= k ? len * g * 2 : base;
      const score = Math.max(base, boosted);
      if (score > ans) ans = score;
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(maxGCDScore([2,4], 1)); // 8
console.log(maxGCDScore([3,5,7], 2)); // 14
console.log(maxGCDScore([5,5,5], 1)); // 15
console.log(maxGCDScore([6,10], 1)); // 20
console.log(maxGCDScore([4,6], 1)); // 12
