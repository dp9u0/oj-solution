/*
 * @lc app=leetcode id=2097 lang=javascript
 *
 * [2097] Valid Arrangement of Pairs
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function(pairs) {
    const adj = new Map();
    const deg = new Map();

    for (const [u, v] of pairs) {
        if (!adj.has(u)) adj.set(u, []);
        adj.get(u).push(v);
        deg.set(u, (deg.get(u) || 0) + 1);
        deg.set(v, (deg.get(v) || 0) - 1);
    }

    let start = pairs[0][0];
    for (const [node, d] of deg) {
        if (d === 1) { start = node; break; }
    }

    const result = [];
    const stack = [start];
    while (stack.length > 0) {
        const u = stack[stack.length - 1];
        const edges = adj.get(u);
        if (edges && edges.length > 0) {
            stack.push(edges.pop());
        } else {
            result.push(stack.pop());
        }
    }

    result.reverse();
    const ans = [];
    for (let i = 0; i < result.length - 1; i++) {
        ans.push([result[i], result[i + 1]]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(validArrangement([[5,1],[4,5],[11,9],[9,4]])));
console.log(JSON.stringify(validArrangement([[1,3],[3,2],[2,1]])));
console.log(JSON.stringify(validArrangement([[1,2],[1,3],[2,1]])));
console.log(JSON.stringify(validArrangement([[1,2]])));
console.log(JSON.stringify(validArrangement([[0,1],[1,2],[2,0]])));
