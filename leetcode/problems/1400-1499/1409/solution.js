/*
 * @lc app=leetcode id=1409 lang=javascript
 *
 * [1409] Queries on a Permutation With Key
 */

// @lc code=start
/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    const P = Array.from({ length: m }, (_, i) => i + 1);
    return queries.map(q => {
        const idx = P.indexOf(q);
        P.splice(idx, 1);
        P.unshift(q);
        return idx;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(processQueries([3,1,2,1], 5))); // [2,1,2,1]
console.log(JSON.stringify(processQueries([4,1,2,2], 4))); // [3,1,2,0]
