/*
 * @lc app=leetcode.cn id=LCR 142 lang=javascript
 *
 * [LCR 142] 训练计划 IV
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
var trainningPlan = function(l1, l2) {
    // 哑节点简化头节点处理
    const dummy = new ListNode(0);
    let cur = dummy;
    // 双指针比较,较小节点先接入
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    // 剩余链表直接拼接
    cur.next = l1 ? l1 : l2;
    return dummy.next;
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

// case 1: 官方示例 1,两个等长非空链表
let l1 = arrayToLinkList([1, 2, 4]);
let l2 = arrayToLinkList([1, 3, 4]);
assert.deepStrictEqual(linkListToArray(trainningPlan(l1, l2)), [1, 1, 2, 3, 4, 4], 'case 1');

// case 2: 两个空链表
l1 = arrayToLinkList([]);
l2 = arrayToLinkList([]);
assert.deepStrictEqual(linkListToArray(trainningPlan(l1, l2)), [], 'case 2');

// case 3: l1 空,l2 非空
l1 = arrayToLinkList([]);
l2 = arrayToLinkList([0]);
assert.deepStrictEqual(linkListToArray(trainningPlan(l1, l2)), [0], 'case 3');

// case 4: l2 空,l1 非空
l1 = arrayToLinkList([1, 3, 5]);
l2 = arrayToLinkList([]);
assert.deepStrictEqual(linkListToArray(trainningPlan(l1, l2)), [1, 3, 5], 'case 4');

// case 5: l1 所有元素都小于 l2
l1 = arrayToLinkList([1, 2, 3]);
l2 = arrayToLinkList([4, 5, 6]);
assert.deepStrictEqual(linkListToArray(trainningPlan(l1, l2)), [1, 2, 3, 4, 5, 6], 'case 5');

// case 6: 大量重复元素
l1 = arrayToLinkList([1, 1, 1]);
l2 = arrayToLinkList([1, 1, 1]);
assert.deepStrictEqual(linkListToArray(trainningPlan(l1, l2)), [1, 1, 1, 1, 1, 1], 'case 6');

// case 7: 单节点各一个
l1 = arrayToLinkList([5]);
l2 = arrayToLinkList([2]);
assert.deepStrictEqual(linkListToArray(trainningPlan(l1, l2)), [2, 5], 'case 7');

console.log('All test cases passed!');
