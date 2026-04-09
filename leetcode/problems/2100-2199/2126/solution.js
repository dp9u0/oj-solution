/*
 * @lc app=leetcode id=2126 lang=javascript
 *
 * [2126] Destroying Asteroids
 */

// @lc code=start
/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);
    let m = mass;
    for (const a of asteroids) {
        if (m < a) return false;
        m += a;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(asteroidsDestroyed(10, [3,9,19,5,21])); // true
console.log(asteroidsDestroyed(5, [4,9,23,4])); // false
console.log(asteroidsDestroyed(1, [1])); // true
