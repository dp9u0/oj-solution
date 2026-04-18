/*
 * @lc app=leetcode id=2806 lang=javascript
 *
 * [2806] Account Balance After Rounded Purchase
 */

// @lc code=start
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    return 100 - Math.floor((purchaseAmount + 5) / 10) * 10;
};
// @lc code=end

// TEST:
console.log(accountBalanceAfterPurchase(9)); // 90
console.log(accountBalanceAfterPurchase(15)); // 80
console.log(accountBalanceAfterPurchase(10)); // 90
console.log(accountBalanceAfterPurchase(0)); // 100
console.log(accountBalanceAfterPurchase(5)); // 90
console.log(accountBalanceAfterPurchase(4)); // 100
