/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return head;
  let p1 = head;
  let middle = middleNode(head); // 查找中间节点
  let p2 = middle.next;
  middle.next = null; // 拆成两部分
  p2 = reverseList(p2); // 反转第二部分
  // 合并两部分
  while (p2) {
    const p1Next = p1.next;
    const p2Next = p2.next;
    p1.next = p2;
    p2.next = p1Next;
    p1 = p1Next;
    p2 = p2Next;
  }
  return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let first = second = head;
  while (first && first.next) {
    [first, second] = [first.next.next, second.next];
  }
  return second;
};

/**
 * recursive 
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head, newHead = null) => {
  if (!head) {
    return newHead;
  }
  let next = head.next;
  head.next = newHead;
  return reverseList(next, head);
}

// TEST:
const { arrayToLinkList, linkListToArray } = require("./utils/arrayToLinkList");
console.log(linkListToArray(reorderList(arrayToLinkList([1, 2, 3, 4]))));
console.log(linkListToArray(reorderList(arrayToLinkList([1, 2, 3, 4, 5]))));
console.log(linkListToArray(reorderList(arrayToLinkList([]))));