/*
 * @lc app=leetcode id=936 lang=javascript
 *
 * [936] Stamping The Sequence
 */

// @lc code=start
/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
    const m = stamp.length, n = target.length;
    const t = target.split('');
    const result = [];

    let changed = true;
    while (changed) {
        changed = false;
        for (let i = 0; i <= n - m; i++) {
            let canStamp = true;
            let hasUnstamped = false;
            for (let j = 0; j < m; j++) {
                if (t[i + j] === '?') continue;
                if (t[i + j] !== stamp[j]) { canStamp = false; break; }
                hasUnstamped = true;
            }
            if (!canStamp || !hasUnstamped) continue;
            result.push(i);
            for (let j = 0; j < m; j++) t[i + j] = '?';
            changed = true;
        }
    }

    if (t.some(c => c !== '?')) return [];
    result.reverse();
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(movesToStamp('abc', 'ababc'))); // [0,2]
console.log(JSON.stringify(movesToStamp('abca', 'aabcaca'))); // [3,0,1]
console.log(JSON.stringify(movesToStamp('aye', 'eyeye'))); // []
console.log(JSON.stringify(movesToStamp('zbs', 'zbzbsbs')));
console.log(JSON.stringify(movesToStamp('ffebb', 'fffeffebbb')));
