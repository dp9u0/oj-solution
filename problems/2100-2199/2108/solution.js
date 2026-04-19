/*
 * @lc app=leetcode id=2108 lang=javascript
 *
 * [2108] Find First Palindromic String in the Array
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (const w of words) {
        if (w === w.split('').reverse().join('')) return w;
    }
    return '';
};
// @lc code=end

// TEST:
console.log(firstPalindrome(["abc","car","ada","racecar","cool"])); // "ada"
console.log(firstPalindrome(["notapalindrome","racecar"])); // "racecar"
console.log(firstPalindrome(["def","ghi"])); // ""
