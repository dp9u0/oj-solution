/*
 * @lc app=leetcode id=1171 lang=javascript
 *
 * [1171] Remove Zero Sum Consecutive Nodes from Linked List
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
var removeZeroSumSublists = function(head) {
    const dummy = { val: 0, next: head };
    const map = new Map();
    let prefix = 0;

    // First pass: record last occurrence of each prefix sum
    for (let node = dummy; node; node = node.next) {
        prefix += node.val;
        map.set(prefix, node);
    }

    // Second pass: skip zero-sum sequences
    prefix = 0;
    for (let node = dummy; node; node = node.next) {
        prefix += node.val;
        node.next = map.get(prefix).next;
    }

    return dummy.next;
};
// @lc code=end

// TEST:
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
console.log(linkListToArray(removeZeroSumSublists(arrayToLinkList([1, 2, -3, 3, 1])))); // [3,1] or [1,2,1]
console.log(linkListToArray(removeZeroSumSublists(arrayToLinkList([1, 2, 3, -3, 4])))); // [1,2,4]
console.log(linkListToArray(removeZeroSumSublists(arrayToLinkList([1, 2, 3, -3, -2])))); // [1]
