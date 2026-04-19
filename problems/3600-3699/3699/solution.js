/*
 * @lc app=leetcode id=3699 lang=javascript
 *
 * [3699] Number of ZigZag Arrays I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
    const MOD = 1e9 + 7;
    const m = r - l + 1;

    if (n === 1) return m;

    // Position 1 base case: up[w] = w, down[w] = m-1-w
    let up = new Array(m);
    let down = new Array(m);
    for (let w = 0; w < m; w++) {
        up[w] = w;
        down[w] = m - 1 - w;
    }

    for (let pos = 2; pos < n; pos++) {
        const pd = new Array(m);
        const pu = new Array(m);
        pd[0] = down[0];
        pu[0] = up[0];
        for (let i = 1; i < m; i++) {
            pd[i] = (pd[i - 1] + down[i]) % MOD;
            pu[i] = (pu[i - 1] + up[i]) % MOD;
        }
        const nu = new Array(m);
        const nd = new Array(m);
        for (let w = 0; w < m; w++) {
            nu[w] = w > 0 ? pd[w - 1] : 0;
            nd[w] = (pu[m - 1] - pu[w] + MOD) % MOD;
        }
        up = nu;
        down = nd;
    }

    let ans = 0;
    for (let v = 0; v < m; v++) {
        ans = (ans + up[v] + down[v]) % MOD;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(zigZagArrays(3, 4, 5) === 2);
console.log(zigZagArrays(3, 1, 3) === 10);
console.log(zigZagArrays(1, 1, 3) === 3);
console.log(zigZagArrays(2, 1, 3) === 6);
console.log(zigZagArrays(4, 1, 3) === 16);
