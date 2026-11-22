/*
 * @lc app=leetcode.cn id=2847 lang=javascript
 *
 * [2847] 给定数字乘积的最小数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var smallestNumber = function(n) {
    if (n === 1) return '1';
    let e2 = 0, e3 = 0, e5 = 0, e7 = 0;
    for (; n % 2 === 0; n /= 2) e2++;
    for (; n % 3 === 0; n /= 3) e3++;
    for (; n % 5 === 0; n /= 5) e5++;
    for (; n % 7 === 0; n /= 7) e7++;
    if (n !== 1) return '-1';
    const digits = [];
    for (let i = 0; i < e5; i++) digits.push(5);
    for (let i = 0; i < e7; i++) digits.push(7);
    for (let i = 0; i < Math.floor(e2 / 3); i++) digits.push(8);
    for (let i = 0; i < Math.floor(e3 / 2); i++) digits.push(9);
    const r2 = e2 % 3, r3 = e3 % 2;
    if (r2 === 1 && r3 === 0) digits.push(2);
    else if (r2 === 0 && r3 === 1) digits.push(3);
    else if (r2 === 2 && r3 === 0) digits.push(4);
    else if (r2 === 1 && r3 === 1) digits.push(6);
    else if (r2 === 2 && r3 === 1) { digits.push(2); digits.push(6); }
    digits.sort((a, b) => a - b);
    return digits.join('');
};
// @lc code=end

// TEST:
console.log(smallestNumber(105)); // "357"
console.log(smallestNumber(7)); // "7"
console.log(smallestNumber(44)); // "-1"
console.log(smallestNumber(1)); // "1"
console.log(smallestNumber(16)); // "28"
console.log(smallestNumber(108)); // "269"
console.log(smallestNumber(216)); // "389"
console.log(smallestNumber(1000000000000000)); // "3577777777777778888888..." verify by product
