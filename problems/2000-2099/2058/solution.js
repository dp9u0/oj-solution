/*
 * @lc app=leetcode id=2058 lang=javascript
 *
 * [2058] Find the Minimum and Maximum Number of Nodes Between Critical Points
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
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
  let prev = head;
  let cur = head.next;
  let pos = 1;          // 当前节点位置（从 1 开始计数）
  let firstPos = -1;    // 第一个临界点的位置
  let lastPos = -1;     // 上一个临界点的位置
  let minGap = Infinity;

  while (cur && cur.next) {
    const next = cur.next;
    // 判断当前节点是否为临界点（局部最大或局部最小）
    if ((cur.val > prev.val && cur.val > next.val) ||
        (cur.val < prev.val && cur.val < next.val)) {
      if (firstPos === -1) {
        firstPos = pos;
      } else {
        minGap = Math.min(minGap, pos - lastPos);
      }
      lastPos = pos;
    }
    prev = cur;
    cur = next;
    pos++;
  }

  // 临界点少于两个，返回 [-1, -1]
  if (firstPos === -1 || lastPos === firstPos) {
    return [-1, -1];
  }

  return [minGap, lastPos - firstPos];
};
// @lc code=end

// TEST:
const { arrayToLinkList } = require('./utils/arrayToLinkList');
const test = (arr) => {
  const head = arrayToLinkList(arr);
  console.log(nodesBetweenCriticalPoints(head));
};
test([3, 1]); // [-1,-1]
test([5, 3, 1, 2, 5, 1, 2]); // [1,3]
test([1, 3, 2, 2, 3, 2, 2, 2, 7]); // [3,3]
test([1, 2, 3, 4, 5]); // [-1,-1] 严格递增，无临界点
test([1, 2, 2, 1]); // [-1,-1] 相等不算局部极值
test([2, 2, 2, 2]); // [-1,-1] 全部相等
test([1, 5, 4, 3, 2, 6, 5]); // 多个临界点
test([2, 1, 2, 1, 2, 1]); // 交替极值

