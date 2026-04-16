/*
 * @lc app=leetcode id=3713 lang=javascript
 *
 * [3713] Longest Balanced Substring I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    let n = s.length;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        let cnt = new Array(26).fill(0);
        let distinct = 0;
        for (let j = i; j < n; j++) {
            let idx = s.charCodeAt(j) - 97;
            if (cnt[idx] === 0) distinct++;
            cnt[idx]++;
            if (isBalanced(cnt, distinct)) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }
    return maxLen;
};

function isBalanced(cnt, distinct) {
    let freq = 0;
    let count = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] > 0) {
            if (freq === 0) freq = cnt[i];
            else if (cnt[i] !== freq) return false;
            count++;
        }
    }
    return count === distinct;
}
// @lc code=end

// TEST:
console.log(longestBalanced('abbac')); // 4
console.log(longestBalanced('zzabccy')); // 4
console.log(longestBalanced('aba')); // 2
