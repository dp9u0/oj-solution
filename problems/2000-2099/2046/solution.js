/*
 * @lc app=leetcode.cn id=2046 lang=javascript
 *
 * [2046] 给按照绝对值排序的链表排序
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
var sortLinkedList = function(head) {
    const dummy = { val: 0, next: null };
    let tail = null; // tail of the assembled sorted chain
    let cur = head;
    while (cur) {
        const next = cur.next;
        if (cur.val < 0) {
            // negatives in abs-sorted order are decreasing -> head-insert reverses them
            cur.next = dummy.next;
            dummy.next = cur;
            if (tail === null) tail = cur;
        } else {
            cur.next = null;
            if (tail === null) dummy.next = cur;
            else tail.next = cur;
            tail = cur;
        }
        cur = next;
    }
    return dummy.next;
};
// @lc code=end

// TEST:
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
const t = (arr) => linkListToArray(sortLinkedList(arrayToLinkList(arr)));
console.log(JSON.stringify(t([0,2,-5,5,10,-10]))); // [-10,-5,0,2,5,10]
console.log(JSON.stringify(t([2,5,8,9,16,-16]))); // [-16,2,5,8,9,16]
console.log(JSON.stringify(t([0,-2,3,-4,5]))); // [-4,-2,0,3,5]
console.log(JSON.stringify(t([-1,-3]))); // [-3,-1]
console.log(JSON.stringify(t([7]))); // [7]
