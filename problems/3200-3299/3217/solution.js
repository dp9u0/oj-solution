/*
 * @lc app=leetcode id=3217 lang=javascript
 *
 * [3217] Delete Nodes From Linked List Present in Array
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
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let toDelete = new Set(nums);
    let dummy = { val: 0, next: head };
    let cur = dummy;
    while (cur.next) {
        if (toDelete.has(cur.next.val)) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};
// @lc code=end

// TEST:
let { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
console.log(JSON.stringify(linkListToArray(modifiedList([1,2,3], arrayToLinkList([1,2,3,4,5]))))); // [4,5]
console.log(JSON.stringify(linkListToArray(modifiedList([1], arrayToLinkList([1,2,1,2,1,2]))))); // [2,2,2]
console.log(JSON.stringify(linkListToArray(modifiedList([5], arrayToLinkList([1,2,3,4]))))); // [1,2,3,4]
