/*
 * @lc app=leetcode id=2948 lang=javascript
 *
 * [2948] Make Lexicographically Smallest Array by Swapping Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    let n = nums.length;
    let sorted = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
    let result = new Array(n);
    let i = 0;
    while (i < n) {
        let j = i;
        let indices = [], values = [];
        while (j < n) {
            indices.push(sorted[j][1]);
            values.push(sorted[j][0]);
            if (j + 1 < n && sorted[j + 1][0] - sorted[j][0] <= limit) {
                j++;
            } else {
                break;
            }
        }
        indices.sort((a, b) => a - b);
        for (let k = 0; k < indices.length; k++) {
            result[indices[k]] = values[k];
        }
        i = j + 1;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(lexicographicallySmallestArray([1,5,3,9,8], 2))); // [1,3,5,8,9]
console.log(JSON.stringify(lexicographicallySmallestArray([1,7,6,18,2,1], 3))); // [1,6,7,18,1,2]
console.log(JSON.stringify(lexicographicallySmallestArray([1,7,28,19,10], 3))); // [1,7,28,19,10]
