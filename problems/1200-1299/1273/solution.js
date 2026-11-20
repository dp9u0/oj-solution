/*
 * @lc app=leetcode.cn id=1273 lang=javascript
 *
 * [1273] 删除树节点
 */

// @lc code=start
/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
var deleteTreeNodes = function(nodes, parent, value) {
    const children = Array.from({ length: nodes }, () => []);
    for (let i = 1; i < nodes; i++) children[parent[i]].push(i);

    // BFS preorder; reversed = children before parents
    const order = [0];
    for (let qi = 0; qi < order.length; qi++) {
        for (const c of children[order[qi]]) order.push(c);
    }

    const sum = new Array(nodes), cnt = new Array(nodes);
    for (let t = order.length - 1; t >= 0; t--) {
        const u = order[t];
        let s = value[u], c = 1;
        for (const v of children[u]) {
            s += sum[v];
            c += cnt[v];
        }
        if (s === 0) c = 0; // whole subtree pruned, prunes propagate upward
        sum[u] = s;
        cnt[u] = c;
    }
    return cnt[0];
};
// @lc code=end

// TEST:
console.log(deleteTreeNodes(7, [-1,0,0,1,2,2,2], [1,-2,4,0,-2,-1,-1])); // 2
console.log(deleteTreeNodes(7, [-1,0,0,1,2,2,2], [1,-2,4,0,-2,-1,-2])); // 6
console.log(deleteTreeNodes(5, [-1,0,1,0,0], [-672,441,18,728,378])); // 5
console.log(deleteTreeNodes(5, [-1,0,0,1,1], [-686,-842,616,-739,-746])); // 5
