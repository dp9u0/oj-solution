/*
 * @lc app=leetcode id=3602 lang=javascript
 *
 * [3602] Hexadecimal and Hexatrigesimal Conversion
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function(n) {
    const toBase = (num, base) => {
        if (num === 0) return '0';
        const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let s = '';
        while (num > 0) {
            s = digits[num % base] + s;
            num = Math.floor(num / base);
        }
        return s;
    };
    return toBase(n * n, 16) + toBase(n * n * n, 36);
};
// @lc code=end

// TEST:
console.log(concatHex36(13));    // 'A91P1'
console.log(concatHex36(36));    // '5101000'
console.log(concatHex36(1));     // '11'
console.log(concatHex36(10));    // '64RS'
console.log(concatHex36(1000));  // 'F4240GJDGXS'
