/*
 * @lc app=leetcode id=2685 lang=javascript
 *
 * [2685] Count the Number of Complete Components
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = new Array(n).fill(0);
    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    };
    const union = (x, y) => {
        const px = find(x), py = find(y);
        if (px === py) return;
        if (rank[px] < rank[py]) parent[px] = py;
        else if (rank[px] > rank[py]) parent[py] = px;
        else { parent[py] = px; rank[px]++; }
    };

    for (const [a, b] of edges) union(a, b);

    const nodeCount = new Array(n).fill(0);
    const edgeCount = new Array(n).fill(0);
    for (let i = 0; i < n; i++) nodeCount[find(i)]++;
    for (const [a, b] of edges) edgeCount[find(a)]++;

    let result = 0;
    for (let i = 0; i < n; i++) {
        if (find(i) === i && edgeCount[i] === nodeCount[i] * (nodeCount[i] - 1) / 2) {
            result++;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countCompleteComponents(6, [[0,1],[0,2],[1,2],[3,4]]));      // 3
console.log(countCompleteComponents(6, [[0,1],[0,2],[1,2],[3,4],[3,5]])); // 1
console.log(countCompleteComponents(3, []));                               // 3
