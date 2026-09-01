/*
 * @lc app=leetcode id=397 lang=javascript
 *
 * [397] Integer Replacement
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let count = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else if (n === 3 || n % 4 === 1) {
            n--;
        } else {
            n++;
        }
        count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(integerReplacement(8)); // 3
console.log(integerReplacement(7)); // 4
console.log(integerReplacement(4)); // 2
console.log(integerReplacement(3)); // 2
console.log(integerReplacement(15)); // 5
