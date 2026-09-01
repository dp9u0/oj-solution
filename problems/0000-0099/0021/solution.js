/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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
  // console.log(JSON.stringify(preHead))
  return preHead.next || null;
};

let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

let l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

mergeTwoLists(l1, l2)