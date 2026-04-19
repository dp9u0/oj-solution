/*
 * @lc app=leetcode id=2035 lang=javascript
 *
 * [2035] Partition Array Into Two Arrays to Minimize Sum Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
    const m = nums.length;
    const n = m / 2;
    const totalSum = nums.reduce((a, b) => a + b, 0);

    const left = nums.slice(0, n);
    const right = nums.slice(n);

    // Enumerate subsets of each half, grouped by size
    const enumerate = (arr) => {
        const len = arr.length;
        const sums = Array.from({ length: len + 1 }, () => []);
        for (let mask = 0; mask < (1 << len); mask++) {
            let sum = 0, cnt = 0;
            for (let i = 0; i < len; i++) {
                if (mask & (1 << i)) {
                    sum += arr[i];
                    cnt++;
                }
            }
            sums[cnt].push(sum);
        }
        return sums;
    };

    const leftSums = enumerate(left);
    const rightSums = enumerate(right);

    // Sort right sums for binary search
    for (let k = 0; k <= n; k++) {
        rightSums[k].sort((a, b) => a - b);
    }

    let result = Infinity;
    const half = totalSum / 2;

    for (let k = 0; k <= n; k++) {
        const rk = n - k;
        if (rk < 0 || rk > n) continue;

        for (const s1 of leftSums[k]) {
            const need = half - s1;
            const arr = rightSums[rk];
            if (arr.length === 0) continue;

            // Binary search closest to need
            let lo = 0, hi = arr.length - 1;
            while (lo <= hi) {
                const mid = (lo + hi) >> 1;
                if (arr[mid] < need) lo = mid + 1;
                else hi = mid - 1;
            }

            if (lo < arr.length) {
                result = Math.min(result, Math.abs(totalSum - 2 * (s1 + arr[lo])));
            }
            if (hi >= 0) {
                result = Math.min(result, Math.abs(totalSum - 2 * (s1 + arr[hi])));
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minimumDifference([3, 9, 7, 3])); // 2
console.log(minimumDifference([-36, 36])); // 72
console.log(minimumDifference([2, -1, 0, 4, -2, -9])); // 0
console.log(minimumDifference([1, 2, 3, 4])); // 0 ([1,4] vs [2,3])
console.log(minimumDifference([1, 1])); // 0
