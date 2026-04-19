/*
 * @lc app=leetcode id=3013 lang=javascript
 *
 * [3013] Divide an Array Into Subarrays With Minimum Cost II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} dist
 * @return {number}
 */
var minimumCost = function(nums, k, dist) {
    const n = nums.length;
    const need = k - 2;

    // Coordinate compression
    const sorted = [...new Set(nums)].sort((a, b) => a - b);
    const rankOf = new Map();
    for (let i = 0; i < sorted.length; i++) rankOf.set(sorted[i], i + 1);
    const m = sorted.length;

    // BIT for count and sum
    const bitCnt = new Array(m + 1).fill(0);
    const bitSum = new Array(m + 1).fill(0);

    const update = (bit, i, v) => { for (; i <= m; i += i & -i) bit[i] += v; };
    const query = (bit, i) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };

    const add = (x) => { const r = rankOf.get(x); update(bitCnt, r, 1); update(bitSum, r, x); };
    const del = (x) => { const r = rankOf.get(x); update(bitCnt, r, -1); update(bitSum, r, -x); };

    // Sum of smallest cnt values in current window
    const sumSmallest = (cnt) => {
        if (cnt === 0) return 0;
        let lo = 1, hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (query(bitCnt, mid) >= cnt) hi = mid;
            else lo = mid + 1;
        }
        const excess = query(bitCnt, lo) - cnt;
        return query(bitSum, lo) - excess * sorted[lo - 1];
    };

    // Init window for i_1=1: nums[2..min(n-1, 1+dist)]
    for (let j = 2; j <= Math.min(n - 1, 1 + dist); j++) add(nums[j]);

    let best = Infinity;
    for (let i = 1; i <= n - k + 1; i++) {
        best = Math.min(best, nums[i] + sumSmallest(need));
        // Slide window for i+1
        if (i + 1 <= n - 1) del(nums[i + 1]);
        if (i + 1 + dist <= n - 1) add(nums[i + 1 + dist]);
    }

    return nums[0] + best;
};
// @lc code=end

// TEST:
console.log(minimumCost([1,3,2,6,4,2], 3, 3) === 5);
console.log(minimumCost([10,1,2,2,2,1], 4, 3) === 15);
console.log(minimumCost([10,8,18,9], 3, 1) === 36);
console.log(minimumCost([1,1,1,1,1], 3, 2) === 3);
console.log(minimumCost([1,2,3,4,5], 3, 3) === 6);
