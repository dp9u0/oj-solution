/*
 * @lc app=leetcode id=1593 lang=javascript
 *
 * [1593] Split a String Into the Max Number of Unique Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  let result = 0;
  const seen = new Set();

  const dfs = (start) => {
    if (start === s.length) {
      result = Math.max(result, seen.size);
      return;
    }
    for (let end = start + 1; end <= s.length; end++) {
      const sub = s.substring(start, end);
      if (seen.has(sub)) continue;
      seen.add(sub);
      dfs(end);
      seen.delete(sub);
    }
  };

  dfs(0);
  return result;
};
// @lc code=end

// TEST:
console.log(maxUniqueSplit('ababccc')); // 5
console.log(maxUniqueSplit('aba')); // 2
console.log(maxUniqueSplit('aa')); // 1
console.log(maxUniqueSplit('a')); // 1
console.log(maxUniqueSplit('abcdef')); // 6
