/*
 * @lc app=leetcode id=1960 lang=javascript
 *
 * [1960] Maximum Product of the Length of Two Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {
    const n = s.length;

    // Manacher's algorithm for odd palindromes
    const d = new Array(n).fill(0);
    let l = 0, r = -1;
    for (let i = 0; i < n; i++) {
        let k = i > r ? 0 : Math.min(d[l + r - i], r - i);
        while (i - k - 1 >= 0 && i + k + 1 < n && s[i - k - 1] === s[i + k + 1]) k++;
        d[i] = k;
        if (i + k > r) { l = i - k; r = i + k; }
    }

    // Left-to-right: maxEndAt[e] = max odd palindrome length ending at e
    const maxEndAt = new Array(n);
    const activeL = [];
    let hL = 0;
    for (let e = 0; e < n; e++) {
        activeL.push(e);
        while (hL < activeL.length && activeL[hL] + d[activeL[hL]] < e) hL++;
        maxEndAt[e] = 2 * (e - activeL[hL]) + 1;
    }

    // leftBest[i] = max palindrome length in s[0..i]
    const leftBest = new Array(n);
    leftBest[0] = 1;
    for (let i = 1; i < n; i++) leftBest[i] = Math.max(leftBest[i - 1], maxEndAt[i]);

    // Right-to-left: maxStartAt[st] = max odd palindrome length starting at st
    const maxStartAt = new Array(n);
    const activeR = [];
    let hR = 0;
    for (let st = n - 1; st >= 0; st--) {
        activeR.push(st);
        while (hR < activeR.length && activeR[hR] - d[activeR[hR]] > st) hR++;
        maxStartAt[st] = 2 * (activeR[hR] - st) + 1;
    }

    // rightBest[i] = max palindrome length in s[i..n-1]
    const rightBest = new Array(n);
    rightBest[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) rightBest[i] = Math.max(rightBest[i + 1], maxStartAt[i]);

    let result = 0;
    for (let i = 0; i < n - 1; i++) {
        result = Math.max(result, leftBest[i] * rightBest[i + 1]);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxProduct("ababbb")); // 9
console.log(maxProduct("zaaaxbbby")); // 9
console.log(maxProduct("aa")); // 1
console.log(maxProduct("aaaa")); // 3
console.log(maxProduct("abc")); // 1
console.log(maxProduct("ggbswiymmleledhdpirpwyfcjldqhwicllfnzqxfibfndk")); // expected > 0
