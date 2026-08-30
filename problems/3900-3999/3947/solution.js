/*
 * @lc app=leetcode id=3947 lang=javascript
 *
 * [3947] Maximum Number of Items From Sale II
 */

// @lc code=start
/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function (items, budget) {
  const n = items.length;

  // cnt[f] = number of items whose factor equals f (1 <= factor <= n)
  const cnt = new Array(n + 1).fill(0);
  let minPrice = Infinity;
  for (const [factor, price] of items) {
    cnt[factor]++;
    if (price < minPrice) minPrice = price;
  }

  // totalDiv[f] = number of items whose factor is a multiple of f
  const totalDiv = new Array(n + 1).fill(0);
  for (let f = 1; f <= n; f++) {
    if (cnt[f] === 0) continue;
    for (let mult = f; mult <= n; mult += f) {
      totalDiv[f] += cnt[mult];
    }
  }

  // Marginal units: for item i, the first (totalDiv[factor]-1) copies have value 2,
  // all later copies value 1. Value-1 units are unlimited at minPrice.
  // Process value-2 units by price in batches; the optimum lies on batch boundaries.
  const sorted = items.slice().sort((a, b) => a[1] - b[1]);

  let ans = Math.floor(budget / minPrice); // only value-1 units
  let spend = 0;
  let count = 0;
  for (const [factor, price] of sorted) {
    const gain = totalDiv[factor] - 1;
    if (gain === 0) continue;
    const remaining = budget - spend;
    if (remaining < price) break;
    const t = Math.min(gain, Math.floor(remaining / price));
    spend += t * price;
    count += t;
    const candidate = 2 * count + Math.floor((budget - spend) / minPrice);
    if (candidate > ans) ans = candidate;
    if (t < gain) break; // budget exhausted; later batches cost even more
  }
  return ans;
};
// @lc code=end

// TEST:
const run = (items, budget) => maximumSaleItems(items, budget);
console.log(run([[1, 6], [2, 4], [3, 5]], 19) === 5);
console.log(run([[2, 8], [1, 10], [6, 6], [4, 12], [5, 20], [5, 17]], 35) === 7);
// single item, no free copies possible
console.log(run([[1, 5]], 17) === 3);
// single item type repeated budget-wise: all gains zero except via same factor duplicates
console.log(run([[2, 3], [2, 7]], 10) === 4); // buy 3x price3 -> 2 paid +1 free(2|2)=3? see below
// ^ items A=[2,3], B=[2,7]: gain A=1 (B), gain B=1 (A). m=3.
//   value2 units: A@3 (1), B@7 (1). initial: 10/3=3.
//   batch A: t=1, count=1, spend=3 -> 2 + 7/3=2 -> 4. batch B: rem=7, t=1, count=2, spend=10 -> 4 + 0 = 4.
// expensive value-2 units skipped in favor of cheap value-1 units (p > 2m)
console.log(run([[1, 100], [2, 1]], 100) === 100);
// ^ m=1, gain(item0 factor1)=1, gain(item1 factor2)=0. initial: 100.
//   batch price1: skip(g0); batch price100: t=1 -> 2 + 0 = 2. max=100.
// budget too small for any value-2 unit
console.log(run([[3, 50], [6, 60]], 49) === 0);
// large-scale sanity: 5 same-factor items, each gain=4 -> buy 20 value-2 units then value-1 fill
console.log(run([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]], 1000000000) === 1000000020);
