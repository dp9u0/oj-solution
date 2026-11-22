/*
 * @lc app=leetcode.cn id=3064 lang=javascript
 *
 * [3064] 使用按位查询猜测数字 I
 */

// @lc code=start
/**
 * Definition of commonSetBits API.
 * @param {number} num
 * @return {integer}
 * var commonSetBits = function(num) {}
 */

/**
 * @return {number}
 */
var findNumber = function() {
    let n = 0;
    for (let i = 0; i < 30; i++) {
        if (commonSetBits(1 << i) > 0) n |= 1 << i;
    }
    return n;
};
// @lc code=end

// TEST:
// Local mock: judge provides commonSetBits; simulate via a hidden number
const hidden = 0b10000010001;
global.commonSetBits = (num) => {
    let c = 0, x = hidden & num;
    while (x) { x &= x - 1; c++; }
    return c;
};
console.log(findNumber()); // 1041 (hidden = 0b10000010001)
