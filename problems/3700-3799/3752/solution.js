/*
 * @lc app=leetcode id=3752 lang=javascript
 *
 * [3752] Lexicographically Smallest Negated Permutation that Sums to Target
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} target
 * @return {number[]}
 */
var lexSmallestNegatedPerm = function(n, target) {
    const total = BigInt(n) * BigInt(n + 1) / 2n;
    const t = BigInt(target);
    const diff = total - t;
    if (diff < 0n || diff % 2n !== 0n) return [];
    let sumNeg = diff / 2n;
    if (sumNeg > total) return [];

    const negated = new Set();
    for (let i = n; i >= 1; i--) {
        const bi = BigInt(i);
        if (sumNeg >= bi) {
            negated.add(i);
            sumNeg -= bi;
        }
    }

    const result = [];
    for (let i = n; i >= 1; i--) {
        if (negated.has(i)) result.push(-i);
    }
    for (let i = 1; i <= n; i++) {
        if (!negated.has(i)) result.push(i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(lexSmallestNegatedPerm(3, 0)) === JSON.stringify([-3,1,2]));
console.log(JSON.stringify(lexSmallestNegatedPerm(1, 10000000000)) === JSON.stringify([]));
console.log(JSON.stringify(lexSmallestNegatedPerm(1, 1)) === JSON.stringify([1]));
console.log(JSON.stringify(lexSmallestNegatedPerm(1, -1)) === JSON.stringify([-1]));
console.log(JSON.stringify(lexSmallestNegatedPerm(4, 0)) === JSON.stringify([-4,-1,2,3]));
console.log(JSON.stringify(lexSmallestNegatedPerm(2, 3)) === JSON.stringify([1,2]));
