/*
 * @lc app=leetcode.cn id=2143 lang=javascript
 *
 * [2143] 在两个数组的区间中选取数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countSubranges = function(nums1, nums2) {
    const MOD = 1000000007;
    const n = nums1.length;
    const OFF = n * 100;
    const SIZE = 2 * OFF + 1;
    const dp = new Int32Array(SIZE);
    const nd = new Int32Array(SIZE);
    let ans = 0;
    for (let l = 0; l < n; l++) {
        dp.fill(0);
        dp[OFF] = 1;
        for (let r = l; r < n; r++) {
            const a = nums1[r], b = nums2[r];
            nd.fill(0);
            for (let d = 0; d < SIZE; d++) {
                const v = dp[d];
                if (v === 0) continue;
                nd[d + a] = (nd[d + a] + v) % MOD;
                nd[d - b] = (nd[d - b] + v) % MOD;
            }
            dp.set(nd);
            ans = (ans + dp[OFF]) % MOD;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countSubranges([1,2,5], [2,6,3])); // 3
console.log(countSubranges([0,1], [1,0])); // 4
console.log(countSubranges([1], [2])); // 0
console.log(countSubranges([0], [0])); // 2 (pick nums1[0] or nums2[0], both give 0=0)
console.log(countSubranges([2,2], [2,2])); // 2 ([0,1] with cross picks; single-element and same-array pairs unbalanced)
