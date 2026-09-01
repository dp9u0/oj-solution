/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let count = {};
    let result = [];
    let serialize = (node) => {
      if (!node) return '#';
      let left = serialize(node.left);
      let right = serialize(node.right);
      let key = node.val + '(' + left + ')(' + right + ')';
      count[key] = (count[key] || 0) + 1;
      if (count[key] === 2) result.push(node);
      return key;
    };
    serialize(root);
    return result;
};
// @lc code=end

// TEST:
// Requires TreeNode - tested via LeetCode
console.log("Test via LeetCode");
