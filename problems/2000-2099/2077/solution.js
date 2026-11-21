/*
 * @lc app=leetcode.cn id=2077 lang=javascript
 *
 * [2077] 殊途同归
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} corridors
 * @return {number}
 */
var numberOfPaths = function(n, corridors) {
    const WORDS = (n + 31) >> 5;
    const adj = Array.from({ length: n + 1 }, () => new Uint32Array(WORDS));
    for (const [a, b] of corridors) {
        adj[a][(b - 1) >> 5] |= 1 << ((b - 1) & 31);
        adj[b][(a - 1) >> 5] |= 1 << ((a - 1) & 31);
    }
    let total = 0;
    for (const [a, b] of corridors) {
        const A = adj[a], B = adj[b];
        let c = 0;
        for (let w = 0; w < WORDS; w++) {
            let x = A[w] & B[w];
            while (x) {
                x &= x - 1;
                c++;
            }
        }
        total += c;
    }
    return total / 3;
};
// @lc code=end

// TEST:
console.log(numberOfPaths(5, [[1,2],[5,2],[4,1],[2,4],[3,1],[3,4]])); // 2
console.log(numberOfPaths(4, [[1,2],[3,4]])); // 0
console.log(numberOfPaths(3, [[1,2],[2,3],[1,3]])); // 1
console.log(numberOfPaths(6, [[1,2],[2,3],[3,1],[4,5],[5,6],[6,4]])); // 2
console.log(numberOfPaths(2, [[1,2]])); // 0
