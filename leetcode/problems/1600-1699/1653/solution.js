/*
 * @lc app=leetcode id=1653 lang=javascript
 *
 * [1653] Minimum Deletions to Make String Balanced
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    // Count total 'a's (right side initially)
    let rightA = 0;
    for (const ch of s) {
        if (ch === 'a') rightA++;
    }

    let leftB = 0;
    let ans = rightA; // delete all 'a's (split at beginning)

    for (const ch of s) {
        if (ch === 'a') rightA--;
        else leftB++;
        // After processing ch, split point is right after current char
        ans = Math.min(ans, leftB + rightA);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minimumDeletions("aababbab"));  // 2
console.log(minimumDeletions("bbaaaaabb")); // 2
console.log(minimumDeletions("ababbbb"));   // 1
console.log(minimumDeletions("a"));         // 0
