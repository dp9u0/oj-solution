/*
 * @lc app=leetcode id=3376 lang=javascript
 *
 * [3376] Minimum Time to Break Locks I
 */

// @lc code=start
/**
 * @param {number[]} strength
 * @param {number} k
 * @return {number}
 */
var findMinimumTime = function(strength, k) {
    const n = strength.length;
    const total = 1 << n;
    const dp = new Array(total).fill(Infinity);
    dp[0] = 0;

    for (let mask = 0; mask < total; mask++) {
        if (dp[mask] === Infinity) continue;
        const broken = popCount(mask);
        const x = 1 + k * broken;
        for (let j = 0; j < n; j++) {
            if (mask & (1 << j)) continue;
            const wait = Math.ceil(strength[j] / x);
            const next = mask | (1 << j);
            dp[next] = Math.min(dp[next], dp[mask] + wait);
        }
    }

    return dp[total - 1];
};

const popCount = (x) => {
    let count = 0;
    while (x) {
        x &= x - 1;
        count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(findMinimumTime([3,4,1], 1)); // 4
console.log(findMinimumTime([2,5,4], 2)); // 5
console.log(findMinimumTime([1], 1)); // 1
