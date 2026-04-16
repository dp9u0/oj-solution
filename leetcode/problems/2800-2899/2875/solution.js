/*
 * @lc app=leetcode id=2875 lang=javascript
 *
 * [2875] Minimum Size Subarray in Infinite Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function(nums, target) {
    const total = nums.reduce((a, b) => a + b, 0);
    const n = nums.length;
    const full = Math.floor(target / total);
    const remainder = target % total;
    if (remainder === 0) return full * n;
    // double the array to handle wrap-around
    const doubled = nums.concat(nums);
    let minLen = Infinity;
    let sum = 0, left = 0;
    for (let right = 0; right < doubled.length; right++) {
        sum += doubled[right];
        while (sum > remainder) {
            sum -= doubled[left];
            left++;
        }
        if (sum === remainder) {
            minLen = Math.min(minLen, right - left + 1);
        }
    }
    if (minLen === Infinity) return -1;
    return full * n + minLen;
};
// @lc code=end

// TEST:
console.log(minSizeSubarray([1,2,3], 5)); // 2
console.log(minSizeSubarray([1,1,1,2,3], 4)); // 2
console.log(minSizeSubarray([2,4,6,8], 3)); // -1
