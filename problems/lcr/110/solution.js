/*
 * @lc app=leetcode.cn id=LCR 110 lang=javascript
 *
 * [LCR 110] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const n = graph.length;
  const target = n - 1;
  const res = [];
  const path = [0];
  const inPath = new Array(n).fill(false);
  inPath[0] = true;

  const dfs = (node) => {
    if (node === target) {
      res.push(path.slice());
      return;
    }
    for (const next of graph[node]) {
      if (inPath[next]) continue;
      inPath[next] = true;
      path.push(next);
      dfs(next);
      path.pop();
      inPath[next] = false;
    }
  };

  dfs(0);
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

const sortPaths = (arr) => arr.map(p => p.join(',')).sort();
assert.deepStrictEqual(sortPaths(allPathsSourceTarget([[1, 2], [3], [3], []])), sortPaths([[0, 1, 3], [0, 2, 3]]));
assert.deepStrictEqual(
  sortPaths(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])),
  sortPaths([[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]])
);
assert.deepStrictEqual(sortPaths(allPathsSourceTarget([[1], []])), sortPaths([[0, 1]]));
assert.deepStrictEqual(
  sortPaths(allPathsSourceTarget([[1, 2, 3], [2], [3], []])),
  sortPaths([[0, 1, 2, 3], [0, 2, 3], [0, 3]])
);
assert.deepStrictEqual(
  sortPaths(allPathsSourceTarget([[1, 3], [2], [3], []])),
  sortPaths([[0, 1, 2, 3], [0, 3]])
);
// target directly from source only
assert.deepStrictEqual(sortPaths(allPathsSourceTarget([[1], []])), sortPaths([[0, 1]]));
// only target n-1 counts as a valid end: direct edge 0->4 is the only path
assert.deepStrictEqual(sortPaths(allPathsSourceTarget([[1, 2, 3, 4], [], [], [], []])), sortPaths([[0, 4]]));

console.log('All tests passed!');
console.log('allPathsSourceTarget([[1,2],[3],[3],[]]) =', JSON.stringify(allPathsSourceTarget([[1, 2], [3], [3], []])));
