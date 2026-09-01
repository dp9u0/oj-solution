/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const maxVal = Math.max(...nums);
    const points = new Array(maxVal + 1).fill(0);

    for (const num of nums) {
        points[num] += num;
    }

    let prev2 = 0;
    let prev1 = points[0];

    for (let i = 1; i <= maxVal; i++) {
        const curr = Math.max(prev1, prev2 + points[i]);
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
};
// @lc code=end

// TEST:
console.log(deleteAndEarn([3,4,2])); // 6
console.log(deleteAndEarn([2,2,3,3,3,4])); // 9
console.log(deleteAndEarn([1])); // 1
