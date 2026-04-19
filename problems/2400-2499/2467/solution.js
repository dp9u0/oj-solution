/*
 * @lc app=leetcode id=2467 lang=javascript
 *
 * [2467] Most Profitable Path in a Tree
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
  const n = amount.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  // Find parent of each node (BFS from root 0)
  const parent = new Array(n).fill(-1);
  parent[0] = 0;
  const queue = [0];
  let head = 0;
  while (head < queue.length) {
    const u = queue[head++];
    for (const v of adj[u]) {
      if (parent[v] === -1) {
        parent[v] = u;
        queue.push(v);
      }
    }
  }

  // Record Bob's arrival time at each node on his path
  const bobTime = new Array(n).fill(Infinity);
  let t = 0, cur = bob;
  while (true) {
    bobTime[cur] = t;
    if (cur === 0) break;
    cur = parent[cur];
    t++;
  }

  // DFS for Alice: maximize income to any leaf
  let result = -Infinity;

  const dfs = (node, aliceTime, income, par) => {
    let gain;
    if (aliceTime < bobTime[node]) gain = amount[node];
    else if (aliceTime === bobTime[node]) gain = amount[node] / 2;
    else gain = 0;

    const newIncome = income + gain;
    let isLeaf = true;

    for (const v of adj[node]) {
      if (v !== par) {
        isLeaf = false;
        dfs(v, aliceTime + 1, newIncome, node);
      }
    }

    if (isLeaf) {
      result = Math.max(result, newIncome);
    }
  };

  dfs(0, 0, 0, -1);
  return result;
};
// @lc code=end

// TEST:
console.log(mostProfitablePath([[0,1],[1,2],[1,3],[3,4]], 3, [-2,4,2,-4,6])); // 6
console.log(mostProfitablePath([[0,1]], 1, [-7280,2350])); // -7280
