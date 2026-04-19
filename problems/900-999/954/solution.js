/*
 * @lc app=leetcode id=954 lang=javascript
 *
 * [954] Array of Doubled Pairs
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    const freq = new Map();
    for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);

    const sorted = [...arr].sort((a, b) => Math.abs(a) - Math.abs(b));

    for (const x of sorted) {
        if (freq.get(x) === 0) continue;
        const need = 2 * x;
        if ((freq.get(need) || 0) < freq.get(x)) return false;
        freq.set(need, freq.get(need) - freq.get(x));
        freq.set(x, 0);
    }
    return true;
};
// @lc code=end

// TEST:
console.log(canReorderDoubled([3,1,3,6]));      // false
console.log(canReorderDoubled([2,1,2,6]));      // false
console.log(canReorderDoubled([4,-2,2,-4]));    // true
console.log(canReorderDoubled([0,0]));          // true
