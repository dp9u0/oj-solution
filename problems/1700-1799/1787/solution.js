/*
 * @lc app=leetcode id=1787 lang=javascript
 *
 * [1787] Make the XOR of All Segments Equal to Zero
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {
  const n = nums.length;
  const MAX_VAL = 1 << 10;

  // Group by i % k
  const groups = Array.from({ length: k }, () => new Map());
  const groupSize = new Array(k).fill(0);

  for (let i = 0; i < n; i++) {
    const g = i % k;
    groups[g].set(nums[i], (groups[g].get(nums[i]) || 0) + 1);
    groupSize[g]++;
  }

  // dp[x] = min changes to achieve XOR x after processing some groups
  const INF = n + 1;
  let dp = new Array(MAX_VAL).fill(INF);
  dp[0] = 0;

  for (let i = 0; i < k; i++) {
    const nextDp = new Array(MAX_VAL).fill(INF);
    // Min cost to set this group to any value = groupSize[i] - maxFreq
    let minPrev = INF;
    for (let x = 0; x < MAX_VAL; x++) {
      if (dp[x] < minPrev) minPrev = dp[x];
    }

    // For each value v that exists in group i
    for (const [v, freq] of groups[i]) {
      const cost = groupSize[i] - freq;
      for (let x = 0; x < MAX_VAL; x++) {
        if (dp[x] + cost < nextDp[x ^ v]) {
          nextDp[x ^ v] = dp[x] + cost;
        }
      }
    }

    // For values v not in the group, cost = groupSize[i]
    // We can use minPrev + groupSize[i] as upper bound for any XOR value
    const fallback = minPrev + groupSize[i];
    for (let x = 0; x < MAX_VAL; x++) {
      if (fallback < nextDp[x]) {
        nextDp[x] = fallback;
      }
    }

    dp = nextDp;
  }

  return dp[0];
};
// @lc code=end

// TEST:
console.log(minChanges([1, 2, 0, 3, 0], 1)); // 3
console.log(minChanges([3, 4, 5, 2, 1, 7, 3, 4, 7], 3)); // 3
console.log(minChanges([1, 2, 4, 1, 2, 5, 1, 2, 6], 3)); // 3
