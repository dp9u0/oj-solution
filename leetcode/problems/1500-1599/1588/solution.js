/*
 * @lc app=leetcode id=1588 lang=javascript
 *
 * [1588] Sum of All Odd Length Subarrays
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    const n = arr.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        const left = i + 1;
        const right = n - i;
        // Number of ways to pick odd-length subarrays containing arr[i]
        const count = Math.ceil(left / 2) * Math.ceil(right / 2)
                    + Math.floor(left / 2) * Math.floor(right / 2);
        sum += arr[i] * count;
    }

    return sum;
};
// @lc code=end

// TEST:
console.log(sumOddLengthSubarrays([1,4,2,5,3])); // 58
console.log(sumOddLengthSubarrays([1,2]));       // 3
console.log(sumOddLengthSubarrays([10,11,12]));  // 66
