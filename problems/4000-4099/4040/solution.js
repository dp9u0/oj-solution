/*
 * @lc app=leetcode id=4040 lang=javascript
 *
 * [4040] Minimum Operations to Form Subset Sum I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} sum
 * @return {number}
 */
var minOperations = function (nums, sum) {
  const INF = Infinity;
  // dp[s]: min operations to form subset sum s
  let dp = new Array(sum + 1).fill(INF);
  dp[0] = 0;

  for (const x of nums) {
    // useful values per element: repeatedly double, or repeatedly floor-halve
    const reach = new Map();
    const offer = (v, c) => {
      if (v >= 1 && v <= sum && c < (reach.get(v) ?? INF)) reach.set(v, c);
    };
    for (let v = x, c = 0; v <= sum; v *= 2, c++) offer(v, c);
    for (let v = x, c = 0; v > 0; v = Math.floor(v / 2), c++) offer(v, c);

    // 0/1 knapsack: read from old dp so each element is used at most once
    const ndp = dp.slice();
    for (const [v, c] of reach) {
      for (let s = sum; s >= v; s--) {
        if (dp[s - v] + c < ndp[s]) ndp[s] = dp[s - v] + c;
      }
    }
    dp = ndp;
  }

  return dp[sum] === INF ? -1 : dp[sum];
};
// @lc code=end

// TEST:
console.log(minOperations([5, 6, 10], 4) === 3, minOperations([5, 6, 10], 4)); // 1 + 3 = 4
console.log(minOperations([10, 2], 13) === 3, minOperations([10, 2], 13)); // 5 + 8 = 13
console.log(minOperations([6, 3], 8) === -1, minOperations([6, 3], 8)); // impossible
console.log(minOperations([1], 1) === 0, minOperations([1], 1)); // already there
console.log(minOperations([1], 5000) === -1, minOperations([1], 5000)); // only powers of 2 reachable
console.log(minOperations([5000], 5000) === 0, minOperations([5000], 5000)); // no ops needed
console.log(minOperations([3], 6) === 1, minOperations([3], 6)); // double once
console.log(minOperations([2, 2, 2, 2], 15) === 4, minOperations([2, 2, 2, 2], 15)); // 8+4+2+1