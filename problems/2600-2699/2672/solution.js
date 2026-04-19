/*
 * @lc app=leetcode id=2672 lang=javascript
 *
 * [2672] Number of Adjacent Elements With the Same Color
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
  const colors = new Int32Array(n);
  let cnt = 0;
  const res = [];

  for (const [idx, c] of queries) {
    const old = colors[idx];
    // Remove old contributions
    if (old !== 0) {
      if (idx > 0 && colors[idx - 1] === old) cnt--;
      if (idx < n - 1 && colors[idx + 1] === old) cnt--;
    }
    colors[idx] = c;
    // Add new contributions
    if (c !== 0) {
      if (idx > 0 && colors[idx - 1] === c) cnt++;
      if (idx < n - 1 && colors[idx + 1] === c) cnt++;
    }
    res.push(cnt);
  }

  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(colorTheArray(4, [[0,2],[1,2],[3,1],[1,1],[2,1]]))); // [0,1,1,0,2]
console.log(JSON.stringify(colorTheArray(1, [[0,100000]]))); // [0]
console.log(JSON.stringify(colorTheArray(3, [[0,1],[1,1],[2,1]]))); // [0,1,2]
console.log(JSON.stringify(colorTheArray(3, [[0,1],[0,1]]))); // [0,0]
console.log(JSON.stringify(colorTheArray(5, [[0,1],[1,1],[2,2],[3,2],[4,1]]))); // [0,1,1,2,1]
