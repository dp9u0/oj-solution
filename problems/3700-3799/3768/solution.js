/*
 * @lc app=leetcode id=3768 lang=javascript
 *
 * [3768] Minimum Inversion Count in Subarrays of Fixed Length
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minInversionCount = function(nums, k) {
    const n = nums.length;

    // Coordinate compression
    const sorted = [...new Set(nums)].sort((a, b) => a - b);
    const rank = new Map();
    for (let i = 0; i < sorted.length; i++) rank.set(sorted[i], i + 1);
    const m = sorted.length;

    // Fenwick Tree (BIT)
    const bit = new Int32Array(m + 1);
    const update = (i, delta) => {
        for (; i <= m; i += i & (-i)) bit[i] += delta;
    };
    const query = (i) => {
        let s = 0;
        for (; i > 0; i -= i & (-i)) s += bit[i];
        return s;
    };

    let invCount = 0;
    for (let i = 0; i < k; i++) {
        const r = rank.get(nums[i]);
        invCount += i - query(r); // count of elements > nums[i] already in window
        update(r, 1);
    }

    let minInv = invCount;

    for (let i = k; i < n; i++) {
        const outR = rank.get(nums[i - k]);
        const inR = rank.get(nums[i]);

        // Remove nums[i-k]: inversions it contributed with elements after it that are smaller
        invCount -= query(outR - 1);
        update(outR, -1);

        // Add nums[i]: inversions it contributes with elements before it that are larger
        invCount += (k - 1) - query(inR);
        update(inR, 1);

        minInv = Math.min(minInv, invCount);
    }

    return minInv;
};
// @lc code=end

// TEST:
console.log(minInversionCount([3,1,2,5,4], 3)); // 0
console.log(minInversionCount([5,3,2,1], 4)); // 6
console.log(minInversionCount([2,1], 1)); // 0
console.log(minInversionCount([1,2,3,4,5], 2)); // 0
console.log(minInversionCount([5,4,3,2,1], 3)); // 3
console.log(minInversionCount([1], 1)); // 0
