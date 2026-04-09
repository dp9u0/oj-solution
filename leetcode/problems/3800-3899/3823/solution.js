/*
 * @lc app=leetcode id=3823 lang=javascript
 *
 * [3823] Reverse Letters Then Special Characters in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    const arr = s.split('');

    // Step 1: reverse letters
    const letters = arr.filter(c => c >= 'a' && c <= 'z').reverse();
    let li = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 'a' && arr[i] <= 'z') {
            arr[i] = letters[li++];
        }
    }

    // Step 2: reverse special characters
    const specials = arr.filter(c => !(c >= 'a' && c <= 'z')).reverse();
    let si = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] >= 'a' && arr[i] <= 'z')) {
            arr[i] = specials[si++];
        }
    }

    return arr.join('');
};
// @lc code=end

// TEST:
console.log(reverseByType(')ebc#da@f(')); // '(fad@cb#e)'
console.log(reverseByType('z')); // 'z'
console.log(reverseByType('!@#$%^&*()')); // ')(*&^%$#@!'
