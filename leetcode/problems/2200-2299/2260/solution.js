/*
 * @lc app=leetcode id=2260 lang=javascript
 *
 * [2260] Minimum Consecutive Cards to Pick Up
 */

// @lc code=start
/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    const last = new Map();
    let ans = Infinity;
    for (let i = 0; i < cards.length; i++) {
        if (last.has(cards[i])) {
            ans = Math.min(ans, i - last.get(cards[i]) + 1);
        }
        last.set(cards[i], i);
    }
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minimumCardPickup([3,4,2,3,4,7]));
console.log(minimumCardPickup([1,0,5,3]));
console.log(minimumCardPickup([1,1]));
