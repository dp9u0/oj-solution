/** 
 * @param {number[]} voyage 
 * @return {ListNode}
 */
function arrayToLinkList(array) {
  let dummy = head = {
    next: null
  };
  for (let i = 0; i < array.length; i++) {
    head.next = {
      val: array[i],
      next: null
    }
    head = head.next;
  }
  return dummy.next;
}

function linkListToArray(head) {
  let array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  return array;
}

exports.arrayToLinkList = arrayToLinkList
exports.linkListToArray = linkListToArray