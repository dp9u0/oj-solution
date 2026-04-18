/*
 * @lc app=leetcode id=1775 lang=javascript
 *
 * [1775] Equal Sum Arrays With Minimum Number of Operations
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
    const sum1 = nums1.reduce((a, b) => a + b, 0);
    const sum2 = nums2.reduce((a, b) => a + b, 0);
    if (sum1 === sum2) return 0;

    const larger = sum1 > sum2 ? nums1 : nums2;
    const smaller = sum1 > sum2 ? nums2 : nums1;
    let diff = Math.abs(sum1 - sum2);
    const cnt = new Int32Array(6);
    for (const v of larger) cnt[v - 1]++;
    for (const v of smaller) cnt[6 - v]++;

    let ops = 0;
    for (let g = 5; g >= 1; g--) {
        while (cnt[g] > 0 && diff > 0) {
            diff -= g;
            cnt[g]--;
            ops++;
        }
        if (diff <= 0) return ops;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minOperations([1,2,3,4,5,6], [1,1,2,2,2,2])); // 3
console.log(minOperations([1,1,1,1,1,1,1], [6])); // -1
console.log(minOperations([6,6], [1])); // 3
console.log(minOperations([1,1], [1,1])); // 0
console.log(minOperations([5], [1])); // 1
