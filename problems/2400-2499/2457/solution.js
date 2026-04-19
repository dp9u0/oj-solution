/*
 * @lc app=leetcode id=2457 lang=javascript
 *
 * [2457] Minimum Addition to Make Integer Beautiful
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function(n, target) {
    let digitSum = (x) => {
        let s = 0;
        while (x > 0) { s += x % 10; x = Math.floor(x / 10); }
        return s;
    };

    let original = n;
    let base = 1;
    while (digitSum(n) > target) {
        base *= 10;
        n = Math.floor(n / base) * base + base;
    }
    return n - original;
};
// @lc code=end

// TEST:
console.log(makeIntegerBeautiful(16, 6));
console.log(makeIntegerBeautiful(467, 6));
console.log(makeIntegerBeautiful(1, 1));
