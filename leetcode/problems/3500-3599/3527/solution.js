/*
 * @lc app=leetcode id=3527 lang=javascript
 *
 * [3527] Find the Most Common Response
 */

// @lc code=start
/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function(responses) {
    let count = {};
    for (let day of responses) {
        let seen = new Set(day);
        for (let r of seen) {
            count[r] = (count[r] || 0) + 1;
        }
    }
    let best = '';
    let maxFreq = 0;
    for (let key in count) {
        if (count[key] > maxFreq || (count[key] === maxFreq && key < best)) {
            maxFreq = count[key];
            best = key;
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(findCommonResponse([["good","ok","good","ok"],["ok","bad","good","ok","ok"],["good"],["bad"]])); // "good"
console.log(findCommonResponse([["good","ok","good"],["ok","bad"],["bad","notsure"],["great","good"]])); // "bad"
console.log(findCommonResponse([["a"],["a"]])); // "a"
