/*
 * @lc app=leetcode id=1328 lang=javascript
 *
 * [1328] Break a Palindrome
 */

// @lc code=start
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const n = palindrome.length;
    if (n <= 1) return '';
    const chars = palindrome.split('');
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (chars[i] !== 'a') {
            chars[i] = 'a';
            return chars.join('');
        }
    }
    chars[n - 1] = 'b';
    return chars.join('');
};
// @lc code=end

// TEST:
console.log(breakPalindrome('abccba')); // 'aaccba'
console.log(breakPalindrome('a'));      // ''
console.log(breakPalindrome('aa'));     // 'ab'
console.log(breakPalindrome('aba'));    // 'abb'
