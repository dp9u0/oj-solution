/*
 * @lc app=leetcode.cn id=2674 lang=javascript
 *
 * [2674] 拆分循环链表
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
 * @param {ListNode} list
 * @return {ListNode[]}
 */
var splitCircularLinkedList = function(list) {
    let len = 1;
    let tail = list;
    while (tail.next !== list) { tail = tail.next; len++; }
    const half = Math.ceil(len / 2);
    let firstTail = list;
    for (let i = 1; i < half; i++) firstTail = firstTail.next;
    const secondHead = firstTail.next;
    const firstHead = list;
    firstTail.next = firstHead;
    tail.next = secondHead;
    return [firstHead, secondHead];
};
// @lc code=end

// TEST:
const toCircular = (arr) => {
    const nodes = arr.map((v) => ({ val: v, next: null }));
    for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
    nodes[nodes.length - 1].next = nodes[0];
    return nodes[0];
};
const circularToArray = (head) => {
    const out = [head.val];
    let p = head.next;
    while (p !== head) { out.push(p.val); p = p.next; }
    return out;
};
const check = (input, expected) => {
    const [h1, h2] = splitCircularLinkedList(toCircular(input));
    const got = [circularToArray(h1), circularToArray(h2)];
    console.log(JSON.stringify(got), JSON.stringify(got) === JSON.stringify(expected) ? 'OK' : 'FAIL, expected ' + JSON.stringify(expected));
};
check([1, 5, 7], [[1, 5], [7]]);
check([2, 6, 1, 5], [[2, 6], [1, 5]]);
check([3, 4], [[3], [4]]);
check([1, 2, 3, 4, 5, 6], [[1, 2, 3], [4, 5, 6]]);
check([9, 8, 7, 6, 5], [[9, 8, 7], [6, 5]]);
