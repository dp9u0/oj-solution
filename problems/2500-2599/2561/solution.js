/*
 * @lc app=leetcode id=2561 lang=javascript
 *
 * [2561] Rearranging Fruits
 */

// @lc code=start
/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
  const cnt = new Map();
  let gm = Infinity;
  for (const v of basket1) { cnt.set(v, (cnt.get(v) || 0) + 1); gm = Math.min(gm, v); }
  for (const v of basket2) { cnt.set(v, (cnt.get(v) || 0) - 1); gm = Math.min(gm, v); }

  const arr = [];
  for (const [v, d] of cnt) {
    if (d % 2 !== 0) return -1;
    const excess = Math.abs(d) / 2;
    for (let i = 0; i < excess; i++) arr.push(v);
  }

  arr.sort((a, b) => a - b);
  const k = arr.length / 2;
  let cost = 0;
  for (let i = 0; i < k; i++) {
    cost += Math.min(arr[i], 2 * gm);
  }
  return cost;
};
// @lc code=end

// TEST:
console.log(minCost([4,2,2,2], [1,4,1,2])); // 1
console.log(minCost([2,3,4,1], [3,2,5,1])); // -1
console.log(minCost([1,1,1,1], [2,2,2,2])); // 2
console.log(minCost([1], [1])); // 0
console.log(minCost([100,1,100,1], [2,2,2,2])); // 3
