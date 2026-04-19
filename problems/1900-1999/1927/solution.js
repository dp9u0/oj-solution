/*
 * @lc app=leetcode id=1927 lang=javascript
 *
 * [1927] Sum Game
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    const n = num.length;
    let sum1 = 0, sum2 = 0, q1 = 0, q2 = 0;
    for (let i = 0; i < n / 2; i++) {
        if (num[i] === '?') q1++;
        else sum1 += +num[i];
    }
    for (let i = n / 2; i < n; i++) {
        if (num[i] === '?') q2++;
        else sum2 += +num[i];
    }
    if ((q1 + q2) % 2 === 1) return true;
    return (sum1 - sum2) !== 9 * (q2 - q1) / 2;
};
// @lc code=end

// TEST:
console.log(sumGame("5023")); // false
console.log(sumGame("25??")); // true
console.log(sumGame("?3295???")); // false
console.log(sumGame("??")); // false
