/*
 * @lc app=leetcode id=382 lang=javascript
 *
 * [382] Linked List Random Node
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
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let res = this.head.val;
  let node = this.head.next;
  let i = 2;
  while (node) {
    if (Math.floor(Math.random() * i) === 0) {
      res = node.val;
    }
    node = node.next;
    i++;
  }
  return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end

// TEST:
const { arrayToLinkList } = require('./utils/arrayToLinkList');
let sol = new Solution(arrayToLinkList([1, 2, 3]));
console.log(sol.getRandom()); // 1 or 2 or 3
console.log(sol.getRandom()); // 1 or 2 or 3
console.log(sol.getRandom()); // 1 or 2 or 3
