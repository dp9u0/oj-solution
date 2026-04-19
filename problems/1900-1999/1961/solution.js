/*
 * @lc app=leetcode id=1961 lang=javascript
 *
 * [1961] Check If String Is a Prefix of Array
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
  let concat = '';
  for (const w of words) {
    concat += w;
    if (concat === s) return true;
    if (concat.length > s.length) return false;
  }
  return false;
};
// @lc code=end

// TEST:
console.log(isPrefixString("iloveleetcode", ["i","love","leetcode","apples"])); // true
console.log(isPrefixString("iloveleetcode", ["apples","i","love","leetcode"])); // false
console.log(isPrefixString("a", ["aa","aaaa","banana"])); // false
console.log(isPrefixString("aaaaaaa", ["a","a","a","a","a","a","a"])); // true
console.log(isPrefixString("abc", ["ab","c"])); // true
