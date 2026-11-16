/*
 * @lc app=leetcode.cn id=3063 lang=javascript
 *
 * [3063] 链表频率
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
var frequenciesOfElements = function(head) {
    const freq = new Map();
    for (let cur = head; cur; cur = cur.next) {
        freq.set(cur.val, (freq.get(cur.val) || 0) + 1);
    }

    const dummy = { val: 0, next: null };
    let tail = dummy;
    for (const f of freq.values()) {
        tail.next = { val: f, next: null };
        tail = tail.next;
    }
    return dummy.next;
};
// @lc code=end

// TEST:
const buildList = arr => {
    const dummy = { val: 0, next: null };
    let tail = dummy;
    for (const v of arr) {
        tail.next = { val: v, next: null };
        tail = tail.next;
    }
    return dummy.next;
};
const toArray = head => {
    const res = [];
    for (let cur = head; cur; cur = cur.next) res.push(cur.val);
    return res;
};
console.log(toArray(frequenciesOfElements(buildList([1, 1, 2, 1, 2, 3])))); // [3,2,1]
console.log(toArray(frequenciesOfElements(buildList([1, 1, 2, 2, 2])))); // [2,3]
console.log(toArray(frequenciesOfElements(buildList([6, 5, 4, 3, 2, 1])))); // [1,1,1,1,1,1]
console.log(toArray(frequenciesOfElements(buildList([7])))); // [1]
console.log(toArray(frequenciesOfElements(buildList([2, 2, 2, 2])))); // [4]
