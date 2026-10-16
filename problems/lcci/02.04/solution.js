/*
 * @lc app=leetcode.cn id=面试题 02.04 lang=javascript
 *
 * [面试题 02.04] 分割链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // 小于 x 与大于等于 x 分别成链再拼接
    const smallHead = { val: 0, next: null };
    const largeHead = { val: 0, next: null };
    let small = smallHead;
    let large = largeHead;
    for (let node = head; node; node = node.next) {
        if (node.val < x) {
            small.next = node;
            small = small.next;
        } else {
            large.next = node;
            large = large.next;
        }
    }
    large.next = null; // 断开原链拖尾，防止成环
    small.next = largeHead.next;
    return smallHead.next;
};
// @lc code=end

// TEST:
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
const part = (arr, x) => linkListToArray(partition(arrayToLinkList(arr), x));
console.log(JSON.stringify(part([1, 4, 3, 2, 5, 2], 3)) === '[1,2,2,4,3,5]');
console.log(JSON.stringify(part([2, 1], 2)) === '[1,2]');
console.log(JSON.stringify(part([], 0)) === '[]');
console.log(JSON.stringify(part([1], 0)) === '[1]');
console.log(JSON.stringify(part([3, 3, 3], 3)) === '[3,3,3]');
console.log(JSON.stringify(part([5, 1, 2], 3)) === '[1,2,5]');
