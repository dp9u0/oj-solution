/*
 * @lc app=leetcode id=2845 lang=javascript
 *
 * [2845] Count of Interesting Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    const count = new Map();
    count.set(0, 1);
    let prefix = 0, ans = 0;
    for (const num of nums) {
        if (num % modulo === k) prefix++;
        const mod = prefix % modulo;
        const target = (mod - k + modulo) % modulo;
        ans += count.get(target) || 0;
        count.set(mod, (count.get(mod) || 0) + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countInterestingSubarrays([3,2,4], 2, 1)); // 3
console.log(countInterestingSubarrays([3,1,9,6], 3, 0)); // 2
console.log(countInterestingSubarrays([1,2,3], 1, 0)); // 6
