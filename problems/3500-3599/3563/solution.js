/*
 * @lc app=leetcode id=3563 lang=javascript
 *
 * [3563] Lexicographically Smallest String After Adjacent Removals
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var lexicographicallySmallestString = function(s) {
    const n = s.length;
    if (n === 0) return s;

    const isConsec = (a, b) => {
        const d = Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
        return d === 1 || d === 25;
    };

    const canEmpty = Array.from({ length: n }, () => new Uint8Array(n));

    for (let len = 2; len <= n; len += 2) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            for (let k = i + 1; k <= j; k += 2) {
                if (isConsec(s[i], s[k]) &&
                    (k === i + 1 || canEmpty[i + 1][k - 1]) &&
                    (k === j || canEmpty[k + 1][j])) {
                    canEmpty[i][j] = 1;
                    break;
                }
            }
        }
    }

    const memo = new Array(n + 1);
    memo[n] = "";

    const best = (i) => {
        if (memo[i] !== undefined) return memo[i];

        let result = null;

        for (let j = i; j < n; j++) {
            if (j === i || canEmpty[i + 1][j]) {
                const candidate = s[i] + best(j + 1);
                if (result === null || candidate < result) result = candidate;
            }
        }

        for (let j = i + 1; j < n; j++) {
            if (canEmpty[i][j]) {
                const candidate = best(j + 1);
                if (result === null || candidate < result) result = candidate;
            }
        }

        memo[i] = result;
        return result;
    };

    return best(0);
};
// @lc code=end

// TEST:
console.log(lexicographicallySmallestString("abc")); // "a"
console.log(lexicographicallySmallestString("bcda")); // ""
console.log(lexicographicallySmallestString("zdce")); // "zdce"
console.log(lexicographicallySmallestString("ab")); // ""
console.log(lexicographicallySmallestString("a")); // "a"
console.log(lexicographicallySmallestString("az")); // ""
console.log(lexicographicallySmallestString("ac")); // "ac"
