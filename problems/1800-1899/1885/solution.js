/*
 * @lc app=leetcode.cn id=1885 lang=javascript
 *
 * [1885] 统计数对
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countPairs = function(nums1, nums2) {
    const n = nums1.length;
    const d = nums1.map((v, k) => v - nums2[k]).sort((a, b) => a - b);
    let ans = 0;
    let l = 0;
    for (let r = n - 1; r >= 0; r--) {
        while (l < r && d[l] + d[r] <= 0) l++;
        if (l >= r) break;
        ans += r - l;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countPairs([2,1,2,1], [1,2,1,2])); // 1
console.log(countPairs([1,10,6,2], [1,4,1,5])); // 5
console.log(countPairs([1], [1])); // 0
console.log(countPairs([5,5,5], [1,1,1])); // 3
console.log(countPairs([1,1,1], [5,5,5])); // 0
