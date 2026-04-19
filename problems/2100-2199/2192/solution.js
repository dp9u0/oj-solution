/*
 * @lc app=leetcode id=2192 lang=javascript
 *
 * [2192] All Ancestors of a Node in a Directed Acyclic Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    const revAdj = Array.from({ length: n }, () => []);
    for (const [from, to] of edges) {
        revAdj[to].push(from);
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        const visited = new Set();
        const queue = [];
        for (const nb of revAdj[i]) {
            visited.add(nb);
            queue.push(nb);
        }
        let front = 0;
        while (front < queue.length) {
            const node = queue[front++];
            for (const nb of revAdj[node]) {
                if (!visited.has(nb)) {
                    visited.add(nb);
                    queue.push(nb);
                }
            }
        }
        result.push([...visited].sort((a, b) => a - b));
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getAncestors(8, [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]])));
// [[],[ ],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]
console.log(JSON.stringify(getAncestors(5, [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]])));
// [[],[0],[0,1],[0,1,2],[0,1,2,3]]
console.log(JSON.stringify(getAncestors(3, [[1,2],[0,2]])));
// [[],[ ],[0,1]]
console.log(JSON.stringify(getAncestors(2, [])));
// [[],[]]
console.log(JSON.stringify(getAncestors(4, [[0,1],[1,2],[2,3]])));
// [[],[0],[0,1],[0,1,2]]
