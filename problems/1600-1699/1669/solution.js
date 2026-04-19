/*
 * @lc app=leetcode id=1669 lang=javascript
 *
 * [1669] Merge In Between Linked Lists
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let preA = list1;
  for (let i = 0; i < a - 1; i++) preA = preA.next;
  let postB = preA;
  for (let i = a - 1; i <= b; i++) postB = postB.next;
  let tail2 = list2;
  while (tail2.next) tail2 = tail2.next;
  preA.next = list2;
  tail2.next = postB;
  return list1;
};
// @lc code=end

// TEST:
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
const l1 = arrayToLinkList([10,1,13,6,9,5]);
const l2 = arrayToLinkList([1000000,1000001,1000002]);
console.log(JSON.stringify(linkListToArray(mergeInBetween(l1, 3, 4, l2))));
// [10,1,13,1000000,1000001,1000002,5]

const l3 = arrayToLinkList([0,1,2,3,4,5,6]);
const l4 = arrayToLinkList([1000000,1000001,1000002,1000003,1000004]);
console.log(JSON.stringify(linkListToArray(mergeInBetween(l3, 2, 5, l4))));
// [0,1,1000000,1000001,1000002,1000003,1000004,6]
