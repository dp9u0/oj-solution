/*
 * @lc app=leetcode id=858 lang=javascript
 *
 * [858] Mirror Reflection
 */

// @lc code=start
/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    let g = gcd(p, q);
    let m = p / g, n = q / g;
    if (m % 2 === 1 && n % 2 === 1) return 1;
    if (m % 2 === 1 && n % 2 === 0) return 0;
    return 2;
};

function gcd(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}
// @lc code=end

// TEST:
console.log(mirrorReflection(2, 1)); // 2
console.log(mirrorReflection(3, 1)); // 1
console.log(mirrorReflection(3, 2)); // 0
