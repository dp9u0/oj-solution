/*
 * @lc app=leetcode.cn id=548 lang=javascript
 *
 * [548] 将数组分割成和相等的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArray = function(nums) {
    const n = nums.length;
    const pre = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];
    const range = (l, r) => pre[r + 1] - pre[l]; // inclusive sum of [l, r]

    // enumerate the middle cut j; match equal-sum pairs on both sides
    for (let j = 2; j <= n - 3; j++) {
        const seen = new Set();
        for (let i = 1; i <= j - 2; i++) {
            const s1 = range(0, i - 1), s2 = range(i + 1, j - 1);
            if (s1 === s2) seen.add(s1);
        }
        if (!seen.size) continue;
        for (let k = j + 2; k <= n - 2; k++) {
            const s3 = range(j + 1, k - 1), s4 = range(k + 1, n - 1);
            if (s3 === s4 && seen.has(s3)) return true;
        }
    }
    return false;
};
// @lc code=end

// TEST:
console.log(splitArray([1, 2, 1, 2, 1, 2, 1])); // true
console.log(splitArray([1, 2, 1, 2, 1, 2, 1, 2])); // false
console.log(splitArray([1, 1, 1, 1, 1, 1])); // false (needs at least 7 elements)
console.log(splitArray([1, 1, 1, 1, 1, 1, 1])); // true
console.log(splitArray([1, 2, 3, 4, 5, 6, 7])); // false
console.log(splitArray([0, 0, 0, 0, 0, 0, 0])); // true (all zero)
