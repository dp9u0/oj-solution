/*
 * @lc app=leetcode.cn id=面试题 02.08 lang=javascript
 *
 * [面试题 02.08] 环路检测
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // Floyd：快慢相遇后，头指针与慢指针同速前进，再遇即环入口
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            let p = head;
            while (p !== slow) {
                p = p.next;
                slow = slow.next;
            }
            return p;
        }
    }
    return null;
};
// @lc code=end

// TEST:
const mk = (vals, pos) => {
    const nodes = vals.map(v => ({ val: v, next: null }));
    for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
    if (pos >= 0) nodes[nodes.length - 1].next = nodes[pos];
    return nodes[0];
};
console.log(detectCycle(mk([3, 2, 0, -4], 1)).val === 2);
console.log(detectCycle(mk([1, 2], 0)).val === 1);
console.log(detectCycle(mk([1], -1)) === null);
console.log(detectCycle(null) === null);
console.log(detectCycle(mk([1, 2, 3, 4, 5], 2)).val === 3); // 环入口在中间
console.log(detectCycle(mk([1, 2, 3], 2)).val === 3); // 尾自环
