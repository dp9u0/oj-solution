/*
 * @lc app=leetcode id=2952 lang=javascript
 *
 * [2952] Minimum Number of Coins to be Added
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) {
    coins.sort((a, b) => a - b);
    let reach = 0, ans = 0, i = 0;
    while (reach < target) {
        if (i < coins.length && coins[i] <= reach + 1) {
            reach += coins[i++];
        } else {
            reach += reach + 1;
            ans++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minimumAddedCoins([1,4,10], 19));              // 2
console.log(minimumAddedCoins([1,4,10,5,7,19], 19));       // 1
console.log(minimumAddedCoins([1,1,1], 20));                // 3
