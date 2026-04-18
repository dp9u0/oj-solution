/*
 * @lc app=leetcode id=2301 lang=javascript
 *
 * [2301] Match Substring After Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} sub
 * @param {character[][]} mappings
 * @return {boolean}
 */
var matchReplacement = function(s, sub, mappings) {
    const map = new Map();
    for (const [old, nw] of mappings) {
        if (!map.has(old)) map.set(old, new Set());
        map.get(old).add(nw);
    }

    const canMatch = (a, b) => {
        if (a === b) return true;
        const targets = map.get(a);
        return targets && targets.has(b);
    };

    const m = sub.length, n = s.length;
    for (let i = 0; i <= n - m; i++) {
        let ok = true;
        for (let j = 0; j < m; j++) {
            if (!canMatch(sub[j], s[i + j])) { ok = false; break; }
        }
        if (ok) return true;
    }
    return false;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args).slice(0, 80), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(matchReplacement, ['fool3e7bar', 'leet', [['e','3'],['t','7'],['t','8']]], true);
test(matchReplacement, ['fooleetbar', 'f00l', [['o','0']]], false);
test(matchReplacement, ['Fool33tbaR', 'leetd', [['e','3'],['t','7'],['t','8'],['d','b'],['p','b']]], true);
test(matchReplacement, ['abc', 'abc', []], true);
test(matchReplacement, ['abc', 'xyz', []], false);
test(matchReplacement, ['ab', 'ba', [['a','b'],['b','a']]], true);
