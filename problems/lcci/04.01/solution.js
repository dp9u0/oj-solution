/*
 * @lc app=leetcode.cn id=面试题 04.01 lang=javascript
 *
 * [面试题 04.01] 节点间通路
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
var findWhetherExistsPath = function(n, graph, start, target) {
    if (start === target) return true;
    // 邻接表
    const adj = Array.from({ length: n }, () => []);
    for (const edge of graph) adj[edge[0]].push(edge[1]);
    const visited = new Uint8Array(n);
    const queue = [start];
    visited[start] = 1;
    for (let head = 0; head < queue.length; head++) {
        const u = queue[head];
        for (const v of adj[u]) {
            if (v === target) return true;
            if (!visited[v]) {
                visited[v] = 1;
                queue.push(v);
            }
        }
    }
    return false;
};
// @lc code=end

// TEST:
console.log(findWhetherExistsPath(3, [[0, 1], [0, 2], [1, 2], [1, 2]], 0, 2) === true);
console.log(findWhetherExistsPath(5, [[0, 1], [0, 2], [0, 4], [0, 4], [0, 1], [1, 3], [1, 4], [1, 3], [2, 3], [3, 4]], 0, 4) === true);
console.log(findWhetherExistsPath(3, [[1, 2]], 0, 2) === false);
console.log(findWhetherExistsPath(3, [[0, 1]], 1, 0) === false); // 有向边不反向
console.log(findWhetherExistsPath(3, [], 1, 1) === true); // 起点即终点
console.log(findWhetherExistsPath(2, [[0, 0]], 0, 1) === false); // 仅自环
