/*
 * @lc app=leetcode id=2476 lang=javascript
 *
 * [2476] Closest Nodes Queries in a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function(root, queries) {
  // In-order traversal to get sorted values
  const vals = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    vals.push(node.val);
    dfs(node.right);
  };
  dfs(root);

  const n = vals.length;
  const ans = [];

  for (const q of queries) {
    // Binary search: find largest val <= q (mini) and smallest val >= q (maxi)
    let lo = 0, hi = n - 1;
    let mini = -1, maxi = -1;

    // Find mini: largest val <= q
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (vals[mid] <= q) {
        mini = vals[mid];
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    // Find maxi: smallest val >= q
    lo = 0; hi = n - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (vals[mid] >= q) {
        maxi = vals[mid];
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    ans.push([mini, maxi]);
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(closestNodes(
  {val:6,left:{val:2,left:{val:1},right:{val:4}},right:{val:13,left:{val:9},right:{val:15,left:{val:14}}}},
  [2,5,16]
)); // [[2,2],[4,6],[15,-1]]
console.log(closestNodes(
  {val:4,right:{val:9}},
  [3]
)); // [[-1,4]]
