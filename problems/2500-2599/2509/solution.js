/*
 * @lc app=leetcode id=2509 lang=javascript
 *
 * [2509] Cycle Length Queries in a Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var cycleLengthQueries = function(n, queries) {
    return queries.map(([a, b]) => {
        let dist = 0;
        while (a !== b) {
            if (a > b) { a >>= 1; }
            else { b >>= 1; }
            dist++;
        }
        return dist + 1;
    });
};
// @lc code=end

// TEST:
console.log(cycleLengthQueries(3, [[5,3],[4,7],[2,3]])); // [4,5,3]
console.log(cycleLengthQueries(2, [[1,2]])); // [2]
console.log(cycleLengthQueries(3, [[1,7]])); // [4]
console.log(cycleLengthQueries(3, [[4,5]])); // [3]
console.log(cycleLengthQueries(3, [[6,7]])); // [5]
