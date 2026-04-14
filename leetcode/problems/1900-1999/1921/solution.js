/*
 * @lc app=leetcode id=1921 lang=javascript
 *
 * [1921] Eliminate Maximum Number of Monsters
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
  const n = dist.length;
  const arrival = new Array(n);
  for (let i = 0; i < n; i++) {
    arrival[i] = Math.ceil(dist[i] / speed[i]);
  }

  arrival.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (arrival[i] <= i) return i;
  }

  return n;
};
// @lc code=end

// TEST:
console.log(eliminateMaximum([1, 3, 4], [1, 1, 1])); // 3
console.log(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1])); // 1
console.log(eliminateMaximum([3, 2, 4], [5, 3, 2])); // 1
