/*
 * @lc app=leetcode id=2836 lang=javascript
 *
 * [2836] Maximize Value of Function in a Ball Passing Game
 */

// @lc code=start
/**
 * @param {number[]} receiver
 * @param {number} k
 * @return {number}
 */
var getMaxFunctionValue = function(receiver, k) {
    const n = receiver.length;
    const LOG = 35;
    const go = Array.from({ length: LOG }, () => new Int32Array(n));
    const sum = Array.from({ length: LOG }, () => new Float64Array(n));

    for (let i = 0; i < n; i++) {
        go[0][i] = receiver[i];
        sum[0][i] = receiver[i];
    }
    for (let j = 1; j < LOG; j++) {
        for (let i = 0; i < n; i++) {
            const mid = go[j - 1][i];
            go[j][i] = go[j - 1][mid];
            sum[j][i] = sum[j - 1][i] + sum[j - 1][mid];
        }
    }

    let ans = 0;
    for (let start = 0; start < n; start++) {
        let cur = start, total = start, rem = k, j = 0;
        while (rem > 0) {
            if (rem % 2 === 1) {
                total += sum[j][cur];
                cur = go[j][cur];
            }
            rem = Math.floor(rem / 2);
            j++;
        }
        if (total > ans) ans = total;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(getMaxFunctionValue([2,0,1], 4)); // 6
console.log(getMaxFunctionValue([1,1,1,2,3], 3)); // 10
console.log(getMaxFunctionValue([0,0], 1)); // 1 (start at 1: 1+0=1)
console.log(getMaxFunctionValue([0], 10000000000)); // 0 (start at 0, always at 0)
console.log(getMaxFunctionValue([1,2,3,4,0], 5)); // 14
