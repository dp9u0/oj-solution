/*
 * @lc app=leetcode id=3295 lang=javascript
 *
 * [3295] Report Spam Message
 */

// @lc code=start
/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
  const banned = new Set(bannedWords);
  let count = 0;
  for (const word of message) {
    if (banned.has(word)) {
      count++;
      if (count >= 2) return true;
    }
  }
  return false;
};
// @lc code=end

// TEST:
console.log(reportSpam(['hello', 'world', 'leetcode'], ['world', 'hello'])); // true
console.log(reportSpam(['hello', 'programming', 'fun'], ['world', 'programming', 'leetcode'])); // false
console.log(reportSpam(['a', 'a'], ['a'])); // true
console.log(reportSpam(['a'], ['a'])); // false
console.log(reportSpam(['a', 'b'], ['a', 'b'])); // true
