/*
 * @lc app=leetcode id=2657 lang=javascript
 *
 * [2657] Find the Prefix Common Array of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const seenA = new Set(), seenB = new Set();
    const result = [];
    let common = 0;
    for (let i = 0; i < A.length; i++) {
        seenA.add(A[i]);
        seenB.add(B[i]);
        if (seenB.has(A[i])) common++;
        if (seenA.has(B[i]) && A[i] !== B[i]) common++;
        result.push(common);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(findThePrefixCommonArray([1,3,2,4], [3,1,2,4])); // [0,2,3,4]
console.log(findThePrefixCommonArray([2,3,1], [3,1,2]));     // [0,1,3]
