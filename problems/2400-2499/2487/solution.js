/*
 * @lc app=leetcode id=2487 lang=javascript
 *
 * [2487] Remove Nodes From Linked List
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
var removeNodes = function(head) {
    const reverse = (node) => {
        let prev = null, curr = node;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    };

    let rev = reverse(head);
    let dummy = new ListNode(0, rev);
    let curr = rev, maxVal = 0;
    while (curr) {
        maxVal = Math.max(maxVal, curr.val);
        if (curr.next && curr.next.val < maxVal) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return reverse(dummy.next);
};
// @lc code=end

// TEST:
function ListNode(val, next) { this.val = (val === undefined ? 0 : val); this.next = (next === undefined ? null : next); }
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
console.log(linkListToArray(removeNodes(arrayToLinkList([5,2,13,3,8])))); // [13,8]
console.log(linkListToArray(removeNodes(arrayToLinkList([1,1,1,1]))));    // [1,1,1,1]
