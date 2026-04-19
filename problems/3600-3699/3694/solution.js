/*
 * @lc app=leetcode id=3694 lang=javascript
 *
 * [3694] Distinct Points Reachable After Substring Removal
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var distinctPoints = function(s, k) {
  const n = s.length;

  // Prefix positions: pref[i] = position after first i moves
  const px = new Int32Array(n + 1);
  const py = new Int32Array(n + 1);
  for (let i = 0; i < n; i++) {
    px[i + 1] = px[i];
    py[i + 1] = py[i];
    if (s[i] === 'U') py[i + 1]++;
    else if (s[i] === 'D') py[i + 1]--;
    else if (s[i] === 'L') px[i + 1]--;
    else px[i + 1]++;
  }

  // Suffix positions: suff[i] = position after moves from i to end
  const sx = new Int32Array(n + 1);
  const sy = new Int32Array(n + 1);
  for (let i = n - 1; i >= 0; i--) {
    sx[i] = sx[i + 1];
    sy[i] = sy[i + 1];
    if (s[i] === 'U') sy[i]++;
    else if (s[i] === 'D') sy[i]--;
    else if (s[i] === 'L') sx[i]--;
    else sx[i]++;
  }

  // Count distinct final positions
  const seen = new Set();
  for (let i = 0; i <= n - k; i++) {
    seen.add((px[i] + sx[i + k]) * 200001 + (py[i] + sy[i + k]));
  }

  return seen.size;
};
// @lc code=end

// TEST:
console.log(distinctPoints('LUL', 1)); // 2
console.log(distinctPoints('UDLR', 4)); // 1
console.log(distinctPoints('UU', 1)); // 1
console.log(distinctPoints('U', 1)); // 1
console.log(distinctPoints('UD', 1)); // 2
