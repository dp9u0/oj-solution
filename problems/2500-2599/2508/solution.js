/*
 * @lc app=leetcode id=2508 lang=javascript
 *
 * [2508] Add Edges to Make Degrees of All Nodes Even
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var isPossible = function(n, edges) {
    const deg = new Array(n + 1).fill(0);
    const has = new Set();
    for (const [a, b] of edges) {
        deg[a]++; deg[b]++;
        const key = Math.min(a, b) + ',' + Math.max(a, b);
        has.add(key);
    }

    const odd = [];
    for (let i = 1; i <= n; i++) {
        if (deg[i] % 2 === 1) odd.push(i);
    }

    if (odd.length === 0) return true;
    if (odd.length > 4) return false;

    const exists = (a, b) => has.has(Math.min(a, b) + ',' + Math.max(a, b));

    if (odd.length === 2) {
        const [a, b] = odd;
        if (!exists(a, b)) return true;
        for (let c = 1; c <= n; c++) {
            if (c !== a && c !== b && !exists(a, c) && !exists(b, c)) return true;
        }
        return false;
    }

    // odd.length === 4
    const [a, b, c, d] = odd;
    if (!exists(a, b) && !exists(c, d)) return true;
    if (!exists(a, c) && !exists(b, d)) return true;
    if (!exists(a, d) && !exists(b, c)) return true;
    return false;
};
// @lc code=end

// TEST:
console.log(isPossible(5, [[1,2],[2,3],[3,4],[4,2],[1,4],[2,5]]) === true);
console.log(isPossible(4, [[1,2],[3,4]]) === true);
console.log(isPossible(4, [[1,2],[1,3],[1,4]]) === false);
console.log(isPossible(3, [[1,2],[2,3]]) === true);
console.log(isPossible(4, [[1,2],[2,3],[3,4]]) === true);
