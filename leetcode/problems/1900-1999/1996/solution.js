/*
 * @lc app=leetcode id=1996 lang=javascript
 *
 * [1996] The Number of Weak Characters in the Game
 */

// @lc code=start
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    properties.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    let maxDefense = 0;
    let count = 0;
    for (const [, defense] of properties) {
        if (defense < maxDefense) {
            count++;
        } else {
            maxDefense = defense;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(numberOfWeakCharacters([[5,5],[6,3],[3,6]])); // 0
console.log(numberOfWeakCharacters([[2,2],[3,3]])); // 1
console.log(numberOfWeakCharacters([[1,5],[10,4],[4,3]])); // 1
console.log(numberOfWeakCharacters([[5,5],[6,3],[3,6],[4,5]])); // 0? let's see
