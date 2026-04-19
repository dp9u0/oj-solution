/*
 * @lc app=leetcode id=2030 lang=javascript
 *
 * [2030] Smallest K-Length Subsequence With Occurrences of a Letter
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @param {character} letter
 * @param {number} repetition
 * @return {string}
 */
var smallestSubsequence = function(s, k, letter, repetition) {
    const n = s.length;

    const count = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        count[i] = count[i + 1] + (s[i] === letter ? 1 : 0);
    }

    const stack = [];
    let inStack = 0;

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] > s[i]) {
            if (stack.length - 1 + (n - i) < k) break;
            if (stack[stack.length - 1] === letter && (inStack - 1) + count[i] < repetition) break;
            if (stack.pop() === letter) inStack--;
        }

        if (stack.length < k) {
            const need = Math.max(0, repetition - inStack - (s[i] === letter ? 1 : 0));
            if (need <= count[i + 1] && need <= k - stack.length - 1) {
                stack.push(s[i]);
                if (s[i] === letter) inStack++;
            }
        }
    }

    return stack.join('');
};
// @lc code=end

// TEST:
console.log(smallestSubsequence("leet", 3, "e", 1)); // "eet"
console.log(smallestSubsequence("leetcode", 4, "e", 2)); // "ecde"
console.log(smallestSubsequence("bb", 2, "b", 2)); // "bb"
console.log(smallestSubsequence("ab", 1, "a", 1)); // "a"
console.log(smallestSubsequence("aaa", 2, "a", 2)); // "aa"
console.log(smallestSubsequence("cbab", 3, "a", 1)); // "bab"
