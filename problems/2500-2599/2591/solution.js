/*
 * @lc app=leetcode id=2591 lang=javascript
 *
 * [2591] Distribute Money to Maximum Children
 */

// @lc code=start
/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    if (money < children) return -1;
    for (let cnt = Math.min(Math.floor(money / 8), children); cnt >= 0; cnt--) {
        const remain = money - cnt * 8;
        const left = children - cnt;
        if (left === 0 && remain !== 0) continue;
        if (left === 1 && remain === 4) continue;
        if (remain < left) continue;
        return cnt;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(distMoney(20, 3)); // 1
console.log(distMoney(16, 2)); // 2
console.log(distMoney(2, 2));  // 0
