/*
 * @lc app=leetcode id=1703 lang=javascript
 *
 * [1703] Minimum Adjacent Swaps for K Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function(nums, k) {
    const pos = [];
    for (let i = 0; i < nums.length; i++) if (nums[i]) pos.push(i);
    const n = pos.length;
    if (k <= 1) return 0;

    const q = pos.map((p, i) => p - i);
    const pre = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + q[i];

    const m = k >> 1;
    let ans = Infinity;
    for (let l = 0; l <= n - k; l++) {
        const r = l + k;
        const mid = l + m;
        const cost = (2 * m - k + 1) * q[mid]
            + (pre[r] - pre[mid + 1])
            - (pre[mid] - pre[l]);
        if (cost < ans) ans = cost;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minMoves([1,0,0,1,0,1], 2)); // 1
console.log(minMoves([1,0,0,0,0,0,1,1], 3)); // 5
console.log(minMoves([1,1,0,1], 2)); // 0
console.log(minMoves([1,0,1], 2)); // 1
console.log(minMoves([1,0,0,0,1], 2)); // 3
