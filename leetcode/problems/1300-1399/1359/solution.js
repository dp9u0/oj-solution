/*
 * @lc app=leetcode id=1359 lang=javascript
 *
 * [1359] Count All Valid Pickup and Delivery Options
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
  const MOD = 1e9 + 7;
  let result = 1;

  for (let k = 2; k <= n; k++) {
    result = (result * k * (2 * k - 1)) % MOD;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countOrders(1)); // 1
console.log(countOrders(2)); // 6
console.log(countOrders(3)); // 90
