/*
 * @lc app=leetcode.cn id=2107 lang=javascript
 *
 * [2107] 分享 K 个糖果后独特口味的数量
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var shareCandies = function(candies, k) {
    const n = candies.length;
    if (k === 0) {
        return new Set(candies).size;
    }
    if (k === n) return 0;
    const MAX = 100001;
    const cnt = new Int32Array(MAX);
    let distinct = 0;
    for (const v of candies) {
        if (cnt[v] === 0) distinct++;
        cnt[v]++;
    }
    for (let i = 0; i < k; i++) {
        const v = candies[i];
        cnt[v]--;
        if (cnt[v] === 0) distinct--;
    }
    let best = distinct;
    for (let i = k; i < n; i++) {
        const inV = candies[i - k], outV = candies[i];
        cnt[inV]++;
        if (cnt[inV] === 1) distinct++;
        cnt[outV]--;
        if (cnt[outV] === 0) distinct--;
        if (distinct > best) best = distinct;
    }
    return best;
};
// @lc code=end

// TEST:
console.log(shareCandies([1,2,2,3,4,3], 3)); // 3
console.log(shareCandies([2,2,2,2,3,3], 2)); // 2
console.log(shareCandies([2,4,5], 0)); // 3
console.log(shareCandies([], 0)); // 0
console.log(shareCandies([1,1,1,1], 2)); // 1
