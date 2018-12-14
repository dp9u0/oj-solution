/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  if (lists.length === 1) {
    return lists[0];
  }
  let length = lists.length;
  let mid = Math.floor(length / 2);
  let listsL = lists.splice(0, mid);
  return mergeTwoLists(mergeKLists(listsL), mergeKLists(lists));
};

var mergeTwoLists = function (l1, l2) {
  let preHead = current = {};
  while (l1 || l2) {
    current = current.next = {};
    if (l1 && (!l2 || l1.val <= l2.val)) {
      current.val = l1.val;
      l1 = l1.next;
    } else {
      current.val = l2.val;
      l2 = l2.next;
    }
  }
  return preHead.next || null;
};



let list = [1, 2, 3, 4, 5, 6];

console.log(list.splice(0, 2))
console.log(list)