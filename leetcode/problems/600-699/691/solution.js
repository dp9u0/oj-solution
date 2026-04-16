/*
 * @lc app=leetcode id=691 lang=javascript
 *
 * [691] Stickers to Spell Word
 */

// @lc code=start
/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    const n = target.length;
    const full = (1 << n) - 1;
    const dp = new Array(1 << n).fill(Infinity);
    dp[0] = 0;

    // Precompute letter counts for each sticker
    const stickerCounts = stickers.map(s => {
        const cnt = new Array(26).fill(0);
        for (const c of s) cnt[c.charCodeAt(0) - 97]++;
        return cnt;
    });

    for (let mask = 0; mask < full; mask++) {
        if (dp[mask] === Infinity) continue;
        for (const sc of stickerCounts) {
            const cnt = [...sc];
            let newMask = mask;
            for (let i = 0; i < n; i++) {
                if (!(mask & (1 << i))) {
                    const idx = target.charCodeAt(i) - 97;
                    if (cnt[idx] > 0) {
                        cnt[idx]--;
                        newMask |= (1 << i);
                    }
                }
            }
            dp[newMask] = Math.min(dp[newMask], dp[mask] + 1);
        }
    }

    return dp[full] === Infinity ? -1 : dp[full];
};
// @lc code=end

// TEST:
console.log(minStickers(["with","example","science"], "thehat")); // 3
console.log(minStickers(["notice","possible"], "basicbasic")); // -1
console.log(minStickers(["these","guess","about","garden","him"], "atomher")); // 3
