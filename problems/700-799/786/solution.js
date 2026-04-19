/*
 * @lc app=leetcode id=786 lang=javascript
 *
 * [786] K-th Smallest Prime Fraction
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    const n = arr.length;
    let lo = 0, hi = 1;
    let result = [0, 1];

    while (hi - lo > 1e-9) {
        const mid = (lo + hi) / 2;
        let count = 0;
        let bestI = 0, bestJ = 1;

        for (let j = 1; j < n; j++) {
            // Find largest i < j such that arr[i] / arr[j] <= mid
            // i.e., arr[i] <= mid * arr[j]
            let left = 0, right = j;
            while (left < right) {
                const m = (left + right) >> 1;
                if (arr[m] <= mid * arr[j]) left = m + 1;
                else right = m;
            }
            // left is the count of valid i's for this j
            count += left;
            if (left > 0 && arr[left - 1] * bestJ > bestI * arr[j]) {
                bestI = arr[left - 1];
                bestJ = arr[j];
            }
        }

        if (count >= k) {
            result = [bestI, bestJ];
            hi = mid;
        } else {
            lo = mid;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(kthSmallestPrimeFraction([1,2,3,5], 3)));  // [2,5]
console.log(JSON.stringify(kthSmallestPrimeFraction([1,7], 1)));       // [1,7]
console.log(JSON.stringify(kthSmallestPrimeFraction([1,2,3,5], 1)));  // [1,5]
