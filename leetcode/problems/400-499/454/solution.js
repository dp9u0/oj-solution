/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const sumMap = new Map();
    for (const a of nums1) {
        for (const b of nums2) {
            const sum = a + b;
            sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
        }
    }

    let count = 0;
    for (const c of nums3) {
        for (const d of nums4) {
            const target = -(c + d);
            if (sumMap.has(target)) {
                count += sumMap.get(target);
            }
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
// Expected: 2

console.log(fourSumCount([0], [0], [0], [0]));
// Expected: 1

console.log(fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]));
// Expected: 6
