/*
 * @lc app=leetcode.cn id=1265 lang=javascript
 *
 * [1265] 逆序打印不可变链表
 */

// @lc code=start
/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function(head) {
    if (!head) return;
    printLinkedListInReverse(head.getNext());
    head.printValue();
};
// @lc code=end

// TEST:
function ImmutableListNode(val, next) {
    this.printValue = function() { console.log(val); };
    this.getNext = () => next;
}
const build = (vals) => {
    let head = null;
    for (let i = vals.length - 1; i >= 0; i--) head = new ImmutableListNode(vals[i], head);
    return head;
};
printLinkedListInReverse(build([1,2,3,4])); // 4 3 2 1
printLinkedListInReverse(build([0,-4,-1,3,-5])); // -5 3 -1 -4 0
printLinkedListInReverse(build([7])); // 7
