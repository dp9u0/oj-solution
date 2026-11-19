/*
 * @lc app=leetcode.cn id=708 lang=javascript
 *
 * [708] 循环有序列表的插入
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */
var insert = function(head, insertVal) {
    const node = { val: insertVal, next: null };
    if (!head) {
        node.next = node;
        return node;
    }
    let cur = head;
    while (true) {
        const nxt = cur.next;
        // normal slot, or the seam between the max and the min
        if ((cur.val <= insertVal && insertVal <= nxt.val) ||
            (cur.val > nxt.val && (insertVal >= cur.val || insertVal <= nxt.val))) {
            break;
        }
        cur = nxt;
        if (cur === head) break; // full circle (all-equal list) -> right after head
    }
    node.next = cur.next;
    cur.next = node;
    return head;
};
// @lc code=end

// TEST:
const build = arr => {
    if (!arr.length) return null;
    const nodes = arr.map(v => ({ val: v, next: null }));
    for (let i = 0; i < arr.length; i++) nodes[i].next = nodes[(i + 1) % arr.length];
    return nodes[0];
};
const toArr = (head, count) => {
    const out = [];
    let cur = head;
    for (let i = 0; i < count; i++) { out.push(cur.val); cur = cur.next; }
    return out;
};

console.log(JSON.stringify(toArr(insert(build([3, 4, 1]), 2), 4))); // [3,4,1,2]
console.log(JSON.stringify(toArr(insert(build([1, 3, 5]), 0), 4))); // [1,3,5,0]
console.log(JSON.stringify(toArr(insert(build([]), 4), 1))); // [4]
console.log(JSON.stringify(toArr(insert(build([1]), 0), 2))); // [1,0]
console.log(JSON.stringify(toArr(insert(build([1, 1, 2]), 1), 4))); // [1,1,1,2]
console.log(JSON.stringify(toArr(insert(build([5, 5, 5]), 3), 4))); // [5,5,3,5] (any slot valid)
