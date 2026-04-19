/*
 * @lc app=leetcode id=3187 lang=javascript
 *
 * [3187] Peaks in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var countOfPeaks = function(nums, queries) {
    const n = nums.length;

    // BIT (Fenwick Tree) - 1-indexed
    const bit = new Array(n + 1).fill(0);
    const add = (i, delta) => { for (; i <= n; i += i & -i) bit[i] += delta; };
    const sum = (i) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };

    const isPeak = (i) => i > 0 && i < n - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1] ? 1 : 0;

    // Initialize BIT with peak values
    for (let i = 1; i < n - 1; i++) {
        if (isPeak(i)) add(i + 1, 1);
    }

    const updatePeak = (i) => {
        if (i <= 0 || i >= n - 1) return;
        const cur = sum(i + 1) - sum(i);
        const val = isPeak(i);
        if (cur !== val) add(i + 1, val - cur);
    };

    const result = [];
    for (const q of queries) {
        if (q[0] === 1) {
            const [_, l, r] = q;
            if (r - l < 2) {
                result.push(0);
            } else {
                // Peaks in (l, r) exclusive: indices l+1 to r-1
                result.push(sum(r) - sum(l + 1));
            }
        } else {
            const [_, idx, val] = q;
            nums[idx] = val;
            updatePeak(idx - 1);
            updatePeak(idx);
            updatePeak(idx + 1);
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countOfPeaks([3,1,4,2,5], [[2,3,4],[1,0,4]]))); // [0]
console.log(JSON.stringify(countOfPeaks([4,1,4,2,1,5], [[2,2,4],[1,0,2],[1,0,4]]))); // [0,1]
console.log(JSON.stringify(countOfPeaks([3,1,4,2,5], [[1,0,4]]))); // [1] (peak at index 2)
console.log(JSON.stringify(countOfPeaks([1,2,3,4,5], [[1,0,4]]))); // [0]
console.log(JSON.stringify(countOfPeaks([5,4,3,2,1], [[1,0,4]]))); // [0]
