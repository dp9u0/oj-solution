/*
 * @lc app=leetcode.cn id=面试题 02.02 lang=javascript
 *
 * [面试题 02.02] 返回倒数第 k 个节点
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
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    // 快指针先走 k 步，再双同速
    let fast = head;
    let slow = head;
    while (k > 0) {
        fast = fast.next;
        k--;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow.val;
};
// @lc code=end

// TEST:
const { arrayToLinkList } = require('./utils/arrayToLinkList');
const list = arrayToLinkList([1, 2, 3, 4, 5]);
console.log(kthToLast(list, 2) === 4);
console.log(kthToLast(list, 1) === 5);
console.log(kthToLast(list, 5) === 1);
console.log(kthToLast(arrayToLinkList([7]), 1) === 7);
