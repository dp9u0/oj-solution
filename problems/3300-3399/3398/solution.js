/*
 * @lc app=leetcode id=3398 lang=javascript
 *
 * [3398] Smallest Substring With Identical Characters I
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numOps
 * @return {number}
 */
var minLength = function(s, numOps) {
    const n = s.length;

    // Get run lengths
    const runs = [];
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && s[j] === s[i]) j++;
        runs.push(j - i);
        i = j;
    }

    // Check if we can achieve max run length <= len
    const check = (len) => {
        if (len === 1) {
            // Must be fully alternating: check both patterns
            let ops1 = 0, ops2 = 0;
            for (let i = 0; i < n; i++) {
                const c = s.charCodeAt(i) - 48;
                if (c !== i % 2) ops1++;
                if (c !== (i + 1) % 2) ops2++;
            }
            return Math.min(ops1, ops2) <= numOps;
        }

        let ops = 0;
        for (const r of runs) {
            ops += Math.floor(r / (len + 1));
        }
        return ops <= numOps;
    };

    let lo = 1, hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (check(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minLength('000001', 1)); // 2
console.log(minLength('0000', 2)); // 1
console.log(minLength('0101', 0)); // 1
console.log(minLength('0', 0)); // 1
console.log(minLength('00000', 1)); // 2
console.log(minLength('1001', 1)); // 2
