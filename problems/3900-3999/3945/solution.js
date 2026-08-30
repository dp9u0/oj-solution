/*
 * @lc app=leetcode id=3945 lang=javascript
 *
 * [3945] Digit Frequency Score
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    // d * freq(d) summed over distinct d equals the digit sum of n
    let score = 0;
    while (n > 0) {
        score += n % 10;
        n = Math.floor(n / 10);
    }
    return score;
};
// @lc code=end

// TEST:
console.log(digitFrequencyScore(122), '=== 5');
console.log(digitFrequencyScore(101), '=== 2');
console.log(digitFrequencyScore(1), '=== 1');
console.log(digitFrequencyScore(9), '=== 9');
console.log(digitFrequencyScore(123456789), '=== 45');
console.log(digitFrequencyScore(999999999), '=== 81');
console.log(digitFrequencyScore(1000000000), '=== 1');
