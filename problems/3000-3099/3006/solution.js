/*
 * @lc app=leetcode id=3006 lang=javascript
 *
 * [3006] Find Beautiful Indices in the Given Array I
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function(s, a, b, k) {
    const findMatches = (s, pat) => {
        const result = [];
        for (let i = 0; i <= s.length - pat.length; i++) {
            if (s.substring(i, i + pat.length) === pat) result.push(i);
        }
        return result;
    };

    const listA = findMatches(s, a);
    const listB = findMatches(s, b);

    if (listB.length === 0) return [];

    const result = [];
    for (const i of listA) {
        // Binary search for closest j in listB to i
        const lo = i - k, hi = i + k;
        let left = 0, right = listB.length - 1;
        // Find first j >= lo
        let found = false;
        while (left <= right) {
            const mid = (left + right) >> 1;
            if (listB[mid] >= lo) {
                if (listB[mid] <= hi) { found = true; break; }
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        if (found) result.push(i);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(beautifulIndices("isawsquirrelnearmysquirrelhouseohmy", "my", "squirrel", 15))); // [16,33]
console.log(JSON.stringify(beautifulIndices("abcd", "a", "a", 4))); // [0]
console.log(JSON.stringify(beautifulIndices("abcd", "a", "b", 4))); // [0]
console.log(JSON.stringify(beautifulIndices("abcd", "a", "z", 4))); // []
console.log(JSON.stringify(beautifulIndices("abcde", "ab", "de", 3))); // [0]
