/*
 * @lc app=leetcode id=3992 lang=javascript
 *
 * [3992] Rearrange String to Avoid Character Pair
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function(s, x, y) {
    let ys = '';
    let others = '';
    let xs = '';
    for (const ch of s) {
        if (ch === y) {
            ys += ch;
        } else if (ch === x) {
            xs += ch;
        } else {
            others += ch;
        }
    }
    return ys + others + xs;
};
// @lc code=end

// TEST:
const isValidRearrange = (t, s, x, y) => {
    if (t.length !== s.length) return false;
    if ([...t].sort().join('') !== [...s].sort().join('')) return false;
    const firstX = t.indexOf(x);
    const lastY = t.lastIndexOf(y);
    if (firstX === -1 || lastY === -1) return true;
    return lastY < firstX;
};

console.log(isValidRearrange(rearrangeString('aabc', 'a', 'c'), 'aabc', 'a', 'c')); // true ("cbaa")
console.log(isValidRearrange(rearrangeString('dcab', 'd', 'b'), 'dcab', 'd', 'b')); // true
console.log(isValidRearrange(rearrangeString('axe', 'o', 'x'), 'axe', 'o', 'x'));   // true
console.log(isValidRearrange(rearrangeString('a', 'a', 'b'), 'a', 'a', 'b'));       // true
console.log(isValidRearrange(rearrangeString('abab', 'a', 'b'), 'abab', 'a', 'b')); // true
console.log(isValidRearrange(rearrangeString('xyzzy', 'z', 'y'), 'xyzzy', 'z', 'y')); // true
