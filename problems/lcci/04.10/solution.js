/*
 * @lc app=leetcode.cn id=面试题 04.10 lang=javascript
 *
 * [面试题 04.10] 检查子树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function(t1, t2) {
    // 前序序列化：空位记 '#'，每个值前置 ',' 防跨词元误配（",2,#,#" 不会命中 ",12,#,#"）
    // 显式栈迭代——2 万节点链形树的递归会爆栈
    const serialize = root => {
        let out = '';
        const stack = root ? [root] : [];
        while (stack.length) {
            const node = stack.pop();
            if (!node) {
                out += '#';
                continue;
            }
            out += ',' + node.val;
            stack.push(node.right, node.left);
        }
        return out;
    };
    const s = serialize(t1);
    const p = serialize(t2);
    if (!p) return true; // 空树是任何树的子树（两树皆空时也成立）
    // KMP 求 p 在 s 中出现
    const fail = new Array(p.length).fill(0);
    for (let i = 1, len = 0; i < p.length; ) {
        if (p[i] === p[len]) {
            fail[i++] = ++len;
        } else if (len) {
            len = fail[len - 1];
        } else {
            i++;
        }
    }
    for (let i = 0, len = 0; i < s.length; i++) {
        while (len && s[i] !== p[len]) len = fail[len - 1];
        if (s[i] === p[len]) len++;
        if (len === p.length) return true;
    }
    return false;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(checkSubTree(arrayToTree([1, 2, 3]), arrayToTree([2])) === true);
console.log(checkSubTree(arrayToTree([1, null, 2, 4]), arrayToTree([3, 2])) === false);
console.log(checkSubTree(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3])) === true); // 整树即子树
console.log(checkSubTree(arrayToTree([12, 1, null]), arrayToTree([2, null, null])) === false); // 防跨词元误配
console.log(checkSubTree(arrayToTree([12, 2, 3]), arrayToTree([2])) === true);
console.log(checkSubTree(null, null) === true);
console.log(checkSubTree(arrayToTree([1]), null) === true);
console.log(checkSubTree(null, arrayToTree([1])) === false);
// 2 万节点链形树，验证不爆栈且正确
let deep = { val: 0, left: null, right: null };
const deepHead = deep;
for (let i = 1; i < 20000; i++) {
    deep.left = { val: i, left: null, right: null };
    deep = deep.left;
}
console.log(checkSubTree(deepHead, deepHead.left) === true);
console.log(checkSubTree(deepHead, { val: 0, left: { val: 99999, left: null, right: null }, right: null }) === false);
