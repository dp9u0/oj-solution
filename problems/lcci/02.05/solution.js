/*
 * @lc app=leetcode.cn id=面试题 02.05 lang=javascript
 *
 * [面试题 02.05] 链表求和
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 反向存放：个位在头，逐位相加处理进位
    const dummy = { val: 0, next: null };
    let tail = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        tail.next = { val: sum % 10, next: null };
        tail = tail.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummy.next;
};
// @lc code=end

// TEST:
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
const add = (a, b) => linkListToArray(addTwoNumbers(arrayToLinkList(a), arrayToLinkList(b)));
console.log(JSON.stringify(add([7, 1, 6], [5, 9, 2])) === '[2,1,9]'); // 617+295=912
console.log(JSON.stringify(add([2, 4, 3], [5, 6, 4])) === '[7,0,8]'); // 342+465=807
console.log(JSON.stringify(add([5], [5])) === '[0,1]'); // 5+5=10
console.log(JSON.stringify(add([1, 8], [0])) === '[1,8]'); // 81+0
console.log(JSON.stringify(add([9, 9, 9], [1])) === '[0,0,0,1]'); // 999+1=1000
