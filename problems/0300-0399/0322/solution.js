/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(-1);
  dp[0] = 0;
  coins.forEach(coin => { if (coin <= amount) dp[coin] = 1; });
  if (dp[amount] !== -1) return dp[amount];
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const already = dp[i - coins[j]];
      if (already && already !== -1) { // 如果存在
        const current = dp[i];
        dp[i] = current === -1 ? already + 1 : Math.min(current, already + 1);
      }
    }
  }
  return dp[amount];
};


// TEST:
let coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount))

coins = [2], amount = 3
console.log(coinChange(coins, amount))

coins = [1], amount = 0
console.log(coinChange(coins, amount))

coins = [1], amount = 1
console.log(coinChange(coins, amount))


coins = [1], amount = 2
console.log(coinChange(coins, amount))