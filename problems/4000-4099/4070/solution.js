/*
 * @lc app=leetcode.cn id=4070 lang=javascript
 *
 * [4070] 拨号的最少旋转次数 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minRotations = function(s) {
    let cur = 0;
    let ans = 0;
    for (const ch of s) {
        const d = Math.abs(ch.charCodeAt(0) - 48 - cur);
        ans += Math.min(d, 10 - d);
        cur = ch.charCodeAt(0) - 48;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minRotations('0192837465')); // 25
console.log(minRotations('1200210200')); // 12
console.log(minRotations('0000000000')); // 0
console.log(minRotations('9999999999')); // 1 (0->9 走 1 步，之后每步 0)
console.log(minRotations('5494747474')); // 34 (0->5 走 5 步)
