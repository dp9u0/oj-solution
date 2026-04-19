/*
 * @lc app=leetcode id=2800 lang=javascript
 *
 * [2800] Shortest String That Contains Three Strings
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
var minimumString = function(a, b, c) {
    let merge = (s, t) => {
        if (s.includes(t)) return s;
        if (t.includes(s)) return t;
        let maxOverlap = 0;
        for (let len = Math.min(s.length, t.length); len >= 1; len--) {
            if (s.endsWith(t.substring(0, len))) {
                maxOverlap = len;
                break;
            }
        }
        return s + t.substring(maxOverlap);
    };
    let perms = [[a, b, c], [a, c, b], [b, a, c], [b, c, a], [c, a, b], [c, b, a]];
    let best = null;
    for (let [x, y, z] of perms) {
        let res = merge(merge(x, y), z);
        if (best === null || res.length < best.length || (res.length === best.length && res < best)) {
            best = res;
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(minimumString('abc', 'bca', 'aaa'));
console.log(minimumString('ab', 'ba', 'aba'));
console.log(minimumString('a', 'b', 'c'));
