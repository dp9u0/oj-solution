/*
 * @lc app=leetcode id=2055 lang=javascript
 *
 * [2055] Plates Between Candles
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
    const n = s.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + (s[i] === '*' ? 1 : 0);
    }

    const leftCandle = new Array(n).fill(-1);
    const rightCandle = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        if (s[i] === '|') leftCandle[i] = i;
        else leftCandle[i] = i > 0 ? leftCandle[i - 1] : -1;
    }

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '|') rightCandle[i] = i;
        else rightCandle[i] = i < n - 1 ? rightCandle[i + 1] : -1;
    }

    const result = [];
    for (const [l, r] of queries) {
        const a = rightCandle[l];
        const b = leftCandle[r];
        if (a === -1 || b === -1 || a >= b) {
            result.push(0);
        } else {
            result.push(prefix[b + 1] - prefix[a]);
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(platesBetweenCandles("**|**|***|", [[2,5],[5,9]]))); // [2,3]
console.log(JSON.stringify(platesBetweenCandles("***|**|*****|**||**|*", [[1,17],[4,5],[14,17],[5,11],[15,16]]))); // [9,0,0,0,0]
