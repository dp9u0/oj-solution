/*
 * @lc app=leetcode id=1684 lang=javascript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const set = new Set(allowed);
    let ans = 0;
    for (const w of words) {
        if ([...w].every(c => set.has(c))) ans++;
    }
    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(countConsistentStrings, ['ab', ['ad', 'bd', 'aaab', 'baa', 'badab']], 2);
test(countConsistentStrings, ['abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']], 7);
test(countConsistentStrings, ['cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd']], 4);
test(countConsistentStrings, ['a', ['a', 'b', 'aa', 'ab']], 2);
test(countConsistentStrings, ['z', ['z']], 1);
