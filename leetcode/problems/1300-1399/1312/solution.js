/*
 * @lc app=leetcode id=1312 lang=javascript
 *
 * [1312] Minimum Insertion Steps to Make a String Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  const n = s.length;
  const rev = s.split('').reverse().join('');

  // LCS between s and rev using rolling array
  let prev = new Array(n + 1).fill(0);
  let curr = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === rev[j - 1]) {
        curr[j] = prev[j - 1] + 1;
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    [prev, curr] = [curr, prev];
    curr.fill(0);
  }

  return n - prev[n];
};
// @lc code=end

// TEST:
console.log(minInsertions('zzazz')); // 0
console.log(minInsertions('mbadm')); // 2
console.log(minInsertions('leetcode')); // 5
