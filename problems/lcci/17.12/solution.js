/*
 * @lc app=leetcode.cn id=面试题 17.12 lang=javascript
 *
 * [面试题 17.12] BiNode
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
 * @return {TreeNode}
 */
var convertBiNode = function(root) {
    // 中序遍历就地改右链；显式栈避免 1e5 深递归爆栈
    const dummy = { val: 0, left: null, right: null };
    let prev = dummy;
    const stack = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node.left = null;
        prev.right = node;
        prev = node;
        node = node.right;
    }
    return dummy.right;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const toVals = head => {
    const vals = [];
    for (let n = head; n; n = n.right) vals.push(n.val);
    return vals;
};
console.log(JSON.stringify(toVals(convertBiNode(arrayToTree([4, 2, 5, 1, 3, null, 6, 0])))) === '[0,1,2,3,4,5,6]');
console.log(JSON.stringify(toVals(convertBiNode(null))) === '[]');
console.log(JSON.stringify(toVals(convertBiNode(arrayToTree([1])))) === '[1]');
// 退化链形树 10 万节点，验证不爆栈且有序
const deep = { val: 0, left: null, right: null };
let cur = deep;
for (let i = 1; i < 100000; i++) {
    cur.left = { val: i, left: null, right: null };
    cur = cur.left;
}
const deepVals = toVals(convertBiNode(deep)); // 左斜链中序为 99999..0 降序
console.log(deepVals.length === 100000 && deepVals[0] === 99999 && deepVals[99999] === 0);
