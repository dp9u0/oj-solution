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
var BSTIterator = function (root) {
    this.stack = [];
    this.nextNode = this.leftMost(root);
};

BSTIterator.prototype.leftMost = function (node) {
    if (!node) {
        return node;
    }
    while (node.left) {
        this.stack.push(node);
        node = node.left;
    }
    return node;
};


/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    let val = this.nextNode.val;
    if (this.nextNode.right) {
        this.nextNode = this.leftMost(this.nextNode.right);
    } else {
        this.nextNode = this.stack.pop();
    }
    return val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return !!this.nextNode;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
