/*
 * @lc app=leetcode id=797 lang=javascript
 *
 * [797] All Paths From Source to Target
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const n = graph.length;
  const result = [];
  const path = [0];

  const dfs = (node) => {
    if (node === n - 1) {
      result.push([...path]);
      return;
    }
    for (const next of graph[node]) {
      path.push(next);
      dfs(next);
      path.pop();
    }
  };

  dfs(0);
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(allPathsSourceTarget([[1,2],[3],[3],[]]))); // [[0,1,3],[0,2,3]]
console.log(JSON.stringify(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))); // [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
console.log(JSON.stringify(allPathsSourceTarget([[1],[]]))); // [[0,1]]
console.log(JSON.stringify(allPathsSourceTarget([[1],[2],[3],[]]))); // [[0,1,2,3]]
console.log(JSON.stringify(allPathsSourceTarget([[1,2],[3],[1,3],[]]))); // [[0,1,3],[0,2,1,3],[0,2,3]]
