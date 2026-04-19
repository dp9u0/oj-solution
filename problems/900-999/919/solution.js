/*
 * @lc app=leetcode id=919 lang=javascript
 *
 * [919] Complete Binary Tree Inserter
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
var CBTInserter = function(root) {
  this.root = root;
  this.candidates = [];
  const q = [root];
  while (q.length) {
    const node = q.shift();
    if (!node.left || !node.right) {
      this.candidates.push(node);
    }
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
  const node = new TreeNode(val);
  const parent = this.candidates[0];
  if (!parent.left) {
    parent.left = node;
  } else {
    parent.right = node;
    this.candidates.shift();
  }
  this.candidates.push(node);
  return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end
