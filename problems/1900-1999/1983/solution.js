/*
 * @lc app=leetcode.cn id=1983 lang=javascript
 *
 * [1983] 范围和相等的最宽索引对
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var widestPairOfIndices = function(nums1, nums2) {
    const n = nums1.length;
    const first = new Map();
    first.set(0, 0);
    let d = 0, ans = 0;
    for (let k = 1; k <= n; k++) {
        d += nums1[k - 1] - nums2[k - 1];
        if (first.has(d)) {
            const w = k - first.get(d);
            if (w > ans) ans = w;
        } else {
            first.set(d, k);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(widestPairOfIndices([1,1,0,1], [0,1,1,0])); // 3
console.log(widestPairOfIndices([0,1], [1,1])); // 1
console.log(widestPairOfIndices([0], [1])); // 0
console.log(widestPairOfIndices([0,0,0], [0,0,0])); // 3
console.log(widestPairOfIndices([1,0,1], [0,1,0])); // 2
