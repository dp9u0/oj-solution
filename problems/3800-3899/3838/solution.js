/*
 * @lc app=leetcode id=3838 lang=javascript
 *
 * [3838] Weighted Word Mapping
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = '';
    for (const word of words) {
        let sum = 0;
        for (const ch of word) {
            sum += weights[ch.charCodeAt(0) - 97];
        }
        result += String.fromCharCode(122 - (sum % 26));
    }
    return result;
};
// @lc code=end

// TEST:
console.log(mapWordWeights(['abcd', 'def', 'xyz'], [5,3,12,14,1,2,3,2,10,6,6,9,7,8,7,10,8,9,6,9,9,8,3,7,7,2])); // 'rij'
console.log(mapWordWeights(['a','b','c'], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])); // 'yyy'
console.log(mapWordWeights(['abcd'], [7,5,3,4,3,5,4,9,4,2,2,7,10,2,5,10,6,1,2,2,4,1,3,4,4,5])); // 'g'
