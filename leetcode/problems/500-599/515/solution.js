/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const size = queue.length;
    let max = -Infinity;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(max);
  }

  return result;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(JSON.stringify(largestValues(arrayToTree([1, 3, 2, 5, 3, null, 9])))); // [1,3,9]
console.log(JSON.stringify(largestValues(arrayToTree([1, 2, 3])))); // [1,3]
console.log(JSON.stringify(largestValues(arrayToTree([])))); // []
console.log(JSON.stringify(largestValues(arrayToTree([1])))); // [1]
