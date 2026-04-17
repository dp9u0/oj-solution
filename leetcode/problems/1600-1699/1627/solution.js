/*
 * @lc app=leetcode id=1627 lang=javascript
 *
 * [1627] Graph Connectivity With Threshold
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var areConnected = function(n, threshold, queries) {
  if (threshold === 0) return queries.map(() => true);

  const parent = new Int32Array(n + 1);
  const rnk = new Uint8Array(n + 1);
  for (let i = 1; i <= n; i++) parent[i] = i;

  function find(x) {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  }

  function union(a, b) {
    a = find(a); b = find(b);
    if (a === b) return;
    if (rnk[a] < rnk[b]) { const t = a; a = b; b = t; }
    parent[b] = a;
    if (rnk[a] === rnk[b]) rnk[a]++;
  }

  for (let z = threshold + 1; z <= n; z++) {
    for (let m = z * 2; m <= n; m += z) {
      union(z, m);
    }
  }

  return queries.map(([a, b]) => find(a) === find(b));
};
// @lc code=end

// TEST:
console.log(JSON.stringify(areConnected(6, 2, [[1,4],[2,5],[3,6]]))); // [false,false,true]
console.log(JSON.stringify(areConnected(6, 0, [[4,5],[3,4],[3,2],[2,6],[1,3]]))); // [true,true,true,true,true]
console.log(JSON.stringify(areConnected(5, 1, [[4,5],[4,5],[3,2],[2,3],[3,4]]))); // [false,false,false,false,false]
console.log(JSON.stringify(areConnected(3, 1, [[1,2],[2,3]]))); // [false,false]
console.log(JSON.stringify(areConnected(10, 3, [[4,8],[3,6],[2,5]]))); // [true,false,false]
