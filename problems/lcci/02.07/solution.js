/*
 * @lc app=leetcode.cn id=面试题 02.07 lang=javascript
 *
 * [面试题 02.07] 链表相交
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 双指针互换跑道：a+c+b == b+c+a，交点相遇或同时为 null
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    return pA;
};
// @lc code=end

// TEST:
const build = vals => {
    const nodes = vals.map(v => ({ val: v, next: null }));
    for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
    return nodes;
};
// 示例 1：A [4,1] + 共 [8,4,5]，B [5,0,1]
const common = build([8, 4, 5]);
const a1 = build([4, 1]);
const b1 = build([5, 0, 1]);
a1[a1.length - 1].next = common[0];
b1[b1.length - 1].next = common[0];
console.log(getIntersectionNode(a1[0], b1[0]) === common[0]);
// 不相交
const a2 = build([2, 6, 4]);
const b2 = build([1, 5]);
console.log(getIntersectionNode(a2[0], b2[0]) === null);
// 空链表
console.log(getIntersectionNode(null, b2[0]) === null);
console.log(getIntersectionNode(a2[0], null) === null);
// 全链相同（表头即交点）
const shared = build([7, 8]);
console.log(getIntersectionNode(shared[0], shared[0]) === shared[0]);
