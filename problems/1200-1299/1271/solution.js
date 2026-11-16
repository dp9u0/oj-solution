/*
 * @lc app=leetcode.cn id=1271 lang=javascript
 *
 * [1271] 十六进制魔术数字
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var toHexspeak = function(num) {
    const hex = Number(num).toString(16).toUpperCase();
    let res = '';
    for (const c of hex) {
        if (c === '0') res += 'O';
        else if (c === '1') res += 'I';
        else if (c >= '2' && c <= '9') return "ERROR";
        else res += c;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(toHexspeak("257")); // "IOI"
console.log(toHexspeak("3")); // "ERROR"
console.log(toHexspeak("1")); // "I"
console.log(toHexspeak("10")); // "O"
console.log(toHexspeak("26")); // "IA" (0x1A)
console.log(toHexspeak("679")); // "ERROR" (0x2A7 has digits)
console.log(toHexspeak("1000000000000")); // "ERROR" (0xE8D4A51000 has digits 2-9)
