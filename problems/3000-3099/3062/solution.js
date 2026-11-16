/*
 * @lc app=leetcode.cn id=3062 lang=javascript
 *
 * [3062] 链表游戏的获胜者
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
 * @return {string}
 */
var gameResult = function(head) {
    let even = 0, odd = 0;
    for (let cur = head; cur && cur.next; cur = cur.next.next) {
        if (cur.val > cur.next.val) even++;
        else if (cur.val < cur.next.val) odd++;
    }
    return even > odd ? "Even" : even < odd ? "Odd" : "Tie";
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
console.log(gameResult(buildList([2, 1]))); // "Even"
console.log(gameResult(buildList([2, 5, 4, 7, 20, 5]))); // "Odd"
console.log(gameResult(buildList([4, 5, 2, 1]))); // "Tie"
console.log(gameResult(buildList([1, 2]))); // "Odd"
console.log(gameResult(buildList([2, 1, 4, 3]))); // "Even" (2>1, 4>3)
