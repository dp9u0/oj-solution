/*
 * @lc app=leetcode id=3528 lang=javascript
 *
 * [3528] Unit Conversion I
 */

// @lc code=start
/**
 * @param {number[][]} conversions
 * @return {number[]}
 */
var baseUnitConversions = function(conversions) {
  const MOD = 1e9 + 7;
  const n = conversions.length + 1;
  const adj = Array.from({ length: n }, () => []);
  for (const [s, t, f] of conversions) {
    adj[s].push([t, f]);
  }
  const res = new Array(n).fill(0);
  res[0] = 1;
  const queue = [0];
  for (let i = 0; i < queue.length; i++) {
    const u = queue[i];
    for (const [v, f] of adj[u]) {
      res[v] = Number(BigInt(res[u]) * BigInt(f) % BigInt(MOD));
      queue.push(v);
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(baseUnitConversions([[0,1,2],[1,2,3]]))); // [1,2,6]
console.log(JSON.stringify(baseUnitConversions([[0,1,2],[0,2,3],[1,3,4],[1,4,5],[2,5,2],[4,6,3],[5,7,4]]))); // [1,2,3,8,10,6,30,24]
console.log(JSON.stringify(baseUnitConversions([[0,1,1]]))); // [1,1]
console.log(JSON.stringify(baseUnitConversions([[0,1,1000000000]]))); // [1,1000000000]
