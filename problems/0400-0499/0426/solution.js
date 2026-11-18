/*
 * @lc app=leetcode.cn id=426 lang=javascript
 *
 * [426] 将二叉搜索树转化为排序的双向链表
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function(root) {
    if (!root) return null;

    let first = null, prev = null;
    const dfs = node => {
        if (!node) return;
        dfs(node.left);
        if (prev) {
            prev.right = node;
            node.left = prev;
        } else {
            first = node; // smallest, visited first in-order
        }
        prev = node;
        dfs(node.right);
    };
    dfs(root);

    // close the ring
    first.left = prev;
    prev.right = first;
    return first;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const check = arr => {
    const first = treeToDoublyList(arrayToTree([...arr]));
    if (!first) return [];
    const out = [];
    let cur = first;
    do { out.push(cur.val); cur = cur.right; } while (cur !== first);
    const tail = first.left;
    if (tail.right !== first) return 'broken fwd closure';
    // backward walk must reproduce the reverse
    const back = [];
    cur = tail;
    do { back.push(cur.val); cur = cur.left; } while (cur !== tail);
    return out.join(',') + '|' + back.join(',');
};

console.log(check([4, 2, 5, 1, 3])); // 1,2,3,4,5|5,4,3,2,1
console.log(check([2, 1, 3])); // 1,2,3|3,2,1
console.log(check([])); // (empty)
console.log(check([1])); // 1|1
console.log(check([3, 1, 5, null, 2, 4, 6])); // 1,2,3,4,5,6|6,5,4,3,2,1
