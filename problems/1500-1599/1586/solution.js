/*
 * @lc app=leetcode.cn id=1586 lang=javascript
 *
 * [1586] 二叉搜索树迭代器 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.arr = [];   // values already produced
    this.idx = -1;   // current pointer into arr
    let node = root;
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.idx + 1 < this.arr.length || this.stack.length > 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.idx++;
    if (this.idx < this.arr.length) return this.arr[this.idx]; // reuse after prev()
    const node = this.stack.pop();
    let c = node.right;
    while (c) {
        this.stack.push(c);
        c = c.left;
    }
    this.arr.push(node.val);
    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function() {
    return this.idx > 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function() {
    this.idx--;
    return this.arr[this.idx];
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const it = new BSTIterator(arrayToTree([7,3,15,null,null,9,20]));
console.log(it.next()); // 3
console.log(it.next()); // 7
console.log(it.prev()); // 3
console.log(it.next()); // 7
console.log(it.hasNext()); // true
console.log(it.next()); // 9
console.log(it.next()); // 15
console.log(it.next()); // 20
console.log(it.hasNext()); // false
console.log(it.hasPrev()); // true
console.log(it.prev()); // 15
console.log(it.prev()); // 9
