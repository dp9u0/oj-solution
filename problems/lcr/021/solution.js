/*
 * @lc app=leetcode.cn id=LCR 021 lang=javascript
 *
 * [LCR 021] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // dummy 哨兵节点，统一处理删除头结点的边界情况
  const dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;
  // fast 先走 n+1 步，使 fast 与 slow 之间保持 n+1 的间距
  // 这样 fast 到 null 时 slow 恰好指向待删节点的前驱
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  // fast 与 slow 同步前进
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  // 跳过待删节点
  slow.next = slow.next.next;
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
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

// 测试用例
// 基本场景：删除倒数第 2 个结点
const test1 = removeNthFromEnd(arrayToLinkList([1, 2, 3, 4, 5]), 2);
console.log('test1:', linkListToArray(test1), 'expect: [1,2,3,5]');

// 删除唯一的头结点
const test2 = removeNthFromEnd(arrayToLinkList([1]), 1);
console.log('test2:', linkListToArray(test2), 'expect: []');

// 删除尾结点
const test3 = removeNthFromEnd(arrayToLinkList([1, 2]), 1);
console.log('test3:', linkListToArray(test3), 'expect: [1]');

// 删除头结点（n 等于链表长度）
const test4 = removeNthFromEnd(arrayToLinkList([1, 2, 3]), 3);
console.log('test4:', linkListToArray(test4), 'expect: [2,3]');

// 删除中间结点
const test5 = removeNthFromEnd(arrayToLinkList([9, 8, 7, 6, 5]), 4);
console.log('test5:', linkListToArray(test5), 'expect: [9,7,6,5]');
