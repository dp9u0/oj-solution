/*
 * @lc app=leetcode id=3041 lang=javascript
 *
 * [3041] Maximize Consecutive Elements in an Array After Modification
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function(nums) {
    nums.sort((a, b) => a - b);
    const dp = new Map();
    let ans = 1;

    for (const x of nums) {
        // Use x (no increment): extends sequence ending at x-1
        const v0 = (dp.get(x - 1) || 0) + 1;
        // Use x+1 (increment): extends sequence ending at x
        const v1 = (dp.get(x) || 0) + 1;

        dp.set(x, Math.max(dp.get(x) || 0, v0));
        dp.set(x + 1, Math.max(dp.get(x + 1) || 0, v1));

        ans = Math.max(ans, dp.get(x), dp.get(x + 1));
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxSelectedElements([2,1,5,1,1])); // 3
console.log(maxSelectedElements([1,4,7,10])); // 1
console.log(maxSelectedElements([1,2,3,4])); // 4
console.log(maxSelectedElements([1,1,1])); // 2
console.log(maxSelectedElements([1,2,2,3])); // 4