/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0, right = arr.length - k;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr.slice(left, left + k);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findClosestElements([1, 2, 3, 4, 5], 4, 3)));
// Expected: [1,2,3,4]

console.log(JSON.stringify(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1)));
// Expected: [1,1,2,3]

console.log(JSON.stringify(findClosestElements([1, 2, 3, 4, 5], 4, 6)));
// Expected: [2,3,4,5]
