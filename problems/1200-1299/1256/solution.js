/*
 * @lc app=leetcode.cn id=1256 lang=javascript
 *
 * [1256] 加密数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var encode = function(num) {
    return (num + 1).toString(2).slice(1); // binary of num+1 minus the leading '1'
};
// @lc code=end

// TEST:
console.log(encode(23)); // "1000"
console.log(encode(107)); // "101100"
console.log(encode(0)); // "" (1 = "1" stripped)
console.log(encode(1)); // "0" (2 = "10")
console.log(encode(3)); // "00" (4 = "100")
