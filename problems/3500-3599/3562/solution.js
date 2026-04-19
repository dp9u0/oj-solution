/*
 * @lc app=leetcode id=3562 lang=javascript
 *
 * [3562] Maximum Profit from Trading Stocks with Discounts
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} present
 * @param {number[]} future
 * @param {number[][]} hierarchy
 * @param {number} budget
 * @return {number}
 */
var maxProfit = function(n, present, future, hierarchy, budget) {
  // Build tree (1-indexed)
  const children = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of hierarchy) {
    children[u].push(v);
  }

  // dfs returns [dp_bought, dp_not_bought]
  // dp[b] = max profit with budget b for this subtree
  const dfs = (u, parentBought) => {
    const cost = parentBought ? Math.floor(present[u - 1] / 2) : present[u - 1];
    const profit = future[u - 1] - cost;
    const buyCost = cost;

    // Start: option to buy or not buy this node
    // dp_nb = dp when this node is NOT bought, dp_b = dp when this node IS bought
    let dpBought = new Array(budget + 1).fill(-1);
    let dpNotBought = new Array(budget + 1).fill(-1);

    // Initialize: buy nothing from children yet
    dpNotBought[0] = 0; // don't buy u
    if (buyCost <= budget && profit > 0) {
      dpBought[buyCost] = profit; // buy u
    }

    // Process children
    for (const v of children[u]) {
      const [childBought, childNotBought] = dfs(v, false);
      const [childBoughtP, childNotBoughtP] = dfs(v, true);

      // If u is not bought: children don't get discount
      let newDpNB = new Array(budget + 1).fill(-1);
      for (let b = 0; b <= budget; b++) {
        if (dpNotBought[b] < 0) continue;
        // Child not bought: use childNotBought (no discount)
        for (let cb = 0; cb + b <= budget; cb++) {
          if (childNotBought[cb] < 0) continue;
          newDpNB[b + cb] = Math.max(newDpNB[b + cb], dpNotBought[b] + childNotBought[cb]);
        }
      }
      dpNotBought = newDpNB;

      // If u is bought: children get discount
      let newDpB = new Array(budget + 1).fill(-1);
      for (let b = 0; b <= budget; b++) {
        if (dpBought[b] < 0) continue;
        // Children get discount since u is bought
        for (let cb = 0; cb + b <= budget; cb++) {
          if (childBoughtP[cb] < 0) continue;
          newDpB[b + cb] = Math.max(newDpB[b + cb], dpBought[b] + childBoughtP[cb]);
        }
      }
      dpBought = newDpB;
    }

    // Combine: merge dpBought into dpNotBought (best of buying or not buying u)
    let result = new Array(budget + 1).fill(-1);
    for (let b = 0; b <= budget; b++) {
      result[b] = Math.max(dpNotBought[b], dpBought[b]);
    }

    // Return both: [parentBought=false, parentBought=true]
    // For parentBought=true, cost is different, so we need another DFS
    // Actually we need to return the dp for both cases
    return result;
  };

  // We need to handle the fact that dfs depends on parentBought
  // So let's restructure: dfs(u) returns {dp_parentBought, dp_parentNotBought}
  const solve = (u) => {
    const costNB = present[u - 1]; // parent not bought, no discount
    const costB = Math.floor(present[u - 1] / 2); // parent bought, discount
    const profitNB = future[u - 1] - costNB;
    const profitB = future[u - 1] - costB;

    // Get children results
    const childResults = children[u].map(v => solve(v));

    // Compute dp when parent did NOT buy (this node has no discount)
    // dp0 = dp for this subtree when u's parent did not buy
    let dp0 = computeDp(costNB, profitNB, childResults, false, budget);
    // Compute dp when parent DID buy (this node has discount)
    let dp1 = computeDp(costB, profitB, childResults, true, budget);

    return { dp0, dp1 };
  };

  const { dp0, dp1 } = solve(1);
  // CEO has no parent, so no discount
  return Math.max(...dp0.filter(x => x !== -Infinity));
};

function computeDp(cost, profit, childResults, parentBought, budget) {
  // Option 1: don't buy u
  let dp = new Array(budget + 1).fill(-Infinity);
  dp[0] = 0;

  // Merge children (parentBought = false for children means u didn't buy)
  for (const cr of childResults) {
    const childDp = parentBought ? cr.dp1 : cr.dp0; // Wait, this is wrong
    // If u doesn't buy, children's parent didn't buy -> use cr.dp0
    // But we're computing "don't buy u" case here
    // Actually let me restructure...
  }

  // Hmm, let me rethink. I need two separate computations:
  // 1. u is not bought -> children use dp0 (no discount for children)
  // 2. u is bought -> children use dp1 (discount for children since u bought)

  // "not buy u" case
  let dpNotBuy = new Array(budget + 1).fill(-Infinity);
  dpNotBuy[0] = 0;
  for (const cr of childResults) {
    // u not bought -> children's parent (u) not bought -> use cr.dp0
    const childDp = cr.dp0;
    let newDp = new Array(budget + 1).fill(-Infinity);
    for (let b = 0; b <= budget; b++) {
      if (dpNotBuy[b] === -Infinity) continue;
      for (let cb = 0; cb + b <= budget; cb++) {
        if (childDp[cb] === -Infinity) continue;
        newDp[b + cb] = Math.max(newDp[b + cb], dpNotBuy[b] + childDp[cb]);
      }
    }
    dpNotBuy = newDp;
  }

  // "buy u" case
  let dpBuy = new Array(budget + 1).fill(-Infinity);
  if (cost <= budget) dpBuy[cost] = profit;
  for (const cr of childResults) {
    // u bought -> children's parent (u) bought -> use cr.dp1
    const childDp = cr.dp1;
    let newDp = new Array(budget + 1).fill(-Infinity);
    for (let b = 0; b <= budget; b++) {
      if (dpBuy[b] === -Infinity) continue;
      for (let cb = 0; cb + b <= budget; cb++) {
        if (childDp[cb] === -Infinity) continue;
        newDp[b + cb] = Math.max(newDp[b + cb], dpBuy[b] + childDp[cb]);
      }
    }
    dpBuy = newDp;
  }

  // Combine: max of buy and not buy for each budget
  let result = new Array(budget + 1).fill(-Infinity);
  for (let b = 0; b <= budget; b++) {
    result[b] = Math.max(dpNotBuy[b], dpBuy[b]);
  }
  return result;
}
// @lc code=end

// TEST:
console.log(maxProfit(2, [1,2], [4,3], [[1,2]], 3) === 5);
console.log(maxProfit(2, [3,4], [5,8], [[1,2]], 4) === 4);
console.log(maxProfit(3, [4,6,8], [7,9,11], [[1,2],[1,3]], 10) === 10);
console.log(maxProfit(3, [5,2,3], [8,5,6], [[1,2],[2,3]], 7) === 12);
console.log(maxProfit(1, [1], [2], [], 1) === 1);
