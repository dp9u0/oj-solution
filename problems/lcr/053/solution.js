/*
 * @lc app=leetcode.cn id=LCR 053 lang=javascript
 *
 * [LCR 053] 二叉搜索树中的中序后继
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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let successor = null;
    let cur = root;
    while (cur) {
        if (p.val < cur.val) {
            successor = cur;
            cur = cur.left;
        } else {
            cur = cur.right;
        }
    }
    return successor;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
function findNode(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return findNode(root.val < val ? root.right : root.left, val);
}

// 示例 1: root = [2,1,3], p = 1 -> 2
console.log(inorderSuccessor(arrayToTree([2,1,3]), findNode(arrayToTree([2,1,3]), 1))?.val);
console.log(2);

// 示例 2: root = [5,3,6,2,4,null,null,1], p = 6 -> null
const root2 = arrayToTree([5,3,6,2,4,null,null,1]);
console.log(inorderSuccessor(root2, findNode(root2, 6)));
console.log(null);

// p 是最大值(最右节点): root = [2,1,3], p = 3 -> null
const root3 = arrayToTree([2,1,3]);
console.log(inorderSuccessor(root3, findNode(root3, 3)));
console.log(null);

// 单节点树: root = [1], p = 1 -> null
const root4 = arrayToTree([1]);
console.log(inorderSuccessor(root4, findNode(root4, 1)));
console.log(null);

// p 在左子树、后继为祖先: root = [5,3,6,2,4,null,null,1], p = 2 -> 3
const root5 = arrayToTree([5,3,6,2,4,null,null,1]);
console.log(inorderSuccessor(root5, findNode(root5, 2))?.val);
console.log(3);

// p 有右子树,后继为右子树最左节点: root = [5,3,6,2,4,null,null,1], p = 3 -> 4
const root6 = arrayToTree([5,3,6,2,4,null,null,1]);
console.log(inorderSuccessor(root6, findNode(root6, 3))?.val);
console.log(4);
