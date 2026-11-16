/*
 * @lc app=leetcode.cn id=3263 lang=javascript
 *
 * [3263] 将双链表转换为数组 I
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,prev,next) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @return {number[]}
 */
var toArray = function(head) {
    const res = [];
    for (let cur = head; cur; cur = cur.next) res.push(cur.val);
    return res;
};
// @lc code=end

// TEST:
const buildDLL = arr => {
    let head = null, tail = null;
    for (const v of arr) {
        const node = { val: v, prev: tail, next: null };
        if (tail) tail.next = node; else head = node;
        tail = node;
    }
    return head;
};
console.log(toArray(buildDLL([1, 2, 3, 4, 3, 2, 1]))); // [1,2,3,4,3,2,1]
console.log(toArray(buildDLL([2, 2, 2, 2, 2]))); // [2,2,2,2,2]
console.log(toArray(buildDLL([3, 2, 3, 2, 3, 2]))); // [3,2,3,2,3,2]
console.log(toArray(buildDLL([7]))); // [7]
console.log(toArray(buildDLL([1, 2]))); // [1,2]
