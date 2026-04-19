/*
 * @lc app=leetcode id=2998 lang=javascript
 *
 * [2998] Minimum Number of Operations to Make X and Y Equal
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minimumOperationsToMakeEqual = function(x, y) {
  if (x === y) return 0;
  const visited = new Set();
  const q = [x];
  visited.add(x);
  const limit = Math.max(x, y) + 11;
  let ops = 0;
  while (q.length) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const cur = q.shift();
      if (cur === y) return ops;
      const next = [];
      if (cur % 11 === 0) next.push(cur / 11);
      if (cur % 5 === 0) next.push(cur / 5);
      if (cur - 1 >= 1) next.push(cur - 1);
      if (cur + 1 <= limit) next.push(cur + 1);
      for (const n of next) {
        if (!visited.has(n)) {
          visited.add(n);
          q.push(n);
        }
      }
    }
    ops++;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(minimumOperationsToMakeEqual(26, 1)); // 3
console.log(minimumOperationsToMakeEqual(54, 2)); // 4
console.log(minimumOperationsToMakeEqual(25, 30)); // 5
