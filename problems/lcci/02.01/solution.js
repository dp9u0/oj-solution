/*
 * @lc app=leetcode.cn id=面试题 02.01 lang=javascript
 *
 * [面试题 02.01] 移除重复节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
    // 值域 [0, 20000]，用位图代替哈希表，一次遍历保留首次出现的节点
    const seen = new Uint8Array(20001);
    const dummy = { val: 0, next: head };
    let prev = dummy;
    while (prev.next) {
        const v = prev.next.val;
        if (seen[v]) {
            prev.next = prev.next.next;
        } else {
            seen[v] = 1;
            prev = prev.next;
        }
    }
    return dummy.next;
};
// @lc code=end

// TEST:
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
console.log(JSON.stringify(linkListToArray(removeDuplicateNodes(arrayToLinkList([1, 2, 3, 3, 2, 1])))) === '[1,2,3]');
console.log(JSON.stringify(linkListToArray(removeDuplicateNodes(arrayToLinkList([1, 1, 1, 1, 2])))) === '[1,2]');
console.log(JSON.stringify(linkListToArray(removeDuplicateNodes(arrayToLinkList([])))) === '[]');
console.log(JSON.stringify(linkListToArray(removeDuplicateNodes(arrayToLinkList([7])))) === '[7]');
console.log(JSON.stringify(linkListToArray(removeDuplicateNodes(arrayToLinkList([5, 5, 5, 5])))) === '[5]');
console.log(JSON.stringify(linkListToArray(removeDuplicateNodes(arrayToLinkList([2, 1, 2, 3, 1])))) === '[2,1,3]');
