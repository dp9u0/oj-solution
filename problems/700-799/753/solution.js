/*
 * @lc app=leetcode id=753 lang=javascript
 *
 * [753] Cracking the Safe
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
    if (n === 1) {
        let s = '';
        for (let i = 0; i < k; i++) s += i;
        return s;
    }

    // Hierholzer's algorithm on De Bruijn graph
    // Nodes: (n-1)-digit strings, Edges: n-digit passwords
    const total = Math.pow(k, n - 1);
    const visited = new Set();
    let result = '';

    const dfs = (node) => {
        for (let i = 0; i < k; i++) {
            const edge = node + i;
            if (!visited.has(edge)) {
                visited.add(edge);
                dfs(edge.slice(1));
                result += i;
            }
        }
    };

    const start = '0'.repeat(n - 1);
    dfs(start);
    return result + start;
};
// @lc code=end

// TEST:
console.log(crackSafe(1, 2)); // '10' or '01'
console.log(crackSafe(2, 2)); // '01100' or similar
console.log(crackSafe(1, 1)); // '0'
console.log(crackSafe(2, 3)); // length should be 9+1=10
console.log(crackSafe(3, 2)); // length should be 8+2=10