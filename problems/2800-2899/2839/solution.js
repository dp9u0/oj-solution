/*
 * @lc app=leetcode id=2839 lang=javascript
 *
 * [2839] Check if Strings Can be Made Equal With Operations I
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
  const sortPair = (a, b) => [a, b].sort().join('');
  return sortPair(s1[0], s1[2]) === sortPair(s2[0], s2[2])
      && sortPair(s1[1], s1[3]) === sortPair(s2[1], s2[3]);
};
// @lc code=end

// TEST:
console.log(canBeEqual('abcd', 'cdab')); // true
console.log(canBeEqual('abcd', 'dacb')); // false
console.log(canBeEqual('abab', 'baba')); // true
console.log(canBeEqual('aaaa', 'aaaa')); // true
console.log(canBeEqual('abxy', 'xyab')); // true
