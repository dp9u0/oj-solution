/*
 * @lc app=leetcode id=3219 lang=javascript
 *
 * [3219] Minimum Cost for Cutting Cake II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function(m, n, horizontalCut, verticalCut) {
    horizontalCut.sort((a, b) => b - a);
    verticalCut.sort((a, b) => b - a);

    let hSeg = 1, vSeg = 1;
    let i = 0, j = 0;
    let cost = 0;

    while (i < horizontalCut.length || j < verticalCut.length) {
        if (j === verticalCut.length || (i < horizontalCut.length && horizontalCut[i] >= verticalCut[j])) {
            cost += horizontalCut[i] * vSeg;
            hSeg++;
            i++;
        } else {
            cost += verticalCut[j] * hSeg;
            vSeg++;
            j++;
        }
    }

    return cost;
};
// @lc code=end

// TEST:
console.log(minimumCost(3, 2, [1, 3], [5])); // 13
console.log(minimumCost(2, 2, [7], [4])); // 15
console.log(minimumCost(1, 1, [], [])); // 0
console.log(minimumCost(3, 3, [1, 2], [1, 2])); // 11
console.log(minimumCost(2, 3, [5], [1, 2])); // 11
