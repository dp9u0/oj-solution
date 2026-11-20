/*
 * @lc app=leetcode.cn id=1246 lang=javascript
 *
 * [1246] 删除回文子数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var minimumMoves = function(arr) {
    const n = arr.length;
    const INF = 1e9;
    // f[i][j]: min moves to clear [i..j]
    // pa[i][j]: min cost so that survivors of [i..j] form a palindrome INCLUDING i
    //           (final move NOT counted here)
    // q[i][j]:  min cost keeping an (possibly empty) palindromic survivor set in [i..j]
    const f = Array.from({ length: n }, () => new Array(n).fill(INF));
    const pa = Array.from({ length: n }, () => new Array(n).fill(INF));
    const q = Array.from({ length: n }, () => new Array(n).fill(INF));
    const sub = (m, a, b) => (a > b ? 0 : m[a][b]); // empty range costs 0

    for (let len = 1; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            // pa: S={i}, or S ends at k with palindromic middle (q) and cleared tail (f)
            let p = sub(f, i + 1, j);
            for (let k = i + 1; k <= j; k++) {
                if (arr[k] === arr[i]) {
                    p = Math.min(p, sub(q, i + 1, k - 1) + sub(f, k + 1, j));
                }
            }
            pa[i][j] = p;
            // q: no survivor, or first survivor at s
            let qq = sub(f, i, j);
            for (let s = i; s <= j; s++) {
                qq = Math.min(qq, sub(f, i, s - 1) + pa[s][j]);
            }
            q[i][j] = qq;
            // f: clear all — either arr[i] alone first, or final move over
            //    palindromic survivors starting at t (the +1 here is THE final move)
            let best = 1 + sub(f, i + 1, j);
            for (let t = i; t <= j; t++) {
                best = Math.min(best, sub(f, i, t - 1) + 1 + pa[t][j]);
            }
            f[i][j] = best;
        }
    }
    return f[0][n - 1];
};
// @lc code=end

// TEST:
console.log(minimumMoves([1,2])); // 2
console.log(minimumMoves([1,3,4,1,5])); // 3 (remove [4]; [1,3,1]; [5])
console.log(minimumMoves([1])); // 1
console.log(minimumMoves([1,2,1])); // 1
console.log(minimumMoves([1,2,1,2,1])); // 1 (whole array is a palindrome)
console.log(minimumMoves([1,1,1])); // 1
console.log(minimumMoves([1,2,2,1])); // 1
console.log(minimumMoves([1,2,3,2,1,4])); // 2 ([1,2,3,2,1] then [4])
