/*
 * @lc app=leetcode id=2109 lang=javascript
 *
 * [2109] Adding Spaces to a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    const result = [];
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (j < spaces.length && i === spaces[j]) {
            result.push(' ');
            j++;
        }
        result.push(s[i]);
    }
    return result.join('');
};
// @lc code=end

// TEST:
console.log(addSpaces("LeetcodeHelpsMeLearn", [8,13,15])); // "Leetcode Helps Me Learn"
console.log(addSpaces("icodeinpython", [1,5,7,9]));         // "i code in py thon"
console.log(addSpaces("spacing", [0,1,2,3,4,5,6]));         // " s p a c i n g"
