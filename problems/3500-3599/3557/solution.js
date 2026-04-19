/*
 * @lc app=leetcode id=3557 lang=javascript
 *
 * [3557] Find Maximum Number of Non Intersecting Substrings
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var maxSubstrings = function(word) {
  const n = word.length;
  let count = 0;
  const first = new Array(26).fill(-1);

  for (let i = 0; i < n; i++) {
    const c = word.charCodeAt(i) - 97;
    if (first[c] === -1) {
      first[c] = i;
    } else if (i - first[c] + 1 >= 4) {
      count++;
      first.fill(-1);
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(maxSubstrings("abcdeafdef")); // 2
console.log(maxSubstrings("bcdaaaab")); // 1
console.log(maxSubstrings("aaaa")); // 1
console.log(maxSubstrings("abc")); // 0
console.log(maxSubstrings("abcaabc")); // 2
