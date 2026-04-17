/*
 * @lc app=leetcode id=3206 lang=javascript
 *
 * [3206] Alternating Groups I
 */

// @lc code=start
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
  const n = colors.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    const left = colors[(i - 1 + n) % n];
    const right = colors[(i + 1) % n];
    if (colors[i] !== left && colors[i] !== right) count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(numberOfAlternatingGroups([1, 1, 1])); // 0
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1])); // 3
console.log(numberOfAlternatingGroups([0, 1, 0])); // 1
console.log(numberOfAlternatingGroups([0, 0, 1, 0, 1])); // 3
console.log(numberOfAlternatingGroups([1, 0, 1, 0, 1, 0])); // 6
