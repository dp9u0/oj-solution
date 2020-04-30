/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let hold1 = Number.POSITIVE_INFINITY; // 一次持仓成本
  let hold2 = Number.POSITIVE_INFINITY; // 两次持仓成本
  let profit1 = 0;  // 一次持仓盈利
  let profit2 = 0;  // 两次持仓盈利
  for (let i = 0; i < prices.length; i++) {
    const p = prices[i];
    hold1 = Math.min(hold1, p);
    profit1 = Math.max(profit1, p - hold1);
    hold2 = Math.min(hold2, p - profit1);
    profit2 = Math.max(profit2, p - hold2);
  }
  return profit2;
};


// TEST:

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))
