/*
 * @lc app=leetcode.cn id=1714 lang=javascript
 *
 * [1714] 数组中特殊等间距元素的和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var solve = function(nums, queries) {
    const MOD = 1000000007;
    const n = nums.length;
    const B = Math.ceil(Math.sqrt(n));
    const cache = new Map(); // y -> suffix-sum table (computed lazily for small y)
    const getSuf = (y) => {
        if (cache.has(y)) return cache.get(y);
        const suf = new Float64Array(n);
        for (let i = n - 1; i >= 0; i--) {
            suf[i] = (nums[i] + (i + y < n ? suf[i + y] : 0)) % MOD;
        }
        cache.set(y, suf);
        return suf;
    };
    return queries.map(([x, y]) => {
        if (y <= B) return getSuf(y)[x];
        let sum = 0; // large step: direct walk is O(n/y) <= B
        for (let j = x; j < n; j += y) sum = (sum + nums[j]) % MOD;
        return sum;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(solve([0,1,2,3,4,5,6,7], [[0,3],[5,1],[4,2]]))); // [9,18,10]
console.log(JSON.stringify(solve([100,200,101,201,102,202,103,203], [[0,7]]))); // [303]
