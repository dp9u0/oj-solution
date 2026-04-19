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
var insertionSortList = function (head) {
    if (!head) return head;
    let preHead = { next: null, };
    let p1 = head;
    while (p1) {
        const { next } = p1; // 下一个插入的node
        let p2 = preHead; // 插入位置
        while (p2.next && p2.next.val < p1.val) {
            p2 = p2.next;
        }
        p1.next = p2.next;
        p2.next = p1;
        p1 = next;
    }
    return preHead.next;
};

// TEST:
let { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
let head = arrayToLinkList([4, 2, 1, 3]);
head = insertionSortList(head);
console.log(linkListToArray(head));


head = arrayToLinkList([4, 3, 2, 1]);
head = insertionSortList(head);
console.log(linkListToArray(head));