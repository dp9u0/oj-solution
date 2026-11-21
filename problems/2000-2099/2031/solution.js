/*
 * @lc app=leetcode.cn id=2031 lang=javascript
 *
 * [2031] 1 比 0 多的子数组个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraysWithMoreOnesThanZeroes = function(nums) {
    const MOD = 1000000007;
    const n = nums.length;
    const OFFSET = n + 1;
    const SIZE = 2 * n + 2;
    const bit = new Int32Array(SIZE + 1);
    const update = (x) => {
        for (; x <= SIZE; x += x & (-x)) bit[x] = (bit[x] + 1) % MOD;
    };
    const query = (x) => {
        let s = 0;
        for (; x > 0; x -= x & (-x)) s += bit[x];
        return s % MOD;
    };
    let s = 0, ans = 0;
    update(s + OFFSET);
    for (const v of nums) {
        s += v === 1 ? 1 : -1;
        ans = (ans + query(s - 1 + OFFSET)) % MOD; // prefixes strictly below s
        update(s + OFFSET);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(subarraysWithMoreOnesThanZeroes([0,1,1,0,1])); // 9
console.log(subarraysWithMoreOnesThanZeroes([0])); // 0
console.log(subarraysWithMoreOnesThanZeroes([1])); // 1
console.log(subarraysWithMoreOnesThanZeroes([1,1,1])); // 6 (all subarrays)
console.log(subarraysWithMoreOnesThanZeroes([0,0,1])); // 1
