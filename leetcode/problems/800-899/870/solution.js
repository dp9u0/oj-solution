/*
 * @lc app=leetcode id=870 lang=javascript
 *
 * [870] Advantage Shuffle
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    const n = nums1.length;
    nums1.sort((a, b) => a - b);
    const indices = Array.from({ length: n }, (_, i) => i);
    indices.sort((a, b) => nums2[a] - nums2[b]);

    const result = new Array(n);
    let left = 0, right = n - 1;

    for (const num of nums1) {
        if (num > nums2[indices[left]]) {
            result[indices[left]] = num;
            left++;
        } else {
            result[indices[right]] = num;
            right--;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]))); // [2,11,7,15]
console.log(JSON.stringify(advantageCount([12, 24, 8, 32], [13, 25, 32, 11]))); // [24,32,8,12]
console.log(JSON.stringify(advantageCount([2, 4, 6], [1, 3, 5]))); // [2,4,6]
