/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length == 0) {
    return 0;
  }
  let max = 0;
  let bustBuy = prices[0];
  for (let i = 0; i < prices.length; ++i) {
    let price = prices[i];
    if (price > bustBuy) {
      max = Math.max(max, price - bustBuy);
    } else {
      bustBuy = price;
    }
  }
  return max;
};