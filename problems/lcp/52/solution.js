/*
 * @lc app=leetcode.cn id=LCP 52 lang=javascript
 *
 * [LCP 52] 二叉搜索树染色
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[][]} ops
 * @return {number}
 */
var getNumber = function(root, ops) {
  // Collect all node values (BST, distinct)
  const vals = [];
  const collect = (node) => {
    if (!node) return;
    vals.push(node.val);
    collect(node.left);
    collect(node.right);
  };
  collect(root);
  vals.sort((a, b) => a - b);
  const n = vals.length;

  // Union-find: find(i) -> smallest index >= i whose node is not colored yet (n when none)
  const parent = new Array(n + 1);
  for (let i = 0; i <= n; i++) parent[i] = i;
  const find = (i) => {
    while (parent[i] !== i) {
      parent[i] = parent[parent[i]];
      i = parent[i];
    }
    return i;
  };

  // Upper bound: first index with value > target
  const upperBound = (target) => {
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (vals[mid] <= target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };

  let red = 0;
  // Process ops from back to front: first touch wins (final color)
  for (let k = ops.length - 1; k >= 0; k--) {
    const [type, x, y] = ops[k];
    const lo = upperBound(x - 1); // first index with value >= x
    const hi = upperBound(y) - 1; // last index with value <= y
    if (lo > hi) continue;
    for (let i = find(lo); i <= hi; i = find(i)) {
      if (type === 1) red++;
      parent[i] = i + 1; // mark colored, skip later
    }
  }
  return red;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
// Example 1
console.log(getNumber(arrayToTree([1, null, 2, null, 3, null, 4, null, 5]), [[1, 2, 4], [1, 1, 3], [0, 3, 5]]) === 2);
// Example 2
console.log(getNumber(arrayToTree([4, 2, 7, 1, null, 5, null, null, null, null, 6]), [[0, 2, 2], [1, 1, 5], [0, 4, 5], [1, 5, 7]]) === 5);
// Single op, all red
console.log(getNumber(arrayToTree([2, 1, 3]), [[1, 1, 3]]) === 3);
// Single node, blue only
console.log(getNumber(arrayToTree([5]), [[0, 0, 10]]) === 0);
// Two ops, later one wins (blue overrides red)
console.log(getNumber(arrayToTree([10, 5, 15]), [[1, 5, 15], [0, 5, 5]]) === 2);
// Ops not covering any node
console.log(getNumber(arrayToTree([1, null, 2]), [[1, 5, 10]]) === 0);
