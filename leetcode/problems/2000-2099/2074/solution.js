/*
 * @lc app=leetcode id=2074 lang=javascript
 *
 * [2074] Reverse Nodes in Even Length Groups
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
 * @return {ListNode}
 */
var reverseEvenLengthGroups = function(head) {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let groupSize = 1;

    while (prev.next) {
        // Count actual group size
        let count = 0;
        let curr = prev.next;
        while (curr && count < groupSize) {
            count++;
            curr = curr.next;
        }

        if (count % 2 === 0) {
            // Reverse the group
            const groupTail = prev.next;
            let node = prev.next;
            let newHead = null;
            for (let i = 0; i < count; i++) {
                const next = node.next;
                node.next = newHead;
                newHead = node;
                node = next;
            }
            groupTail.next = node;
            prev.next = newHead;
            prev = groupTail;
        } else {
            // Skip to end of group
            let node = prev.next;
            for (let i = 0; i < count; i++) {
                prev = node;
                node = node.next;
            }
        }

        groupSize++;
    }

    return dummy.next;
};
// @lc code=end

// TEST:
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const { arrayToLinkList } = require('./utils/arrayToLinkList');

const toArray = (head) => {
    const arr = [];
    while (head) { arr.push(head.val); head = head.next; }
    return arr;
};

console.log(JSON.stringify(toArray(reverseEvenLengthGroups(arrayToLinkList([5,2,6,3,9,1,7,3,8,4])))));
// [5,6,2,3,9,1,4,8,3,7]
console.log(JSON.stringify(toArray(reverseEvenLengthGroups(arrayToLinkList([1,1,0,6])))));
// [1,0,1,6]
console.log(JSON.stringify(toArray(reverseEvenLengthGroups(arrayToLinkList([1,1,0,6,5])))));
// [1,0,1,5,6]
console.log(JSON.stringify(toArray(reverseEvenLengthGroups(arrayToLinkList([1])))));
// [1]
console.log(JSON.stringify(toArray(reverseEvenLengthGroups(arrayToLinkList([1,2])))));
// [1,2]
