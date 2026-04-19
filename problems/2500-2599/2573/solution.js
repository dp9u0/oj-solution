/*
 * @lc app=leetcode id=2573 lang=javascript
 *
 * [2573] Find the String with LCP
 */

// @lc code=start
/**
 * @param {number[][]} lcp
 * @return {string}
 */
var findTheString = function(lcp) {
    const n = lcp.length;
    const word = new Array(n).fill('');
    let nextChar = 0; // 0='a', 1='b', ...

    // Step 1: Greedily construct the string
    for (let i = 0; i < n; i++) {
        if (word[i] !== '') continue;
        if (nextChar >= 26) return '';
        const ch = String.fromCharCode(97 + nextChar);
        nextChar++;
        // All positions j where lcp[i][j] > 0 must have the same char as i
        for (let j = i; j < n; j++) {
            if (lcp[i][j] > 0) {
                if (word[j] !== '' && word[j] !== ch) return '';
                word[j] = ch;
            }
        }
    }

    // Also handle positions where word[j] is still empty — shouldn't happen
    // but also propagate: if lcp[j][k] > 0 and word[k] is set, set word[j]
    for (let j = 0; j < n; j++) {
        if (word[j] === '') return '';
    }

    // Step 2: Validate the lcp matrix
    // Build computed lcp from bottom-right to top-left
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let expected;
            if (i === n - 1 || j === n - 1) {
                expected = word[i] === word[j] ? 1 : 0;
            } else if (word[i] === word[j]) {
                expected = lcp[i + 1][j + 1] + 1;
            } else {
                expected = 0;
            }
            if (lcp[i][j] !== expected) return '';
        }
    }

    return word.join('');
};
// @lc code=end

// TEST:
console.log(findTheString([[4,0,2,0],[0,3,0,1],[2,0,2,0],[0,1,0,1]])); // 'abab'
console.log(findTheString([[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,1]])); // 'aaaa'
console.log(findTheString([[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,3]])); // ''
