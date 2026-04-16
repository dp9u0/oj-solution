/*
 * @lc app=leetcode id=2924 lang=javascript
 *
 * [2924] Find Champion II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    const inDeg = new Array(n).fill(0);
    for (const [_, v] of edges) {
        inDeg[v]++;
    }
    let champ = -1;
    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) {
            if (champ !== -1) return -1;
            champ = i;
        }
    }
    return champ;
};
// @lc code=end

// TEST:
console.log(findChampion(3, [[0, 1], [1, 2]]));       // 0
console.log(findChampion(4, [[0, 2], [1, 3], [1, 2]])); // -1
console.log(findChampion(2, []));                       // -1
console.log(findChampion(1, []));                       // 0
