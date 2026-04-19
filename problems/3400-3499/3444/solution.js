/*
 * @lc app=leetcode id=3444 lang=javascript
 *
 * [3444] Minimum Increments for Target Multiples in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumIncrements = function(nums, target) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => a / gcd(a, b) * b;

    const n = target.length;
    const full = (1 << n) - 1;

    // precompute LCM for each subset
    const lcms = new Array(1 << n).fill(1);
    for (let mask = 1; mask <= full; mask++) {
        const bit = mask & -mask;
        const i = Math.log2(bit);
        lcms[mask] = lcms[mask ^ bit] > 0 ? lcm(lcms[mask ^ bit], target[i]) : target[i];
    }

    // dp[mask] = min ops to cover all targets in mask
    const dp = new Array(1 << n).fill(Infinity);
    dp[0] = 0;

    for (const x of nums) {
        const old = dp.slice();
        for (let mask = 0; mask <= full; mask++) {
            if (old[mask] === Infinity) continue;
            for (let s = 1; s <= full; s++) {
                const l = lcms[s];
                if (l > 1e8) continue; // LCM too large, skip
                const cost = (l - x % l) % l;
                const next = mask | s;
                if (old[mask] + cost < dp[next]) {
                    dp[next] = old[mask] + cost;
                }
            }
        }
    }

    return dp[full];
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(minimumIncrements, [[1, 2, 3], [4]], 1);
test(minimumIncrements, [[8, 4], [10, 5]], 2);
test(minimumIncrements, [[7, 9, 10], [7]], 0);
test(minimumIncrements, [[1], [1]], 0);
test(minimumIncrements, [[5], [3]], 1);
test(minimumIncrements, [[1, 2, 3, 4, 5], [6, 7]], 4);
test(minimumIncrements, [[6, 8, 10], [4, 3]], 0);
test(minimumIncrements, [[1, 1, 1], [2, 3]], 3);
