/*
 * @lc app=leetcode id=3404 lang=javascript
 *
 * [3404] Count Special Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfSubsequences = function(nums) {
  const n = nums.length;
  let result = 0;
  const leftFreq = new Int32Array(1000001);

  for (let r = 4; r <= n - 3; r++) {
    // Build right value frequency: count of each nums[s] for s in [r+2, n-1]
    const rightFreq = new Int32Array(1001);
    const rightValues = [];
    for (let s = r + 2; s < n; s++) {
      const v = nums[s];
      if (!rightFreq[v]) rightValues.push(v);
      rightFreq[v]++;
    }

    const usedProducts = [];

    for (let q = 2; q <= r - 2; q++) {
      // Add new p = q - 2 to left product frequency
      const prod = nums[q - 2] * nums[r];
      if (!leftFreq[prod]) usedProducts.push(prod);
      leftFreq[prod]++;

      // Match: for each distinct right value v, check if nums[q]*v exists in leftFreq
      for (const v of rightValues) {
        const target = nums[q] * v;
        if (leftFreq[target]) {
          result += leftFreq[target] * rightFreq[v];
        }
      }
    }

    // Clear leftFreq for next r iteration
    for (const p of usedProducts) leftFreq[p] = 0;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(numberOfSubsequences([1,2,3,4,3,6,1])); // 1
console.log(numberOfSubsequences([3,4,3,4,3,4,3,4])); // 3
console.log(numberOfSubsequences([2,2,2,2,2,2,2,2])); // 5
