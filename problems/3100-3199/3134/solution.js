/*
 * @lc app=leetcode id=3134 lang=javascript
 *
 * [3134] Find the Median of the Uniqueness Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var medianOfUniquenessArray = function(nums) {
    const n = nums.length;
    const total = BigInt(n) * BigInt(n + 1) / 2n;
    const target = (total + 1n) / 2n;

    const countAtMost = (k) => {
        const freq = new Map();
        let left = 0, count = 0;
        for (let right = 0; right < n; right++) {
            freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
            while (freq.size > k) {
                const f = freq.get(nums[left]);
                if (f === 1) freq.delete(nums[left]);
                else freq.set(nums[left], f - 1);
                left++;
            }
            count += right - left + 1;
        }
        return count;
    };

    let lo = 1, hi = n;
    while (lo < hi) {
        const mid = lo + ((hi - lo) >> 1);
        if (countAtMost(mid) >= Number(target)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(medianOfUniquenessArray([1,2,3])); // 1
console.log(medianOfUniquenessArray([3,4,3,4,5])); // 2
console.log(medianOfUniquenessArray([4,3,5,4])); // 2
console.log(medianOfUniquenessArray([1])); // 1
console.log(medianOfUniquenessArray([1,1,1,1])); // 1
