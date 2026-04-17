/*
 * @lc app=leetcode id=1681 lang=javascript
 *
 * [1681] Minimum Incompatibility
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function(nums, k) {
    const n = nums.length;
    const sz = n / k;
    const full = (1 << n) - 1;

    const byFirst = Array.from({length: n}, () => []);
    for (let mask = 1; mask <= full; mask++) {
        let pc = 0;
        for (let i = 0; i < n; i++) if (mask & (1 << i)) pc++;
        if (pc !== sz) continue;

        const seen = new Set();
        let minV = 17, maxV = 0, dup = false;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                if (seen.has(nums[i])) { dup = true; break; }
                seen.add(nums[i]);
                minV = Math.min(minV, nums[i]);
                maxV = Math.max(maxV, nums[i]);
            }
        }
        if (dup) continue;

        let first = 0;
        while (!(mask & (1 << first))) first++;
        byFirst[first].push([mask, maxV - minV]);
    }

    const dp = new Array(full + 1).fill(1e9);
    dp[0] = 0;

    for (let mask = 0; mask < full; mask++) {
        if (dp[mask] >= 1e9) continue;
        let first = 0;
        while (mask & (1 << first)) first++;
        for (const [sub, inc] of byFirst[first]) {
            if ((mask & sub) === 0) {
                dp[mask | sub] = Math.min(dp[mask | sub], dp[mask] + inc);
            }
        }
    }

    return dp[full] >= 1e9 ? -1 : dp[full];
};
// @lc code=end

// TEST:
console.log(minimumIncompatibility([1,2,1,4], 2)); // 4
console.log(minimumIncompatibility([6,3,8,1,3,1,2,2], 4)); // 6
console.log(minimumIncompatibility([5,3,3,6,3,3], 3)); // -1
console.log(minimumIncompatibility([1,2], 1)); // 1
console.log(minimumIncompatibility([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 8)); // 8
