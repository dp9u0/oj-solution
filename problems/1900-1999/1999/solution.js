/*
 * @lc app=leetcode.cn id=1999 lang=javascript
 *
 * [1999] 最小的仅由两个数组成的倍数
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} digit1
 * @param {number} digit2
 * @return {number}
 */
var findInteger = function(k, digit1, digit2) {
    const CAP = 2147483647;
    const digits = digit1 === digit2 ? [digit1] : [Math.min(digit1, digit2), Math.max(digit1, digit2)];
    let best = -1;
    let level = digits.filter(d => d !== 0);
    for (let len = 1; len <= 10 && level.length; len++) {
        const next = [];
        for (const v of level) {
            if (v > k && v % k === 0 && (best === -1 || v < best)) best = v;
            for (const d of digits) {
                const nv = v * 10 + d;
                if (nv <= CAP) next.push(nv);
            }
        }
        level = next;
    }
    return best;
};
// @lc code=end

// TEST:
console.log(findInteger(2, 0, 2)); // 20
console.log(findInteger(3, 4, 2)); // 24
console.log(findInteger(2, 0, 0)); // -1
console.log(findInteger(1, 0, 1)); // 10
console.log(findInteger(1000, 1, 1)); // -1 (repunit mod 1000 == 111 always)
