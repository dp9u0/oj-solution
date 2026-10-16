/*
 * @lc app=leetcode.cn id=面试题 04.09 lang=javascript
 *
 * [面试题 04.09] 二叉搜索树序列
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
 * @return {number[][]}
 */
var BSTSequences = function(root) {
    // 空树对应空数组，返回乘法单位元 [[]]
    if (!root) return [[]];
    const left = BSTSequences(root.left);
    const right = BSTSequences(root.right);
    const res = [];
    for (const l of left) {
        for (const r of right) {
            // 根在前，左右子树序列任意交织
            weave(l, r, [root.val], res);
        }
    }
    return res;
};

// 把 first/second 两个序列按保持各自内部顺序的所有方式交织到 prefix 后
function weave(first, second, prefix, res) {
    if (first.length === 0) {
        res.push(prefix.concat(second));
        return;
    }
    if (second.length === 0) {
        res.push(prefix.concat(first));
        return;
    }
    weave(first.slice(1), second, [...prefix, first[0]], res);
    weave(first, second.slice(1), [...prefix, second[0]], res);
}
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const sortSeq = seqs => JSON.stringify(seqs.map(s => JSON.stringify(s)).sort());
// 完全平衡
console.log(sortSeq(BSTSequences(arrayToTree([2, 1, 3]))) === sortSeq([[2, 1, 3], [2, 3, 1]]));
// 示例 2 的链式树（手工构建）
const n2 = { val: 2, left: null, right: null };
const n3 = { val: 3, left: n2, right: null };
const n1 = { val: 1, left: null, right: n3 };
const n4 = { val: 4, left: n1, right: null };
console.log(sortSeq(BSTSequences(n4)) === sortSeq([[4, 1, 3, 2]]));
console.log(sortSeq(BSTSequences(null)) === sortSeq([[]]));
console.log(sortSeq(BSTSequences({ val: 1, left: null, right: null })) === sortSeq([[1]]));
// 左子树 2/(1,4)，根 5：交织出两种
console.log(sortSeq(BSTSequences(arrayToTree([5, 2, null, 1, 4]))) === sortSeq([[5, 2, 1, 4], [5, 2, 4, 1]]));
