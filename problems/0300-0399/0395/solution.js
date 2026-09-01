/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let result = 0;

    for (let unique = 1; unique <= 26; unique++) {
        const freq = new Array(26).fill(0);
        let left = 0;
        let countUnique = 0;
        let countK = 0;

        for (let right = 0; right < s.length; right++) {
            const idx = s.charCodeAt(right) - 97;
            if (freq[idx] === 0) countUnique++;
            freq[idx]++;
            if (freq[idx] === k) countK++;

            while (countUnique > unique) {
                const li = s.charCodeAt(left) - 97;
                if (freq[li] === k) countK--;
                freq[li]--;
                if (freq[li] === 0) countUnique--;
                left++;
            }

            if (countUnique === unique && countK === unique) {
                result = Math.max(result, right - left + 1);
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(longestSubstring("aaabb", 3)); // 3
console.log(longestSubstring("ababbc", 2)); // 5
console.log(longestSubstring("aaabbb", 3)); // 6
