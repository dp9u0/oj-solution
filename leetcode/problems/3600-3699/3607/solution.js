/*
 * @lc app=leetcode id=3607 lang=javascript
 *
 * [3607] Power Grid Maintenance
 */

// @lc code=start
/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
var processQueries = function(c, connections, queries) {
  const parent = new Int32Array(c + 1);
  const rank = new Int32Array(c + 1);
  for (let i = 1; i <= c; i++) parent[i] = i;

  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  const union = (a, b) => {
    a = find(a);
    b = find(b);
    if (a === b) return;
    if (rank[a] < rank[b]) [a, b] = [b, a];
    parent[b] = a;
    if (rank[a] === rank[b]) rank[a]++;
  };

  for (const [u, v] of connections) union(u, v);

  // Group stations by component root
  const members = new Map();
  for (let i = 1; i <= c; i++) {
    const root = find(i);
    if (!members.has(root)) members.set(root, []);
    members.get(root).push(i);
  }
  // Each component's stations are already sorted (since we iterate 1..c)

  // minIdx[root] = index of current minimum online station
  const minIdx = new Map();
  for (const [root] of members) minIdx.set(root, 0);

  const online = new Uint8Array(c + 1);
  online.fill(1);

  const res = [];

  const advance = (root) => {
    const arr = members.get(root);
    let idx = minIdx.get(root);
    while (idx < arr.length && !online[arr[idx]]) idx++;
    minIdx.set(root, idx);
  };

  for (const [type, x] of queries) {
    if (type === 2) {
      online[x] = 0;
      const root = find(x);
      // If x is at current min position, advance
      const arr = members.get(root);
      const idx = minIdx.get(root);
      if (idx < arr.length && arr[idx] === x) advance(root);
    } else {
      if (online[x]) {
        res.push(x);
      } else {
        const root = find(x);
        advance(root);
        const arr = members.get(root);
        const idx = minIdx.get(root);
        if (idx < arr.length) res.push(arr[idx]);
        else res.push(-1);
      }
    }
  }

  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(processQueries(5, [[1,2],[2,3],[3,4],[4,5]], [[1,3],[2,1],[1,1],[2,2],[1,2]]))); // [3,2,3]
console.log(JSON.stringify(processQueries(3, [], [[1,1],[2,1],[1,1]]))); // [1,-1]
console.log(JSON.stringify(processQueries(4, [[1,2],[3,4]], [[1,1],[2,1],[1,1],[1,3],[2,3],[1,3]]))); // [1,2,3,4,-1]
console.log(JSON.stringify(processQueries(2, [[1,2]], [[1,2],[2,2],[1,1]]))); // [2,1]
console.log(JSON.stringify(processQueries(1, [], [[1,1],[2,1],[1,1]]))); // [1,-1]
