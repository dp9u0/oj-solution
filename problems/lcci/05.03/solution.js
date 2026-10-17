/*
 * @lc app=leetcode.cn id=面试题 05.03 lang=javascript
 *
 * [面试题 05.03] 翻转数位
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function(num) {
    // prev: 最近一个 0 前的 1 串长（-1 表示尚未遇到 0）；翻转该 0 得 prev+1+cur
    let prev = -1;
    let cur = 0;
    let best = 0;
    for (let i = 0; i < 32; i++) {
        if ((num >>> i) & 1) {
            cur++;
        } else {
            prev = cur;
            cur = 0;
        }
        best = Math.max(best, prev + 1 + cur);
    }
    return best;
};
// @lc code=end

// TEST:
console.log(reverseBits(1775) === 8); // 11011101111
console.log(reverseBits(7) === 4);
console.log(reverseBits(0) === 1);
console.log(reverseBits(-1) === 32); // 全 1，无需翻转
console.log(reverseBits(1) === 2);
console.log(reverseBits(-2) === 32); // 仅第 0 位为 0
