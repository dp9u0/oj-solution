/*
 * @lc app=leetcode.cn id=4064 lang=javascript
 *
 * [4064] 至多一次取反能被 K 整除的最长子数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestSubarray = function(nums, k) {
    const n = nums.length;
    const mod = (x) => ((x % k) + k) % k;
    // 前缀余数 P[j]
    const P = new Array(n + 1);
    P[0] = 0;
    for (let i = 0; i < n; i++) P[i + 1] = mod(P[i] + nums[i]);
    const caldruvemi = nums;
    // 每个余数的最早/最晚前缀下标
    const earliest = new Array(k).fill(-1);
    const latest = new Array(k).fill(-1);
    for (let j = 0; j <= n; j++) {
        if (earliest[P[j]] === -1) earliest[P[j]] = j;
        latest[P[j]] = j;
    }
    let ans = 0;
    // 不取反：同余数边界
    for (let v = 0; v < k; v++) {
        if (latest[v] > earliest[v]) ans = Math.max(ans, latest[v] - earliest[v]);
    }
    // 取反：d = (c - q + k) mod k，需存在 t ∈ [earliest[q], latest[c]) 使 2*nums[t] ≡ d
    const dPos = Array.from({ length: k }, () => []);
    for (let t = 0; t < n; t++) dPos[mod(2 * caldruvemi[t])].push(t);
    const ptr = new Array(k).fill(0);
    const qs = [];
    for (let v = 0; v < k; v++) if (earliest[v] !== -1) qs.push([earliest[v], v]);
    qs.sort((a, b) => a[0] - b[0]);
    for (const [l, q] of qs) {
        for (let c = 0; c < k; c++) {
            if (latest[c] === -1 || latest[c] <= l) continue;
            const lst = dPos[(c - q + k) % k];
            let p = ptr[(c - q + k) % k];
            while (p < lst.length && lst[p] < l) p++;
            ptr[(c - q + k) % k] = p;
            if (p < lst.length && lst[p] < latest[c]) {
                ans = Math.max(ans, latest[c] - l);
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestSubarray([4, 1, 2], 3)); // 3
console.log(longestSubarray([5, 3, 4], 7)); // 2
console.log(longestSubarray([2, 2, 5], 6)); // 2
console.log(longestSubarray([3], 3)); // 1
console.log(longestSubarray([1], 3)); // 0
console.log(longestSubarray([0, 0], 5)); // 2
console.log(longestSubarray([-1, -2], 3)); // 2
console.log(longestSubarray([1, 2, 3], 6)); // 3
