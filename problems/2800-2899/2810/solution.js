/*
 * @lc app=leetcode id=2810 lang=javascript
 *
 * [2810] Faulty Keyboard
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    const deque = [];
    let rev = false;
    for (const c of s) {
        if (c === 'i') {
            rev = !rev;
        } else {
            if (rev) deque.unshift(c);
            else deque.push(c);
        }
    }
    if (rev) deque.reverse();
    return deque.join('');
};
// @lc code=end

// TEST:
console.log(finalString("string")); // "rtsng"
console.log(finalString("poiinter")); // "ponter"
console.log(finalString("abc")); // "abc"
console.log(finalString("abi")); // "ba"
