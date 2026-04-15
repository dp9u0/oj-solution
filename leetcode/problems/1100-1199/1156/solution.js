/*
 * @lc app=leetcode id=1156 lang=javascript
 *
 * [1156] Swap For Longest Repeated Character Substring
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    const n = text.length;

    // Count frequency of each character
    const freq = new Array(26).fill(0);
    for (const ch of text) freq[ch.charCodeAt(0) - 97]++;

    // Find all consecutive groups: [char, start, length]
    const groups = [];
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && text[j] === text[i]) j++;
        groups.push([text[i], i, j - i]);
        i = j;
    }

    let ans = 0;

    for (let g = 0; g < groups.length; g++) {
        const [ch, start, len] = groups[g];
        const ci = ch.charCodeAt(0) - 97;

        // Case 1: extend this group by borrowing one from elsewhere
        ans = Math.max(ans, Math.min(len + 1, freq[ci]));

        // Case 2: merge with next group of same char (separated by exactly 1 char)
        if (g + 2 < groups.length && groups[g + 1][2] === 1 && groups[g + 2][0] === ch) {
            const merged = len + groups[g + 2][2];
            ans = Math.max(ans, Math.min(merged + 1, freq[ci]));
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxRepOpt1("ababa"));       // 3
console.log(maxRepOpt1("aaabaaa"));     // 6
console.log(maxRepOpt1("aaaaa"));       // 5
console.log(maxRepOpt1("ababaa"));      // 4
