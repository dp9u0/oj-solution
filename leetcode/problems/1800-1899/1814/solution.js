/*
 * @lc app=leetcode id=1814 lang=javascript
 *
 * [1814] Count Nice Pairs in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const MOD = 1e9 + 7;
    const rev = (x) => {
        let result = 0;
        while (x > 0) {
            result = result * 10 + x % 10;
            x = Math.floor(x / 10);
        }
        return result;
    };

    const count = new Map();
    for (const num of nums) {
        const diff = num - rev(num);
        count.set(diff, (count.get(diff) || 0) + 1);
    }

    let result = 0;
    for (const c of count.values()) {
        result = (result + c * (c - 1) / 2) % MOD;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countNicePairs([42,11,1,97]));        // 2
console.log(countNicePairs([13,10,35,24,76]));    // 4
console.log(countNicePairs([1,1,1,1]));            // 6
