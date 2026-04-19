/*
 * @lc app=leetcode id=3133 lang=javascript
 *
 * [3133] Minimum Array End
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    let res = BigInt(x);
    let m = BigInt(n - 1);
    let pos = 0n;
    while (m > 0n) {
        while ((res >> pos) & 1n) pos++;
        if (m & 1n) res |= 1n << pos;
        m >>= 1n;
        pos++;
    }
    return Number(res);
};
// @lc code=end

// TEST:
console.log(minEnd(3, 4)); // 6
console.log(minEnd(2, 7)); // 15
console.log(minEnd(1, 1)); // 1
console.log(minEnd(4, 1)); // 7
console.log(minEnd(3, 1)); // 5
