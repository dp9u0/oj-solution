/*
 * @lc app=leetcode id=2178 lang=javascript
 *
 * [2178] Maximum Split of Positive Even Integers
 */

// @lc code=start
/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2 !== 0) return [];

    const result = [];
    let next = 2;
    while (finalSum >= next) {
        result.push(next);
        finalSum -= next;
        next += 2;
    }
    // Add remaining to the last element
    result[result.length - 1] += finalSum;
    return result;
};
// @lc code=end

// TEST:
console.log(maximumEvenSplit(12)); // [2,4,6] or similar
console.log(maximumEvenSplit(7)); // []
console.log(maximumEvenSplit(28)); // 4 elements summing to 28
console.log(maximumEvenSplit(2)); // [2]
console.log(maximumEvenSplit(6)); // [2,4] or [6]
