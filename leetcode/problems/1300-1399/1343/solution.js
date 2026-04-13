/*
 * @lc app=leetcode id=1343 lang=javascript
 *
 * [1343] Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    const target = k * threshold;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += arr[i];

    let result = sum >= target ? 1 : 0;
    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        if (sum >= target) result++;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)); // 3
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)); // 6
console.log(numOfSubarrays([1, 1, 1], 1, 1)); // 3
console.log(numOfSubarrays([1, 2, 3], 3, 3)); // 0
