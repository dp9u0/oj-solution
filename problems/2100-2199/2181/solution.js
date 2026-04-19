/*
 * @lc app=leetcode id=2181 lang=javascript
 *
 * [2181] Merge Nodes in Between Zeros
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
var mergeNodes = function(head) {
    const dummy = new ListNode(0);
    let tail = dummy, curr = head.next, sum = 0;
    while (curr) {
        if (curr.val === 0) {
            tail.next = new ListNode(sum);
            tail = tail.next;
            sum = 0;
        } else {
            sum += curr.val;
        }
        curr = curr.next;
    }
    return dummy.next;
};
// @lc code=end

// TEST:
function ListNode(val, next) { this.val = (val === undefined ? 0 : val); this.next = (next === undefined ? null : next); }
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
console.log(linkListToArray(mergeNodes(arrayToLinkList([0,3,1,0,4,5,2,0])))); // [4,11]
console.log(linkListToArray(mergeNodes(arrayToLinkList([0,1,0,3,0,2,2,0])))); // [1,3,4]
