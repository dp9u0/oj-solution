/*
 * @lc app=leetcode.cn id=2838 lang=javascript
 *
 * [2838] 英雄可以获得的最大金币数
 */

// @lc code=start
/**
 * @param {number[]} heroes
 * @param {number[]} monsters
 * @param {number[]} coins
 * @return {number[]}
 */
var maximumCoins = function(heroes, monsters, coins) {
    const m = monsters.length;
    const pairs = monsters.map((p, i) => [p, coins[i]]).sort((a, b) => a[0] - b[0]);
    const pre = new Array(m + 1).fill(0);
    for (let i = 0; i < m; i++) pre[i + 1] = pre[i] + pairs[i][1];
    const ans = [];
    for (const h of heroes) {
        let lo = 0, hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (pairs[mid][0] <= h) lo = mid + 1;
            else hi = mid;
        }
        ans.push(pre[lo]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maximumCoins([1,4,2], [1,1,5,2,3], [2,3,4,5,6]))); // [5,16,10]
console.log(JSON.stringify(maximumCoins([5], [2,3,1,2], [10,6,5,2]))); // [23]
console.log(JSON.stringify(maximumCoins([4,4], [5,7,8], [1,1,1]))); // [0,0]
console.log(JSON.stringify(maximumCoins([1], [1], [1000000000]))); // [1000000000]
