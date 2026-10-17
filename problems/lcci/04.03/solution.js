/*
 * @lc app=leetcode.cn id=面试题 04.03 lang=javascript
 *
 * [面试题 04.03] 特定深度节点链表
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    // BFS：当前层数组接链表，同时收集下一层
    const res = [];
    let level = tree ? [tree] : [];
    while (level.length) {
        const dummy = { val: 0, next: null };
        let tail = dummy;
        const next = [];
        for (const node of level) {
            tail.next = { val: node.val, next: null };
            tail = tail.next;
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        res.push(dummy.next);
        level = next;
    }
    return res;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const vals = head => {
    const out = [];
    for (let n = head; n; n = n.next) out.push(n.val);
    return out;
};
const t1 = arrayToTree([1, 2, 3, 4, 5, null, 7, 8]);
const lists1 = listOfDepth(t1);
console.log(JSON.stringify(lists1.map(vals)) === JSON.stringify([[1], [2, 3], [4, 5, 7], [8]]));
console.log(JSON.stringify(listOfDepth(null).map(vals)) === '[]');
console.log(JSON.stringify(listOfDepth(arrayToTree([1])).map(vals)) === JSON.stringify([[1]]));
const t4 = arrayToTree([1, 2]);
console.log(JSON.stringify(listOfDepth(t4).map(vals)) === JSON.stringify([[1], [2]]));
