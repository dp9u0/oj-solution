/*
 * @lc app=leetcode id=1974 lang=javascript
 *
 * [1974] Minimum Time to Type Word Using Special Typewriter
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
  let time = 0, curr = 0;
  for (const c of word) {
    const target = c.charCodeAt(0) - 97;
    const diff = Math.abs(target - curr);
    time += Math.min(diff, 26 - diff) + 1;
    curr = target;
  }
  return time;
};
// @lc code=end

// TEST:
console.log(minTimeToType('abc')); // 5
console.log(minTimeToType('bza')); // 7
console.log(minTimeToType('zjpc')); // 34
