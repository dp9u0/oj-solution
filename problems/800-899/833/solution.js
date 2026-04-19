/*
 * @lc app=leetcode id=833 lang=javascript
 *
 * [833] Find And Replace in String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    const n = s.length;
    const replace = new Map();

    for (let i = 0; i < indices.length; i++) {
        const idx = indices[i];
        const src = sources[i];
        if (s.substring(idx, idx + src.length) === src) {
            replace.set(idx, [src.length, targets[i]]);
        }
    }

    const result = [];
    let i = 0;
    while (i < n) {
        if (replace.has(i)) {
            const [len, target] = replace.get(i);
            result.push(target);
            i += len;
        } else {
            result.push(s[i]);
            i++;
        }
    }
    return result.join('');
};
// @lc code=end

// TEST:
console.log(findReplaceString('abcd', [0,2], ['a','cd'], ['eee','ffff']));  // eeebffff
console.log(findReplaceString('abcd', [0,2], ['ab','ec'], ['eee','ffff'])); // eeecd
