/*
 * @lc app=leetcode id=2856 lang=javascript
 *
 * [2856] Minimum Array Length After Pair Removals
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minLengthAfterRemovals = function(nums) {
    const n = nums.length;
    let maxFreq = 0;
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && nums[j] === nums[i]) j++;
        maxFreq = Math.max(maxFreq, j - i);
        i = j;
    }
    if (maxFreq > n - maxFreq) return 2 * maxFreq - n;
    return n % 2;
};
// @lc code=end

// TEST:
console.log(minLengthAfterRemovals([1,2,3,4]));              // 0
console.log(minLengthAfterRemovals([1,1,2,2,3,3]));          // 0
console.log(minLengthAfterRemovals([1000000000,1000000000])); // 2
console.log(minLengthAfterRemovals([2,3,4,4,4]));             // 1
