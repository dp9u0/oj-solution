/*
 * @lc app=leetcode id=1019 lang=javascript
 *
 * [1019] Next Greater Node In Linked List
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
var nextLargerNodes = function(head) {
  let vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }
  let n = vals.length;
  let res = new Array(n).fill(0);
  let stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && vals[stack[stack.length - 1]] < vals[i]) {
      res[stack.pop()] = vals[i];
    }
    stack.push(i);
  }
  return res;
};
// @lc code=end

// TEST:
const { arrayToLinkList } = require('./utils/arrayToLinkList');
console.log(JSON.stringify(nextLargerNodes(arrayToLinkList([2, 1, 5])))); // [5,5,0]
console.log(JSON.stringify(nextLargerNodes(arrayToLinkList([2, 7, 4, 3, 5])))); // [7,0,5,5,0]
console.log(JSON.stringify(nextLargerNodes(arrayToLinkList([1])))); // [0]
console.log(JSON.stringify(nextLargerNodes(arrayToLinkList([5, 4, 3, 2, 1])))); // [0,0,0,0,0]
