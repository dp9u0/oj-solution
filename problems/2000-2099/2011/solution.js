/*
 * @lc app=leetcode id=2011 lang=javascript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for (const op of operations) {
        x += op.includes('++') ? 1 : -1;
    }
    return x;
};
// @lc code=end

// TEST:
console.log(finalValueAfterOperations(["--X","X++","X++"])); // 1
console.log(finalValueAfterOperations(["++X","++X","X++"])); // 3
console.log(finalValueAfterOperations(["X++","++X","--X","X--"])); // 0
console.log(finalValueAfterOperations(["++X"])); // 1
console.log(finalValueAfterOperations(["--X"])); // -1
