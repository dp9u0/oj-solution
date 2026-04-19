/*
 * @lc app=leetcode id=2331 lang=javascript
 *
 * [2331] Evaluate Boolean Binary Tree
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
 * @return {boolean}
 */
var evaluateTree = function(root) {
  if (!root.left && !root.right) return root.val === 1;
  if (root.val === 2) return evaluateTree(root.left) || evaluateTree(root.right);
  return evaluateTree(root.left) && evaluateTree(root.right);
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const build = (arr) => {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
};

console.log(evaluateTree(build([2, 1, 3, null, null, 0, 1]))); // true
console.log(evaluateTree(build([0]))); // false
console.log(evaluateTree(build([1]))); // true
