/*
 * @lc app=leetcode.cn id=1427 lang=javascript
 *
 * [1427] 字符串的左右移
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    const n = s.length;
    // right shift is positive, left shift negative
    let r = 0;
    for (const [dir, amt] of shift) r += dir === 1 ? amt : -amt;
    r = ((r % n) + n) % n;
    return s.slice(n - r) + s.slice(0, n - r);
};
// @lc code=end

// TEST:
console.log(stringShift("abc", [[0, 1], [1, 2]])); // "cab"
console.log(stringShift("abcdefg", [[1, 1], [1, 1], [0, 2], [1, 3]])); // "efgabcd"
console.log(stringShift("abc", [[0, 3]])); // "abc" (full rotation)
console.log(stringShift("abcdef", [[0, 4]])); // "efabcd"
console.log(stringShift("a", [[1, 100]])); // "a"
