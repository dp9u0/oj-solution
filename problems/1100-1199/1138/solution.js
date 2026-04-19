/*
 * @lc app=leetcode id=1138 lang=javascript
 *
 * [1138] Alphabet Board Path
 */

// @lc code=start
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let r = 0, c = 0;
    let result = '';

    for (const ch of target) {
        const tr = Math.floor((ch.charCodeAt(0) - 97) / 5);
        const tc = (ch.charCodeAt(0) - 97) % 5;
        const dr = tr - r, dc = tc - c;

        // move up/left first (away from z's corner), then down/right
        if (dr < 0) result += 'U'.repeat(-dr);
        if (dc < 0) result += 'L'.repeat(-dc);
        if (dr > 0) result += 'D'.repeat(dr);
        if (dc > 0) result += 'R'.repeat(dc);
        result += '!';

        r = tr;
        c = tc;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(alphabetBoardPath("leet")); // "DDR!UURRR!!DDD!"
console.log(alphabetBoardPath("code")); // "RR!DDRR!UUL!R!"
