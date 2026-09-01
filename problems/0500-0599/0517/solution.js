/*
 * @lc app=leetcode id=517 lang=javascript
 *
 * [517] Super Washing Machines
 */

// @lc code=start
/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
  const n = machines.length;
  const total = machines.reduce((a, b) => a + b, 0);
  if (total % n !== 0) return -1;
  const avg = total / n;

  let result = 0;
  let prefixSum = 0;

  for (let i = 0; i < n; i++) {
    const diff = machines[i] - avg;
    prefixSum += diff;
    result = Math.max(result, Math.abs(prefixSum), diff);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(findMinMoves([1,0,5])); // 3
console.log(findMinMoves([0,3,0])); // 2
console.log(findMinMoves([0,2,0])); // -1
console.log(findMinMoves([4,0,0,4])); // 2
