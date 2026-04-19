/*
 * @lc app=leetcode id=886 lang=javascript
 *
 * [886] Possible Bipartition
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const color = new Array(n + 1).fill(-1);

  const bfs = (start) => {
    const queue = [start];
    color[start] = 0;
    while (queue.length) {
      const node = queue.shift();
      for (const neighbor of graph[node]) {
        if (color[neighbor] === -1) {
          color[neighbor] = color[node] ^ 1;
          queue.push(neighbor);
        } else if (color[neighbor] === color[node]) {
          return false;
        }
      }
    }
    return true;
  };

  for (let i = 1; i <= n; i++) {
    if (color[i] === -1) {
      if (!bfs(i)) return false;
    }
  }
  return true;
};
// @lc code=end

// TEST:
console.log(possibleBipartition(4, [[1,2],[1,3],[2,4]])); // true
console.log(possibleBipartition(3, [[1,2],[1,3],[2,3]])); // false
console.log(possibleBipartition(5, [[1,2],[2,3],[3,4],[4,5],[1,5]])); // false
