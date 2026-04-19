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
  const critical = [];
  let prev = head, curr = head.next, idx = 1;
  while (curr.next) {
    const next = curr.next;
    if ((curr.val > prev.val && curr.val > next.val) ||
        (curr.val < prev.val && curr.val < next.val)) {
      critical.push(idx);
    }
    prev = curr;
    curr = next;
    idx++;
  }

  if (critical.length < 2) return [-1, -1];

  let minDist = Infinity;
  for (let i = 1; i < critical.length; i++) {
    minDist = Math.min(minDist, critical[i] - critical[i - 1]);
  }
  return [minDist, critical[critical.length - 1] - critical[0]];
};
// @lc code=end
