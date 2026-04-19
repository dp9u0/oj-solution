/*
 * @lc app=leetcode id=1576 lang=javascript
 *
 * [1576] Replace All ?'s to Avoid Consecutive Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    const arr = [...s];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '?') continue;
        for (let c = 97; c <= 122; c++) {
            const ch = String.fromCharCode(c);
            if ((i === 0 || arr[i - 1] !== ch) && (i === arr.length - 1 || arr[i + 1] !== ch)) {
                arr[i] = ch;
                break;
            }
        }
    }
    return arr.join('');
};
// @lc code=end

// TEST:
console.log(modifyString("?zs")); // e.g. "azs"
console.log(modifyString("ubv?w")); // e.g. "ubvaw"
console.log(modifyString("??")); // e.g. "ab"
