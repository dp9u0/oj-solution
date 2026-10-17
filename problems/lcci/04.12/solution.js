/*
 * @lc app=leetcode.cn id=面试题 04.12 lang=javascript
 *
 * [面试题 04.12] 求和路径
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    // 前缀和哈希：路径和 = cur − 祖先前缀；显式栈迭代防 1 万深爆栈
    const prefix = new Map();
    prefix.set(0, 1);
    let count = 0;
    // 栈项 [node, 父前缀, 是否已展开, 自身前缀]
    const stack = [];
    if (root) stack.push([root, 0, false, 0]);
    while (stack.length) {
        const top = stack[stack.length - 1];
        const [node, pcur, expanded] = top;
        if (!expanded) {
            top[2] = true;
            const cur = pcur + node.val;
            top[3] = cur;
            count += prefix.get(cur - sum) || 0;
            prefix.set(cur, (prefix.get(cur) || 0) + 1);
            if (node.right) stack.push([node.right, cur, false, 0]);
            if (node.left) stack.push([node.left, cur, false, 0]);
        } else {
            const cur = top[3];
            const left = prefix.get(cur) - 1;
            if (left === 0) prefix.delete(cur);
            else prefix.set(cur, left);
            stack.pop();
        }
    }
    return count;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(pathSum(arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22) === 3);
console.log(pathSum(arrayToTree([1, 2, 3]), 3) === 2); // 1->2 与 3
console.log(pathSum(null, 0) === 0);
console.log(pathSum(arrayToTree([1]), 1) === 1);
console.log(pathSum(arrayToTree([1, -2, -3]), -1) === 1);
console.log(pathSum(arrayToTree([0, 0, 0]), 0) === 5); // 全路径计数：根起 2 + 节点自身 3? 验证见下
// 1 万节点右斜链，验证不爆栈
let deep = { val: 1, left: null, right: null };
const deepHead = deep;
for (let i = 1; i < 10000; i++) {
    deep.right = { val: 1, left: null, right: null };
    deep = deep.right;
}
console.log(pathSum(deepHead, 3) === 9998); // 长度 3 的连续段数
