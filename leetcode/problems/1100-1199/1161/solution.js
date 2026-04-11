/*
 * @lc app=leetcode id=1161 lang=javascript
 *
 * [1161] Maximum Level Sum of a Binary Tree
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
var maxLevelSum = function(root) {
  let maxSum = -Infinity;
  let result = 0;
  let level = 0;
  const queue = [root];

  while (queue.length) {
    level++;
    const size = queue.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (sum > maxSum) {
      maxSum = sum;
      result = level;
    }
  }

  return result;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(maxLevelSum(arrayToTree([1, 7, 0, 7, -8, null, null]))); // 2
console.log(maxLevelSum(arrayToTree([989, null, 10250, 98693, -89388, null, null, null, -32127]))); // 2
console.log(maxLevelSum(arrayToTree([1]))); // 1
