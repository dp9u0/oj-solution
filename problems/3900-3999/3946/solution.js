/*
 * @lc app=leetcode.cn id=3946 lang=javascript
 *
 * [3946] 购买最多物品数目 I
 */

// @lc code=start
/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
  const MAX_FACTOR = 1500;

  // factorCount[f]: how many item kinds have factor exactly f
  const factorCount = new Array(MAX_FACTOR + 1).fill(0);
  for (const [factor] of items) factorCount[factor]++;

  // divCount[f]: how many item kinds have a factor divisible by f
  const divCount = new Array(MAX_FACTOR + 1).fill(0);
  for (let f = 1; f <= MAX_FACTOR; f++) {
    for (let m = f; m <= MAX_FACTOR; m += f) divCount[f] += factorCount[m];
  }

  // dp[b]: max total items obtainable with spending exactly-at-most b
  const dp = new Array(budget + 1).fill(0);
  for (const [factor, price] of items) {
    const bonus = divCount[factor] - 1; // free copies granted by first purchase (excludes self)

    // Activation pass (0/1 knapsack): first copy yields 1 purchased + bonus free items
    for (let b = budget; b >= price; b--) {
      dp[b] = Math.max(dp[b], dp[b - price] + 1 + bonus);
    }
    // Extra-copies pass (unbounded knapsack): each additional copy adds exactly 1
    for (let b = price; b <= budget; b++) {
      dp[b] = Math.max(dp[b], dp[b - price] + 1);
    }
  }

  return dp[budget];
};
// @lc code=end

// TEST:
if (require.main === module) {
  const assert = (actual, expected, msg) => {
    if (actual !== expected) {
      console.error(`FAIL ${msg}: expected ${expected}, got ${actual}`);
      process.exitCode = 1;
    } else {
      console.log(`PASS ${msg}`);
    }
  };

  assert(maximumSaleItems([[6, 2], [2, 6], [3, 4]], 9), 4, 'example 1');
  assert(maximumSaleItems([[2, 4], [3, 2], [4, 1], [6, 4], [12, 4]], 8), 10, 'example 2');
  assert(maximumSaleItems([[5, 3]], 2), 0, 'budget too small buys nothing');
  assert(maximumSaleItems([[1, 1]], 10), 10, 'no other factors exist, bonus 0, 10 copies');
  assert(maximumSaleItems([[2, 1], [4, 1]], 4), 5, 'activate both (3 items) + 2 extra copies');
  assert(maximumSaleItems([[3, 5], [3, 5]], 10), 4, 'duplicate kinds: each activation grants the other');
  assert(maximumSaleItems([[7, 10], [14, 10], [21, 10]], 30), 5, 'buy one of each, 7 divides 14 and 21');
}
