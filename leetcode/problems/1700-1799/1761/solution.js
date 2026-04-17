/*
 * @lc app=leetcode id=1761 lang=javascript
 *
 * [1761] Minimum Degree of a Connected Trio in a Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minTrioDegree = function(n, edges) {
  const adj = Array.from({ length: n + 1 }, () => new Uint8Array(n + 1));
  const deg = new Int32Array(n + 1);

  for (const [u, v] of edges) {
    adj[u][v] = 1;
    adj[v][u] = 1;
    deg[u]++;
    deg[v]++;
  }

  let minDeg = Infinity;
  for (let i = 1; i <= n - 2; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      if (!adj[i][j]) continue;
      for (let k = j + 1; k <= n; k++) {
        if (adj[i][k] && adj[j][k]) {
          const d = deg[i] + deg[j] + deg[k] - 6;
          if (d < minDeg) minDeg = d;
        }
      }
    }
  }

  return minDeg === Infinity ? -1 : minDeg;
};
// @lc code=end

// TEST:
console.log(minTrioDegree(6, [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]])); // 3
console.log(minTrioDegree(7, [[1,3],[4,1],[4,3],[2,5],[5,6],[6,7],[7,5],[2,6]])); // 0
console.log(minTrioDegree(3, [[1,2],[2,3],[1,3]])); // 0
console.log(minTrioDegree(4, [[1,2],[2,3],[3,4]])); // -1
console.log(minTrioDegree(5, [[1,2],[1,3],[2,3],[3,4],[4,5],[5,3]])); // 2
