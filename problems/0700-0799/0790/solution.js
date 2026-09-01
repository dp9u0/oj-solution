/*
 * @lc app=leetcode id=790 lang=javascript
 *
 * [790] Domino and Tromino Tiling
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1e9 + 7;
    if (n === 1) return 1;
    let fullPrev2 = 1, fullPrev1 = 2;
    let halfPrev = 1;
    for (let i = 3; i <= n; i++) {
        const fullCurr = (fullPrev1 + fullPrev2 + 2 * halfPrev) % MOD;
        const halfCurr = (fullPrev2 + halfPrev) % MOD;
        fullPrev2 = fullPrev1;
        fullPrev1 = fullCurr;
        halfPrev = halfCurr;
    }
    return fullPrev1;
};
// @lc code=end

// TEST:
console.log(numTilings(3)); // 5
console.log(numTilings(1)); // 1
console.log(numTilings(4)); // 11
