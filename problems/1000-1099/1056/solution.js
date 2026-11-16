/*
 * @lc app=leetcode.cn id=1056 lang=javascript
 *
 * [1056] 易混淆数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    const map = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 };
    let rotated = 0, rest = n;
    while (rest > 0) {
        const d = rest % 10;
        if (!(d in map)) return false;
        // building LSB-first yields the 180°-rotated number
        rotated = rotated * 10 + map[d];
        rest = Math.floor(rest / 10);
    }
    return rotated !== n;
};
// @lc code=end

// TEST:
console.log(confusingNumber(6)); // true (9)
console.log(confusingNumber(89)); // true (68)
console.log(confusingNumber(11)); // false (rotates to itself)
console.log(confusingNumber(25)); // false (2 and 5 invalid)
console.log(confusingNumber(0)); // false (rotates to itself)
console.log(confusingNumber(19)); // true (61)
