/*
 * @lc app=leetcode id=1261 lang=javascript
 *
 * [1261] Find Elements in a Contaminated Binary Tree
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
 */
var FindElements = function(root) {
  this.values = new Set();
  const recover = (node, val) => {
    if (!node) return;
    node.val = val;
    this.values.add(val);
    recover(node.left, 2 * val + 1);
    recover(node.right, 2 * val + 2);
  };
  recover(root, 0);
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.values.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
let fe = new FindElements(arrayToTree([-1,null,-1]));
console.log(fe.find(1)); // false
console.log(fe.find(2)); // true

fe = new FindElements(arrayToTree([-1,-1,-1,-1,-1]));
console.log(fe.find(1)); // true
console.log(fe.find(3)); // true
console.log(fe.find(5)); // false
