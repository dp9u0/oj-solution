/*
 * @lc app=leetcode id=1281 lang=javascript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1, sum = 0;
    while (n > 0) {
        const d = n % 10;
        product *= d;
        sum += d;
        n = Math.floor(n / 10);
    }
    return product - sum;
};
// @lc code=end

// TEST:
console.log(subtractProductAndSum(234));  // 15
console.log(subtractProductAndSum(4421)); // 21
console.log(subtractProductAndSum(1));    // 0
