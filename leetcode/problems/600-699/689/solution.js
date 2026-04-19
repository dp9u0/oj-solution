/*
 * @lc app=leetcode id=689 lang=javascript
 *
 * [689] Maximum Sum of 3 Non-Overlapping Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    const n = nums.length;
    const m = n - k + 1;

    // Compute sum of each length-k subarray
    const sums = new Int32Array(m);
    let windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += nums[i];
    sums[0] = windowSum;
    for (let i = 1; i < m; i++) {
        windowSum += nums[i + k - 1] - nums[i - 1];
        sums[i] = windowSum;
    }

    // left[i] = index of max sum in [0..i] (leftmost for lex smallest)
    const left = new Int32Array(m);
    left[0] = 0;
    for (let i = 1; i < m; i++) {
        left[i] = sums[i] > sums[left[i - 1]] ? i : left[i - 1];
    }

    // right[i] = index of max sum in [i..m-1] (leftmost for lex smallest)
    const right = new Int32Array(m);
    right[m - 1] = m - 1;
    for (let i = m - 2; i >= 0; i--) {
        right[i] = sums[i] >= sums[right[i + 1]] ? i : right[i + 1];
    }

    // Enumerate middle subarray starting at j
    let maxSum = 0;
    let result = [0, k, 2 * k];
    for (let j = k; j <= n - 2 * k; j++) {
        const l = left[j - k];
        const r = right[j + k];
        const total = sums[l] + sums[j] + sums[r];
        if (total > maxSum) {
            maxSum = total;
            result = [l, j, r];
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxSumOfThreeSubarrays([1,2,1,2,6,7,5,1], 2))); // [0,3,5]
console.log(JSON.stringify(maxSumOfThreeSubarrays([1,2,1,2,1,2,1,2,1], 2))); // [0,2,4]
console.log(JSON.stringify(maxSumOfThreeSubarrays([1,1,1,1,1,1], 1))); // [0,1,2]
console.log(JSON.stringify(maxSumOfThreeSubarrays([7,13,20,19,19,2,10,13,3,6,16,15,5,3,7,7,10,14,14,14], 3))); // check
