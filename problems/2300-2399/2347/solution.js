/*
 * @lc app=leetcode id=2347 lang=javascript
 *
 * [2347] Best Poker Hand
 */

// @lc code=start
/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    // Check Flush
    if (new Set(suits).size === 1) return 'Flush';

    // Count ranks
    const count = {};
    let maxCount = 0;
    for (const r of ranks) {
        count[r] = (count[r] || 0) + 1;
        maxCount = Math.max(maxCount, count[r]);
    }

    if (maxCount >= 3) return 'Three of a Kind';
    if (maxCount >= 2) return 'Pair';
    return 'High Card';
};
// @lc code=end

// TEST:
console.log(bestHand([13,2,3,1,9], ['a','a','a','a','a'])); // "Flush"
console.log(bestHand([4,4,2,4,4], ['d','a','a','b','c']));   // "Three of a Kind"
console.log(bestHand([10,10,2,12,9], ['a','b','c','a','d'])); // "Pair"
console.log(bestHand([1,2,3,4,5], ['a','b','c','d','a']));    // "High Card"
