/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let inc = 0;
  let node = null;
  while (stack1.length || stack2.length) {
    let s1 = stack1.pop() || 0;
    let s2 = stack2.pop() || 0;
    let val = s1 + s2 + inc;
    inc = 0;
    if (val >= 10) { val -= 10; inc = 1; }
    node = { val, next: node }
  }
  if (inc) {
    node = { val: inc, next: node }
  }
  return node;
};

// TEST:
const { arrayToLinkList, linkListToArray } = require("./utils/arrayToLinkList");

let l1 = arrayToLinkList([7, 2, 4, 3])
let l2 = arrayToLinkList([5, 6, 4])
let l = addTwoNumbers(l1, l2)
let result = linkListToArray(l);
console.log(result);

l1 = arrayToLinkList([7, 2, 4, 3])
l2 = arrayToLinkList([5, 7, 5, 7])
l = addTwoNumbers(l1, l2)
result = linkListToArray(l);
console.log(result)



