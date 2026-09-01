/*
 * @lc app=leetcode id=817 lang=javascript
 *
 * [817] Linked List Components
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
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    const set = new Set(nums);
    let count = 0;
    let cur = head;
    while (cur) {
        if (set.has(cur.val) && (!cur.next || !set.has(cur.next.val))) {
            count++;
        }
        cur = cur.next;
    }
    return count;
};
// @lc code=end

// TEST:
const { arrayToLinkList } = require('./utils/arrayToLinkList');
console.log(numComponents(arrayToLinkList([0,1,2,3]), [0,1,3]));        // 2
console.log(numComponents(arrayToLinkList([0,1,2,3,4]), [0,3,1,4]));    // 2
