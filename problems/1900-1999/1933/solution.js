/*
 * @lc app=leetcode.cn id=1933 lang=javascript
 *
 * [1933] 判断字符串是否可分解为值均等的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isDecomposable = function(s) {
    let used2 = 0;
    let i = 0;
    while (i < s.length) {
        let j = i;
        while (j < s.length && s[j] === s[i]) j++;
        const r = (j - i) % 3;
        if (r === 1) return false; // 3a+2b can't reach remainder 1
        if (r === 2) used2++;      // this run must consume the only 2-piece
        i = j;
    }
    return used2 === 1;
};
// @lc code=end

// TEST:
console.log(isDecomposable("000111000")); // false (only 3s, no 2)
console.log(isDecomposable("00011111222")); // true
console.log(isDecomposable("01110002223300")); // false (single leading 0)
console.log(isDecomposable("00")); // true
console.log(isDecomposable("000000")); // false (no 2-piece)
console.log(isDecomposable("00000")); // true ("000"+"00")
console.log(isDecomposable("0011")); // false (two 2-runs)
console.log(isDecomposable("0")); // false
