/*
 * @lc app=leetcode id=1079 lang=javascript
 *
 * [1079] Letter Tile Possibilities
 */

// @lc code=start
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  const count = new Array(26).fill(0);
  for (const ch of tiles) count[ch.charCodeAt(0) - 65]++;

  const backtrack = () => {
    let total = 0;
    for (let i = 0; i < 26; i++) {
      if (count[i] === 0) continue;
      count[i]--;
      total += 1 + backtrack();
      count[i]++;
    }
    return total;
  };

  return backtrack();
};
// @lc code=end

// TEST:
console.log(numTilePossibilities("AAB")); // 8
console.log(numTilePossibilities("AAABBC")); // 188
console.log(numTilePossibilities("V")); // 1
