/*
 * @lc app=leetcode.cn id=3094 lang=javascript
 *
 * [3094] 使用按位查询猜测数字 II
 */

// @lc code=start
/**
 * Definition of commonBits API.
 * @param {number} num
 * @return {integer}
 * var commonBits = function(num) {}
 */

/**
 * @return {number}
 */
var findNumber = function() {
    const base = commonBits(0); // 30 - popcount(n); n unchanged
    let n = 0;
    for (let i = 0; i < 30; i++) {
        const c = commonBits(1 << i); // base+1 if set, base-1 if clear; n flipped
        commonBits(1 << i); // revert the XOR
        if (c > base) n |= 1 << i;
    }
    return n;
};
// @lc code=end

// TEST:
// local mock
let hidden = 0b10000010001;
let cur = hidden;
global.commonBits = (num) => {
    let same = 0;
    for (let i = 0; i < 30; i++) {
        if (((cur >> i) & 1) === ((num >> i) & 1)) same++;
    }
    cur ^= num;
    return same;
};
console.log(findNumber()); // 1041
console.log(cur === hidden); // true (n restored)
