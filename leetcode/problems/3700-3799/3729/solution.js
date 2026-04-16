/*
 * @lc app=leetcode id=3729 lang=javascript
 *
 * [3729] Count Distinct Subarrays Divisible by K in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numGoodSubarrays = function(nums, k) {
    const n = nums.length;

    // 1. Build suffix array exploiting sorted property
    // Group equal values: non-last groups forward order, last group reverse
    const SA = [];
    let i = 0;
    const groupStarts = [];
    while (i < n) {
        const start = i;
        groupStarts.push(i);
        while (i < n && nums[i] === nums[start]) i++;
        const count = i - start;
        const isLast = (i === n);
        if (isLast) {
            for (let p = start + count - 1; p >= start; p--) SA.push(p);
        } else {
            for (let p = start; p < start + count; p++) SA.push(p);
        }
    }
    const numGroups = groupStarts.length;

    // 2. Rank array
    const rank = new Int32Array(n);
    for (let i = 0; i < n; i++) rank[SA[i]] = i;

    // 3. LCP array using Kasai's algorithm
    const LCP = new Int32Array(n);
    let kk = 0;
    for (let l = 0; l < n; l++) {
        const r = rank[l];
        if (r === 0) { kk = 0; continue; }
        const prev = SA[r - 1];
        while (l + kk < n && prev + kk < n && nums[l + kk] === nums[prev + kk]) kk++;
        LCP[r] = kk;
        if (kk > 0) kk--;
    }

    // 4. Prefix sums and residue map
    const P = new Array(n + 1);
    P[0] = 0;
    for (let i = 0; i < n; i++) P[i + 1] = P[i] + nums[i];

    const residueMap = new Map();
    for (let j = 0; j <= n; j++) {
        const r = P[j] % k;
        if (!residueMap.has(r)) residueMap.set(r, []);
        residueMap.get(r).push(j);
    }

    // Binary search: count elements in sorted arr within [lo, hi]
    const countInRange = (arr, lo, hi) => {
        if (!arr || arr.length === 0 || lo > hi) return 0;
        let l = 0, r = arr.length;
        while (l < r) { const m = (l + r) >> 1; if (arr[m] < lo) l = m + 1; else r = m; }
        const start = l;
        l = 0; r = arr.length;
        while (l < r) { const m = (l + r) >> 1; if (arr[m] <= hi) l = m + 1; else r = m; }
        return l - start;
    };

    // 5. Count good distinct subarrays
    let ans = 0;
    for (let r = 0; r < n; r++) {
        const l = SA[r];
        const minLen = LCP[r];
        const maxLen = n - l;
        if (minLen >= maxLen) continue;

        const target = P[l] % k;
        const positions = residueMap.get(target);
        if (!positions) continue;

        ans += countInRange(positions, l + minLen + 1, n);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(numGoodSubarrays([1,2,3], 3)); // 3
console.log(numGoodSubarrays([2,2,2,2,2,2], 6)); // 2
console.log(numGoodSubarrays([3,3], 6)); // 1
console.log(numGoodSubarrays([1], 1)); // 1
console.log(numGoodSubarrays([1,1,1], 3)); // 1
console.log(numGoodSubarrays([5,5,5], 5)); // 3
