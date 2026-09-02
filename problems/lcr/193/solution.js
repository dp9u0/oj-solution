/*
 * @lc app=leetcode.cn id=LCR 193 lang=javascript
 *
 * [LCR 193] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let cur = root;
  while (cur !== null) {
    // 两点都在左子树, 下探左子树
    if (p.val < cur.val && q.val < cur.val) {
      cur = cur.left;
    // 两点都在右子树, 下探右子树
    } else if (p.val > cur.val && q.val > cur.val) {
      cur = cur.right;
    // 分岔点: 一点在左、一点在右, 或 cur 即为 p/q 本身
    } else {
      return cur;
    }
  }
  return null;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

// 值唯一, 在 BST 中按值查找节点
function find(node, val) {
  while (node) {
    if (node.val === val) return node;
    node = val < node.val ? node.left : node.right;
  }
  return null;
}

// 示例 1: root = [6,2,8,0,4,7,9,null,null,3,5], p=2, q=8 -> 6
let root = arrayToTree([6,2,8,0,4,7,9,null,null,3,5].slice());
console.log(lowestCommonAncestor(root, find(root, 2), find(root, 8)).val); // 6

// 示例 2: p=2, q=4 -> 2 (p 是自身祖先)
root = arrayToTree([6,2,8,0,4,7,9,null,null,3,5].slice());
console.log(lowestCommonAncestor(root, find(root, 2), find(root, 4)).val); // 2

// p=3, q=5 (同属 4 的左右子树) -> 4
root = arrayToTree([6,2,8,0,4,7,9,null,null,3,5].slice());
console.log(lowestCommonAncestor(root, find(root, 3), find(root, 5)).val); // 4

// p=6, q=9 (root 本身是 LCA) -> 6
root = arrayToTree([6,2,8,0,4,7,9,null,null,3,5].slice());
console.log(lowestCommonAncestor(root, find(root, 6), find(root, 9)).val); // 6

// p=7, q=9 (同属右子树) -> 8
root = arrayToTree([6,2,8,0,4,7,9,null,null,3,5].slice());
console.log(lowestCommonAncestor(root, find(root, 7), find(root, 9)).val); // 8

// 左斜退化: [2,1] p=2, q=1 -> 2
root = arrayToTree([2,1].slice());
console.log(lowestCommonAncestor(root, find(root, 2), find(root, 1)).val); // 2

// 含 0 值边界: [2,0,3] p=0, q=3 -> 2
root = arrayToTree([2,0,3].slice());
console.log(lowestCommonAncestor(root, find(root, 0), find(root, 3)).val); // 2
