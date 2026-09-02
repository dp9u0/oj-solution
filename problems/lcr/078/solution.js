/*
 * @lc app=leetcode.cn id=LCR 078 lang=javascript
 *
 * [LCR 078] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const heap = []; // min-heap by node.val
  const push = (node) => {
    heap.push(node);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p].val <= heap[i].val) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let j = 0;
      const n = heap.length;
      for (;;) {
        const l = 2 * j + 1;
        const r = 2 * j + 2;
        let s = j;
        if (l < n && heap[l].val < heap[s].val) s = l;
        if (r < n && heap[r].val < heap[s].val) s = r;
        if (s === j) break;
        [heap[j], heap[s]] = [heap[s], heap[j]];
        j = s;
      }
    }
    return top;
  };

  for (const list of lists) {
    if (list) push(list);
  }

  const dummy = { val: 0, next: null };
  let tail = dummy;
  while (heap.length) {
    const node = pop();
    tail.next = node;
    tail = node;
    if (node.next) push(node.next);
  }
  return dummy.next;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');

const merge = (arrays) => linkListToArray(mergeKLists(arrays.map(a => arrayToLinkList(a))));

assert.deepStrictEqual(merge([[1, 4, 5], [1, 3, 4], [2, 6]]), [1, 1, 2, 3, 4, 4, 5, 6]);
assert.deepStrictEqual(merge([]), []);
assert.deepStrictEqual(merge([[]]), []);
// single list
assert.deepStrictEqual(merge([[1, 2, 3]]), [1, 2, 3]);
// singletons
assert.deepStrictEqual(merge([[2], [1], [3]]), [1, 2, 3]);
// empties mixed with data
assert.deepStrictEqual(merge([[1], [], [2, 5], [], [3, 4]]), [1, 2, 3, 4, 5]);
// negatives
assert.deepStrictEqual(merge([[-5, 0], [-10, -1], [5]]), [-10, -5, -1, 0, 5]);
// interleaved equal values
assert.deepStrictEqual(merge([[1, 1, 2], [1, 1], [2, 2]]), [1, 1, 1, 1, 2, 2, 2]);

console.log('All tests passed!');
console.log('merge([[1,4,5],[1,3,4],[2,6]]) =', JSON.stringify(merge([[1, 4, 5], [1, 3, 4], [2, 6]])));
