/*
 * @lc app=leetcode id=3664 lang=javascript
 *
 * [3664] Two-Letter Card Game
 */

// @lc code=start
/**
 * @param {string[]} cards
 * @param {character} x
 * @return {number}
 */
var score = function(cards, x) {
    const cnt = {};
    for (const card of cards) {
        cnt[card] = (cnt[card] || 0) + 1;
    }

    // Type 1: "xa" where a != x
    let total1 = 0, max1 = 0;
    for (let i = 0; i < 10; i++) {
        const ch = String.fromCharCode(97 + i);
        if (ch === x) continue;
        const c = cnt[x + ch] || 0;
        total1 += c;
        if (c > max1) max1 = c;
    }

    // Type 2: "ax" where a != x
    let total2 = 0, max2 = 0;
    for (let i = 0; i < 10; i++) {
        const ch = String.fromCharCode(97 + i);
        if (ch === x) continue;
        const c = cnt[ch + x] || 0;
        total2 += c;
        if (c > max2) max2 = c;
    }

    // Type 3: "xx"
    const c3 = cnt[x + x] || 0;

    const pairs = (total, maxG) => {
        if (total < 2) return 0;
        return Math.min(total >> 1, total - maxG);
    };

    let ans = 0;
    for (let k = 0; k <= c3; k++) {
        const p1 = pairs(total1 + k, Math.max(max1, k));
        const p2 = pairs(total2 + c3 - k, Math.max(max2, c3 - k));
        ans = Math.max(ans, p1 + p2);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(score(["aa","ab","ba","ac"], "a")); // 2
console.log(score(["aa","ab","ba"], "a")); // 1
console.log(score(["aa","ab","ba","ac"], "b")); // 0
console.log(score(["bb","bc","cb","bd"], "b")); // 2
