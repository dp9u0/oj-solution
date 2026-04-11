/*
 * @lc app=leetcode id=1319 lang=javascript
 *
 * [1319] Number of Operations to Make Network Connected
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) return -1;

  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);

  const find = (x) => {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  };

  const union = (a, b) => {
    const ra = find(a), rb = find(b);
    if (ra === rb) return false;
    if (rank[ra] < rank[rb]) {
      parent[ra] = rb;
    } else if (rank[ra] > rank[rb]) {
      parent[rb] = ra;
    } else {
      parent[rb] = ra;
      rank[ra]++;
    }
    return true;
  };

  let components = n;
  for (const [a, b] of connections) {
    if (union(a, b)) components--;
  }

  return components - 1;
};
// @lc code=end

// TEST:
console.log(makeConnected(4, [[0,1],[0,2],[1,2]])); // 1
console.log(makeConnected(6, [[0,1],[0,2],[0,3],[1,2],[1,3]])); // 2
console.log(makeConnected(6, [[0,1],[0,2],[0,3],[1,2]])); // -1
