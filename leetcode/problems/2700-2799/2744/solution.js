/*
 * @lc app=leetcode id=2744 lang=javascript
 *
 * [2744] Find Maximum Number of String Pairs
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const seen = new Set();
    let pairs = 0;
    for (const w of words) {
        const rev = w[1] + w[0];
        if (seen.has(rev)) {
            pairs++;
            seen.delete(rev);
        } else {
            seen.add(w);
        }
    }
    return pairs;
};
// @lc code=end

// TEST:
console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"])); // 2
console.log(maximumNumberOfStringPairs(["ab","ba","cc"])); // 1
console.log(maximumNumberOfStringPairs(["aa","ab"])); // 0
