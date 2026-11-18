/*
 * @lc app=leetcode.cn id=369 lang=javascript
 *
 * [369] 给单链表加一
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
var plusOne = function(head) {
    // adding one only touches the trailing run of 9s (they become 0)
    // and the first non-9 digit before them (+1)
    let lastNotNine = null;
    for (let p = head; p; p = p.next) {
        if (p.val !== 9) lastNotNine = p;
    }
    if (!lastNotNine) {
        // all 9s: 999+1 = 1000
        let p = head;
        while (p) { p.val = 0; p = p.next; }
        return new ListNode(1, head);
    }
    lastNotNine.val += 1;
    let p = lastNotNine.next;
    while (p) { p.val = 0; p = p.next; }
    return head;
};
// @lc code=end

// TEST:
function ListNode(val, next) { this.val = val === undefined ? 0 : val; this.next = next === undefined ? null : next; }
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
const t = arr => linkListToArray(plusOne(arrayToLinkList(arr)));

console.log(t([1, 2, 3])); // [1,2,4]
console.log(t([0])); // [1]
console.log(t([9, 9])); // [1,0,0]
console.log(t([1, 9, 9])); // [2,0,0]
console.log(t([9])); // [1,0]
console.log(t([1, 2, 9])); // [1,3,0]
