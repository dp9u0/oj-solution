/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
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
 * @return {number}
 */
var getDecimalValue = function(head) {
  let result = 0;
  let curr = head;
  while (curr) {
    result = result * 2 + curr.val;
    curr = curr.next;
  }
  return result;
};
// @lc code=end

// TEST:
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const buildList = (arr) => {
  const dummy = new ListNode();
  let curr = dummy;
  for (const v of arr) {
    curr.next = new ListNode(v);
    curr = curr.next;
  }
  return dummy.next;
};

console.log(getDecimalValue(buildList([1, 0, 1]))); // 5
console.log(getDecimalValue(buildList([0]))); // 0
console.log(getDecimalValue(buildList([1, 1, 1, 0, 0, 1, 0, 0, 1, 1]))); // 909
