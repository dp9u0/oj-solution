/*
 * @lc app=leetcode.cn id=2802 lang=javascript
 *
 * [2802] 找出第 K 个幸运数字
 */

// @lc code=start
/**
 * @param {number} k
 * @return {string}
 */
var kthLuckyNumber = function(k) {
    let c = 1;
    while (Math.pow(2, c + 1) - 2 < k) c++;
    const idx = k - (Math.pow(2, c) - 2) - 1;
    const bits = idx.toString(2).padStart(c, '0');
    let out = '';
    for (const ch of bits) out += ch === '0' ? '4' : '7';
    return out;
};
// @lc code=end

// TEST:
console.log(kthLuckyNumber(4)); // "47"
console.log(kthLuckyNumber(10)); // "477"
console.log(kthLuckyNumber(1)); // "4"
console.log(kthLuckyNumber(2)); // "7"
console.log(kthLuckyNumber(1000)); // "777747447"
