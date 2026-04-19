/*
 * @lc app=leetcode id=3615 lang=javascript
 *
 * [3615] Longest Palindromic Path in Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} label
 * @return {number}
 */
var maxLen = function(n, edges, label) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const sz = 1 << n;
  const seen = new Uint8Array(n * n * sz);
  const key = (l, r, m) => (l * n + r) * sz + m;

  const q = [];
  let result = 1;
  let head = 0;

  // Odd-length: single center
  for (let c = 0; c < n; c++) {
    const m = 1 << c;
    seen[key(c, c, m)] = 1;
    q.push(c, c, m, 1);
  }

  // Even-length: adjacent pair with same label
  for (const [u, v] of edges) {
    if (label[u] === label[v]) {
      const m = (1 << u) | (1 << v);
      let k = key(u, v, m);
      if (!seen[k]) { seen[k] = 1; q.push(u, v, m, 2); }
      k = key(v, u, m);
      if (!seen[k]) { seen[k] = 1; q.push(v, u, m, 2); }
      result = 2;
    }
  }

  // BFS expansion
  while (head < q.length) {
    const left = q[head++], right = q[head++], mask = q[head++], len = q[head++];

    for (const u of adj[left]) {
      if (mask & (1 << u)) continue;
      for (const v of adj[right]) {
        if (mask & (1 << v)) continue;
        if (u === v) continue;
        if (label[u] !== label[v]) continue;

        const nm = mask | (1 << u) | (1 << v);
        const k = key(u, v, nm);
        if (!seen[k]) {
          seen[k] = 1;
          q.push(u, v, nm, len + 2);
          if (len + 2 > result) result = len + 2;
        }
      }
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(maxLen(3, [[0,1],[1,2]], 'aba')); // 3
console.log(maxLen(3, [[0,1],[0,2]], 'abc')); // 1
console.log(maxLen(4, [[0,2],[0,3],[3,1]], 'bbac')); // 3
console.log(maxLen(2, [[0,1]], 'aa')); // 2
console.log(maxLen(5, [[0,1],[1,2],[2,3],[3,4]], 'abcba')); // 5
