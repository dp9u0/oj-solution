/*
 * @lc app=leetcode id=846 lang=javascript
 *
 * [846] Hand of Straights
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    const count = new Map();
    for (const card of hand) count.set(card, (count.get(card) || 0) + 1);
    const sorted = [...count.keys()].sort((a, b) => a - b);

    for (const card of sorted) {
        const c = count.get(card);
        if (c === 0) continue;
        for (let i = 1; i < groupSize; i++) {
            const next = card + i;
            const nextCount = count.get(next) || 0;
            if (nextCount < c) return false;
            count.set(next, nextCount - c);
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3)); // true
console.log(isNStraightHand([1,2,3,4,5], 4));          // false
console.log(isNStraightHand([1,1,2,2,3,3], 3));        // true
