/*
 * @lc app=leetcode id=1981 lang=javascript
 *
 * [1981] Minimize the Difference Between Target and Chosen Elements
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function(mat, target) {
    let sums = new Set([0]);
    for (const row of mat) {
        const next = new Set();
        const unique = [...new Set(row)].sort((a, b) => a - b);
        for (const s of sums) {
            for (const v of unique) {
                next.add(s + v);
            }
        }
        sums = next;
    }
    let result = Infinity;
    for (const s of sums) {
        result = Math.min(result, Math.abs(s - target));
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minimizeTheDifference([[1,2,3],[4,5,6],[7,8,9]], 13)); // 0
console.log(minimizeTheDifference([[1],[2],[3]], 100)); // 94
console.log(minimizeTheDifference([[1,2,9,8,7]], 6)); // 1
console.log(minimizeTheDifference([[1,2,3],[4,5,6]], 10)); // 0 (1+5+4? wait 2 rows only)
console.log(minimizeTheDifference([[5]], 3)); // 2
