/*
 * @lc app=leetcode id=2265 lang=javascript
 *
 * [2265] Count Nodes Equal to Average of Subtree
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
 * @return {number}
 */
var averageOfSubtree = function(root) {
  let result = 0;

  const dfs = (node) => {
    if (!node) return [0, 0];
    const [leftSum, leftCount] = dfs(node.left);
    const [rightSum, rightCount] = dfs(node.right);
    const sum = leftSum + rightSum + node.val;
    const count = leftCount + rightCount + 1;
    if (Math.floor(sum / count) === node.val) result++;
    return [sum, count];
  };

  dfs(root);
  return result;
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

console.log(averageOfSubtree(build([4,8,5,0,1,null,6]))); // 5
console.log(averageOfSubtree(build([1]))); // 1
