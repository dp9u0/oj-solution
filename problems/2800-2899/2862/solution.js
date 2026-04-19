/*
 * @lc app=leetcode id=2862 lang=javascript
 *
 * [2862] Maximum Element-Sum of a Complete Subset of Indices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const n = nums.length;
    // Compute square-free part of each index (1-indexed)
    const squareFree = (x) => {
        let result = 1;
        for (let d = 2; d * d <= x; d++) {
            let cnt = 0;
            while (x % d === 0) {
                x /= d;
                cnt++;
            }
            if (cnt % 2 === 1) result *= d;
        }
        if (x > 1) result *= x;
        return result;
    };

    const groups = new Map();
    for (let i = 1; i <= n; i++) {
        const sf = squareFree(i);
        groups.set(sf, (groups.get(sf) || 0) + nums[i - 1]);
    }

    let maxSum = 0;
    for (const sum of groups.values()) {
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};
// @lc code=end

// TEST:
console.log(maximumSum([8,7,3,5,7,2,4,9])); // 16
console.log(maximumSum([8,10,3,8,1,13,7,9,4])); // 20
console.log(maximumSum([5])); // 5
