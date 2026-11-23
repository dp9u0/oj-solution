/*
 * @lc app=leetcode.cn id=3155 lang=javascript
 *
 * [3155] 可升级服务器的最大数量
 */

// @lc code=start
/**
 * @param {number[]} count
 * @param {number[]} upgrade
 * @param {number[]} sell
 * @param {number[]} money
 * @return {number[]}
 */
var maxUpgrades = function(count, upgrade, sell, money) {
    const n = count.length;
    const ans = new Array(n);
    for (let i = 0; i < n; i++) {
        const total = money[i] + sell[i] * count[i];
        const denom = upgrade[i] + sell[i];
        const k = Math.floor(total / denom);
        ans[i] = Math.min(count[i], k);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxUpgrades([4,3], [3,5], [4,2], [8,9]))); // [3,2]
console.log(JSON.stringify(maxUpgrades([1], [2], [1], [1]))); // [0]
console.log(JSON.stringify(maxUpgrades([5], [1], [1], [100]))); // [5]
console.log(JSON.stringify(maxUpgrades([2], [100000], [100000], [1]))); // [1]
