/*
 * @lc app=leetcode.cn id=1469 lang=javascript
 *
 * [1469] 寻找所有的独生节点
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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    const res = [];
    const queue = root ? [root] : [];
    for (let qi = 0; qi < queue.length; qi++) {
        const node = queue[qi];
        if (node.left && !node.right) res.push(node.left.val);
        if (node.right && !node.left) res.push(node.right.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return res;
};
// @lc code=end

// TEST:
const n = v => ({ val: v, left: null, right: null });
const t1 = n(1); t1.left = n(2); t1.right = n(3); t1.left.left = n(4);
const t2 = n(7); const t2a = n(1), t2b = n(4);
t2.left = t2a; t2.right = t2b; t2a.left = n(6); t2b.left = n(5); t2b.right = n(3); t2b.left.left = n(2);
const t3 = n(11);
const t4 = n(1); t4.left = n(5);
const t5 = n(1); const t5l = n(2); t5.left = t5l; t5l.left = n(3); t5l.left.right = n(4);
console.log(getLonelyNodes(t1)); // [4]
console.log(getLonelyNodes(t2)); // [6, 2] (any order ok)
console.log(getLonelyNodes(t3)); // []
console.log(getLonelyNodes(t4)); // [5]
console.log(getLonelyNodes(t5)); // [2, 3, 4]
