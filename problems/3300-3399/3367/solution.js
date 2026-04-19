/*
 * @lc app=leetcode id=3367 lang=javascript
 *
 * [3367] Maximize Sum of Weights after Edge Removals
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maximizeSumOfWeights = function(edges, k) {
  const n = edges.length + 1;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    adj[u].push([v, w]);
    adj[v].push([u, w]);
  }

  // DFS returns [sumIfNotTaken, sumIfTaken]
  // sumIfNotTaken: best sum in subtree when edge to parent is NOT kept (node has k slots)
  // sumIfTaken: best sum in subtree when edge to parent IS kept (node has k-1 slots)
  const dfs = (node, parent) => {
    const children = [];
    let baseSum = 0;

    for (const [child, w] of adj[node]) {
      if (child === parent) continue;
      const [notTaken, taken] = dfs(child, node);
      // Keep edge (node, child): child is connected to parent(node), so child uses k-1 slots → value = w + taken
      // Drop edge: child is not connected to node, so child uses k slots → value = notTaken
      const keepGain = (w + taken) - notTaken;
      children.push({ keepGain });
      baseSum += notTaken; // start by assuming all edges dropped
    }

    if (children.length === 0) return [0, 0];

    // Sort by keepGain descending (most beneficial to keep first)
    children.sort((a, b) => b.keepGain - a.keepGain);

    // sumIfNotTaken: node is NOT connected to parent, so node can keep up to k children
    let sumNotTaken = baseSum;
    for (let i = 0; i < Math.min(k, children.length); i++) {
      if (children[i].keepGain > 0) {
        sumNotTaken += children[i].keepGain;
      }
    }

    // sumIfTaken: node IS connected to parent, so node can keep up to k-1 children
    let sumTaken = baseSum;
    for (let i = 0; i < Math.min(k - 1, children.length); i++) {
      if (children[i].keepGain > 0) {
        sumTaken += children[i].keepGain;
      }
    }

    return [sumNotTaken, sumTaken];
  };

  // Root node: no parent edge, can keep up to k children
  const [sumNotTaken] = dfs(0, -1);
  return sumNotTaken;
};
// @lc code=end

// TEST:
console.log(maximizeSumOfWeights([[0,1,4],[0,2,2],[2,3,12],[2,4,6]], 2)); // 22
console.log(maximizeSumOfWeights([[0,1,5],[1,2,10],[0,3,15],[3,4,20],[3,5,5],[0,6,10]], 3)); // 65
