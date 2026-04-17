/*
 * @lc app=leetcode id=1131 lang=javascript
 *
 * [1131] Maximum of Absolute Value Expression
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    const n = arr1.length;
    let ans = 0;
    for (let s1 = -1; s1 <= 1; s1 += 2) {
        for (let s2 = -1; s2 <= 1; s2 += 2) {
            for (let s3 = -1; s3 <= 1; s3 += 2) {
                let maxVal = -Infinity, minVal = Infinity;
                for (let i = 0; i < n; i++) {
                    const val = s1 * arr1[i] + s2 * arr2[i] + s3 * i;
                    if (val > maxVal) maxVal = val;
                    if (val < minVal) minVal = val;
                }
                ans = Math.max(ans, maxVal - minVal);
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxAbsValExpr([1,2,3,4], [-1,4,5,6])); // 13
console.log(maxAbsValExpr([1,-2,-5,0,10], [0,-2,-1,-7,-4])); // 20
console.log(maxAbsValExpr([1,1], [1,1])); // 1
console.log(maxAbsValExpr([-1,1], [-1,1])); // 4
console.log(maxAbsValExpr([0,0,0], [0,0,0])); // 2
