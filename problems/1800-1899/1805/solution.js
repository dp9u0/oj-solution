/*
 * @lc app=leetcode id=1805 lang=javascript
 *
 * [1805] Number of Different Integers in a String
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  const set = new Set();
  let i = 0, n = word.length;
  while (i < n) {
    if (word[i] >= '0' && word[i] <= '9') {
      while (i < n && word[i] === '0') i++;
      let start = i;
      while (i < n && word[i] >= '0' && word[i] <= '9') i++;
      set.add(word.slice(start, i) || '0');
    } else {
      i++;
    }
  }
  return set.size;
};
// @lc code=end

// TEST:
console.log(numDifferentIntegers("a123bc34d8ef34")); // 3
console.log(numDifferentIntegers("leet1234code234")); // 2
console.log(numDifferentIntegers("a1b01c001")); // 1
console.log(numDifferentIntegers("0a0")); // 1
console.log(numDifferentIntegers("abc")); // 0
