/*
 * @lc app=leetcode id=1897 lang=javascript
 *
 * [1897] Redistribute Characters to Make All Strings Equal
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
  const count = new Array(26).fill(0);
  for (const word of words) {
    for (const ch of word) {
      count[ch.charCodeAt(0) - 97]++;
    }
  }
  const n = words.length;
  return count.every(c => c % n === 0);
};
// @lc code=end

// TEST:
console.log(makeEqual(["abc","aabc","bc"])); // true
console.log(makeEqual(["ab","a"])); // false
console.log(makeEqual(["a","b"])); // false
console.log(makeEqual(["a","a"])); // true
