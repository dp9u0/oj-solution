/*
 * @lc app=leetcode id=777 lang=javascript
 *
 * [777] Swap Adjacent in LR String
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform = function(start, result) {
    const n = start.length;
    let i = 0, j = 0;
    while (i < n || j < n) {
        while (i < n && start[i] === 'X') i++;
        while (j < n && result[j] === 'X') j++;
        if (i === n && j === n) return true;
        if (i === n || j === n) return false;
        if (start[i] !== result[j]) return false;
        if (start[i] === 'L' && i < j) return false;
        if (start[i] === 'R' && i > j) return false;
        i++;
        j++;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(canTransform('RXXLRXRXL', 'XRLXXRRLX')); // true
console.log(canTransform('X', 'L')); // false
console.log(canTransform('XL', 'LX')); // true
console.log(canTransform('RX', 'XR')); // true
console.log(canTransform('RL', 'LR')); // false
console.log(canTransform('XXX', 'XXX')); // true
console.log(canTransform('L', 'R')); // false
console.log(canTransform('RXX', 'XXR')); // true
