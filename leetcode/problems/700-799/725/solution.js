/*
 * @lc app=leetcode id=725 lang=javascript
 *
 * [725] Split Linked List in Parts
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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let n = 0;
    for (let cur = head; cur; cur = cur.next) n++;

    const base = Math.floor(n / k);
    const remainder = n % k;
    const result = [];

    let cur = head;
    for (let i = 0; i < k; i++) {
        const size = base + (i < remainder ? 1 : 0);
        const dummy = { next: cur };
        let prev = dummy;
        for (let j = 0; j < size && cur; j++) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;
        result.push(dummy.next);
    }

    return result;
};
// @lc code=end

// TEST:
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
const parts1 = splitListToParts(arrayToLinkList([1,2,3]), 5);
console.log(JSON.stringify(parts1.map(p => linkListToArray(p))));
const parts2 = splitListToParts(arrayToLinkList([1,2,3,4,5,6,7,8,9,10]), 3);
console.log(JSON.stringify(parts2.map(p => linkListToArray(p))));
const parts3 = splitListToParts(null, 3);
console.log(JSON.stringify(parts3.map(p => linkListToArray(p))));
