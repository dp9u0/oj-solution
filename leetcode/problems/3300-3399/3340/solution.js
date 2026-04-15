/*
 * @lc app=leetcode id=3340 lang=javascript
 *
 * [3340] Check Balanced String
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let even = 0, odd = 0;
    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 0) even += +num[i];
        else odd += +num[i];
    }
    return even === odd;
};
// @lc code=end

// TEST:
console.log(isBalanced("1234")); // false
console.log(isBalanced("24123")); // true
