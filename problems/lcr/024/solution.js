/*
 * @lc app=leetcode.cn id=LCR 024 lang=javascript
 *
 * [LCR 024] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  // prev 指向已反转部分的头节点，curr 指向待处理节点
  let prev = null;
  let curr = head;
  while (curr) {
    // 暂存下一个待处理节点，防止断链
    const next = curr.next;
    // 反转当前节点的指针方向
    curr.next = prev;
    // prev、curr 整体前移
    prev = curr;
    curr = next;
  }
  return prev;
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

let test1 = arrayToLinkList([1, 2, 3, 4, 5]);
assert.deepStrictEqual(linkListToArray(reverseList(test1)), [5, 4, 3, 2, 1], 'case 1: 5 个节点反转');

let test2 = arrayToLinkList([1, 2]);
assert.deepStrictEqual(linkListToArray(reverseList(test2)), [2, 1], 'case 2: 2 个节点反转');

let test3 = arrayToLinkList([]);
assert.deepStrictEqual(linkListToArray(reverseList(test3)), [], 'case 3: 空链表');

let test4 = arrayToLinkList([1]);
assert.deepStrictEqual(linkListToArray(reverseList(test4)), [1], 'case 4: 单节点链表');

let test5 = arrayToLinkList([1, 2, 3]);
assert.deepStrictEqual(linkListToArray(reverseList(test5)), [3, 2, 1], 'case 5: 3 个节点反转');

console.log('All test cases passed!');
