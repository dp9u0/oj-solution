/*
 * @lc app=leetcode id=1530 lang=javascript
 *
 * [1530] Number of Good Leaf Nodes Pairs
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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
  let result = 0;
  const dfs = (node) => {
    if (!node) return new Array(distance + 1).fill(0);
    if (!node.left && !node.right) {
      const cnt = new Array(distance + 1).fill(0);
      cnt[0] = 1;
      return cnt;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    for (let dl = 0; dl < distance; dl++) {
      for (let dr = 0; dr < distance; dr++) {
        if (dl + dr + 2 <= distance) {
          result += left[dl] * right[dr];
        }
      }
    }
    const cnt = new Array(distance + 1).fill(0);
    for (let d = 0; d < distance; d++) {
      cnt[d + 1] = left[d] + right[d];
    }
    return cnt;
  };
  dfs(root);
  return result;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(countPairs(arrayToTree([1, 2, 3, null, 4]), 3)); // 1
console.log(countPairs(arrayToTree([1, 2, 3, 4, 5, 6, 7]), 3)); // 2
console.log(countPairs(arrayToTree([7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2]), 3)); // 1
