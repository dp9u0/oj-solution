/*
 * @lc app=leetcode.cn id=1474 lang=javascript
 *
 * [1474] 删除链表 M 个节点之后的 N 个节点
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    let cur = head;
    while (cur) {
        // cur is the first kept node, keep m-1 more
        for (let i = 1; i < m && cur; i++) cur = cur.next;
        if (!cur) break;
        // skip n nodes
        let nxt = cur.next;
        for (let i = 0; i < n && nxt; i++) nxt = nxt.next;
        cur.next = nxt;
        cur = nxt;
    }
    return head;
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
console.log(toArray(deleteNodes(buildList([1,2,3,4,5,6,7,8,9,10,11,12,13]), 2, 3))); // [1,2,6,7,11,12]
console.log(toArray(deleteNodes(buildList([1,2,3,4,5,6,7,8,9,10,11]), 1, 3))); // [1,5,9]
console.log(toArray(deleteNodes(buildList([1,2,3,4,5,6,7,8,9,10,11]), 3, 1))); // [1,2,3,5,6,7,9,10,11]
console.log(toArray(deleteNodes(buildList([9,3,7,7,9,10,8,2]), 1, 2))); // [9,7,8]
console.log(toArray(deleteNodes(buildList([1]), 1, 5))); // [1]
console.log(toArray(deleteNodes(buildList([1,2,3]), 5, 1))); // [1,2,3]
