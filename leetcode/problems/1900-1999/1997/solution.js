/*
 * @lc app=leetcode id=1997 lang=javascript
 *
 * [1997] First Day Where You Have Been in All the Rooms
 */

// @lc code=start
/**
 * @param {number[]} nextVisit
 * @return {number}
 */
var firstDayBeenInAllRooms = function(nextVisit) {
    const MOD = 1e9 + 7;
    const n = nextVisit.length;
    const f = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        f[i] = (2 * f[i - 1] - f[nextVisit[i - 1]] + 2 + MOD) % MOD;
    }

    return f[n - 1];
};
// @lc code=end

// TEST:
console.log(firstDayBeenInAllRooms([0,0])); // 2
console.log(firstDayBeenInAllRooms([0,0,2])); // 6
console.log(firstDayBeenInAllRooms([0,1,2,0])); // 6
console.log(firstDayBeenInAllRooms([0,0,0,0,0,0,0])); // 126
console.log(firstDayBeenInAllRooms([0,0,1])); // 6
