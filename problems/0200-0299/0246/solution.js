/*
 * @lc app=leetcode.cn id=246 lang=javascript
 *
 * [246] 中心对称数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const map = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6' };
    let l = 0, r = num.length - 1;
    while (l <= r) {
        const m = map[num[l]];
        if (m === undefined || m !== num[r]) return false;
        l++; r--;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isStrobogrammatic("69")); // true
console.log(isStrobogrammatic("88")); // true
console.log(isStrobogrammatic("962")); // false (2 not rotatable)
console.log(isStrobogrammatic("1")); // true
console.log(isStrobogrammatic("6")); // false (6 alone maps to 9)
console.log(isStrobogrammatic("818")); // true
