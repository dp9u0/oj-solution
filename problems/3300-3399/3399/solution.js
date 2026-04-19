/*
 * @lc app=leetcode id=3399 lang=javascript
 *
 * [3399] Smallest Substring With Identical Characters II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numOps
 * @return {number}
 */
var minLength = function(s, numOps) {
    const n = s.length;

    const runs = [];
    for (let i = 0; i < n; ) {
        let j = i;
        while (j < n && s[j] === s[i]) j++;
        runs.push(j - i);
        i = j;
    }

    const check = (L) => {
        if (L === 1) {
            let cnt0 = 0, cnt1 = 0;
            for (let i = 0; i < n; i++) {
                if (+s[i] !== (i & 1)) cnt0++;
                if (+s[i] !== ((i & 1) ^ 1)) cnt1++;
            }
            return Math.min(cnt0, cnt1) <= numOps;
        }
        let flips = 0;
        for (const len of runs) flips += Math.floor(len / (L + 1));
        return flips <= numOps;
    };

    let lo = 1, hi = n;
    while (lo < hi) {
        const mid = lo + ((hi - lo) >> 1);
        if (check(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minLength("000001", 1)); // 2
console.log(minLength("0000", 2)); // 1
console.log(minLength("0101", 0)); // 1
console.log(minLength("0", 0)); // 1
console.log(minLength("00000", 1)); // 2
