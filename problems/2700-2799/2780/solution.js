/*
 * @lc app=leetcode id=2780 lang=javascript
 *
 * [2780] Minimum Index of a Valid Split
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    // Boyer-Moore find dominant element
    let candidate = 0, count = 0;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    let totalCount = 0;
    for (const num of nums) {
        if (num === candidate) totalCount++;
    }

    let leftCount = 0;
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === candidate) leftCount++;
        const leftLen = i + 1;
        const rightLen = n - i - 1;
        if (leftCount * 2 > leftLen && (totalCount - leftCount) * 2 > rightLen) {
            return i;
        }
    }

    return -1;
};
// @lc code=end

// TEST:
console.log(minimumIndex([1, 2, 2, 2])); // 2
console.log(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1])); // 4
console.log(minimumIndex([3, 3, 3, 3, 7, 2, 2])); // -1
console.log(minimumIndex([1, 1])); // 0
