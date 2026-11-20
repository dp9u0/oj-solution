/*
 * @lc app=leetcode.cn id=1836 lang=javascript
 *
 * [1836] 从未排序的链表中移除重复元素
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
var deleteDuplicatesUnsorted = function(head) {
    const count = new Map();
    for (let n = head; n; n = n.next) {
        count.set(n.val, (count.get(n.val) || 0) + 1);
    }
    const dummy = { val: 0, next: null };
    let tail = dummy;
    for (let n = head; n; n = n.next) {
        if (count.get(n.val) === 1) {
            tail.next = n;
            tail = n;
        }
    }
    tail.next = null;
    return dummy.next;
};
// @lc code=end

// TEST:
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
const build = (vals) => {
    const dummy = new ListNode();
    let t = dummy;
    for (const v of vals) { t.next = new ListNode(v); t = t.next; }
    return dummy.next;
};
const show = (node) => {
    const out = [];
    for (let n = node; n; n = n.next) out.push(n.val);
    return JSON.stringify(out);
};
console.log(show(deleteDuplicatesUnsorted(build([1,2,3,2])))); // [1,3]
console.log(show(deleteDuplicatesUnsorted(build([2,1,1,2])))); // []
console.log(show(deleteDuplicatesUnsorted(build([3,2,2,1,3,2,4])))); // [1,4]
