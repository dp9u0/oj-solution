/*
 * @lc app=leetcode id=2001 lang=javascript
 *
 * [2001] Number of Pairs of Interchangeable Rectangles
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const count = new Map();

  for (const [w, h] of rectangles) {
    const g = gcd(w, h);
    const key = (w / g) * 100001 + (h / g);
    count.set(key, (count.get(key) || 0) + 1);
  }

  let result = 0;
  for (const cnt of count.values()) {
    result += cnt * (cnt - 1) / 2;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(interchangeableRectangles([[4,8],[3,6],[10,20],[15,30]])); // 6
console.log(interchangeableRectangles([[4,5],[7,8]])); // 0
console.log(interchangeableRectangles([[4,8],[3,6]])); // 1
