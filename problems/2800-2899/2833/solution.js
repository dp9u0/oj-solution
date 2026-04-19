/*
 * @lc app=leetcode id=2833 lang=javascript
 *
 * [2833] Furthest Point From Origin
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let l = 0, r = 0, u = 0;
    for (const c of moves) {
        if (c === 'L') l++;
        else if (c === 'R') r++;
        else u++;
    }
    return Math.abs(l - r) + u;
};
// @lc code=end

// TEST:
console.log(furthestDistanceFromOrigin("L_RL__R")); // 3
console.log(furthestDistanceFromOrigin("_R__LL_")); // 5
console.log(furthestDistanceFromOrigin("_______")); // 7
console.log(furthestDistanceFromOrigin("LR")); // 0
