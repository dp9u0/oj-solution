/*
 * @lc app=leetcode id=3312 lang=javascript
 *
 * [3312] Sorted GCD Pair Queries
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
  const maxVal = Math.max(...nums);
  const freq = new Int32Array(maxVal + 1);
  for (const v of nums) freq[v]++;

  const cnt = new Int32Array(maxVal + 1);
  for (let g = 1; g <= maxVal; g++) {
    for (let m = g; m <= maxVal; m += g) {
      cnt[g] += freq[m];
    }
  }

  const pairCount = new Float64Array(maxVal + 1);
  for (let g = maxVal; g >= 1; g--) {
    pairCount[g] = cnt[g] * (cnt[g] - 1) / 2;
    for (let m = 2 * g; m <= maxVal; m += g) {
      pairCount[g] -= pairCount[m];
    }
  }

  const prefix = new Float64Array(maxVal + 1);
  for (let g = 1; g <= maxVal; g++) {
    prefix[g] = prefix[g - 1] + pairCount[g];
  }

  return queries.map(q => {
    let lo = 1, hi = maxVal;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (prefix[mid] > q) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(gcdValues([2,3,4], [0,2,2])) === JSON.stringify([1,2,2]));
console.log(JSON.stringify(gcdValues([4,4,2,1], [5,3,1,0])) === JSON.stringify([4,2,1,1]));
console.log(JSON.stringify(gcdValues([2,2], [0,0])) === JSON.stringify([2,2]));
console.log(JSON.stringify(gcdValues([6,10,15], [0,1,2])) === JSON.stringify([2,3,5]));
console.log(JSON.stringify(gcdValues([1,1,1], [0,1,2])) === JSON.stringify([1,1,1]));
