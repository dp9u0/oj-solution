/*
 * @lc app=leetcode id=3261 lang=javascript
 *
 * [3261] Count Substrings That Satisfy K-Constraint II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var countKConstraintSubstrings = function(s, k, queries) {
    const n = s.length;
    const rightBound = new Int32Array(n);
    let cnt0 = 0, cnt1 = 0, j = -1;

    for (let i = 0; i < n; i++) {
        while (j + 1 < n) {
            const c = s.charCodeAt(j + 1);
            const n0 = cnt0 + (c === 48);
            const n1 = cnt1 + (c === 49);
            if (n0 > k && n1 > k) break;
            j++;
            cnt0 = n0;
            cnt1 = n1;
        }
        rightBound[i] = j;
        if (s.charCodeAt(i) === 48) cnt0--;
        else cnt1--;
    }

    const prefix = new Float64Array(n + 1);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + rightBound[i] - i + 1;
    }

    const res = [];
    for (const [l, r] of queries) {
        let lo = l, hi = r + 1;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (rightBound[mid] > r) hi = mid;
            else lo = mid + 1;
        }
        const split = lo;
        const part1 = prefix[split] - prefix[l];
        const len = r - split + 1;
        res.push(part1 + len * (len + 1) / 2);
    }

    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countKConstraintSubstrings("0001111", 2, [[0,6]]))); // [26]
console.log(JSON.stringify(countKConstraintSubstrings("010101", 1, [[0,5],[1,4],[2,3]]))); // [15,9,3]
console.log(JSON.stringify(countKConstraintSubstrings("000", 1, [[0,2]]))); // [6]
console.log(JSON.stringify(countKConstraintSubstrings("1", 1, [[0,0]]))); // [1]
console.log(JSON.stringify(countKConstraintSubstrings("010101", 2, [[0,5]]))); // [21]
