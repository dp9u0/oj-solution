/*
 * @lc app=leetcode id=1007 lang=javascript
 *
 * [1007] Minimum Domino Rotations For Equal Row
 */

// @lc code=start
/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    const n = tops.length;
    let result = Infinity;

    for (let target = 1; target <= 6; target++) {
        let topRotations = 0;
        let bottomRotations = 0;
        let valid = true;

        for (let i = 0; i < n; i++) {
            if (tops[i] !== target && bottoms[i] !== target) {
                valid = false;
                break;
            }
            if (tops[i] !== target) topRotations++;
            if (bottoms[i] !== target) bottomRotations++;
        }

        if (valid) {
            result = Math.min(result, topRotations, bottomRotations);
        }
    }

    return result === Infinity ? -1 : result;
};
// @lc code=end

// TEST:
console.log(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2])); // 2
console.log(minDominoRotations([3,5,1,2,3], [3,6,3,3,4])); // -1
console.log(minDominoRotations([1,1,1,1], [1,1,1,1])); // 0
