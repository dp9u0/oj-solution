/*
 * @lc app=leetcode id=2501 lang=javascript
 *
 * [2501] Longest Square Streak in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    const numSet = new Set(nums);
    let maxStreak = -1;

    for (const x of nums) {
        const sqrt = Math.sqrt(x);
        if (Number.isInteger(sqrt) && numSet.has(sqrt)) continue;

        let current = x, len = 0;
        while (numSet.has(current)) {
            len++;
            current = current * current;
            if (current > 1e5) break;
        }

        if (len >= 2) maxStreak = Math.max(maxStreak, len);
    }

    return maxStreak;
};
// @lc code=end

// TEST:
console.log(longestSquareStreak([4, 3, 6, 16, 8, 2]));
// Expected: 3

console.log(longestSquareStreak([2, 3, 5, 6, 7]));
// Expected: -1

console.log(longestSquareStreak([2, 4, 16, 256]));
// Expected: 4
