/*
 * @lc app=leetcode id=3806 lang=javascript
 *
 * [3806] Maximum Bitwise AND After Increment Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var maximumAND = function(nums, k, m) {
  const n = nums.length;

  // Compute minimum cost to make v have all bits of T set (v' >= v, v' & T == T)
  function minCost(v, T) {
    let result = 0;
    let gt = false; // already greater than v in higher bits
    for (let b = 30; b >= 0; b--) {
      const vb = (v >> b) & 1;
      const tb = (T >> b) & 1;
      if (tb) {
        result |= (1 << b);
        if (!gt && !vb) gt = true;
      } else if (gt) {
        // already > v, minimize: leave as 0
      } else if (vb) {
        result |= (1 << b); // must match v to keep >= v
      }
    }
    return result - v;
  }

  function canAchieve(T) {
    const costs = new Array(n);
    for (let i = 0; i < n; i++) {
      costs[i] = minCost(nums[i], T);
    }
    costs.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < m; i++) {
      total += costs[i];
      if (total > k) return false;
    }
    return true;
  }

  let ans = 0;
  for (let b = 30; b >= 0; b--) {
    if (canAchieve(ans | (1 << b))) {
      ans |= (1 << b);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maximumAND([3, 1, 2], 8, 2)); // 6
console.log(maximumAND([1, 2, 8, 4], 7, 3)); // 4
console.log(maximumAND([1, 1], 3, 2)); // 2
console.log(maximumAND([1], 5, 1)); // 6
console.log(maximumAND([2, 4], 0, 2)); // 0
