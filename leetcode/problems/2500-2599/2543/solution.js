/*
 * @lc app=leetcode id=2543 lang=javascript
 *
 * [2543] Check if Point Is Reachable
 */

// @lc code=start
/**
 * @param {number} targetX
 * @param {number} targetY
 * @return {boolean}
 */
var isReachable = function(targetX, targetY) {
    const g = gcd(targetX, targetY);
    return (g & (g - 1)) === 0;
};

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
// @lc code=end

// TEST:
console.log(isReachable(6, 9)); // false
console.log(isReachable(4, 7)); // true
console.log(isReachable(1, 1)); // true
console.log(isReachable(2, 2)); // true
console.log(isReachable(3, 6)); // false
console.log(isReachable(6, 4)); // true
