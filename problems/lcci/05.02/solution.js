/*
 * @lc app=leetcode.cn id=面试题 05.02 lang=javascript
 *
 * [面试题 05.02] 二进制数转字符串
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var printBin = function(num) {
    // 乘 2 取整；32 位含 "0." 两字符，小数部分至多 30 位
    let bits = '0.';
    while (num !== 0) {
        if (bits.length - 2 >= 30) return 'ERROR';
        num *= 2;
        if (num >= 1) {
            bits += '1';
            num -= 1;
        } else {
            bits += '0';
        }
    }
    return bits;
};
// @lc code=end

// TEST:
console.log(printBin(0.625) === '0.101');
console.log(printBin(0.1) === 'ERROR');
console.log(printBin(0.5) === '0.1');
console.log(printBin(0.984375) === '0.111111'); // 63/64
console.log(printBin(0.03125) === '0.00001'); // 1/32
console.log(printBin(0.75) === '0.11');
console.log(printBin(0.3) === 'ERROR');
