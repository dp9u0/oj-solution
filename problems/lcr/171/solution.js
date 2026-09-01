/*
 * @lc app=leetcode.cn id=LCR 171 lang=javascript
 *
 * [LCR 171] 训练计划 V
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
    let pA = headA;
    let pB = headB;
    // 两个指针分别走 a+b 步，相遇处即为交点；无交点时同时走到 null
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};
// @lc code=end

// TEST:
const { arrayToLinkList } = require('./utils/arrayToLinkList.js');

function build(intersectVal, listA, listB, skipA, skipB) {
  const headA = arrayToLinkList(listA);
  const headB = arrayToLinkList(listB);
  if (intersectVal === 0) return { headA, headB, expected: null };
  let nodeA = headA;
  let nodeB = headB;
  while (skipA-- > 0) nodeA = nodeA.next;
  while (skipB-- > 0) nodeB = nodeB.next;
  nodeB.next = nodeA; // 从交点处拼接
  return { headA, headB, expected: nodeA };
}

// 示例 1：相交于值 8
let { headA, headB, expected } = build(8, [4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5], 2, 3);
console.log(getIntersectionNode(headA, headB) === expected); // true

// 示例 2：相交于值 2
({ headA, headB, expected } = build(2, [0, 9, 1, 2, 4], [3, 2, 4], 3, 1));
console.log(getIntersectionNode(headA, headB) === expected); // true

// 示例 3：不相交，返回 null
({ headA, headB, expected } = build(0, [2, 6, 4], [1, 5], 3, 2));
console.log(getIntersectionNode(headA, headB) === expected); // true

// 相交节点是各自头节点
({ headA, headB, expected } = build(1, [1, 2, 3], [1, 2, 3], 0, 0));
console.log(getIntersectionNode(headA, headB) === expected); // true

// 两链长度差较大且不相交
({ headA, headB, expected } = build(0, [1, 2, 3, 4, 5, 6], [7], 6, 1));
console.log(getIntersectionNode(headA, headB) === expected); // true

// 单节点相等链表（相交于唯一节点）
({ headA, headB, expected } = build(9, [9], [9], 0, 0));
console.log(getIntersectionNode(headA, headB) === expected); // true
