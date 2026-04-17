/*
 * @lc app=leetcode id=3224 lang=javascript
 *
 * [3224] Minimum Array Changes to Make Differences Equal
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {
  const n = nums.length;
  const P = n >> 1;

  const freqD = new Int32Array(k + 1);
  const freqM = new Int32Array(k + 2);

  for (let i = 0; i < P; i++) {
    const a = nums[i], b = nums[n - 1 - i];
    freqD[Math.abs(a - b)]++;
    freqM[Math.max(a, b, k - a, k - b)]++;
  }

  let cntMGe = 0, best = 0;
  for (let x = k; x >= 0; x--) {
    cntMGe += freqM[x];
    const score = freqD[x] + cntMGe;
    if (score > best) best = score;
  }

  return 2 * P - best;
};
// @lc code=end

// TEST:
console.log(minChanges([1,0,1,2,4,3], 4)); // 2
console.log(minChanges([0,1,2,3,3,6,5,4], 6)); // 2
console.log(minChanges([0,0], 1)); // 0
console.log(minChanges([1,0], 1)); // 0
console.log(minChanges([0,0,0,1], 1)); // 1
