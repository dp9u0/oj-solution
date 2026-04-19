/*
 * @lc app=leetcode id=3326 lang=javascript
 *
 * [3326] Minimum Division Operations to Make Array Non Decreasing
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let maxVal = 0;
    for (const x of nums) maxVal = Math.max(maxVal, x);

    // Sieve for smallest prime factor
    const spf = new Array(maxVal + 1).fill(0);
    for (let i = 2; i <= maxVal; i++) {
        if (spf[i] === 0) {
            for (let j = i; j <= maxVal; j += i) {
                if (spf[j] === 0) spf[j] = i;
            }
        }
    }

    let ops = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > nums[i + 1]) {
            const r = spf[nums[i]] || nums[i];
            if (r > nums[i + 1]) return -1;
            nums[i] = r;
            ops++;
        }
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(minOperations([25, 7]));       // 1
console.log(minOperations([7, 7, 6]));     // -1
console.log(minOperations([1, 1, 1, 1]));  // 0
console.log(minOperations([6, 10]));       // 0
console.log(minOperations([10, 6, 3]));    // 2
