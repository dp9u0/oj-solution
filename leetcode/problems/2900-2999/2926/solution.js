/*
 * @lc app=leetcode id=2926 lang=javascript
 *
 * [2926] Maximum Balanced Subsequence Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxBalancedSubsequenceSum = function(nums) {
    const n = nums.length;
    const b = nums.map((v, i) => v - i);

    // Coordinate compression
    const sorted = [...new Set(b)].sort((a, c) => a - c);
    const rank = new Map();
    for (let i = 0; i < sorted.length; i++) rank.set(sorted[i], i + 1);
    const m = sorted.length;

    // BIT for max prefix query + point update
    const bit = new Float64Array(m + 1).fill(-Infinity);
    const INF = -1e18;

    const query = (i) => {
        let res = INF;
        while (i > 0) {
            if (bit[i] > res) res = bit[i];
            i -= i & (-i);
        }
        return res;
    };

    const update = (i, val) => {
        while (i <= m) {
            if (val > bit[i]) bit[i] = val;
            i += i & (-i);
        }
    };

    // Process in index order
    let ans = -Infinity;
    for (let i = 0; i < n; i++) {
        const ri = rank.get(b[i]);
        const prev = query(ri);
        const dp = Math.max(nums[i], prev === INF ? -Infinity : prev + nums[i]);
        update(ri, dp);
        if (dp > ans) ans = dp;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxBalancedSubsequenceSum([3,3,5,6])); // 14
console.log(maxBalancedSubsequenceSum([5,-1,-3,8])); // 13
console.log(maxBalancedSubsequenceSum([-2,-1])); // -1
console.log(maxBalancedSubsequenceSum([1])); // 1
console.log(maxBalancedSubsequenceSum([2,1,3,4])); // 8