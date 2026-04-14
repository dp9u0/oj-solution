/*
 * @lc app=leetcode id=835 lang=javascript
 *
 * [835] Image Overlap
 */

// @lc code=start
/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
  const n = img1.length;
  const ones1 = [], ones2 = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (img1[i][j]) ones1.push([i, j]);
      if (img2[i][j]) ones2.push([i, j]);
    }
  }
  const count = new Map();
  let maxOverlap = 0;
  for (const [i1, j1] of ones1) {
    for (const [i2, j2] of ones2) {
      const key = `${i2 - i1},${j2 - j1}`;
      const c = (count.get(key) || 0) + 1;
      count.set(key, c);
      maxOverlap = Math.max(maxOverlap, c);
    }
  }
  return maxOverlap;
};
// @lc code=end

// TEST:
console.log(largestOverlap([[1,1,0],[0,1,0],[0,1,0]], [[0,0,0],[0,1,1],[0,0,1]])); // 3
console.log(largestOverlap([[1]], [[1]])); // 1
console.log(largestOverlap([[0]], [[0]])); // 0
