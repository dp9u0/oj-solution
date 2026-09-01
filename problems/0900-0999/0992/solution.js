/*
 * @lc app=leetcode id=992 lang=javascript
 *
 * [992] Subarrays with K Different Integers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    const atMost = (K) => {
        const count = new Map();
        let left = 0, distinct = 0, result = 0;
        for (let right = 0; right < nums.length; right++) {
            const c = count.get(nums[right]) || 0;
            if (c === 0) distinct++;
            count.set(nums[right], c + 1);
            while (distinct > K) {
                count.set(nums[left], count.get(nums[left]) - 1);
                if (count.get(nums[left]) === 0) distinct--;
                left++;
            }
            result += right - left + 1;
        }
        return result;
    };
    return atMost(k) - atMost(k - 1);
};
// @lc code=end

// TEST:
console.log(subarraysWithKDistinct([1,2,1,2,3], 2)); // 7
console.log(subarraysWithKDistinct([1,2,1,3,4], 3)); // 3
console.log(subarraysWithKDistinct([1,1,1,1], 1)); // 10
