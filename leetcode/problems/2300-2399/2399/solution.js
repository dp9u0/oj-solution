/*
 * @lc app=leetcode id=2399 lang=javascript
 *
 * [2399] Check Distances Between Same Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
  const first = new Int8Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - 97;
    if (first[idx] === -1) {
      first[idx] = i;
    } else {
      if (i - first[idx] - 1 !== distance[idx]) return false;
    }
  }
  return true;
};
// @lc code=end

// TEST:
console.log(checkDistances('abaccb', [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // true
console.log(checkDistances('aa', [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // false
console.log(checkDistances('ab', [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // true
console.log(checkDistances('abcabc', [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // true
console.log(checkDistances('abcabc', [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // false
