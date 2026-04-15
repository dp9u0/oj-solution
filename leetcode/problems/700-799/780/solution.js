/*
 * @lc app=leetcode id=780 lang=javascript
 *
 * [780] Reaching Points
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    while (tx > sx && ty > sy) {
        if (tx > ty) tx %= ty;
        else ty %= tx;
    }
    if (tx === sx && ty === sy) return true;
    if (tx === sx) return ty > sy && (ty - sy) % tx === 0;
    if (ty === sy) return tx > sx && (tx - sx) % ty === 0;
    return false;
};
// @lc code=end

// TEST:
console.log(reachingPoints(1, 1, 3, 5)); // true
console.log(reachingPoints(1, 1, 2, 2)); // false
console.log(reachingPoints(1, 1, 1, 1)); // true
