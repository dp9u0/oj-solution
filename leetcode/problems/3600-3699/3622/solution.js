/*
 * @lc app=leetcode id=3622 lang=javascript
 *
 * [3622] Check Divisibility by Digit Sum and Product
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let sum = 0, prod = 1, x = n;
    while (x > 0) {
        const d = x % 10;
        sum += d;
        prod *= d;
        x = Math.floor(x / 10);
    }
    return n % (sum + prod) === 0;
};
// @lc code=end

// TEST:
console.log(checkDivisibility(99));   // true
console.log(checkDivisibility(23));   // false
console.log(checkDivisibility(1));    // false (1%2=1)
console.log(checkDivisibility(10));   // true (10%1=0)
console.log(checkDivisibility(22));   // false (22%8=6)
