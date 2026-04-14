/*
 * @lc app=leetcode id=473 lang=javascript
 *
 * [473] Matchsticks to Square
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
  const sum = matchsticks.reduce((a, b) => a + b, 0);
  if (sum % 4 !== 0) return false;
  const target = sum / 4;
  matchsticks.sort((a, b) => b - a);
  if (matchsticks[0] > target) return false;
  const sides = [0, 0, 0, 0];
  const dfs = (idx) => {
    if (idx === matchsticks.length) return true;
    for (let i = 0; i < 4; i++) {
      if (sides[i] + matchsticks[idx] > target) continue;
      // symmetry pruning: skip if same length already tried
      let skip = false;
      for (let j = 0; j < i; j++) {
        if (sides[j] === sides[i]) { skip = true; break; }
      }
      if (skip) continue;
      sides[i] += matchsticks[idx];
      if (dfs(idx + 1)) return true;
      sides[i] -= matchsticks[idx];
    }
    return false;
  };
  return dfs(0);
};
// @lc code=end

// TEST:
console.log(makesquare([1,1,2,2,2])); // true
console.log(makesquare([3,3,3,3,4])); // false
console.log(makesquare([5,5,5,5,4,4,4,4,3,3,3,3])); // true
