/*
 * @lc app=leetcode id=2059 lang=javascript
 *
 * [2059] Minimum Operations to Convert Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minimumOperations = function(nums, start, goal) {
  const visited = new Array(1001).fill(false);
  const q = [start];
  visited[start] = true;
  let ops = 0;
  while (q.length) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const x = q.shift();
      for (const num of nums) {
        for (const next of [x + num, x - num, x ^ num]) {
          if (next === goal) return ops + 1;
          if (next >= 0 && next <= 1000 && !visited[next]) {
            visited[next] = true;
            q.push(next);
          }
        }
      }
    }
    ops++;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(minimumOperations([2,4,12], 2, 12)); // 2
console.log(minimumOperations([3,5,7], 0, -4)); // 2
console.log(minimumOperations([2,8,16], 0, 1)); // -1
