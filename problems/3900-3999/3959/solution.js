/*
 * @lc app=leetcode id=3959 lang=javascript
 *
 * [3959] Check Good Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let diff = 0;
    while (n > 0) {
        const d = n % 10;
        diff += d * (d - 1);
        n = Math.floor(n / 10);
    }
    return diff >= 50;
};
// @lc code=end

// TEST:
console.log(checkGoodInteger(1000) === false); // diff = 0
console.log(checkGoodInteger(19) === true);    // diff = 72
console.log(checkGoodInteger(9) === true);     // 9*8 = 72 >= 50
console.log(checkGoodInteger(1) === false);    // diff = 0
console.log(checkGoodInteger(99) === true);    // 72 + 72 = 144 >= 50
console.log(checkGoodInteger(58) === true);    // 20 + 56 = 76 >= 50
console.log(checkGoodInteger(55) === false);   // 20 + 20 = 40 < 50
