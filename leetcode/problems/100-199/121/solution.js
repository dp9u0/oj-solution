/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let hold = Number.POSITIVE_INFINITY; // 一次持仓成本
  let profit = 0;  // 一次持仓盈利
  for (let i = 0; i < prices.length; i++) {
    const p = prices[i];
    hold = Math.min(hold, p);
    profit = Math.max(profit, p - hold);
  }
  return profit;
};

// TEST:
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))