/*
 * @lc app=leetcode id=822 lang=javascript
 *
 * [822] Card Flipping Game
 */

// @lc code=start
/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
    const bad = new Set();
    for (let i = 0; i < fronts.length; i++) {
        if (fronts[i] === backs[i]) bad.add(fronts[i]);
    }
    let ans = Infinity;
    for (let i = 0; i < fronts.length; i++) {
        if (!bad.has(fronts[i])) ans = Math.min(ans, fronts[i]);
        if (!bad.has(backs[i])) ans = Math.min(ans, backs[i]);
    }
    return ans === Infinity ? 0 : ans;
};
// @lc code=end

// TEST:
console.log(flipgame([1,2,4,4,7], [1,3,4,1,3])); // 2
console.log(flipgame([1], [1]));                  // 0
console.log(flipgame([1,1], [2,2]));              // 1
