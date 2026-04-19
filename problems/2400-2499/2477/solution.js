/*
 * @lc app=leetcode id=2477 lang=javascript
 *
 * [2477] Minimum Fuel Cost to Report to the Capital
 */

// @lc code=start
/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
  const n = roads.length + 1;
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of roads) {
    adj[a].push(b);
    adj[b].push(a);
  }
  let fuel = 0;
  const dfs = (node, parent) => {
    let people = 1;
    for (const child of adj[node]) {
      if (child === parent) continue;
      people += dfs(child, node);
    }
    if (node !== 0) {
      fuel += Math.ceil(people / seats);
    }
    return people;
  };
  dfs(0, -1);
  return fuel;
};
// @lc code=end

// TEST:
console.log(minimumFuelCost([[0,1],[0,2],[0,3]], 5)); // 3
console.log(minimumFuelCost([[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], 2)); // 7
console.log(minimumFuelCost([], 1)); // 0
