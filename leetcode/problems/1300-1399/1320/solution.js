/*
 * @lc app=leetcode id=1320 lang=javascript
 *
 * [1320] Minimum Distance to Type a Word Using Two Fingers
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    const n = word.length;
    const idx = (c) => c.charCodeAt(0) - 65;
    const getPos = (i) => [Math.floor(i / 6), i % 6];
    const dist = (a, b) => {
        const [r1, c1] = getPos(a);
        const [r2, c2] = getPos(b);
        return Math.abs(r1 - r2) + Math.abs(c1 - c2);
    };

    // dp[j] = min cost: one finger at previous char, other at position j (26 = unused)
    let dp = new Array(27).fill(Infinity);
    dp[26] = 0;

    for (let i = 1; i < n; i++) {
        const newDp = new Array(27).fill(Infinity);
        const cur = idx(word[i]);
        const prev = idx(word[i - 1]);

        for (let j = 0; j <= 26; j++) {
            if (dp[j] === Infinity) continue;
            // Same finger moves from prev to cur
            newDp[j] = Math.min(newDp[j], dp[j] + dist(prev, cur));
            // Other finger (at j) moves to cur
            const cost = j === 26 ? 0 : dist(j, cur);
            newDp[prev] = Math.min(newDp[prev], dp[j] + cost);
        }

        dp = newDp;
    }

    return Math.min(...dp);
};
// @lc code=end

// TEST:
console.log(minimumDistance("CAKE")); // 3
console.log(minimumDistance("HAPPY")); // 6
console.log(minimumDistance("AB")); // 0
