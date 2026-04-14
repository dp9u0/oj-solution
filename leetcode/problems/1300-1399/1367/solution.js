/*
 * @lc app=leetcode id=1367 lang=javascript
 *
 * [1367] Linked List in Binary Tree
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    function match(node, listNode) {
        if (!listNode) return true;
        if (!node || node.val !== listNode.val) return false;
        return match(node.left, listNode.next) || match(node.right, listNode.next);
    }
    if (!root) return false;
    return match(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right);
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const { arrayToLinkList } = require('./utils/arrayToLinkList');
const tree = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3];
console.log(isSubPath(arrayToLinkList([4,2,8]), arrayToTree(tree)));
console.log(isSubPath(arrayToLinkList([1,4,2,6]), arrayToTree(tree)));
console.log(isSubPath(arrayToLinkList([1,4,2,6,8]), arrayToTree(tree)));
