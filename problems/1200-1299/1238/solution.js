/*
 * @lc app=leetcode id=1238 lang=javascript
 *
 * [1238] Circular Permutation in Binary Representation
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
  const size = 1 << n;
  const gray = new Array(size);

  for (let i = 0; i < size; i++) {
    gray[i] = i ^ (i >> 1);
  }

  let startIdx = 0;
  for (let i = 0; i < size; i++) {
    if (gray[i] === start) {
      startIdx = i;
      break;
    }
  }

  const result = new Array(size);
  for (let i = 0; i < size; i++) {
    result[i] = gray[(startIdx + i) % size];
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(circularPermutation(2, 3))); // [3,2,0,1]
console.log(JSON.stringify(circularPermutation(3, 2))); // [2,6,7,5,4,0,1,3]
