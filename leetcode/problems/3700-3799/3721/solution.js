/*
 * @lc app=leetcode id=3721 lang=javascript
 *
 * [3721] Longest Balanced Subarray II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    const n = nums.length;
    const lastOcc = new Map();
    const w = (v) => v % 2 === 0 ? 1 : -1;

    // Segment tree with lazy propagation
    const N = 4 * n;
    const mn = new Array(N).fill(0);
    const mx = new Array(N).fill(0);
    const lz = new Array(N).fill(0);

    const push = (idx) => {
        if (lz[idx] !== 0) {
            for (const c of [2 * idx, 2 * idx + 1]) {
                mn[c] += lz[idx];
                mx[c] += lz[idx];
                lz[c] += lz[idx];
            }
            lz[idx] = 0;
        }
    };

    const rangeAdd = (idx, lo, hi, l, r, val) => {
        if (l > hi || r < lo) return;
        if (l <= lo && hi <= r) {
            mn[idx] += val;
            mx[idx] += val;
            lz[idx] += val;
            return;
        }
        push(idx);
        const mid = (lo + hi) >> 1;
        rangeAdd(2 * idx, lo, mid, l, r, val);
        rangeAdd(2 * idx + 1, mid + 1, hi, l, r, val);
        mn[idx] = Math.min(mn[2 * idx], mn[2 * idx + 1]);
        mx[idx] = Math.max(mx[2 * idx], mx[2 * idx + 1]);
    };

    const findZero = (idx, lo, hi, l, r) => {
        if (l > hi || r < lo) return -1;
        if (mn[idx] > 0 || mx[idx] < 0) return -1;
        if (lo === hi) return lo;
        push(idx);
        const mid = (lo + hi) >> 1;
        const left = findZero(2 * idx, lo, mid, l, r);
        if (left !== -1) return left;
        return findZero(2 * idx + 1, mid + 1, hi, l, r);
    };

    let ans = 0;
    for (let r = 0; r < n; r++) {
        const v = nums[r];
        const prevLast = lastOcc.has(v) ? lastOcc.get(v) : -1;
        rangeAdd(1, 0, n - 1, prevLast + 1, r, w(v));
        const l = findZero(1, 0, n - 1, 0, r);
        if (l !== -1) {
            ans = Math.max(ans, r - l + 1);
        }
        lastOcc.set(v, r);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(longestBalanced([2, 5, 4, 3])); // 4
console.log(longestBalanced([3, 2, 2, 5, 4])); // 5
console.log(longestBalanced([1, 2, 3, 2])); // 3
console.log(longestBalanced([1, 3])); // 0
console.log(longestBalanced([2, 4])); // 0
