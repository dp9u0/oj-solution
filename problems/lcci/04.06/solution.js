/*
 * @lc app=leetcode.cn id=面试题 04.06 lang=javascript
 *
 * [面试题 04.06] 后继者
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
    // 比 p 大的节点都是候选后继，下行中不断左移逼近最小者
    let node = root;
    let succ = null;
    while (node) {
        if (node.val > p.val) {
            succ = node;
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return succ;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const find = (node, val) => (!node ? null : node.val === val ? node : find(node.left, val) || find(node.right, val));
const t1 = arrayToTree([2, 1, 3]);
console.log(inorderSuccessor(t1, find(t1, 1)).val === 2);
console.log(inorderSuccessor(t1, find(t1, 2)).val === 3);
const t2 = arrayToTree([5, 3, 6, 2, 4, null, null, 1]);
console.log(inorderSuccessor(t2, find(t2, 6)) === null);
console.log(inorderSuccessor(t2, find(t2, 4)).val === 5);
console.log(inorderSuccessor(t2, find(t2, 1)).val === 2);
const t3 = arrayToTree([1]);
console.log(inorderSuccessor(t3, t3) === null);
