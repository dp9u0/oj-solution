/*
 * @lc app=leetcode id=3139 lang=javascript
 *
 * [3139] Minimum Cost to Equalize Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var minCostToEqualizeArray = function(nums, cost1, cost2) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    if (n === 1) return 0;

    let totalSum = 0n, minVal = BigInt(nums[0]), maxVal = 0n;
    const c1 = BigInt(cost1), c2 = BigInt(cost2), bn = BigInt(n);

    for (const x of nums) {
        const v = BigInt(x);
        totalSum += v;
        if (v < minVal) minVal = v;
        if (v > maxVal) maxVal = v;
    }

    // If operation 2 is not worthwhile, use only operation 1
    if (c2 >= 2n * c1) {
        return Number(((bn * maxVal - totalSum) * c1) % BigInt(MOD));
    }

    const computeCost = (t) => {
        const S = bn * t - totalSum;
        const mx = t - minVal;
        const pairs = mx > S - mx ? S - mx : S / 2n;
        const singles = S - 2n * pairs;
        return pairs * c2 + singles * c1;
    };

    let ans = computeCost(maxVal);

    // Check nearby targets for parity optimization (even S is cheaper when cost2 < cost1)
    for (let dt = 1n; dt <= 2n; dt++) {
        const c = computeCost(maxVal + dt);
        if (c < ans) ans = c;
    }

    // For n >= 3, cost may decrease in dominated region, check transition
    if (n >= 3) {
        const slope = (bn - 1n) * c2 - (bn - 2n) * c1;
        if (slope < 0n) {
            const tNum = totalSum - 2n * minVal;
            const tDen = bn - 2n;
            const tTrans = (tNum + tDen - 1n) / tDen;
            if (tTrans > maxVal) {
                for (let dt = -1n; dt <= 2n; dt++) {
                    const c = computeCost(tTrans + dt);
                    if (c < ans) ans = c;
                }
            }
        }
    }

    return Number(ans % BigInt(MOD));
};
// @lc code=end

// TEST:
console.log(minCostToEqualizeArray([4,1], 5, 2)); // 15
console.log(minCostToEqualizeArray([2,3,3,3,5], 2, 1)); // 6
console.log(minCostToEqualizeArray([3,5,3], 1, 3)); // 4
console.log(minCostToEqualizeArray([1], 1, 1)); // 0
console.log(minCostToEqualizeArray([1,1,2], 10, 1)); // 1
