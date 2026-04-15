/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    if (!head) return null;
    const stack = [];
    let cur = head;
    while (cur) {
        if (cur.child) {
            if (cur.next) stack.push(cur.next);
            cur.next = cur.child;
            cur.child.prev = cur;
            cur.child = null;
        }
        if (!cur.next && stack.length) {
            cur.next = stack.pop();
            cur.next.prev = cur;
        }
        cur = cur.next;
    }
    return head;
};
// @lc code=end

// TEST:
// Helper to build multilevel doubly linked list from array
function buildList(arr) {
    if (!arr.length) return null;
    const nodes = arr.map(v => v !== null ? { val: v, prev: null, next: null, child: null } : null);
    // Build level by level using the serialization format
    // Simple: just build a flat list for basic test
    let head = nodes[0];
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] && i + 1 < nodes.length && nodes[i + 1]) {
            nodes[i].next = nodes[i + 1];
            nodes[i + 1].prev = nodes[i];
        }
    }
    return head;
}

function listToArray(head) {
    const res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

// Test: simple flat list
let h = buildList([1, 2, 3]);
let f = flatten(h);
console.log(listToArray(f)); // [1,2,3]

// Test: null
console.log(flatten(null)); // null

// Test: single node
let s = buildList([1]);
console.log(listToArray(flatten(s))); // [1]
