/*
 * @lc app=leetcode id=2300 lang=javascript
 *
 * [2300] Successful Pairs of Spells and Potions
 */

// @lc code=start
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const m = potions.length;

    return spells.map(spell => {
        const target = Math.ceil(success / spell);
        let lo = 0, hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (potions[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return m - lo;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(successfulPairs([5,1,3], [1,2,3,4,5], 7)));    // [4,0,3]
console.log(JSON.stringify(successfulPairs([3,1,2], [8,5,8], 16)));       // [2,0,2]
console.log(JSON.stringify(successfulPairs([1], [1,2,3], 1000000000)));   // [0]
