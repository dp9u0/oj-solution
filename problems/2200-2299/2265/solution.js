/*
 * @lc app=leetcode.cn id=2265 lang=javascript
 *
 * [2265] 统计值等于子树平均值的节点数
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
var averageOfSubtree = function (root) {
  let answer = 0;

  // Returns [sum, count] of the subtree rooted at node
  const dfs = (node) => {
    if (!node) return [0, 0];

    const [leftSum, leftCount] = dfs(node.left);
    const [rightSum, rightCount] = dfs(node.right);

    const sum = node.val + leftSum + rightSum;
    const count = 1 + leftCount + rightCount;

    if (Math.floor(sum / count) === node.val) answer++;

    return [sum, count];
  };

  dfs(root);

  return answer;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

console.log(averageOfSubtree(arrayToTree([4, 8, 5, 0, 1, null, 6])) === 5);
console.log(averageOfSubtree(arrayToTree([1])) === 1);
console.log(averageOfSubtree(arrayToTree([0, 0, 0])) === 3);
console.log(averageOfSubtree(arrayToTree([1, 2, 3])) === 2);
console.log(averageOfSubtree(arrayToTree([3, 1, 5, null, null, 4, 7])) === 4);
