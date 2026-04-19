/*
 * @lc app=leetcode id=3160 lang=javascript
 *
 * [3160] Find the Number of Distinct Colors Among the Balls
 */

// @lc code=start
/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
  const ballColor = new Map();
  const colorCount = new Map();
  const result = [];
  let distinct = 0;

  for (const [ball, color] of queries) {
    if (ballColor.has(ball)) {
      const oldColor = ballColor.get(ball);
      const oldCount = colorCount.get(oldColor) - 1;
      if (oldCount === 0) {
        colorCount.delete(oldColor);
        distinct--;
      } else {
        colorCount.set(oldColor, oldCount);
      }
    }

    ballColor.set(ball, color);
    const newCount = (colorCount.get(color) || 0) + 1;
    if (newCount === 1) distinct++;
    colorCount.set(color, newCount);

    result.push(distinct);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(queryResults(4, [[1,4],[2,5],[1,3],[3,4]]))); // [1,2,2,3]
console.log(JSON.stringify(queryResults(4, [[0,1],[1,2],[2,2],[3,4],[4,5]]))); // [1,2,2,3,4]
