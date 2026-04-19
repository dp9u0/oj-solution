/*
 * @lc app=leetcode id=2275 lang=javascript
 *
 * [2275] Largest Combination With Bitwise AND Greater Than Zero
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let maxCount = 0;
    for (let bit = 0; bit < 30; bit++) {
        let count = 0;
        for (const x of candidates) {
            if (x & (1 << bit)) count++;
        }
        if (count > maxCount) maxCount = count;
    }
    return maxCount;
};
// @lc code=end

// TEST:
console.log(largestCombination([16,17,71,62,12,24,14])); // 4
console.log(largestCombination([8,8])); // 2
console.log(largestCombination([1,2,3])); // 2
