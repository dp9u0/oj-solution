/*
 * @lc app=leetcode id=1317 lang=javascript
 *
 * [1317] Convert Integer to the Sum of Two No-Zero Integers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const noZero = (x) => !String(x).includes('0');
    for (let a = 1; a < n; a++) {
        if (noZero(a) && noZero(n - a)) return [a, n - a];
    }
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getNoZeroIntegers(2))); // [1,1]
console.log(JSON.stringify(getNoZeroIntegers(11))); // [2,9]
console.log(JSON.stringify(getNoZeroIntegers(101))); // e.g. [1,100] invalid, [2,99] valid
