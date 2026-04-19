/*
 * @lc app=leetcode id=3795 lang=javascript
 *
 * [3795] Minimum Subarray Length With Distinct Sum At Least K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minLength = function(nums, k) {
    const n = nums.length;
    const count = new Map();
    let distinctSum = 0;
    let result = Infinity;
    let left = 0;

    for (let right = 0; right < n; right++) {
        const v = nums[right];
        if (!count.has(v) || count.get(v) === 0) {
            distinctSum += v;
            count.set(v, 0);
        }
        count.set(v, count.get(v) + 1);

        while (distinctSum >= k) {
            result = Math.min(result, right - left + 1);
            const lv = nums[left];
            count.set(lv, count.get(lv) - 1);
            if (count.get(lv) === 0) {
                distinctSum -= lv;
            }
            left++;
        }
    }

    return result === Infinity ? -1 : result;
};
// @lc code=end

// TEST:
console.log(minLength([2,2,3,1], 4)); // 2
console.log(minLength([3,2,3,4], 5)); // 2
console.log(minLength([5,5,4], 5)); // 1
console.log(minLength([1,2,3,4,5], 15)); // 5
console.log(minLength([1,1,1], 5)); // -1
