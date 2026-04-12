/*
 * @lc app=leetcode id=2807 lang=javascript
 *
 * [2807] Insert Greatest Common Divisors in Linked List
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
var insertGreatestCommonDivisors = function(head) {
    let cur = head;
    while (cur && cur.next) {
        const gcd = getGCD(cur.val, cur.next.val);
        const node = new ListNode(gcd, cur.next);
        cur.next = node;
        cur = node.next;
    }
    return head;
};

function getGCD(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
// @lc code=end

// TEST:
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
const { arrayToLinkList } = require('./utils/arrayToLinkList');

function linkListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

console.log(JSON.stringify(linkListToArray(insertGreatestCommonDivisors(arrayToLinkList([18, 6, 10, 3])))));
// Expected: [18,6,6,2,10,1,3]

console.log(JSON.stringify(linkListToArray(insertGreatestCommonDivisors(arrayToLinkList([7])))));
// Expected: [7]

console.log(JSON.stringify(linkListToArray(insertGreatestCommonDivisors(arrayToLinkList([4, 12])))));
// Expected: [4,4,12]
