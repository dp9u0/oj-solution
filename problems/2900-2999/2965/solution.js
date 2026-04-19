/*
 * @lc app=leetcode id=2965 lang=javascript
 *
 * [2965] Find Missing and Repeated Values
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length;
    const total = n * n;
    const count = new Array(total + 1).fill(0);
    for (const row of grid) {
        for (const val of row) count[val]++;
    }
    let repeated = 0, missing = 0;
    for (let i = 1; i <= total; i++) {
        if (count[i] === 2) repeated = i;
        if (count[i] === 0) missing = i;
    }
    return [repeated, missing];
};
// @lc code=end

// TEST:
console.log(findMissingAndRepeatedValues([[1,3],[2,2]]));            // [2,4]
console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]])); // [9,5]
