/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);

    let count = 1;
    let end = pairs[0][1];

    for (let i = 1; i < pairs.length; i++) {
        if (pairs[i][0] > end) {
            count++;
            end = pairs[i][1];
        }
    }

    return count;
};
// @lc code=end

// TEST:
console.log(findLongestChain([[1,2],[2,3],[3,4]])); // 2
console.log(findLongestChain([[1,2],[7,8],[4,5]])); // 3
