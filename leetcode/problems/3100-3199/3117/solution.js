/*
 * @lc app=leetcode id=3117 lang=javascript
 *
 * [3117] Minimum Sum of Values by Dividing Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} andValues
 * @return {number}
 */
var minimumValueSum = function(nums, andValues) {
    const n = nums.length;
    const m = andValues.length;
    const ID = (1 << 17) - 1;
    let dp = Array.from({length: m + 1}, () => new Map());
    dp[0].set(ID, 0);
    for (let i = 0; i < n; i++) {
        const ndp = Array.from({length: m + 1}, () => new Map());
        for (let j = 0; j <= Math.min(i + 1, m); j++) {
            for (const [av, cost] of dp[j]) {
                const na = av & nums[i];
                if (!ndp[j].has(na) || cost < ndp[j].get(na)) ndp[j].set(na, cost);
                if (j < m && na === andValues[j]) {
                    const cc = cost + nums[i];
                    if (!ndp[j + 1].has(ID) || cc < ndp[j + 1].get(ID)) ndp[j + 1].set(ID, cc);
                }
            }
        }
        dp = ndp;
    }
    return dp[m].has(ID) ? dp[m].get(ID) : -1;
};
// @lc code=end

// TEST:
console.log(minimumValueSum([1,4,3,3,2], [0,3,3,2])); // 12
console.log(minimumValueSum([2,3,5,7,7,7,5], [0,7,5])); // 17
console.log(minimumValueSum([1,2,3,4], [2])); // -1
