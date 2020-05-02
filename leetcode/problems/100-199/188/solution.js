/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (!k || !prices.length) return 0;
  let pLength = prices.length
  if (k >= pLength / 2) {
    return maxProfitInf(prices);
  }
  let holdings = new Array(k + 1).fill(Number.NEGATIVE_INFINITY);
  let profits = new Array(k + 1).fill(0);
  for (let i = 0; i < pLength; i++) {
    const p = prices[i];
    for (let j = 1; j <= k; j++) {
      holdings[j] = Math.max(holdings[j], profits[j - 1] - p); // 买入
      profits[j] = Math.max(profits[j], holdings[j] + p); // 卖出
    }
  }
  return profits[k];
};

var maxProfitInf = function (prices) {
  let total = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      total += prices[i + 1] - prices[i];
    }
  }
  return total;
};

// TEST:
console.log(maxProfit(2, [2, 4, 1]))
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]))