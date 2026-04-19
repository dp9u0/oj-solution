/*
 * @lc app=leetcode id=785 lang=javascript
 *
 * [785] Is Graph Bipartite?
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const n = graph.length;
  const color = new Array(n).fill(0);

  for (let start = 0; start < n; start++) {
    if (color[start] !== 0) continue;
    const queue = [start];
    color[start] = 1;

    while (queue.length) {
      const u = queue.shift();
      for (const v of graph[u]) {
        if (color[v] === color[u]) return false;
        if (color[v] === 0) {
          color[v] = -color[u];
          queue.push(v);
        }
      }
    }
  }

  return true;
};
// @lc code=end

// TEST:
console.log(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])); // false
console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]));       // true
console.log(isBipartite([[1], [0]]));                                // true
console.log(isBipartite([[1, 2], [0, 2], [0, 1]]));                 // false
