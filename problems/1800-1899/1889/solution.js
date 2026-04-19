/*
 * @lc app=leetcode id=1889 lang=javascript
 *
 * [1889] Minimum Space Wasted From Packaging
 */

// @lc code=start
/**
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
var minWastedSpace = function(packages, boxes) {
    const MOD = 1e9 + 7;
    const n = packages.length;
    packages.sort((a, b) => a - b);

    const prefix = [0];
    for (let i = 0; i < n; i++) prefix.push(prefix[i] + packages[i]);

    let ans = Infinity;

    for (const supplierBoxes of boxes) {
        supplierBoxes.sort((a, b) => a - b);

        if (supplierBoxes[supplierBoxes.length - 1] < packages[n - 1]) continue;

        let totalWaste = 0;
        let prev = 0;

        for (const box of supplierBoxes) {
            if (box < packages[0]) continue;

            // Binary search: find last index where packages[i] <= box
            let lo = prev, hi = n;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (packages[mid] <= box) lo = mid + 1;
                else hi = mid;
            }

            if (prev < lo) {
                totalWaste += box * (lo - prev) - (prefix[lo] - prefix[prev]);
                prev = lo;
            }

            if (prev === n) break;
        }

        if (prev === n) ans = Math.min(ans, totalWaste);
    }

    return ans === Infinity ? -1 : ans % MOD;
};
// @lc code=end

// TEST:
console.log(minWastedSpace([2,3,5], [[4,8],[2,8]])); // 6
console.log(minWastedSpace([2,3,5], [[1,4],[2,3],[3,4]])); // -1
console.log(minWastedSpace([3,5,8,10,11,12], [[12],[11,9],[10,5,14]])); // 9
console.log(minWastedSpace([1,1,1], [[1]])); // 0
console.log(minWastedSpace([5,6,7], [[5,6,7],[8,9,10]])); // 3
