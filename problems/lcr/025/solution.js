/*
 * @lc app=leetcode.cn id=LCR 025 lang=javascript
 *
 * [LCR 025] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // Push nodes onto stacks so least significant digits are on top
  const s1 = [];
  const s2 = [];
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  let carry = 0;
  let head = null;
  while (s1.length || s2.length || carry) {
    const sum = (s1.pop() || 0) + (s2.pop() || 0) + carry;
    carry = Math.floor(sum / 10);
    // Head insertion keeps digits in most-significant-first order
    const node = { val: sum % 10, next: head };
    head = node;
  }
  return head;
};
// @lc code=end

// TEST:
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToLinkList(arr) {
  let head = null;
  let tail = null;
  for (const val of arr) {
    const node = new ListNode(val);
    if (!head) {
      head = node;
    } else {
      tail.next = node;
    }
    tail = node;
  }
  return head;
}

function linkListToArray(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

// 测试用例
const assert = require('assert');

// case 1: 示例 1
let t1 = arrayToLinkList([7, 2, 4, 3]);
let t2 = arrayToLinkList([5, 6, 4]);
assert.deepStrictEqual(linkListToArray(addTwoNumbers(t1, t2)), [7, 8, 0, 7], 'case 1');

// case 2: 示例 2（长度相同）
t1 = arrayToLinkList([2, 4, 3]);
t2 = arrayToLinkList([5, 6, 4]);
assert.deepStrictEqual(linkListToArray(addTwoNumbers(t1, t2)), [8, 0, 7], 'case 2');

// case 3: 示例 3（均为 0）
t1 = arrayToLinkList([0]);
t2 = arrayToLinkList([0]);
assert.deepStrictEqual(linkListToArray(addTwoNumbers(t1, t2)), [0], 'case 3');

// case 4: 最高位进位
t1 = arrayToLinkList([9, 9, 9]);
t2 = arrayToLinkList([1]);
assert.deepStrictEqual(linkListToArray(addTwoNumbers(t1, t2)), [1, 0, 0, 0], 'case 4');

// case 5: 不同长度，无连续进位
t1 = arrayToLinkList([1]);
t2 = arrayToLinkList([9, 9]);
assert.deepStrictEqual(linkListToArray(addTwoNumbers(t1, t2)), [1, 0, 0], 'case 5');

// case 6: 中间连续进位
t1 = arrayToLinkList([5, 9, 9]);
t2 = arrayToLinkList([1]);
assert.deepStrictEqual(linkListToArray(addTwoNumbers(t1, t2)), [6, 0, 0], 'case 6');

console.log('All test cases passed!');
