/*
 * @lc app=leetcode id=1483 lang=javascript
 *
 * [1483] Kth Ancestor of a Tree Node
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function(n, parent) {
    const LOG = Math.floor(Math.log2(n)) + 1;
    this.up = Array.from({ length: n }, () => new Int32Array(LOG).fill(-1));

    for (let i = 0; i < n; i++) this.up[i][0] = parent[i];

    for (let j = 1; j < LOG; j++) {
        for (let i = 0; i < n; i++) {
            const mid = this.up[i][j - 1];
            if (mid !== -1) this.up[i][j] = this.up[mid][j - 1];
        }
    }
};

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function(node, k) {
    let cur = node;
    let j = 0;
    while (k > 0 && cur !== -1) {
        if (k & 1) cur = this.up[cur][j];
        k >>= 1;
        j++;
    }
    return cur;
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
// @lc code=end

// TEST:
const t = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
console.log(t.getKthAncestor(3, 1)); // 1
console.log(t.getKthAncestor(5, 2)); // 0
console.log(t.getKthAncestor(6, 3)); // -1
console.log(t.getKthAncestor(0, 1)); // -1
console.log(t.getKthAncestor(3, 2)); // 0
