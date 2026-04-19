/*
 * @lc app=leetcode id=2525 lang=javascript
 *
 * [2525] Categorize Box According to Criteria
 */

// @lc code=start
/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    let bulky = length >= 10000 || width >= 10000 || height >= 10000 ||
                BigInt(length) * BigInt(width) * BigInt(height) >= 1000000000n;
    let heavy = mass >= 100;
    if (bulky && heavy) return 'Both';
    if (bulky) return 'Bulky';
    if (heavy) return 'Heavy';
    return 'Neither';
};
// @lc code=end

// TEST:
console.log(categorizeBox(1000, 35, 700, 300)); // Heavy
console.log(categorizeBox(200, 50, 800, 50)); // Neither
console.log(categorizeBox(10000, 10, 10, 5)); // Bulky
