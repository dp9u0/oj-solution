/*
 * @lc app=leetcode.cn id=266 lang=javascript
 *
 * [266] 回文排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const odd = new Set();
    for (const c of s) {
        if (odd.has(c)) odd.delete(c);
        else odd.add(c);
    }
    return odd.size <= 1;
};
// @lc code=end

// TEST:
console.log(canPermutePalindrome("code")); // false
console.log(canPermutePalindrome("aab")); // true
console.log(canPermutePalindrome("carerac")); // true
console.log(canPermutePalindrome("a")); // true
console.log(canPermutePalindrome("ab")); // false
console.log(canPermutePalindrome("")); // true
