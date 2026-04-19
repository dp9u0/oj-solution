/*
 * @lc app=leetcode id=1838 lang=javascript
 *
 * [1838] Frequency of the Most Frequent Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0, windowSum = 0, maxFreq = 0;

    for (let right = 0; right < nums.length; right++) {
        windowSum += nums[right];

        while ((right - left + 1) * nums[right] - windowSum > k) {
            windowSum -= nums[left];
            left++;
        }

        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return maxFreq;
};
// @lc code=end

// TEST:
console.log(maxFrequency([1, 2, 4], 5));
// Expected: 3

console.log(maxFrequency([1, 4, 8, 13], 5));
// Expected: 2

console.log(maxFrequency([3, 9, 6], 2));
// Expected: 1
