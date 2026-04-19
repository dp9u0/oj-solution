/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  var p1 = head,
    p2 = head,
    length = 0,
    mergeLength = 1,
    dummy = {
      next: head
    };
  while (p1) {
    length++;
    p1 = p1.next;
  }
  while (mergeLength < length) {
    let pre1 = dummy;
    p1 = pre1.next;
    pre2 = null;
    p2 = pre1.next;
    while (p1 && p2) {
      for (let i = 0; i < mergeLength && p2; i++) {
        pre2 = p2;
        p2 = p2.next;
      }
      let remain1 = mergeLength,
        remain2 = mergeLength;
      while (remain1 && remain2 && p2) {
        if (p1.val <= p2.val) {
          pre1.next = p1;
          p1 = p1.next;
          pre1 = pre1.next;
          remain1--;
        } else {
          pre2.next = p2.next;
          p2.next = pre1.next;
          pre1.next = p2;
          pre1 = pre1.next;
          p2 = pre2.next;
          remain2--;
        }
      }
      if (remain1 > 0) {
        while (remain1 !== 0 && p1) {
          pre1 = p1;
          p1 = p1.next;
          remain1--;
        }
        p2 = p1;
      } else if (remain2 > 0) {
        while (remain2 !== 0 && p2) {
          pre2 = p2;
          p2 = p2.next;
          remain2--;
        }
        p1 = p2;
        pre1 = pre2;
      }
    }
    mergeLength *= 2;
  }
  return dummy.next;
};

/**
// TEST:

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let {
  arrayToLinkList,
  linkListToArray
} = require("./utils/arrayToLinkList");

let head;
// head = arrayToLinkList([4, 2, 1, 3]);
// console.log(JSON.stringify(head));
// console.log(JSON.stringify(linkListToArray(sortList(head))));


head = arrayToLinkList([-1, 5, 3, 4, 0]);
console.log(JSON.stringify(head));
console.log(JSON.stringify(linkListToArray(sortList(head))));
*/