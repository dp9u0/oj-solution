/*
 * @lc app=leetcode.cn id=面试题 02.03 lang=javascript
 *
 * [面试题 02.03] 删除中间节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // 无前驱：拷贝后继的值并跨过它
    node.val = node.next.val;
    node.next = node.next.next;
};
// @lc code=end

// TEST:
const build = vals => {
    const nodes = vals.map(v => ({ val: v, next: null }));
    for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
    return nodes;
};
const list1 = build([4, 5, 1, 9]);
deleteNode(list1[1]);
let out = [];
for (let n = list1[0]; n; n = n.next) out.push(n.val);
console.log(JSON.stringify(out) === '[4,1,9]');
const list2 = build([1, 2, 3]);
deleteNode(list2[0]);
out = [];
for (let n = list2[0]; n; n = n.next) out.push(n.val);
console.log(JSON.stringify(out) === '[2,3]'); // 首节点也适用（伪装成下一个）
