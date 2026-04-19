/*
 * @lc app=leetcode id=2375 lang=javascript
 *
 * [2375] Construct Smallest Number From DI String
 */

// @lc code=start
/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const n = pattern.length;
    let result = [];
    for (let i = 0; i <= n; i++) result.push(String(i + 1));

    let i = 0;
    while (i < n) {
        if (pattern[i] === 'D') {
            let j = i;
            while (j < n && pattern[j] === 'D') j++;
            let left = i, right = j;
            while (left < right) {
                [result[left], result[right]] = [result[right], result[left]];
                left++;
                right--;
            }
            i = j;
        } else {
            i++;
        }
    }
    return result.join('');
};
// @lc code=end

// TEST:
console.log(smallestNumber("IIIDIDDD"));  // "123549876"
console.log(smallestNumber("DDD"));        // "4321"
console.log(smallestNumber("I"));          // "12"
console.log(smallestNumber("DI"));         // "213"
console.log(smallestNumber("IID"));        // "1243"
