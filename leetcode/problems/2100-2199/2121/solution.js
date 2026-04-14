/*
 * @lc app=leetcode id=2121 lang=javascript
 *
 * [2121] Intervals Between Identical Elements
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function(arr) {
  const n = arr.length;
  const groups = new Map();
  for (let i = 0; i < n; i++) {
    if (!groups.has(arr[i])) groups.set(arr[i], []);
    groups.get(arr[i]).push(i);
  }
  const result = new Array(n).fill(0);
  for (const indices of groups.values()) {
    const m = indices.length;
    const prefix = new Array(m);
    prefix[0] = indices[0];
    for (let i = 1; i < m; i++) {
      prefix[i] = prefix[i - 1] + indices[i];
    }
    for (let i = 0; i < m; i++) {
      const leftSum = i > 0 ? prefix[i - 1] : 0;
      const rightSum = prefix[m - 1] - prefix[i];
      const left = indices[i] * i - leftSum;
      const right = rightSum - indices[i] * (m - 1 - i);
      result[indices[i]] = left + right;
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getDistances([2,1,3,1,2,3,3]))); // [4,2,7,2,4,4,5]
console.log(JSON.stringify(getDistances([10,5,10,10]))); // [5,0,3,4]
