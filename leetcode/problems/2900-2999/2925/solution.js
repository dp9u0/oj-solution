/*
 * @lc app=leetcode id=2925 lang=javascript
 *
 * [2925] Maximum Score After Applying Operations on a Tree
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maximumScoreAfterOperations = function(edges, values) {
    let n = values.length;
    let children = Array.from({ length: n }, () => []);
    for (let [a, b] of edges) {
      children[a].push(b);
      children[b].push(a);
    }
    let totalSum = values.reduce((a, b) => a + b, 0);
    let dfs = (node, parent) => {
      let childSum = 0;
      let isLeaf = true;
      for (let child of children[node]) {
        if (child === parent) continue;
        isLeaf = false;
        childSum += dfs(child, node);
      }
      if (isLeaf) return values[node];
      return Math.min(values[node], childSum);
    };
    return totalSum - dfs(0, -1);
};
// @lc code=end

// TEST:
console.log(maximumScoreAfterOperations([[0,1],[0,2],[0,3],[2,4],[4,5]], [5,2,5,2,1,1]));
console.log(maximumScoreAfterOperations([[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], [20,10,9,7,4,3,5]));
