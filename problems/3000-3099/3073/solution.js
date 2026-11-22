/*
 * @lc app=leetcode.cn id=3073 lang=javascript
 *
 * [3073] 最大递增三元组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    const n = nums.length;
    // coordinate compression
    const sorted = [...new Set(nums)].sort((a, b) => a - b);
    const idxOf = (v) => {
        let lo = 0, hi = sorted.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (sorted[mid] < v) lo = mid + 1;
            else hi = mid;
        }
        return lo; // 0-based rank
    };
    const m = sorted.length;
    // Fenwick prefix max over ranks 1..m
    const tree = new Array(m + 1).fill(0);
    const update = (pos, val) => { for (; pos <= m; pos += pos & (-pos)) if (val > tree[pos]) tree[pos] = val; };
    const query = (pos) => { let r = 0; for (; pos > 0; pos -= pos & (-pos)) if (tree[pos] > r) r = tree[pos]; return r; };
    // suffix max
    const suffixMax = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) suffixMax[i] = Math.max(suffixMax[i + 1], nums[i]);
    let ans = -Infinity;
    for (let j = 0; j < n; j++) {
        const rank = idxOf(nums[j]); // 0-based; strict smaller values have ranks < rank
        if (j >= 1 && j <= n - 2) {
            const gl = query(rank); // max value with rank < rank (values strictly smaller)
            const right = suffixMax[j + 1];
            if (gl > 0 && right > nums[j]) {
                const cand = gl - nums[j] + right;
                if (cand > ans) ans = cand;
            }
        }
        update(rank + 1, nums[j]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumTripletValue([5,6,9])); // 8
console.log(maximumTripletValue([1,5,3,6])); // 4
console.log(maximumTripletValue([1,2,3,4])); // 3
console.log(maximumTripletValue([10,1,2,50])); // 59
