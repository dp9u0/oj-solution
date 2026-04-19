/*
 * @lc app=leetcode id=1310 lang=javascript
 *
 * [1310] XOR Queries of a Subarray
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  const n = arr.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] ^ arr[i];
  }

  return queries.map(([l, r]) => prefix[r + 1] ^ prefix[l]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(xorQueries([1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]]))); // [2,7,14,8]
console.log(JSON.stringify(xorQueries([4, 8, 2, 10], [[2, 3], [1, 3], [0, 0], [0, 3]]))); // [8,0,4,4]
