/*
 * @lc app=leetcode.cn id=1485 lang=javascript
 *
 * [1485] 克隆含随机指针的二叉树
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {_Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function(root) {
    const map = new Map(); // original -> copy
    const clone = (node) => {
        if (!node) return null;
        const copy = new NodeCopy(node.val);
        map.set(node, copy);
        copy.left = clone(node.left);
        copy.right = clone(node.right);
        return copy;
    };
    const wire = (node) => {
        if (!node) return;
        const copy = map.get(node);
        copy.random = node.random ? map.get(node.random) : null;
        wire(node.left);
        wire(node.right);
    };
    clone(root);
    wire(root);
    return root ? map.get(root) : null;
};
// @lc code=end

// TEST:
function NodeCopy(val, left, right, random) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.random = random === undefined ? null : random;
}
// original tree for example 1: 1 -> right 4; 4 -> left 7; 4.random=7; 7.random=1
const n1 = { val: 1, left: null, right: null, random: null };
const n4 = { val: 4, left: null, right: null, random: null };
const n7 = { val: 7, left: null, right: null, random: null };
n1.right = n4; n4.left = n7; n4.random = n7; n7.random = n1;
const c = copyRandomBinaryTree(n1);
console.log(c.val); // 1
console.log(c.right.val, c.right.left.val); // 4 7
console.log(c.random, c.right.random.val, c.right.random === c.right.left); // null 7 true
console.log(c.right.left.random === c); // true (7.random -> 1 clone)
console.log(copyRandomBinaryTree(null)); // null (empty tree)
