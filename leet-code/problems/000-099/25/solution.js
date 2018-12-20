/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let start = head;
  let end = head;
  let _k = k - 1;
  while (_k && end) {
    end = end.next;
    _k--;
  }
  while (end) {
    // reverse start end 定义的 group
    let values = [];
    let p = start;
    while (p !== end.next) {
      values.push(p.val);
      p = p.next;
    }
    p = start;
    while (p !== end.next) {
      p.val = values.pop();
      p = p.next;
    }
    // start end 前进到下一个 group
    _k = k - 1;
    start = end.next;
    end = start;
    while (_k-- && end) {
      end = end.next;
    }
  }
  return head;
};