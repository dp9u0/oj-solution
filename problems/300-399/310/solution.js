/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    // 特殊情况处理
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    // 建立邻接表
    let adj = Array.from({length: n}, () => new Set());
    for (let [a, b] of edges) {
        adj[a].add(b);
        adj[b].add(a);
    }
    
    // 找到所有叶子节点（度为1的节点）
    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (adj[i].size === 1) {
            leaves.push(i);
        }
    }
    
    // 剩余节点数
    let remainNodes = n;
    
    // 不断删除叶子节点，直到剩下1或2个节点
    while (remainNodes > 2) {
        remainNodes -= leaves.length;
        let newLeaves = [];
        
        // 处理当前层的所有叶子节点
        for (let leaf of leaves) {
            // 获取叶子节点的邻居（只有一个）
            let neighbor = Array.from(adj[leaf])[0];
            // 从邻居的邻接表中删除当前叶子节点
            adj[neighbor].delete(leaf);
            // 如果邻居节点变成了新的叶子节点，加入下一轮
            if (adj[neighbor].size === 1) {
                newLeaves.push(neighbor);
            }
        }
        
        // 更新叶子节点列表
        leaves = newLeaves;
    }
    
    return leaves;
};
// @lc code=end
// TEST:
console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]])); // [1]
console.log(findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])); // [3, 4] 
console.log(findMinHeightTrees(1, [])); // [0]
console.log(findMinHeightTrees(2, [[0, 1]])); // [0, 1]
console.log(findMinHeightTrees(3, [[0, 1], [0, 2]])); // [0]
console.log(findMinHeightTrees(4, [[0, 1], [1, 2], [1, 3]])); // [1]
console.log(findMinHeightTrees(5, [[0, 1], [0, 2], [0, 3], [0, 4]])); // [0]
console.log(findMinHeightTrees(6, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]])); // [0]
console.log(findMinHeightTrees(7, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6]])); // [0]
console.log(findMinHeightTrees(8, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]])); // [0]



