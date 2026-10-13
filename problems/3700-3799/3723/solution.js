/*
 * @lc app=leetcode.cn id=3723 lang=javascript
 *
 * [3723] 数位平方和的最大值
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    // 可行性：每位最多 9，数字和为 sum 需 sum <= 9 * num
    if (sum > num * 9) return '';

    const full = Math.floor(sum / 9);
    const rem = sum % 9;
    const zeros = '0'.repeat(rem === 0 ? num - full : num - full - 1);
    return '9'.repeat(full) + (rem === 0 ? '' : String(rem)) + zeros;
};
// @lc code=end

// TEST:
console.log(maxSumOfSquares(2, 3) === '30');
console.log(maxSumOfSquares(2, 17) === '98');
console.log(maxSumOfSquares(1, 10) === '');
console.log(maxSumOfSquares(1, 9) === '9');
console.log(maxSumOfSquares(1, 1) === '1');
console.log(maxSumOfSquares(3, 18) === '990');
console.log(maxSumOfSquares(4, 1) === '1000');
console.log(maxSumOfSquares(2, 18) === '99');
console.log(maxSumOfSquares(5, 45) === '99999');
console.log(maxSumOfSquares(3, 27) === '999');
console.log(maxSumOfSquares(3, 19) === '991');
console.log(maxSumOfSquares(200000, 2000000) === '');
console.log(maxSumOfSquares(200000, 1800000) === '9'.repeat(200000));
console.log(maxSumOfSquares(200000, 1799999) === '9'.repeat(199999) + '8');
