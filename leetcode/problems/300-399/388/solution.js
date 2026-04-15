/*
 * @lc app=leetcode id=388 lang=javascript
 *
 * [388] Longest Absolute File Path
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    let maxLen = 0;
    const len = [0]; // len[depth] = cumulative path length up to depth-1
    const parts = input.split('\n');
    for (const part of parts) {
        const name = part.replace(/\t/g, '');
        const depth = part.length - name.length;
        if (name.includes('.')) {
            maxLen = Math.max(maxLen, len[depth] + name.length);
        } else {
            len[depth + 1] = len[depth] + name.length + 1; // +1 for '/'
        }
    }
    return maxLen;
};
// @lc code=end

// TEST:
console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext")); // 20
console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext")); // 32
console.log(lengthLongestPath("a")); // 0
