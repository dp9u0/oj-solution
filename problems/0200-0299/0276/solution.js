/*
 * @lc app=leetcode.cn id=276 lang=javascript
 *
 * [276] 栅栏涂色
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if (n === 0) return 0;
    if (n === 1) return k;

    // same: posts i-1 and i painted the same color (max 2 in a row allowed)
    // diff: post i painted differently from post i-1
    let same = 0, diff = k;
    for (let i = 2; i <= n; i++) {
        const newSame = diff;
        const newDiff = (same + diff) * (k - 1);
        same = newSame;
        diff = newDiff;
    }
    return same + diff;
};
// @lc code=end

// TEST:
console.log(numWays(3, 2)); // 6
console.log(numWays(1, 1)); // 1
console.log(numWays(2, 3)); // 9
console.log(numWays(7, 2)); // 42
console.log(numWays(2, 1)); // 1
console.log(numWays(3, 1)); // 0
