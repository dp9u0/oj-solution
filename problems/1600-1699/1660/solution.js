/*
 * @lc app=leetcode.cn id=1660 lang=javascript
 *
 * [1660] 纠正二叉树
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
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
var correctBinaryTree = function(root) {
    const visited = new Set([root]);
    const queue = [[root, null]]; // [node, parent]
    let head = 0;
    while (head < queue.length) {
        const [node, parent] = queue[head++];
        if (node.right && visited.has(node.right)) {
            // right target already visited: node is the invalid one
            if (parent.left === node) parent.left = null;
            else parent.right = null;
            return root;
        }
        visited.add(node);
        if (node.right) queue.push([node.right, node]); // right first: right-to-left sweep
        if (node.left) queue.push([node.left, node]);
    }
    return root;
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
const show = (node) => !node ? null : [node.val, show(node.left), show(node.right)];

// example 1: 2.right = 3 -> remove 2
const a1 = new TreeNode(1), a2 = new TreeNode(2), a3 = new TreeNode(3);
a1.left = a2; a1.right = a3; a2.right = a3;
console.log(JSON.stringify(show(correctBinaryTree(a1)))); // [1,null,[3,null,null]]

// example 2: 7.right = 4 -> remove 7 (and its subtree 2)
const b8 = new TreeNode(8), b3 = new TreeNode(3), b1 = new TreeNode(1);
const b7 = new TreeNode(7), b9 = new TreeNode(9), b4 = new TreeNode(4);
const b2 = new TreeNode(2), b5 = new TreeNode(5), b6 = new TreeNode(6);
b8.left = b3; b8.right = b1;
b3.left = b7;
b1.left = b9; b1.right = b4;
b7.left = b2; b7.right = b4; // invalid pointer
b9.left = b5; b9.right = b6;
console.log(JSON.stringify(show(correctBinaryTree(b8)))); // [8,[3,null,null],[1,[9,[5],[6]],[4,null,null]]]
