/*
 * @lc app=leetcode id=1405 lang=javascript
 *
 * [1405] Longest Happy String
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
  const counts = [['a', a], ['b', b], ['c', c]];
  let result = '';

  while (true) {
    counts.sort((x, y) => y[1] - x[1]);

    const len = result.length;
    let chosen = -1;

    // If last two chars are same, must pick a different one
    if (len >= 2 && result[len - 1] === result[len - 2]) {
      for (let i = 0; i < 3; i++) {
        if (counts[i][1] > 0 && counts[i][0] !== result[len - 1]) {
          chosen = i;
          break;
        }
      }
    } else {
      // Pick the one with most remaining
      for (let i = 0; i < 3; i++) {
        if (counts[i][1] > 0) {
          chosen = i;
          break;
        }
      }
    }

    if (chosen === -1) break;

    result += counts[chosen][0];
    counts[chosen][1]--;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(longestDiverseString(1, 1, 7)); // e.g. 'ccaccbcc'
console.log(longestDiverseString(7, 1, 0)); // 'aabaa'
