/*
 * @lc app=leetcode id=1886 lang=javascript
 *
 * [1886] Determine Whether Matrix Can Be Obtained By Rotation
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
  const n = mat.length;

  const isEqual = (a, b) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (a[i][j] !== b[i][j]) return false;
      }
    }
    return true;
  };

  const rotate = (m) => {
    const res = Array.from({ length: n }, () => Array(n));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        res[i][j] = m[n - 1 - j][i];
      }
    }
    return res;
  };

  let current = mat;
  for (let k = 0; k < 4; k++) {
    if (isEqual(current, target)) return true;
    current = rotate(current);
  }
  return false;
};
// @lc code=end

// TEST:
console.log(findRotation([[0,1],[1,0]], [[1,0],[0,1]])); // true
console.log(findRotation([[0,1],[1,1]], [[1,0],[0,1]])); // false
console.log(findRotation([[0,0,0],[0,1,0],[1,1,1]], [[1,1,1],[0,1,0],[0,0,0]])); // true
console.log(findRotation([[1]], [[1]])); // true
console.log(findRotation([[1]], [[0]])); // false
console.log(findRotation([[1,2],[3,4]], [[1,2],[3,4]])); // true (0 rotation)
