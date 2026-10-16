/*
 * @lc app=leetcode.cn id=面试题 02.06 lang=javascript
 *
 * [面试题 02.06] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) return true;
    // 快慢指针：slow 停在前半段末尾
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 反转后半段
    let second = slow.next;
    slow.next = null;
    let prev = null;
    while (second) {
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }
    // 前半段 vs 反转后的后半段
    let a = head;
    let b = prev;
    while (a && b) {
        if (a.val !== b.val) return false;
        a = a.next;
        b = b.next;
    }
    return true;
};
// @lc code=end

// TEST:
const { arrayToLinkList } = require('./utils/arrayToLinkList');
const check = arr => isPalindrome(arrayToLinkList(arr));
console.log(check([1, 2]) === false);
console.log(check([1, 2, 2, 1]) === true);
console.log(check([1, 2, 1]) === true);
console.log(check([]) === true);
console.log(check([1]) === true);
console.log(check([1, 2, 3, 4]) === false);
console.log(check([1, 2, 3, 2, 1]) === true);
