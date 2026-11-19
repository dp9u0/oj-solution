/*
 * @lc app=leetcode.cn id=1088 lang=javascript
 *
 * [1088] 易混淆数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var confusingNumberII = function(n) {
    const ROT = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 };
    const DIGITS = [0, 1, 6, 8, 9];

    const rotRev = (val) => { // rotate 180°: reverse digits with mapping
        let v = val, r = 0;
        while (v > 0) {
            r = r * 10 + ROT[v % 10];
            v = (v / 10) | 0;
        }
        return r; // leading zeros of the rotation drop out naturally
    };

    let count = 0;
    const dfs = (val) => {
        if (val > 0 && val !== rotRev(val)) count++;
        for (const d of DIGITS) {
            const next = val * 10 + d;
            if (next === 0 || next > n) continue; // skip leading-zero root; appending only grows
            dfs(next);
        }
    };
    dfs(0);
    return count;
};
// @lc code=end

// TEST:
console.log(confusingNumberII(20)); // 6
console.log(confusingNumberII(100)); // 19
console.log(confusingNumberII(1)); // 0
console.log(confusingNumberII(10)); // 3 (6,9,10)
console.log(confusingNumberII(99)); // 18 (24 candidates - 6 strobogrammatic: 1,8,11,69,88,96)
