/*
 * @lc app=leetcode id=1721 lang=javascript
 *
 * [1721] Swapping Nodes in a Linked List
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
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    // Find kth node from beginning
    let first = head;
    for (let i = 1; i < k; i++) {
        first = first.next;
    }

    // Find kth node from end using fast/slow pointers
    let slow = head;
    let fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // Swap values
    const temp = first.val;
    first.val = slow.val;
    slow.val = temp;

    return head;
};
// @lc code=end

// TEST: (need linked list utility)
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
const test = (arr, k) => {
    const head = arrayToLinkList(arr);
    const result = swapNodes(head, k);
    console.log(linkListToArray(result));
};
test([1,2,3,4,5], 2); // [1,4,3,2,5]
test([7,9,6,6,7,8,3,0,9,5], 5); // [7,9,6,6,8,7,3,0,9,5]
test([1], 1); // [1]
