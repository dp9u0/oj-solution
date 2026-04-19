/*
 * @lc app=leetcode id=1147 lang=javascript
 *
 * [1147] Longest Chunked Palindrome Decomposition
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    let count = 0;
    let l = 0, r = text.length;
    let prefix = '', suffix = '';

    while (l < r) {
        prefix += text[l];
        suffix = text[r - 1] + suffix;
        l++;
        r--;
        if (l <= r && prefix === suffix) {
            count += 2;
            prefix = '';
            suffix = '';
        }
    }
    if (prefix || suffix) count += 1;
    return count;
};
// @lc code=end

// TEST:
console.log(longestDecomposition('ghiabcdefhelloadamhelloabcdefghi')); // 7
console.log(longestDecomposition('merchant'));                          // 1
console.log(longestDecomposition('antaprezatepzapreanta'));            // 11
console.log(longestDecomposition('aaa'));                               // 3 (a)(a)(a)
console.log(longestDecomposition('aaaa'));                              // 4 (a)(a)(a)(a)
console.log(longestDecomposition('ab'));                                // 1 (ab) can't split
console.log(longestDecomposition('a'));                                 // 1
