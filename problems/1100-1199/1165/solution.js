/*
 * @lc app=leetcode.cn id=1165 lang=javascript
 *
 * [1165] 单行键盘
 */

// @lc code=start
/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    const pos = new Map();
    for (let i = 0; i < keyboard.length; i++) pos.set(keyboard[i], i);

    let time = 0, cur = 0;
    for (const c of word) {
        const p = pos.get(c);
        time += Math.abs(p - cur);
        cur = p;
    }
    return time;
};
// @lc code=end

// TEST:
console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba")); // 4
console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode")); // 73
console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "a")); // 0
console.log(calculateTime("zyxwvutsrqponmlkjihgfedcba", "abc")); // 27 (25 + 1 + 1)
console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "zzz")); // 25 (25 + 0 + 0)
