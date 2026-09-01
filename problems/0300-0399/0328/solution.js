/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return head;
  let even = head;
  let odd = head.next;
  let oddHead = odd;
  let evenTail = even;
  while (even) {
    evenTail = even;
    even.next = odd ? odd.next : null;
    even = even.next;
    odd && (odd.next = even ? even.next : null);
    odd && (odd = odd.next);
  }
  evenTail.next = oddHead;
  return head;
};

// TEST:
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function print(node) {
  let result = '';
  while (node) {
    result += `${node.val}->`;
    node = node.next;
  }
  console.log(result + "NULL");
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("--------------before--------------")
print(head);
oddEvenList(head);
console.log("--------------after--------------")
print(head);

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

console.log("--------------before--------------")
print(head);
oddEvenList(head);
console.log("--------------after--------------")
print(head);