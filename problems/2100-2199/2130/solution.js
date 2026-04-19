/*
 * @lc app=leetcode id=2130 lang=javascript
 *
 * [2130] Maximum Twin Sum of a Linked List
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
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head, fast = head;
    const stack = [];
    while (fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    let maxSum = 0;
    while (slow) {
        maxSum = Math.max(maxSum, stack.pop() + slow.val);
        slow = slow.next;
    }

    return maxSum;
};
// @lc code=end

// TEST:
const { arrayToLinkList } = require('./utils/arrayToLinkList');
console.log(pairSum(arrayToLinkList([5,4,2,1])));
console.log(pairSum(arrayToLinkList([4,2,2,3])));
console.log(pairSum(arrayToLinkList([1,100000])));
