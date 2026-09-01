/*
 * @lc app=leetcode.cn id=LCR 140 lang=javascript
 *
 * [LCR 140] 训练计划 II
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
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function(head, cnt) {
  let fast = head;
  let slow = head;
  // fast 先走 cnt 步
  while (cnt > 0) {
    fast = fast.next;
    cnt--;
  }
  // fast 与 slow 同步前进，fast 到 null 时 slow 即倒数第 cnt 个节点
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
// @lc code=end

// TEST:
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
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 测试用例
const test1 = trainingPlan(arrayToLinkList([2, 4, 7, 8]), 1);
console.log('test1:', linkListToArray(test1), 'expect: [8]');

const test2 = trainingPlan(arrayToLinkList([1, 2, 3, 4, 5]), 2);
console.log('test2:', linkListToArray(test2), 'expect: [4,5]');

const test3 = trainingPlan(arrayToLinkList([1]), 1);
console.log('test3:', linkListToArray(test3), 'expect: [1]');

const test4 = trainingPlan(arrayToLinkList([1, 2, 3, 4, 5]), 5);
console.log('test4:', linkListToArray(test4), 'expect: [1,2,3,4,5]');

const test5 = trainingPlan(arrayToLinkList([9, 8, 7, 6, 5, 4]), 3);
console.log('test5:', linkListToArray(test5), 'expect: [6,5,4]');
