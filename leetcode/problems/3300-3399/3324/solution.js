/*
 * @lc app=leetcode id=3324 lang=javascript
 *
 * [3324] Find the Sequence of Strings Appeared on the Screen
 */

// @lc code=start
/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
  const result = [];
  let prefix = '';
  for (let i = 0; i < target.length; i++) {
    prefix += 'a';
    result.push(prefix);
    for (let c = 'b'.charCodeAt(0); c <= target.charCodeAt(i); c++) {
      prefix = prefix.slice(0, -1) + String.fromCharCode(c);
      result.push(prefix);
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(stringSequence('abc'))); // ["a","aa","ab","aba","abb","abc"]
console.log(JSON.stringify(stringSequence('he'))); // ["a","b","c","d","e","f","g","h","ha","hb","hc","hd","he"]
console.log(JSON.stringify(stringSequence('a'))); // ["a"]
console.log(JSON.stringify(stringSequence('z'))); // ["a","b",...,"z"]
console.log(JSON.stringify(stringSequence('ab'))); // ["a","aa","ab"]
