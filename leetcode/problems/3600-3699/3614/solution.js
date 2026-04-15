/*
 * @lc app=leetcode id=3614 lang=javascript
 *
 * [3614] Process String with Special Operations II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
var processStr = function(s, k) {
    const n = s.length;
    const lens = new Array(n + 1);
    lens[0] = 0;
    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (c === '*') lens[i + 1] = Math.max(0, lens[i] - 1);
        else if (c === '#') lens[i + 1] = lens[i] * 2;
        else if (c === '%') lens[i + 1] = lens[i];
        else lens[i + 1] = lens[i] + 1;
    }
    let pos = k;
    if (pos >= lens[n]) return '.';
    for (let i = n - 1; i >= 0; i--) {
        const c = s[i];
        const prevLen = lens[i];
        if (c === '#') {
            if (pos >= prevLen) pos -= prevLen;
        } else if (c === '%') {
            pos = prevLen - 1 - pos;
        } else if (c === '*') {
            // pos stays, removed char was at end
        } else {
            if (pos === prevLen) return c;
        }
    }
    return '.';
};
// @lc code=end

// TEST:
console.log(processStr("a#b%*", 1)); // 'a'
console.log(processStr("cd%#*#", 3)); // 'd'
console.log(processStr("z*#", 0)); // '.'
